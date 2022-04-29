(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东山县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350626","properties":{"name":"东山县","cp":[117.427679,23.702845],"childNum":7},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@BA@@AA@@@@A@@B@@@B@@B@"],["@@@BB@@@B@B@@@@@@A@@@@A@@@@A@@C@@@@@@B@@"],["@@@@B@@@@@B@@A@@@@B@@@@A@A@@@@@@@@@A@@@@@AA@@BA@A@@BA@@BA@BB@@@@@B@@@@B@"],["@@LA^EpKDAPQDMAWK[IYqHGAEAICQMA@AAC@A@a@A@AAEKIOGU@I@ABCHAFADCFO@G@ICGECGEKAUAS@EACAGIEI@KAKBIBKJGFGBI@KACIKCCEEGCOCM@OBIAWKoSICM@G@IDIBI@OA_G_CM@QBGHGJCLALJDDDR\\DJ@`CVCbGVER@bV~HHº¼RVPHJDH@HCTM@@@@HGh]NCVELBTHZRXPJD`DV@B@"],["@@DA@@@@BAB@BA@@@A@A@AA@@@@@A@@@@A@@A@@@@@@B@@@B@@@BB@@B@@A@@B@@A@A@@B@@@B@@@@"],["@@B@BB@B@@@@B@BBB@@BB@@@B@@A@@@A@@@AA@@@@@A@@AAA@@A@A@@@@@AA@@AA@@@@AB@@BD"],["@@@BBB@@B@@@B@@A@A@@@@A@@A@@A@@@A@@B@@"]],"encodeOffsets":[[[120494,24116]],[[120517,24095]],[[120293,24163]],[[120346,24348]],[[120278,24145]],[[120239,24127]],[[120243,24135]]]}}],"UTF8Encoding":true});}));