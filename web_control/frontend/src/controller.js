import {
  apiRequest,
  applyManualCollisionBoxes,
  clearManualCollisionBoxes,
  deletePlanningPreset,
  exportBenchmarkCsv,
  getCameraExtrinsic,
  getBenchmarkOptions,
  getBenchmarkProgress,
  getGripper,
  getJointConfig,
  getKinematics,
  getLinks,
  getLogs,
  getManualCollisionBoxes,
  getOmplConfig,
  getPlatformObstacle,
  getPoints,
  getPresets,
  getRobotState,
  getStatus,
  getVisionStatus,
  getVisionTarget,
  getWorkspaceBounds,
  generateBenchmarkSamples,
  saveManualCollisionBoxes,
  savePlanningPreset,
  saveWorkspaceBounds,
  runBenchmark
} from './api.js';
import { RobotScene } from './robotScene.js';
import {
  byId,
  confirmAction,
  escapeHtml,
  formatNumber,
  refreshIcons,
  runCommand,
  setBadge,
  setStatus,
  showToast
} from './ui.js';

const POSE_FIELDS = [
  ['x', 'X', -0.65, 0.75, 0.001, 0.300],
  ['y', 'Y', -0.65, 0.65, 0.001, 0.000],
  ['z', 'Z', 0.02, 0.85, 0.001, 0.350]
];

const CAMERA_FIELDS = [
  ['x', 'X', -2, 2, 0.001, 0],
  ['y', 'Y', -2, 2, 0.001, 0],
  ['z', 'Z', 0, 3, 0.001, 1.4],
  ['roll', 'Roll', -3.142, 3.142, 0.001, 0],
  ['pitch', 'Pitch', -3.142, 3.142, 0.001, -1.571],
  ['yaw', 'Yaw', -3.142, 3.142, 0.001, 3.142],
  ['image_rotation_deg', 'Image Rot', 0, 270, 90, 180]
];

const JOINT_KEY_PAIRS = [
  ['1', 'q'],
  ['2', 'w'],
  ['3', 'e'],
  ['4', 'r'],
  ['5', 't'],
  ['6', 'y']
];
const JOINT_JOG_STEP_RAD = 0.8 * Math.PI / 180;
const JOINT_JOG_REPEAT_MS = 180;

const ACTION_LABELS = {
  approach: '接近',
  grasp: '抓取',
  lift: '抬起',
  move: '移动',
  release: '释放',
  close: '闭合',
  pick: '自动夹取',
  wait: '等待'
};
const DEFAULT_GRASP_POSE_MODE = 'side';
const GRASP_POSE_DEFAULTS = {
  vertical: { roll: 0, pitch: -Math.PI / 2, yaw: Math.PI, grasp_orientation_mode: 'vertical_grasp' },
  side: { roll: Math.PI / 2, pitch: 0, yaw: 0, grasp_orientation_mode: 'side_grasp' },
  z_parallel: { roll: 0, pitch: Math.PI / 6, yaw: 0, grasp_orientation_mode: 'angled_grasp' }
};
const DECISION_MODE_DETAILS = {
  vertical_grasp: {
    title: '垂直抓取',
    summary: 'IK 先验证垂直末端姿态，再按候选姿态逐个规划。',
    scanLabel: '垂直候选',
    candidateText: orientation => describeCandidateAngles(orientation)
  },
  side_grasp: {
    title: '侧面抓取',
    summary: 'IK 扫描侧向接近姿态，找到可规划候选后锁定。',
    scanLabel: '侧向候选',
    candidateText: orientation => describeCandidateAngles(orientation)
  },
  angled_grasp: {
    title: '斜向抓取',
    summary: 'IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。',
    scanLabel: '斜向候选',
    candidateText: orientation => describeCandidateAngles(orientation)
  },
  z_parallel_grasp: {
    title: '斜向抓取',
    summary: 'IK 扫描斜向抓取姿态，兼顾目标方向和碰撞约束。',
    scanLabel: '斜向候选',
    candidateText: orientation => describeCandidateAngles(orientation)
  },
  flexible_grasp: {
    title: '灵活抓取',
    summary: 'IK 扫描圆柱接触方向，先确认预抓取，再确认抓取位姿。',
    scanLabel: '接触角',
    candidateText: orientation => Number.isFinite(Number(orientation?.theta_deg))
      ? `theta ${formatNumber(orientation.theta_deg, 1)}°`
      : describeCandidateAngles(orientation)
  }
};
const OMPL_CONFIG_STORAGE_KEY = 'piper.omplConfig';
const DEFAULT_OMPL_CONFIG = {
  planner_id: 'RRTConnectkConfigDefault',
  planning_time: 1.0,
  attempts: 1,
  ik_timeout: 0.6
};
const BENCHMARK_SOURCE_LABELS = {
  box_top: '箱上',
  edge: '边缘',
  random: '随机',
  custom: '自定义'
};

const state = {
  arm: 'right',
  activePanel: 'motion',
  linksByArm: { right: [], left: [] },
  jointState: null,
  jointConfig: null,
  jointLimitsByArm: { right: {}, left: {} },
  kinematics: null,
  ompl: {
    options: null,
    config: loadSavedOmplConfig(),
    selectedPresetId: null
  },
  benchmark: {
    options: null,
    defaultsApplied: false,
    selectedPlanners: [],
    samples: [],
    selectedSampleId: null,
    result: null,
    progress: null
  },
  visionTarget: null,
  cameraExtrinsic: null,
  points: [],
  presets: [],
  sequence: loadSavedSequence(),
  cloudVisible: localStorage.getItem('piper.cloudVisible') !== 'false',
  graspPoseMode: normalizeGraspPoseMode(localStorage.getItem('piper.graspPoseMode')),
  platformObstacleVisible: false,
  platformObstacleApplied: false,
  manualCollision: {
    boxes: [],
    applied: false
  },
  workspaceBoundsByArm: {
    right: {
      enabled: false,
      min: [-0.55, -0.55, 0.02],
      max: [0.65, 0.55, 0.85]
    },
    left: {
      enabled: false,
      min: [-0.55, -0.55, 0.02],
      max: [0.65, 0.55, 0.85]
    }
  },
  lastPlanByArm: { right: null, left: null },
  lastDecisionError: null,
  robotByArm: {
    right: { motors_enabled: null, estop_active: null },
    left: { motors_enabled: null, estop_active: null }
  },
  lastStatusAt: 0
};

let scene;
const heldJogKeys = new Set();
let jogInFlight = false;
let jogRepeatTimer = null;
let lastJogErrorAt = 0;
let benchmarkProgressTimer = null;

export function startApp() {
  buildPoseFields();
  buildCameraFields();
  bindRange('velocityScaling', 'velocityValue', value => Number(value).toFixed(2));
  bindRange('accelerationScaling', 'accelerationValue', value => Number(value).toFixed(2));
  bindNavigation();
  bindCommands();
  bindKeyboardControls();
  updateArmUi();
  updateGraspPoseModeUi();
  updateRobotCommandButtons({ anyConnected: false, anyEnabled: false, allEnabled: false, anyEstop: false });
  updateCloudButton();
  updatePlatformButtons();
  updateManualCollisionButtons();
  renderDecisionPreview();
  renderSequence();
  renderBenchmarkQuickStats();
  renderBenchmarkSummary();
  renderBenchmarkSamples();
  renderBenchmarkProgress();
  refreshIcons();
  startScene();
  startClock();
  initialLoad();
  startPolling();
}

function startScene() {
  scene = new RobotScene(byId('robotScene'), {
    onLoadProgress: (loaded, total) => {
      byId('sceneLoadState').querySelector('span:last-child').textContent =
        `正在加载 Piper URDF ${loaded}/${total}`;
    },
    onLoaded: robot => {
      byId('sceneLoadState').classList.add('ready');
      byId('sceneLoadState').querySelector('span:last-child').textContent = 'Piper URDF 已加载';
      byId('sceneModelState').textContent = `${Object.keys(robot.joints || {}).length} 个关节`;
      scene.applyJointState(state.jointState);
      window.setTimeout(() => {
        byId('sceneLoadState').hidden = true;
      }, 1000);
    },
    onLoadError: error => {
      byId('sceneLoadState').querySelector('span:last-child').textContent = 'URDF 加载失败';
      byId('sceneModelState').textContent = '模型不可用';
      showToast(`URDF 加载失败：${error.message || error}`, 'bad', 6000);
    },
    onFps: fps => {
      byId('sceneFps').textContent = `${fps} FPS`;
    }
  });
  scene.setCloudVisible(state.cloudVisible);
  scene.setTargetPose(readPose());
}

async function initialLoad() {
  await Promise.allSettled([
    refreshStatus(),
    refreshRobotState(),
    refreshLinks(),
    refreshGripper(),
    loadJointLimits(),
    loadCameraExtrinsic(),
    refreshVision(),
    loadPointLibrary(),
    loadPresetLibrary(),
    loadPlatformObstacle(false),
    loadManualCollisionBoxes(false),
    loadWorkspaceBounds(false),
    loadKinematics(),
    loadOmplConfig(),
    loadBenchmarkOptions(false)
  ]);
  loadSceneCloud();
}

function startPolling() {
  pollEvery(refreshStatus, 100);
  pollEvery(refreshLinks, 400);
  pollEvery(refreshRobotState, 600);
  pollEvery(refreshVision, 2000);
  window.setInterval(() => {
    if (state.activePanel === 'logs' && byId('logAutoRefresh').checked) loadLogs();
  }, 3000);
}

function pollEvery(fn, intervalMs) {
  let pending = false;
  window.setInterval(async () => {
    if (pending) return;
    pending = true;
    try {
      await fn();
    } finally {
      pending = false;
    }
  }, intervalMs);
}

function startClock() {
  const update = () => {
    byId('footerClock').textContent = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  };
  update();
  window.setInterval(update, 1000);
}

function buildPoseFields() {
  const root = byId('poseFields');
  root.innerHTML = POSE_FIELDS.map(([id, label, min, max, step, value]) => `
    <label class="pose-field pose-slider-field">
      <span>${label} / m</span>
      <output id="pose_${id}_value">${formatNumber(value, 3)}</output>
      <input id="pose_${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}">
    </label>
  `).join('');
  for (const [id] of POSE_FIELDS) {
    byId(`pose_${id}`).addEventListener('input', () => {
      updatePoseOutput(id);
      scene?.setTargetPose(readPose());
    });
  }
}

function updatePoseOutput(id) {
  const output = byId(`pose_${id}_value`);
  if (output) output.textContent = formatNumber(Number(byId(`pose_${id}`).value), 3);
}

function buildCameraFields() {
  const root = byId('cameraFields');
  root.innerHTML = CAMERA_FIELDS.map(([id, label, min, max, step, value]) => `
    <label class="pose-field">
      <span>${label}</span>
      <input id="camera_${id}" type="number" min="${min}" max="${max}" step="${step}" value="${value}">
    </label>
  `).join('');
  for (const [id] of CAMERA_FIELDS) {
    byId(`camera_${id}`).addEventListener('input', () => {
      state.cameraExtrinsic = readCameraExtrinsic();
      scene?.setCameraExtrinsic(state.cameraExtrinsic);
      byId('extrinsicStatus').textContent = '外参已修改，尚未保存';
    });
  }
}

function bindRange(inputId, outputId, formatter) {
  const input = byId(inputId);
  const output = byId(outputId);
  if (!input || !output) return;
  const update = () => {
    output.textContent = formatter(input.value);
  };
  input.addEventListener('input', update);
  update();
}

function bindNavigation() {
  document.querySelectorAll('[data-panel]').forEach(button => {
    button.addEventListener('click', () => switchPanel(button.dataset.panel));
  });
  byId('toggleInspector').addEventListener('click', () => {
    byId('inspectorPanel').classList.toggle('open');
  });
  document.querySelectorAll('[data-arm]').forEach(button => {
    button.addEventListener('click', () => setArm(button.dataset.arm));
  });
  document.querySelectorAll('[data-grasp-mode]').forEach(button => {
    button.addEventListener('click', () => setGraspPoseMode(button.dataset.graspMode));
  });
  byId('fitViewButton').addEventListener('click', () => scene.fitView());
  byId('frontViewButton').addEventListener('click', () => scene.frontView());
  byId('resetViewButton').addEventListener('click', () => scene.resetView());
  document.querySelector('.scene-panel').addEventListener('click', event => {
    if (event.target.closest('button')) return;
    if (window.innerWidth <= 760) byId('controlPanel').classList.remove('open');
    if (window.innerWidth <= 1040) byId('inspectorPanel').classList.remove('open');
  });
}

function switchPanel(name) {
  state.activePanel = name;
  document.querySelectorAll('[data-panel]').forEach(button => {
    button.classList.toggle('active', button.dataset.panel === name);
  });
  document.querySelectorAll('[data-panel-content]').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panelContent === name);
  });
  if (window.innerWidth <= 760) byId('controlPanel').classList.add('open');
  if (name === 'logs') loadLogs();
  if (name === 'ompl') loadOmplConfig();
  if (name === 'benchmark') loadBenchmarkOptions();
  if (name === 'calibration') {
    loadJointConfig();
    loadKinematics();
  }
}

async function setArm(arm) {
  clearHeldJogKeys();
  state.arm = 'right';
  localStorage.setItem('piper.activeArm', state.arm);
  updateArmUi();
  await Promise.allSettled([refreshStatus(), refreshRobotState(), refreshLinks(), refreshGripper()]);
  if (state.activePanel === 'calibration') loadJointConfig();
  byId('footerMessage').textContent = `当前控制：${armLabel()}`;
}

