(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('杨浦区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"310110","properties":{"name":"杨浦区","cp":[121.522797,31.270755],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@pSNGDCDGDM@cBGL[BKAGEGMOcY[GWA@JD@U\\ALIHID@NLLAJABUEGX@PVA@ZDDADGFX`ZKDHFA"],"encodeOffsets":[[124443,32100]]}}],"UTF8Encoding":true});}));