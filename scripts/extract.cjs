// Static extraction only: package JavaScript is never executed.
// Format references:
// https://github.com/BlackTrace/pc_wxapkg_decrypt/blob/master/main.go
// https://gist.github.com/Integ/bcac5c21de5ea35b63b3db2c725f07ad
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const [input, appid, output] = process.argv.slice(2);
if (!input || !/^wx[0-9a-f]{16}$/.test(appid || '') || !output) {
  throw new Error('Usage: node extract.cjs PACKAGE_DIRECTORY APPID OUTPUT_DIRECTORY');
}
const root = path.resolve(output);
fs.mkdirSync(root, {recursive: true});
for (const sub of ['packages', 'decrypted', 'source']) fs.mkdirSync(path.join(root, sub));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const manifest = {appid, cacheVersion: path.basename(input), packages: [], files: []};
const written = new Map();

for (const name of fs.readdirSync(input).filter(n => n.endsWith('.wxapkg')).sort()) {
  const original = fs.readFileSync(path.join(input, name));
  fs.writeFileSync(path.join(root, 'packages', name), original, {flag:'wx'});
  let data = original;
  if (original.subarray(0, 6).toString() === 'V1MMWX') {
    if (original.length < 1030) throw new Error('Truncated encrypted package');
    const key = crypto.pbkdf2Sync(appid, 'saltiest', 1000, 32, 'sha1');
    const dec = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from('the iv: 16 bytes'));
    dec.setAutoPadding(false);
    const prefix = Buffer.concat([dec.update(original.subarray(6, 1030)), dec.final()]);
    const tail = Buffer.from(original.subarray(1030));
    for (let i = 0; i < tail.length; i++) tail[i] ^= appid.charCodeAt(appid.length - 2);
    data = Buffer.concat([prefix.subarray(0, 1023), tail]);
  }
  if (data.length < 18 || data[0] !== 0xbe || data[13] !== 0xed) throw new Error(`Invalid header: ${name}`);
  const indexSize = data.readUInt32BE(5), bodySize = data.readUInt32BE(9);
  if (14 + indexSize + bodySize !== data.length) throw new Error(`Invalid package size: ${name}`);
  const count = data.readUInt32BE(14), entries = [];
  if (count > 100000) throw new Error('Invalid file count');
  let cursor = 18;
  for (let i = 0; i < count; i++) {
    if (cursor + 4 > 14 + indexSize) throw new Error('Truncated index');
    const n = data.readUInt32BE(cursor); cursor += 4;
    if (!n || cursor + n + 8 > 14 + indexSize) throw new Error('Invalid index entry');
    const rawName = data.subarray(cursor, cursor + n).toString('utf8'); cursor += n;
    const offset = data.readUInt32BE(cursor), size = data.readUInt32BE(cursor + 4); cursor += 8;
    const relative = rawName.replace(/^\/+/, '');
    if (!relative || relative.includes('\0') || relative.includes('\\') || relative.split('/').some(p => p === '..' || p === '.')) throw new Error('Unsafe filename');
    if (offset < 14 + indexSize || offset + size > data.length) throw new Error('File outside package body');
    entries.push({relative, offset, size});
  }
  if (cursor !== 14 + indexSize) throw new Error('Index size mismatch');
  fs.writeFileSync(path.join(root, 'decrypted', name), data, {flag:'wx'});
  for (const entry of entries) {
    const bytes = data.subarray(entry.offset, entry.offset + entry.size);
    const sha256 = hash(bytes);
    if (written.has(entry.relative) && written.get(entry.relative) !== sha256) throw new Error(`Conflicting file: ${entry.relative}`);
    if (!written.has(entry.relative)) {
      const target = path.resolve(root, 'source', entry.relative);
      if (!target.startsWith(path.join(root, 'source') + path.sep)) throw new Error('Unsafe output path');
      fs.mkdirSync(path.dirname(target), {recursive:true});
      fs.writeFileSync(target, bytes, {flag:'wx'});
      written.set(entry.relative, sha256);
    }
    manifest.files.push({package:name, path:entry.relative, bytes:entry.size, sha256});
  }
  manifest.packages.push({name, bytes:original.length, sha256:hash(original), decryptedSha256:hash(data), files:count});
  console.log(JSON.stringify({package:name, files:count, bytes:original.length}));
}
manifest.uniqueFiles = written.size;
fs.writeFileSync(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2), {flag:'wx'});
console.log(JSON.stringify({output:root, packages:manifest.packages.length, uniqueFiles:manifest.uniqueFiles}));
