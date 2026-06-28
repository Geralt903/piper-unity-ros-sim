#!/usr/bin/env bash
set -euo pipefail

SURF_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
PIPER_ROS_ROOT="${PIPER_ROS_ROOT:-/home/Light/Projects/Osw_Surf_VR/code/piper_ros}"
UNITY_ROS_IP="${UNITY_ROS_IP:-127.0.0.1}"
UNITY_ROS_PORT="${UNITY_ROS_PORT:-10000}"
SPEED_PERCENT="${SPEED_PERCENT:-30}"
GRIPPER_METERS="${GRIPPER_METERS:-0.0}"
GRIPPER_EFFORT="${GRIPPER_EFFORT:-1.0}"

declare -a CHILD_PIDS=()

cleanup() {
  for pid in "${CHILD_PIDS[@]:-}"; do
    if kill -0 "${pid}" 2>/dev/null; then
      kill "${pid}" 2>/dev/null || true
    fi
  done
}
trap cleanup EXIT

run_docker() {
  if [[ -n "${DISPLAY:-}" ]] && command -v xhost >/dev/null 2>&1; then
    xhost +local:root >/dev/null 2>&1 || true
    xhost +local:docker >/dev/null 2>&1 || true
  fi

  docker run --rm -it \
    --name piper_unity_humble \
    --network host \
    --privileged \
    --ipc host \
    -e DISPLAY="${DISPLAY:-}" \
    -e QT_X11_NO_MITSHM=1 \
    -e UNITY_ROS_IP="${UNITY_ROS_IP}" \
    -e UNITY_ROS_PORT="${UNITY_ROS_PORT}" \
    -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
    -v "${SURF_ROOT}:/surf" \
    -v "${PIPER_ROS_ROOT}:/ws/piper_ros" \
    -w /ws/piper_ros \
    piper-ros:humble \
    bash -lc "/surf/tools/piper_unity_menu.sh --inside"
}

source_ros() {
  set +u
  if [[ -x /opt/ros/humble/bin/ros2 && -f /opt/ros/humble/setup.bash ]]; then
    # shellcheck disable=SC1091
    source /opt/ros/humble/setup.bash
  fi

  if command -v ros2 >/dev/null 2>&1 && [[ -f "${PIPER_ROS_ROOT}/install/setup.bash" ]]; then
    # shellcheck disable=SC1091
    source "${PIPER_ROS_ROOT}/install/setup.bash"
  fi
  set -u
}

require_ros2() {
  if ! command -v ros2 >/dev/null 2>&1; then
    echo "ros2 not found. Use: ${0} --docker"
    return 1
  fi
}

publish_enable() {
  local value="$1"
  ros2 topic pub --once /enable_cmd std_msgs/msg/Bool "{data: ${value}}"
}

publish_joint_command() {
  local position_csv="$1"
  ros2 topic pub --once /joint_ctrl_cmd sensor_msgs/msg/JointState \
    "{name: [joint1, joint2, joint3, joint4, joint5, joint6, gripper], position: [${position_csv}, ${GRIPPER_METERS}], velocity: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, ${SPEED_PERCENT}], effort: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, ${GRIPPER_EFFORT}]}"
}

home_arm() {
  publish_joint_command "0.0, 0.0, 0.0, 0.0, 0.0, 0.0"
}

set_all_joints_degrees() {
  read -r -p "输入 6 个关节角度，单位 deg，用空格分隔: " line
  python3 - "$line" <<'PY'
import math
import sys

parts = sys.argv[1].split()
if len(parts) != 6:
    raise SystemExit("需要刚好 6 个角度")
values = [str(math.radians(float(part))) for part in parts]
print(", ".join(values))
PY
}

start_ros_tcp_endpoint() {
  if ! ros2 pkg prefix ros_tcp_endpoint >/dev/null 2>&1; then
    echo "缺少 ros_tcp_endpoint。请把 Unity Robotics ROS-TCP-Endpoint 加到 Humble 工作区后重新 colcon build。"
    echo "Unity 侧默认连 ${UNITY_ROS_IP}:${UNITY_ROS_PORT}。"
    return 1
  fi

  ros2 run ros_tcp_endpoint default_server_endpoint \
    --ros-args -p ROS_IP:="${UNITY_ROS_IP}" -p ROS_TCP_PORT:="${UNITY_ROS_PORT}" &
  CHILD_PIDS+=("$!")
  echo "ROS TCP Endpoint 已启动: ${UNITY_ROS_IP}:${UNITY_ROS_PORT} pid=${CHILD_PIDS[-1]}"
}

start_moveit() {
  local package="piper_with_gripper_moveit"
  local log_file="/tmp/piper_moveit_$(date +%Y%m%d_%H%M%S).log"
  read -r -p "启动有夹爪 MoveIt? [Y/n] " answer
  if [[ "${answer,,}" == "n" ]]; then
    package="piper_no_gripper_moveit"
  fi

  if ! pgrep -f piper_moveit_to_unity_bridge >/dev/null 2>&1; then
    start_moveit_to_unity_bridge
    sleep 1
  fi

  LC_NUMERIC=en_US.UTF-8 ros2 launch "${package}" piper_moveit.launch.py use_sim_time:=false >"${log_file}" 2>&1 &
  CHILD_PIDS+=("$!")
  echo "MoveIt 已启动: ${package}/piper_moveit.launch.py pid=${CHILD_PIDS[-1]}"
  echo "日志: ${log_file}"
  echo "如果 RViz 窗口没有出现，先看日志: tail -f ${log_file}"
}

