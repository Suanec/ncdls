"use strict";

/**
 * 原平台检查：可读学习版（2026-11-26）
 *
 * 来源：src/shared/W.js，基准提交 21800f6。
 * 这不是找回的作者原稿，而是根据实际调用、字符串与行为人工还原的语义版本。
 *
 * 阅读顺序：checkWebLocation → checkLicenseCandidates → planLegacyFrame。
 * 保留：网页分支顺序、微信身份检查示例、内部状态值、301/901 帧条件。
 * 边界：未移植完整授权算法 N0；通过 matches 回调传入其结果。
 *       其他原生平台、内存管理和徽标辅助函数不展开。
 *       模型/物理/空耗循环改为“动作清单”，不会真的运行或停止游戏。
 * 本文件没有浏览器入口，没有网络请求，不读取真实存档，不参与游戏构建。
 */

// 注意：原代码不是“KV === false 时处罚”。
// 它的私有对象初始 KV 为 undefined；Embind 用数字句柄 1 表示 undefined。
// gghh / bbaa / aabb 是原有标记。下面的中文解释是根据分支推断的用途，
// 不是找回的原变量名。私有对象也不是 window.W.KV。
const MARKER = Object.freeze({
  WEB_EXCEPTION: "gghh",     // 本地/特定网页例外
  PLATFORM_EXCEPTION: "bbaa", // 特定平台身份例外
  LICENSE_MATCHED: "aabb",   // N0 至少一次返回正数
});

function createState() {
  return { KV: undefined, trace: [] };
}

function mark(state, value, reason) {
  state.KV = value;
  // 原代码还调用 k()；它在特定条件下创建文字等，本学习版只记录该动作。
  state.trace.push({ action: "set-marker", value, reason });
}

/** W.js:30372：原 v(candidate, W.LM) 的外围控制流。
 * U6 是原 W.LM.U6 字符串，可由 | 分隔多个条目。
 * matches 对应 N0 的“匹配得分大于零”，不是我们重新发明的授权算法。
 * 不提供 matches 时只记录“尚未求值”，不擅自判为通过/不通过。
 */
function checkLicenseCandidates(state, candidates, { U6 = "", matches } = {}) {
  if (typeof matches !== "function") {
    state.trace.push({ action: "license-not-evaluated", candidates });
    return undefined;
  }
  for (const candidate of candidates) {
    const matched = String(U6).split("|").reduce(
      (count, token) => count + (matches(candidate, token) ? 1 : 0), 0,
    ) > 0;
    state.trace.push({ action: "license-candidate", candidate, matched });
    if (matched) {
      mark(state, MARKER.LICENSE_MATCHED, "授权条目命中");
      return true;
    }
    // 原 v() 在不匹配时会重新写回 undefined。
    state.KV = undefined;
  }
  return false;
}

// 原代码按 C++ 字符串字节位置切片；这里面向通常的 ASCII/百分号编码 URL。
// 不用 URL/URLSearchParams：原代码做的是大小写敏感的字符串查找，
// 并没有严格检查主机名、参数边界，也没有 decodeURIComponent。
function before(text, fragment) {
  const index = text.indexOf(fragment);
  return index === -1 ? text : text.slice(0, index);
}

function previousDate(text) {
  // W.js:29844 U0：将 YYYYMMDD 转日期、减一天、重新格式化。
  // 此处仅还原格式正确的日期；无效日期/本地时区边界不是本学习版的覆盖范围。
  if (!/^\d{8}$/.test(text)) throw new Error("日期渠道示例需要 YYYYMMDD");
  const date = new Date(`${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}`);
  date.setDate(date.getDate() - 1);
  return String(date.getFullYear())
    + String(date.getMonth() + 1).padStart(2, "0")
    + String(date.getDate()).padStart(2, "0");
}

/** W.js:21711–21920：普通网页分支。
 * state 是初始化为 undefined 的内部检查状态；不是页面/引擎全局对象。
 * 分支顺序照原代码保留。matches 留空时，有授权运算的分支会明确标注未求值。
 */
