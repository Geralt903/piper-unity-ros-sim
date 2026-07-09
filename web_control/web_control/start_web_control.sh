#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/../.." && pwd)"
FRONTEND_DIR="${ROOT_DIR}/web_control/frontend"

usage() {
  cat <<EOF
Usage: $0 [OPTION]

Options:
  (none)         Start Piper Unity Web Control
  --server-only  Same as default; kept for compatibility
  --check        Print expected ROS graph and exit
  --stop         Stop local Piper Web Control server
  --help         Show this help message

Environment:
  WEB_CONTROL_HOST   default: 0.0.0.0
  WEB_CONTROL_PORT   default: 8765
EOF
}

source_ros() {
  set +u
  if [[ -f /opt/ros/humble/setup.bash ]]; then
    # shellcheck disable=SC1091
    source /opt/ros/humble/setup.bash
  fi
  if [[ -f "${PIPER_ROS_ROOT:-/home/Light/Projects/Osw_Surf_VR/code/piper_ros}/install/setup.bash" ]]; then
    # shellcheck disable=SC1090
    source "${PIPER_ROS_ROOT:-/home/Light/Projects/Osw_Surf_VR/code/piper_ros}/install/setup.bash"
  fi
  set -u
}

ensure_frontend_build() {
  if [[ -f "${FRONTEND_DIR}/dist/index.html" ]]; then
    return
  fi
  if ! command -v npm >/dev/null 2>&1; then
    echo "Frontend build missing and npm is not available: ${FRONTEND_DIR}/dist/index.html" >&2
    return 1
  fi
  echo "=== Building Piper web frontend ==="
  (cd "${FRONTEND_DIR}" && npm install && npm run build)
}

stop_server() {
  pkill -f "${SCRIPT_DIR}/server.py" 2>/dev/null || true
}

check_graph() {
  source_ros
  echo "=== Expected Piper Unity Web graph ==="
  echo "Topics:"
  ros2 topic list 2>/dev/null | grep -E '(^/joint_ctrl_cmd$|^/joint_states_feedback$|^/joint_states$|^/arm_status$|^/enable_cmd$|^/link6_pose$)' || true
  echo
  echo "Actions:"
  ros2 action list 2>/dev/null | grep -E '(^/move_action$|^/arm_controller/follow_joint_trajectory$)' || true
}

start_server() {
  source_ros
  ensure_frontend_build
  export WEB_CONTROL_HOST="${WEB_CONTROL_HOST:-${WEB_POSE_HOST:-0.0.0.0}}"
  export WEB_CONTROL_PORT="${WEB_CONTROL_PORT:-${WEB_POSE_PORT:-8765}}"
  echo "=== Starting Piper Unity Web Control ==="
  echo "Open: http://localhost:${WEB_CONTROL_PORT}"
  exec python3 "${SCRIPT_DIR}/server.py" --host "${WEB_CONTROL_HOST}" --port "${WEB_CONTROL_PORT}"
}

case "${1:-}" in
  --help|-h)
    usage
    ;;
  --check)
    check_graph
    ;;
  --stop)
    stop_server
    ;;
  --server-only|"")
    start_server
    ;;
  *)
    echo "Unknown option: $1" >&2
    usage >&2
    exit 1
    ;;
esac
