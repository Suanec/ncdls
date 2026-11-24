const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const zlib = require("node:zlib");
const crypto = require("node:crypto");
const root = process.env.NCDLS_ROOT || path.resolve(__dirname, "..");
const destination = process.env.NCDLS_WEB_OUTPUT || path.join(root, "web-game");
const template = process.env.NCDLS_WEB_TEMPLATE || path.join(root, "web");
const sha = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isSymbolicLink())
      throw new Error("Unexpected symlink: " + path.join(dir, entry.name));
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
if (fs.existsSync(destination)) {
  const manifest = path.join(destination, "web-build.json");
  if (!fs.existsSync(manifest))
    throw new Error(
      "Output directory has no build manifest; preserve or move it first: " +
        destination,
    );
  const previous = new Map(
    JSON.parse(fs.readFileSync(manifest, "utf8")).files.map((f) => [
      f.path,
      f.sha256,
    ]),
  );
  for (const file of walk(destination)) {
    if (file === manifest) continue;
    const name = path.relative(destination, file);
    if (previous.get(name) !== sha(fs.readFileSync(file)))
      throw new Error(
        "Generated file edited: " + name + ". Edit web/ or src/ instead.",
      );
    previous.delete(name);
  }
  if (previous.size)
    throw new Error(
      "Generated files were removed; preserve your changes first.",
    );
}
const output = fs.mkdtempSync(
  path.join(path.dirname(destination), ".web-build-"),
);
try {
  fs.cpSync(path.join(root, "assets"), output, { recursive: true });
  // Mini-game cache stores these files as raw Brotli streams. Browsers need decoded bytes.
  let decoded = 0;
  function decodeAssets(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const source = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        decodeAssets(source);
        continue;
      }
      const input = fs.readFileSync(source);
      let data;
      try {
        data = zlib.brotliDecompressSync(input, {
          maxOutputLength: 64 * 1024 * 1024,
        });
      } catch {
        continue;
      } // Uncompressed images, sounds, wasm and other formats stay unchanged.
      if (data.length) {
        fs.writeFileSync(
          path.join(output, path.relative(path.join(root, "assets"), source)),
          data,
        );
        decoded++;
      }
    }
  }
  decodeAssets(path.join(root, "assets"));
  fs.copyFileSync(
    path.join(output, "libs/min/laya.physics.wasm.wasm"),
    path.join(output, "libs/laya.physics.wasm.wasm"),
  );
  fs.cpSync(template, output, { recursive: true });
  const indexFile = path.join(output, "index.html");
  let entryHTML = fs.readFileSync(indexFile, "utf8");
  for (const [marker, name] of [["/*__STARTUP_CSS__*/", "startup.css"], ["/*__STARTUP_JS__*/", "startup.js"]]) {
    if (!entryHTML.includes(marker)) throw new Error("Startup shell marker missing: " + marker);
    entryHTML = entryHTML.replace(marker, () => fs.readFileSync(path.join(template, name), "utf8"));
    fs.unlinkSync(path.join(output, name));
  }
  fs.writeFileSync(indexFile, entryHTML);
  const sources = [
    "vendor/laya/laya.core.js",
    "vendor/laya/laya.ani.js",
    "vendor/laya/laya.d3.js",
    "vendor/laya/laya.ui.js",
    "vendor/runtime/spine-core-3.8.js",
    "vendor/runtime/laya.spine.js",
    "vendor/runtime/laya.physics.wasm.js",
    "vendor/runtime/fairygui.js",
    "src/shared/utils.js",
    "src/shared/W.js",
    "src/shared/B.js",
    "src/shared/C.js",
    "src/shared/M.js",
    "src/platform/ads.js",
    "src/game/main.js",
  ];
  const scripts = [];
  for (const source of sources) {
    let code = fs.readFileSync(path.join(root, source), "utf8");
    if (source === "src/game/main.js") {
      code = code.replace(
        /\(console\.(log|info|warn|error) = \(\) => \{\}\)/g,
        "void 0",
      );
      const original = "new W.M2(fM, iN)";
      if (code.split(original).length !== 2)
        throw new Error("Startup hook changed");
      code = code.replace(
        original,
        `(window.NCDLSWeb.hooks = {
      mode: eP, game: iJ, ui: iv,
      openLevel(mode, level) {
        eP.SetMode(mode);
        switch (mode) {
          case 2: dQ.set(eF, level - 1); break;
          case 3: dQ.set(_6, level - 1); break;
          case 4: dQ.set(cR, level - 1); break;
          case 5: dQ.set(eZ, level - 1); break;
          default: W.ICache.setGrade(level);
        }
        W.ICache.saveData();
        return iJ.ToGame();
      }
    }, window.NCDLSWeb.start(fM, iN))`,
      );
    }
    new vm.Script(code, { filename: source });
    const target = "runtime/" + source;
    fs.mkdirSync(path.dirname(path.join(output, target)), { recursive: true });
    fs.writeFileSync(path.join(output, target), code);
    scripts.push(target);
  }
  fs.writeFileSync(path.join(output, "scripts.json"), JSON.stringify(scripts.map((src) => ({
    src, bytes: fs.statSync(path.join(output, src)).size,
  }))));
  const files = walk(output)
    .sort()
    .map((file) => {
      const bytes = fs.readFileSync(file);
      if (/\.(?:js|cjs)$/.test(file))
        new vm.Script(bytes.toString("utf8"), { filename: file });
      return {
        path: path.relative(output, file),
        bytes: bytes.length,
        sha256: sha(bytes),
      };
    });
  fs.writeFileSync(
    path.join(output, "web-build.json"),
    JSON.stringify(
      { version: 1, decodedAssets: decoded, scripts, files },
      null,
      2,
    ) + "\n",
  );
  const previous = destination + ".previous";
  if (fs.existsSync(previous))
    throw new Error("Previous build backup exists: " + previous);
  if (fs.existsSync(destination)) fs.renameSync(destination, previous);
  try {
    fs.renameSync(output, destination);
  } catch (error) {
    if (fs.existsSync(previous)) fs.renameSync(previous, destination);
    throw error;
  }
  if (fs.existsSync(previous)) fs.rmSync(previous, { recursive: true });
  console.log(
    JSON.stringify(
      {
        output: destination,
        files: files.length,
        decodedAssets: decoded,
        bytes: files.reduce((sum, f) => sum + f.bytes, 0),
      },
      null,
      2,
    ),
  );
} finally {
  if (fs.existsSync(output)) fs.rmSync(output, { recursive: true });
}
