// The open-data context has its own global object and entry.
require('./weapp-adapter.js');
window.screenOrientation = 'sensor_landscape';
require('./libs/laya.opendata.js');
require('./js/bundle.js');
