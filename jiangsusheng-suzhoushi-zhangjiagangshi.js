(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('张家港市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320582","properties":{"name":"张家港市","cp":[120.543441,31.865553],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DFHDBDCP@FABCHMD@BBF@HADCJAHABGFSR@@YOA@AB@D@@@@@B@@@@@F@B@@@@@BCAGAA@E@@AAAAA@CY@AL@@EDA@ELAJBHFDHD@FAJDLEHMFIHEFKDICAJ@NIPIJCLGBCDUFIDER@DWBIBE@@@@@EBMFSDC@GD@@[LIBGDEDC@C@GBSD@BDBBFRPBDAHGHULAD@@@@AFCPEND|TPPP`TLFXLfRnVFBH@XC\\APAB@lUzSvQRELA^ChI\\@VB@@\\FPDXFbFLBrFPBPBNBL@@@TBJELC@@LYFIZS¦čJQDKHKjLOw¥fEJA@@@CCICKKIFcPIHKFSLA@GIKIEGE@AAAEIIFABAAAAIDCBIAIFCCKCICBEGKC@AFEFKBIECCCCEG@I@MGGC@@KBC@AAA@@AA@@AA@BAA@A@@@AC@AE@@AA@@@@AACAEAACCCC@A@@A@EDG@KKGEIBGAKGMBGBA@MBEBIDEJC@KBGDG@CH"],"encodeOffsets":[[123488,32500]]}}],"UTF8Encoding":true});}));