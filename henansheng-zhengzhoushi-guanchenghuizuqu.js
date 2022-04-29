(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('管城回族区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410104","properties":{"name":"管城回族区","cp":[113.685313,34.746453],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@DEBDFJJAFIBKDCB@@@@AB@HFDHBBFHNHHFJHBBRAFC@EBAB@FJHDD@HCLAB@@@@ELIP@D@@@@@@@B@@@@BB@@@@@BB@@@@@@@@B@@AB@@@@A@A@@@@@@@@BAB@@@@@@B@BBB@@@@D@B@@@@BB@@@@@@B@@@@@@@B@@@@@@F@@@@A@@@@@@@AB@@@@@@A@@@@@@@@@@@@B@@@@@B@@@@@B@@BB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@B@@@@@@@B@BB@@@@@A@@@@@@@@@AA@@@@A@@@@@@@@@@@@@@B@@@DD@@@@B@@@@@D@B@FAD@BANAD@@BB@B@@@B@B@@@@@D@@DDA@BD@B@@@@A@@@@@ABQ@@B@B@@@@@B@H@AGE@@@@@@@A@@@@@C@@A@@@@@@@@@A@A@@@@@A@@BAB@@BL@@@@@@@@@@@H@@@@@B@@@@@JBACD@B@@@D@B@@C@ABB@@@@@AB@@@@@B@@@B@@@@@FB@B@@B@@B@@@@@B@@BDBB@@@B@BB@@BB@LJBBB@HFDBB@@@B@BBB@@@B@B@@@@@@@B@@@@@@BBBDFH@TAHEBEDCJ@DJDNFDPBNDLBFA@E@A@@@@@A@CDCB@@@@@@@@@@@D@HAJAFADIHGFAF@@C@@DGHIJEDIAGSKIIYuCACEGECACCAE@@@@@@AE@GBG@G@G@E@CACE@CBAB@BAF@DBD@DADA@C@CCAAAAC@A@AACECEACCEAEAG@@@@@@@@@@@G@KBI@EDAACC@A@C@A@CAA@A@C@CBC@EBA@CBABA@A@A@A@CAAAAA@AACAC@ACA@@@@@@ABABCBCDCDGFCB@BA@EBE@C@E@C@CBC@ABADAB@F@@@@@BAFADADABABCBC@A@CDABCBA@EBCBIDC@@EBA@@A@A@A@@@@A@@B@@AA@A@A@@AB@@A@@AAAADA@A@@@@@@@CAACCEDACAACAC@CB@@@@@@@@@@@@EDCDCBABA@ADABABA@C@AA"],"encodeOffsets":[[116392,35475]]}}],"UTF8Encoding":true});}));