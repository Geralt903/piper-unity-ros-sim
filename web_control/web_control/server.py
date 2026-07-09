#!/usr/bin/env python3
import argparse
import copy
import json
import math
import mimetypes
import os
import signal
import threading
import time
import xml.etree.ElementTree as ET
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse


ROOT = Path(__file__).resolve().parent
PROJECT_ROOT = ROOT.parents[1]
FRONTEND_DIST = Path(os.environ.get(
    "PIPER_FRONTEND_DIST",
    str(PROJECT_ROOT / "web_control" / "frontend" / "dist"),
))
POINTS_FILE = ROOT / "points.json"
PRESETS_FILE = ROOT / "presets.json"
PLANNING_PRESETS_FILE = ROOT / "planning_presets.json"
MANUAL_COLLISION_FILE = ROOT / "manual_collision_boxes.json"
WORKSPACE_BOUNDS_FILE = ROOT / "workspace_bounds.json"
LOG_FILE = ROOT / "web_control.log"
URDF_FILE = PROJECT_ROOT / "Assets" / "URDF" / "piper_description" / "urdf" / "piper_description.urdf"
URDF_MESH_DIR = PROJECT_ROOT / "Assets" / "URDF" / "piper_description" / "meshes"

HOST = os.environ.get("WEB_CONTROL_HOST", "0.0.0.0")
PORT = int(os.environ.get("WEB_CONTROL_PORT", "8765"))
FRAME_ID = os.environ.get("FRAME_ID", "base_link")
GROUP_NAME = os.environ.get("MOVE_GROUP_NAME", "arm")
TIP_LINK = os.environ.get("TIP_LINK", "link6")
MOVE_ACTION = os.environ.get("MOVE_ACTION", "/move_action")
TRAJECTORY_ACTION = os.environ.get("ACTION_NAME", "/arm_controller/follow_joint_trajectory")
JOINT_FEEDBACK_TOPIC = os.environ.get("JOINT_FEEDBACK_TOPIC", "/joint_states_feedback")
JOINT_STATE_TOPIC = os.environ.get("JOINT_STATE_TOPIC", "/joint_states")
JOINT_COMMAND_TOPIC = os.environ.get("JOINT_COMMAND_TOPIC", "/joint_ctrl_cmd")
ENABLE_COMMAND_TOPIC = os.environ.get("ENABLE_COMMAND_TOPIC", "/enable_cmd")
ARM_STATUS_TOPIC = os.environ.get("ARM_STATUS_TOPIC", "/arm_status")
END_POSE_TOPIC = os.environ.get("END_POSE_TOPIC", "/link6_pose")
DEFAULT_SPEED_PERCENT = float(os.environ.get("PIPER_WEB_SPEED_PERCENT", "30.0"))
GRIPPER_OPEN_METERS = float(os.environ.get("PIPER_GRIPPER_OPEN_METERS", "0.08"))
GRIPPER_CLOSED_METERS = float(os.environ.get("PIPER_GRIPPER_CLOSED_METERS", "0.0"))
JOINT_NAMES = [f"joint{i}" for i in range(1, 7)]
COMMAND_NAMES = JOINT_NAMES + ["gripper"]
OMPL_DEFAULT = {
    "planner_id": os.environ.get("PIPER_OMPL_PLANNER_ID", "RRTConnectkConfigDefault"),
    "planning_time": float(os.environ.get("PIPER_OMPL_PLANNING_TIME", "3.0")),
    "attempts": int(os.environ.get("PIPER_OMPL_ATTEMPTS", "1")),
    "ik_timeout": float(os.environ.get("PIPER_OMPL_IK_TIMEOUT", "0.6")),
}

try:
    import rclpy
    from control_msgs.action import FollowJointTrajectory
    from geometry_msgs.msg import Pose, PoseStamped
    from moveit_msgs.action import MoveGroup
    from moveit_msgs.msg import (
        Constraints,
        MotionPlanRequest,
        OrientationConstraint,
        PlanningOptions,
        PlanningScene,
        PositionConstraint,
        RobotState,
    )
    from rclpy.action import ActionClient
    from rclpy.node import Node
    from sensor_msgs.msg import JointState
    from shape_msgs.msg import SolidPrimitive
    from std_msgs.msg import Bool
except Exception as exc:  # pragma: no cover - depends on ROS runtime
    rclpy = None
    ROS_IMPORT_ERROR = exc
else:
    ROS_IMPORT_ERROR = None

try:
    from moveit_msgs.msg import MoveItErrorCodes
except Exception:  # pragma: no cover - optional constant helper
    MoveItErrorCodes = None

try:
    from piper_msgs.msg import PiperStatusMsg
except Exception:  # pragma: no cover - optional custom message
    PiperStatusMsg = None


def log_event(level, message, data=None):
    ROOT.mkdir(parents=True, exist_ok=True)
    record = {
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "level": str(level).upper(),
        "message": str(message),
    }
    if data is not None:
        record["data"] = data
    try:
        with LOG_FILE.open("a", encoding="utf-8") as file:
            file.write(json.dumps(record, ensure_ascii=False) + "\n")
    except OSError:
        pass


def recent_logs(limit=200):
    if not LOG_FILE.exists():
        return []
    lines = LOG_FILE.read_text(encoding="utf-8", errors="replace").splitlines()[-int(limit):]
    rows = []
    for line in lines:
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError:
            rows.append({"time": "", "level": "INFO", "message": line})
    return rows


