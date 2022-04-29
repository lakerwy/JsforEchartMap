(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('漾濞彝族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532922","properties":{"name":"漾濞彝族自治县","cp":[99.95797,25.669543],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCDAFADAD@DABABABABA@@BA@CBABCDCBADABAB@BAAA@CBABCBCBABABAB@DAD@B@@A@C@ABE@CBA@C@C@ACCAA@A@@@A@A@CBC@ABC@CBCBCBCBABEDCBA@ABA@A@ABABC@AB@DABCDAB@@C@ABC@ADCBADCBABA@ABA@AAC@A@AAC@A@C@ABA@CBA@AD@@ABCBCBCBCBABAD@B@B@B@BADCDCBCBCBABCBABADABCDA@ABADABABCDA@ABABABC@E@C@CBABCBC@A@A@A@CBABEBABC@A@A@E@CBCBC@C@ABCBAB@BADC@ABC@C@ABABCBCBC@A@CB@BCDAFADADADA@C@C@C@ADCBCD@DCBADABA@@@C@CBC@ABCBABA@A@AAAAAAAAC@EAAAACCACCCACECACAEAC@C@A@ABABCDADADCDCBADGDEFGBCBA@CA@@@@@A@@BA@@@A@A@@@A@@@A@A@@@A@AA@@C@AAAAAA@@A@@@A@A@AAA@A@ABC@A@A@AB@@A@A@ABA@A@A@AB@@A@@AA@@@A@@@@@@BA@AB@@@@@@A@@BA@@@A@A@@@A@@BA@@@AB@@C@CB@BA@@@C@@@A@@BA@ABABCBADCDA@ABA@AA@@A@A@@@A@@BA@AB@BA@@@AB@@A@@@A@@@A@@@A@@@A@@BA@@@A@@@@@@@A@@@A@@@A@A@A@@@@@@@@A@@@A@@A@@@A@@A@@AAAAA@BA@AAACC@@@A@AAAAA@AA@AA@@ABAAA@E@@AEA@ACA@AAAAA@C@A@A@A@AA@AAAC@@@EAACA@AAAAC@CAC@CA@@A@@AA@@@@AA@@A@@@A@A@AAAAA@CAAAAAA@AAA@AAAAAC@@AC@A@AAAAA@AAA@A@A@@AAAA@@AAAAAA@A@A@A@AAAAEAAAA@AAA@EACAABA@A@C@E@CBABADEBCBCBC@E@E@C@A@@@A@CAC@CAC@A@C@@AAAAC@C@CACAAAAABC@CB@FEBAB@BABC@AAAAEAACCAAECAA@A@ABA@AD@DAF@B@D@BBDBFDBBBA@@BB@B@@F@B@B@D@DCB@DABA@A@ABABCDA@CBA@@@A@C@ACCACAACCAAEEAAAAAAAAAAACAA@ABADA@@B@DAB@B@@ABA@A@A@A@A@AACAAACA@CAAAB@BABABCB@BADABABADA@ABCB@@ABA@A@C@A@ACAAAA@@@A@@@@AAAA@AACCCA@A@ABCBAB@B@B@DBBAB@BA@A@@@AA@@@CAA@AA@A@@@ABCB@FABC@C@C@C@A@AAACC@@@E@CACBA@@@CBA@@AAACAAAACC@A@AAA@@@AACCA@AAAA@@ACEAC@CAACCAAAAAACAAAA@@@A@AAAAC@AAA@CACAC@AACAAA@@BA@A@ACAAA@BG@A@A@A@CACAAAAAC@CAE@AAAAAE@@AEACACAEACAECEAA@CAACCAAAC@CAE@@@C@C@AAACC@C@ABC@AA@CCCACCAAABCBCBCBCBCDCDCDEFABCBCAAA@@ACAACGAAACAEAC@CAAA@C@ABABADABC@CBEAA@@@CDABFFD@FDBB@B@@@BCBCB@@A@IHABA@CBCBEBEBEBEBADBB@BDDDBDBFDBBDBF@D@@B@B@B@B@FBB@DDBDBFBDBFBBB@B@D@BBDDBBDDDBBBDDDDBDDBDBD@DABABA@AAEAA@C@@BBBBDBB@D@@ADABABABABAB@BB@@DBD@DABABC@ABCBCBEBABCBCBCBA@CAC@AAABA@ABCBABCBAB@FBDBDBBFBDADAF@F@D@DBF@D@@BBB@DBD@D@BABABAB@BBB@BAB@BC@E@E@G@G@EAEAC@AAA@C@ADCBABABCBC@E@CBABABAB@DABABABABCBAD@B@D@B@DBDAB@DADABCF@B@BBB@BBDDDBDBB@B@BADADA@ABABCBABABC@C@C@EBCBAB@BBBBB@FBDAD@D@DADABABADADABBB@DBBDDD@DBFBDBBDBB@BAB@BBB@BAD@B@D@B@D@D@B@BABA@AD@B@@DBDBDBDBBD@BA@@@A@@@A@AB@DA@@BCB@@A@CB@@CBABC@@@CAC@@@A@A@ABAB@@A@@@@AA@@AA@A@A@A@@@@D@B@@B@@B@B@B@@@@ABA@AB@@@BA@ABA@A@@BA@@@@B@@@BBB@@@B@B@BBB@B@@B@@B@B@BAFAD@@ABA@A@AB@@@B@B@B@@@B@B@BBB@BAB@@@BA@A@@BBB@@@B@@A@@@AB@@AB@@@D@@@B@B@@@B@B@@AB@@A@@B@@A@AB@B@@@D@@@BA@@B@@@BA@@BCB@@AB@@@BA@@@E@ABA@A@A@AB@ACAA@@@A@AB@@@BBDB@B@BBB@@B@B@B@B@B@@@BA@@BBBBDBD@@@BAB@@@BB@@BBBB@@B@B@@@BAB@B@@@B@BBBB@BB@@@BBDBDDB@BBBBBBB@BBBBBB@@@BBB@@@BBB@@@DBB@@BBB@BBB@BB@@@BB@BB@@@BBB@@B@B@DB@@D@@@BBB@BB@@B@@@B@@B@@@B@@@@@@B@B@B@@AB@B@@@@@D@@@B@BA@@@@BAB@B@@A@@@A@@BAB@@A@A@CB@@C@ABC@A@A@ABA@CBABA@ABAB@@ABAB@B@BBB@B@@ADAD@B@@A@@BA@AD@@A@A@@A@@@A@@A@@AA@A@@@A@@@AACA@@A@C@A@@AA@A@AA@AA@@A@@AA@AAA@@AA@AA@AAAA@@AAAAA@@AA@AA@@@ACC@@AA@@C@AAAAA@AA@@AA@AA@A@@AA@@AA@@@A@A@C@C@@@A@A@AB@@A@A@A@@AA@ACCAA@CAA@AA@AAA@@AAA@@AAA@@@AAAC@AACAC@AAC@@@A@@@A@@@ABAAA@A@@@AAA@A@@@AA@@@@@AA@@@@A@@CA@@AA@@@@BA@@@A@@A@@@C@@@@BADA@@BA@AB@@A@A@AAA@@AAB@@@BA@A@@@A@@@@BABAB@@ABC@A@A@@@ABADA@@B@B@@@@C@A@A@@@A@@@A@AA@@@BA@@B@@@@ABA@C@@@ABA@CBA@@@A@A@@@ABABA@@@ABAB@BA@@BA@AAAB@@A@@@@B@B@@ABAB@@C@A@A@@BAB@@C@A@AB@@@@@BBF@@AB@BA@CD@@@@@B@@BBDBBB@BBB@@BB@BB@BB@@DD@@@BBBBB@B@@@BB@BBB@@B@@BBDDBBB@@@@B@@@@@B@@@B@@@B@@@B@@@D@@@@B@@B@@@@@B@@BB@BA@@B@@AB@@@@@@BB@@@@@B@@@B@@@D@@@BB@@@B@B@@@B@B@@@B@BBB@DBB@@@B@D@@B@AB@@@@@B@BABBB@B@@@B@@@@@B@@@@@B@@@B@@@B@@@@@B@@@@@BAB@B@@@B@@@B@@@B@@BB@@@@@@BA@@BA@ABA@ABAB@@@B@@@B@@A@@B@@A@@B@@@@@B@@@BA@@@AB@@A@@BAB@@@@ABABA@@BA@@B@@A@@BAB@@AB@@@@@BB@@@@BA@@@@@A@@B@@A@@B@@@@ABA@@BA@@B@@AB@@@@@BAB@@A@@@AB@@@B@@@BA@AB@BA@@@AB@@A@@B@@A@@B@@@@A@A@@@@@AB@@@@@@@@@@@@@B@@@B@B@@@B@@@B@B@@@@@@@B@@BB@@@B@@@B@@BB@BB@@@@@@B@@B@@@BB@@@B@@@B@D@B@@@BAB@@@@AB@@@@@BA@A@BBBDBBD@D@BBD@BBFBB@DBB@@@DBBB@AD@DA@@BADAD@@@BBDBDBBBBDBBBD@BAB@B@BB@DBBB@AB@BCBCB@B@B@DBD@B@BABABABCBAB@@@FD@@B@D@D@BBBB@B@BB@BB@@B@B@B@@ABABCDA@AB@@@@BAD@B@@BDDB@@BBB@B@D@BAB@@@@@@ABA@ABBBAD@BBB@@@BBBA@C@CB@BCDAB@BAB@DBFDBDBDBBBBDAD@DBB@@@B@B@B@@AB@BADC@@B@@@HBBB@@@BAB@@@B@@BDDBJF@DDFDNBD@BDB@BAB@BCBA@ABABA@@@C@A@CA@@ACCAAAC@AC@@AA@DAH@BAJ@F@@BBB@B@F@BBD@@DB@@BAB@BABABBD@BBD@D@DAD@B@BABADAD@BBDBBBBBDDB@B@DAD@B@BBDDBD@BDBBABCBA@C@CBCBE@EBC@@DBB@D@DBBBBBBBBBBD@BBBBBDBBBDBBB@JHJH@BAHAD@F@@BBFDFDDBB@BBBD@D@FB@@DBDDD@DBDDF@B@B@D@D@@BBBBBDDDFDFDDBDBDBFBDBDBFBD@BBBB@B@BBBB@B@@@D@BAB@@BBA@ABA@@BA@@DC@ABAB@D@B@BA@A@A@A@@B@B@@AD@B@B@BABCBCBAB@BAD@BA@@B@BA@@B@BAF@BA@BB@B@@@@@FG@AB@@@B@B@@A@@@A@A@@BA@ABAA@@AAA@@@@@AB@B@B@@@@A@A@@@ABA@@@C@ABA@@B@@@B@DGBC@ABC@A@@DABAB@BAB@@@BA@A@AA@@ABCB@@@@CBA@@@A@A@A@AB@@AAE@A@A@@@A@A@@BA@@B@@AB@BAB@FAB@BAB@B@B@B@@A@A@C@A@@B@B@B@@BBB@D@D@FAD@F@BBBDBD@D@B@D@B@FB@@@BDBFDDBBBDBBDBBBDBBDF@BDDBBDD@B@@BB@F@BBDBBDD@B@D@BAB@DAD@BBB@BD@B@DBB@@BDB@DB@BBBBD@B@DBDBD@DBDBDBDAB@@CDC@C@A@C@C@A@A@ABC@A@A@ABC@AB@BA"],"encodeOffsets":[[102379,26487]]}}],"UTF8Encoding":true});}));