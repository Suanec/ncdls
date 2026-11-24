// Import only this game's existing local cache. No network or game-code execution.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
const crypto = require('node:crypto');
const root = path.resolve(__dirname,'..');
const manifestPath = path.join(root,'reports/package-manifest.json');
const previous = JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
let input = process.argv[2];
if (!input) {
  const users = path.join(os.homedir(),'Library/Containers/com.tencent.xinWeChat/Data/Documents/app_data/radium/users');
  const candidates = fs.readdirSync(users).map(u=>path.join(users,u,'applet/packages',previous.appid,previous.cacheVersion)).filter(p=>fs.existsSync(p));
  if (candidates.length !== 1) throw new Error('请传入唯一的本游戏缓存版本目录：npm run sync:resources -- /path/to/'+previous.appid+'/'+previous.cacheVersion);
  input = candidates[0];
}
if (path.basename(input)!==previous.cacheVersion || path.basename(path.dirname(input))!==previous.appid) throw new Error('缓存 AppID 或版本不一致，停止以避免混用代码和资源。');
const work = fs.mkdtempSync(path.join(os.tmpdir(),'ncdls-resource-sync-'));
const exported = path.join(work,'export');
const backup = path.join(root,'.sync-backups',Date.now().toString());
let changed = 0;
function copy(file, relative) {
  const dest = path.join(root,relative), bytes = fs.readFileSync(file);
  if (fs.existsSync(dest)) {
    if (hash(fs.readFileSync(dest))===hash(bytes)) return;
    const saved = path.join(backup,relative);
    fs.mkdirSync(path.dirname(saved),{recursive:true}); fs.copyFileSync(dest,saved);
  }
  fs.mkdirSync(path.dirname(dest),{recursive:true}); fs.writeFileSync(dest,bytes); changed++;
}
function walk(dir) {
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
}
function writeJson(name,value) {fs.writeFileSync(path.join(root,name),JSON.stringify(value,null,2)+'\n');}
try {
  cp.execFileSync(process.execPath,[path.join(__dirname,'extract.cjs'),input,previous.appid,exported],{stdio:'inherit'});
  const current = JSON.parse(fs.readFileSync(path.join(exported,'manifest.json'),'utf8'));
  for (const [from,to] of [['packages','raw/packages'],['decrypted','raw/decrypted'],['source','raw/extracted']]) {
    for (const file of walk(path.join(exported,from))) copy(file,path.join(to,path.relative(path.join(exported,from),file)));
  }
  const updated = new Set(current.packages.map(p=>p.name));
  const merged = {...previous,
    packages:[...previous.packages.filter(p=>!updated.has(p.name)),...current.packages],
    files:[...previous.files.filter(f=>!updated.has(f.package)),...current.files]};
  merged.uniqueFiles = new Set(merged.files.map(f=>f.path)).size;
  writeJson('reports/package-manifest.json',merged);
  const assets=[];
  for (const file of walk(path.join(root,'raw/extracted'))) {
    const relative=path.relative(path.join(root,'raw/extracted'),file);
    if (relative.endsWith('.js') || ['app-config.json','code.fortify.config.json'].includes(relative) || relative.startsWith('laya-libs/')) continue;
    copy(file,path.join('assets',relative));
    const bytes=fs.readFileSync(file);assets.push({path:relative,bytes:bytes.length,sha256:hash(bytes)});
  }
  writeJson('reports/asset-manifest.json',assets);
  const config=JSON.parse(fs.readFileSync(path.join(root,'config/app-config.json'),'utf8'));
  const status=config.subPackages.map(s=>({...s,cached:fs.existsSync(path.join(root,'raw/extracted',s.root.replace(/^\//,'')))}));
  writeJson('reports/resource-status.json',status);
  console.log(JSON.stringify({changedFiles:changed,packages:merged.packages.length,assets:assets.length,missing:status.filter(s=>!s.cached).map(s=>s.name),srcAndVendorUnchanged:true},null,2));
} finally {fs.rmSync(work,{recursive:true,force:true});}