function checkWebLocation(href, options = {}, state = createState()) {
  if (href === undefined) {
    state.trace.push({ action: "location-absent" });
    return state;
  }
  href = String(href);

  // 原表达式：0 <= (c & u & n & A)，每个值都是 find() 的位置或 -1。
  // 只要任一查找成功，按位与的符号位为 0；等价于下面的 some()。
  if (["file://", "http://127.0.0.1", "http://192.168.", "cdn.game.chot.cn"]
    .some(fragment => href.includes(fragment))) {
    mark(state, MARKER.WEB_EXCEPTION, "命中原网页例外字符串");
    return state;
  }

  if (!href.includes("http://") && !href.includes("https://")) {
    // 原代码调用另一辅助分支 n0(callback)，本文件不模拟其宿主回调副作用。
    state.trace.push({ action: "other-protocol-not-expanded" });
    return state;
  }

  const gameIdAt = href.indexOf("gameId=");
  if (gameIdAt >= 0) {
    const candidate = before(href.slice(gameIdAt + 7), "&");
    checkLicenseCandidates(state, [candidate], options);
    return state;
  }

  if (href.includes("cn/ssp/")) {
    const directory = before(href, "/index.html");
    checkLicenseCandidates(state, [directory.slice(directory.lastIndexOf("/") + 1)], options);
    return state;
  }

  const is4399 = href.includes("4399.com") || href.includes("4399api.com");
  const isPreview = href.includes("h5.preview") || href.includes("h5-preview");
  if (is4399 && !isPreview) {
    // 原代码从 gameIndex.html 的上级目录提取日期，最多检查当日及前三天。
    const directory = before(href, "/gameIndex.html");
    const parent = directory.slice(0, directory.lastIndexOf("/"));
    let date = parent.slice(parent.lastIndexOf("/") + 1);
    for (let attempt = 0; attempt < 4; attempt++) {
      const matched = checkLicenseCandidates(state, [date], options);
      if (matched !== false) return state; // 未求值时也不假装继续验证。
      if (attempt < 3) date = previousDate(date);
    }
    return state;
  }

  // 特定发行平台分支：保留原分支优先级。
  if (href.includes("mini123.jp") && href.includes("/index.html")) {
    const directory = before(href, "/index.html");
    if (directory.lastIndexOf("/") >= 0) {
      checkLicenseCandidates(state, [directory.slice(directory.lastIndexOf("/") + 1)], options);
      return state;
    }
  }
  if (href.includes("miniapp.line.me") && href.includes(".me/")) {
    const candidate = before(href.slice(href.indexOf(".me/") + 4), "/");
    checkLicenseCandidates(state, [candidate], options);
    return state;
  }
  if (is4399) {
    mark(state, MARKER.WEB_EXCEPTION, "4399 预览分支");
    return state;
  }

  // 普通网页走到这里，只执行原初始化的后续回调，KV 仍为 undefined。
  // “没有明确报错”不等于框架接受该运行环境。
  state.trace.push({ action: "no-recognized-web-source" });
  return state;
}

/** W.js:21463–21504：微信分支示例（不代表所有平台的完整初始化顺序）。 */
function checkWechatIdentity(wx, options = {}, state = createState()) {
  if (!wx || typeof wx.getAccountInfoSync !== "function") return state;
  const account = wx.getAccountInfoSync();
  if (!account) return state;
  if (!account.miniProgram) {
    mark(state, MARKER.PLATFORM_EXCEPTION, "原微信分支：没有 miniProgram");
    return state;
  }
  const appId = account.miniProgram.appId;
  if (!appId) return state;
  if (appId === "wx9fb8b84fc488b632") {
    // 这是共享框架内置的一个例外值，不是当前游戏的 AppID。
    mark(state, MARKER.PLATFORM_EXCEPTION, "命中框架内置微信例外值");
  } else {
    checkLicenseCandidates(state, [String(appId)], options);
  }
  return state;
}

/** W.js:22394–22590：i.j(0) 的帧维护行为。
 * 这是无副作用的“动作计划”，不创建真正的模型、不跑耗时循环、不触碰 Laya。
 * 模型/物理分支按已解出的条件描述，CItem 后续生命周期不在这里展开。
 */
function planLegacyFrame({ KV, frame, hasScene = true,
  physics3DEnabled = false, simulationDisabled = false, useCannon = false,
  hasBNamespace = false, hasB2D = false, hasB2Simulation = false,
  needsTrackingComponent = true } = {}) {
  const actions = [];
  if (KV !== undefined) return actions;
  if (hasScene && frame >= 301) {
    actions.push({ action: "create-hidden-box", size: [1, 1, 1] });
    // 原代码设置 meshRenderer.enable = false：不显示不等于没有创建和维护成本。
    if (physics3DEnabled && !simulationDisabled && !useCannon) {
      actions.push({ action: "add-3d-body", mass: 0.1, gravity: [0, 0, 0], linearDamping: 1 });
    } else if (hasBNamespace && hasB2D && hasB2Simulation) {
      actions.push({ action: "add-2d-body", linearDamping: 1 });
    } else {
      // 原代码执行伪随机数更新。这里仅显示循环次数，绝不真的执行。
      actions.push({ action: "extra-loop", iterations: Math.max(0, Math.imul(frame, 1000)) });
    }
    if (needsTrackingComponent) actions.push({ action: "attach-CItem" });
  }
  // 注意：停绘不依赖 hasScene；只要读取到的 currFrame 达到阈值就会执行。
  if (frame >= 901) actions.push({ action: "set-renderingEnabled", value: false });
  return actions;
}

function demo() {
  for (const href of ["http://127.0.0.1:8091/", "https://suanec.github.io/ncdls/"]) {
    const state = checkWebLocation(href);
    console.log(`\n${href}：KV = ${String(state.KV)}`);
    for (const frame of [300, 301, 900, 901]) {
      console.log(`第 ${frame} 帧`, planLegacyFrame({ KV: state.KV, frame }));
    }
  }
}

module.exports = { MARKER, createState, checkWebLocation, checkWechatIdentity,
  checkLicenseCandidates, planLegacyFrame };
if (require.main === module) demo();
