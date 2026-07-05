# Piper Unity ROS2 Simulation

Unity 里的 Piper 机械臂仿真控制工程。当前目标是把 Unity 仿真抽象成完整的控制接口：使能/失能、回零、关节角度、速度百分比、状态机状态、ROS2 topic、MoveIt trajectory action。

## 当前状态

- Unity 使用 URDF Importer 导入 Piper 机械臂。
- 最底部基座固定，不会 Play 后掉下去。
- Unity 侧有 ROS2 topic bridge。
- ROS TCP 连接地址默认是 `127.0.0.1:10000`。
- MoveIt 通过 action bridge 控制 Unity 仿真。
- 菜单脚本支持启动 endpoint、MoveIt/RViz、使能、失能、回零、设置速度、设置 6 轴角度、查看/实时监看 topic。

已验证的 ROS 通道：

- `/enable_cmd` (`std_msgs/msg/Bool`)
- `/joint_ctrl_cmd` (`sensor_msgs/msg/JointState`)
- `/joint_states_feedback` (`sensor_msgs/msg/JointState`)
- `/joint_states` (`sensor_msgs/msg/JointState`)
- `/arm_status` (`piper_msgs/msg/PiperStatusMsg`)
- `/arm_controller/follow_joint_trajectory`
- `/gripper_controller/follow_joint_trajectory`

## 目录

```text
Assets/Scripts/
  PiperArmController.cs              Unity 机械臂控制入口
  PiperUnityArticulationBackend.cs   Unity ArticulationBody 后端
  PiperRosTopicBridge.cs             ROS topic 发布/订阅桥
  PiperControlSystem.cs              控制系统封装入口
  PiperKeyboardController.cs         键盘测试控制
  RosMessages/Piper/msg/             Unity 侧 Piper 自定义消息

tools/
  piper_unity_menu.sh                交互菜单
  piper_moveit_to_unity_bridge.py    MoveIt action -> Unity topic 桥
  piper_sdk_bridge.py                真机 SDK 平滑控制桥
  piper_sdk_console.py               Piper SDK/CAN 交互验证工具
  piper_real_bridge_docker.sh        真机桥 Docker 启动脚本
  piper_sdk_docker.sh                SDK 验证工具 Docker 启动脚本
```

## 前置条件

本工程依赖已有 ROS 工作区：

```text
/home/Light/Projects/Osw_Surf_VR/code/piper_ros
```

菜单脚本默认把它映射到容器内：

```text
/ws/piper_ros
```

默认 Docker 镜像：

```text
piper-ros:humble
```

ROS TCP Endpoint 需要在 Humble 工作区内存在并已 build：

```text
/home/Light/Projects/Osw_Surf_VR/code/piper_ros/src/ros_tcp_endpoint
```

Unity 必须是 ROS2 模式。当前项目已设置：

```text
UNITY_MCP_READY;ROS2
```

如果 Unity Console 出现下面错误，说明又切回了 ROS1：

```text
Incompatible protocol: ROS-TCP-Endpoint is using ROS2, but Unity is in ROS1 mode.
```

处理方式：Unity 菜单 `Robotics/ROS Settings` 里把 `Protocol` 切到 `ROS2`，等待重新编译，然后重启 Play。

## 启动

从 Unity 工程根目录运行：

```bash
./tools/piper_unity_menu.sh --docker
```

### 链路 A：Unity 仿真控制

用于只控制 Unity 里的 ArticulationBody 仿真机械臂。

数据流：

```text
Web / RViz / MoveIt
  -> /arm_controller/follow_joint_trajectory
  -> piper_moveit_to_unity_bridge.py
  -> /joint_ctrl_cmd
  -> Unity PiperRosTopicBridge
  -> Unity ArticulationBody
  -> /joint_states_feedback /arm_status /link6_pose
```

推荐顺序：

```text
1) 快速启动基础链路
Unity Play
2) 启动 MoveIt RViz，或 3) 启动 Web 坐标控制页面
5) 机械臂控制 -> 使能 / 回零
```

