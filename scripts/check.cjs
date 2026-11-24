const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
}
let scripts = 0, verified = 0;
for (const dir of ['src','vendor','scripts']) {
  for (const file of walk(path.join(root,dir))) {
    if (!/\.(?:js|cjs)$/.test(file)) continue;
    new vm.Script(fs.readFileSync(file,'utf8'),{filename:file});
    scripts++;
  }
}
for (const [report, folder] of [
  ['package-manifest.json','raw'], ['laya-plugin-manifest.json','raw/laya-plugin']
]) {
  const manifest = JSON.parse(fs.readFileSync(path.join(root,'reports',report),'utf8'));
  for (const file of manifest.files) {
    if (sha256(fs.readFileSync(path.join(root,folder,'extracted',file.path))) !== file.sha256) throw new Error('Source hash mismatch: '+file.path);
    verified++;
  }
  for (const pack of manifest.packages) {
    if (sha256(fs.readFileSync(path.join(root,folder,'packages',pack.name))) !== pack.sha256) throw new Error('Package hash mismatch: '+pack.name);
    if (sha256(fs.readFileSync(path.join(root,folder,'decrypted',pack.name))) !== pack.decryptedSha256) throw new Error('Decrypted hash mismatch: '+pack.name);
  }
}
const assets = JSON.parse(fs.readFileSync(path.join(root,'reports/asset-manifest.json'),'utf8'));
for (const file of assets) {
  if (sha256(fs.readFileSync(path.join(root,'assets',file.path))) !== file.sha256) throw new Error('Asset hash mismatch: '+file.path);
}
console.log(JSON.stringify({syntaxChecked:scripts,sourceHashesVerified:verified,assetHashesVerified:assets.length,gameCodeExecuted:false},null,2));
