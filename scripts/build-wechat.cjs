// Reconstruct a WeChat game project from the readable modules and cached assets.
// This script transforms text and copies files. It never executes the game.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'wechat-game');
const manifestPath = path.join(root, 'reports/wechat-build.json');
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const json = file => JSON.parse(read(file));
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(dir, entry.name);
  if (entry.isSymbolicLink()) throw new Error('Unexpected symlink: ' + file);
  return entry.isDirectory() ? walk(file) : [file];
});
const posix = file => file.split(path.sep).join('/');

// Refuse to overwrite changes made directly in the generated directory.
if (fs.existsSync(output)) {
  if (!fs.existsSync(manifestPath)) throw new Error('wechat-game exists without a build manifest. Move it aside first.');
  const old = json('reports/wechat-build.json');
  const hashes = new Map(old.files.map(file => [file.path, file.sha256]));
  for (const file of walk(output)) {
    const relative = posix(path.relative(output, file));
    if (hashes.get(relative) !== sha(fs.readFileSync(file))) {
      throw new Error('Generated file was edited or added: ' + relative + '. Preserve it before rebuilding.');
    }
    hashes.delete(relative);
  }
  if (hashes.size) throw new Error('Generated files were deleted; preserve your changes before rebuilding.');
}

const temp = fs.mkdtempSync(path.join(root, '.wechat-build-'));
const moduleMap = [];
const transformations = [];
function write(file, content) {
  const target = path.resolve(temp, file);
  if (!target.startsWith(temp + path.sep)) throw new Error('Invalid output path: ' + file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}
function replace(text, old, replacement, label, expected = 1) {
  const count = text.split(old).length - 1;
  if (count !== expected) throw new Error(label + ': expected ' + expected + ', found ' + count);
  transformations.push({ change: label, occurrences: count });
  return text.split(old).join(replacement);
}
function unwrap(text, id) {
  const prefix = /^define\("([^"\n]+)", function \(require, module, exports\) \{\r?\n/.exec(text);
  if (!prefix || prefix[1] !== id || !/\n\}\);\s*$/.test(text)) throw new Error('Unexpected module wrapper: ' + id);
  return text.slice(prefix[0].length).replace(/\n\}\);\s*$/, '\n').replace(/^  /gm, '')
    .replace(/^\s*\/\/# sourceMappingURL=.*$/gm, '');
}
try {
  for (const file of walk(path.join(root, 'assets'))) {
    write(posix(path.relative(path.join(root, 'assets'), file)), fs.readFileSync(file));
  }
  for (const entry of json('reports/module-map.json')) {
    if (entry.projectFile === 'vendor/laya/plugin-entry.js' || entry.projectFile === 'vendor/laya/index.js') continue;
    if (entry.projectFile.startsWith('src/subpackages/')) continue; // Asset-only entries are regenerated below.
    const id = entry.originalModule;
    const target = id.startsWith('__plugin__/') ? 'libs/laya/' + path.posix.basename(id) : id;
    let text = unwrap(read(entry.projectFile), id);
    if (id === 'libs/min/laya.physics.wasm.min.js') {
      // The Emscripten Node branch contains fs/path requires that WeChat's bundler
      // tries to resolve even though this branch cannot run in a mini game.
      const start = text.indexOf('            f\n              ? ((_t = tt ? require("path")');
      const end = text.indexOf('              : j\n', start);
      if (start < 0 || end < 0) throw new Error('Physics Node branch changed');
      text = text.slice(0, start) + '            j\n' + text.slice(end + '              : j\n'.length);
      transformations.push({ change: 'Remove unreachable Emscripten Node fs/path branch', occurrences: 1 });
      text = replace(text,
        '(t) => wx.loadSubpackage({ name: "asmp2", success: t, fail: () => {} })',
        '() => { throw new Error("This restored build requires WXWebAssembly; the asmp2 fallback was not cached."); }',
        'Report missing ASM fallback explicitly');
    }
    if (id === 'libs/min/W.min.js') {
      text = replace(text, 'requirePlugin(', 'unavailableOptionalPlugin(', 'Remove uncached optional engine plugin dependency');
      text = 'function unavailableOptionalPlugin(name) { throw new Error("Optional engine plugin was not cached: " + name); }\n' + text;
    }
    text = text.replace(/\brequire\("([^"\n]+)"\)/g, (match, specifier) => {
      if (specifier.startsWith('.')) return match;
      if (specifier.startsWith('/')) throw new Error('Unexpected absolute require: ' + specifier);
      return 'require("./' + specifier + '")';
    });
    text = text.replace(/requirePlugin\("layaPlugin\/([^"\n]+)"\)/g,
      (_, name) => 'require("./laya/' + name + '")');
    if (id === 'libs/min/bundle.min.js') {
      for (const name of ['log', 'info', 'warn', 'error']) {
        text = replace(text, '(console.' + name + ' = () => {})', 'void 0', 'Preserve console.' + name);
      }
    }
    write(target, '// Generated from ' + entry.projectFile + '; edit that source, then npm run build:wechat.\n' + text);
    moduleMap.push({ source: entry.projectFile, originalModule: id, output: target });
  }
  // Use literal relative imports so DevTools can construct the dependency graph.
  write('game.js', `// WeChat main entry. Rebuilt by scripts/build-wechat.cjs.
require('./splash.js')._I(wx, 'loading/Loading_atlas_dfa3l7.png', './weapp-adapter.js', function () {
  window.loadLib = function (name) {
    return require(name.startsWith('.') ? name : './' + name);
  };
  require('./index.js');
});
window._M_ = true;
`);
  write('index.js', `window.screenOrientation = 'portrait';
wx.loadSubpackage({
  name: 'libs',
  success: function () { console.info('[ncdls] libs loaded'); },
  fail: function (error) { console.error('[ncdls] libs failed to load', error); }
});
`);
  write('OpenWalls/index.js', `// The open-data context has its own global object and entry.
require('./weapp-adapter.js');
window.screenOrientation = 'sensor_landscape';
require('./libs/laya.opendata.js');
require('./js/bundle.js');
`);
  const original = json('config/app-config.json');
  const subpackages = [], missingSubpackages = [];
  for (const entry of original.subPackages) {
    const relative = entry.root.replace(/^\/+/, '');
    if (!fs.existsSync(path.join(root, 'raw/extracted', relative))) {
      missingSubpackages.push(entry.name);
      continue;
    }
    subpackages.push({ name: entry.name, root: relative });
    if (entry.name !== 'libs') write(relative + 'game.js', '// Asset-only subpackage: ' + entry.name + '\n');
  }
  write('game.json', JSON.stringify({
    deviceOrientation: original.deviceOrientation,
    showStatusBar: original.showStatusBar,
    networkTimeout: original.networkTimeout,
    openDataContext: 'OpenWalls/',
    subpackages
  }, null, 2) + '\n');

  const files = walk(temp).sort().map(file => {
    const data = fs.readFileSync(file);
    if (file.endsWith('.js')) new vm.Script(data.toString('utf8'), { filename: file });
    return { path: posix(path.relative(temp, file)), bytes: data.length, sha256: sha(data) };
  });
  const oldOutput = output + '.previous';
  if (fs.existsSync(oldOutput)) throw new Error('A previous build backup exists: ' + oldOutput);
  if (fs.existsSync(output)) fs.renameSync(output, oldOutput);
  try { fs.renameSync(temp, output); }
  catch (error) {
    if (fs.existsSync(oldOutput)) fs.renameSync(oldOutput, output);
    throw error;
  }
  fs.writeFileSync(manifestPath, JSON.stringify({
    generatedAt: new Date().toISOString(), gameCodeExecuted: false,
    output: 'wechat-game', modules: moduleMap, transformations,
    subpackages, missingSubpackages, files
  }, null, 2) + '\n');
  if (fs.existsSync(oldOutput)) fs.rmSync(oldOutput, { recursive: true });
  console.log(JSON.stringify({ files: files.length, modules: moduleMap.length,
    subpackages: subpackages.length, missingSubpackages, gameCodeExecuted: false }, null, 2));
} catch (error) {
  if (fs.existsSync(temp)) fs.rmSync(temp, { recursive: true });
  throw error;
}
