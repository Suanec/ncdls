const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const config = JSON.parse(fs.readFileSync(path.join(root,'config/app-config.json'),'utf8'));
const result = config.subPackages.map(s=>({...s,cached:fs.existsSync(path.join(root,'raw/extracted',s.root.replace(/^\//,'')))}));
for (const s of result) console.log(`${s.cached?'已缓存':'缺失  '}  ${s.name.padEnd(12)} ${s.root}`);
console.log(`\n已缓存 ${result.filter(s=>s.cached).length}/${result.length} 个声明分包。主包单独存放；目录存在不代表已取齐远程 CDN 资源。`);
