(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('马村区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410804","properties":{"name":"马村区","cp":[113.321703,35.265453],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBABCBCBA@@@EDC@@FBNDP@FCFCDEJGHCLCFBDJD@FA@E@AB@FDF`JDDLDJ@B@BDADEBG@C@ADIDAJAHELAF@@@@ABGBODGD@@B@BDFBDBDDB@BBBBDB@BBB@BDBBBDD@@BDBBDDB@DBBBBB@BB@BBD@BAB@DABABAB@FOJIF@JJTDHDHTBB@B@B@BBB@B@BBB@@BDDB@@BBB@D@JAXKJEnANARBH@FM@A@@@E@A@@BAAACACCCEAC@G@A@AAABA@A@A@ABC@AAC@@EACCA@A@AAA@EAAAECAAAA@AA@AA@CCCACA@@AAC@@BA@A@A@A@AAACEA@CA@AA@A@AAA@AACAC@G@A@AAAACG@CAA@AAA@ACC@@CCAAA@AAAACC@AAAAA@@@G@A@A@A@C@A@@@AA@AAA@A@A@C@G@A@E@C@E@A@A@EAA@@A@A@ABA@A@C@ACA@@AE@@@A@A@A@@@AAC@ACA@@CAA@AAA@AAA@AAC@AAA@CBA@AAABA@CAA@"],"encodeOffsets":[[116050,36060]]}}],"UTF8Encoding":true});}));