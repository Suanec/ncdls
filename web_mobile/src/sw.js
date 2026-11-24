/* Built with a content-derived version; old versions stay active until their tabs close. */
const VERSION = "__MOBILE_VERSION__";
const SCOPE = new URL(self.registration.scope);
const PREFIX = `ncdls-mobile:${SCOPE.pathname}:`;
const CACHE = PREFIX + VERSION;
const READY = new URL("__offline_ready__", SCOPE).href;
const absolute = (path) => new URL(path, SCOPE).href;

async function broadcast(message) {
  const clients = await self.clients.matchAll({
    type: "window",
    includeUncontrolled: true,
  });
  for (const client of clients) {
    if (client.url.startsWith(SCOPE.href))
      client.postMessage({ app: "ncdls-mobile", version: VERSION, ...message });
  }
}

const digest = async (data) => Array.from(
  new Uint8Array(await crypto.subtle.digest("SHA-256", data)),
  (b) => b.toString(16).padStart(2, "0"),
).join("");

// Bound each attempt even if the browser never rejects an aborted fetch/read.
// Streaming downloads use an idle deadline; buffered responses get more time.
async function receive(path, onBytes = () => {}, onStatus = () => {}) {
  const url = absolute(path);
  if (!url.startsWith(SCOPE.href)) throw new Error("无效资源路径");
  for (let attempt = 0; attempt < 3; attempt++) {
    const controller = new AbortController();
    let timer, heartbeat, lastByte = Date.now(), buffered = false, rejectTimeout;
    const timeout = new Promise((resolve, reject) => { rejectTimeout = reject; });
    const arm = (ms = 30000) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const error = new Error('网络长时间无响应'); error.name = 'AbortError';
        rejectTimeout(error);
        controller.abort();
      }, ms);
    };
    const notice = () => Promise.resolve(onStatus({ path, attempt: attempt + 1,
      waitingSeconds: Math.floor((Date.now() - lastByte) / 1000), buffered })).catch(() => {});
    try {
      arm();
      heartbeat = setInterval(notice, 1000);
      void notice();
      const transfer = (async () => {
        const response = await fetch(url, {
          cache: "no-store", credentials: "same-origin", redirect: "error", signal: controller.signal,
        });
        if (!response.ok) throw new Error(`下载失败：${path} (${response.status})`);
        let data;
        if (response.body?.getReader) {
          const reader = response.body.getReader(), chunks = [];
          let length = 0;
          for (;;) {
            const { done, value } = await reader.read();
            if (controller.signal.aborted) throw new Error('已中止过期下载');
            if (done) break;
            chunks.push(value); length += value.byteLength;
            lastByte = Date.now(); arm();
            await onBytes(value.byteLength);
          }
          data = new Uint8Array(length);
          let offset = 0;
          for (const chunk of chunks) { data.set(chunk, offset); offset += chunk.length; }
        } else {
          // Without a readable stream there is no way to measure byte-idle time.
          // Do not cancel a progressing buffered transfer after just 30 seconds.
          buffered = true; arm(120000);
          data = new Uint8Array(await response.arrayBuffer());
          if (controller.signal.aborted) throw new Error('已中止过期下载');
          await onBytes(data.byteLength);
        }
        return { data, headers: response.headers };
      })();
      return await Promise.race([transfer, timeout]);
    } catch (error) {
      controller.abort();
      clearTimeout(timer); clearInterval(heartbeat);
      if (attempt === 2) throw new Error(
        error.name === "AbortError"
          ? `网络长时间无响应：${path}。可重试或切回在线版；已保存资源保留。`
          : error.message,
      );
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    } finally { clearTimeout(timer); clearInterval(heartbeat); }
  }
}

async function parallel(items, count, run) {
  let next = 0, failure;
  const results = await Promise.allSettled(Array.from({ length: count }, async () => {
    try {
      while (!failure && next < items.length) await run(items[next++]);
    } catch (error) { failure = error; throw error; }
  }));
  const rejected = results.find((r) => r.status === "rejected");
  if (rejected) throw rejected.reason;
}

function contentType(path) {
  const types = {
    html: "text/html; charset=utf-8", js: "text/javascript; charset=utf-8",
    css: "text/css; charset=utf-8", json: "application/json",
    webmanifest: "application/manifest+json", wasm: "application/wasm",
    png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp",
    mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", mp4: "video/mp4",
    ttf: "font/ttf", woff: "font/woff", woff2: "font/woff2", svg: "image/svg+xml",
  };
  return types[path.split(".").pop().toLowerCase()] || "application/octet-stream";
}

let latestProgress = null;

