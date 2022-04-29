(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('尧都区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"141002","properties":{"name":"尧都区","cp":[111.522945,36.080366],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@LENGNCJC\\A`@\\@RARE@@@@DAFA@@@@DCTKXKPKFCRODC@@@@NSLQFOBMDM@@@@BETUNGXGTHRFPANGRGHC@@@@JCLGFIAII[QIOEOEEGHOPKTEZG`@TDVBPAF@F@@@@A@AF@@A@A@GBI@CBKH]AAMACAHKVG\\ANA@@@@DAB@@@F@^IVA\\BPBPLTHFFJFF@@@B@L@NA\\ELFNFTALAFADE@QBOAQBO@CBIAOEKIKKGIGQISISE@@@@CAQGQIWIUKOIMM@IBE@GEUGUIUCMCUKIQAMCCEEKG_IIYAMHS\\MJMLKHQ@UAKAIDKDODIJIRGT@@@@CLCLMPI@@@@@IBGA@@@@WA@@@@_AI@GFCHEZAFEJEJGLIJGB@@A@ABUAUI[@MDEJDL@JCLMDYAKOCA@@@@UCKBID@@@@A@SJ]HOBYFUDQDQDODIBC@EDMHMHKTGFAD@@@@ILANGNCNINKJIHKBMCMKIKGEK@ODUHWLQ@O@SAOHIHOJMFQHOHIDKHEJJDHBLHPPIZBFDFHDJFJJLJDJDJ@JTATGJGX@bJTDRGRINGVDXJTJRFLJNHXDRDTHDN@JAJCJCFGVBRJLRLLLPRX`JRHLLD"],"encodeOffsets":[[114024,37204]]}}],"UTF8Encoding":true});}));