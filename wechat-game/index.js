window.screenOrientation = 'portrait';
wx.loadSubpackage({
  name: 'libs',
  success: function () { console.info('[ncdls] libs loaded'); },
  fail: function (error) { console.error('[ncdls] libs failed to load', error); }
});
