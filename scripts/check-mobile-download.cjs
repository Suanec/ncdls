const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const root = process.env.NCDLS_ROOT || path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "web_mobile/src/sw.js"), "utf8");
const scope = "https://game.test/ncdls/", version = "test-download";
const sha = (data) => crypto.createHash("sha256").update(data).digest("hex");
const raw = new Map([
  ["index.html", Buffer.from("<title>game</title>")],
  ["res/one.lh", Buffer.from("model-one".repeat(100))],
  ["res/two.png", Buffer.from([0, 1, 128, 255])],
]);
const files = [...raw].map(([path, data]) => ({ path, bytes: data.length, sha256: sha(data) }));
const packData = Buffer.from(JSON.stringify({ format: 1, files: [...raw].map(([name, data]) => [name, data.toString("base64")]) }));
const pack = { path: "offline-packs/one.json", bytes: packData.length, sha256: sha(packData), files: files.map(f => f.path) };
const manifest = { version, files, packs: [pack], totalBytes: files.reduce((s, f) => s + f.bytes, 0) };
const cacheName = `ncdls-mobile:/ncdls/:${version}`;
const url = (name) => new URL(name, scope).href;

function harness({ failOnce = false, corrupt = false, stallOnce = false, ignoreAbortOnce = false, hangForever = false, stallBodyOnce = false, bufferedOnce = false } = {}) {
  const stores = new Map(), listeners = new Map(), requests = [], messages = [];
  const counters = new Map();
  const caches = {
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); },
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name), key = (r) => typeof r === "string" ? r : r.url;
      return {
        async match(r) { return store.get(key(r))?.clone(); },
        async put(r, response) { store.set(key(r), response.clone()); },
        async keys() { return [...store.keys()].map(url => ({ url })); },
      };
    },
  };
  const context = vm.createContext({
    URL, Headers, Response, TextDecoder, Uint8Array, AbortController,
    crypto: crypto.webcrypto, caches, atob,
    setTimeout(fn, ms) { return setTimeout(fn, ms === 30000 ? 30 : ms === 120000 ? 120 : 1); },
    clearTimeout, setInterval, clearInterval, ReadableStream,
    self: {
      registration: { scope },
      clients: { async matchAll() { return [{ url: scope, postMessage(m) { messages.push(m); } }]; }, async claim() {} },
      async skipWaiting() {},
      addEventListener(name, fn) { listeners.set(name, fn); },
    },
    async fetch(address, options) {
      const name = new URL(address).pathname.slice("/ncdls/".length);
      requests.push(name);
      const attempt = (counters.get(name) || 0) + 1;
      counters.set(name, attempt);
      if (name === "offline-manifest.json") return new Response(JSON.stringify(manifest));
      if (name === pack.path) {
        if (bufferedOnce && attempt === 1) return {ok:true,headers:new Headers(),body:null,
          async arrayBuffer(){await new Promise(resolve=>setTimeout(resolve,60));return packData;}};
        if (hangForever || (ignoreAbortOnce && attempt === 1)) return new Promise(() => {});
        if (stallBodyOnce && attempt === 1) return new Response(new ReadableStream({
          start(controller) { controller.enqueue(new Uint8Array([123])); }
        }));
        if (stallOnce && attempt === 1) return new Promise((resolve, reject) => {
          options.signal.addEventListener("abort", () => {
            const error = new Error("stalled"); error.name = "AbortError"; reject(error);
          });
        });
        if (failOnce && attempt === 1) return new Response("try again", { status: 503 });
        return new Response(corrupt ? Buffer.from("corrupt") : packData);
      }
      if (raw.has(name)) return new Response(raw.get(name));
      throw new Error("Unexpected request " + name);
    },
  });
  vm.runInContext(source.replace("__MOBILE_VERSION__", version), context);
  return {
    stores, caches, requests, messages, listeners,
    async download() {
      let job;
      listeners.get("message")({ data: { type: "download-all" }, waitUntil(p) { job = p; } });
      await job;
    },
    async ready() { return Boolean(await (await caches.open(cacheName)).match(url("__offline_ready__"))); },
  };
}

(async () => {
  const h = harness({ failOnce: true });
  h.listeners.get("install")({ waitUntil() { throw new Error("Install must not download"); } });
  assert.equal(h.requests.length, 0);
  await h.download();
  assert(await h.ready());
  assert.deepEqual(h.requests, ["offline-manifest.json", pack.path, pack.path]);
  const cache = await h.caches.open(cacheName);
  for (const file of files) {
    const response = await cache.match(url(file.path));
    assert.equal(sha(Buffer.from(await response.arrayBuffer())), file.sha256);
  }
  assert((await cache.match(url("index.html"))).headers.get("content-type").startsWith("text/html"));
  assert.equal((await cache.match(url("res/two.png"))).headers.get("content-type"), "image/png");
  assert(h.messages.some(m => m.receivedBytes > 0));
  const start = h.requests.length;
  await h.download();
  assert.deepEqual(h.requests.slice(start), ["offline-manifest.json"]);

  const broken = harness({ corrupt: true });
  const old = await broken.caches.open("ncdls-mobile:/ncdls/:old");
  await old.put(url("__offline_ready__"), new Response("{}"));
  await assert.rejects(broken.download(), /资源包校验失败/);
  assert.equal(await broken.ready(), false);
  assert(await old.match(url("__offline_ready__")));

  // Resume a partial cache: the large model and index are already verified, so
  // fetching only the missing four-byte image is cheaper than downloading a pack.
  const partial = harness();
  const existing = await partial.caches.open(cacheName);
  for (const file of files.slice(0, 2)) await existing.put(url(file.path), new Response(raw.get(file.path), {
    headers: { "x-ncdls-sha256": file.sha256 },
  }));
  await partial.download();
  assert.deepEqual(partial.requests, ["offline-manifest.json", "res/two.png"]);
  assert(await partial.ready());

  const stalled = harness({ stallOnce: true });
  await stalled.download();
  assert(await stalled.ready());
  assert.equal(stalled.requests.filter(p => p === pack.path).length, 2);
  const ignored = harness({ ignoreAbortOnce: true });
  await ignored.download();
  assert(await ignored.ready());
  assert.equal(ignored.requests.filter(p => p === pack.path).length, 2);
  const body = harness({ stallBodyOnce: true });
  await body.download();
  assert(await body.ready());
  assert.equal(body.requests.filter(p => p === pack.path).length, 2);
  const buffered = harness({ bufferedOnce: true });
  await buffered.download();
  assert(await buffered.ready());
  assert.equal(buffered.requests.filter(p => p === pack.path).length, 1);
  const forever = harness({ hangForever: true });
  await assert.rejects(forever.download(), /网络长时间无响应/);
  assert.equal(await forever.ready(), false);
  assert.equal(forever.requests.filter(p => p === pack.path).length, 3);
  assert(forever.messages.some(m => m.transfer?.attempt === 3));
  console.log("Offline download regression passed: abort-ignoring fetch/body timeout, bounded retries, transfer status, explicit-only download, bundle integrity, 503/idle-timeout retry, partial resume, MIME types, and no redundant pack download.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
