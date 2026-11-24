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
      fs.readFileSync(path.join(mobile, "src/sw.js"), "utf8"),
  ).slice(0, 20),
);
assert.equal(
  manifest.totalBytes,
  manifest.files.reduce((sum, f) => sum + f.bytes, 0),
);
const offline = new Set(manifest.files.map((f) => f.path));
for (const file of build.files)
  if (!["sw.js", "offline-manifest.json"].includes(file.path))
    assert(offline.has(file.path), "Not cached: " + file.path);
for (const file of manifest.files) {
  const data = fs.readFileSync(path.join(output, file.path));
  assert.equal(data.length, file.bytes);
  assert.equal(sha(data), file.sha256);
}
const app = JSON.parse(
  fs.readFileSync(path.join(output, "manifest.webmanifest")),
);
assert.equal(app.scope, "./");
assert.equal(app.start_url, "./");
for (const icon of app.icons)
  assert(fs.existsSync(path.join(output, icon.src)));
assert(
  fs
    .readFileSync(path.join(output, "sw.js"), "utf8")
    .includes(`const VERSION = "${manifest.version}"`),
);
console.log(
  `Mobile offline manifest verified: ${offline.size} files, ${(manifest.totalBytes / 1048576).toFixed(1)} MiB.`,
);