async function download() {
  const manifest = JSON.parse(new TextDecoder().decode(
    (await receive("offline-manifest.json")).data,
  ));
  if (manifest.version !== VERSION) throw new Error("站点正在更新，请稍后重试");
  const cache = await caches.open(CACHE);
  const previousCaches = await Promise.all((await caches.keys())
    .filter((name) => name.startsWith(PREFIX) && name !== CACHE)
    .map((name) => caches.open(name)));
  let files = 0,
    bytes = 0,
    lastNotice = 0,
    receivedBytes = 0,
    completedPacks = 0,
    totalPacks = 0,
    transfer = null,
    phase = "reuse";
  const progress = async (force = false) => {
    if (force || Date.now() - lastNotice > 180) {
      lastNotice = Date.now();
      latestProgress = {
        type: "progress",
        files,
        bytes,
        totalFiles: manifest.files.length,
        totalBytes: manifest.totalBytes,
        phase, receivedBytes, completedPacks, totalPacks, transfer,
      };
      await broadcast(latestProgress);
    }
  };
  await progress(true);
  const missing = new Map();
  const complete = async (file) => {
    missing.delete(file.path);
    files++;
    bytes += file.bytes;
    await progress();
  };
  await parallel(manifest.files, 4, async (file) => {
    const url = absolute(file.path);
    if (!url.startsWith(SCOPE.href)) throw new Error("无效资源路径");
    let saved = await cache.match(url);
    if (!saved || saved.headers.get("x-ncdls-sha256") !== file.sha256) {
      for (const previous of previousCaches) {
        const candidate = await previous.match(url);
        if (candidate?.headers.get("x-ncdls-sha256") === file.sha256) {
          await cache.put(url, candidate.clone());
          saved = candidate;
          break;
        }
      }
    }
    if (!saved || saved.headers.get("x-ncdls-sha256") !== file.sha256) {
      missing.set(file.path, file);
    } else await complete(file);
  });
  const transferStatus = async (info) => { transfer = info; await progress(true); };
  const received = async (length) => { receivedBytes += length; await progress(); };
  const save = async (file, data) => {
    if (data.byteLength !== file.bytes || await digest(data) !== file.sha256)
      throw new Error(`资源校验失败：${file.path}`);
    await cache.put(absolute(file.path), new Response(data, {
      headers: { "Content-Type": contentType(file.path), "x-ncdls-sha256": file.sha256 },
    }));
    await complete(file);
  };
  const jobs = [], assigned = new Set();
  const expected = new Map(manifest.files.map((file) => [file.path, file]));
  for (const pack of manifest.packs || []) {
    for (const name of pack.files) {
      if (!expected.has(name) || assigned.has(name)) throw new Error("无效资源包清单");
      assigned.add(name);
    }
    const pending = pack.files.map((name) => missing.get(name)).filter(Boolean);
    if (!pending.length) continue;
    const pendingBytes = pending.reduce((n, file) => n + file.bytes, 0);
    const rawBytes = pack.files.reduce((n, name) => n + expected.get(name).bytes, 0);
    // Small updates should not retransfer a whole pack just for one tiny file.
    if (pack.files.length === 1 || (pending.length <= 8 && pendingBytes < rawBytes / 3)) {
      for (const file of pending) jobs.push({ file });
    } else { jobs.push({ pack, pending }); totalPacks++; }
  }
  for (const file of missing.values())
    if (!assigned.has(file.path)) jobs.push({ file });
  phase = "download";
  await progress(true);
  await parallel(jobs, manifest.packs?.length ? 2 : 4, async ({ file, pack, pending }) => {
    if (file) return save(file, (await receive(file.path, received, transferStatus)).data);
    const { data } = await receive(pack.path, received, transferStatus);
    if (data.byteLength !== pack.bytes || await digest(data) !== pack.sha256)
      throw new Error("资源包校验失败，请重新下载");
    const contents = JSON.parse(new TextDecoder().decode(data));
    if (contents.format !== 1 || !Array.isArray(contents.files) ||
        contents.files.length !== pack.files.length ||
        contents.files.some((entry, i) => entry[0] !== pack.files[i]))
      throw new Error("资源包内容与清单不一致");
    const wanted = new Set(pending.map((f) => f.path));
    for (const [name, encoded] of contents.files) {
      if (!wanted.has(name)) continue;
      const binary = atob(encoded), bytes = new Uint8Array(binary.length);
      for (let i = 0; i < bytes.length; i++) bytes[i] = binary.charCodeAt(i);
      await save(expected.get(name), bytes);
    }
    completedPacks++;
    await progress(true);
  });
  if (missing.size || files !== manifest.files.length) throw new Error("离线资源未完整保存，请重试");
  await cache.put(
    absolute("offline-manifest.json"),
    new Response(JSON.stringify(manifest), {
      headers: { "Content-Type": "application/json" },
    }),
  );
  await cache.put(
    READY,
    new Response(
      JSON.stringify({
        version: VERSION,
        files,
        bytes,
        savedAt: new Date().toISOString(),
      }),
    ),
  );
  await progress(true);
  await broadcast({ type: "downloaded", files, bytes });
}

