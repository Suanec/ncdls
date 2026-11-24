// Decode data only; never load or execute the game scripts.
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const root = path.resolve(__dirname, '..');
const pairs = [
  ['json/drama_core.json', 'drama_core.json'],
  ['res/home/json/config.json', 'home-config.json'],
  ['res/home/json/planeBoxData.json', 'planeBoxData.json'],
  ['res/home/json/toolBoxData1.json', 'toolBoxData1.json'],
];
for (const [input, output] of pairs) {
  const bytes = fs.readFileSync(path.join(root, 'assets', input));
  let data;
  try { data = JSON.parse(bytes.toString('utf8')); }
  catch { data = JSON.parse(zlib.brotliDecompressSync(bytes).toString('utf8')); }
  const target = path.join(root, 'config/decoded', output);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
  console.log(input + ' -> config/decoded/' + output);
}

// Resolve dictionary-indexed fields into a separate human-readable view.
const config = JSON.parse(fs.readFileSync(path.join(root, 'config/decoded/home-config.json'), 'utf8'));
const expanded = {};
for (const [name, table] of Object.entries(config)) {
  if (name === 'dic') continue;
  const keys = table.keys.map(index => config.dic[index]);
  expanded[name] = Object.fromEntries(Object.entries(table).filter(([key]) => key !== 'keys').map(([key, row]) => [
    key, Object.fromEntries(keys.map((field, index) => {
      const value = config.dic[row[index]];
      return [field, value === 'null' ? null : value];
    }))
  ]));
}
fs.writeFileSync(path.join(root, 'config/decoded/home-config.expanded.json'), JSON.stringify(expanded, null, 2) + '\n');
console.log('Expanded dictionary references -> config/decoded/home-config.expanded.json');
