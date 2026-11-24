const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "..");
const output = process.env.NCDLS_WEB_OUTPUT || path.join(root, "web-game");
const manifest = JSON.parse(
  fs.readFileSync(path.join(output, "web-build.json"), "utf8"),
);
let scripts = 0;
for (const entry of manifest.files) {
  const file = path.join(output, entry.path),
    bytes = fs.readFileSync(file);
  if (crypto.createHash("sha256").update(bytes).digest("hex") !== entry.sha256)
    throw new Error("Build hash mismatch: " + entry.path);
  if (entry.path.endsWith(".js")) {
    new vm.Script(bytes.toString(), { filename: entry.path });
    scripts++;
  }
}
for (const file of [
  "index.html",
  "game.html",
  "browser.js",
  "launcher.js",
  ...manifest.scripts,
]) {
  if (!fs.statSync(path.join(output, file)).isFile())
    throw new Error("Missing entry: " + file);
}
const levels = JSON.parse(
  fs.readFileSync(path.join(output, "json/drama_core.json"), "utf8"),
);
const valid = Object.fromEntries(
  ["drama_temp", "star_temp", "sea_temp", "snow_temp", "nezha_temp"].map(
    (key) => [key, levels[key].filter((x) => x.id > 0).length],
  ),
);
const fgui = fs.readFileSync(path.join(output, "loading/Loading.bin"));
if (fgui.subarray(0, 4).toString() !== "FGUI")
  throw new Error("FGUI assets remain compressed");
const wasm = fs.readFileSync(path.join(output, "libs/laya.physics.wasm.wasm"));
if (!WebAssembly.validate(wasm)) throw new Error("Invalid physics WASM");
console.log(
  JSON.stringify(
    {
      filesVerified: manifest.files.length,
      scriptsChecked: scripts,
      decodedAssets: manifest.decodedAssets,
      levelConfigs: valid,
    },
    null,
    2,
  ),
);
