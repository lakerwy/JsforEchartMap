(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('石屏县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532525","properties":{"name":"石屏县","cp":[102.484469,23.712569],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DF@@B@HBF@H@HBJBJBHDHBJDFBF@BAFAB@DAF@FDBBFBL@L@J@JBFBFDHDB@@BBBB@FBBBD@BB@BBBBDBDBF@DADABCBCBC@C@CAE@@@C@GAA@CAC@EBC@AD@BCFCFADAFADAFAD@B@BBBJ@DB@BBB@@@BA@AD@B@BB@BBDDDBHBLDB@@@BADCDBF@F@DBDBFDD@D@B@BADCFAJ@DAFAFBNJF@B@BABCFI@CDAD@D@HBF@DABABAAACA@ABADABAB@DAD@BABAB@D@D@DADABABAD@BCBABABADA@@@ACCCCAAACCA@A@@BABADAHABADCDAD@B@F@FDHDFDFBD@B@B@DCDADAD@DAD@DBDDB@F@B@D@B@B@BDBDBBDBDDDDDDB@D@H@HADABA@A@AA@AC@ABCBCBA@AJAHKFSFA@@FGDABADBDBFBH@F@FBDBBDBDDBH@DBBDB@D@DCHEFAFBD@BABGDEDAHBLFJF@B@BDB@@B@DADADAD@B@BDDB@@DDBBBBBBBBB@@@BBD@B@BBBBF@F@D@FCFGDCBEACCCSAEAAC@ABAFAJAR@PAFADABCBC@E@CBADABC@ABAAA@AAAA@CAEAACACAACEDA@CD@DADADCFA@ABEBEBE@ECECGCC@@@EAAAA@CA@GIAA@AB@JCFE@A@A@CA@@ABC@@FA@AB@@A@@@AECACCI@A@@BAD@F@F@DADABABABC@AII@A@A@AB@B@F@JNDDFDLHB@B@@A@@AE@C@AD@HBBBDBDBDBB@DG@CACGECEAEBEBKBEBAJ@H@VHD@BA@CBE@EAA@CAA@@ECCCCACCAAEEEA@@@A@C@CCAAAC@C@G@A@AAAC@E@ABCBGCCAGBEBEBEDABEAEAC@CBC@CDC@CGAAABG@AAC@G@CDE@E@C@C@CAC@ABGCEAEAEECC@C@C@A@CAG@E@EAG@CAE@C@C@E@CBC@CBEBCCB@@ABA@@AAAAAACCACAA@A@ABAB@BA@ADCDADA@E@IFADCDBD@BC@@DCDCBGBCAECCCG@A@A@C@CACAEAGAE@EACAEDCBABCFABADAFAFADC@@DAJCFCDCFABAJAB@FAD@DAF@PCHAFABEBEBE@EAGAEEAGAGAC@AA@AAC@EAAAE@E@EAA@CQKA@A@EAE@ACAABC@C@CAAAAAAC@A@E@C@AAAC@E@A@CAAAAGAEAACAGAEACAACAAACAACCAACCACACACACCAC@CECACCAACCC@C@CACAACAAAC@CAEACACC@C@EAEAC@ABA@AAAAC@@@A@@A@@@@@A@@@@@@@@A@@@@@@@@@@A@@@@@@@A@@@@@@@@@AA@CAABADCBCBCBADADABADABCBABGEAEAAACAEAAABGDEDCFC@AHCT]FAHCFAHCD@BECCGAE@EAE@EAC@CCAAECC@AACCCCAEDK@EAAAE@ACCAA@E@C@CBAFAD@FA@AHCDCHCLEDC@C@CC@AAACCKBCDEBEBEDE@EDCBCDEDCBCDADA@CCCEACCAACAAC@ABEBABCBCDCDE@E@CACAA@CAC@ACEGQEM@@CAA@ABABC@C@CBCBCBA@C@A@ABABAD@BADABCBABA@I@A@A@CBABA@@@A@CB@@AB@BABABAAC@CAEAC@A@A@@BABA@G@A@CB@AA@AAA@CBABIDCBABABBBBBBDDBADBBB@BB@B@BC@EFCBABA@CB@BABABA@C@C@A@C@CBC@C@EBCBAB@@ABABA@CBABAB@@A@A@A@A@A@AAAAA@A@C@ABEBABABC@C@A@AAAAAAAAA@AAC@ABABCDABABAD@D@B@DADABABABAB@BA@A@A@@@CA@@AAAC@A@EA@AAA@A@AAA@C@CACBABCBABABCDABCBCBC@A@A@A@ABA@C@C@CBCBA@A@A@C@A@A@A@AA@@A@@AA@C@A@A@@@CB@@C@A@CA@@AAA@A@@@AAC@A@@BA@A@C@A@AA@@A@C@A@A@C@A@CBC@A@AB@@ABA@ABA@@@A@A@@@ABA@@@A@ABA@A@A@C@@@AB@@A@A@@@A@A@A@@@ABA@@@AB@@AB@DAD@BABABABA@@@A@ABA@@@A@@@A@A@@@A@A@@BA@@BA@@@A@@BA@AB@@A@@BA@@@A@A@A@@BA@ABAB@BA@AB@BA@AD@@AB@@@BBB@@@BBB@@B@@B@@@BB@@@@B@@@@@BB@@BB@@@@B@@@@@BA@@@@B@@A@@B@@@B@@B@@B@@@@@B@@BB@@@B@@@@@BB@@B@@@@BD@@@BB@@BBB@@@B@BB@@@@@@B@@@@@@@@@B@@A@@BA@@@@B@@@@@BB@BB@BB@BB@B@@@BB@@B@@BB@BB@@B@@@B@@@B@B@@@@@B@@@B@@@B@@@B@@@@BB@@BB@BB@@@@B@@BB@@B@BBBB@BB@@BB@BBDBB@B@BB@@B@@@@@@@BB@@BB@@@B@@B@@B@@@B@@@@BB@@BB@@B@BBB@@@B@@@@@@BB@@@BB@@@@@B@B@B@B@B@D@@@BB@@B@@@@A@@B@@@@AB@@CBABA@@@@@@B@@A@@@@B@@B@@B@@@@@@@BB@@BBD@@BB@BBB@B@@@B@@@@@B@B@@@@@B@@@@ABAB@B@BAB@@AB@BABAB@@@@BB@@@@@B@@@BB@AB@@@@ABABA@ABA@A@@@CBC@A@@@@BA@AB@@AB@BABA@@BAB@@AB@@ABA@@@ABA@@@@BA@@@@B@@A@@@A@@B@@@@AB@@@@@B@B@@@B@@@@AB@@@@@BABAB@@@B@@@B@@ABCBA@@@A@@@A@AB@@CB@@AB@@@D@BBBBB@BAD@D@@@BBDAD@@BB@@BB@@@BBF@D@B@@@B@@AB@BA@@BA@EF@@@BA@@@@@A@@@@B@@@BA@ABEBA@@BA@@@@@@B@@@@AB@BABIF@BCB@@AF@FBD@BBD@B@B@@CDAD@BB@AB@B@B@BAB@@@@@B@@@B@B@@@BA@@@@@AB@@@@@B@@@B@@@B@@BB@@@@@BB@@@@@@@@B@@A@@@A@@@@@@@A@@A@@A@@@@@@@ABA@AB@@C@@@@@A@@B@@@B@D@@A@@B@@A@@@@@A@CA@@A@AB@@ABAB@@@B@B@B@@@@BB@B@@@@@@@B@@A@@B@@A@@@A@A@@@A@@@@@@@A@@@@@AB@@A@@B@@AB@@AB@@A@ABA@@BA@@BABAB@@@B@@@B@@@B@@A@@B@@A@@@A@AB@@A@@@AA@BA@A@@@A@@B@@A@@BAB@@@@A@@B@@@@AB@B@B@@@B@@BB@@@@@@@@@BABA@@BA@A@@B@@@@@@@BA@@B@@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@B@@@@@@@@@B@@@B@@@@@@@@@B@@@B@B@@@@A@@B@@@@A@@@CB@@@@@@@@@@AB@@@@@@A@@@@@A@@@@@@BA@@@@@@@@B@@A@@B@@@BA@@@@B@@A@@B@@@@AB@@@@@@@@@B@BAB@@@@@@@BA@@@@@A@@@@@A@@B@@AB@@@BA@C@ABEBC@ABA@A@A@A@A@CB@@A@A@E@A@A@A@A@A@AAA@CAC@A@@@A@CA@@CACAA@C@AAEBA@ABC@ABA@K@A@C@@B@B@BCDABED@@A@ABA@AD@D@FADAF@HDJBDFFFHBFBH@FBFFDFBBF@@B@DBFBD@DB@@DBDDBDBBFBBB@@C@ABA@A@AB@@A@A@A@@@A@@BAB@BDHBBDF@FADEDCBAB@@@B@@@@@B@B@@AB@@AB@@A@@BA@ABA@@@A@@@A@@@A@A@@@@B@@@B@@BB@BBBB@@@@B@@@@@BA@A@ABC@ABA@@@A@AB@@AB@@@@@B@@B@@@BBB@BAB@@@BB@@@@@B@@ABA@@@A@A@@@A@@B@@A@@BA@@@A@CB@@ABA@C@@B@@@@@FAB@@@BEB@@@@A@@@A@@BAB@@B@@DB@@B@B@B@B@@ABA@ABC@A@ABAB@@@BBB@@BB@B@@BB@@B@@@B@@@B@BA@AB@@A@@@@B@@@B@@@@@BB@@BB@@@@BBBB@@@BB@@@@B@@@@@@@@@B@@@B@@@@@@AB@@@@BB@@@@@@B@@@B@@@@@@B@@@@AB@@@@ABA@A@@@A@@A@@A@@@@A@@A@@@@@A@@B@@@B@@@@A@@B@B@@@B@B@@@B@@BB@@@@DD@@@@B@@B@B@@@B@@@BB@@BB@@@B@@B@@@@B@AB@B@@B@@@B@BBB@@@@@BB@@@BB@B@@@B@@@@@B@B@@B@@@B@B@B@@BB@@@D@BAD@@A@@@@@A@@AA@@@@@AB@@@BB@@@@@@@B@@@B@@@@@B@@@@@BB@@BB@@@BB@@@@@BB@@B@@@@@@@@@BBB@@@@@B@@B@@@@BBB@@@BBD@@AB@@@@@@A@@@A@@@A@@@@B@@@B@@@@@B@@BBB@@B@B@@@@B@@B@@B@@@@@@BB@@B@@@@B@@@@B@@BB@@@B@@@B@B@@@B@@@B@B@@@@@@@BBBBB@@@@@B@B@@@B@B@@@@@@@BB@@@@B@@@B@@@@@@@BB@@@@@B@@@B@@@@@B@@A@@B@@@@@@@B@@B@@@D@F@B@@@B@@BB@@BB@@B@@B@@@BBB@B@@BB@@@@B@@@@AB@@@@@@@@B@@@@B@@B@@@@@@BB@@BB@B@@BB@@@B@@@B@@@@B@@B@@@@@@@@@@A@A@@BA@A@@A@@@A@@@@@@@@A@@@@@@BA@@@@@@B@@@B@@AB@F@@@B@B@@B@@@@@@B@BBBBB@@@BBB@@@B@B@B@B@BBB@@B@B@@DD@BB@BBB@D@B@B@@@@AB@@A@@@@BA@A@@@A@@@@@A@@@@B@@A@@B@D@BA@@@@@A@@@@B@BA@@@BB@B@@@B@B@@@B@@BBBB@@@@@@@B@@BD@@B@@B@@B@@B@@@@B@@@@B@@BDBB@@@@BB@@@@B@@@B@@@@BB@B@@@@B@B@@@BD@B@@@B@@@B@B@B@@BBBB@B@@@@@B@B@@@@@@@@@B@@@@@@BBA@@@A@@@@@A@@@@@@@@@A@@@@@A@@B@@@@@@@@@B@@@@@@@@A@@@A@@A@@@@@@A@@@@@A@@@@@@BA@@@A@A@@@@@A@@A@@A@@@CAAA@@@@AB@@@@A@@@@@@B@@@@@@@@@@@BBBBB@@@@@B@@@@A@@DB@@D@B@BBB@B@B@@@@@BA@@@@@@B@@ABA@AB@@@@AB@@@@B@@@@BBB@@@B@B@@@BBB@@AD@B@DAB@B@@@@BB@B@@AB@B@B@@@@@@@B@@@@A@@@@@AB@@ABA@@@@BA@@B@@A@A@A@@@AB@@A@ABA@@@@@AB@@@@@@AB@@A@@BAB@BAD@B@BA@@@AB@@AB@@AB@@@@@BAB@@AB@@@B@B@BAB@BABA@AB@@@@@@@BA@@@@@@BA@@B@@AB@@@B@@@@@BA@@B@@@@@@@@A@AB@@@@@B@@@DAB@B@@@B@@@BABA@ABA@A@@@AB@@@@@BBDBF@BBB@@@B@F"],"encodeOffsets":[[104682,24597]]}}],"UTF8Encoding":true});}));