function updateArmUi() {
  document.querySelectorAll('[data-arm]').forEach(button => {
    const active = button.dataset.arm === state.arm;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  byId('jointPanelTitle').textContent = `${armLabel()}关节`;
  renderWorkspaceBounds();
  scene?.setWorkspaceBounds(currentWorkspaceBounds());
  renderJointTelemetry();
  updateTcp();
  renderBenchmarkQuickStats();
  renderBenchmarkSamples();
  if (state.activePanel === 'benchmark') loadBenchmarkOptions(false);
}

function normalizeGraspPoseMode(mode) {
  return mode === 'vertical' || mode === 'side' || mode === 'z_parallel' ? mode : DEFAULT_GRASP_POSE_MODE;
}

function setGraspPoseMode(mode) {
  state.graspPoseMode = normalizeGraspPoseMode(mode);
  localStorage.setItem('piper.graspPoseMode', state.graspPoseMode);
  updateGraspPoseModeUi();
  renderDecisionPreview();
  scene?.setTargetPose(readPose());
}

function updateGraspPoseModeUi() {
  document.querySelectorAll('[data-grasp-mode]').forEach(button => {
    const active = button.dataset.graspMode === state.graspPoseMode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
}

function bindCommands() {
  const on = (id, eventName, handler) => byId(id)?.addEventListener(eventName, handler);
  on('syncTcpButton', 'click', syncTargetToTcp);
  on('planButton', 'click', planMotion);
  on('executeButton', 'click', executePlan);
  on('readVisionButton', 'click', () => readVisionTarget(true));
  on('savePointQuickButton', 'click', savePoint);
  on('savePointButton', 'click', savePoint);
  on('savePresetButton', 'click', savePreset);
  on('emergencyStop', 'click', emergencyStop);
  on('enableButton', 'click', enableRobot);
  on('disableButton', 'click', disableRobot);
  on('resetEstopButton', 'click', resetEstop);
  on('homeButton', 'click', homeRobot);
  on('gripperOpenButton', 'click', () => runArmAction('gripper_open'));
  on('gripperCloseButton', 'click', () => runArmAction('gripper_close'));
  on('reloadExtrinsicButton', 'click', loadCameraExtrinsic);
  on('saveExtrinsicButton', 'click', saveCameraExtrinsic);
  on('toggleCloudButton', 'click', toggleCloud);
  on('saveCloudButton', 'click', saveSceneCloud);
  on('rebuildCloudButton', 'click', rebuildCloudWithCurrentExtrinsic);
  on('loadPlatformButton', 'click', togglePlatformObstacle);
  on('applyPlatformButton', 'click', applyPlatformObstacle);
  on('addCollisionBoxButton', 'click', addManualCollisionBox);
  on('saveCollisionBoxesButton', 'click', saveManualCollisionConfig);
  on('applyCollisionBoxesButton', 'click', applyManualCollisionConfig);
  on('clearCollisionBoxesButton', 'click', clearManualCollisionConfig);
  on('manualCollisionFields', 'input', handleManualCollisionInput);
  on('manualCollisionFields', 'change', handleManualCollisionInput);
  on('manualCollisionFields', 'click', handleManualCollisionClick);
  on('workspaceBoundsFields', 'input', handleWorkspaceBoundsInput);
  on('workspaceBoundsFields', 'change', handleWorkspaceBoundsInput);
  on('saveWorkspaceBoundsButton', 'click', saveWorkspaceBoundsConfig);
  on('loadJointConfigButton', 'click', loadJointConfig);
  on('saveJointConfigButton', 'click', saveJointConfig);
  on('reloadKinematicsButton', 'click', loadKinematics);
  on('saveKinematicsButton', 'click', saveKinematics);
  on('reloadOmplConfigButton', 'click', loadOmplConfig);
  on('applyOmplPresetButton', 'click', applySelectedOmplPreset);
  on('saveOmplPresetButton', 'click', saveCurrentOmplPreset);
  on('deleteOmplPresetButton', 'click', deleteSelectedOmplPreset);
  on('omplPlannerSelect', 'change', handleOmplConfigInput);
  on('omplPlanningTime', 'input', handleOmplConfigInput);
  on('omplAttempts', 'input', handleOmplConfigInput);
  on('omplIkTimeout', 'input', handleOmplConfigInput);
  on('generateBenchmarkButton', 'click', generateBenchmarkSet);
  on('runBenchmarkButton', 'click', runBenchmarkSet);
  on('saveBenchmarkPresetButton', 'click', saveBenchmarkRuntimePreset);
  on('exportBenchmarkCsvButton', 'click', exportCurrentBenchmarkCsv);
  on('benchmarkSamples', 'click', handleBenchmarkSampleClick);
  on('benchmarkPlanners', 'change', handleBenchmarkPlannerChange);
  [
    'benchmarkCollisionBox',
    'benchmarkBoxCount',
    'benchmarkBoxOffsetCm',
    'benchmarkEdgeCount',
    'benchmarkEdgeDistanceCm',
    'benchmarkRandomCount',
    'benchmarkSeed'
  ].forEach(id => on(id, id === 'benchmarkCollisionBox' ? 'change' : 'input', handleBenchmarkSampleConfigInput));
  ['benchmarkPlanningTime', 'benchmarkAttempts', 'benchmarkIkTimeout'].forEach(id => {
    on(id, 'input', handleBenchmarkRuntimeInput);
  });
  on('addSequenceButton', 'click', addSequenceStep);
  on('clearSequenceButton', 'click', clearSequence);
  on('executeSequenceButton', 'click', executeSequence);
  on('refreshLogsButton', 'click', loadLogs);
  on('logLevelFilter', 'change', loadLogs);
  on('pointsList', 'click', handleLibraryClick);
  on('presetsList', 'click', handleLibraryClick);
  on('sequenceList', 'click', handleSequenceClick);
}

function bindKeyboardControls() {
  window.addEventListener('keydown', event => {
    if (isEditableTarget(event.target) || !byId('confirmDialog').hidden) return;
    const key = event.key.toLowerCase();

    if (key === 'tab' || key === '[' || key === ']') {
      event.preventDefault();
      if (event.repeat) return;
      const arm = key === '[' ? 'left' : key === ']' ? 'right' : state.arm === 'left' ? 'right' : 'left';
      setArm(arm);
      return;
    }

    const mapping = jointMappingForKey(key);
    if (!mapping) return;
    event.preventDefault();
    if (!canJogActiveArm()) {
      if (!event.repeat) showToast(`${armLabel()}尚未使能，不能使用关节键盘控制`, 'warn');
      return;
    }

    heldJogKeys.add(key);
    setJogKeyPressed(key, true);
    if (!event.repeat) requestJointJog(mapping.joint, mapping.direction);
    startJogRepeat();
  });

  window.addEventListener('keyup', event => {
    const key = event.key.toLowerCase();
    if (!jointMappingForKey(key)) return;
    heldJogKeys.delete(key);
    setJogKeyPressed(key, false);
    if (!heldJogKeys.size) stopJogRepeat();
  });
  window.addEventListener('blur', clearHeldJogKeys);

  byId('jointTelemetry').addEventListener('click', event => {
    const button = event.target.closest('[data-jog-joint]');
    if (!button || button.disabled) return;
    requestJointJog(Number(button.dataset.jogJoint), Number(button.dataset.jogDirection));
  });
}

function isEditableTarget(target) {
  return target instanceof HTMLElement &&
    (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
}

function jointMappingForKey(key) {
  for (let index = 0; index < JOINT_KEY_PAIRS.length; index += 1) {
    const [positive, negative] = JOINT_KEY_PAIRS[index];
    if (key === positive) return { joint: index + 1, direction: 1 };
    if (key === negative) return { joint: index + 1, direction: -1 };
  }
  return null;
}

function canJogActiveArm() {
  const robot = state.robotByArm[state.arm];
  return robot?.motors_enabled === true && robot?.estop_active !== true;
}

function setJogKeyPressed(key, pressed) {
  document.querySelectorAll(`[data-jog-key="${key}"]`).forEach(button => {
    button.classList.toggle('pressed', pressed);
  });
}

function startJogRepeat() {
  if (jogRepeatTimer) return;
  jogRepeatTimer = window.setInterval(() => {
    const key = heldJogKeys.values().next().value;
    const mapping = jointMappingForKey(key);
    if (mapping) requestJointJog(mapping.joint, mapping.direction);
  }, JOINT_JOG_REPEAT_MS);
}

function stopJogRepeat() {
  if (!jogRepeatTimer) return;
  window.clearInterval(jogRepeatTimer);
  jogRepeatTimer = null;
}

function clearHeldJogKeys() {
  heldJogKeys.clear();
  stopJogRepeat();
  document.querySelectorAll('[data-jog-key].pressed').forEach(button => button.classList.remove('pressed'));
}

async function requestJointJog(joint, direction) {
  if (jogInFlight || !canJogActiveArm()) return;
  jogInFlight = true;
  try {
    const result = await apiRequest('/api/joint_jog', {
      arm: state.arm,
      joint,
      delta_rad: direction * JOINT_JOG_STEP_RAD,
      duration_sec: 0.25
    });
    const degrees = Number(result.target_rad) * 180 / Math.PI;
    byId('footerMessage').textContent =
      `${armLabel()} J${joint} → ${Number.isFinite(degrees) ? `${degrees.toFixed(1)}°` : '已发送'}`;
  } catch (error) {
    clearHeldJogKeys();
    if (Date.now() - lastJogErrorAt > 1500) {
      showToast(`关节键盘控制失败：${error.message}`, 'bad', 5000);
      lastJogErrorAt = Date.now();
    }
  } finally {
    jogInFlight = false;
  }
}

function readPose() {
  const pose = Object.fromEntries(POSE_FIELDS.map(([id]) => [id, Number(byId(`pose_${id}`).value)]));
  const mode = normalizeGraspPoseMode(state.graspPoseMode);
  const orientation = GRASP_POSE_DEFAULTS[mode];
  const request = {
    ...pose,
    roll: orientation.roll,
    pitch: orientation.pitch,
    yaw: orientation.yaw,
    arm: state.arm,
    velocity_scaling: Number(byId('velocityScaling').value),
    acceleration_scaling: Number(byId('accelerationScaling').value),
    orientation_tolerance: 0.5,
    stay_near: false,
    avoid_platform: byId('avoidPlatform').checked,
    collision_boxes: currentManualCollisionBoxes(),
    grasp_orientation_mode: orientation.grasp_orientation_mode,
    position_only: true,
    ...readOmplRuntimeConfig()
  };
  return request;
}

function readGraspPose() {
  return readPose();
}

function numericValue(id, fallback) {
  const value = Number(byId(id)?.value);
  return Number.isFinite(value) ? value : fallback;
}

function setPose(pose) {
  for (const [id] of POSE_FIELDS) {
    if (Number.isFinite(Number(pose?.[id]))) {
      byId(`pose_${id}`).value = pose[id];
      updatePoseOutput(id);
    }
  }
  scene?.setTargetPose(readPose());
}

function readCameraExtrinsic() {
  return Object.fromEntries(CAMERA_FIELDS.map(([id]) => [id, Number(byId(`camera_${id}`).value)]));
}

function setCameraExtrinsic(extrinsic) {
  for (const [id] of CAMERA_FIELDS) {
    if (Number.isFinite(Number(extrinsic?.[id]))) byId(`camera_${id}`).value = extrinsic[id];
  }
  state.cameraExtrinsic = readCameraExtrinsic();
  scene?.setCameraExtrinsic(state.cameraExtrinsic);
}

async function refreshStatus() {
  try {
    const data = await getStatus();
    state.lastStatusAt = Date.now();
    state.jointState = data.joint_state || null;
    state.lastPlanByArm = { ...state.lastPlanByArm, ...(data.last_plan || {}) };
    scene?.applyJointState(state.jointState);
    renderJointTelemetry();
    renderDecisionPreview();

    const plan = data.last_plan?.[state.arm];
    const planState = data.status?.[state.arm] || '就绪';
    const plannerText = plan?.ompl?.planner_id ? ` / ${plan.ompl.planner_id}` : '';
    setStatus(
      'statusPlan',
      '规划',
      plan ? `${plan.points ?? '--'} 点 / ${formatNumber(plan.duration, 2)} s${plannerText}` : planState,
      plan ? 'good' : 'neutral'
    );
    setStatus('statusConnection', '控制服务', '在线', 'good');
    if (!document.body.dataset.busy && byId('footerMessage').textContent.startsWith('等待')) {
      byId('footerMessage').textContent = 'Piper 控制服务在线';
    }
  } catch {
    setStatus('statusConnection', '控制服务', '离线', 'bad');
    setStatus('statusPlan', '规划', '状态不可用', 'bad');
    if (!document.body.dataset.busy) byId('footerMessage').textContent = 'Piper 控制服务离线';
  }
}

async function refreshRobotState() {
  try {
    const data = await getRobotState();
    let anyConnected = false;
    let anyEstop = false;
    let anyEnabled = false;
    let allEnabled = true;
    let allKnown = true;
    for (const arm of ['right']) {
      const armState = data.state?.[arm] || {};
      state.robotByArm[arm] = {
        motors_enabled: armState.motors_enabled,
        estop_active: armState.estop_active
      };
      const row = byId(`${arm}ArmState`);
      const enabled = armState.motors_enabled;
      const estop = armState.estop_active;
      anyConnected ||= enabled !== null && enabled !== undefined;
      anyEnabled ||= enabled === true;
      allEnabled &&= enabled === true;
      allKnown &&= enabled !== null && enabled !== undefined;
      anyEstop ||= estop === true;
      row.children[1].textContent = enabled == null ? '未连接' : enabled ? '已使能' : '未使能';
      row.children[2].textContent = estop == null ? '--' : estop ? '急停' : '正常';
      row.dataset.state = estop ? 'bad' : enabled ? 'good' : 'neutral';
    }
    state.robotByArm.left = { motors_enabled: null, estop_active: null };
    allEnabled &&= allKnown;
    setBadge(
      'robotOverallState',
      anyEstop ? '急停' : anyConnected ? '在线' : '未连接',
      anyEstop ? 'bad' : anyConnected ? 'good' : 'bad'
    );
    updateRobotCommandButtons({ anyConnected, anyEnabled, allEnabled, anyEstop });
    renderJointTelemetry();
  } catch {
    state.robotByArm.right = { motors_enabled: null, estop_active: null };
    state.robotByArm.left = { motors_enabled: null, estop_active: null };
    setBadge('robotOverallState', '离线', 'bad');
    updateRobotCommandButtons({ anyConnected: false, anyEnabled: false, allEnabled: false, anyEstop: false });
    renderJointTelemetry();
  }
}

async function refreshLinks() {
  try {
    const [right, left] = await Promise.all([getLinks('right'), getLinks('left')]);
    state.linksByArm.right = right.links || [];
    state.linksByArm.left = left.links || [];
    updateTcp();
  } catch {
    setStatus('statusTcp', '末端位置', '读取失败', 'bad');
  }
}

function currentTcp() {
  const tcpName = 'link6';
  return state.linksByArm[state.arm]?.find(link => link.name === tcpName && link.position);
}

function updateTcp() {
  const tcp = currentTcp();
  const xyz = tcp?.position;
  byId('tcpX').textContent = formatNumber(xyz?.[0]);
  byId('tcpY').textContent = formatNumber(xyz?.[1]);
  byId('tcpZ').textContent = formatNumber(xyz?.[2]);
  scene?.setTcpFrame(tcp);
  setStatus('statusTcp', '末端位置', xyz ? `${formatNumber(xyz[0], 2)}, ${formatNumber(xyz[1], 2)}, ${formatNumber(xyz[2], 2)}` : '等待数据', xyz ? 'good' : 'neutral');
}

function syncTargetToTcp() {
  const tcp = currentTcp();
  if (!tcp) {
    showToast('当前没有可用的末端位置数据', 'warn');
    return;
  }
  setPose({ ...readPose(), x: tcp.position[0], y: tcp.position[1], z: tcp.position[2] });
  showToast(`已同步 ${armLabel()}末端位置`);
}

function renderJointTelemetry() {
  const root = byId('jointTelemetry');
  const jointState = state.jointState;
  const jogEnabled = canJogActiveArm();
  const rows = [];
  for (let index = 1; index <= 6; index += 1) {
    const stateIndex = jointState?.name?.indexOf(`joint${index}`) ?? -1;
    const radians = stateIndex >= 0 ? Number(jointState.position[stateIndex]) : NaN;
    const degrees = radians * 180 / Math.PI;
    const width = Number.isFinite(degrees) ? Math.min(50, Math.abs(degrees) / 3.6) : 0;
    const transform = degrees < 0 ? 'translateX(-100%)' : 'none';
    const [positiveKey, negativeKey] = JOINT_KEY_PAIRS[index - 1];
    rows.push(`
      <div class="joint-telemetry-row">
        <b>J${index}</b>
        <div class="joint-meter"><span style="width:${width}%;transform:${transform}"></span></div>
        <output>${Number.isFinite(degrees) ? `${degrees.toFixed(1)}°` : '--'}</output>
        <div class="joint-jog-keys">
          <button type="button" data-jog-joint="${index}" data-jog-direction="1" data-jog-key="${positiveKey}"
            title="关节 ${index} 正向微动" ${jogEnabled ? '' : 'disabled'}>${positiveKey.toUpperCase()}</button>
          <button type="button" data-jog-joint="${index}" data-jog-direction="-1" data-jog-key="${negativeKey}"
            title="关节 ${index} 反向微动" ${jogEnabled ? '' : 'disabled'}>${negativeKey.toUpperCase()}</button>
        </div>
      </div>
    `);
  }
  root.innerHTML = rows.join('');
  heldJogKeys.forEach(key => setJogKeyPressed(key, true));
  byId('jointStamp').textContent = jointState ? '实时' : '--';
}

async function refreshGripper() {
  try {
    const data = await getGripper(state.arm);
    const closed = data.state === 'closed';
    setBadge('gripperState', closed ? '已闭合' : '已张开', 'good');
  } catch {
    setBadge('gripperState', '未知', 'bad');
  }
}

async function refreshVision() {
  try {
    const [targetResult, statusResult] = await Promise.allSettled([getVisionTarget(), getVisionStatus()]);
    if (targetResult.status === 'fulfilled' && targetResult.value?.urdf_xyz_m) {
      state.visionTarget = targetResult.value;
      const xyz = state.visionTarget.urdf_xyz_m;
      scene?.setVisionTarget(state.visionTarget);
      byId('visionX').textContent = formatNumber(xyz[0]);
      byId('visionY').textContent = formatNumber(xyz[1]);
      byId('visionZ').textContent = formatNumber(xyz[2]);
      setStatus('statusVision', '视觉', `${formatNumber(xyz[0], 2)}, ${formatNumber(xyz[1], 2)}, ${formatNumber(xyz[2], 2)}`, 'good');
    } else {
      setStatus('statusVision', '视觉', '无目标', 'neutral');
    }
    if (statusResult.status === 'fulfilled') {
      const objects = statusResult.value.objects || statusResult.value.detections || [];
      scene?.setObjectMarkers(objects);
      setBadge('cloudState', '视觉在线', 'good');
    }
  } catch {
    setStatus('statusVision', '视觉', '离线', 'bad');
    setBadge('cloudState', '未连接', 'bad');
  }
}

async function readVisionTarget(applyToPose) {
  await runCommand('读取视觉目标', async () => {
    const target = await getVisionTarget();
    if (!target?.urdf_xyz_m) throw new Error(target?.error || '未找到有效视觉目标');
    state.visionTarget = target;
    scene.setVisionTarget(target);
    if (applyToPose) {
      const [x, y, z] = target.urdf_xyz_m;
      setPose({ ...readPose(), x, y, z });
    }
    return target;
  });
}

async function planMotion() {
  await runCommand(
    '运动规划',
    async () => {
      state.lastDecisionError = null;
      renderDecisionPreview({ pending: true });
      const result = await apiRequest('/api/plan', readPose());
      if (result.plan?.platform_obstacles || result.plan?.platform_obstacle) {
        scene.setPlatformObstacle(result.plan.platform_obstacles || result.plan.platform_obstacle);
      }
      updateManualCollisionFromSummary(result.plan?.manual_collision);
      if (result.plan) {
        state.lastPlanByArm[state.arm] = result.plan;
        renderDecisionPreview();
      }
      await refreshStatus();
      return result;
    },
    {
      onError: (error) => {
        const failure = error?.payload?.failure;
        state.lastDecisionError = failure || { title: error.message };
        renderDecisionPreview();
        const label = failure?.stage_label ? `${failure.stage_label}失败` : '规划失败';
        const detail = failure?.title || error.message;
        setStatus('statusPlan', label, detail, 'bad');
      }
    }
  );
}

function renderDecisionPreview(options = {}) {
  const pose = readPose();
  const plan = state.lastPlanByArm[state.arm];
  const orientation = plan?.grasp_orientation || null;
  const currentMode = pose.grasp_orientation_mode;
  const selected = Boolean(orientation && decisionModeMatches(orientation.mode, currentMode));
  const mode = selected ? orientation.mode : currentMode;
  const detail = DECISION_MODE_DETAILS[mode] || DECISION_MODE_DETAILS[pose.grasp_orientation_mode];
  const rejectedCount = Array.isArray(orientation?.rejected_candidates) ? orientation.rejected_candidates.length : 0;
  const candidateIndex = Number(orientation?.candidate_index);
  const activeIndex = selected && Number.isFinite(candidateIndex) ? Math.max(1, candidateIndex) : null;
  const totalScan = selected ? Math.max(activeIndex || 1, rejectedCount + 1) : 3;
  const steps = decisionCandidateSteps({
    detail,
    orientation,
    plan,
    pose,
    selected,
    pending: options.pending,
    activeIndex,
    totalScan
  });
  if (state.lastDecisionError) {
    steps.push({
      label: '失败',
      detail: state.lastDecisionError.stage_label || state.lastDecisionError.title || '未找到可行候选',
      state: 'failed'
    });
  }

  const html = `
    <div class="decision-title">
      <strong>${escapeHtml(detail.title)}</strong>
      <span>${escapeHtml(selected ? '已确定' : options.pending ? '规划中' : '预览')}</span>
    </div>
    <p>${escapeHtml(detail.summary)}</p>
    <div class="decision-chain">
      ${steps.map(step => `
        <div class="decision-step" data-state="${step.state}">
          <b>${escapeHtml(step.label)}</b>
          <span>${escapeHtml(step.detail)}</span>
        </div>
      `).join('')}
    </div>
    ${selected ? `
      <div class="decision-meta">
        <span>候选 ${activeIndex ?? '--'}</span>
        <span>拒绝 ${rejectedCount}</span>
        <span>${escapeHtml(plan?.ompl?.planner_id || 'IK')}</span>
      </div>
    ` : ''}
  `;
  for (const id of ['decisionPreview', 'activeDecisionPreview']) {
    const root = byId(id);
    if (root) root.innerHTML = html;
  }
  setBadge('decisionState', selected ? '已确定' : options.pending ? '规划中' : '预览', selected ? 'good' : options.pending ? 'warn' : 'neutral');
}

function decisionCandidateSteps({ detail, orientation, plan, pose, selected, pending, activeIndex, totalScan }) {
  const limit = Math.min(totalScan, 6);
  const steps = [];
  const isFallback = selected && String(plan?.mode || '').includes('direct IK fallback');
  for (let index = 1; index <= limit; index += 1) {
    const beforeSelected = selected && activeIndex && index < activeIndex;
    const isSelected = selected && activeIndex === index;
    const isPendingFirst = pending && index === 1;
    const ikState = isSelected ? 'done' : beforeSelected ? 'failed' : isPendingFirst ? 'active' : 'idle';
    const omplState = isSelected ? (isFallback ? 'failed' : 'done') : beforeSelected ? 'failed' : 'idle';
    const ikDetail = isSelected
      ? detail.candidateText(orientation)
      : `IK ${formatNumber(pose.ik_timeout, 2)}s`;
    const omplDetail = isSelected
      ? isFallback
        ? 'OMPL失败，使用IK直达'
        : `${plan?.ompl?.planner_id || 'OMPL'} ${formatNumber(plan?.ompl?.planning_time ?? pose.planning_time, 1)}s`
      : beforeSelected
        ? '未通过'
        : '等待IK通过';
    steps.push({
      label: `${detail.scanLabel}${index} IK`,
      detail: ikDetail,
      state: ikState
    });
    steps.push({
      label: `${detail.scanLabel}${index} OMPL`,
      detail: omplDetail,
      state: omplState
    });
  }
  steps.push({
    label: selected ? '确定' : pending ? '等待结果' : '待确定',
    detail: selected ? `${detail.title} · ${plan?.mode || '规划完成'}` : detail.title,
    state: selected ? 'done' : pending ? 'active' : 'idle'
  });
  return steps;
}

function describeCandidateAngles(orientation) {
  const parts = [];
  for (const key of ['roll', 'pitch', 'yaw']) {
    const value = Number(orientation?.[key]);
    if (Number.isFinite(value)) parts.push(`${key} ${formatNumber(value, 2)}`);
  }
  return parts.length ? parts.join(' / ') : '候选姿态';
}

function decisionModeMatches(planMode, currentMode) {
  if (planMode === currentMode) return true;
  return planMode === 'angled_grasp' && currentMode === 'z_parallel_grasp';
}

async function executePlan() {
  await runCommand(
    '执行规划',
    async () => {
      const result = await apiRequest('/api/execute', { arm: state.arm });
      await refreshStatus();
      return result;
    },
    { confirm: `即将让${armLabel()}执行最后一次规划，确认工作区安全后继续。`, confirmTitle: '确认执行轨迹' }
  );
}

async function runArmAction(action) {
  const pose = ['approach', 'grasp'].includes(action) ? readGraspPose() : readPose();
  const definitions = {
    approach: ['接近目标', '/api/approach', { pose, offset_z: numericValue('pickApproach', 0.1) }],
    lift: ['抬起机械臂', '/api/lift', { arm: state.arm, offset_z: numericValue('pickLift', 0.1) }],
    grasp: ['抓取目标', '/api/grasp', { pose }],
    place: ['放置目标', '/api/place', { pose }],
    gripper_open: ['张开夹爪', '/api/gripper', { arm: state.arm, action: 'open' }],
    gripper_close: ['闭合夹爪', '/api/gripper', { arm: state.arm, action: 'close' }]
  };
  const command = definitions[action];
  if (!command) return;
  const result = await runCommand(command[0], async () => {
    return apiRequest(command[1], command[2]);
  }, {
    confirm: `${command[0]}将驱动${armLabel()}，确认周围无人员或障碍物。`
  });
  updateManualCollisionFromSummary(findManualCollisionSummary(result));
  refreshGripper();
  refreshStatus();
}

async function runAutoPick() {
  const result = await runCommand(
    '自动夹取',
    async () => {
      return apiRequest('/api/pick', {
        pose: readGraspPose(),
        approach_height: numericValue('pickApproach', 0.1),
        descend_distance: numericValue('pickDescend', 0.05),
        hold_seconds: numericValue('pickHold', 1.0),
        lift_height: numericValue('pickLift', 0.1)
      });
    },
    { confirm: `即将由${armLabel()}执行完整夹取流程，请确认目标位姿和现场安全。`, confirmTitle: '确认自动夹取' }
  );
  updateManualCollisionFromSummary(findManualCollisionSummary(result));
  refreshGripper();
}

async function enableRobot() {
  await runCommand('Piper 使能', () => apiRequest('/api/enable', { arm: 'right', enabled: true }), {
    confirm: '即将使能 Piper，确认急停可用且工作区安全。'
  });
  refreshRobotState();
}

async function disableRobot() {
  await runCommand('取消使能', () => apiRequest('/api/enable', { arm: 'right', enabled: false }));
  refreshRobotState();
}

async function resetEstop() {
  await runCommand('复位急停', () => apiRequest('/api/reset_estop', { arm: 'right' }), {
    confirm: '确认急停原因已经排除，然后复位 Piper 急停状态。'
  });
  refreshRobotState();
}

async function homeRobot() {
  const result = await runCommand('Piper 回零', () => apiRequest('/api/home_zero', {
    arm: 'right',
    avoid_platform: byId('avoidPlatform')?.checked !== false,
    collision_boxes: currentManualCollisionBoxes(),
    velocity_scaling: Number(byId('velocityScaling').value),
    acceleration_scaling: Number(byId('accelerationScaling').value),
    ...readOmplRuntimeConfig()
  }), {
    confirm: '将让 Piper 回到零位，请确认工作区安全。',
    confirmTitle: '确认 Piper 回零'
  });
  updateManualCollisionFromSummary(findManualCollisionSummary(result));
  refreshStatus();
}

async function emergencyStop() {
  if (!(await confirmAction('将立即向 Piper 发送停止命令。', '紧急停止', '立即停止'))) return;
  try {
    await apiRequest('/api/estop', { arm: 'right', active: true });
    showToast('已发送 Piper 停止命令', 'warn', 5000);
    refreshRobotState();
  } catch (error) {
    showToast(`急停命令发送失败：${error.message}`, 'bad', 6000);
  }
}

async function loadCameraExtrinsic() {
  try {
    const data = await getCameraExtrinsic();
    setCameraExtrinsic(data.extrinsic || {});
    byId('extrinsicStatus').textContent = `已读取 ${data.path || 'camera_extrinsic.json'}`;
  } catch (error) {
    byId('extrinsicStatus').textContent = `读取失败：${error.message}`;
  }
}

async function saveCameraExtrinsic() {
  await runCommand('保存相机外参', async () => {
    const data = await apiRequest('/api/camera_extrinsic', readCameraExtrinsic());
    setCameraExtrinsic(data.extrinsic || readCameraExtrinsic());
    byId('extrinsicStatus').textContent = `已保存 ${data.path || 'camera_extrinsic.json'}`;
    return data;
  }, { confirm: '该配置将写入相机外参文件，并影响视觉目标与点云坐标。' });
}

async function loadSceneCloud() {
  try {
    const result = await scene.loadScenePointCloud();
    setBadge('cloudState', `${result.count} 点`, 'good');
  } catch {
    setBadge('cloudState', '暂无点云', 'neutral');
  }
}

function toggleCloud() {
  state.cloudVisible = !state.cloudVisible;
  localStorage.setItem('piper.cloudVisible', String(state.cloudVisible));
  scene.setCloudVisible(state.cloudVisible);
  updateCloudButton();
}

async function saveSceneCloud() {
  await runCommand('保存场景点云', async () => {
    const result = await apiRequest('/api/scene_pointcloud/save', {});
    await loadSceneCloud();
    return result;
  });
}

async function rebuildCloudWithCurrentExtrinsic() {
  await runCommand('按当前外参重建点云', async () => {
    const extrinsicResult = await apiRequest('/api/camera_extrinsic', readCameraExtrinsic());
    setCameraExtrinsic(extrinsicResult.extrinsic || readCameraExtrinsic());
    const cloudResult = await apiRequest('/api/scene_pointcloud/save', {});
    await loadSceneCloud();
    byId('extrinsicStatus').textContent = `已保存 ${extrinsicResult.path || 'camera_extrinsic.json'}`;
    return cloudResult;
  }, {
    confirm: '将保存当前相机外参，并让视觉服务按该外参重新保存静态场景点云。',
    confirmTitle: '确认重建点云'
  });
}

async function loadPlatformObstacle(showMessage) {
  try {
    const data = await getPlatformObstacle();
    const obstacle = data.platform_obstacle;
    if (!hasPlatformObstacle(obstacle)) {
      scene?.setPlatformObstacle(null);
      state.platformObstacleVisible = false;
      state.platformObstacleApplied = false;
      byId('platformState').textContent = '避障区未加载';
      updatePlatformButtons();
      if (showMessage) showToast('当前没有已应用的避障区', 'warn');
      return null;
    }

    scene?.setPlatformObstacle(obstacle);
    state.platformObstacleVisible = true;
    state.platformObstacleApplied = true;
    byId('platformState').textContent = '避障区已显示';
    updatePlatformButtons();
    if (showMessage) showToast('已显示平台避障区');
    return obstacle;
  } catch (error) {
    byId('platformState').textContent = `读取失败：${error.message}`;
    updatePlatformButtons();
    return null;
  }
}

async function togglePlatformObstacle() {
  if (state.platformObstacleVisible) {
    scene?.setPlatformObstacle(null);
    state.platformObstacleVisible = false;
    byId('platformState').textContent = state.platformObstacleApplied
      ? '避障区已隐藏，规划场景仍保留'
      : '避障区已隐藏';
    updatePlatformButtons();
    return;
  }
  await loadPlatformObstacle(true);
}

async function applyPlatformObstacle() {
  if (state.platformObstacleApplied) {
    await runCommand('取消平台避障区', async () => {
      const data = await apiRequest('/api/platform_obstacle/clear', {});
      scene?.setPlatformObstacle(null);
      state.platformObstacleVisible = false;
      state.platformObstacleApplied = false;
      byId('platformState').textContent = '避障区已从规划场景移除';
      updatePlatformButtons();
      return data;
    }, {
      confirm: '将从 MoveIt 规划场景移除当前平台避障区，后续规划不再使用该避障区。',
      confirmTitle: '确认取消避障区'
    });
    return;
  }

  await runCommand('应用平台避障区', async () => {
    const data = await apiRequest('/api/platform_obstacle/apply', {});
    scene.setPlatformObstacle(data.platform_obstacle);
    state.platformObstacleVisible = true;
    state.platformObstacleApplied = true;
    byId('platformState').textContent = '避障区已应用到规划场景';
    updatePlatformButtons();
    return data;
  });
}

async function loadWorkspaceBounds(showMessage = false) {
  try {
    const data = await getWorkspaceBounds();
    state.workspaceBoundsByArm = {
      right: normalizeWorkspaceBounds(data.right, 'right'),
      left: normalizeWorkspaceBounds(data.left, 'left')
    };
    renderWorkspaceBounds();
    scene?.setWorkspaceBounds(currentWorkspaceBounds());
    updateWorkspaceBoundsStatus('已读取');
    if (showMessage) showToast('已读取工作区边界');
  } catch (error) {
    byId('workspaceBoundsState').textContent = `读取失败：${error.message}`;
  }
}

function defaultWorkspaceBounds(arm = state.arm) {
  return arm === 'left'
    ? { enabled: false, min: [-0.35, -0.65, 0.2], max: [0.8, 0.35, 1.55] }
    : { enabled: false, min: [-0.8, -0.65, 0.2], max: [0.35, 0.35, 1.55] };
}

function currentWorkspaceBounds() {
  return normalizeWorkspaceBounds(state.workspaceBoundsByArm[state.arm], state.arm);
}

function normalizeWorkspaceBounds(bounds = {}, arm = state.arm) {
  const fallback = state.workspaceBoundsByArm?.[arm] || defaultWorkspaceBounds(arm);
  const vector = (key, fallbackValue) => {
    const source = Array.isArray(bounds[key]) ? bounds[key] : fallbackValue;
    return [0, 1, 2].map(axis => {
      const value = Number(source?.[axis]);
      return Number.isFinite(value) ? value : fallbackValue[axis];
    });
  };
  return {
    enabled: Boolean(bounds.enabled),
    min: vector('min', fallback.min),
    max: vector('max', fallback.max)
  };
}

function renderWorkspaceBounds() {
  const bounds = currentWorkspaceBounds();
  const root = byId('workspaceBoundsFields');
  if (!root) return;
  root.innerHTML = `
    <label class="workspace-enable"><input id="workspaceBoundsEnabled" type="checkbox" ${bounds.enabled ? 'checked' : ''}><span>启用${armLabel()}边界拒绝</span></label>
    <div class="compact-fields workspace-bounds-grid">
      ${workspaceBoundInputs('min', bounds.min, ['X min', 'Y min', 'Z min'])}
      ${workspaceBoundInputs('max', bounds.max, ['X max', 'Y max', 'Z max'])}
    </div>
  `;
}

function workspaceBoundInputs(key, values, labels) {
  return labels.map((label, axis) => `
    <label>${label}<input data-workspace-bound="${key}" data-workspace-axis="${axis}"
      type="number" step="0.001" value="${Number(values[axis] ?? 0)}" /><span>m</span></label>
  `).join('');
}

function readWorkspaceBoundsInputs() {
  const vector = key => [0, 1, 2].map(axis => {
    const value = Number(byId('workspaceBoundsFields')?.querySelector(`[data-workspace-bound="${key}"][data-workspace-axis="${axis}"]`)?.value);
    return Number.isFinite(value) ? value : 0;
  });
  return {
    enabled: byId('workspaceBoundsEnabled')?.checked === true,
    min: vector('min'),
    max: vector('max')
  };
}

function handleWorkspaceBoundsInput() {
  state.workspaceBoundsByArm[state.arm] = normalizeWorkspaceBounds(readWorkspaceBoundsInputs(), state.arm);
  scene?.setWorkspaceBounds(currentWorkspaceBounds());
  byId('workspaceBoundsState').textContent = `${armLabel()}工作区边界已修改，保存后生效`;
}

async function saveWorkspaceBoundsConfig() {
  state.workspaceBoundsByArm[state.arm] = normalizeWorkspaceBounds(readWorkspaceBoundsInputs(), state.arm);
  await runCommand('保存工作区边界', async () => {
    const data = await saveWorkspaceBounds({ arm: state.arm, ...currentWorkspaceBounds() });
    state.workspaceBoundsByArm = {
      right: normalizeWorkspaceBounds(data.right || state.workspaceBoundsByArm.right, 'right'),
      left: normalizeWorkspaceBounds(data.left || state.workspaceBoundsByArm.left, 'left')
    };
    renderWorkspaceBounds();
    scene?.setWorkspaceBounds(currentWorkspaceBounds());
    updateWorkspaceBoundsStatus('已保存');
    return data;
  });
}

function updateWorkspaceBoundsStatus(prefix = '') {
  const bounds = currentWorkspaceBounds();
  const text = bounds.enabled
    ? `${prefix ? `${prefix} · ` : ''}${armLabel()}工作区已启用`
    : `${prefix ? `${prefix} · ` : ''}${armLabel()}工作区未启用`;
  byId('workspaceBoundsState').textContent = text;
}

async function loadManualCollisionBoxes(showMessage = false) {
  try {
    const data = await getManualCollisionBoxes();
    state.manualCollision.boxes = data.boxes || [];
    state.manualCollision.applied = Boolean(data.summary?.applied && !data.summary?.cleared);
    renderManualCollisionBoxes();
    scene?.setManualCollisionBoxes(state.manualCollision.boxes);
    renderBenchmarkCollisionBoxOptions();
    updateManualCollisionButtons();
    byId('manualCollisionState').textContent = state.manualCollision.boxes.length
      ? `已读取 ${state.manualCollision.boxes.length} 个碰撞箱`
      : '尚未添加手动碰撞箱';
    if (showMessage) showToast('已读取手动碰撞箱');
  } catch (error) {
    byId('manualCollisionState').textContent = `读取失败：${error.message}`;
    updateManualCollisionButtons();
  }
}

function addManualCollisionBox() {
  const pose = readPose();
  const index = state.manualCollision.boxes.length + 1;
  state.manualCollision.boxes.push({
    id: `box_${index}`,
    name: `碰撞箱 ${index}`,
    enabled: true,
    center: [Number(pose.x), Number(pose.y), Number(pose.z)],
    dimensions: [0.18, 0.18, 0.18],
    rpy: [0, 0, 0]
  });
  state.manualCollision.applied = false;
  renderManualCollisionBoxes();
  scene?.setManualCollisionBoxes(state.manualCollision.boxes);
  renderBenchmarkCollisionBoxOptions();
  updateManualCollisionButtons();
  byId('manualCollisionState').textContent = '已添加碰撞箱，下一次规划/控制自动生效';
}

function renderManualCollisionBoxes() {
  const root = byId('manualCollisionFields');
  const boxes = state.manualCollision.boxes || [];
  if (!boxes.length) {
    renderEmpty('manualCollisionFields', '没有手动碰撞箱');
    renderBenchmarkCollisionBoxOptions();
    return;
  }
  root.innerHTML = boxes.map((box, index) => `
    <div class="collision-box-row" data-collision-index="${index}">
      <div class="collision-box-header">
        <input data-collision-field="name" type="text" value="${escapeHtml(box.name || `碰撞箱 ${index + 1}`)}" aria-label="碰撞箱名称">
        <label><input data-collision-field="enabled" type="checkbox" ${box.enabled === false ? '' : 'checked'}><span>启用</span></label>
        <button class="icon-button" type="button" data-collision-delete="${index}" aria-label="删除碰撞箱" title="删除碰撞箱">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
      <div class="compact-fields collision-fields">
        ${collisionVectorInputs(index, box, 'center', ['X', 'Y', 'Z'], 'm', 0.001)}
        ${collisionVectorInputs(index, box, 'dimensions', ['长', '宽', '高'], 'm', 0.001)}
        ${collisionVectorInputs(index, box, 'rpy', ['Roll', 'Pitch', 'Yaw'], 'rad', 0.001)}
      </div>
    </div>
  `).join('');
  renderBenchmarkCollisionBoxOptions();
  refreshIcons();
}

function collisionVectorInputs(index, box, key, labels, unit, step) {
  const values = Array.isArray(box[key]) ? box[key] : [0, 0, 0];
  return labels.map((label, axis) => `
    <label>${label}<input data-collision-vector="${key}" data-collision-axis="${axis}" data-collision-index="${index}"
      type="number" step="${step}" value="${Number(values[axis] ?? 0)}" /><span>${unit}</span></label>
  `).join('');
}

function handleManualCollisionInput() {
  state.manualCollision.boxes = readManualCollisionInputs();
  state.manualCollision.applied = false;
  scene?.setManualCollisionBoxes(state.manualCollision.boxes);
  updateManualCollisionButtons();
  byId('manualCollisionState').textContent = '配置已修改，下一次规划/控制自动同步到 MoveIt';
}

function handleManualCollisionClick(event) {
  const button = event.target.closest('[data-collision-delete]');
  if (!button) return;
  state.manualCollision.boxes = readManualCollisionInputs();
  state.manualCollision.boxes.splice(Number(button.dataset.collisionDelete), 1);
  state.manualCollision.applied = false;
  renderManualCollisionBoxes();
  scene?.setManualCollisionBoxes(state.manualCollision.boxes);
  renderBenchmarkCollisionBoxOptions();
  updateManualCollisionButtons();
  byId('manualCollisionState').textContent = '已删除碰撞箱，下一次规划/控制自动更新 MoveIt';
}

function readManualCollisionInputs() {
  return Array.from(document.querySelectorAll('.collision-box-row')).map((row, fallbackIndex) => {
    const index = Number(row.dataset.collisionIndex);
    const previous = state.manualCollision.boxes[index] || {};
    const vector = key => [0, 1, 2].map(axis => {
      const input = row.querySelector(`[data-collision-vector="${key}"][data-collision-axis="${axis}"]`);
      const value = Number(input?.value);
      return Number.isFinite(value) ? value : 0;
    });
    return {
      id: previous.id || `box_${fallbackIndex + 1}`,
      name: row.querySelector('[data-collision-field="name"]')?.value?.trim() || `碰撞箱 ${fallbackIndex + 1}`,
      enabled: row.querySelector('[data-collision-field="enabled"]')?.checked !== false,
      center: vector('center'),
      dimensions: vector('dimensions').map(value => Math.max(0.005, Math.abs(value))),
      rpy: vector('rpy')
    };
  });
}

function currentManualCollisionBoxes() {
  if (document.querySelector('.collision-box-row')) {
    state.manualCollision.boxes = readManualCollisionInputs();
  }
  return state.manualCollision.boxes || [];
}

async function saveManualCollisionConfig() {
  state.manualCollision.boxes = readManualCollisionInputs();
  await runCommand('保存手动碰撞箱', async () => {
    const data = await saveManualCollisionBoxes({ boxes: state.manualCollision.boxes });
    state.manualCollision.boxes = data.boxes || [];
    state.manualCollision.applied = false;
    renderManualCollisionBoxes();
    scene?.setManualCollisionBoxes(state.manualCollision.boxes);
    renderBenchmarkCollisionBoxOptions();
    updateManualCollisionButtons();
    byId('manualCollisionState').textContent = `已保存 ${state.manualCollision.boxes.length} 个碰撞箱，下一次规划/控制自动生效`;
    return data;
  });
}

async function applyManualCollisionConfig() {
  state.manualCollision.boxes = readManualCollisionInputs();
  await runCommand('应用手动碰撞箱', async () => {
    const data = await applyManualCollisionBoxes({ boxes: state.manualCollision.boxes });
    const summary = data.manual_collision || {};
    state.manualCollision.boxes = summary.boxes || state.manualCollision.boxes;
    state.manualCollision.applied = Number(summary.count || 0) > 0;
    renderManualCollisionBoxes();
    scene?.setManualCollisionBoxes(state.manualCollision.boxes);
    renderBenchmarkCollisionBoxOptions();
    updateManualCollisionButtons();
    byId('manualCollisionState').textContent = `已应用 ${summary.count ?? 0} 个启用碰撞箱到 MoveIt`;
    return data;
  });
}

async function clearManualCollisionConfig() {
  await runCommand('清除手动碰撞箱', async () => {
    const data = await clearManualCollisionBoxes();
    const summary = data.manual_collision || {};
    state.manualCollision.boxes = summary.boxes || state.manualCollision.boxes;
    state.manualCollision.applied = false;
    renderManualCollisionBoxes();
    scene?.setManualCollisionBoxes(state.manualCollision.boxes);
    renderBenchmarkCollisionBoxOptions();
    updateManualCollisionButtons();
    byId('manualCollisionState').textContent = '已从 MoveIt 移除手动碰撞箱，网页配置仍保留';
    return data;
  }, {
    confirm: '将从 MoveIt PlanningScene 移除手动碰撞箱，但保留网页配置。',
    confirmTitle: '确认清除手动碰撞箱'
  });
}

function updateManualCollisionButtons() {
  const boxes = state.manualCollision.boxes || [];
  const enabledCount = boxes.filter(box => box.enabled !== false).length;
  byId('applyCollisionBoxesButton').querySelector('span').textContent =
    state.manualCollision.applied ? `已应用 ${enabledCount} 个` : '提前应用';
  setCommandButtonState(
    'applyCollisionBoxesButton',
    state.manualCollision.applied ? 'active-good' : enabledCount ? 'ready-warning' : 'inactive',
    state.manualCollision.applied
  );
  setCommandButtonState('clearCollisionBoxesButton', state.manualCollision.applied ? 'ready-warning' : 'inactive', false);
}

function updateManualCollisionFromSummary(summary) {
  if (!summary) return;
  state.manualCollision.boxes = summary.boxes || state.manualCollision.boxes;
  state.manualCollision.applied = Boolean(summary.applied && Number(summary.count || 0) > 0);
  renderManualCollisionBoxes();
  scene?.setManualCollisionBoxes(state.manualCollision.boxes);
  renderBenchmarkCollisionBoxOptions();
  updateManualCollisionButtons();
  byId('manualCollisionState').textContent = state.manualCollision.applied
    ? `已自动同步 ${summary.count ?? 0} 个碰撞箱到 MoveIt`
    : '当前没有启用的碰撞箱';
}

function findManualCollisionSummary(value) {
  if (!value || typeof value !== 'object') return null;
  if (value.manual_collision) return value.manual_collision;
  for (const key of ['plan', 'result', 'results', 'approach', 'descend', 'lift']) {
    const found = findManualCollisionSummary(value[key]);
    if (found) return found;
  }
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object' && child !== value) {
      const found = findManualCollisionSummary(child);
      if (found) return found;
    }
  }
  return null;
}

function updateRobotCommandButtons({ anyConnected, anyEnabled, allEnabled, anyEstop }) {
  setCommandButtonState('enableButton', allEnabled ? 'active-good' : 'ready-good', allEnabled);
  byId('enableButton').querySelector('span').textContent = allEnabled ? '已使能' : '使能';

  setCommandButtonState('disableButton', anyEnabled ? 'ready-danger' : 'inactive', false);
  byId('disableButton').querySelector('span').textContent = anyEnabled ? '取消使能' : '未使能';

  setCommandButtonState('resetEstopButton', anyEstop ? 'ready-warning' : 'inactive', anyEstop);
  byId('resetEstopButton').querySelector('span').textContent = anyEstop ? '复位急停' : '急停正常';

  setCommandButtonState('homeButton', anyConnected && allEnabled && !anyEstop ? 'ready-neutral' : 'inactive', false);
  byId('homeButton').querySelector('span').textContent = '回零';
}

function updateCloudButton() {
  const button = byId('toggleCloudButton');
  button.querySelector('span').textContent = state.cloudVisible ? '隐藏点云' : '显示点云';
  setCommandButtonState('toggleCloudButton', state.cloudVisible ? 'active-neutral' : 'inactive', state.cloudVisible);
}

function updatePlatformButtons() {
  const displayButton = byId('loadPlatformButton');
  displayButton.querySelector('span').textContent = state.platformObstacleVisible ? '隐藏避障区' : '显示避障区';
  setCommandButtonState('loadPlatformButton', state.platformObstacleVisible ? 'active-neutral' : 'ready-neutral', state.platformObstacleVisible);

  const applyButton = byId('applyPlatformButton');
  applyButton.querySelector('span').textContent = state.platformObstacleApplied ? '取消避障区' : '应用避障区';
  setCommandButtonState('applyPlatformButton', state.platformObstacleApplied ? 'active-warning' : 'ready-warning', state.platformObstacleApplied);
}

function setCommandButtonState(id, mode, pressed) {
  const button = byId(id);
  button.dataset.mode = mode;
  button.setAttribute('aria-pressed', String(Boolean(pressed)));
}

function hasPlatformObstacle(obstacle) {
  if (!obstacle) return false;
  if (Array.isArray(obstacle)) return obstacle.length > 0;
  if (Array.isArray(obstacle.platform_obstacles)) return obstacle.platform_obstacles.length > 0;
  return Boolean(obstacle.center || obstacle.dimensions);
}

async function loadJointConfig() {
  byId('jointConfigStatus').textContent = `正在读取${armLabel()}配置...`;
  try {
    const data = await getJointConfig(state.arm);
    state.jointConfig = data;
    applyJointConfigLimits(data);
    renderJointConfig(data);
    byId('jointConfigStatus').textContent = `已读取 ${data.files?.bridge || armLabel()}`;
  } catch (error) {
    byId('jointConfigStatus').textContent = `读取失败：${error.message}`;
  }
}

async function loadJointLimits() {
  const results = await Promise.allSettled([getJointConfig('right'), getJointConfig('left')]);
  results.forEach(result => {
    if (result.status === 'fulfilled') applyJointConfigLimits(result.value);
  });
}

function applyJointConfigLimits(config) {
  const arm = config?.arm === 'left' ? 'left' : 'right';
  const names = config?.joint_names || [];
  const limits = {};
  names.forEach((name, index) => {
    const item = config?.joint_limits_rad?.[index];
    limits[name] = item?.enabled && Number.isFinite(Number(item.lower)) && Number.isFinite(Number(item.upper))
      ? { lower: Number(item.lower), upper: Number(item.upper) }
      : { lower: -1000000, upper: 1000000 };
  });
  state.jointLimitsByArm[arm] = limits;
  scene?.setJointLimits({
    ...state.jointLimitsByArm.right,
    ...state.jointLimitsByArm.left
  });
}

function renderJointConfig(config) {
  const names = config.joint_names || [];
  const root = byId('jointConfigFields');
  root.innerHTML = `
    <div class="joint-config-header"><span>关节</span><span>零位</span><span>限位</span><span>下限</span><span>上限</span></div>
    ${names.map((name, index) => `
      <div class="joint-config-row">
        <b>J${index + 1}</b>
        <input id="cfg_offset_${index}" type="number" step="1" value="${Number(config.zero_offsets?.[index] || 0)}" aria-label="${escapeHtml(name)}零位">
        <input id="cfg_limit_${index}" type="checkbox" ${config.limit_enabled?.[index] ? 'checked' : ''} aria-label="${escapeHtml(name)}启用限位">
        <input id="cfg_min_${index}" type="number" step="1" value="${Number(config.raw_limit_a?.[index] || 0)}" aria-label="${escapeHtml(name)}下限">
        <input id="cfg_max_${index}" type="number" step="1" value="${Number(config.raw_limit_b?.[index] || 0)}" aria-label="${escapeHtml(name)}上限">
      </div>
    `).join('')}
  `;
}

async function saveJointConfig() {
  const names = state.jointConfig?.joint_names || [];
  if (!names.length) {
    showToast('请先读取关节配置', 'warn');
    return;
  }
  const body = { arm: state.arm, zero_offsets: [], limit_enabled: [], raw_limit_a: [], raw_limit_b: [] };
  names.forEach((_name, index) => {
    body.zero_offsets.push(Number.parseInt(byId(`cfg_offset_${index}`).value, 10));
    body.limit_enabled.push(byId(`cfg_limit_${index}`).checked);
    body.raw_limit_a.push(Number.parseInt(byId(`cfg_min_${index}`).value, 10));
    body.raw_limit_b.push(Number.parseInt(byId(`cfg_max_${index}`).value, 10));
  });
  await runCommand('保存关节配置', async () => {
    const result = await apiRequest('/api/joint_config', body);
    state.jointConfig = result;
    applyJointConfigLimits(result);
    renderJointConfig(result);
    return result;
  }, {
    confirm: `将覆盖${armLabel()}的编码器零位与原始限位配置。该操作会影响实际运动范围。`,
    confirmTitle: '确认写入关节配置'
  });
}

async function loadKinematics() {
  byId('kinematicsStatus').textContent = '正在读取求解器配置...';
  try {
    const data = await getKinematics();
    state.kinematics = data;
    renderKinematics(data);
  } catch (error) {
    byId('kinematicsStatus').textContent = `读取失败：${error.message}`;
  }
}

function solverLabel(info, options) {
  if (!info) return '--';
  const option = options.find(item => item.id === info.solver_id || item.plugin === info.solver_plugin);
  return option ? option.label : info.solver_plugin || info.solver_id || '--';
}

function renderKinematics(config) {
  const options = config.options || [];
  const select = byId('ikSolverSelect');
  const active = config.active_solver_id || 'kdl';
  const hasActive = options.some(option => option.id === active);
  select.innerHTML = [
    ...(!hasActive && active ? [{
      id: active,
      label: active === 'mixed' ? 'Piper 配置不一致' : active,
      available: false,
      plugin: ''
    }] : []),
    ...options
  ].map(option => `
    <option value="${escapeHtml(option.id)}" ${option.available ? '' : 'disabled'} ${option.id === active ? 'selected' : ''}>
      ${escapeHtml(option.label)}${option.available ? '' : '（未安装）'}
    </option>
  `).join('');

  if (active !== 'mixed' && options.some(option => option.id === active && option.available)) {
    select.value = active;
  } else {
    const firstAvailable = options.find(option => option.available);
    if (firstAvailable) select.value = firstAvailable.id;
  }

  const right = config.groups?.arm;
  byId('ikRightSolver').textContent = `Piper ${solverLabel(right, options)}`;
  byId('ikLeftSolver').textContent = '';
  byId('kinematicsStatus').textContent =
    `配置文件：${config.path || '--'}。保存后需重启 MoveIt 才会生效。`;
}

async function saveKinematics() {
  const solverId = byId('ikSolverSelect').value;
  if (!solverId) {
    showToast('请选择可用的 IK 求解器', 'warn');
    return;
  }
  const selected = state.kinematics?.options?.find(option => option.id === solverId);
  const label = selected?.label || solverId;
  await runCommand('保存 IK 求解器', async () => {
    const result = await apiRequest('/api/kinematics', { solver_id: solverId, target: 'right' });
    state.kinematics = result;
    renderKinematics(result);
    return result;
  }, {
    confirm: `将 Piper MoveIt IK 求解器配置切换为 ${label}。已运行的 MoveIt 不会动态切换，保存后需要重启 MoveIt。`,
    confirmTitle: '确认切换 IK 求解器',
    success: `IK 求解器已写入：${label}，重启 MoveIt 后生效`
  });
}

function loadSavedOmplConfig() {
  try {
    return normalizeOmplRuntimeConfig(JSON.parse(localStorage.getItem(OMPL_CONFIG_STORAGE_KEY) || '{}'));
  } catch {
    return { ...DEFAULT_OMPL_CONFIG };
  }
}

function normalizeOmplRuntimeConfig(config = {}) {
  return {
    planner_id: String(config.planner_id || DEFAULT_OMPL_CONFIG.planner_id),
    planning_time: finiteUiNumber(config.planning_time, DEFAULT_OMPL_CONFIG.planning_time),
    attempts: Math.max(1, Math.round(finiteUiNumber(config.attempts, DEFAULT_OMPL_CONFIG.attempts))),
    ik_timeout: finiteUiNumber(config.ik_timeout, DEFAULT_OMPL_CONFIG.ik_timeout)
  };
}

function finiteUiNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

async function loadOmplConfig() {
  byId('omplConfigStatus').textContent = '正在读取 OMPL 配置...';
  try {
    const data = await getOmplConfig();
    state.ompl.options = data;
    const recommended = data.recommended?.config || data.defaults || DEFAULT_OMPL_CONFIG;
    const plannerIds = new Set((data.planners || []).map(planner => planner.planner_id));
    const current = normalizeOmplRuntimeConfig(state.ompl.config);
    state.ompl.config = plannerIds.has(current.planner_id)
      ? current
      : normalizeOmplRuntimeConfig(recommended);
    saveOmplRuntimeConfig();
    renderOmplConfig();
  } catch (error) {
    byId('omplConfigStatus').textContent = `读取失败：${error.message}`;
    renderEmpty('omplPlannerDetails', 'OMPL 配置不可用');
  }
}

function renderOmplConfig() {
  const data = state.ompl.options || {};
  const planners = data.planners || [];
  const presets = data.presets || [];
  const presetSelect = byId('omplPresetSelect');
  presetSelect.innerHTML = presets.map(preset => `
    <option value="${escapeHtml(preset.id)}">
      ${escapeHtml(preset.custom ? `自定义 · ${preset.label}` : preset.label)}
    </option>
  `).join('');
  const presetIds = new Set(presets.map(preset => preset.id));
  if (state.ompl.selectedPresetId && presetIds.has(state.ompl.selectedPresetId)) {
    presetSelect.value = state.ompl.selectedPresetId;
  } else if (data.recommended?.id) {
    presetSelect.value = data.recommended.id;
  }

  const select = byId('omplPlannerSelect');
  select.innerHTML = planners.map(planner => `
    <option value="${escapeHtml(planner.planner_id)}">
      ${escapeHtml(planner.label || planner.planner_id)}
    </option>
  `).join('');
  if (planners.some(planner => planner.planner_id === state.ompl.config.planner_id)) {
    select.value = state.ompl.config.planner_id;
  }
  applyOmplFields(state.ompl.config);
  renderOmplRecommendation(data.recommended);
  renderOmplPlannerDetails();
  byId('omplConfigStatus').textContent =
    `运行时生效 · 配置文件：${data.path || '--'}`;
}

function applyOmplFields(config) {
  const normalized = normalizeOmplRuntimeConfig(config);
  byId('omplPlannerSelect').value = normalized.planner_id;
  byId('omplPlanningTime').value = normalized.planning_time;
  byId('omplAttempts').value = normalized.attempts;
  byId('omplIkTimeout').value = normalized.ik_timeout;
}

function readOmplRuntimeConfig() {
  const plannerSelect = byId('omplPlannerSelect');
  if (!plannerSelect) return { ...state.ompl.config };
  const config = normalizeOmplRuntimeConfig({
    planner_id: plannerSelect.value || state.ompl.config.planner_id,
    planning_time: byId('omplPlanningTime').value,
    attempts: byId('omplAttempts').value,
    ik_timeout: byId('omplIkTimeout').value
  });
  state.ompl.config = config;
  return config;
}

function saveOmplRuntimeConfig() {
  localStorage.setItem(OMPL_CONFIG_STORAGE_KEY, JSON.stringify(state.ompl.config));
}

function handleOmplConfigInput() {
  state.ompl.config = readOmplRuntimeConfig();
  saveOmplRuntimeConfig();
  renderOmplPlannerDetails();
  const planner = omplPlannerOption(state.ompl.config.planner_id);
  byId('omplConfigStatus').textContent =
    `下一次规划使用 ${planner?.label || state.ompl.config.planner_id} · ${state.ompl.config.planning_time}s / ${state.ompl.config.attempts} 次`;
}

function applySelectedOmplPreset() {
  const presetId = byId('omplPresetSelect').value;
  const preset = (state.ompl.options?.presets || []).find(item => item.id === presetId)
    || state.ompl.options?.recommended;
  state.ompl.selectedPresetId = preset?.id || null;
  state.ompl.config = normalizeOmplRuntimeConfig(preset?.config || DEFAULT_OMPL_CONFIG);
  applyOmplFields(state.ompl.config);
  saveOmplRuntimeConfig();
  renderOmplPlannerDetails();
  showToast(`已应用 OMPL 配置：${preset?.label || '推荐配置'}`);
  byId('omplConfigStatus').textContent = `已应用 ${preset?.label || '推荐配置'}，下一次规划生效`;
}

async function saveCurrentOmplPreset() {
  const name = normalizedPresetName('omplPresetName');
  const config = readOmplRuntimeConfig();
  const data = await runCommand(
    '保存规划预设',
    () => savePlanningPreset({ name, source: 'ompl', config }),
    { quiet: true, success: '规划预设已保存' }
  );
  if (!data) return;
  const saved = findSavedPreset(data.presets, name, config);
  state.ompl.selectedPresetId = saved?.id || null;
  await loadOmplConfig();
  byId('omplConfigStatus').textContent = `已保存到预设库：${saved?.label || name}`;
  showToast(`已保存规划预设：${saved?.label || name}`);
}

async function deleteSelectedOmplPreset() {
  const presetId = byId('omplPresetSelect').value;
  const preset = (state.ompl.options?.presets || []).find(item => item.id === presetId);
  if (!preset?.custom) {
    showToast('只能删除自定义预设', 'warn');
    return;
  }
  if (!(await confirmAction(`删除自定义预设「${preset.label}」？`, '删除规划预设', '删除'))) return;
  const data = await runCommand(
    '删除规划预设',
    () => deletePlanningPreset({ id: preset.id }),
    { quiet: true, success: '规划预设已删除' }
  );
  if (!data) return;
  state.ompl.selectedPresetId = null;
  await loadOmplConfig();
  showToast(`已删除规划预设：${preset.label}`);
}

function normalizedPresetName(inputId) {
  const input = byId(inputId);
  const name = String(input?.value || '').trim();
  if (name) return name;
  const fallback = `规划预设 ${new Date().toLocaleString('zh-CN', { hour12: false })}`;
  if (input) input.value = fallback;
  return fallback;
}

function findSavedPreset(presets = [], name, config) {
  const sameName = presets.find(preset => preset.name === name || preset.label === name);
  if (sameName) return sameName;
  return presets.find(preset => {
    const presetConfig = preset.config || {};
    return presetConfig.planner_id === config.planner_id
      && Number(presetConfig.planning_time) === Number(config.planning_time)
      && Number(presetConfig.attempts) === Number(config.attempts)
      && Number(presetConfig.ik_timeout) === Number(config.ik_timeout);
  }) || null;
}

function omplPlannerOption(plannerId) {
  return (state.ompl.options?.planners || []).find(planner => planner.planner_id === plannerId) || null;
}

function renderOmplRecommendation(recommended) {
  const root = byId('omplRecommended');
  const config = recommended?.config || DEFAULT_OMPL_CONFIG;
  const planner = omplPlannerOption(config.planner_id);
  root.innerHTML = `
    <div class="ompl-recommendation-main">
      <strong>${escapeHtml(recommended?.label || '推荐配置')}</strong>
      <span>${escapeHtml(planner?.label || config.planner_id)}</span>
    </div>
    <div class="ompl-config-chips">
      <span>规划 ${formatNumber(config.planning_time, 1)}s</span>
      <span>尝试 ${Number(config.attempts)} 次</span>
      <span>IK ${formatNumber(config.ik_timeout, 1)}s</span>
    </div>
    <p>${escapeHtml(recommended?.description || '用于快速调试的默认配置。')}</p>
  `;
}

function renderOmplPlannerDetails() {
  const planner = omplPlannerOption(state.ompl.config.planner_id);
  const root = byId('omplPlannerDetails');
  if (!planner) {
    renderEmpty('omplPlannerDetails', '请选择规划器');
    return;
  }
  const configRows = Object.entries(planner.config || {});
  root.innerHTML = `
    <div class="ompl-detail-row"><b>planner_id</b><span>${escapeHtml(planner.planner_id)}</span></div>
    <div class="ompl-detail-row"><b>type</b><span>${escapeHtml(planner.type || '--')}</span></div>
    <div class="ompl-detail-row"><b>groups</b><span>${escapeHtml((planner.groups || []).join(', ') || '--')}</span></div>
    ${configRows.map(([key, value]) => `
      <div class="ompl-detail-row"><b>${escapeHtml(key)}</b><span>${escapeHtml(String(value))}</span></div>
    `).join('')}
  `;
}

async function loadBenchmarkOptions(showMessage = false) {
  const status = byId('benchmarkStatus');
  if (status && state.activePanel === 'benchmark') status.textContent = '正在读取跑分配置...';
  try {
    const data = await getBenchmarkOptions(state.arm);
    state.benchmark.options = data;
    applyBenchmarkDefaults(data);
    renderBenchmarkCollisionBoxOptions();
    renderBenchmarkPlanners();
    renderBenchmarkQuickStats();
    renderBenchmarkSummary();
    renderBenchmarkSamples();
    if (status && showMessage) status.textContent = '跑分配置已读取';
  } catch (error) {
    if (status) status.textContent = `跑分配置读取失败：${error.message}`;
    renderEmpty('benchmarkPlanners', '规划器配置不可用');
  }
}

function applyBenchmarkDefaults(data = {}) {
  const maxSamples = Number(data.max_samples || 120);
  for (const id of ['benchmarkBoxCount', 'benchmarkEdgeCount', 'benchmarkRandomCount']) {
    const input = byId(id);
    if (input && Number.isFinite(maxSamples)) input.max = String(maxSamples);
  }
  if (state.benchmark.defaultsApplied) return;
  const defaults = data.defaults || {};
  setInputValueIfFinite('benchmarkBoxCount', defaults.box_top_count);
  setInputValueIfFinite('benchmarkBoxOffsetCm', defaults.box_top_offset_cm);
  setInputValueIfFinite('benchmarkEdgeCount', defaults.edge_count);
  setInputValueIfFinite('benchmarkEdgeDistanceCm', defaults.edge_distance_cm);
  setInputValueIfFinite('benchmarkRandomCount', defaults.random_count);
  setInputValueIfFinite('benchmarkPlanningTime', defaults.planning_time);
  setInputValueIfFinite('benchmarkAttempts', defaults.attempts);
  setInputValueIfFinite('benchmarkIkTimeout', defaults.ik_timeout);
  state.benchmark.defaultsApplied = true;
}

function setInputValueIfFinite(id, value) {
  const input = byId(id);
  const number = Number(value);
  if (input && Number.isFinite(number)) input.value = String(value);
}

function renderBenchmarkCollisionBoxOptions() {
  const select = byId('benchmarkCollisionBox');
  if (!select) return;
  const previous = select.value;
  const manualBoxes = (state.manualCollision.boxes || []).filter(box => box.enabled !== false);
  const optionBoxes = Array.isArray(state.benchmark.options?.collision_boxes)
    ? state.benchmark.options.collision_boxes
    : [];
  const boxes = manualBoxes.length ? manualBoxes : optionBoxes;
  if (!boxes.length) {
    select.innerHTML = '<option value="">没有启用的碰撞箱</option>';
    select.disabled = true;
    const boxCount = byId('benchmarkBoxCount');
    if (boxCount) boxCount.value = '0';
    return;
  }
  select.disabled = false;
  select.innerHTML = boxes.map((box, index) => {
    const value = box.id || box.name || `box_${index + 1}`;
    const label = box.name || box.id || `碰撞箱 ${index + 1}`;
    return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
  }).join('');
  const values = new Set(boxes.map((box, index) => String(box.id || box.name || `box_${index + 1}`)));
  select.value = values.has(previous) ? previous : select.options[0]?.value || '';
}

function renderBenchmarkPlanners() {
  const root = byId('benchmarkPlanners');
  if (!root) return;
  const planners = state.benchmark.options?.planners || state.ompl.options?.planners || [];
  if (!planners.length) {
    renderEmpty('benchmarkPlanners', '未读取到适用于当前手臂的规划器');
    return;
  }
  let selected = new Set(state.benchmark.selectedPlanners);
  if (!selected.size) selected = new Set([state.ompl.config.planner_id]);
  const validSelected = planners.filter(planner => selected.has(planner.planner_id)).map(planner => planner.planner_id);
  state.benchmark.selectedPlanners = validSelected.length ? validSelected : [planners[0].planner_id];
  const selectedSet = new Set(state.benchmark.selectedPlanners);
  root.innerHTML = planners.map(planner => `
    <label class="planner-option">
      <input type="checkbox" value="${escapeHtml(planner.planner_id)}" ${selectedSet.has(planner.planner_id) ? 'checked' : ''}>
      <span>
        <b>${escapeHtml(planner.label || planner.planner_id)}</b>
        <small>${escapeHtml(planner.planner_id)}</small>
      </span>
    </label>
  `).join('');
}

function selectedBenchmarkPlannerIds() {
  const root = byId('benchmarkPlanners');
  const inputs = Array.from(root?.querySelectorAll('input[type="checkbox"]') || []);
  if (inputs.length) {
    state.benchmark.selectedPlanners = inputs.filter(input => input.checked).map(input => input.value);
    return [...state.benchmark.selectedPlanners];
  }
  if (state.benchmark.selectedPlanners.length) return [...state.benchmark.selectedPlanners];
  const fallback = state.ompl.config?.planner_id || state.benchmark.options?.planners?.[0]?.planner_id;
  return fallback ? [fallback] : [];
}

function benchmarkPlannerCount() {
  return selectedBenchmarkPlannerIds().length || state.benchmark.result?.planners?.length || 0;
}

function benchmarkRequestBase() {
  const pose = readPose();
  if (document.querySelector('.collision-box-row')) {
    state.manualCollision.boxes = readManualCollisionInputs();
  }
  const seedText = byId('benchmarkSeed')?.value;
  const seed = Number(seedText);
  const request = {
    ...pose,
    avoid_collisions: byId('avoidPlatform')?.checked !== false,
    box_top_count: nonNegativeUiInt('benchmarkBoxCount', 0),
    box_top_offset_cm: finiteUiNumber(byId('benchmarkBoxOffsetCm')?.value, 5),
    edge_count: nonNegativeUiInt('benchmarkEdgeCount', 0),
    edge_distance_cm: finiteUiNumber(byId('benchmarkEdgeDistanceCm')?.value, 5),
    random_count: nonNegativeUiInt('benchmarkRandomCount', 0),
    planning_time: finiteUiNumber(byId('benchmarkPlanningTime')?.value, DEFAULT_OMPL_CONFIG.planning_time),
    attempts: Math.max(1, Math.round(finiteUiNumber(byId('benchmarkAttempts')?.value, DEFAULT_OMPL_CONFIG.attempts))),
    ik_timeout: finiteUiNumber(byId('benchmarkIkTimeout')?.value, DEFAULT_OMPL_CONFIG.ik_timeout),
    collision_boxes: state.manualCollision.boxes || [],
    planners: selectedBenchmarkPlannerIds()
  };
  const collisionBox = byId('benchmarkCollisionBox');
  if (collisionBox?.disabled) request.box_top_count = 0;
  else if (collisionBox?.value) request.collision_box_id = collisionBox.value;
  if (seedText !== '' && Number.isFinite(seed)) request.seed = Math.max(1, Math.round(seed));
  return request;
}

function benchmarkPresetConfigFromRequest(request) {
  const selected = selectedBenchmarkPlannerIds();
  let plannerId = selected[0] || state.ompl.config?.planner_id || DEFAULT_OMPL_CONFIG.planner_id;
  const summaryRows = Object.values(state.benchmark.result?.summary || {})
    .filter(row => !selected.length || selected.includes(row.planner_id));
  if (summaryRows.length) {
    summaryRows.sort((a, b) => {
      const rateDelta = Number(b.success_rate || 0) - Number(a.success_rate || 0);
      if (rateDelta) return rateDelta;
      return Number(a.mean_elapsed_ms || Infinity) - Number(b.mean_elapsed_ms || Infinity);
    });
    plannerId = summaryRows[0].planner_id || plannerId;
  }
  return normalizeOmplRuntimeConfig({
    planner_id: plannerId,
    planning_time: request.planning_time,
    attempts: request.attempts,
    ik_timeout: request.ik_timeout
  });
}

async function saveBenchmarkRuntimePreset() {
  const name = normalizedPresetName('benchmarkPresetName');
  const request = benchmarkRequestBase();
  const config = benchmarkPresetConfigFromRequest(request);
  const data = await runCommand(
    '保存跑分配置',
    () => savePlanningPreset({ name, source: 'benchmark', config }),
    { quiet: true, success: '跑分配置已保存' }
  );
  if (!data) return;
  const saved = findSavedPreset(data.presets, name, config);
  state.ompl.config = config;
  state.ompl.selectedPresetId = saved?.id || null;
  saveOmplRuntimeConfig();
  await loadOmplConfig();
  byId('benchmarkStatus').textContent = `已保存到规划预设库：${saved?.label || name}`;
  showToast(`已保存跑分配置：${saved?.label || name}`);
}

async function exportCurrentBenchmarkCsv() {
  if (!state.benchmark.result) {
    byId('benchmarkStatus').textContent = '没有可导出的跑分结果';
    showToast('请先完成一次跑分', 'warn');
    return;
  }
  const result = { arm: state.arm, ...state.benchmark.result };
  const data = await runCommand(
    '导出跑分 CSV',
    () => exportBenchmarkCsv({ result }),
    { quiet: true, success: '跑分 CSV 已导出' }
  );
  if (!data) return;
  downloadBenchmarkCsv(data);
  byId('benchmarkStatus').textContent = `CSV 已保存：${data.path}`;
  showToast('跑分 CSV 已导出');
}

function downloadBenchmarkCsv(data) {
  if (!data?.csv) return;
  const blob = new Blob([data.csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = (data.path || 'piper_benchmark.csv').split('/').pop() || 'piper_benchmark.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function nonNegativeUiInt(id, fallback) {
  return Math.max(0, Math.round(finiteUiNumber(byId(id)?.value, fallback)));
}

function requestedBenchmarkPointCount() {
  return nonNegativeUiInt('benchmarkBoxCount', 0)
    + nonNegativeUiInt('benchmarkEdgeCount', 0)
    + nonNegativeUiInt('benchmarkRandomCount', 0);
}

async function generateBenchmarkSet() {
  if (!state.benchmark.options) await loadBenchmarkOptions(false);
  const request = benchmarkRequestBase();
  const data = await runCommand(
    '生成跑分测试点',
    () => generateBenchmarkSamples(request),
    { quiet: true, success: '测试点已生成' }
  );
  if (!data) return;
  state.benchmark.options = { ...state.benchmark.options, ...data };
  state.benchmark.samples = data.samples || [];
  state.benchmark.selectedSampleId = null;
  state.benchmark.result = null;
  state.benchmark.progress = null;
  if (data.seed && byId('benchmarkSeed')) byId('benchmarkSeed').value = data.seed;
  scene?.setBenchmarkSamples(state.benchmark.samples);
  renderBenchmarkCollisionBoxOptions();
  renderBenchmarkPlanners();
  renderBenchmarkQuickStats();
  renderBenchmarkSummary();
  renderBenchmarkSamples();
  renderBenchmarkProgress();
  byId('benchmarkStatus').textContent = `已生成 ${state.benchmark.samples.length} 个测试点，种子 ${data.seed ?? '--'}`;
  showToast(`已生成 ${state.benchmark.samples.length} 个跑分测试点`);
}

async function runBenchmarkSet() {
  if (!state.benchmark.options) await loadBenchmarkOptions(false);
  const request = benchmarkRequestBase();
  if (!request.planners.length) {
    byId('benchmarkStatus').textContent = '至少选择一个规划器';
    showToast('至少选择一个规划器', 'warn');
    return;
  }
  if (state.benchmark.samples.length) request.samples = state.benchmark.samples;
  startBenchmarkProgressPolling(request);
  const data = await runCommand(
    '规划器跑分',
    () => runBenchmark(request),
    { quiet: true, success: '跑分完成' }
  );
  await pollBenchmarkProgress();
  stopBenchmarkProgressPolling();
  if (!data) return;
  state.benchmark.result = data;
  state.benchmark.samples = data.samples || state.benchmark.samples;
  state.benchmark.selectedSampleId = null;
  scene?.setBenchmarkSamples(state.benchmark.samples);
  renderBenchmarkQuickStats();
  renderBenchmarkSummary();
  renderBenchmarkSamples();
  const total = Number(data.total_points || state.benchmark.samples.length);
  const valid = Number(data.valid_points || 0);
  byId('benchmarkStatus').textContent =
    `跑分完成：IK 有效 ${valid}/${total}，耗时 ${formatNumber(Number(data.elapsed_ms || 0) / 1000, 2)} s`;
  showToast(`跑分完成：有效点 ${valid}/${total}`);
  renderBenchmarkProgress();
  refreshStatus();
}

function startBenchmarkProgressPolling(request = {}) {
  stopBenchmarkProgressPolling();
  const totalPoints = state.benchmark.samples.length || (
    Number(request.box_top_count || 0) + Number(request.edge_count || 0) + Number(request.random_count || 0)
  );
  const plannerCount = selectedBenchmarkPlannerIds().length;
  state.benchmark.progress = {
    running: true,
    stage: 'starting',
    label: '等待 MoveIt 服务',
    percent: 0,
    total_points: totalPoints,
    completed_steps: 0,
    total_steps: totalPoints + totalPoints * plannerCount,
    ik_done: 0,
    ik_ok: 0,
    plan_done: 0,
    plan_total: totalPoints * plannerCount,
    elapsed_ms: 0,
    eta_sec: null
  };
  renderBenchmarkProgress();
  benchmarkProgressTimer = window.setInterval(pollBenchmarkProgress, 500);
  pollBenchmarkProgress();
}

function stopBenchmarkProgressPolling() {
  if (!benchmarkProgressTimer) return;
  window.clearInterval(benchmarkProgressTimer);
  benchmarkProgressTimer = null;
}

async function pollBenchmarkProgress() {
  try {
    const progress = await getBenchmarkProgress(state.arm);
    state.benchmark.progress = progress;
    renderBenchmarkProgress();
  } catch {
    // Progress polling is best-effort; the main benchmark request reports errors.
  }
}

function renderBenchmarkProgress() {
  const root = byId('benchmarkProgress');
  if (!root) return;
  const progress = state.benchmark.progress;
  if (!progress) {
    root.hidden = true;
    return;
  }
  root.hidden = false;
  const percent = Math.max(0, Math.min(100, Number(progress.percent || 0)));
  byId('benchmarkProgressStage').textContent = benchmarkProgressLabel(progress);
  byId('benchmarkProgressPercent').textContent = `${formatNumber(percent, 1)}%`;
  byId('benchmarkProgressBar').style.width = `${percent}%`;
  byId('benchmarkProgressMeta').textContent = benchmarkProgressMeta(progress);
  root.dataset.state = progress.stage === 'failed' || progress.stage === 'blocked'
    ? 'bad'
    : progress.stage === 'done'
      ? 'good'
      : progress.running
        ? 'running'
        : 'neutral';
  if (progress.running) {
    setBadge('benchmarkState', '跑分中', 'warn');
    byId('benchmarkStatus').textContent = benchmarkProgressMeta(progress);
  } else if (progress.stage === 'failed' || progress.stage === 'blocked') {
    setBadge('benchmarkState', '跑分失败', 'bad');
    byId('benchmarkStatus').textContent = progress.error || progress.label || '跑分失败';
  }
}

function benchmarkProgressLabel(progress) {
  if (progress.error && (progress.stage === 'failed' || progress.stage === 'blocked')) {
    return progress.label || '跑分失败';
  }
  return progress.label || (
    progress.stage === 'ik'
      ? 'IK 检查'
      : progress.stage === 'planning'
        ? '规划中'
        : progress.stage === 'done'
          ? '跑分完成'
          : '等待跑分'
  );
}

function benchmarkProgressMeta(progress) {
  const parts = [];
  const totalPoints = Number(progress.total_points || 0);
  const ikDone = Number(progress.ik_done || 0);
  const ikOk = Number(progress.ik_ok || 0);
  if (totalPoints) parts.push(`IK ${ikDone}/${totalPoints}，有效 ${ikOk}`);
  const planTotal = Number(progress.plan_total || 0);
  if (planTotal) parts.push(`规划 ${Number(progress.plan_done || 0)}/${planTotal}`);
  if (progress.current_sample_id !== null && progress.current_sample_id !== undefined) {
    parts.push(`点 #${progress.current_sample_id}`);
  }
  if (progress.current_planner_label || progress.current_planner_id) {
    parts.push(progress.current_planner_label || progress.current_planner_id);
  }
  if (Number(progress.elapsed_ms) > 0) {
    parts.push(`已用 ${formatDurationSec(Number(progress.elapsed_ms) / 1000)}`);
  }
  if (progress.running && Number(progress.eta_sec) > 0) {
    parts.push(`预计剩余 ${formatDurationSec(progress.eta_sec)}`);
  }
  if (progress.error) parts.push(progress.error);
  return parts.join(' · ') || '等待跑分';
}

function formatDurationSec(value) {
  const seconds = Number(value);
  if (!Number.isFinite(seconds)) return '--';
  if (seconds < 10) return `${formatNumber(seconds, 1)}s`;
  if (seconds < 90) return `${Math.round(seconds)}s`;
  return `${Math.floor(seconds / 60)}m${Math.round(seconds % 60)}s`;
}

function handleBenchmarkSampleConfigInput() {
  if (document.body.dataset.busy) return;
  state.benchmark.samples = [];
  state.benchmark.result = null;
  state.benchmark.selectedSampleId = null;
  state.benchmark.progress = null;
  scene?.setBenchmarkSamples([]);
  renderBenchmarkQuickStats();
  renderBenchmarkSummary();
  renderBenchmarkSamples();
  renderBenchmarkProgress();
  byId('benchmarkStatus').textContent = '点集参数已修改，重新生成后生效';
}

function handleBenchmarkRuntimeInput() {
  if (state.benchmark.result) {
    state.benchmark.result = null;
    state.benchmark.progress = null;
    renderBenchmarkSummary();
    renderBenchmarkSamples();
    renderBenchmarkProgress();
  }
  renderBenchmarkQuickStats();
  byId('benchmarkStatus').textContent = state.benchmark.samples.length
    ? '规划参数已修改，重新跑分后生效'
    : '等待生成测试点';
}

function handleBenchmarkPlannerChange() {
  selectedBenchmarkPlannerIds();
  if (state.benchmark.result) state.benchmark.result = null;
  state.benchmark.progress = null;
  renderBenchmarkQuickStats();
  renderBenchmarkSummary();
  renderBenchmarkSamples();
  renderBenchmarkProgress();
  byId('benchmarkStatus').textContent = state.benchmark.samples.length
    ? '规划器选择已修改，重新跑分后生效'
    : '等待生成测试点';
}

function currentBenchmarkSamples() {
  return state.benchmark.result?.samples || state.benchmark.samples || [];
}

function renderBenchmarkQuickStats() {
  const root = byId('benchmarkQuickStats');
  if (!root) return;
  const samples = currentBenchmarkSamples();
  const result = state.benchmark.result;
  const requested = requestedBenchmarkPointCount();
  const total = Number(result?.total_points ?? samples.length);
  const valid = Number(result?.valid_points ?? samples.filter(sample => sample.ik?.ok).length);
  const planners = benchmarkPlannerCount();
  root.innerHTML = [
    ['请求点', requested],
    ['已生成', samples.length || 0],
    ['IK 有效', result ? `${valid}/${total}` : '--'],
    ['规划器', planners]
  ].map(([label, value]) => `
    <div class="benchmark-metric"><span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>
  `).join('');

  if (result) {
    setBadge('benchmarkState', valid ? '结果已生成' : '无有效点', valid ? 'good' : 'bad');
  } else if (samples.length) {
    setBadge('benchmarkState', `已生成 ${samples.length}`, 'good');
  } else {
    setBadge('benchmarkState', '未生成', 'neutral');
  }
}

function renderBenchmarkSummary() {
  const root = byId('benchmarkSummary');
  if (!root) return;
  const result = state.benchmark.result;
  const rows = Object.values(result?.summary || {});
  if (!rows.length) {
    renderEmpty('benchmarkSummary', '跑分后生成规划器成功率结果');
    return;
  }
  const order = new Map((result.planners || []).map((planner, index) => [planner.planner_id, index]));
  rows.sort((a, b) => (order.get(a.planner_id) ?? 999) - (order.get(b.planner_id) ?? 999));
  root.innerHTML = rows.map(row => {
    const rate = Math.max(0, Math.min(1, Number(row.success_rate || 0)));
    const percent = `${Math.round(rate * 100)}%`;
    return `
      <div class="benchmark-score-row">
        <div>
          <strong>${escapeHtml(row.label || row.planner_id)}</strong>
          <small>${escapeHtml(row.planner_id)}</small>
        </div>
        <div class="benchmark-score-meter"><span style="width:${rate * 100}%"></span></div>
        <b>${percent}</b>
        <small>${Number(row.planned_ok || 0)}/${Number(row.valid_points || 0)} · ${formatNumber(row.mean_elapsed_ms, 1)} ms</small>
      </div>
    `;
  }).join('');
}

function renderBenchmarkSamples() {
  const root = byId('benchmarkSamples');
  if (!root) return;
  const samples = currentBenchmarkSamples();
  const result = state.benchmark.result;
  const total = Number(result?.total_points ?? samples.length);
  const valid = Number(result?.valid_points ?? samples.filter(sample => sample.ik?.ok).length);
  const badge = byId('benchmarkSetBadge');
  if (badge) badge.textContent = `${valid}/${total || 0}`;
  scene?.setBenchmarkSamples(samples, state.benchmark.selectedSampleId);
  if (!samples.length) {
    renderEmpty('benchmarkSamples', '暂无测试点');
    return;
  }
  const planRowsBySample = benchmarkPlanRowsBySample(result);
  const plannerCount = result?.planners?.length || benchmarkPlannerCount();
  root.innerHTML = samples.map(sample => {
    const point = [sample.x, sample.y, sample.z].map(value => formatNumber(value, 3)).join(', ');
    const plans = planRowsBySample.get(Number(sample.id)) || [];
    const planOk = plans.filter(row => row.ok).length;
    const ikKnown = Boolean(sample.ik);
    const ikOk = sample.ik?.ok === true;
    const active = String(sample.id) === String(state.benchmark.selectedSampleId);
    const planText = ikKnown && !ikOk ? '未计入' : result ? `${planOk}/${plannerCount}` : '待跑分';
    const scanText = benchmarkIkScanText(sample.ik);
    const planScanText = benchmarkPlanScanText(plans, plannerCount);
    return `
      <div class="benchmark-sample ${active ? 'active' : ''}" data-benchmark-sample="${escapeHtml(sample.id)}">
        <div>
          <strong>#${escapeHtml(sample.id)} ${escapeHtml(BENCHMARK_SOURCE_LABELS[sample.source] || sample.source || '测试点')}</strong>
          <small>X/Y/Z ${escapeHtml(point)}${scanText ? ` · ${escapeHtml(scanText)}` : ''}${planScanText ? ` · ${escapeHtml(planScanText)}` : ''}</small>
        </div>
        <div class="benchmark-sample-state">
          <span data-state="${ikKnown ? ikOk ? 'good' : 'bad' : 'neutral'}">${ikKnown ? ikOk ? 'IK 通过' : 'IK 失败' : '未跑 IK'}</span>
          <span data-state="${result ? planOk ? 'good' : 'bad' : 'neutral'}">规划 ${escapeHtml(planText)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function benchmarkIkScanText(ik) {
  if (!ik) return '';
  const scanned = Number(ik.scanned_count ?? ik.candidate_index);
  const total = Number(ik.candidate_count);
  const mode = ik.mode ? `${ik.mode} ` : '';
  if (Number.isFinite(scanned) && Number.isFinite(total) && total > 1) {
    return `姿态 ${mode}${scanned}/${total}`;
  }
  if (Number.isFinite(scanned) && scanned > 1) {
    return `姿态 ${mode}第 ${scanned} 个`;
  }
  return mode ? `姿态 ${mode}` : '';
}

function benchmarkPlanScanText(plans, plannerCount) {
  if (!plans?.length || plannerCount !== 1) return '';
  const row = plans[0];
  const scanned = Number(row.scanned_count ?? row.candidate_index);
  const total = Number(row.candidate_count);
  if (Number.isFinite(scanned) && Number.isFinite(total) && total > 1) {
    return `规划姿态 ${scanned}/${total}`;
  }
  return '';
}

function benchmarkPlanRowsBySample(result) {
  const rowsBySample = new Map();
  for (const rows of Object.values(result?.results || {})) {
    for (const row of rows || []) {
      const key = Number(row.sample_id);
      if (!rowsBySample.has(key)) rowsBySample.set(key, []);
      rowsBySample.get(key).push(row);
    }
  }
  return rowsBySample;
}

function handleBenchmarkSampleClick(event) {
  const row = event.target.closest('[data-benchmark-sample]');
  if (!row) return;
  const sample = currentBenchmarkSamples().find(item => String(item.id) === String(row.dataset.benchmarkSample));
  if (!sample) return;
  state.benchmark.selectedSampleId = sample.id;
  setPose(sample);
  scene?.setBenchmarkSamples(currentBenchmarkSamples(), state.benchmark.selectedSampleId);
  renderBenchmarkSamples();
  byId('footerMessage').textContent =
    `已选中跑分点 #${sample.id}：${formatNumber(sample.x, 3)}, ${formatNumber(sample.y, 3)}, ${formatNumber(sample.z, 3)}`;
}

async function loadPointLibrary() {
  try {
    const data = await getPoints();
    state.points = data.points || [];
    renderLibrary('pointsList', state.points, 'point');
  } catch (error) {
    renderEmpty('pointsList', error.message);
  }
}

async function loadPresetLibrary() {
  try {
    const data = await getPresets();
    state.presets = data.presets || [];
    renderLibrary('presetsList', state.presets, 'preset');
  } catch (error) {
    renderEmpty('presetsList', error.message);
  }
}

function renderLibrary(rootId, items, type) {
  const root = byId(rootId);
  if (!items.length) {
    renderEmpty(rootId, type === 'point' ? '暂无点位' : '暂无预设');
    return;
  }
  root.innerHTML = items.map((item, index) => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(item.name || `${type === 'point' ? '点位' : '预设'} ${index + 1}`)}</strong>
        <small>${armLabel(item.arm)} · X ${formatNumber(item.x)} · Y ${formatNumber(item.y)} · Z ${formatNumber(item.z)}</small>
      </div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-library-use="${type}:${index}" aria-label="载入" title="载入"><i data-lucide="corner-down-left"></i></button>
        <button class="icon-button" type="button" data-library-delete="${type}:${index}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join('');
  refreshIcons(root);
}

function renderEmpty(rootId, text) {
  byId(rootId).innerHTML = `<p class="empty-state">${escapeHtml(text)}</p>`;
}

async function savePoint() {
  const name = byId('pointName').value.trim() || new Date().toLocaleTimeString('zh-CN', { hour12: false });
  await runCommand('保存点位', () => apiRequest('/api/points', { ...readPose(), name }));
  byId('pointName').value = '';
  loadPointLibrary();
}

async function savePreset() {
  const name = byId('presetName').value.trim() || new Date().toLocaleTimeString('zh-CN', { hour12: false });
  await runCommand('保存抓取预设', () => apiRequest('/api/presets', {
    ...readGraspPose(),
    name,
    pick_approach: numericValue('pickApproach', 0.1),
    pick_descend: numericValue('pickDescend', 0.05),
    pick_hold: numericValue('pickHold', 1.0),
    pick_lift: numericValue('pickLift', 0.1)
  }));
  byId('presetName').value = '';
  loadPresetLibrary();
}

async function handleLibraryClick(event) {
  const use = event.target.closest('[data-library-use]')?.dataset.libraryUse;
  const remove = event.target.closest('[data-library-delete]')?.dataset.libraryDelete;
  if (!use && !remove) return;
  const [type, indexText] = (use || remove).split(':');
  const index = Number(indexText);
  const collection = type === 'point' ? state.points : state.presets;
  if (use) {
    const item = collection[index];
    if (!item) return;
    if (item.arm) await setArm(item.arm);
    setPose(item);
    if (type === 'preset') applyPresetOptions(item);
    showToast(`已载入${type === 'point' ? '点位' : '预设'}：${item.name || index + 1}`);
    return;
  }
  if (!(await confirmAction(`删除“${collection[index]?.name || index + 1}”？`, '确认删除'))) return;
  await apiRequest(`/api/${type === 'point' ? 'points' : 'presets'}/delete`, { index });
  if (type === 'point') loadPointLibrary();
  else loadPresetLibrary();
}

function applyPresetOptions(item) {
  const mappings = [
    ['pickApproach', 'pick_approach'],
    ['pickDescend', 'pick_descend'],
    ['pickHold', 'pick_hold'],
    ['pickLift', 'pick_lift']
  ];
  for (const [id, key] of mappings) {
    const node = byId(id);
    if (node && Number.isFinite(Number(item[key]))) node.value = item[key];
  }
}

function addSequenceStep() {
  const type = byId('sequenceType').value;
  let step = { type, arm: state.arm };
  if (['approach', 'grasp', 'pick'].includes(type)) step.pose = readGraspPose();
  if (type === 'move') step.pose = readPose();
  if (type === 'approach') step.offset_z = numericValue('pickApproach', 0.1);
  if (type === 'lift') step.offset_z = numericValue('pickLift', 0.1);
  if (type === 'pick') {
    step = {
      ...step,
      approach_height: numericValue('pickApproach', 0.1),
      descend_distance: numericValue('pickDescend', 0.05),
      hold_seconds: numericValue('pickHold', 1.0),
      lift_height: numericValue('pickLift', 0.1)
    };
  }
  if (type === 'wait') step.seconds = 1;
  state.sequence.push(step);
  persistSequence();
  renderSequence();
}

function renderSequence() {
  const root = byId('sequenceList');
  if (!state.sequence.length) {
    renderEmpty('sequenceList', '暂无动作步骤');
    return;
  }
  root.innerHTML = state.sequence.map((step, index) => `
    <div class="list-item">
      <div><strong>${index + 1}. ${ACTION_LABELS[step.type] || step.type}</strong><small>${armLabel(step.arm)}${step.seconds ? ` · ${step.seconds} s` : ''}</small></div>
      <div class="item-actions">
        <button class="icon-button" type="button" data-sequence-up="${index}" aria-label="上移" title="上移"><i data-lucide="arrow-up"></i></button>
        <button class="icon-button" type="button" data-sequence-delete="${index}" aria-label="删除" title="删除"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `).join('');
  refreshIcons(root);
}

function handleSequenceClick(event) {
  const up = event.target.closest('[data-sequence-up]')?.dataset.sequenceUp;
  const remove = event.target.closest('[data-sequence-delete]')?.dataset.sequenceDelete;
  if (up !== undefined) {
    const index = Number(up);
    if (index > 0) [state.sequence[index - 1], state.sequence[index]] = [state.sequence[index], state.sequence[index - 1]];
  } else if (remove !== undefined) {
    state.sequence.splice(Number(remove), 1);
  } else {
    return;
  }
  persistSequence();
  renderSequence();
}

function clearSequence() {
  state.sequence = [];
  persistSequence();
  renderSequence();
}

function persistSequence() {
  localStorage.setItem('piper.sequence', JSON.stringify(state.sequence));
}

async function executeSequence() {
  if (!state.sequence.length) {
    showToast('请先添加动作步骤', 'warn');
    return;
  }
  await runCommand('执行动作序列', () => apiRequest('/api/sequence', { steps: state.sequence }), {
    confirm: `即将连续执行 ${state.sequence.length} 个动作步骤，请确认 Piper 工作区安全。`,
    confirmTitle: '确认执行动作序列'
  });
}

async function loadLogs() {
  try {
    const data = await getLogs(200);
    const level = byId('logLevelFilter').value;
    const lines = (data.logs || []).map(log => typeof log === 'string' ? log : JSON.stringify(log));
    const filtered = level === 'all' ? lines : lines.filter(line => line.includes(level));
    byId('logViewer').textContent = filtered.join('\n') || '暂无日志';
  } catch (error) {
    byId('logViewer').textContent = `日志读取失败：${error.message}`;
  }
}

function armLabel(arm = state.arm) {
  return arm === 'left' ? '未使用' : 'Piper';
}

function loadSavedSequence() {
  try {
    const saved = JSON.parse(localStorage.getItem('piper.sequence') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}
