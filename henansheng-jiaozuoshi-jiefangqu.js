(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('解放区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410802","properties":{"name":"解放区","cp":[113.226126,35.241353],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@E@C@AABG@AACAABADBDA@GAECAAAAC@CLOFWBYNYBEAAAECEO@MBSA[MEAECALBJFF@HAFIBOHIHCFK@CD@HJNFF@JCF@@@@@@@@@@CF@P@BGBKBAFI^@HXLFJAH@@@@@JHLDD@@@@RLRJJBB@JSL[NOFKHCBAJCBA"],"encodeOffsets":[[115963,36116]]}}],"UTF8Encoding":true});}));