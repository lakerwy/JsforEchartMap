(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('芗城区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350602","properties":{"name":"芗城区","cp":[117.656461,24.509955],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@A@ABCDEDEJEBAAA@@@@BE@A@@@A@@@ABC@@@@KGA@A@@@A@A@@@AA@@@@@@A@@@@AAB@@@BA@@BA@ABA@@@@@AAA@@@@@A@@BABA@@@@@AA@A@@ACAA@@A@A@@@C@@@@@AB@@A@@B@BA@@@@@AAAC@AAB@A@@@A@A@A@@AACC@BA@@@A@@@A@@@@A@@@A@@A@@@A@@B@@A@@BA@@@@@A@A@@IB@@A@GAA@A@@@A@@@@@@@A@@@@@@A@@A@@AAAC@AA@CCBAB@@C@@@@B@B@@@@@@@@A@@@@@@@ABB@A@@@@@@@@B@@@B@@@@AB@@AD@@@FCB@@B@@AA@@@B@B@@BA@B@@B@@B@@A@@A@@@@@@AB@@@B@@@@B@@@@BBA@@B@@@B@@@@@B@@@@@BABA@@@@@@@A@@@@@@B@@@@@@@@AB@@@@@@@BA@@@@@@@AA@@A@@B@AAB@@A@@@@@@@@@@@@@@@@AACABAAAB@@A@@@@@A@BAA@@@@@@A@@A@B@A@@@@@@@A@@@@@@AA@AAAAA@@AC@@@@BA@@A@@@AC@@@@A@@AA@@@@A@AAA@@@@AC@@@@@@AA@C@@@G@A@A@@AA@@@@GKGG@BA@ABADABCBACC@CCACAACCAAC@@@@@ABABAA@ACCGBABAD@BBDAD@BA@ACCAAD@@BBBBBBBDBBBD@B@@CBCBCBE@GBGBIDEBCBEBADEHCDEHEDABCDCBAF@F@J@FAHAJAD@DCFABADADADABABCB@@@@ABEDCDCDCDCBCBCBABA@C@AAC@CAAAGCECACCAMIAAGAC@C@GDABAB@@BBBBB@BD@DAD@DADA@CBAD@D@DBBBBBBBBBBDBDAB@F@B@F@BAF@F@BBBB@BADEJKHGBOBSJSJMFMFCB@BBDDB@D@F@BBDDBBDB@@D@D@DAF@BBD@B@FBDDBDBFBFBBD@DFADAFAF@D@B@FBD@FAD@B@FBB@DCBADCDAD@B@F@FBDBBCBADAB@DBDDFBBDDBDDDBDDBDDFBDDBBBBDDBDBBBHDFBDDBBFBDFDDDBDDDDDDBBBBR@HAHGCI@A@@@@AC@A@EDMBE@C@E@C@EACAAAC@A@C@GBCDAFAD@DB@@BBJCBABEDCDCDADAFAF@F@D@HDFD@@DDDBD@D@F@DADADCBEBEDADADAD@D@@CBEBCDCDEBCDEBE@CAC@CAG"],"encodeOffsets":[[120536,25192]]}}],"UTF8Encoding":true});}));