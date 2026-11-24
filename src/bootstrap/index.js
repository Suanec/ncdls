define("index.js", function (require, module, exports) {
  window.screenOrientation = "portrait";
  wx.loadSubpackage({ name: "libs", success: (r) => {}, fail: (r) => {} });
});
