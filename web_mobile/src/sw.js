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

async function download() {
  const response = await fetch(absolute("offline-manifest.json"), {
    cache: "no-store",
    redirect: "error",
  });
  if (!response.ok) throw new Error("无法读取离线资源清单");
  const manifest = await response.json();
  if (manifest.version !== VERSION) throw new Error("站点正在更新，请稍后重试");
  const cache = await caches.open(CACHE);
  const previousCaches = await Promise.all((await caches.keys())
    .filter((name) => name.startsWith(PREFIX) && name !== CACHE)
    .map((name) => caches.open(name)));
  let index = 0,
    files = 0,
    bytes = 0,
    lastNotice = 0,
    stopped;
  const progress = async (force = false) => {
    if (force || Date.now() - lastNotice > 180) {
      lastNotice = Date.now();
      await broadcast({
        type: "progress",
        files,
        bytes,
        totalFiles: manifest.files.length,
        totalBytes: manifest.totalBytes,
      });
    }
  };
  await progress(true);
  const tasks = Array.from({ length: 4 }, async () => {
    try {
      while (!stopped && index < manifest.files.length) {
        const file = manifest.files[index++];
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
          const resource = await fetch(url, {
            cache: "no-store",
            credentials: "same-origin",
            redirect: "error",
          });
          if (!resource.ok)
            throw new Error(`下载失败：${file.path} (${resource.status})`);
          const data = await resource.arrayBuffer();
          const hash = Array.from(
            new Uint8Array(await crypto.subtle.digest("SHA-256", data)),
            (b) => b.toString(16).padStart(2, "0"),
          ).join("");
          if (data.byteLength !== file.bytes || hash !== file.sha256)
            throw new Error(`资源校验失败：${file.path}`);
          const headers = new Headers(resource.headers);
          headers.delete("content-encoding");
          headers.delete("content-length");
          headers.set("x-ncdls-sha256", hash);
          await cache.put(url, new Response(data, { status: 200, headers }));
        }
        files++;
        bytes += file.bytes;
        await progress();
      }
    } catch (error) {
      stopped = error;
      throw error;
    }
  });
  const results = await Promise.allSettled(tasks);
  const failure = results.find((result) => result.status === "rejected");
  if (failure) throw failure.reason;
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