start_moveit_to_unity_bridge() {
  python3 /surf/tools/piper_moveit_to_unity_bridge.py &
  CHILD_PIDS+=("$!")
  echo "MoveIt -> Unity action bridge 已启动 pid=${CHILD_PIDS[-1]}"
}

show_topics() {
  ros2 topic list | grep -E '(^/joint_ctrl_cmd$|^/joint_states_feedback$|^/arm_status$|^/enable_cmd$)' || true
}

echo_status_once() {
  echo "等待 /arm_status，一次后返回..."
  ros2 topic echo --once /arm_status piper_msgs/msg/PiperStatusMsg
}

monitor_topic() {
  local topic="$1"
  local msg_type="${2:-}"

  echo
  echo "实时监看 ${topic}"
  echo "按 Ctrl+C 停止监看并返回菜单。"
  echo

  set +e
  if [[ -n "${msg_type}" ]]; then
    ros2 topic echo "${topic}" "${msg_type}"
  else
    ros2 topic echo "${topic}"
  fi
  set -e
}

monitor_topic_hz() {
  local topic="$1"

  echo
  echo "实时频率 ${topic}"
  echo "按 Ctrl+C 停止监看并返回菜单。"
  echo

  set +e
  ros2 topic hz "${topic}"
  set -e
}

monitor_custom_topic() {
  local topic
  local msg_type

  read -r -p "输入 topic 名，比如 /joint_states_feedback: " topic
  if [[ -z "${topic}" ]]; then
    echo "topic 不能为空"
    return
  fi

  read -r -p "输入消息类型，可留空自动识别，比如 sensor_msgs/msg/JointState: " msg_type
  monitor_topic "${topic}" "${msg_type}"
}

monitor_menu() {
  while true; do
    echo
    echo "实时监看:"
    echo "  1) /arm_status"
    echo "  2) /joint_states_feedback"
    echo "  3) /joint_ctrl_cmd"
    echo "  4) /enable_cmd"
    echo "  5) /joint_states_feedback 频率"
    echo "  6) 自定义 topic"
    echo "  b) 返回主菜单"
    read -r -p "> " choice

    case "${choice}" in
      1) monitor_topic /arm_status piper_msgs/msg/PiperStatusMsg ;;
      2) monitor_topic /joint_states_feedback sensor_msgs/msg/JointState ;;
      3) monitor_topic /joint_ctrl_cmd sensor_msgs/msg/JointState ;;
      4) monitor_topic /enable_cmd std_msgs/msg/Bool ;;
      5) monitor_topic_hz /joint_states_feedback ;;
      6) monitor_custom_topic ;;
      b|B|back) break ;;
      *) echo "未知选项" ;;
    esac
  done
}

menu_loop() {
  require_ros2
  echo "Piper Unity Simulation ROS TCP 菜单"
  echo "piper_ros: ${PIPER_ROS_ROOT}"
  echo "Unity ROS TCP: ${UNITY_ROS_IP}:${UNITY_ROS_PORT}"

  while true; do
    echo
    echo "1) 启动 ROS TCP Endpoint"
    echo "2) 启动 MoveIt -> Unity action bridge"
    echo "3) 启动 MoveIt RViz"
    echo "4) 使能 Unity 机械臂"
    echo "5) 失能 Unity 机械臂"
    echo "6) 回零"
    echo "7) 设置速度百分比"
    echo "8) 设置 6 关节角度 deg"
    echo "9) 查看一次 arm_status"
    echo "10) 查看 Piper topic"
    echo "11) 实时监看 topic 值"
    echo "q) 退出"
    read -r -p "> " choice

    case "${choice}" in
      1) start_ros_tcp_endpoint ;;
      2) start_moveit_to_unity_bridge ;;
      3) start_moveit ;;
      4) publish_enable true ;;
      5) publish_enable false ;;
      6) home_arm ;;
      7)
        read -r -p "速度百分比 1-100: " SPEED_PERCENT
        echo "速度已设为 ${SPEED_PERCENT}%"
        ;;
      8)
        radians="$(set_all_joints_degrees)"
        publish_joint_command "${radians}"
        ;;
      9) echo_status_once ;;
      10) show_topics ;;
      11) monitor_menu ;;
      q|Q|quit|exit) break ;;
      *) echo "未知选项" ;;
    esac
  done
}

case "${1:-}" in
  --docker)
    run_docker
    ;;
  --inside)
    PIPER_ROS_ROOT="/ws/piper_ros"
    source_ros
    menu_loop
    ;;
  *)
    source_ros
    menu_loop
    ;;
esac
