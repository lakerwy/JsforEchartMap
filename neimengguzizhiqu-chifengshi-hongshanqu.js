(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('红山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150402","properties":{"name":"红山区","cp":[118.961087,42.269732],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABAACBA@@AAAA@@AAA@@AAACAAAAA@@AA@A@@CAC@C@DCBAB@BA@@@A@C@@B@@AA@@@AAA@AAA@A@@@A@@@A@E@@AA@A@A@A@@@@A@@A@A@@@@@AA@@A@@@@@@@@@A@A@@BAACBA@ABAB@@ABBFK@A@@AAICB@F@B@B@BI@AAA@@@C@@@D@@C@I@@@BI@@@AA@@@@C@@AA@JCAD@B@@B@@CBA@@BAD@@BH@ACC@@@@@@@EB@AWBKA@EC@CAA@@@AAAAA@@ACC@BWF@AA@ACACKHCEKBAEOBAAC@AAK@AEDAHAAA@@@CAEAA@@CCA@AE@@@A@@CAA@@@@CI@CBE@A@AC@AA@AAE@A@C@AA@A@@@@BA@@@A@@AA@@@@C@@@BABABB@@D@BBBAF@B@BA@@@@A@CAA@@@@CF@D@BAD@@@@AB@BAB@FA@@B@@@@B@@B@@BBABA@@B@@BBB@@B@B@@@F@HAFCRE@@@@@D@@@B@@@@FCB@B@@AB@DAD@F@B@@@B@DADAB@@A@@AAA@BA@@@AA@@A@@A@@A@@@@@A@@@AAA@@@A@@@@A@@AAA@@@AAEB@@ABAB@BA@@BAA@@@CA@@@A@@@AAA@@@@@@AAA@@A@ACA@@@A@@AAA@C@@@@A@@BA@AB@BA@AB@BA@@@@@A@@DAF@BAB@DEBCBA@@DABAB@BAA@@@@A@@@@A@EA@@@@@@BADAB@DABABA@@A@@@@A@@@AB@@AB@@@@@@A@@BA@A@@B@@AB@@CB@@A@@AA@A@@@@@AAAAAAAAAA@AACA@A@@AB@B@@A@ABABA@C@@@@@CD@@A@@@@@@A@@AA@@BEB@@A@@@@@@C@A@A@C@A@A@A@@@@@@ABA@@@@@@AA@@@ADC@@C@@@@@A@@@@@A@BC@@@@@A@@A@CB@BA@CAA@@A@ABA@AB@@A@E@A@@@A@@BA@@B@@AB@@@@A@@AA@@@A@@D@BAFEB@BA@@@ABABC@ADA@@B@B@@@B@@ABAA@@A@@B@@@@@@AC@@@AA@CAA@@@@@A@AAAA@@@A@AAA@A@AAA@@@@CAAA@CAA@@@AA@@@@A@@AA@@@@@@@A@A@A@@@@AA@AAA@@@@AGBC@A@@BA@AB@@A@@@@@CBC@A@@@EB@@CA@@AA@A@@@ABA@@@@CA@@@A@AA@CAAAAC@@@AAAAA@@C@@AA@@CA@AAC@C@EBIBC@AAA@@@CE@AAAC@@AA@ACA@@@AA@@AA@@CBE@@CAAA@@AC@AA@A@AGEAA@AAC@@@A@CAC@AAC@AEACCAA@@AACAA@@@@A@@BA@A@@@AAAAA@@AA@AA@CAA@CC@@ACA@@@@@@BCB@@@@A@@BA@@BC@A@C@C@A@A@AAAAA@A@@AA@A@@@A@C@CAA@AA@AAAA@@@E@A@AACBA@CAC@@@A@AB@@A@AAAAEAA@C@A@C@AB@@@@A@A@CB@@@@@@CDEFABCFABA@BB@B@BA@@@A@@@A@@@@B@@A@@AA@A@@@A@CCCBCBC@AD@@@BB@@@B@@B@B@B@@@B@@@B@@@BC@IB@@@BA@A@@@AAA@@@A@@@AB@@@@AAABA@ABA@CBABA@AB@@ABABA@@A@E@CMFIBEDCAID@@BBCBAB@BB@BBA@@B@@@B@F@@@@BDBB@@AB@@B@DBB@BB@@@@CDA@B@@@D@B@B@@@B@@@BB@@F@BB@@@BE@A@@B@@@@@@@B@B@@BB@@DC@@F@@@@@AB@@@@BBBB@@AB@@@BFDBBG@CBC@@B@@BBC@A@B@@B@@@@DBDB@@AB@B@@A@A@A@C@@@DBB@B@BB@@BB@@B@@BD@@@@B@@@B@@@BA@@@ABA@@@A@@B@@@BA@A@@@A@@B@@A@AB@@@@ABA@@A@@@@@@A@A@AB@@@AA@@@@B@B@@@B@B@@@BBAB@@@DA@@@@LCBA@@BA@A@@B@@@@@BBDD@@B@B@B@B@@@@BB@@B@@@B@B@BBB@DBBB@@B@BA@@@ABA@A@iKAFBBB@@BEDBXAPFF@@@@DDLPRVB@BBC@TZFF@@@@RTNPXJ@@JHFH@@ABC@A@ABC@EBCD@@ADCB@@ABCBEBA@ABCB@BEA@DB@BBA@DBBCBBDA@@B@B@BBB@@BDDDD@FBBDDDDBDDDBBBBDBBBBB@BBBB@FBFBB@FBHDBBDDBBHFB@@BD@B@@@@@BD@DBB@B@BDBBBDBD@B@BBBBBBBBB@ABABC@AB@@@@@B@@@@A@A@A@A@AB@@AB@@AB@B@B@B@@@BEB@B@@CBABC@ABA@ABABAB@B@D@BA@CBA@A@ABA@CBA@A@ABCBA@CDABED@@A@C@A@@@A@@BA@@@E@ABA@AB@BA@A@@B@BA@CBE@CBCBAB@@ABC@@@@B@@@BBB@@@B@@@BBB@BBB@@@B@@@@@@@@@BBD@@BB@@A@@@A@@@@@@@BDB@@A@@@@B@@@@@BA@@BA@@BA@@BA@@@@B@@@B@BA@@@@@@B@@@@@@@@@@@@@@BAB@B@@@@@@@B@@@B@BA@C@C@@@@@@@@B@@@@@@@@B@@@@@@@@B@@@B@B@@B@B@B@BAB@B@B@B@B@B@@@@@@@HEBB@@EDB@AB@@CDID@AEFB@@@@@BA@@BA@@@@B@B@@@B@BA@@B@@AB@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@AB@@@B@B@@@B@B@@@@@B@@AB@BABAB@@A@@@@@@@@A@@@@@@AB@@@@@@@@@@@B@@@@@@@@@B@@AB@@@@@@@B@@@@@BAB@@AB@@@BADAB@@@@@BAB@@@@@@@@@B@@@@@B@@@@@@@B@@A@@B@@@@@@@@AB@@@@@BA@@@@@@B@@@BA@@B@@@B@@@@A@@@@@@@@@@B@@@@@BA@@@@B@@@@A@@B@@@@@@@@@@A@@A@AA@@BA@@BAB@@A@@B@@@BA@@B@@@@@B@D@BBB@@@@@@B@@@BA@@@@B@@@@BB@B@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@BB@@@@@BB@@@@@@@@B@@@@BBD@HAJ@D@F@J@DBD@@AB@DAF@P@DAD@D@BBB@H@B@B@D@HEDAD@D@FADBB@FCDAD@BADABAD@DAD@D@LAPCDAD@D@B@D@D@FAFAD@B@DBHABADADBF@B@DBDBF@D@H@BDJ@D@HBDABBBDBBJBD@DAD@D@B@B@H@D@BBDBF@D@@DB@D@D@F@DBB@BAB@BB@@BB@@FBB@B@BAB@@@@@@@@A@@B@@A@@BA@@@A@C@@@@BA@@@@@AB@@@B@BAB@B@@AB@@@BAB@@BB@B@B@@@B@@@"],"encodeOffsets":[[122044,43334]]}}],"UTF8Encoding":true});}));