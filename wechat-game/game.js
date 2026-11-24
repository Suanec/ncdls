// WeChat main entry. Rebuilt by scripts/build-wechat.cjs.
require('./splash.js')._I(wx, 'loading/Loading_atlas_dfa3l7.png', './weapp-adapter.js', function () {
  window.loadLib = function (name) {
    return require(name.startsWith('.') ? name : './' + name);
  };
  require('./index.js');
});
window._M_ = true;
