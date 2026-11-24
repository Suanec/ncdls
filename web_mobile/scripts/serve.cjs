const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const http = require("node:http");
const https = require("node:https");
const root = fs.realpathSync(path.resolve(__dirname, "../dist"));
const host =
  process.env.NCDLS_HOST ||
  (process.argv.includes("--lan") ? "0.0.0.0" : "127.0.0.1");
const port = Number(process.env.PORT || 8091);
const cert = process.env.NCDLS_TLS_CERT,
  key = process.env.NCDLS_TLS_KEY;
if (Boolean(cert) !== Boolean(key))
  throw new Error("Provide both NCDLS_TLS_CERT and NCDLS_TLS_KEY.");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".wasm": "application/wasm",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
};
const handler = (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405).end();
    return;
  }
  let file;
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    file = fs.realpathSync(
      path.resolve(
        root,
        "." + pathname,
        pathname.endsWith("/") ? "index.html" : "",
      ),
    );
  } catch {
    res.writeHead(404).end("Not found");
    return;
  }
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  if (!fs.statSync(file).isFile()) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, {
    "Content-Type": mime[path.extname(file)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  if (req.method === "HEAD") res.end();
  else
    fs.createReadStream(file)
      .on("error", () => res.destroy())
      .pipe(res);
};
const server = cert
  ? https.createServer(
      { cert: fs.readFileSync(cert), key: fs.readFileSync(key) },
      handler,
    )
  : http.createServer(handler);
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? `Port ${port} is occupied. Use PORT=8092 npm run serve.`
      : error.message,
  );
  process.exitCode = 1;
});
server.listen(port, host, () => {
  const scheme = cert ? "https" : "http",
    actual = server.address().port;
  console.log(`Local: ${scheme}://127.0.0.1:${actual}/`);
  if (host === "0.0.0.0")
    for (const addresses of Object.values(os.networkInterfaces()))
      for (const address of addresses || [])
        if (address.family === "IPv4" && !address.internal)
          console.log(`LAN: ${scheme}://${address.address}:${actual}/`);
  console.log(
    "手机离线安装需要受信任的 HTTPS；普通 LAN HTTP 仅能在线试玩。Ctrl+C 停止。",
  );
});
