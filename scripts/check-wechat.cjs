// Static validation only. No require() of game code, simulator, or network calls.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const runtime = path.join(root, 'wechat-game');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const json = file => JSON.parse(read(file));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const project = json('project.config.json');
const config = json('wechat-game/game.json');
const manifest = json('reports/wechat-build.json');
assert(project.compileType === 'game', 'compileType must be game');
assert(path.resolve(root, project.miniprogramRoot) === runtime, 'Wrong game source root');
assert(!config.gamePlugins && !config.plugins, 'Unexpected dependency on a remote engine plugin');
assert(!config.__warning__ && !config.subContext, 'Compiled-cache-only fields remain');
const packageNames = new Set();
for (const entry of config.subpackages) {
  assert(!packageNames.has(entry.name), 'Duplicate subpackage: ' + entry.name);
  packageNames.add(entry.name);
  assert(!entry.root.startsWith('/') && !entry.root.split('/').includes('..'), 'Invalid package root');
  assert(fs.existsSync(path.join(runtime, entry.root, 'game.js')), 'Missing package entry: ' + entry.root);
  assert(!config.openDataContext.startsWith(entry.root), 'Open-data context must be in the main package');
}
for (const entry of ['game.js', 'index.js', 'splash.js', 'weapp-adapter.js', 'OpenWalls/index.js',
  'libs/game.js', 'libs/min/laya.physics.wasm.wasm', 'loading/Loading.bin']) {
  assert(fs.existsSync(path.join(runtime, entry)), 'Missing startup file: ' + entry);
}
const declaredFiles = new Set(manifest.files.map(file => file.path));
let scriptCount = 0, imports = 0, assetsVerified = 0, totalBytes = 0, mainBytes = 0;
const dynamicRequires = [];
const packageBytes = Object.fromEntries(config.subpackages.map(entry => [entry.name, 0]));
for (const file of manifest.files) {
  const absolute = path.join(runtime, file.path);
  const bytes = fs.readFileSync(absolute);
  assert(sha(bytes) === file.sha256, 'Generated hash mismatch: ' + file.path);
  totalBytes += bytes.length;
  const owner = config.subpackages.find(entry => file.path.startsWith(entry.root));
  if (owner) packageBytes[owner.name] += bytes.length;
  else mainBytes += bytes.length;
  if (!file.path.endsWith('.js')) continue;
  const text = bytes.toString('utf8');
  new vm.Script(text, { filename: file.path });
  scriptCount++;
  assert(!/^define\(/m.test(text), 'Compiled define wrapper remains: ' + file.path);
  assert(!/\brequirePlugin\s*\(/.test(text), 'Unresolved plugin dependency: ' + file.path);
  for (const match of text.matchAll(/\brequire\(\s*(['"])([^'"\n]+)\1\s*\)/g)) {
    const specifier = match[2];
    assert(specifier.startsWith('.'), 'Nonrelative import: ' + file.path + ' -> ' + specifier);
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(file.path), specifier));
    const resolved = [target, target + '.js', target + '/index.js'].find(file => declaredFiles.has(file));
    assert(resolved, 'Missing import: ' + file.path + ' -> ' + specifier);
    const destination = config.subpackages.find(entry => resolved.startsWith(entry.root));
    assert(!destination || destination === owner, 'Cross-subpackage import: ' + file.path + ' -> ' + resolved);
    imports++;
  }
  for (const match of text.matchAll(/\brequire\(\s*([^'"\s][^\n;]*?)\)/g)) {
    dynamicRequires.push({ file: file.path, expression: match[1] });
  }
}
for (const asset of json('reports/asset-manifest.json')) {
  assert(sha(fs.readFileSync(path.join(runtime, asset.path))) === asset.sha256,
    'Asset differs from cached original: ' + asset.path);
  assetsVerified++;
}
const wasm = fs.readFileSync(path.join(runtime, 'libs/min/laya.physics.wasm.wasm'));
assert(wasm.subarray(0, 8).equals(Buffer.from([0, 97, 115, 109, 1, 0, 0, 0])), 'Invalid WASM header');
const business = read('wechat-game/libs/min/bundle.min.js');
assert((business.match(/所有已有车位始终可用/g) || []).length === 2, 'Both parking controllers must be patched');
assert(!business.includes('return !this.vip && this.tex.active;'), 'Parking lock getter remains');
const parkingClicks = [...business.matchAll(/onClickPark\(a\) \{([\s\S]*?)\n\s*\}/g)];
assert(parkingClicks.length === 2 && parkingClicks.every(match =>
  match[1].includes('a.video = !1') && !/Ad\.|cp\./.test(match[1])), 'Parking click still requires network/ad/share');
assert((business.match(/this\.car_park\.push\(d\), \(d\.video = !1\)/g) || []).length === 2,
  'Parking initial state is not unlocked in both modes');
assert(!/console\.(log|info|warn|error) = \(\) => \{\}/.test(business), 'Business code still mutes diagnostics');
assert(mainBytes <= 4 * 1024 * 1024, 'Main package exceeds the documented 4 MiB limit');
assert(totalBytes <= 30 * 1024 * 1024, 'Total source bytes exceed the documented 30 MiB package limit');
const result = {
  kind: 'static-only', gameCodeExecuted: false, simulatorLaunched: false,
  scriptCount, literalImportsResolved: imports, assetsVerified,
  subpackages: config.subpackages.length, missingSubpackages: manifest.missingSubpackages,
  mainSourceBytes: mainBytes, totalSourceBytes: totalBytes, packageSourceBytes: packageBytes,
  sizeNote: 'Source-byte estimate; the official compiler determines final packaged size.',
  dynamicRequires,
  dynamicRequireNote: 'Splash receives ./weapp-adapter.js from game.js; loadLib is a root-relative compatibility helper.',
  parkingControllersUnlocked: 2,
};
console.log(JSON.stringify(result, null, 2));
