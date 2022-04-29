(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('建华区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230203","properties":{"name":"建华区","cp":[123.955888,47.354494],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CAKEA@GCIAICICA@C@@@CAC@EAEAIAC@E@K@BC@@@@@ABA@@@A@@@@@A@@@A@@@A@@@AB@@CB@@CB@@A@ADA@@@AA@A@A@@@A@ABA@@@@@@@@BA@@@A@@@A@@AA@@A@G@E@@@@C@GAG@A@G@A@@@G@G@I@@@A@E@IAG@I@C@AA@@CCCAACCA@@@@@@EE@@AAEDEECCA@AEIAC@EICEC@CBCGACC@I@CBE@E@A@A@@@@@CBC@EAE@E@A@AB@B@@@@@@A@C@CBC@A@C@AB@@@@@@ABA@C@C@E@A@EAK@G@GAK@AH@DBFBFHPLLDF@F@F@HDPDFBBBBDBD@F@RAFAFBFBJFDDBD@DCDGDEDCBABABBD@BBBDDHDB@DBD@DABA@ADABCBAB@D@B@DBDBBBDBBBFHDDBB@B@BAH@B@BDDFBDBF@H@DAD@BBB@D@B@@@B@B@L@H@BB@D@@BBBB@B@@D@@@B@@@B@@B@@@@BB@@B@B@@@BBBBB@BBB@@@B@@ABABE@@B@F@D@B@B@B@BAB@B@@AB@DABAB@@@@@BAB@@@@@B@BBBD@BB@@@BB@@BB@@BBDBBB@@B@@BB@@@B@B@B@@@DABABADAB@B@BDB@BBF@FBB@BB@A@@@@BA@@@@@AAABBDBB@BB@@B@DB@@B@@@@C@@BADADABB@@DEDE@AB@FADCB@DCBCBA@A@@AA@CBA@A@@B@@AB@@A@A@@@A@@@AB@@A@@BA@@B@@A@@B@@@B@@@B@@A@@B@@@@AB@@@B@@A@@@@@@B@@A@@@@BABC@A@@@@"],"encodeOffsets":[[127111,48553]]}}],"UTF8Encoding":true});}));