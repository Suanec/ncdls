const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

// Small original car/screw icon, drawn without external assets or dependencies.
function crc32(data) {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let n = 0; n < 8; n++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const name = Buffer.from(type),
    size = Buffer.alloc(4),
    crc = Buffer.alloc(4);
  size.writeUInt32BE(data.length);
  crc.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([size, name, data, crc]);
}
module.exports = (directory) => {
  fs.mkdirSync(directory, { recursive: true });
  for (const size of [180, 192, 512]) {
    const rows = Buffer.alloc((1 + size * 4) * size);
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) {
        const u = x / size,
          v = y / size;
        let color = [24, 58, 86];
        const rect = (a, b, c, d) => u >= a && u <= c && v >= b && v <= d;
        const circle = (a, b, r) => (u - a) ** 2 + (v - b) ** 2 <= r * r;
        if (rect(0.13, 0.47, 0.87, 0.69) || rect(0.25, 0.31, 0.68, 0.56))
          color = [82, 193, 238];
        if (rect(0.3, 0.36, 0.45, 0.48) || rect(0.49, 0.36, 0.63, 0.48))
          color = [209, 240, 251];
        if (circle(0.29, 0.7, 0.095) || circle(0.72, 0.7, 0.095))
          color = [11, 30, 47];
        if (circle(0.29, 0.7, 0.04) || circle(0.72, 0.7, 0.04))
          color = [238, 247, 252];
        if (circle(0.76, 0.26, 0.115)) color = [255, 202, 86];
        if (rect(0.69, 0.245, 0.83, 0.275) || rect(0.745, 0.19, 0.775, 0.33))
          color = [24, 58, 86];
        const offset = y * (1 + size * 4) + 1 + x * 4;
        rows.set([...color, 255], offset);
      }
    const header = Buffer.alloc(13);
    header.writeUInt32BE(size);
    header.writeUInt32BE(size, 4);
    header[8] = 8;
    header[9] = 6;
    fs.writeFileSync(
      path.join(directory, `icon-${size}.png`),
      Buffer.concat([
        Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
        chunk("IHDR", header),
        chunk("IDAT", zlib.deflateSync(rows)),
        chunk("IEND", Buffer.alloc(0)),
      ]),
    );
  }
};
