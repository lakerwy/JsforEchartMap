(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乌达区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150304","properties":{"name":"乌达区","cp":[106.722711,39.502288],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BEBIDGDGDQ@KAIAKDE@AQSAEFYSLQDGDE@OBC@KHE@ePWHKBCBC@CFAHEJCFC@@BUDEBCBGDMPABEDC@KPQ~@N@JPXNNXNAJDDČ^DUNULSDIAS@MAIEGMQMQGGCG@GDGDEFE@C@CAAQOIICKAE@K"],"encodeOffsets":[[109314,40450]]}}],"UTF8Encoding":true});}));