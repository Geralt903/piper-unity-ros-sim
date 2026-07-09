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
MOVEIT_PLANNING_FRAME_ID = os.environ.get("MOVEIT_PLANNING_FRAME_ID", "world")
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
IK_SERVICE = os.environ.get("IK_SERVICE", "/compute_ik")
PLAN_SERVICE = os.environ.get("PLAN_SERVICE", "/plan_kinematic_path")
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
GRASP_YAW_STEP_DEG = float(os.environ.get("PIPER_GRASP_YAW_STEP_DEG", "15"))
GRASP_MAX_CANDIDATES = int(os.environ.get("PIPER_GRASP_MAX_CANDIDATES", "8"))
GRASP_PLANNING_TIME = float(os.environ.get("PIPER_GRASP_PLANNING_TIME", "1.0"))
GRASP_ATTEMPTS = int(os.environ.get("PIPER_GRASP_ATTEMPTS", "1"))
GRASP_IK_TIMEOUT = float(os.environ.get("PIPER_GRASP_IK_TIMEOUT", "0.6"))
ANGLED_GRASP_X_GROUND_ANGLE_DEG = float(os.environ.get("PIPER_ANGLED_GRASP_X_GROUND_ANGLE_DEG", "30"))

try:
    import rclpy
    from builtin_interfaces.msg import Duration
    from control_msgs.action import FollowJointTrajectory
    from geometry_msgs.msg import Pose, PoseStamped
    from moveit_msgs.action import MoveGroup
    from moveit_msgs.msg import (
        Constraints,
        JointConstraint,
        MotionPlanRequest,
        OrientationConstraint,
        PlanningOptions,
        PlanningScene,
        PositionConstraint,
        RobotState,
    )
    from moveit_msgs.srv import GetMotionPlan, GetPositionIK
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


def quat_normalize(q):
    x = finite_float(q.get("x"), 0.0)
    y = finite_float(q.get("y"), 0.0)
    z = finite_float(q.get("z"), 0.0)
    w = finite_float(q.get("w"), 1.0)
    length = math.sqrt(x * x + y * y + z * z + w * w)
    if length <= 1e-9:
        return {"x": 0.0, "y": 0.0, "z": 0.0, "w": 1.0}
    return {"x": x / length, "y": y / length, "z": z / length, "w": w / length}


def quat_angle(a, b):
    qa = quat_normalize(a)
    qb = quat_normalize(b)
    dot = (
        qa["x"] * qb["x"]
        + qa["y"] * qb["y"]
        + qa["z"] * qb["z"]
        + qa["w"] * qb["w"]
    )
    dot = max(-1.0, min(1.0, abs(dot)))
    return 2.0 * math.acos(dot)


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


def quat_from_matrix(matrix):
    m00, m01, m02 = matrix[0]
    m10, m11, m12 = matrix[1]
    m20, m21, m22 = matrix[2]
    trace = m00 + m11 + m22
    if trace > 0.0:
        scale = math.sqrt(trace + 1.0) * 2.0
        return quat_normalize({
            "w": 0.25 * scale,
            "x": (m21 - m12) / scale,
            "y": (m02 - m20) / scale,
            "z": (m10 - m01) / scale,
        })
    if m00 > m11 and m00 > m22:
        scale = math.sqrt(1.0 + m00 - m11 - m22) * 2.0
        return quat_normalize({
            "w": (m21 - m12) / scale,
            "x": 0.25 * scale,
            "y": (m01 + m10) / scale,
            "z": (m02 + m20) / scale,
        })
    if m11 > m22:
        scale = math.sqrt(1.0 + m11 - m00 - m22) * 2.0
        return quat_normalize({
            "w": (m02 - m20) / scale,
            "x": (m01 + m10) / scale,
            "y": 0.25 * scale,
            "z": (m12 + m21) / scale,
        })
    scale = math.sqrt(1.0 + m22 - m00 - m11) * 2.0
    return quat_normalize({
        "w": (m10 - m01) / scale,
        "x": (m02 + m20) / scale,
        "y": (m12 + m21) / scale,
        "z": 0.25 * scale,
    })


def normalize_angle(angle):
    value = math.fmod(float(angle) + math.pi, 2.0 * math.pi)
    if value < 0.0:
        value += 2.0 * math.pi
    return value - math.pi


def dedupe_angles(angles, tolerance=1e-6):
    result = []
    for angle in angles:
        normalized = normalize_angle(angle)
        if all(abs(normalize_angle(normalized - existing)) > tolerance for existing in result):
            result.append(normalized)
    return result


def rpy_to_matrix(roll, pitch, yaw):
    cr, sr = math.cos(roll), math.sin(roll)
    cp, sp = math.cos(pitch), math.sin(pitch)
    cy, sy = math.cos(yaw), math.sin(yaw)
    return [
        [cy * cp, cy * sp * sr - sy * cr, cy * sp * cr + sy * sr],
        [sy * cp, sy * sp * sr + cy * cr, sy * sp * cr - cy * sr],
        [-sp, cp * sr, cp * cr],
    ]


