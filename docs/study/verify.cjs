"use strict";

// 阅读版的对照实验。只读 W.js；把原模块抽到隔离 VM，不启动游戏、不联网。
// 为核对 URL 路由，N0 授权算法在内存副本里换成指定结果的记录桩。
// 因此验证的是“传入什么身份、走哪条分支”，不是验证授权算法本身。
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const readable = require("./platform-guard.readable.js");
const root = process.env.NCDLS_STUDY_ROOT || path.resolve(__dirname, "../..");
const source = fs.readFileSync(path.join(root, "src/shared/W.js"), "utf8");
const sourceHash = createHash("sha256").update(source).digest("hex");

// 真正解码文件中的 Base64 数据；不是事先硬填一张中文解释表。
const encoded = source.match(/1024,\s*"([A-Za-z0-9+/=]+)"/);
assert(encoded, "数据段变动，需要重新定位");
const data = Buffer.from(encoded[1], "base64");
function originalString(address) {
  const offset = address - 1024;
  return data.subarray(offset, data.indexOf(0, offset)).toString("utf8");
}
for (const [address, value] of Object.entries({
  1294: "wx", 1858: "location", 2241: "href", 2474: "currFrame",
  2658: "stage", 2751: "renderingEnabled", 2772: "appId", 2799: "getAccountInfoSync",
  3033: "B", 3783: "wx9fb8b84fc488b632", 3962: "http://192.168.",
})) assert.equal(originalString(Number(address)), value);

const prefix = "      var i = (() => {";
assert.equal(source.split(prefix).length, 2);
const start = source.indexOf(prefix) + "      var i = ".length;
const end = source.indexOf("\n    })((_m = _m || {})),", start);
assert(end > start);
let expression = source.slice(start, end).trim().replace(/;$/, "");
function replaceOnce(oldText, newText) {
  assert.equal(expression.split(oldText).length, 2, `定位失败：${oldText}`);
  expression = expression.replace(oldText, newText);
}
replaceOnce("return (F0(), r.dy);", `
  h.__studyReadKV = () => V(p[2218]).KV;
  h.__studySetKV = value => { V(p[2218]).KV = value; };
  return (F0(), r.dy);`);
replaceOnce("function N0(I, r) {", `function N0(I, r) {
  // 只在 VM 内存副本替换此边界，原文件不变。
  function readString(pointer) {
    const long = (A0[pointer + 11] & 128) !== 0;
    const begin = long ? a0[pointer >> 2] : pointer;
    const length = long ? a0[(pointer + 4) >> 2] : A0[pointer + 11];
    return new TextDecoder().decode(A0.subarray(begin, begin + length));
  }
  return globalThis.__studyLicenseMatch(readString(I), readString(r)) ? 1 : 0;
  // 原算法文本保留但不执行，供定位锚点使用。
`);

async function makeOriginal({ href, wx, match = () => false, physics = {} } = {}) {
  const calls = [], events = [];
  let rendering = true;
  class Node {
    constructor() { this.meshRenderer = {}; }
    addComponent(Type) { events.push(Type === CItem ? "tracking" : "body"); return {}; }
  }
  class CItem {}
  const stage = {};
  Object.defineProperty(stage, "renderingEnabled", {
    get: () => rendering,
    set(value) { rendering = value; events.push(`render:${value}`); },
  });
  const context = {
    console, TextDecoder, TextEncoder, setTimeout, clearTimeout, Date,
    W: { Mem: class {}, LM: { U6: "token-a|token-b" }, CItem },
    Laya: {
      Browser: {}, Texture: {}, timer: { currFrame: 0 }, stage,
      scene: { addChild() { events.push("addChild"); }, _b2PhysicsSimulation: physics.hasB2Simulation },
      PrimitiveMesh: { createBox() { events.push("box"); return {}; } },
      MeshSprite3D: Node, Rigidbody3D: class {}, BoxColliderShape: class {}, Vector3: class {},
      Stat: { spriteCount: 7 },
      Physics3D: { _enablePhysics: !!physics.physics3DEnabled },
      PhysicsSimulation: { disableSimulation: !!physics.simulationDisabled },
    },
    Config3D: { _config: { isUseCannonPhysicsEngine: !!physics.useCannon } },
    __studyLicenseMatch(candidate, token) { calls.push([candidate, token]); return match(candidate, token); },
  };
  if (href !== undefined) context.location = { href };
  if (wx) context.wx = wx;
  if (physics.hasBNamespace) context.B = { B2Rigidbody: class {}, B2BoxColliderShape: class {} };
  if (physics.hasB2D) context.B2D = {};
  context.window = context;
  const factory = vm.runInNewContext(expression, context, { timeout: 1000 });
  const module = await factory();
  let initialized = 0;
  module.i(module, () => initialized++);
  assert.equal(initialized, 1);
  return { module, context, calls, events, readRendering: () => rendering };
}