重要：先启动 ROS TCP Endpoint，再启动 Unity Play。若 Unity 先进入 Play 并连接失败，停止 Play 后重新 Play。

### 链路 B：Piper 真机平滑控制

用于 Web/MoveIt 控制真实 Piper。Unity 此时不要同时发布 `/joint_states_feedback`，避免和真机反馈冲突。

数据流：

```text
Web / RViz / MoveIt
  -> /arm_controller/follow_joint_trajectory
  -> piper_moveit_to_unity_bridge.py
  -> /joint_ctrl_cmd
  -> piper_sdk_bridge.py
  -> 平滑关节插值
  -> piper_sdk
  -> SocketCAN
  -> Piper 真机
  -> /joint_states_feedback /joint_states /arm_status /link6_pose
```

第一次建议先 dry-run：

```text
8) 启动真机平滑桥
CAN 接口名: can0 或 can_piper
真机速度百分比: 5
最大关节速度 deg/s: 8
只 dry-run 不发真机命令: y
```

确认 `/joint_states_feedback`、`/arm_status`、`/link6_pose` 有数据后，再重新启动真机桥，dry-run 选 `N`。然后：

```text
7) 服务/高级启动 -> 3) MoveIt move_group 无 RViz
3) 启动 Web 坐标控制页面
5) 机械臂控制 -> 1) 使能
```

也可以直接运行：

```bash
./tools/piper_real_bridge_docker.sh --can can0 --speed 5 --max-speed-deg 8
```

## 菜单功能

```text
1) 快速启动基础链路
2) 启动 MoveIt RViz
3) 启动 Web 坐标控制页面
4) MoveIt RRT 位姿规划
5) 机械臂控制
6) 检查/调试
7) 服务/高级启动
8) 启动真机平滑桥
q) 退出
```

Web 坐标控制页面提供 XY 拖拽选点和 Z 高度滑条；点击“规划并执行”后，页面把目标 `base_link` 位姿提交给 `piper_moveit_pose_planner.py`，由 MoveIt `/move_action` 做运动学解算、规划和执行，不在 Unity 侧做末端作弊位移。
页面会每 0.5 秒刷新状态，关节状态优先读取 `/joint_states_feedback`，没有该 topic 时才回退到 `/joint_states`。
菜单启动 Web 后按输出提示打开 `http://localhost:8765`。如果端口被占用，菜单会自动换到后续空闲端口；保持菜单窗口打开，退出菜单会停止 Web 服务。

## 手动测试

使能：

```bash
ros2 topic pub --once /enable_cmd std_msgs/msg/Bool "{data: true}"
```

回零：

```bash
ros2 topic pub --once /joint_ctrl_cmd sensor_msgs/msg/JointState \
  "{name: [joint1, joint2, joint3, joint4, joint5, joint6, gripper], position: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], velocity: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0], effort: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0]}"
```

发一个 action 目标：

```bash
ros2 action send_goal /arm_controller/follow_joint_trajectory control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: [joint1, joint2, joint3, joint4, joint5, joint6], points: [{positions: [0.0, 0.2, -0.2, 0.0, 0.0, 0.0], time_from_start: {sec: 1, nanosec: 0}}]}}"
```

查看反馈：

```bash
ros2 topic echo --once /joint_states_feedback sensor_msgs/msg/JointState
ros2 topic echo --once /arm_status piper_msgs/msg/PiperStatusMsg
```

## MoveIt 桥接说明

`tools/piper_moveit_to_unity_bridge.py` 提供：

- `/arm_controller/follow_joint_trajectory` action server
- `/gripper_controller/follow_joint_trajectory` action server
- `/joint_ctrl_cmd` publisher
- `/enable_cmd` publisher
- `/joint_states_feedback` subscriber
- `/joint_states` publisher

