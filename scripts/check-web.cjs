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
const startupHTML = fs.readFileSync(path.join(output, "index.html"), "utf8");
if (!startupHTML.includes('id="startup-progress"') || /<iframe[^>]*\ssrc=/s.test(startupHTML))
  throw new Error("Startup screen must precede iframe loading");
const inline = startupHTML.match(/<script>([\s\S]*?)<\/script>/);
if (!inline || inline[1].includes("__STARTUP_JS__")) throw new Error("Startup script was not inlined");
new vm.Script(inline[1], {filename:"index.html inline startup"});
const startupScripts = JSON.parse(fs.readFileSync(path.join(output, "scripts.json"), "utf8"));
if (JSON.stringify(startupScripts.map((file) => file.src)) !== JSON.stringify(manifest.scripts))
  throw new Error("Startup script order mismatch");
for (const file of startupScripts)
  if (fs.statSync(path.join(output, file.src)).size !== file.bytes)
    throw new Error("Startup byte total mismatch: " + file.src);
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
