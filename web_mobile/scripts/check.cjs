const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { spawnSync } = require("node:child_process");
const mobile = path.resolve(__dirname, "..");
const root = process.env.NCDLS_ROOT || path.dirname(mobile);
const output = path.join(mobile, "dist");
const run = spawnSync(
  process.execPath,
  [path.join(root, "scripts/check-web.cjs")],
  { env: { ...process.env, NCDLS_WEB_OUTPUT: output }, stdio: "inherit" },
);
if (run.status !== 0) process.exit(run.status || 1);
const manifest = JSON.parse(
  fs.readFileSync(path.join(output, "offline-manifest.json")),
);
const build = JSON.parse(fs.readFileSync(path.join(output, "web-build.json")));
const sha = (data) => crypto.createHash("sha256").update(data).digest("hex");
assert.equal(manifest.version, build.mobileVersion);
assert.equal(
  manifest.version,
  sha(
    JSON.stringify(manifest.files) +
      JSON.stringify(manifest.packs) +
      fs.readFileSync(path.join(mobile, "src/sw.js"), "utf8"),
  ).slice(0, 20),
);
assert.equal(
  manifest.totalBytes,
  manifest.files.reduce((sum, f) => sum + f.bytes, 0),
);
const offline = new Set(manifest.files.map((f) => f.path));
const packPaths = new Set(manifest.packs.map((p) => p.path));
for (const file of build.files)
  if (!["sw.js", "offline-manifest.json", "recover.html"].includes(file.path) && !packPaths.has(file.path))
    assert(offline.has(file.path), "Not cached: " + file.path);
for (const file of manifest.files) {
  const data = fs.readFileSync(path.join(output, file.path));
  assert.equal(data.length, file.bytes);
  assert.equal(sha(data), file.sha256);
}
const packed = new Set();
const expectedFiles = new Map(manifest.files.map((f) => [f.path, f]));
for (const pack of manifest.packs) {
  const data = fs.readFileSync(path.join(output, pack.path));
  assert.equal(data.length, pack.bytes);
  assert.equal(sha(data), pack.sha256);
  const decoded = JSON.parse(data);
  assert.equal(decoded.format, 1);
  assert.deepEqual(decoded.files.map(([name]) => name), pack.files);
  for (const [name, encoded] of decoded.files) {
    assert(!packed.has(name), "Duplicate packed file: " + name);
    packed.add(name);
    const file = expectedFiles.get(name), bytes = Buffer.from(encoded, "base64");
    assert(file, "Unknown packed file: " + name);
    assert.equal(bytes.length, file.bytes);
    assert.equal(sha(bytes), file.sha256);
  }
}
assert.deepEqual(packed, offline);
assert.equal(manifest.scripts?.length ?? build.scripts.length, 1);
const app = JSON.parse(
  fs.readFileSync(path.join(output, "manifest.webmanifest")),
);
assert.equal(app.scope, "./");
assert.equal(app.start_url, "./");
const html = fs.readFileSync(path.join(output, "index.html"), "utf8");
for (const rel of ["icon", "apple-touch-icon", "manifest"]) {
  const link = html.match(new RegExp(`<link[^>]*rel="${rel}"[^>]*>`))?.[0];
  assert(link && /\shref="[^"]+"/.test(link) && !link.includes("data-href"),
    `${rel} must be discoverable in HTML before JavaScript runs`);
}
for (const icon of [...app.icons, {src:"icons/car-8-180.png",sizes:"180x180"}]) {
  const data=fs.readFileSync(path.join(output, icon.src));
  assert.equal(data.subarray(1,4).toString(),"PNG");
  assert.equal(`${data.readUInt32BE(16)}x${data.readUInt32BE(20)}`,icon.sizes);
  assert(data.equals(fs.readFileSync(path.join(mobile,"src",icon.src))),
    "Icon bytes must be reproducible across build environments");
}
assert(
  fs
    .readFileSync(path.join(output, "sw.js"), "utf8")
    .includes(`const VERSION = "${manifest.version}"`),
);
console.log(
  `Mobile offline manifest verified: ${offline.size} files in ${manifest.packs.length} packs, ${(manifest.totalBytes / 1048576).toFixed(1)} MiB.`,
);