async function main() {
  let cases = 0;
  const urls = [
    "https://suanec.github.io/ncdls/", "http://127.0.0.1:8091/",
    "http://192.168.1.4:8091/", "http://localhost:8091/", "file:///tmp/game.html",
    "https://cdn.game.chot.cn/demo/", "https://example.com/?gameId=demo&x=1",
    "https://example.cn/ssp/demo/index.html", "https://mini123.jp/demo/index.html",
    "https://miniapp.line.me/demo/path", "https://4399.com/h5-preview/index.html",
    "https://4399api.com/h5.preview/index.html", "https://4399.com/20261126/demo/gameIndex.html",
  ];
  for (const href of urls) {
    for (const shouldMatch of [false, true]) {
      const match = () => shouldMatch;
      const original = await makeOriginal({ href, match });
      const readableCalls = [];
      const state = readable.checkWebLocation(href, {
        U6: "token-a|token-b",
        matches(candidate, token) { readableCalls.push([candidate, token]); return match(); },
      });
      assert.equal(state.KV, original.module.__studyReadKV(), href);
      assert.deepEqual(readableCalls, original.calls, href);
      for (const frame of [300, 301, 900, 901, 902]) {
        original.context.Laya.timer.currFrame = frame;
        original.events.length = 0;
        original.module.j(0);
        const actions = readable.planLegacyFrame({ KV: state.KV, frame });
        assert.equal(actions.some(a => a.action === "create-hidden-box"), original.events.includes("box"), href);
        assert.equal(actions.some(a => a.action === "set-renderingEnabled"), original.events.includes("render:false"), href);
      }
      cases++;
    }
  }
  for (const account of [{}, { miniProgram: {} },
    { miniProgram: { appId: "wx9fb8b84fc488b632" } },
    { miniProgram: { appId: "wxa3bf2c77158be359" } }]) {
    const wx = { getAccountInfoSync: () => account };
    const original = await makeOriginal({ wx });
    const state = readable.checkWechatIdentity(wx, { U6: "token-a|token-b", matches: () => false });
    assert.equal(state.KV, original.module.__studyReadKV());
    cases++;
  }
  for (const physics of [ {}, { physics3DEnabled: true },
    { physics3DEnabled: true, simulationDisabled: true },
    { physics3DEnabled: true, useCannon: true },
    { hasBNamespace: true, hasB2D: true, hasB2Simulation: true },
    { hasBNamespace: true, hasB2D: true, hasB2Simulation: false } ]) {
    const original = await makeOriginal({ href: urls[0], physics });
    original.context.Laya.timer.currFrame = 301;
    original.module.j(0);
    const actions = readable.planLegacyFrame({ frame: 301, ...physics });
    assert.equal(actions.some(a => /add-[23]d-body/.test(a.action)), original.events.includes("body"));
    cases++;
  }
  // 特别核对 undefined 和 false 的区别，避免把句柄 1 误认为布尔 true。
  for (const KV of [undefined, false, null, "gghh", "bbaa", "aabb"]) {
    const original = await makeOriginal({ href: urls[0] });
    original.module.__studySetKV(KV);
    original.context.Laya.timer.currFrame = 901;
    original.module.j(0);
    const actions = readable.planLegacyFrame({ KV, frame: 901 });
    assert.equal(actions.some(a => a.action === "set-renderingEnabled"), !original.readRendering());
    cases++;
  }
  assert.equal(createHash("sha256").update(fs.readFileSync(path.join(root, "src/shared/W.js"))).digest("hex"), sourceHash);
  console.log(JSON.stringify({ success: true, cases, sourceSha256: sourceHash,
    scope: "原模块的字符串、URL/微信分支、状态与帧动作对照；授权算法使用记录桩；未启动真实游戏" }, null, 2));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
