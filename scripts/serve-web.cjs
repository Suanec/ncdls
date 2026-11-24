const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const root =
  process.env.NCDLS_WEB_OUTPUT || path.resolve(__dirname, "../web-game");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".wasm": "application/wasm",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
};
const port = Number(process.env.PORT || 8088);
const host = process.env.NCDLS_HOST || (process.argv.includes("--lan") ? "0.0.0.0" : "127.0.0.1");
if (!fs.existsSync(path.join(root, "index.html")))
  throw new Error("Run npm run build:web first.");
const server = http.createServer((req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400).end();
    return;
  }
  const file = path.resolve(
    root,
    "." + pathname,
    pathname.endsWith("/") ? "index.html" : "",
  );
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) {
      console.log("404", pathname);
      res.writeHead(404).end("Not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": mime[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    fs.createReadStream(file)
      .on("error", () => res.destroy())
      .pipe(res);
  });
});
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? `Port ${port} is in use. Try PORT=8089 npm run serve:web`
      : error.message,
  );
  process.exitCode = 1;
});
server.listen(port, host, () => {
  const actualPort = server.address().port;
  if (host === "0.0.0.0" || host === "::") {
    console.log(`Local: http://127.0.0.1:${actualPort}`);
    for (const [name, addresses] of Object.entries(os.networkInterfaces())) {
      for (const address of addresses || []) {
        if (address.family === "IPv4" && !address.internal) {
          console.log(`LAN (${name}): http://${address.address}:${actualPort}/`);
        }
      }
    }
    console.log("手机与电脑连接同一 Wi-Fi，在手机浏览器打开对应的 LAN 地址。Ctrl+C 停止服务。");
  } else {
    console.log(`Server: http://${host.includes(":") ? `[${host}]` : host}:${actualPort}/`);
  }
});
