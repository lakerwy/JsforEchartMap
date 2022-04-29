(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('石狮市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350581","properties":{"name":"石狮市","cp":[118.628402,24.731978],"childNum":7},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@BB@@BB@@@@@@AB@@@@@@AAAA@@@A@@@@@A@@@@@@@@@@B@@"],["@@LVFIHCHCJ@FBPHBBB@BAFAJCDAF@FBF@FDBB@DCJ@BBDFJJDV@DEBCEMAE@GBGDKDGFCDAHAHAF@HBF@@@BA@@B@B@@BB@@@BADABAB@B@B@B@B@BBB@B@DAD@@A@@B@@@B@B@BBB@D@B@B@@A@@@AAA@@AAA@@A@A@AD@@CEG@A@@BABC@@@A@A@@CCEOAE@CCEA@AAA@A@A@A@@@AAECAC@@@A@@@A@@@A@@@A@@@A@@@@@A@AA@C@CA@@A@@ABA@A@@GGCACAABGHA@ABA@A@AAAAAA@CAADAF@HBBA@AQO@@A@@@@@A@@@@A@@@A@@@@@@A@A@AABE@@@A@@@A@@@AB@@@FBBA@ACAAC@AACA@CAE@AAAABAACCACB@BABA@@AAA@@@@@@@AB@@@B@@@@@@@@@@A@@@@@@@AB@@@AA@@@AAA@@AA@A@CCA@@A@A@E@A@@@CCAA@AA@A@A@AA@@A@@A@AAACACCCAA@MCA@M@@@CBEBGFIPCJOJ@BAB@@CJ@HDHBHCBGFCHAFBF@BABCBE@AAAACBE@GBAACAGGCCCAGAE@C@CCEEE@E@EBGDEFAD@DAHCDCBGBEDAD@FBFDBFJ@FAD@BBBH@HBDAD@BBFFHDDDD@HBF@DBDBBBBABBD@@BBD@F@HGT@D@DB@@@@BF@DBBCDGDBDDJFRHD@@BDJ"],["@@A@@B@@B@@B@@B@@A@@@@@@@A@@@@@@AA@B"],["@@@@@@BBB@@@@@B@@@@@A@@@@A@@A@@@A@@@"],["@@@@BB@@B@@@@A@@@@@@@@@@@@AA@@@@@@A@@@@@@B@@@@"],["@@@@@@D@@@@@@A@@@@A@A@@@@B@@"],["@@@@@@B@@@@@@@@@@@B@@@@A@@A@@@@@@@@@@@A@@@@@@@@B"]],"encodeOffsets":[[[121555,25259]],[[121505,25388]],[[121624,25406]],[[121606,25376]],[[121609,25377]],[[121535,25397]],[[121552,25256]]]}}],"UTF8Encoding":true});}));