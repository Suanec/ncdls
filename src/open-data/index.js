define("OpenWalls/index.js", function (require, module, exports) {
  (require("weapp-adapter.js"),
    (window.loadLib = require),
    (window.screenOrientation = "sensor_landscape"),
    loadLib("libs/laya.opendata.js"),
    loadLib("js/bundle.js"));
});
