(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('潞城市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140481","properties":{"name":"潞城市","cp":[113.223245,36.332233],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@N@PAVCTDTHNFPFBAFYHSHWJGLANDTDV@FIJIDCBAFEJIHEDCF@@@DAB@BAB@@@BABADCBABC@@@EBC@@@A@A@A@A@ABA@A@AA@ACAAAA@@AA@@@C@ABC@A@A@ABAAA@ABOHGLOZOPKLEFBDM@UAI@KEAODKBOGIU@S@ECOGIGQMMKSKOGOaEaJUDQLQLODQBO@S@SAYEQAS@OHEVMLWMMMIBK@S@ECQEIASEUCMCCHEL@@@@ADBXJbDXBZATDRAZ@X@NEHOAWC]AYB[JQJNNFLDBDFBB@BDD@B@B\\DFB@BSLKFGDAF@BBJBFEFQFKFI@GEAICUE@GFIFY@@@A@KAIBQDGHAPJNRHNHXD`JPDTDXF\\FVFdHRBVCLEBCJQF@CAAA@ABADBFA@EBGHE@GBGJALJNFRJRFD@@FBDLBPJ@@B@D@BBF@B@F@B@F@H@JDLNFF"],"encodeOffsets":[[115966,37355]]}}],"UTF8Encoding":true});}));