def local_axis_world_z(roll, pitch, axis="y"):
    matrix = rpy_to_matrix(roll, pitch, 0.0)
    axis_index = {"x": 0, "y": 1, "z": 2}.get(axis, 1)
    return matrix[2][axis_index]


def side_grasp_constraint_error(roll, pitch):
    return abs(abs(local_axis_world_z(roll, pitch, "y")) - 1.0)


def vertical_grasp_constraint_error(roll, pitch):
    return abs(abs(local_axis_world_z(roll, pitch, "x")) - 1.0)


def vec_dot(a, b):
    return sum(float(x) * float(y) for x, y in zip(a, b))


def vec_cross(a, b):
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ]


def vec_scale(vector, scalar):
    return [float(value) * float(scalar) for value in vector]


def vec_normalize(vector, label="vector"):
    length = math.sqrt(sum(float(value) * float(value) for value in vector))
    if length <= 1e-9:
        raise ValueError(f"{label} length is zero")
    return [float(value) / length for value in vector]


def boolish(value, default=False):
    if isinstance(value, bool):
        return value
    if value is None:
        return default
    if isinstance(value, str):
        return value.strip().lower() in {"1", "true", "yes", "y", "on"}
    return bool(value)


def moveit_error_message(code):
    messages = {
        1: "SUCCESS",
        99999: "FAILURE",
        -1: "PLANNING_FAILED",
        -2: "INVALID_MOTION_PLAN",
        -3: "MOTION_PLAN_INVALIDATED_BY_ENVIRONMENT_CHANGE",
        -4: "CONTROL_FAILED",
        -5: "UNABLE_TO_AQUIRE_SENSOR_DATA",
        -6: "TIMED_OUT",
        -7: "PREEMPTED",
        -10: "START_STATE_IN_COLLISION",
        -11: "START_STATE_VIOLATES_PATH_CONSTRAINTS",
        -12: "GOAL_IN_COLLISION",
        -13: "GOAL_VIOLATES_PATH_CONSTRAINTS",
        -14: "GOAL_CONSTRAINTS_VIOLATED",
        -15: "INVALID_GROUP_NAME",
        -16: "INVALID_GOAL_CONSTRAINTS",
        -17: "INVALID_ROBOT_STATE",
        -18: "INVALID_LINK_NAME",
        -19: "INVALID_OBJECT_NAME",
        -21: "FRAME_TRANSFORM_FAILURE",
        -22: "COLLISION_CHECKING_UNAVAILABLE",
        -23: "ROBOT_STATE_STALE",
        -24: "SENSOR_INFO_STALE",
        -25: "COMMUNICATION_FAILURE",
        -26: "NO_IK_SOLUTION",
        -27: "INVALID_LINK_NAME",
        -31: "INVALID_TRAJECTORY",
    }
    return messages.get(int(code), f"UNKNOWN({code})")


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
        self._planning_lock = threading.Lock()

        self.create_subscription(JointState, JOINT_FEEDBACK_TOPIC, lambda msg: self._on_joint_state(msg, JOINT_FEEDBACK_TOPIC), 10)
        self.create_subscription(JointState, JOINT_STATE_TOPIC, lambda msg: self._on_joint_state(msg, JOINT_STATE_TOPIC), 10)
        self.create_subscription(PoseStamped, END_POSE_TOPIC, self._on_link_pose, 10)
        if PiperStatusMsg is not None:
            self.create_subscription(PiperStatusMsg, ARM_STATUS_TOPIC, self._on_arm_status, 10)

        self._joint_command_pub = self.create_publisher(JointState, JOINT_COMMAND_TOPIC, 10)
        self._enable_pub = self.create_publisher(Bool, ENABLE_COMMAND_TOPIC, 10)
        self._move_client = ActionClient(self, MoveGroup, MOVE_ACTION)
        self._trajectory_client = ActionClient(self, FollowJointTrajectory, TRAJECTORY_ACTION)
        self._ik_client = self.create_client(GetPositionIK, IK_SERVICE)
        self._plan_client = self.create_client(GetMotionPlan, PLAN_SERVICE)
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
        if q["w"] == 0.0:
            roll, pitch, yaw = q["x"], q["y"], q["z"]
            q = quat_from_rpy(roll, pitch, yaw)
        else:
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
        effort = finite_float(body.get("effort"), 1.0)
        for _index in range(3):
            self._publish_joint_command(positions, effort=effort)
            time.sleep(0.04)
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

    def _make_pose_stamped(self, body, frame_id=None):
        pose = PoseStamped()
        pose.header.frame_id = frame_id or FRAME_ID
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

        if not boolish(body.get("position_only"), True):
            orientation_constraint = OrientationConstraint()
            orientation_constraint.header = target.header
            orientation_constraint.link_name = TIP_LINK
            orientation_constraint.orientation = target.pose.orientation
            tolerance = max(0.005, finite_float(body.get("orientation_tolerance"), 0.12))
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

    @staticmethod
    def _duration_msg(seconds):
        seconds = max(0.0, float(seconds))
        whole = int(seconds)
        return Duration(sec=whole, nanosec=int((seconds - whole) * 1_000_000_000))

    @staticmethod
    def _trajectory_duration(trajectory):
        if not trajectory or not trajectory.points:
            return 0.0
        return duration_to_sec(trajectory.points[-1].time_from_start)

    def _ompl_runtime_config(self, body):
        planner_id = str(body.get("planner_id") or body.get("planner") or OMPL_DEFAULT["planner_id"])
        if planner_id == "default":
            planner_id = ""
        return {
            "planner_id": planner_id,
            "planning_time": max(0.1, finite_float(body.get("planning_time"), OMPL_DEFAULT["planning_time"])),
            "attempts": max(1, int(finite_float(body.get("attempts"), OMPL_DEFAULT["attempts"]))),
            "ik_timeout": max(0.1, finite_float(body.get("ik_timeout"), OMPL_DEFAULT["ik_timeout"])),
        }

    def _horizontal_grasp_preferred_yaw(self, pose):
        x = finite_float(pose.get("x"), 0.0)
        y = finite_float(pose.get("y"), 0.0)
        if abs(x) > 1e-6 or abs(y) > 1e-6:
            return math.atan2(y, x)
        return finite_float(pose.get("yaw"), 0.0)

    def _scan_yaws(self, preferred):
        step = math.radians(max(1.0, min(90.0, GRASP_YAW_STEP_DEG)))
        offsets = [0.0]
        rings = int(math.ceil(math.pi / step))
        for index in range(1, rings + 1):
            offsets.extend([index * step, -index * step])
        return dedupe_angles([preferred + offset for offset in offsets])

    def _horizontal_grasp_pose_candidates(self, pose):
        base_pose = dict(pose)
        preferred = self._horizontal_grasp_preferred_yaw(base_pose)
        rpy_pairs = [
            (math.pi / 2.0, 0.0),
            (-math.pi / 2.0, 0.0),
            (math.pi / 2.0, math.pi),
            (-math.pi / 2.0, math.pi),
        ]
        candidates = []
        for yaw in self._scan_yaws(preferred):
            for roll, pitch in rpy_pairs:
                if side_grasp_constraint_error(roll, pitch) > 1e-6:
                    continue
                candidate = dict(base_pose)
                candidate.update({
                    "roll": roll,
                    "pitch": pitch,
                    "yaw": yaw,
                    "position_only": False,
                })
                candidate.pop("orientation", None)
                candidate["_horizontal_grasp"] = {
                    "constraint": "tool_y_perpendicular_to_world_xy",
                    "tool_axis": "tool_y",
                    "ground_normal": [0.0, 0.0, 1.0],
                    "dot": local_axis_world_z(roll, pitch, "y"),
                    "preferred_yaw": preferred,
                }
                candidates.append(candidate)
                if len(candidates) >= GRASP_MAX_CANDIDATES:
                    return candidates
        return candidates

    def _vertical_grasp_pose_candidates(self, pose):
        base_pose = dict(pose)
        preferred = self._horizontal_grasp_preferred_yaw(base_pose)
        rpy_pairs = [
            (0.0, -math.pi / 2.0),
            (math.pi, -math.pi / 2.0),
            (0.0, math.pi / 2.0),
            (math.pi, math.pi / 2.0),
        ]
        candidates = []
        for yaw in self._scan_yaws(preferred):
            for roll, pitch in rpy_pairs:
                if vertical_grasp_constraint_error(roll, pitch) > 1e-6:
                    continue
                candidate = dict(base_pose)
                candidate.update({
                    "roll": roll,
                    "pitch": pitch,
                    "yaw": yaw,
                    "position_only": False,
                })
                candidate.pop("orientation", None)
                candidate["_vertical_grasp"] = {
                    "constraint": "tool_x_perpendicular_to_world_xy",
                    "tool_axis": "tool_x",
                    "ground_normal": [0.0, 0.0, 1.0],
                    "dot": local_axis_world_z(roll, pitch, "x"),
                    "preferred_yaw": preferred,
                }
                candidates.append(candidate)
                if len(candidates) >= GRASP_MAX_CANDIDATES:
                    return candidates
        return candidates

    def _angled_grasp_pose_candidates(self, pose):
        base_pose = dict(pose)
        preferred = self._horizontal_grasp_preferred_yaw(base_pose)
        angle = math.radians(max(0.0, min(89.0, ANGLED_GRASP_X_GROUND_ANGLE_DEG)))
        horizontal = math.cos(angle)
        down = -math.sin(angle)
        ground_normal = [0.0, 0.0, 1.0]
        candidates = []
        for yaw in self._scan_yaws(preferred):
            heading = [math.cos(yaw), math.sin(yaw), 0.0]
            x_axis = vec_normalize([
                horizontal * heading[0],
                horizontal * heading[1],
                down,
            ], "angled_grasp_tool_x")
            z_base = vec_normalize([-math.sin(yaw), math.cos(yaw), 0.0], "angled_grasp_tool_z")
            for z_sign in (1.0, -1.0):
                z_axis = vec_scale(z_base, z_sign)
                y_axis = vec_normalize(vec_cross(z_axis, x_axis), "angled_grasp_tool_y")
                z_axis = vec_normalize(vec_cross(x_axis, y_axis), "angled_grasp_tool_z")
                rotation = [
                    [x_axis[0], y_axis[0], z_axis[0]],
                    [x_axis[1], y_axis[1], z_axis[1]],
                    [x_axis[2], y_axis[2], z_axis[2]],
                ]
                orientation = quat_from_matrix(rotation)
                roll, pitch, rpy_yaw = quat_to_rpy(orientation)
                x_ground_dot = vec_dot(x_axis, ground_normal)
                z_ground_dot = vec_dot(z_axis, ground_normal)
                candidate = dict(base_pose)
                candidate.update({
                    "roll": roll,
                    "pitch": pitch,
                    "yaw": rpy_yaw,
                    "orientation": orientation,
                    "position_only": False,
                })
                candidate["_angled_grasp"] = {
                    "constraint": "tool_z_parallel_to_world_xy_and_tool_x_30deg_to_ground",
                    "tool_z_axis": "tool_z",
                    "tool_x_axis": "tool_x",
                    "ground_normal": ground_normal,
                    "tool_x": x_axis,
                    "tool_y": y_axis,
                    "tool_z": z_axis,
                    "tool_x_ground_dot": x_ground_dot,
                    "tool_z_ground_dot": z_ground_dot,
                    "tool_x_ground_angle_deg": round(math.degrees(math.asin(min(1.0, abs(x_ground_dot)))), 6),
                    "tool_x_ground_angle_target_deg": ANGLED_GRASP_X_GROUND_ANGLE_DEG,
                    "tool_x_vertical_preference": "down",
                    "z_sign": z_sign,
                    "preferred_yaw": preferred,
                    "scan_yaw": yaw,
                }
                candidates.append(candidate)
                if len(candidates) >= GRASP_MAX_CANDIDATES:
                    return candidates
        return candidates

    def _make_joint_goal_constraints(self, target_joint_state, tolerance=0.01):
        target_by_name = dict(zip(target_joint_state.name, target_joint_state.position))
        missing = [name for name in JOINT_NAMES if name not in target_by_name]
        if missing:
            raise RuntimeError(f"IK 结果缺少关节: {missing}")
        constraints = Constraints()
        for name in JOINT_NAMES:
            joint = JointConstraint()
            joint.joint_name = name
            joint.position = float(target_by_name[name])
            joint.tolerance_above = float(tolerance)
            joint.tolerance_below = float(tolerance)
            joint.weight = 1.0
            constraints.joint_constraints.append(joint)
        return constraints

    def _compute_ik_for_pose(self, pose, timeout_sec=0.6, avoid_collisions=False):
        request = GetPositionIK.Request()
        request.ik_request.group_name = GROUP_NAME
        request.ik_request.ik_link_name = TIP_LINK
        request.ik_request.pose_stamped = self._make_pose_stamped(pose, MOVEIT_PLANNING_FRAME_ID)
        request.ik_request.robot_state = self._make_start_state()
        request.ik_request.avoid_collisions = bool(avoid_collisions)
        timeout_sec = max(0.1, float(timeout_sec))
        request.ik_request.timeout = self._duration_msg(timeout_sec)

        started = time.monotonic()
        future = self._ik_client.call_async(request)
        if not self._wait_future(future, timeout_sec + 1.0):
            elapsed_ms = round((time.monotonic() - started) * 1000.0, 1)
            return None, {"ok": False, "error_code": -6, "reason": "IK_TIMEOUT", "elapsed_ms": elapsed_ms}
        result = future.result()
        code = int(result.error_code.val)
        return result, {
            "ok": code == 1,
            "error_code": code,
            "reason": moveit_error_message(code),
            "elapsed_ms": round((time.monotonic() - started) * 1000.0, 1),
        }

    def _moveit_plan_to_joint_state(self, target_joint_state, pose, ompl_config, started, mode="IK + joint MoveIt plan"):
        request = GetMotionPlan.Request()
        motion_request = MotionPlanRequest()
        motion_request.group_name = GROUP_NAME
        motion_request.pipeline_id = "ompl"
        motion_request.planner_id = ompl_config["planner_id"]
        motion_request.num_planning_attempts = ompl_config["attempts"]
        motion_request.allowed_planning_time = ompl_config["planning_time"]
        motion_request.max_velocity_scaling_factor = clamp(finite_float(pose.get("velocity_scaling"), 0.05), 0.01, 1.0)
        motion_request.max_acceleration_scaling_factor = clamp(finite_float(pose.get("acceleration_scaling"), 0.05), 0.01, 1.0)
        motion_request.start_state = self._make_start_state()
        goal_tolerance = max(0.001, finite_float(pose.get("joint_goal_tolerance"), 0.01))
        motion_request.goal_constraints.append(self._make_joint_goal_constraints(target_joint_state, goal_tolerance))
        request.motion_plan_request = motion_request

        future = self._plan_client.call_async(request)
        timeout = motion_request.allowed_planning_time + 3.0
        if not self._wait_future(future, timeout):
            with self._lock:
                self._status["right"] = "plan timeout"
            raise RuntimeError("规划服务超时")
        result = future.result()
        code = int(result.motion_plan_response.error_code.val)
        if code != 1:
            reason = moveit_error_message(code)
            with self._lock:
                self._status["right"] = f"plan failed: {code}"
            raise RuntimeError(f"MoveIt 规划失败，错误码={code}（{reason}）")

        trajectory = result.motion_plan_response.trajectory.joint_trajectory
        points = len(trajectory.points)
        if points <= 0:
            raise RuntimeError("MoveIt returned an empty trajectory")

        target = self._make_pose_stamped(pose)
        position_tolerance = max(0.001, finite_float(pose.get("position_tolerance"), 0.006))
        orientation_tolerance = max(0.005, finite_float(pose.get("orientation_tolerance"), 0.12))
        position_only = boolish(pose.get("position_only"), False)
        target_orientation = {
            "x": target.pose.orientation.x,
            "y": target.pose.orientation.y,
            "z": target.pose.orientation.z,
            "w": target.pose.orientation.w,
        }
        summary = {
            "ok": True,
            "mode": mode,
            "group": GROUP_NAME,
            "tip": TIP_LINK,
            "points": points,
            "duration": self._trajectory_duration(trajectory),
            "elapsed_ms": round((time.monotonic() - started) * 1000.0, 1),
            "target": {
                "x": target.pose.position.x,
                "y": target.pose.position.y,
                "z": target.pose.position.z,
            },
            "target_orientation": target_orientation,
            "constraints": {
                "position_only": position_only,
                "position_tolerance": position_tolerance,
                "orientation_constrained": not position_only,
                "orientation_tolerance": orientation_tolerance,
            },
            "ompl": {
                "planner_id": motion_request.planner_id or "default",
                "planning_time": motion_request.allowed_planning_time,
                "attempts": motion_request.num_planning_attempts,
                "ik_timeout": ompl_config["ik_timeout"],
            },
            "grasp_orientation": {
                "mode": pose.get("grasp_orientation_mode", "custom_grasp"),
                "candidate_index": 1,
                "roll": finite_float(pose.get("roll"), 0.0),
                "pitch": finite_float(pose.get("pitch"), 0.0),
                "yaw": finite_float(pose.get("yaw"), 0.0),
                "constrained": not position_only,
                "tolerance": orientation_tolerance,
            },
        }
        with self._lock:
            self._last_trajectory = copy.deepcopy(trajectory)
            self._last_trajectory_arm = "right"
            self._last_plan["right"] = summary
            self._status["right"] = "planned"
        log_event("INFO", "Piper IK + joint plan ready", summary)
        return summary

    def _plan_single_pose(self, body):
        if not self._ik_client.wait_for_service(timeout_sec=2.0):
            raise RuntimeError(f"IK service not ready: {IK_SERVICE}")
        if not self._plan_client.wait_for_service(timeout_sec=2.0):
            raise RuntimeError(f"planning service not ready: {PLAN_SERVICE}")
        pose = dict(body or {})
        pose.setdefault("position_only", False)
        ompl_config = self._ompl_runtime_config(pose)
        avoid_collisions = boolish(pose.get("avoid_collisions"), boolish(pose.get("avoid_platform"), False))
        with self._lock:
            self._status["right"] = "planning"
        started = time.monotonic()
        ik_result, ik_status = self._compute_ik_for_pose(
            pose,
            timeout_sec=ompl_config["ik_timeout"],
            avoid_collisions=avoid_collisions,
        )
        if not ik_status["ok"]:
            with self._lock:
                self._status["right"] = f"ik failed: {ik_status.get('error_code')}"
            raise RuntimeError(
                f"IK 逆解失败，MoveIt 错误码={ik_status.get('error_code')}（{ik_status.get('reason')}）"
            )
        summary = self._moveit_plan_to_joint_state(
            ik_result.solution.joint_state,
            pose,
            ompl_config,
            started,
        )
        summary["ik"] = ik_status
        with self._lock:
            self._last_plan["right"] = summary
        return summary

    def _plan_grasp_candidates(self, body, mode, candidates, meta_key, result_mode, failure_label):
        errors = []
        if not candidates:
            raise RuntimeError(f"{failure_label}未生成候选姿态")
        for index, candidate in enumerate(candidates, start=1):
            candidate.setdefault("planning_time", GRASP_PLANNING_TIME)
            candidate.setdefault("attempts", GRASP_ATTEMPTS)
            candidate.setdefault("ik_timeout", GRASP_IK_TIMEOUT)
            candidate.setdefault("orientation_tolerance", finite_float(body.get("orientation_tolerance"), 0.12))
            candidate.setdefault("position_tolerance", finite_float(body.get("position_tolerance"), 0.012))
            candidate["position_only"] = False
            try:
                summary = self._plan_single_pose(candidate)
                grasp_orientation = {
                    "mode": result_mode,
                    "candidate_index": index,
                    "candidate_count": len(candidates),
                    "roll": candidate["roll"],
                    "pitch": candidate["pitch"],
                    "yaw": candidate["yaw"],
                    "constrained": True,
                    "tolerance": max(0.005, finite_float(candidate.get("orientation_tolerance"), 0.12)),
                    **candidate.get(meta_key, {}),
                }
                summary["grasp_orientation"] = grasp_orientation
                summary["constraints"]["position_only"] = False
                summary["constraints"]["orientation_constrained"] = True
                with self._lock:
                    self._last_plan["right"] = summary
                log_event("INFO", f"Piper {mode} orientation selected", grasp_orientation)
                return {"ok": True, "plan": summary}
            except Exception as exc:
                error = str(exc)
                errors.append(error)
                log_event("DEBUG", f"Piper {mode} candidate failed", {
                    "candidate_index": index,
                    "roll": candidate.get("roll"),
                    "pitch": candidate.get("pitch"),
                    "yaw": candidate.get("yaw"),
                    "error": error,
                })
        detail = "; ".join(errors[-3:]) if errors else "无候选姿态"
        raise RuntimeError(f"{failure_label}未找到可行 IK/规划: {detail}")

    def plan_pose(self, body):
        if not self._planning_lock.acquire(blocking=False):
            raise RuntimeError("已有规划正在运行，请等待当前规划结束")
        try:
            pose = dict(body or {})
            mode = pose.get("grasp_orientation_mode")
            if mode in ("side_grasp", "horizontal_cylinder"):
                return self._plan_grasp_candidates(
                    pose,
                    "side grasp",
                    self._horizontal_grasp_pose_candidates(pose),
                    "_horizontal_grasp",
                    "side_grasp",
                    "侧面抓取姿态",
                )
            if mode == "vertical_grasp":
                return self._plan_grasp_candidates(
                    pose,
                    "vertical grasp",
                    self._vertical_grasp_pose_candidates(pose),
                    "_vertical_grasp",
                    "vertical_grasp",
                    "垂直抓取姿态",
                )
            if mode in ("angled_grasp", "z_parallel_grasp"):
                return self._plan_grasp_candidates(
                    pose,
                    "angled grasp",
                    self._angled_grasp_pose_candidates(pose),
                    "_angled_grasp",
                    "angled_grasp",
                    "斜向抓取姿态",
                )
            if boolish(pose.get("position_only"), True):
                return self._plan_pose_move_group(pose)
            summary = self._plan_single_pose(pose)
            return {"ok": True, "plan": summary}
        finally:
            self._planning_lock.release()

    def _plan_pose_move_group(self, body):
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
        position_tolerance = max(0.001, finite_float(body.get("position_tolerance"), 0.005))
        orientation_tolerance = max(0.005, finite_float(body.get("orientation_tolerance"), 0.12))
        position_only = boolish(body.get("position_only"), True)
        target_orientation = {
            "x": target.pose.orientation.x,
            "y": target.pose.orientation.y,
            "z": target.pose.orientation.z,
            "w": target.pose.orientation.w,
        }
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
            "target_orientation": target_orientation,
            "constraints": {
                "position_only": position_only,
                "position_tolerance": position_tolerance,
                "orientation_constrained": not position_only,
                "orientation_tolerance": orientation_tolerance,
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
                "constrained": not position_only,
                "tolerance": orientation_tolerance,
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
        validation = None
        if error_code == 0 and plan and not plan.get("constraints", {}).get("position_only", True):
            validation = self._wait_for_pose_constraint(plan)
            if not validation.get("ok"):
                message = (
                    f"姿态约束未满足: "
                    f"orientation_error={math.degrees(validation.get('orientation_error_rad', 0.0)):.1f}deg "
                    f"> tolerance={math.degrees(validation.get('orientation_tolerance_rad', 0.0)):.1f}deg"
                )
                with self._lock:
                    self._status["right"] = "constraint error"
                log_event("ERROR", "Piper pose constraint validation failed", validation)
                return {
                    "ok": False,
                    "error": message,
                    "error_code": error_code,
                    "plan": plan,
                    "constraint": validation,
                }
        with self._lock:
            self._status["right"] = "executed" if error_code == 0 else f"execute error {error_code}"
        log_event("INFO", "Piper trajectory executed", {"error_code": error_code, "constraint": validation})
        return {"ok": error_code == 0, "error_code": error_code, "plan": plan, "constraint": validation}

    def _wait_for_pose_constraint(self, plan, timeout_sec=2.0):
        deadline = time.monotonic() + timeout_sec
        last = None
        while time.monotonic() < deadline:
            last = self._pose_constraint_error(plan)
            if last.get("ok"):
                return last
            time.sleep(0.05)
        return last or {"ok": False, "error": f"waiting for {END_POSE_TOPIC}"}

    def _pose_constraint_error(self, plan):
        with self._lock:
            link_pose = copy.deepcopy(self._link_pose)
        if not link_pose or not link_pose.get("ok"):
            return {"ok": False, "error": f"waiting for {END_POSE_TOPIC}"}

        constraints = plan.get("constraints", {})
        target_position = plan.get("target", {})
        target_orientation = plan.get("target_orientation", {})
        current_position = link_pose.get("position", [None, None, None])
        current_orientation = {
            "x": link_pose.get("orientation", [0.0, 0.0, 0.0, 1.0])[0],
            "y": link_pose.get("orientation", [0.0, 0.0, 0.0, 1.0])[1],
            "z": link_pose.get("orientation", [0.0, 0.0, 0.0, 1.0])[2],
            "w": link_pose.get("orientation", [0.0, 0.0, 0.0, 1.0])[3],
        }
        target_xyz = [
            finite_float(target_position.get("x"), 0.0),
            finite_float(target_position.get("y"), 0.0),
            finite_float(target_position.get("z"), 0.0),
        ]
        position_error = math.sqrt(sum(
            (finite_float(current_position[index], 0.0) - target_xyz[index]) ** 2
            for index in range(3)
        ))
        orientation_error = quat_angle(target_orientation, current_orientation)
        position_tolerance = max(0.001, finite_float(constraints.get("position_tolerance"), 0.005))
        orientation_tolerance = max(0.005, finite_float(constraints.get("orientation_tolerance"), 0.12))
        return {
            "ok": position_error <= position_tolerance and orientation_error <= orientation_tolerance,
            "position_error_m": position_error,
            "position_tolerance_m": position_tolerance,
            "orientation_error_rad": orientation_error,
            "orientation_tolerance_rad": orientation_tolerance,
            "source": END_POSE_TOPIC,
            "target": {
                "position": target_xyz,
                "orientation": quat_normalize(target_orientation),
            },
            "actual": {
                "position": current_position,
                "orientation": quat_normalize(current_orientation),
                "pose": link_pose.get("pose"),
            },
        }

    def _pose_from_body(self, body):
        pose = body.get("pose") if isinstance(body.get("pose"), dict) else body
        result = dict(pose or {})
        result.setdefault("x", finite_float(body.get("x"), 0.3))
        result.setdefault("y", finite_float(body.get("y"), 0.0))
        result.setdefault("z", finite_float(body.get("z"), 0.35))
        result.setdefault("arm", "right")
        result.setdefault("velocity_scaling", finite_float(body.get("velocity_scaling"), 0.05))
        result.setdefault("acceleration_scaling", finite_float(body.get("acceleration_scaling"), 0.05))
        result.setdefault("planning_time", finite_float(body.get("planning_time"), OMPL_DEFAULT["planning_time"]))
        result.setdefault("attempts", int(finite_float(body.get("attempts"), OMPL_DEFAULT["attempts"])))
        result.setdefault("planner_id", body.get("planner_id", OMPL_DEFAULT["planner_id"]))
        result.setdefault("orientation_tolerance", finite_float(body.get("orientation_tolerance"), 0.12))
        result.setdefault("position_tolerance", finite_float(body.get("position_tolerance"), 0.006))
        result.setdefault("position_only", False)
        result.setdefault("grasp_orientation_mode", body.get("grasp_orientation_mode", "custom_grasp"))
        return result

    def _current_link_pose_body(self):
        with self._lock:
            link_pose = copy.deepcopy(self._link_pose)
        if not link_pose or not link_pose.get("pose"):
            raise RuntimeError(f"waiting for {END_POSE_TOPIC}")
        pose = dict(link_pose["pose"])
        pose.setdefault("grasp_orientation_mode", "current_tcp")
        return pose

    def _plan_and_execute_pose(self, body, label):
        plan_result = self.plan_pose(body)
        execute_result = self.execute_last_plan({})
        if not execute_result.get("ok"):
            raise RuntimeError(f"{label} execute failed: error_code={execute_result.get('error_code')}")
        return {"ok": True, "plan": plan_result.get("plan"), "execute": execute_result}

    def approach_pose(self, body):
        target = self._pose_from_body(body)
        offset_z = clamp(finite_float(body.get("offset_z", body.get("approach_height", 0.1)), 0.1), 0.0, 0.5)
        target["z"] = finite_float(target.get("z"), 0.35) + offset_z
        result = self._plan_and_execute_pose(target, "approach")
        result["approach_pose"] = {"x": target["x"], "y": target["y"], "z": target["z"], "offset_z": offset_z}
        with self._lock:
            self._status["right"] = "approached"
        log_event("INFO", "Piper approach executed", result["approach_pose"])
        return result

    def grasp_pose(self, body):
        target = self._pose_from_body(body)
        result = self._plan_and_execute_pose(target, "grasp")
        gripper = self.set_gripper({
            "action": "close",
            "opening_m": body.get("opening_m", GRIPPER_CLOSED_METERS),
            "effort": body.get("effort", 1.0),
        })
        time.sleep(0.2)
        result["gripper"] = gripper
        with self._lock:
            self._status["right"] = "grasped"
        log_event("INFO", "Piper grasp executed", {"target": result.get("plan", {}).get("target"), "gripper": gripper})
        return result

    def lift_pose(self, body):
        if isinstance(body.get("pose"), dict):
            target = self._pose_from_body(body)
        else:
            target = self._current_link_pose_body()
            target.update({
                "velocity_scaling": finite_float(body.get("velocity_scaling"), 0.05),
                "acceleration_scaling": finite_float(body.get("acceleration_scaling"), 0.05),
                "planning_time": finite_float(body.get("planning_time"), OMPL_DEFAULT["planning_time"]),
                "attempts": int(finite_float(body.get("attempts"), OMPL_DEFAULT["attempts"])),
                "planner_id": body.get("planner_id", OMPL_DEFAULT["planner_id"]),
                "position_only": True,
            })
        offset_z = clamp(finite_float(body.get("offset_z", body.get("lift_height", 0.1)), 0.1), 0.0, 0.5)
        target["z"] = finite_float(target.get("z"), 0.35) + offset_z
        result = self._plan_and_execute_pose(target, "lift")
        result["lift_pose"] = {"x": target["x"], "y": target["y"], "z": target["z"], "offset_z": offset_z}
        with self._lock:
            self._status["right"] = "lifted"
        log_event("INFO", "Piper lift executed", result["lift_pose"])
        return result

    def place_pose(self, body):
        target = self._pose_from_body(body)
        result = self._plan_and_execute_pose(target, "place")
        result["gripper"] = self.set_gripper({"action": "open", "effort": body.get("effort", 1.0)})
        with self._lock:
            self._status["right"] = "placed"
        log_event("INFO", "Piper place executed", {"target": result.get("plan", {}).get("target")})
        return result

    def pick_pose(self, body):
        pose = self._pose_from_body(body)
        approach_height = finite_float(body.get("approach_height"), 0.1)
        lift_height = finite_float(body.get("lift_height"), 0.1)
        hold_seconds = clamp(finite_float(body.get("hold_seconds"), 0.2), 0.0, 5.0)

        results = []
        results.append({"step": "open", "result": self.set_gripper({"action": "open", "effort": body.get("effort", 1.0)})})
        results.append({"step": "approach", "result": self.approach_pose({"pose": pose, "offset_z": approach_height})})
        results.append({"step": "grasp", "result": self.grasp_pose({"pose": pose, "effort": body.get("effort", 1.0)})})
        if hold_seconds > 0:
            time.sleep(hold_seconds)
            results.append({"step": "hold", "result": {"ok": True, "seconds": hold_seconds}})
        results.append({"step": "lift", "result": self.lift_pose({"offset_z": lift_height})})
        with self._lock:
            self._status["right"] = "picked"
        log_event("INFO", "Piper pick sequence executed", {"steps": [item["step"] for item in results]})
        return {"ok": True, "steps": results}

    def execute_sequence(self, body):
        steps = body.get("steps", [])
        if not isinstance(steps, list) or not steps:
            raise ValueError("动作序列为空")
        results = []
        for index, step in enumerate(steps, start=1):
            kind = str(step.get("type", "")).lower()
            if kind == "approach":
                result = self.approach_pose(step)
            elif kind == "grasp":
                result = self.grasp_pose(step)
            elif kind == "lift":
                result = self.lift_pose(step)
            elif kind in {"move", "place"}:
                result = self.place_pose(step) if kind == "place" else self._plan_and_execute_pose(self._pose_from_body(step), "move")
            elif kind in {"release", "open"}:
                result = self.set_gripper({"action": "open", "effort": step.get("effort", 1.0)})
            elif kind in {"close", "gripper_close"}:
                result = self.set_gripper({"action": "close", "effort": step.get("effort", 1.0)})
            elif kind == "pick":
                result = self.pick_pose(step)
            elif kind == "wait":
                seconds = clamp(finite_float(step.get("seconds"), 1.0), 0.0, 30.0)
                time.sleep(seconds)
                result = {"ok": True, "seconds": seconds}
            else:
                raise ValueError(f"未知动作步骤: {kind or index}")
            results.append({"index": index, "type": kind, "result": result})
        with self._lock:
            self._status["right"] = "sequence done"
        log_event("INFO", "Piper sequence executed", {"count": len(results)})
        return {"ok": True, "steps": results}


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
        elif path == "/api/approach":
            self._send_json(require_bridge().approach_pose(body))
        elif path == "/api/grasp":
            self._send_json(require_bridge().grasp_pose(body))
        elif path == "/api/lift":
            self._send_json(require_bridge().lift_pose(body))
        elif path == "/api/place":
            self._send_json(require_bridge().place_pose(body))
        elif path == "/api/pick":
            self._send_json(require_bridge().pick_pose(body))
        elif path == "/api/sequence":
            self._send_json(require_bridge().execute_sequence(body))
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
