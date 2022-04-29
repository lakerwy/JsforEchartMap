(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('库伦旗', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150524","properties":{"name":"库伦旗","cp":[121.774886,42.734692],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@@@@@AA@@@@@A@@BA@@@ABA@C@A@C@ABA@@BCBC@A@@BA@A@C@A@@@@AA@ACC@@@AAG@A@G@@@CAC@A@@BA@@@@@A@A@A@A@@AA@@@@@A@@@A@AA@@AAA@@AA@@@@A@@@@@A@@@@@A@A@@AA@@@@@@@@@@@@AA@@@@B@BBB@BBHADADABG@EAA@KACAC@@@AACA@@A@@@C@@@C@ABA@A@@B@@AB@@A@@@A@@@A@@AB@@@@A@@@@AA@A@@@AA@@@@@A@@B@@AD@@A@CBA@@@A@@A@@@A@@BAA@@@@@A@A@EBC@CBA@A@EDA@E@C@C@A@@B@BBBBB@BABADC@C@A@ECC@A@ABGDCBEBEBIBG@A@A@A@ABCLAFCDA@A@C@EAECGAE@C@AB@D@BBDBB@BADA@EBEBABA@A@C@A@MECAA@A@@A@A@A@ABA@@@A@@@AA@@ACAC@CAA@A@CACAC@E@G@AA@@A@AAAEACAAA@AAC@CBKDGDGBG@CBE@CACAAC@C@EAAACECCAAA@BABAJA@@BA@CD@@A@C@EBC@@@A@C@EAAAAC@@@ABC@EBC@@AA@AA@A@C@A@E@C@C@ABA@I@EBAAA@@@@CCAAC@@@ADGFKBABC@A@CAC@AA@CAC@CBCDABA@ABA@AAEAACAA@AA@@A@AA@@@@AC@AAA@@@AA@@@@BABADABA@A@@@AAAAAAA@@AC@@@A@@B@@A@@@A@A@A@@BABABA@@@A@AA@@@AA@@A@@AA@A@A@@@ABAB@@@@@BAB@@A@ABC@@@A@AAA@AAA@@A@@@@@@@A@@@@A@@A@A@@AABA@@@AB@BAB@B@@@BB@@@@BB@@B@BAB@@@B@D@B@B@B@B@B@@ABA@@@A@@A@@@AAA@@@A@AA@@@@AAA@A@@@A@AAA@A@@@@@G@@@A@@AA@@A@@@AB@@AB@@A@@BA@@@@BAB@@@@AB@BABA@A@@B@@@BAD@@@BAB@@@@AB@@@BA@@@@B@@AB@@AB@@@B@@A@@@@A@@AA@AA@@AA@@A@A@@@A@A@CC@@@@@A@@BA@ADCBCBA@@BA@A@A@A@A@@AAAAA@AAA@C@A@@@ABABABA@@BAB@@@B@@@@@BAB@B@@A@C@@@A@@@AB@AA@A@A@AA@@@A@@BAB@@@@@@A@@BA@@@A@@BA@@B@DADA@@DA@@BA@AB@@AA@@@@@AAA@@@@A@C@A@@@@@A@@@@BA@@@A@@@A@@@@@A@@@A@@@@A@@A@@@@@AA@@@@@@@A@AA@@@A@@A@@A@@@AAA@@@@@@A@@AA@@@@@@@A@@@CA@@@A@@@@@AA@@@CAAAAA@@@@AAA@@@AA@@@@A@AAA@@@C@@AC@CAA@AA@@@@A@@@A@AA@@A@AA@@A@@AA@@A@@@A@@@@BA@@@A@AAAAA@@@@@A@@@A@@@A@@AA@@BA@A@@@AAA@@BA@AB@BA@A@@@A@AA@CBE@CB@B@BBB@B@DABABC@ABABA@A@@@AAAAAA@A@A@ABC@A@A@A@@@AAAAACAAAAAA@A@@@AAA@@BA@AD@DAD@D@@ABABA@@BA@A@A@A@@@A@A@@@A@@@AA@@A@@AA@@@@@@A@AAA@A@@A@AAAAA@@AAA@A@@B@@A@@@AEI@A@C@A@@@AAAAA@A@A@AAA@A@@AAA@@@A@AA@@@@AA@@A@@A@@A@A@@@A@@A@@A@@@@@@@A@A@A@@@A@A@@B@@@@@B@B@BBB@BBB@@BBBB@B@@@B@BAB@BA@@BA@AB@@AAA@ACAAAAA@AA@@AAC@AAAAACAA@AAA@@@A@@@@@A@@A@@@@A@@A@@A@@@@A@@@@A@@A@AA@@AA@@@@@@A@@@A@@@@@A@@@@@@@@@A@C@@@A@A@@@AAA@@@@@A@@@A@@AA@A@A@@A@@A@CAA@@@@A@@@@@@@@@@@@@@@AA@@@A@@A@@@AA@@@@@@@A@@@A@@@CB@@A@@@@@A@@@A@@AA@AA@@A@@@A@@@A@@BA@AB@B@C@A@@@A@@@@AA@@AAA@@A@AAA@@AA@@@@AAA@@A@C@@A@AA@AAA@@@@ECACA@AACC@AA@AAACA@@@@@@A@@@A@@@@@A@@@AA@@AA@@@@AA@@@@AAA@AA@@AA@@AAAA@@@AA@@AA@@A@@AA@AAAA@@@AA@@@@@A@A@@@AAA@@AA@AACA@@C@AAA@A@AAA@@@A@A@@@A@C@@@AA@@A@ABA@A@A@ABA@@@ABA@@@A@A@@@A@A@A@@@A@A@A@@@A@@@A@AA@@@@AA@@A@@@AAA@A@@@A@@BA@A@ABABABCBA@@BA@@@@BABABABAB@B@BAB@@@@A@@@A@@B@@A@@@@B@@@B@B@@@@A@A@A@@@@@@B@BBB@B@BA@@@@BA@@@@@AB@@@B@@@B@@AB@@@B@BA@@B@B@BA@@B@BBB@@@B@BA@@B@@@BADABAB@B@@AA@@A@A@A@AA@@A@AA@AA@A@AAAB@@@@ABA@@B@@@@AB@@@BA@A@ABA@ABC@@@A@@BA@@@@B@@AB@@@B@@AD@@@BA@@@A@@BA@@@A@@BC@@BA@@BA@A@@BAB@@@BA@@B@@@BA@@B@@@B@B@B@@@@B@@@DDBBB@BBB@@BB@@BBB@@@B@BAB@@@BA@@DAB@@A@@@A@@@A@@A@@A@@A@@@@@AA@A@C@C@@@@@@A@A@@@A@@A@@A@@@@A@A@A@A@@@A@A@A@@@@A@@@C@@@ABC@A@@A@@@@AC@AACACAA@@AA@A@C@A@A@@A@@@@@AB@@AB@@A@A@@@AA@@AA@@AA@A@A@@@AA@@@@AA@@@@AAA@A@@@A@@@A@A@A@@@@B@@A@@B@@A@A@A@A@ABA@C@A@ABA@A@AAA@CAA@A@A@CACAE@CAC@AAC@A@@@@@CC@@A@@@AB@@ADAB@BA@AB@@A@CA@@A@@@CFA@ABA@A@@@A@@A@C@AAAAAAAACA@A@A@@@A@A@@@A@AB@B@D@BA@ABABCF@@A@A@A@@@A@CBA@@BA@@AA@@@A@@BA@A@@@A@A@CBABA@@@AA@@AAACCA@@AAAAA@@AAAC@@A@@A@BA@@BAB@@@@@AACAAA@@@@AAA@CAA@EAA@AA@@A@A@A@@AA@@@AAABA@A@A@CBA@@@AAA@AAAA@@A@@@CBA@@@A@A@@AA@@@ABABA@@@ABA@@@A@AF@B@BABCB@@ABA@I@A@A@@@@@@@AAB@@A@A@@@A@@B@@A@@@A@@@ABAAA@@A@AAC@A@C@G@I@C@@@A@C@C@A@CAE@A@AAAA@A@A@C@CBC@C@AAC@A@ABA@C@@@C@A@@AAA@CBA@@@@@A@A@A@A@AB@@A@@@A@ABA@@@A@ABAB@@ABA@CD@@ABA@A@ABAAA@A@@@AA@A@A@A@@@@AAA@A@@@A@@@@B@@ABBBAB@B@@A@@@@@@@C@@@AC@A@A@@AA@A@@A@@AA@CA@AAA@@A@@AA@A@CAA@AAAAA@ECA@AAC@AAA@@@@@@@@@@@@@A@IAIAA@C@AA@@AAAAAA@@AAA@C@@@@AB@@CBA@@@AB@BAB@B@D@@@BAB@@AB@@@@AA@IEAAA@A@@A@@BA@A@A@A@A@A@A@A@AAA@CCIAACEACAAAAA@A@AAAAA@AAA@AAA@@AA@@AA@@AA@@A@@AA@@@AA@AAA@CAC@@@AAA@@@C@A@@AA@AAAAA@AAA@AAC@AA@@A@A@A@C@@BCB@@A@@@@@@@ABA@ABA@@@AA@@A@@A@A@@BA@@BAD@B@BA@@@@@@AAA@A@CACAA@@@@@CA@@A@A@A@A@@@@@A@AAA@A@A@A@A@A@AAA@@@A@A@A@@@C@C@@@A@@BA@@BAAC@C@@AC@@AAA@@AA@@@C@@BA@A@@AAA@@@@A@A@@@@@@CBAB@B@DAFCBCD@@DBB@BDEDADADABABABA@AJ@@F@@@ADEJA@CBBBBJBDABA@@BA@KCE@EBGD@D@@BDBFPJCHBD@@FBDBBBDBBFFDDHBF@@A@@@CAEAC@A@A@ABO@CBED@B@@@@H@HB@FDDBBBBDBDBBB@B@HCACFIHCDWFCDLFBB@LIAK@KNMHQHIDIDBF@@ABA@AB@BADDDBDBDCDEHHBJBDB@@@B@BA@@B@@@B@@ADJDFDAD@DAD@HDFBBJHDDJHFD@FBBCBCDEFCJAFBBDBFF@@DBF@H@F@HA@@B@B@B@@@@B@@@B@@A@@B@@@BBBBB@D@@@@@B@@AD@B@@AD@BABA@AB@BABADAD@BFDFBB@@@@B@BA@@BA@@B@@BB@B@D@DAF@D@B@B@@BF@FFABB@BDFBCDAAA@C@@@A@ABABCDDHBDCJBCHE@AAAD@HFBAFD@CHH@@@DBBB@B@B@@@B@BB@BB@@A@AA@@CAGECAEBBBCJAFCDGJABCJAFODABA@CDEDBVA@AXB@AJE@AHDBAHEhIB@ZBDD@D@DBBBNLNJHJJ@B@@@BD@@B@@@@@AB@@@@@@B@@@@B@@A@A@@@@@@B@B@@@B@@@@A@@B@@@B@@@@B@B@@@@@ABA@@@@@@@@@A@A@@BB@BB@@A@@@A@A@@B@@B@@@B@@@B@@B@@A@@@A@B@@BB@@@@B@@@@@@@@@@@AB@@@@B@B@@A@@@A@@@@D@@@D@LBBFF@N@`SVENBD@B@@@B@B@HBLHTLdZT\\VJHBJBfUXQRmZONMFM@AHCBHFAV@NDX@@@@ELFHKR@RDFBDFFL@J@D@PDNBRBJ@FBH@FLDBBD@B@LCFGLEHGNCHGJCJBPBFTDF@L@HEJEBCFEDEJANAPCJAFDB@FBHDH@FDJDJFJCXE@CBEHAHCHEFCJ@HB@@HBDAH@PAPANAHAL@JAH@@@FDD@@BBBFDHDBDHDFH@FAF@D@FD@FBBBB@F@FBFBBBDBBD@BBBDFBDBB@DBB@D@BBD@BBDBB@BBBBDDDBBBBBB@DBBB@@BB@@B@B@D@BBB@@BBBBBBBB@BBB@BBD@B@@BDBBDBDD@B@B@BAB@B@B@@B@AFCJAJ@JAHLHVAR@LALAL@TGJEHCFBFEB@@@B@TEPCLE`CLDd^@RBHGNGNENCPJHCF@HHDJJDH@FGFBDBBLDBDCJBDPJBD@DBDBBDDBBCHBBHBBB@@AD@@CXbOBCVY^SraFA\\GIMNIJ@LK@CBAPIFEDE@ABADCB@P@B@BEHCVCNCNIJEJCHEB@DADC@A@I@I@G@GBABE@@DEFB@ADC@A@AA@@@A@@ADMBA@E@CAG@EAEAAAA@EAACCACACACDEDKBGFCHEHEJE@G@KBCBGBCDKDGBCHMLOFGJKBE@C@CAA@C@GDCBE@ABCB@FEDEDCBEBCAICE@G@@@IBOBCDGBGDE@GJODMDAD@HACIPF@CBAFGFEBGJGJKD@NEZSBC@EFQzGPYFMFALBD@J@D@BBF@DB^BH@J@`EBADAHETWB@@ABCBADGBCB@@@F@D@B@DAD@JAB@@@@AACACIAE@@CBE@C@C@ABA@@FKBGBA@A@@@@@ACE@C@@@A@A@G@EAA@A@A@@B@BGBGB@@ABABCB@@@@ABBJ@H@FBB@@@B@@@@@DEBCDCDEFEBABCBCB@@@@@B@H@J@H@F@B@B@@@@@AD@B@@@@D@B@B@B@B@@@@@FE@@B@@@F@DBD@@@@@B@DAD@B@B@@@@@B@@@@@@@B@@ABA@@B@@@BB@@@@@@B@@@@@@@BB@@@@BA@@B@@@@@BDB@@@@@D@@@B@@@B@@@B@D@HAB@B@@@@@BBFF@@B@@@DBB@B@@@@B@B@B@@@@B@@@B@@@@AFKDE@@@@@ANGJEFENGFCBCRKDAPGLGJEB@FCDADCHCDA"],"encodeOffsets":[[125140,43759]]}}],"UTF8Encoding":true});}));