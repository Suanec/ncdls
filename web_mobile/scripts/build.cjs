const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { spawnSync } = require("node:child_process");
const mobile = path.resolve(__dirname, "..");
const root = process.env.NCDLS_ROOT || path.dirname(mobile);
const destination = path.join(mobile, "dist");
const sha = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isSymbolicLink())
      throw new Error("Unexpected symlink: " + entry.name);
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
if (fs.existsSync(destination)) {
  const manifest = path.join(destination, "web-build.json");
  if (!fs.existsSync(manifest))
    throw new Error(
      "dist contains untracked files; preserve it before building.",
    );
  const previous = new Map(
    JSON.parse(fs.readFileSync(manifest)).files.map((f) => [f.path, f.sha256]),
  );
  for (const file of walk(destination)) {
    if (file === manifest) continue;
    const name = path.relative(destination, file);
    if (previous.get(name) !== sha(fs.readFileSync(file)))
      throw new Error(
        "Generated file edited: " +
          name +
          ". Edit web_mobile/src or web instead.",
      );
    previous.delete(name);
  }
  if (previous.size)
    throw new Error(
      "Generated files removed; preserve your changes before building.",
    );
}
const work = fs.mkdtempSync(path.join(mobile, ".build-"));
const output = path.join(work, "dist");
try {
  const build = spawnSync(
    process.execPath,
    [path.join(root, "scripts/build-web.cjs")],
    {
      env: {
        ...process.env,
        NCDLS_ROOT: root,
        NCDLS_WEB_OUTPUT: output,
        NCDLS_WEB_TEMPLATE: path.join(root, "web"),
      },
      encoding: "utf8",
    },
  );
  if (build.status !== 0) throw new Error(build.stderr || build.stdout);
  const base = JSON.parse(fs.readFileSync(path.join(output, "web-build.json")));
  fs.rmSync(path.join(output, "web-build.json"));
  // All modules are already wrapped in define(). Concatenate in their original
  // order so slow connections need one runtime request instead of fifteen.
  const runtime = base.scripts.map((file) =>
    `\n;\n${fs.readFileSync(path.join(output, file), "utf8")}\n`,
  ).join("").trimEnd() + "\n";
  const runtimeFile = `runtime/game-${sha(runtime).slice(0, 20)}.js`;
  new (require("node:vm").Script)(runtime, { filename: runtimeFile });
  for (const file of base.scripts) fs.unlinkSync(path.join(output, file));
  fs.writeFileSync(path.join(output, runtimeFile), runtime);
  base.scripts = [runtimeFile];
  fs.writeFileSync(path.join(output, "scripts.json"), JSON.stringify(base.scripts));
  for (const name of ["mobile.js", "mobile.css", "manifest.webmanifest"])
    fs.copyFileSync(path.join(mobile, "src", name), path.join(output, name));
  require("./icons.cjs")(path.join(output, "icons"));
  const index = path.join(output, "index.html");
  let html = fs.readFileSync(index, "utf8");
  html = html
    .replace("挪车打螺丝 · 网页版", "挪车打螺丝 · 离线版")
    .replace(
      '<link rel="icon" href="data:," />',
      '<link rel="icon" href="icons/icon-192.png" />',
    )
    .replace(
      "</head>",
      `<link rel="manifest" href="manifest.webmanifest" />
    <link rel="apple-touch-icon" href="icons/icon-180.png" />
    <meta name="theme-color" content="#183a56" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="挪车螺丝" />
    <link rel="stylesheet" href="mobile.css" />
  </head>`,
    )
    .replace(
      "</body>",
      fs.readFileSync(path.join(mobile, "src/mobile-panel.html"), "utf8") +
        '\n<script src="mobile.js"></script>\n</body>',
    );
  fs.writeFileSync(index, html);
  const describe = (file) => {
    const data = fs.readFileSync(file);
    return {
      path: path.relative(output, file),
      bytes: data.length,
      sha256: sha(data),
    };
  };
  const resources = walk(output).sort().map(describe);
  const packs = require("./packs.cjs")(output, resources);
  const worker = fs.readFileSync(path.join(mobile, "src/sw.js"), "utf8");
  const version = sha(JSON.stringify(resources) + JSON.stringify(packs) + worker).slice(0, 20);
  fs.writeFileSync(
    path.join(output, "sw.js"),
    worker.replace("__MOBILE_VERSION__", version),
  );
  fs.writeFileSync(
    path.join(output, "offline-manifest.json"),
    JSON.stringify({
      version,
      totalBytes: resources.reduce((sum, f) => sum + f.bytes, 0),
      files: resources,
      packs,
    }),
  );
  const files = walk(output).sort().map(describe);
  fs.writeFileSync(
    path.join(output, "web-build.json"),
    JSON.stringify({ ...base, mobileVersion: version, files }, null, 2) + "\n",
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
        version,
        offlineFiles: resources.length,
        bytes: resources.reduce((sum, f) => sum + f.bytes, 0),
      },
      null,
      2,
    ),
  );
} finally {
  fs.rmSync(work, { recursive: true, force: true });
}
