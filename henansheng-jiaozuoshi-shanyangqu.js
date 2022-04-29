(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('山阳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410811","properties":{"name":"山阳区","cp":[113.26766,35.21476],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@BIA@@AC@@CBKUAC@I@IHG@@F@@DB@@DA@LABF@@FC@ADS@@@G@GHMBE@I@O@A@MAC@ABCBKB@H@B@D@@@@@JBJ@@JHD@H@@FH@@@BJ@@BBBB@B@DB@@@B@BJ@F@B@H@DPDFLFB@@D@DNJF@@@@B@@A@@FBD@BEF@DC@AB@@@DBBA@@@BB@@CFBB@B@@@D@BABBB@@@ADC@@FB@ADBB@D@@@@D@@@H@@@B@@@D@A@B@@CB@BCB@@@@@@CD@@AD@@@D@@ABABG@@J@DB@CDA@@FAD@NDLB@BFDFB\\NTBNAP@DFBFBBAFMZAZEXKP@DBDBBDBBF@HCBCAABBBBD@BAHBBD@F@@@BA@CDADBDJ@DBB@BBBDF@@BB@BFFBBBB@BDBBBBBBBBB@@BB@BBB@BDDBDBBDDFDBBBBBB@BJFHDBBB@BBFBBBB@B@BBHCPCHABA@@@@BEFKBGBIJCBCD@H@FABCACA@I@KCCC_ICE@EBAF@B@@EICACDEDKHGFIDCDE@ECOAM@ED@FC@@B@DADABAFACEAACAEACA@AAAB]AAA@iICAACACCEAGAC@AAAC@AAAAAC@AACCAC@C@EAAAAAAEA@A@@K@@H@@@B@@@@A@C@@@@B@@CB@@DB@@CH@ADJ@@@@CF@@EDB@EB@@@B@@@@@@C@@F@@A@@@@B@BBBB@@BA@@@@DB@@LBADH@@FB@B@@@@DD@@@@@@CF@@@BCJB@AD@B@LB@EC@A@@@AA@E@@@E@CF@@CDB@CB@BEF@@AB@@@D@@C@@CB@CI@C@AAA@W@@CMJQ@@PK@@MwDEB@FKF@@A@ABAB@ACBCBI@IDC@EAIAEA]GKA@CeG@EB@@@BG@AA@A@@ABEA@G@KA"],"encodeOffsets":[[115898,35956]]}}],"UTF8Encoding":true});}));