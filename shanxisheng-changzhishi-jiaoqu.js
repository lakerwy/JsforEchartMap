(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('郊区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140411","properties":{"name":"郊区","cp":[113.101211,36.218388],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@@@@@IEECGAEBMHA@CB@@CBA@A@EBE@EBK@EAG@A@I@GBC@C@G@AAE@CAA@@AA@CAAAA@E@OABDFHBJ@PDRBLS^FFNFTJ@@@@B@NHJV@^BH@RBZ@D@@B@@@B@@@@@B@@B@@BABB@@@@BB@@A@@BB@@@@@@@@BB@@@@@@A@@@@BB@BB@@B@@BB@BBBBB@B@FAB@@@@@B@@B@@BA@@@@@@@A@@@@@@BB@@@@@DB@@BB@@@@BDB@@B@B@@@B@@@B@B@@@@@@@B@@B@@BB@@@@@@BB@@@BB@@@B@BBB@@A@@@@B@BA@CDA@@@B@BBB@@@B@@@BB@BCNEL@BBH@NCJSPEPHPBXKJQHCJ@@@@AF@B@LBTBD@@@@BLLBB@@@Z@JEHEF@DVBJHFJ@LEREFEAEAI@ABEHCLETK@AEA[C@A@ACC@AAACECAEKMMRI\\IZA^BXDPBFG@M@WBYCQBSAYCWIaAWBC@@@@FKDGNDVDTFJBRFFDT@L@JAAI@KAMAMBAFCJCFAFA@AB@@A@A@@@AAAAAAAAACE@A@ABA@ABG@@BCAC@@@A@CAC@@CCAAC@@AEAA@A@ICE@AAICEGAIDIFEJCJ@BK@K@OAACE@AA@AAEEA@A@EAKAC@A@A@AAA@AACACCAACCACQUOGADCFHNLRHT@LEFYT@B@@@@BLJJFL@T@FQH@@@@@@EF@TAHA@CIME[BEECE[BKBMD@@@@A@G@CA@EAODCH@FEBEMWCOBAJ@FCDI@E"],"encodeOffsets":[[115801,37035]]}}],"UTF8Encoding":true});}));