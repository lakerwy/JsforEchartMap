(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('秦淮区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320104","properties":{"name":"秦淮区","cp":[118.786088,32.033818],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@@@A@@@A@ADABABABAD@@@@ABADABCD@BADA@@@@@@B@@B@@BADEBCB@AABC@@@@B@@@@@@@@@@ABA@@@@@@BABAB@@@BA@AB@@@@@@@@@BE@A@EBGDA@A@@B@@A@@BA@@@A@@BA@@BA@@@@@@@@B@BB@@@@@B@@@ABBB@@@DBB@@@BBB@F@@@B@@@B@B@B@@@B@@@B@B@@@D@BAFAD@DABBB@@@@@@@@@@B@@@@@@@@@B@@@B@B@D@F@B@D@B@FAB@B@H@F@F@B@HAB@D@D@H@DAB@J@D@D@B@FA@@J@AI@@B@B@@@@BBF@BBBB@F@DBB@B@@A@@@@@@AA@A@A@A@@@@@@DA@CAA@A@A@@@@BAD@D@BA@@@A@@@@@A@@@A@@@A@@@@@@J@AE@A@A@@D@@ABBBBB@@HDADA@@D@@@BBB@DB@ADA@AB@BB@@DBD@B@DB@B@@@@@A@@B@@@B@@@@A@A@@B@@A@@@@@@@@@A@A@@@A@@@A@@@@BAB@@@B@BA@@@@ACEAA@@A@A@@@AACA@@ACAA@@AEA@AAC@@@@A@ABC@A@GECACCA@@A@@@AA@CEA@@@@ABAE@@AA@GG@@AAAA@@A@A@A@A@AAE@A@@@C@A@CAEA@@C@AAA@@@GCA@A@@@A@E@"],"encodeOffsets":[[121662,32744]]}}],"UTF8Encoding":true});}));