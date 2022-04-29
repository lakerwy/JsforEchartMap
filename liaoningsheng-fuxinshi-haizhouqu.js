(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210902","properties":{"name":"海州区","cp":[121.657639,42.011162],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@CA@@@@EBCBCBA@A@A@CAGEA@AAA@AA@AA@A@@@@AA@@@A@BA@@@@A@@@@AAA@@A@C@A@A@@A@A@ABAA@EB@AAC@A@@AA@A@@@AC@@A@A@@AA@A@@AB@B@B@@@@A@BBA@C@E@@@AEED@@A@@A@@@@@@@A@@A@@@A@A@ABAAAA@A@@CB@AD@@A@@@@A@@@CB@@A@AAFA@@@ABA@@CACBA@ACA@@A@@ABA@CBCBA@CAAAA@@@@@@B@@@@A@AA@@@A@@@@@@A@@AE@@@ADEA@@BA@CEABA@@@@A@@@A@@@A@@@@A@@A@@@@A@A@@EAA@@A@@A@A@@B@@A@A@B@@A@@@@@@@@A@A@@@A@@BABAB@@@A@@A@@@@A@A@ABAE@@BAB@B@@AAG@FAB@@@@@@@EA@@A@@@A@ACA@@@@BB@@@AB@@EA@@@@@AA@A@A@A@@BA@@@@@@A@ABA@@@@G@ABA@BACB@@CB@@@@BAB@@@@AA@@@@@@@AA@@ABA@EB@@@BA@@@A@AAA@@@AA@BA@@@BD@@A@@BA@@B@B@@BBCB@@@@ABB@@@@@A@BDA@@B@@@@@@ABAA@@@@@A@@@A@@@@C@@@@B@@@@@@CBA@DD@@DBB@@@@@ABCB@@@@BBBB@B@B@@A@@@@@@BBB@@@@@BA@@@@BBA@BADD@B@@@B@@@@B@@BB@DB@@@B@B@B@B@@@B@@@B@@B@@BCB@BBB@@B@@A@@B@@@BB@A@ADC@@BA@@B@@A@@@A@@@A@@BA@HHJEF@IN@H@H@R@JAFDDD@DCDCDAHDHBBB@F@DBFBDHBNBD@FAFAD@DDBNMRPPD@B@@@@@D@JAJAH@JDHB@@@@@B@@@@RFRFDB@@@@D@HECCOEIEMIGGIAJKOKLBD@BAACEEAE@CHCHCFCFIBK@KAIDEbBRJPFVJFHFMBI@E"],"encodeOffsets":[[124644,42961]]}}],"UTF8Encoding":true});}));