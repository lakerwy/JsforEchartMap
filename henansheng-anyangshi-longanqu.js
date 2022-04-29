(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('龙安区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410506","properties":{"name":"龙安区","cp":[114.323522,36.095568],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@E@A@A@CDO@G@C@I@W@E@ABCFIHMFMFK@A@A@GACAE@A@CAK@C@G@A@E@ECeAK@@@@@I@IEAEBIDIFADAFCDEBCAKAI@E@CDC@AACCA@A@A@ABABCBG@GBE@E@C@CAA@A@G@GCG@KAQDKDIHMLID@@@@A@GDKJCFAXADEDMDMDA@KDIDELERCHCFGHIDOBAB@@@@AB@@@@CBQHK@@@@@ABA@@BA@ABABAB@@EBCB@@@@@B@@AB@B@@AB@B@@BDBB@@@BHFC@AACAADBDA@A@@B@BADCAG@BBDBABC@@@BDMB@B@BJBBA@FDBHB@BABBB@DCF@DB@@AD@@@@BD@BEFEJBD@DBB@P@DBB@BBDABACA@AJGD@DC@BDFDDDEB@V@BABBBB@BB@DC@ABCB@DCFGHCF@DDD@BDB@@DB@AFDFD@BAB@HAB@FB@B@DBDD@BAHHNCBF@FBBD@@FDBT@BA@EF@D@F@BB@BB@D@ACFADDBDPCB@B@BDB@B@BEBAFAN@F@BA@OD@@@@@F@B@AR@FD@@@@@DBNBJA@@@@F@JABEAM@@@@@@@ADALBL@"],"encodeOffsets":[[117084,36961]]}}],"UTF8Encoding":true});}));