(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('稷山县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140824","properties":{"name":"稷山县","cp":[110.978996,35.600412],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@G@C@]DqLiHMLQBK@UH[JUJKHQDWCUGQEOAQCKEK[iIMWYIMMWE]@U@K@SAWGUGMBI@CAEAAA@CAA@EAA@C@AAAAA@ECAEA@@EAC@AACA@CCCC@AAAAA@@CBA@@B@LAHCP@LDVCXGNQIIAc@MBONSHSDIDOBCJ@JGPCB@AGIKGOEIAADANGFIBICI@GBGPGRCPBRCXCRAJ@J@F@FADCBEJCDCBCBEDADCBCDABAJ@D@BDBF@NAD@@FA\\A\\AFSJGLFBHANBFFAB@B@DBB@FAHABCD@BCDCBADAB@BADBDBH@FCHD^@^@XBP@RIfNANBHAJAVKfGRKVQJGNCNBNNLJRDNFPJJPBLCDCVAXD^DLC`LRJNLJPDP[@M@KFMBIPQDK@M@EDOFGN@PFRBJAP@JBN@HFF@"],"encodeOffsets":[[113723,36599]]}}],"UTF8Encoding":true});}));