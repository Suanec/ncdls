const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const sha = (data) => crypto.createHash("sha256").update(data).digest("hex");

// JSON lets the HTTP server compress the transfer and Safari decode it without
// requiring DecompressionStream (not available on the target iOS 15 devices).
module.exports = function buildPacks(output, files) {
  const groups = [];
  let group = [], bytes = 0;
  for (const file of files) {
    if (group.length && bytes + file.bytes > 2 * 1024 * 1024) {
      groups.push(group);
      group = [];
      bytes = 0;
    }
    group.push(file);
    bytes += file.bytes;
  }
  if (group.length) groups.push(group);
  fs.mkdirSync(path.join(output, "offline-packs"), { recursive: true });
  return groups.map((files) => {
    const data = Buffer.from(JSON.stringify({
      format: 1,
      files: files.map((file) => [
        file.path,
        fs.readFileSync(path.join(output, file.path)).toString("base64"),
      ]),
    }));
    const hash = sha(data), name = `offline-packs/${hash.slice(0, 20)}.json`;
    fs.writeFileSync(path.join(output, name), data);
    return {
      path: name, bytes: data.length, sha256: hash,
      files: files.map((file) => file.path),
    };
  });
};