桥接脚本会以 50 Hz 发布 `/joint_states`，并使用当前 ROS 时间戳。这样 MoveIt 不会因为 Unity feedback 时间戳是 Unity 相对时间而报：

```text
latest received state has time 0.000000
Failed to validate trajectory
```

如果 Unity 有 `/joint_states_feedback`，桥接会用 Unity 的真实反馈覆盖内部状态；如果 Unity 暂时没反馈，则用最后命令状态兜底。

## 真机 SDK 平滑桥说明

`tools/piper_sdk_bridge.py` 提供：

- `/joint_ctrl_cmd` subscriber
- `/enable_cmd` subscriber
- `/joint_states_feedback` publisher
- `/joint_states` publisher
- `/arm_status` publisher
- `/link6_pose` publisher
- Piper SDK / SocketCAN 真机控制
- 关节空间平滑插值和命令超时保护

默认安全参数：

```text
speed_percent = 5
control_rate = 50 Hz
max_speed = 8~12 deg/s
max_step = 1 deg
command_timeout = 5 s
```

真机桥不会直接把 MoveIt 目标角度一次性发给 SDK，而是把目标保存在内部，每个控制周期只前进一步：

```text
当前命令角度 -> 限速/限步 -> 关节限位 clamp -> SDK JointCtrl
```

零点和方向假设：

```text
ROS/MoveIt 0 rad = URDF 0 点 = Piper SDK 0 deg
```

当前版本默认不加 offset，也不反转关节方向。如果实机测试发现某个关节方向或零点不一致，需要在真机桥里加入：

```text
sdk_deg[i] = joint_direction[i] * ros_deg[i] + joint_offset_deg[i]
ros_deg[i] = joint_direction[i] * (sdk_deg[i] - joint_offset_deg[i])
```

限位有三层：

```text
MoveIt/URDF joint limits
piper_sdk_bridge.py 软件限位
piper_sdk 自带 joint/gripper limit
```

当前软件限位：

```text
joint1: -150 ~ 150 deg
joint2:    0 ~ 180 deg
joint3: -170 ~ 0 deg
joint4: -100 ~ 100 deg
joint5:  -70 ~ 70 deg
joint6: -120 ~ 120 deg
```

真机第一次测试建议：

```text
1. dry-run 启动真机桥
2. 确认 topic 在线
3. 真机桥 dry-run=N，速度 5%，最大关节速度 8 deg/s
4. 使能
5. 先发很小的关节命令，例如 0 5 -5 0 0 0
6. 确认方向、零点、限位都和 RViz/Unity 一致后，再使用 Web 目标点
```

## 常见问题

### Unity 连接被拒绝

Console 出现：

```text
Connection to 127.0.0.1:10000 failed - Connection refused
```

说明 Unity Play 时 endpoint 没启动。先在菜单里执行 `1`，再重启 Unity Play。

### RViz 空白

确认使用菜单 `3` 启动的是：

```text
piper_moveit.launch.py use_sim_time:=false
```

不要使用旧的 `demo.launch.py` fake controller，否则 RViz 显示成功但 Unity 不会动。

### MoveIt 执行成功但 Unity 不动

检查：

```bash
ros2 topic echo --once /joint_ctrl_cmd sensor_msgs/msg/JointState
ros2 topic echo --once /joint_states_feedback sensor_msgs/msg/JointState
```

如果 `/joint_ctrl_cmd` 有数据但 `/joint_states_feedback` 没有，通常是 Unity 没连上 endpoint 或 Unity 仍在 ROS1 模式。

### ROS2 daemon 异常

如果 `ros2 topic echo` 报 `rclpy.ok()` 相关异常：

```bash
ros2 daemon stop
ros2 daemon start
```

## 保存注意

这个仓库只保存 Unity 工程源码、配置、场景、URDF 资源和工具脚本。以下目录是 Unity 生成物，不提交：

- `Library/`
- `Temp/`
- `Logs/`
- `UserSettings/`
- `Build/`
- `Builds/`