def read_json_file(path, fallback):
    if not path.exists():
        return copy.deepcopy(fallback)
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        log_event("ERROR", f"failed to read {path.name}", {"error": str(exc)})
        return copy.deepcopy(fallback)


def write_json_file(path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def finite_float(value, fallback=0.0):
    try:
        number = float(value)
    except (TypeError, ValueError):
        return fallback
    return number if math.isfinite(number) else fallback


def clamp(value, low, high):
    return max(low, min(high, value))


def duration_to_sec(duration):
    return float(getattr(duration, "sec", 0)) + float(getattr(duration, "nanosec", 0)) * 1e-9


def quat_from_rpy(roll, pitch, yaw):
    cr = math.cos(roll * 0.5)
    sr = math.sin(roll * 0.5)
    cp = math.cos(pitch * 0.5)
    sp = math.sin(pitch * 0.5)
    cy = math.cos(yaw * 0.5)
    sy = math.sin(yaw * 0.5)
    return {
        "w": cr * cp * cy + sr * sp * sy,
        "x": sr * cp * cy - cr * sp * sy,
        "y": cr * sp * cy + sr * cp * sy,
        "z": cr * cp * sy - sr * sp * cy,
    }


def quat_to_rpy(q):
    x = finite_float(q.get("x"), 0.0)
    y = finite_float(q.get("y"), 0.0)
    z = finite_float(q.get("z"), 0.0)
    w = finite_float(q.get("w"), 1.0)
    sinr_cosp = 2.0 * (w * x + y * z)
    cosr_cosp = 1.0 - 2.0 * (x * x + y * y)
    roll = math.atan2(sinr_cosp, cosr_cosp)
    sinp = 2.0 * (w * y - z * x)
    pitch = math.copysign(math.pi / 2.0, sinp) if abs(sinp) >= 1 else math.asin(sinp)
    siny_cosp = 2.0 * (w * z + x * y)
    cosy_cosp = 1.0 - 2.0 * (y * y + z * z)
    yaw = math.atan2(siny_cosp, cosy_cosp)
    return roll, pitch, yaw


def load_joint_limits():
    limits = []
    if not URDF_FILE.exists():
        return [{"enabled": True, "lower": -math.pi, "upper": math.pi} for _ in JOINT_NAMES]
    try:
        root = ET.fromstring(URDF_FILE.read_text(encoding="utf-8"))
        by_name = {}
        for joint in root.findall("joint"):
            name = joint.get("name")
            limit = joint.find("limit")
            if not name or limit is None:
                continue
            by_name[name] = {
                "enabled": True,
                "lower": finite_float(limit.get("lower"), -math.pi),
                "upper": finite_float(limit.get("upper"), math.pi),
            }
        for name in JOINT_NAMES:
            limits.append(by_name.get(name, {"enabled": True, "lower": -math.pi, "upper": math.pi}))
    except Exception as exc:
        log_event("ERROR", "failed to parse Piper URDF limits", {"error": str(exc)})
        limits = [{"enabled": True, "lower": -math.pi, "upper": math.pi} for _ in JOINT_NAMES]
    return limits


JOINT_LIMITS_RAD = load_joint_limits()


def patched_urdf_text():
    text = URDF_FILE.read_text(encoding="utf-8")
    return text.replace("package://piper_description/meshes/", "meshes/")


class PiperWebBridge(Node if rclpy is not None else object):
    def __init__(self):
        if rclpy is None:
            raise RuntimeError(f"ROS2 Python imports unavailable: {ROS_IMPORT_ERROR}")
        super().__init__("piper_web_control")
        self._lock = threading.Lock()
        self._latest_joint_state = None
        self._feedback_source = None
        self._arm_status = None
        self._link_pose = None
        self._last_plan = {"right": None, "left": None}
        self._last_trajectory = None
        self._last_trajectory_arm = "right"
        self._status = {"right": "ready", "left": "piper 单臂模式"}
        self._topics = []

        self.create_subscription(JointState, JOINT_FEEDBACK_TOPIC, lambda msg: self._on_joint_state(msg, JOINT_FEEDBACK_TOPIC), 10)
        self.create_subscription(JointState, JOINT_STATE_TOPIC, lambda msg: self._on_joint_state(msg, JOINT_STATE_TOPIC), 10)
        self.create_subscription(PoseStamped, END_POSE_TOPIC, self._on_link_pose, 10)
        if PiperStatusMsg is not None:
            self.create_subscription(PiperStatusMsg, ARM_STATUS_TOPIC, self._on_arm_status, 10)

        self._joint_command_pub = self.create_publisher(JointState, JOINT_COMMAND_TOPIC, 10)
        self._enable_pub = self.create_publisher(Bool, ENABLE_COMMAND_TOPIC, 10)
        self._move_client = ActionClient(self, MoveGroup, MOVE_ACTION)
        self._trajectory_client = ActionClient(self, FollowJointTrajectory, TRAJECTORY_ACTION)
        self.create_timer(1.0, self._refresh_topics)

    def _refresh_topics(self):
        try:
            self._topics = [name for name, _types in self.get_topic_names_and_types()]
        except Exception:
            self._topics = []

    def _on_joint_state(self, msg, source):
        with self._lock:
            if self._feedback_source == JOINT_FEEDBACK_TOPIC and source != JOINT_FEEDBACK_TOPIC:
                return
            self._latest_joint_state = msg
            self._feedback_source = source

    def _on_arm_status(self, msg):
        with self._lock:
            self._arm_status = {
                "ok": True,
                "ctrl_mode": int(msg.ctrl_mode),
                "arm_status": int(msg.arm_status),
                "mode_feedback": int(msg.mode_feedback),
                "teach_status": int(msg.teach_status),
                "motion_status": int(msg.motion_status),
                "trajectory_num": int(msg.trajectory_num),
                "err_code": int(msg.err_code),
                "received_at": time.time(),
            }

    def _on_link_pose(self, msg):
        q = {
            "x": float(msg.pose.orientation.x),
            "y": float(msg.pose.orientation.y),
            "z": float(msg.pose.orientation.z),
            "w": float(msg.pose.orientation.w),
        }
        roll, pitch, yaw = quat_to_rpy(q)
        with self._lock:
            self._link_pose = {
                "ok": True,
                "frame_id": msg.header.frame_id or FRAME_ID,
                "position": [
                    float(msg.pose.position.x),
                    float(msg.pose.position.y),
                    float(msg.pose.position.z),
                ],
                "orientation": [q["x"], q["y"], q["z"], q["w"]],
                "pose": {
                    "x": float(msg.pose.position.x),
                    "y": float(msg.pose.position.y),
                    "z": float(msg.pose.position.z),
                    "roll": roll,
                    "pitch": pitch,
                    "yaw": yaw,
                },
                "received_at": time.time(),
            }

    def _joint_state_payload(self):
        with self._lock:
            msg = self._latest_joint_state
            source = self._feedback_source
        if msg is None:
            return None
        return {
            "stamp": duration_to_sec(msg.header.stamp),
            "name": list(msg.name),
            "position": [float(value) for value in msg.position],
            "velocity": [float(value) for value in msg.velocity],
            "effort": [float(value) for value in msg.effort],
            "source": source,
        }

    def current_state(self):
        joint_state = self._joint_state_payload()
        with self._lock:
            last_plan = copy.deepcopy(self._last_plan)
            status = dict(self._status)
        return {
            "ok": True,
            "status": status,
            "joint_state": joint_state,
            "last_plan": last_plan,
        }

    def status_payload(self):
        state = self.current_state()
        with self._lock:
            link_pose = copy.deepcopy(self._link_pose)
            arm_status = copy.deepcopy(self._arm_status)
        state.update({
            "ros": {"ok": True, "message": "rclpy bridge ok"},
            "topics": list(self._topics),
            "link_pose": link_pose or {"ok": False, "fresh": False, "error": f"waiting for {END_POSE_TOPIC}"},
            "feedback": {
                "ok": state["joint_state"] is not None,
                "source": state["joint_state"].get("source") if state["joint_state"] else JOINT_FEEDBACK_TOPIC,
                "fresh": state["joint_state"] is not None,
            },
            "arm_status": arm_status or {"ok": False, "error": f"waiting for {ARM_STATUS_TOPIC}"},
        })
        return state

    def robot_state(self):
        with self._lock:
            arm_status = copy.deepcopy(self._arm_status)
        enabled = None
        if arm_status and arm_status.get("ok"):
            enabled = bool(arm_status.get("arm_status"))
        return {
            "ok": True,
            "state": {
                "right": {
                    "motors_enabled": enabled,
                    "estop_active": False if enabled is not None else None,
                    "ns": "piper",
                },
                "left": {
                    "motors_enabled": None,
                    "estop_active": None,
                    "ns": "unused",
                },
            },
        }

    def link_positions(self, _arm="right"):
        with self._lock:
            link_pose = copy.deepcopy(self._link_pose)
        if not link_pose:
            return {"ok": True, "frame": FRAME_ID, "arm": "right", "links": []}
        link = {
            "name": TIP_LINK,
            "position": link_pose["position"],
            "orientation": link_pose["orientation"],
        }
        return {"ok": True, "frame": FRAME_ID, "arm": "right", "links": [link], "stamp": link_pose["received_at"]}

    def _current_positions(self):
        joint_state = self._joint_state_payload()
        values = [0.0] * 7
        if joint_state:
            by_name = dict(zip(joint_state["name"], joint_state["position"]))
            for index, name in enumerate(COMMAND_NAMES):
                values[index] = finite_float(by_name.get(name), 0.0)
        return values

    def _publish_joint_command(self, positions, speed_percent=DEFAULT_SPEED_PERCENT, effort=1.0):
        msg = JointState()
        msg.header.stamp = self.get_clock().now().to_msg()
        msg.name = list(COMMAND_NAMES)
        msg.position = [float(value) for value in positions[:7]]
        msg.velocity = [0.0] * 6 + [float(speed_percent)]
        msg.effort = [0.0] * 6 + [float(effort)]
        self._joint_command_pub.publish(msg)

    def set_enable(self, enabled=True):
        msg = Bool()
        msg.data = bool(enabled)
        self._enable_pub.publish(msg)
        with self._lock:
            self._status["right"] = "enabled" if enabled else "disabled"
        return {"ok": True, "arm": "right", "enabled": bool(enabled)}

    def home_zero(self, body):
        positions = [0.0] * 7
        speed = 100.0 * clamp(finite_float(body.get("velocity_scaling"), 0.05), 0.01, 1.0)
        self.set_enable(True)
        self._publish_joint_command(positions, speed_percent=speed)
        summary = {
            "ok": True,
            "mode": "direct joint home",
            "points": 1,
            "duration": 1.0,
            "ompl": {"planner_id": "direct", "planning_time": 0.0, "attempts": 1},
        }
        with self._lock:
            self._last_plan["right"] = summary
            self._status["right"] = "home command sent"
        log_event("INFO", "Piper home command sent", summary)
        return {"ok": True, "plan": summary, "execute": {"ok": True, "error_code": 0}}

    def jog_joint(self, body):
        joint = int(body.get("joint", 1))
        if joint < 1 or joint > 6:
            raise ValueError("Piper 只有 1 到 6 号转动关节")
        delta = finite_float(body.get("delta_rad"), 0.0)
        if abs(delta) > math.radians(8.0):
            raise ValueError("单次关节微动不能超过 8 度")
        positions = self._current_positions()
        axis = joint - 1
        lower = JOINT_LIMITS_RAD[axis]["lower"]
        upper = JOINT_LIMITS_RAD[axis]["upper"]
        positions[axis] = clamp(positions[axis] + delta, lower, upper)
        speed = 100.0 * clamp(finite_float(body.get("velocity_scaling"), 0.15), 0.01, 1.0)
        self._publish_joint_command(positions, speed_percent=speed)
        with self._lock:
            self._status["right"] = f"jog J{joint}"
        return {
            "ok": True,
            "arm": "right",
            "joint": joint,
            "joint_name": JOINT_NAMES[axis],
            "delta_rad": delta,
            "target_rad": positions[axis],
            "duration_sec": finite_float(body.get("duration_sec"), 0.25),
        }

    def set_gripper(self, body):
        action = str(body.get("action", "open")).lower()
        opening = GRIPPER_OPEN_METERS if action in {"open", "release"} else GRIPPER_CLOSED_METERS
        if "opening_m" in body:
            opening = clamp(finite_float(body.get("opening_m"), opening), 0.0, 0.08)
        positions = self._current_positions()
        positions[6] = opening
        self._publish_joint_command(positions, effort=finite_float(body.get("effort"), 1.0))
        with self._lock:
            self._status["right"] = f"gripper {action}"
        return {"ok": True, "arm": "right", "state": "open" if opening > 0.02 else "closed", "opening_m": opening}

    def gripper_state(self):
        positions = self._current_positions()
        opening = positions[6]
        return {"ok": True, "arm": "right", "state": "open" if opening > 0.02 else "closed", "opening_m": opening}

    def _wait_future(self, future, timeout_sec):
        deadline = time.monotonic() + float(timeout_sec)
        while not future.done() and time.monotonic() < deadline:
            time.sleep(0.01)
        return future.done()

    def _make_pose_stamped(self, body):
        pose = PoseStamped()
        pose.header.frame_id = FRAME_ID
        pose.header.stamp = self.get_clock().now().to_msg()
        pose.pose.position.x = finite_float(body.get("x"), 0.3)
        pose.pose.position.y = finite_float(body.get("y"), 0.0)
        pose.pose.position.z = finite_float(body.get("z"), 0.35)
        q = body.get("orientation")
        if isinstance(q, dict):
            quat = {
                "x": finite_float(q.get("x"), 0.0),
                "y": finite_float(q.get("y"), 0.0),
                "z": finite_float(q.get("z"), 0.0),
                "w": finite_float(q.get("w"), 1.0),
            }
        else:
            quat = quat_from_rpy(
                finite_float(body.get("roll"), 0.0),
                finite_float(body.get("pitch"), 0.0),
                finite_float(body.get("yaw"), 0.0),
            )
        pose.pose.orientation.x = quat["x"]
        pose.pose.orientation.y = quat["y"]
        pose.pose.orientation.z = quat["z"]
        pose.pose.orientation.w = quat["w"]
        return pose

    def _make_goal_constraints(self, target, body):
        constraints = Constraints()

        position_constraint = PositionConstraint()
        position_constraint.header = target.header
        position_constraint.link_name = TIP_LINK
        position_constraint.weight = 1.0
        sphere = SolidPrimitive()
        sphere.type = SolidPrimitive.SPHERE
        sphere.dimensions = [max(0.001, finite_float(body.get("position_tolerance"), 0.005))]
        position_constraint.constraint_region.primitives.append(sphere)
        region_pose = Pose()
        region_pose.position = target.pose.position
        region_pose.orientation.w = 1.0
        position_constraint.constraint_region.primitive_poses.append(region_pose)
        constraints.position_constraints.append(position_constraint)

        if not bool(body.get("position_only", True)):
            orientation_constraint = OrientationConstraint()
            orientation_constraint.header = target.header
            orientation_constraint.link_name = TIP_LINK
            orientation_constraint.orientation = target.pose.orientation
            tolerance = max(0.01, finite_float(body.get("orientation_tolerance"), 0.5))
            orientation_constraint.absolute_x_axis_tolerance = tolerance
            orientation_constraint.absolute_y_axis_tolerance = tolerance
            orientation_constraint.absolute_z_axis_tolerance = tolerance
            orientation_constraint.weight = 1.0
            constraints.orientation_constraints.append(orientation_constraint)

        return constraints

    def _make_start_state(self):
        joint_state = self._joint_state_payload()
        state = RobotState()
        if not joint_state:
            state.is_diff = True
            return state
        by_name = dict(zip(joint_state["name"], joint_state["position"]))
        for name in JOINT_NAMES:
            if name in by_name:
                state.joint_state.name.append(name)
                state.joint_state.position.append(float(by_name[name]))
        state.is_diff = True
        return state

    def plan_pose(self, body):
        if not self._move_client.wait_for_server(timeout_sec=2.0):
            raise RuntimeError(f"MoveGroup action not ready: {MOVE_ACTION}")

        target = self._make_pose_stamped(body)
        request = MotionPlanRequest()
        request.group_name = GROUP_NAME
        request.pipeline_id = "ompl"
        planner_id = str(body.get("planner_id") or body.get("planner") or OMPL_DEFAULT["planner_id"])
        if planner_id and planner_id != "default":
            request.planner_id = planner_id
        request.allowed_planning_time = max(0.1, finite_float(body.get("planning_time"), OMPL_DEFAULT["planning_time"]))
        request.num_planning_attempts = max(1, int(finite_float(body.get("attempts"), OMPL_DEFAULT["attempts"])))
        request.max_velocity_scaling_factor = clamp(finite_float(body.get("velocity_scaling"), 0.05), 0.01, 1.0)
        request.max_acceleration_scaling_factor = clamp(finite_float(body.get("acceleration_scaling"), 0.05), 0.01, 1.0)
        request.start_state = self._make_start_state()
        request.goal_constraints = [self._make_goal_constraints(target, body)]

        planning_scene_diff = PlanningScene()
        planning_scene_diff.is_diff = True
        planning_scene_diff.robot_state = RobotState()
        planning_scene_diff.robot_state.is_diff = True

        options = PlanningOptions()
        options.plan_only = True
        options.look_around = False
        options.replan = False
        options.planning_scene_diff = planning_scene_diff

        goal = MoveGroup.Goal()
        goal.request = request
        goal.planning_options = options

        started = time.monotonic()
        send_future = self._move_client.send_goal_async(goal)
        if not self._wait_future(send_future, 5.0):
            raise RuntimeError("MoveGroup goal send timeout")
        goal_handle = send_future.result()
        if goal_handle is None or not goal_handle.accepted:
            raise RuntimeError("MoveGroup goal rejected")

        result_future = goal_handle.get_result_async()
        timeout = request.allowed_planning_time + 10.0
        if not self._wait_future(result_future, timeout):
            raise RuntimeError("MoveGroup planning timeout")
        result = result_future.result().result
        code = int(result.error_code.val)
        if MoveItErrorCodes is not None and code != int(MoveItErrorCodes.SUCCESS):
            raise RuntimeError(f"MoveIt planning failed: error_code={code}")
        if MoveItErrorCodes is None and code != 1:
            raise RuntimeError(f"MoveIt planning failed: error_code={code}")

        trajectory = result.planned_trajectory.joint_trajectory
        points = len(trajectory.points)
        if points <= 0:
            raise RuntimeError("MoveIt returned an empty trajectory")
        duration = duration_to_sec(trajectory.points[-1].time_from_start)
        summary = {
            "ok": True,
            "mode": "MoveIt plan-only",
            "group": GROUP_NAME,
            "tip": TIP_LINK,
            "points": points,
            "duration": duration,
            "elapsed_ms": round((time.monotonic() - started) * 1000.0, 1),
            "target": {
                "x": target.pose.position.x,
                "y": target.pose.position.y,
                "z": target.pose.position.z,
            },
            "ompl": {
                "planner_id": request.planner_id or "default",
                "planning_time": request.allowed_planning_time,
                "attempts": request.num_planning_attempts,
            },
            "grasp_orientation": {
                "mode": body.get("grasp_orientation_mode", "position_only"),
                "candidate_index": 1,
                "roll": finite_float(body.get("roll"), 0.0),
                "pitch": finite_float(body.get("pitch"), 0.0),
                "yaw": finite_float(body.get("yaw"), 0.0),
            },
        }
        with self._lock:
            self._last_trajectory = copy.deepcopy(trajectory)
            self._last_trajectory_arm = "right"
            self._last_plan["right"] = summary
            self._status["right"] = "planned"
        log_event("INFO", "Piper plan ready", summary)
        return {"ok": True, "plan": summary}

    def execute_last_plan(self, _body=None):
        with self._lock:
            trajectory = copy.deepcopy(self._last_trajectory)
            plan = copy.deepcopy(self._last_plan["right"])
        if trajectory is None:
            raise RuntimeError("没有可执行的缓存规划，请先点击开始规划")
        if not self._trajectory_client.wait_for_server(timeout_sec=2.0):
            raise RuntimeError(f"trajectory action not ready: {TRAJECTORY_ACTION}")
        goal = FollowJointTrajectory.Goal()
        goal.trajectory = trajectory
        send_future = self._trajectory_client.send_goal_async(goal)
        if not self._wait_future(send_future, 5.0):
            raise RuntimeError("trajectory goal send timeout")
        goal_handle = send_future.result()
        if goal_handle is None or not goal_handle.accepted:
            raise RuntimeError("trajectory goal rejected")
        result_future = goal_handle.get_result_async()
        timeout = max(10.0, float(plan.get("duration", 0.0)) + 10.0 if plan else 30.0)
        if not self._wait_future(result_future, timeout):
            raise RuntimeError("trajectory execution timeout")
        result = result_future.result().result
        error_code = int(getattr(result, "error_code", 0))
        with self._lock:
            self._status["right"] = "executed" if error_code == 0 else f"execute error {error_code}"
        log_event("INFO", "Piper trajectory executed", {"error_code": error_code})
        return {"ok": error_code == 0, "error_code": error_code, "plan": plan}


BRIDGE = None


def start_ros_bridge():
    global BRIDGE
    if rclpy is None:
        log_event("ERROR", "ROS bridge unavailable", {"error": str(ROS_IMPORT_ERROR)})
        return None
    try:
        rclpy.init(args=None)
    except RuntimeError:
        pass
    BRIDGE = PiperWebBridge()

    def spin():
        try:
            while rclpy.ok():
                rclpy.spin_once(BRIDGE, timeout_sec=0.1)
        except Exception as exc:
            log_event("ERROR", "ROS bridge spin failed", {"error": str(exc)})

    thread = threading.Thread(target=spin, name="piper-web-ros", daemon=True)
    thread.start()
    log_event("INFO", "Piper ROS web bridge started")
    return BRIDGE


def require_bridge():
    if BRIDGE is None:
        raise RuntimeError(f"ROS bridge unavailable: {ROS_IMPORT_ERROR}")
    return BRIDGE


def ompl_config_response():
    presets = [
        {
            "id": "recommended",
            "label": "Piper 推荐",
            "description": "RRTConnect，短规划时间，适合 Unity 仿真交互。",
            "config": dict(OMPL_DEFAULT),
        },
        {
            "id": "balanced",
            "label": "均衡",
            "description": "稍长规划时间，提高复杂目标成功率。",
            "config": {**OMPL_DEFAULT, "planning_time": 5.0, "attempts": 2},
        },
    ]
    planners = [
        {
            "planner_id": "RRTConnectkConfigDefault",
            "label": "RRTConnect",
            "description": "默认交互规划器",
        },
        {
            "planner_id": "RRTstarkConfigDefault",
            "label": "RRTstar",
            "description": "更慢，适合对比测试",
        },
        {
            "planner_id": "LBKPIECEkConfigDefault",
            "label": "LBKPIECE",
            "description": "窄空间探索",
        },
    ]
    return {
        "ok": True,
        "path": "runtime",
        "defaults": dict(OMPL_DEFAULT),
        "recommended": presets[0],
        "presets": read_json_file(PLANNING_PRESETS_FILE, presets),
        "planners": planners,
    }


def joint_config_response():
    limits = JOINT_LIMITS_RAD
    raw_min = [round(math.degrees(item["lower"]), 3) for item in limits]
    raw_max = [round(math.degrees(item["upper"]), 3) for item in limits]
    return {
        "ok": True,
        "arm": "right",
        "files": {"bridge": "Piper URDF"},
        "joint_names": list(JOINT_NAMES),
        "zero_offsets": [0] * len(JOINT_NAMES),
        "limit_enabled": [True] * len(JOINT_NAMES),
        "raw_limit_a": raw_min,
        "raw_limit_b": raw_max,
        "joint_limits_rad": limits,
    }


def workspace_bounds_response():
    default = {
        "right": {"enabled": False, "min": [-0.55, -0.55, 0.02], "max": [0.65, 0.55, 0.75]},
        "left": {"enabled": False, "min": [-0.55, -0.55, 0.02], "max": [0.65, 0.55, 0.75]},
    }
    data = read_json_file(WORKSPACE_BOUNDS_FILE, default)
    data.setdefault("right", default["right"])
    data.setdefault("left", default["left"])
    return {"ok": True, "bounds": data, **data}


def disabled_feature(name):
    return {"ok": False, "error": f"{name} 尚未在 Piper Unity 第一版中启用"}


def benchmark_options():
    return {
        "ok": True,
        "arm": "right",
        "max_samples": 120,
        "defaults": {
            "box_top_count": 0,
            "box_top_offset_cm": 5,
            "edge_count": 0,
            "edge_distance_cm": 5,
            "random_count": 10,
            "planning_time": OMPL_DEFAULT["planning_time"],
            "attempts": OMPL_DEFAULT["attempts"],
            "ik_timeout": OMPL_DEFAULT["ik_timeout"],
        },
        "planners": ompl_config_response()["planners"],
        "collision_boxes": read_json_file(MANUAL_COLLISION_FILE, []),
        "workspace_bounds": workspace_bounds_response()["right"],
    }


class Handler(BaseHTTPRequestHandler):
    def handle(self):
        try:
            super().handle()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, _format, *args):
        return

    def _send_json(self, payload, status=200):
        encoded = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        if not getattr(self, "_head_only", False):
            self.wfile.write(encoded)

    def _send_text(self, text, content_type="text/plain; charset=utf-8", status=200):
        encoded = text.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        if not getattr(self, "_head_only", False):
            self.wfile.write(encoded)

    def _send_file(self, path):
        content_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(path.stat().st_size))
        self.send_header("Cache-Control", "public, max-age=3600")
        self.end_headers()
        if getattr(self, "_head_only", False):
            return
        with path.open("rb") as file:
            while True:
                chunk = file.read(1024 * 128)
                if not chunk:
                    break
                try:
                    self.wfile.write(chunk)
                except (BrokenPipeError, ConnectionResetError):
                    break

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        content_type = self.headers.get("Content-Type", "")
        if "application/json" in content_type:
            return json.loads(raw.decode("utf-8") or "{}")
        parsed = parse_qs(raw.decode("utf-8"), keep_blank_values=True)
        return {key: values[-1] if values else "" for key, values in parsed.items()}

    def _serve_static(self, request_path):
        if request_path in ("", "/"):
            request_path = "/index.html"
        path = (FRONTEND_DIST / request_path.lstrip("/")).resolve()
        root = FRONTEND_DIST.resolve()
        if root not in path.parents and path != root:
            self.send_error(403)
            return
        if path.is_dir():
            path = path / "index.html"
        if path.exists() and path.is_file():
            self._send_file(path)
            return
        index = FRONTEND_DIST / "index.html"
        if index.exists():
            self._send_file(index)
        else:
            self._send_text(
                "Frontend build not found. Run: cd web_control/frontend && npm install && npm run build\n",
                status=503,
            )

    def _serve_urdf(self, path):
        if path == "/urdf/piper_description.urdf":
            if not URDF_FILE.exists():
                self.send_error(404)
                return
            self._send_text(patched_urdf_text(), "application/xml; charset=utf-8")
            return
        if path.startswith("/urdf/meshes/"):
            name = Path(unquote(path)).name
            mesh = (URDF_MESH_DIR / name).resolve()
            if URDF_MESH_DIR.resolve() in mesh.parents and mesh.exists() and mesh.is_file():
                self._send_file(mesh)
                return
        self.send_error(404)

    def do_GET(self):
        path = urlparse(self.path).path
        query = parse_qs(urlparse(self.path).query)
        try:
            if path.startswith("/api/"):
                self._handle_get_api(path, query)
            elif path.startswith("/urdf/"):
                self._serve_urdf(path)
            else:
                self._serve_static(path)
        except Exception as exc:
            log_event("ERROR", f"GET {path} failed", {"error": str(exc)})
            self._send_json({"ok": False, "error": str(exc)}, 500)

    def do_HEAD(self):
        self._head_only = True
        try:
            self.do_GET()
        finally:
            self._head_only = False

    def do_POST(self):
        path = urlparse(self.path).path
        try:
            body = self._read_json_body()
            self._handle_post_api(path, body)
        except Exception as exc:
            log_event("ERROR", f"POST {path} failed", {"error": str(exc)})
            self._send_json({"ok": False, "error": str(exc)}, 500)

    def _handle_get_api(self, path, query):
        if path == "/api/status":
            bridge = BRIDGE
            self._send_json(bridge.status_payload() if bridge else {"ok": False, "error": str(ROS_IMPORT_ERROR), "status": {"right": "offline", "left": "unused"}, "joint_state": None, "last_plan": {"right": None, "left": None}})
        elif path == "/api/robot_state":
            self._send_json(require_bridge().robot_state())
        elif path == "/api/links":
            self._send_json(require_bridge().link_positions(query.get("arm", ["right"])[0]))
        elif path == "/api/gripper":
            self._send_json(require_bridge().gripper_state())
        elif path == "/api/points":
            self._send_json({"ok": True, "points": read_json_file(POINTS_FILE, [])})
        elif path == "/api/presets":
            self._send_json({"ok": True, "presets": read_json_file(PRESETS_FILE, [])})
        elif path == "/api/logs":
            self._send_json({"ok": True, "logs": recent_logs(query.get("n", [200])[0])})
        elif path == "/api/joint_config":
            self._send_json(joint_config_response())
        elif path == "/api/kinematics":
            self._send_json({
                "ok": True,
                "path": "runtime",
                "active_solver_id": "moveit",
                "options": [{"id": "moveit", "label": "MoveIt 当前配置", "available": True, "plugin": "runtime"}],
                "groups": {"arm": {"solver_id": "moveit", "solver_plugin": "runtime"}, "left_arm": None},
            })
        elif path == "/api/ompl_config":
            self._send_json(ompl_config_response())
        elif path == "/api/planning_presets":
            self._send_json(ompl_config_response())
        elif path == "/api/benchmark/options":
            self._send_json(benchmark_options())
        elif path == "/api/benchmark/progress":
            self._send_json({"ok": True, "running": False, "stage": "idle", "label": "Piper 第一版未运行跑分", "percent": 0})
        elif path == "/api/platform_obstacle":
            self._send_json({"ok": True, "enabled": False, "platform_obstacles": []})
        elif path == "/api/manual_collision_boxes":
            self._send_json({"ok": True, "boxes": read_json_file(MANUAL_COLLISION_FILE, []), "applied": False})
        elif path == "/api/workspace_bounds":
            self._send_json(workspace_bounds_response())
        elif path in ("/api/vision_target", "/api/vision_status", "/api/camera_extrinsic"):
            self._send_json({"ok": False, "error": "Piper Unity 第一版未启用视觉模块"})
        elif path in ("/api/scene_pointcloud.bin", "/api/pointcloud.bin"):
            self.send_error(404)
        else:
            self._send_json({"ok": False, "error": f"unknown endpoint {path}"}, 404)

    def _handle_post_api(self, path, body):
        if path == "/api/plan":
            self._send_json(require_bridge().plan_pose(body))
        elif path == "/api/execute":
            self._send_json(require_bridge().execute_last_plan(body))
        elif path == "/api/enable":
            self._send_json(require_bridge().set_enable(bool(body.get("enabled", True))))
        elif path == "/api/home_zero":
            self._send_json(require_bridge().home_zero(body))
        elif path == "/api/joint_jog":
            self._send_json(require_bridge().jog_joint(body))
        elif path == "/api/gripper":
            self._send_json(require_bridge().set_gripper(body))
        elif path == "/api/estop":
            if bool(body.get("active", True)):
                result = require_bridge().set_enable(False)
                result["estop_active"] = True
                self._send_json(result)
            else:
                self._send_json({"ok": True, "estop_active": False})
        elif path == "/api/reset_estop":
            self._send_json({"ok": True, "message": "Piper Unity 仿真无独立急停复位服务"})
        elif path == "/api/points":
            points = read_json_file(POINTS_FILE, [])
            item = {key: body.get(key) for key in ("name", "x", "y", "z", "roll", "pitch", "yaw") if key in body}
            item.setdefault("name", f"点位 {len(points) + 1}")
            points.append(item)
            write_json_file(POINTS_FILE, points)
            self._send_json({"ok": True, "points": points})
        elif path == "/api/points/delete":
            points = read_json_file(POINTS_FILE, [])
            index = int(body.get("index", -1))
            if 0 <= index < len(points):
                points.pop(index)
            write_json_file(POINTS_FILE, points)
            self._send_json({"ok": True, "points": points})
        elif path == "/api/presets":
            presets = read_json_file(PRESETS_FILE, [])
            item = dict(body)
            item.setdefault("name", f"预设 {len(presets) + 1}")
            presets.append(item)
            write_json_file(PRESETS_FILE, presets)
            self._send_json({"ok": True, "presets": presets})
        elif path == "/api/presets/delete":
            presets = read_json_file(PRESETS_FILE, [])
            index = int(body.get("index", -1))
            if 0 <= index < len(presets):
                presets.pop(index)
            write_json_file(PRESETS_FILE, presets)
            self._send_json({"ok": True, "presets": presets})
        elif path == "/api/planning_presets":
            data = read_json_file(PLANNING_PRESETS_FILE, ompl_config_response()["presets"])
            data.append(dict(body))
            write_json_file(PLANNING_PRESETS_FILE, data)
            self._send_json(ompl_config_response())
        elif path == "/api/planning_presets/delete":
            self._send_json(ompl_config_response())
        elif path == "/api/manual_collision_boxes":
            boxes = body.get("boxes", body if isinstance(body, list) else [])
            write_json_file(MANUAL_COLLISION_FILE, boxes)
            self._send_json({"ok": True, "boxes": boxes, "applied": False})
        elif path in ("/api/manual_collision_boxes/apply", "/api/platform_obstacle/apply"):
            self._send_json({"ok": True, "applied": False, "message": "Piper 第一版暂未写入 MoveIt planning scene"})
        elif path in ("/api/manual_collision_boxes/clear", "/api/platform_obstacle/clear"):
            self._send_json({"ok": True, "applied": False})
        elif path == "/api/workspace_bounds":
            current = read_json_file(WORKSPACE_BOUNDS_FILE, workspace_bounds_response()["bounds"])
            arm = "right"
            current[arm] = body.get("bounds", body)
            write_json_file(WORKSPACE_BOUNDS_FILE, current)
            self._send_json(workspace_bounds_response())
        elif path in ("/api/approach", "/api/grasp", "/api/lift", "/api/place", "/api/pick", "/api/sequence"):
            self._send_json(disabled_feature(path), 501)
        elif path in ("/api/joint_config", "/api/kinematics", "/api/camera_extrinsic", "/api/scene_pointcloud/save"):
            self._send_json({"ok": True, "message": "Piper Unity 第一版保留该配置接口，但不写入外部配置"})
        elif path in ("/api/benchmark/generate", "/api/benchmark/run", "/api/benchmark/export_csv"):
            self._send_json(disabled_feature("benchmark"), 501)
        else:
            self._send_json({"ok": False, "error": f"unknown endpoint {path}"}, 404)


class ReusableHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


def build_parser():
    parser = argparse.ArgumentParser(description="Piper Unity Web Control")
    parser.add_argument("--host", default=HOST)
    parser.add_argument("--port", type=int, default=PORT)
    parser.add_argument("--no-ros", action="store_true", help="serve frontend without starting ROS bridge")
    return parser


def main():
    args = build_parser().parse_args()
    if not args.no_ros:
        start_ros_bridge()
    server = ReusableHTTPServer((args.host, args.port), Handler)

    def shutdown(_signum, _frame):
        threading.Thread(target=server.shutdown, daemon=True).start()

    signal.signal(signal.SIGTERM, shutdown)
    signal.signal(signal.SIGINT, shutdown)
    log_event("INFO", "Piper web control HTTP server started", {"host": args.host, "port": args.port})
    print(f"Piper Web Control: http://{args.host}:{args.port}")
    try:
        server.serve_forever()
    finally:
        server.server_close()
        if rclpy is not None and rclpy.ok():
            rclpy.shutdown()


if __name__ == "__main__":
    main()
