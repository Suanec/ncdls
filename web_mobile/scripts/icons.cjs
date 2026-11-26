const fs = require("node:fs");
const path = require("node:path");

// Prepared from the game's car_8.png sprite; copy exact PNG bytes so local and
// CI builds share the same icon hashes. See src/icons/README.md.
module.exports = (directory) => {
  fs.mkdirSync(directory, { recursive: true });
  for (const size of [180, 192, 512]) {
    const name = `car-8-${size}.png`;
    fs.copyFileSync(path.join(__dirname, "../src/icons", name), path.join(directory, name));
  }
};
