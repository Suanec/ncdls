define("libs/game.js", function (require, module, exports) {
  require("min/laya.wxmini.min.js");
  requirePlugin("layaPlugin/laya.core.js");
  requirePlugin("layaPlugin/laya.ani.js");
  requirePlugin("layaPlugin/laya.d3.js");
  requirePlugin("layaPlugin/laya.ui.js");
  (require("min/spine-core-3.8.min.js"),
    require("min/laya.spine.min.js"),
    require("min/laya.physics.wasm.min.js"),
    require("min/fairygui.min.js"),
    require("min/utils.min.js"),
    require("min/W.min.js"),
    require("min/B.min.js"),
    require("min/C.min.js"),
    require("min/M.min.js"),
    require("min/ad.min.js"),
    require("min/bundle.min.js"));
});
