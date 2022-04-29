(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('启东市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320681","properties":{"name":"启东市","cp":[121.659724,31.810158],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@¢SŚ|SFEBIHUJMìßR_LWHu^PYÝhNMFUE_FJ¯óhÍ`đnÓpSCIDA@WJGDQFC@AIMDAD[H[L[VC@QLAFUFCBWDaXU@UFYBQDKDGFKDMFC@NRJTDLJRVfFXDNAVAHAFHBDJDNJTJJFTDBRDVL@B@@@@@@BB@B@B@@KAA@@BA@@BHZHT@B@@BD@B@BBB@DBD@B@@@@ABA@@@@BBB@B@B@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@BB@@@@@@B@@@@@@@@@B@@@@@@@B@@@BAB@@@@@B@@@@@@A@@@@B@@AHBB@@@@B@@@@@B@@B@@@@B@@@@@B@@@@B@@@@B@@@@@@@@BB@@@@@B@@@@@@@B@@B@@@@@@B@@@@@@@B@@@@@@B@@@@@@@BA@@@@@@B@@BB@@@@@@@@BB@@@@@@@@@BB@@@@@@@@@BB@@@@@@B@@B@@B@@@@B@@B@@@@@@B@@@@B@@@@@@@@@@B@@@@@B@B@D@B@B@D@B@D@@@D@DAHBtBB@B@J@Z@B@BFJFL@@@@HN@F@BAFAD@B@@@@@B@@@@@B@@@B@@@@@BAB@@@@@B@@@B@@@F@DDJBJBFDH@FPf"],"encodeOffsets":[[124462,32894]]}}],"UTF8Encoding":true});}));