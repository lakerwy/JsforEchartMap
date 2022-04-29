(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('殷都区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410505","properties":{"name":"殷都区","cp":[114.300098,36.108974],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AIAE@GAC@C@GDU@CDMBG@@@@@@BEBE@G@M@E@W@GK@KACB@B@@@@@@BNAFIBE@@@@@IBMACA@@@@C@@EBQA@E@@@@@C@@PABE@M@EBABAFA@A@ACA@A@ODACCCEBBDC@A@@AAAE@C@E@@FABS@CA@EC@AA@EAEMDABDNED@DAX@@DDDB@@DN@BD@@N@BBBF@BFLAD@DB@FHABDF@BL@JLLBBNAHBD@D@@ABAD@FDADDD@DBDPEFAB@@@PA@@@@FA@D@NPAH@@BF@@C@@P@BA@EFB"],"encodeOffsets":[[117080,37041]]}}],"UTF8Encoding":true});}));