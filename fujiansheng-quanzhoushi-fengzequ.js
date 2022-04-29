(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('丰泽区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350503","properties":{"name":"丰泽区","cp":[118.605147,24.896041],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JLDD@@@@DD@@@@@@@@@@DD@@@@@@DF@@@@BB@@@@@@@@@@BDBN@D@@@B@H@@A@AHEBI@@@@@@@EA@@@@@@ME@@A@@@ICA@@@@@AAAB@@@BA@@@@@@@GD@H@JINGJEBI@OCI@@FFDDDDFBFDDFDDB@BAB@B@B@@@B@B@@@@B@B@B@BBBDBBBBBBBB@@@@@@D@@@HF@BBB@@@B@B@B@BADADAD@D@B@@BB@@B@B@@@BBB@BB@@BBBAB@B@B@B@B@BBB@DB@@DB@@B@@@D@B@B@BBBB@@DGBE@I@EBCFCFEHEH@FCFCF@BADEFCP@TEJCHKHCVKB]H@RBB@`D@IAGAIOSAE@GN[DIDQBKAACECEEGIEGCMEYCQCADABEJADAH@DA@EFGDOFGBGBQ@MBA@@@@@IBKFEHGP"],"encodeOffsets":[[121433,25485]]}}],"UTF8Encoding":true});}));