let downloadJob;
function saveResources() {
  if (!downloadJob)
    downloadJob = download()
      .catch(async (error) => {
        await broadcast({
          type: "error",
          message:
            error.name === "QuotaExceededError"
              ? "手机存储空间不足，请释放空间后重试"
              : error.message,
        });
        throw error; // Do not activate an incomplete cache or replace a working previous version.
      })
      .finally(() => {
        downloadJob = undefined;
      });
  return downloadJob;
}
// Browser update checks must not download the entire game in the background.
// Full download starts only after the user presses the offline-download button.
self.addEventListener("install", () => {});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const ready = Boolean(await cache.match(READY));
      // A first installation can activate before the requested download finishes.
      // Never remove a complete older package in that state.
      if (ready) {
        for (const name of await caches.keys())
          if (name.startsWith(PREFIX) && name !== CACHE) await caches.delete(name);
      }
      await self.clients.claim();
      if (ready) await broadcast({ type: "ready" });
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "activate-update") {
    event.waitUntil((async () => {
      const cache = await caches.open(CACHE);
      // Old cached launchers only know this explicit update action.
      // Treat that user click as a full-download request before activation.
      if (!(await cache.match(READY))) await saveResources();
      if (await cache.match(READY)) await self.skipWaiting();
    })());
    return;
  }
  if (["download-all", "repair"].includes(event.data?.type)) {
    event.waitUntil(saveResources());
    return;
  }
  if (event.data?.type !== "status") return;
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE);
        const marker = await cache.match(READY);
        const list = await cache.match(absolute("offline-manifest.json"));
        const manifest = list && (await list.json());
        const saved = new Set(
          (await cache.keys()).map((request) => request.url),
        );
        const complete = Boolean(
          marker &&
          manifest &&
          manifest.files.every((file) => saved.has(absolute(file.path))),
        );
        event.ports[0]?.postMessage({
          version: VERSION,
          ...(marker ? await marker.json() : {}),
          ready: complete,
          downloading: Boolean(downloadJob),
          progress: downloadJob ? latestProgress : null,
        });
      } catch (error) {
        event.ports[0]?.postMessage({
          version: VERSION,
          ready: false,
          message: error.message,
        });
      }
    })(),
  );
});

async function resourceCache() {
  const current = await caches.open(CACHE);
  if (await current.match(READY)) return current;
  // An automatically installed worker may activate after the last old tab closes.
  // Keep serving the last complete package until the user downloads this version.
  for (const name of (await caches.keys()).reverse()) {
    if (!name.startsWith(PREFIX) || name === CACHE) continue;
    const previous = await caches.open(name);
    if (await previous.match(READY)) return previous;
  }
  return current;
}

async function rangeResponse(request, response) {
  const range = request.headers.get("range");
  if (!range) return response;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  const data = await response.arrayBuffer(),
    size = data.byteLength;
  const start =
    match &&
    (match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2])));
  const end =
    match &&
    (match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1);
  if (!match || (!match[1] && !match[2]) || start >= size || start > end)
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` },
    });
  const headers = new Headers(response.headers);
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  headers.set("Accept-Ranges", "bytes");
  return new Response(data.slice(start, end + 1), { status: 206, headers });
}

self.addEventListener("fetch", (event) => {
  const request = event.request,
    url = new URL(request.url);
  if (!/^https?:$/.test(url.protocol)) return;
  // Only cache this app's resources; preserve other requests' original behavior.
  if (
    url.origin !== SCOPE.origin ||
    !url.pathname.startsWith(SCOPE.pathname) ||
    request.method !== "GET"
  )
    return;
  if (url.pathname === new URL("recover.html", SCOPE).pathname) {
    event.respondWith(fetch(new Request(request, { cache: "no-store" })));
    return;
  }
  event.respondWith(
    (async () => {
      url.search = "";
      url.hash = "";
      if (url.pathname === SCOPE.pathname) url.pathname += "index.html";
      const cache = await resourceCache();
      const saved = await cache.match(url.href);
      if (saved) return rangeResponse(request, saved);
      try {
        return await fetch(request);
      } catch {
        return new Response("该资源尚未保存到手机，请联网后重新下载离线包。", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    })(),
  );
});
