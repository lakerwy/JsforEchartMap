(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('惠济区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410108","properties":{"name":"惠济区","cp":[113.61836,34.828591],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@XCJAV@JA@@JAD@PBJ@FAF@TMLGJOPGN@PD@@`F@@D@NDPH`DR@ZEHCLIJIHKBAJODCJGBCB@@ILK@IGAOIKCIDUNs@yBGGIKQEqEeBGBKAMSC]AACOAC@AA@CAC@@@@@@@@@@@@@@@@@@A@@B@@@@ADEBA@@DAB@@@AG@@@@BABA@@BABCBC@@@@@@AA@@ABA@@@A@@@AAA@@@A@AB@BA@@AGAA@A@@@@BEHA@@BA@@@@@OC@B@@AB@@A@A@@@GA@@A@@@@@@@A@A@@@@B@B@@@@C@@@@@@@@@@@@BBB@@@@@@AB@@@@@@@@@BBD@B@@DB@B@@@@@B@B@@@@BB@B@@@B@@@BBB@@@@@B@BAFBFOPCJANSFIDGNA@@@@@@@E@GGIESDIHcCMIKBMB@@@D@F@DADABCDABCBEDCF@F@BBD@F@DADBDBBDBFFDDBDBBBF@D@DABAFCDADAFADAD@D@DBD@D@FBH@@FlHNLDLFBB@@RBX@REXQVKRQJIHE"],"encodeOffsets":[[116319,35773]]}}],"UTF8Encoding":true});}));