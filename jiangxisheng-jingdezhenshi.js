(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('景德镇市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360202","properties":{"name":"昌江区","cp":[117.18363,29.273565],"childNum":5},"geometry":{"type":"MultiPolygon","coordinates":[["@@ABBBB@@@@A@AA@"],["@@B@@@@@@@@A@@@@@@@@@@@@AAAB@BA@DB@@@@@A"],["@@@@@A@@@ABA@AAA@@@A@@@A@@A@@AA@@@@CAA@ABAACAAA@AA@@@AA@@@AA@@@A@@@CA@@A@AB@@@AE@@DABA@@DCBA@A@@@@AA@@@A@@@A@C@A@@AAA@@A@@A@ABADADABAB@@B@BBA@A@EAA@@BC@@D@DAFADABABC@BD@D@@AD@BCBA@AB@BABBABBBB@@@BB@@AB@B@B@@@BFA@@BB@@@@@B@BB@@B@BB@@DB@@@@BB@@BBB@BB@@B@@@@B@@BBB@@@FC@BD@DAB@@@"],["@@AAAC@@@@AAA@AA@@A@@@AAA@A@@@@@@A@@BA@A@@@A@C@@@@@A@A@@A@@AA@@AA@@AABC@A@@@A@@BA@@B@@AB@@@@A@@@@A@@@@@@A@@@@AA@@@@@A@@@@@A@@@A@A@AA@@@A@@@@A@@@@A@@BA@@@@AA@@B@@@@@@@@@@A@@@@@AA@@@@@@@@@AA@@AACC@@@BA@@@@@A@BA@@@@@A@@@A@ABA@@@AA@@@A@@@@@@@AA@B@ABABA@@@@B@@AA@@@@A@A@@@A@@A@@A@@@@A@@A@@@@A@@@@A@@AA@@@A@@@@A@@@AA@@@@BA@AB@@A@@@A@@@AAA@@@@@AA@@@@A@@AABABA@@@C@@@A@ABA@A@@A@A@A@@@@A@@@@A@A@A@@@@@@A@AB@@A@@@AAAA@@AA@@B@@A@@A@@A@@@@@@@A@@@A@A@C@@A@@B@@AB@@@A@A@@@@@@@@A@@A@A@@@@BAB@@AB@@A@@@@@A@@BAA@@B@@@A@@@@@@@@A@@@@@@A@@@@B@@@@B@@@@B@@A@@@AB@@A@C@ABA@@@A@@@AA@@A@@BA@@B@@A@@@A@@@A@@BA@A@@@A@@@@A@@@@@A@@@@A@A@ABA@@@A@@@@A@BC@A@CD@@ABCB@B@@@B@@@B@@ABA@A@@BA@@@A@@@AA@ABA@@@CAC@AA@@A@@@@AA@@@@@ADA@A@A@A@@@A@@@A@@@A@A@AAA@ACA@@A@AA@@@AAA@@@@A@@@AA@@@A@AB@@A@A@@@C@@@AB@@A@@@@@@@A@A@A@AYM@@@AA@@@A@@@@A@@AA@B@AA@AB@@@@A@@AA@@@@@A@@@@@AB@@@@AB@@AB@BABA@@BA@@BAAABA@@D@@A@AAAAAAAA@C@@@A@@A@@B@B@B@@A@@@@B@@@@@DB@BA@@@@BD@B@@@B@@@BA@@@@BA@AD@@@BCB@DAB@@A@@B@@A@A@ED@@A@C@A@@B@@A@@BABABBB@B@B@B@B@@AD@@@B@@A@A@@BA@@@A@@DA@AB@@@BA@@@@BA@B@@B@@@@@@C@@@A@@@@BB@@@B@@@BBA@AB@@@@A@@@A@A@@@@B@@@DA@@@A@A@AA@@A@A@A@@@A@A@@BD@@B@B@B@B@@@BAAAAAA@@A@@BC@@B@@@@@@@BA@@@@A@@AACA@A@@A@@B@BBB@@@B@@@@@BAB@B@B@@@@ABBB@@A@@@@DA@@@A@@@@@A@@AA@AB@@@B@@@@@@@@AA@A@@AB@@AB@B@@@@@B@@A@@@@C@A@@AB@@AB@@@B@@B@@@@@@@@BA@@@@@BB@@B@@B@@A@@BB@B@ABA@@@BB@@B@@B@B@BBB@@AD@@@@@BEJA@A@EJCFA@@@AB@@A@@B@@@B@@@@@B@B@B@@A@@@BB@@@@ABAA@@AB@D@@@BC@@@A@AF@@@B@B@@@BBB@@B@@AB@@@@@@BBB@@@@@B@B@@@BB@@@@BB@BB@B@@@@CB@@@B@BAB@@A@@@@BABADB@@BA@@B@B@@B@@@BAB@@A@@B@@@B@@@BA@@@@@B@@ABAB@@B@@@BA@@B@@C@@@A@@BCB@@B@@@@@B@@@@@@@A@@BBABB@@@@@@BA@@BA@@@@B@@@@B@@@@B@@@BB@@@@BA@@@AB@@A@@@A@@@@B@@@B@@@@@BA@@B@@@@@BA@@BAB@@@@A@A@@@@A@@@BA@@@@A@@@@A@@@@@@@@A@@A@A@@@@BA@@BAB@B@@@@B@@@@@@A@@B@@@B@@@@@B@@@BAB@BB@@@@@@A@@B@@@@@BA@@@A@@B@BA@@B@B@@@@BB@@@@AB@@@B@@B@@@BB@@B@DBB@@BB@@D@@@B@@@@@@ABA@AB@@@@@BC@@B@@A@@@A@@AA@@@@@AB@B@@@@B@@@@@@BB@@BAB@@BB@BB@@@@BB@ABAD@B@@@B@@@@AB@@@BA@@BABBBAB@@@B@@@B@@@B@B@@@BAB@@@B@@B@B@@BB@@@@B@@@@B@@@BA@ABA@@B@@@@AB@@@@@B@@@@CBA@@@@@@@B@B@@@@@@B@B@@@BADAB@BA@A@@DA@@DAB@@@@@@D@B@@AB@@@@B@@BB@@@@@@BA@A@@@@B@@@@@B@AB@@@@@@B@B@@@B@@@@@@@BBB@@BA@@@@@B@@@@@@@A@@@@B@@BB@B@@@B@@@@@@ABB@@@@@@B@@AB@@B@@@B@@BB@@@@@B@@A@AAA@A@@A@@@B@@B@@@AB@@B@@@@@@@BBB@B@@@@@@@@@DB@@@@@B@@@BBB@BB@@B@@B@B@@@@@@@@@AB@@@@@B@@@@@B@@@B@@@B@@@@A@@@BB@B@@AB@B@@B@@@@A@@BB@@@A@@BB@@@@@@AB@B@B@@B@@A@@@@@AB@@@@@@A@@@A@@B@@@@B@B@@@@@@BA@A@@@@@B@@B@@@@@B@@A@@@B@@@@B@@A@@@A@@@@@@B@DAF@BB@@B@@@BB@@B@BA@@@@@B@D@B@@B@@BAB@@@@@BB@BBBB@@@AB@B@B@@@@AB@@@B@@@B@@@ABAB@@@@B@B@@@@@@@BA@@@BB@@@AB@@@B@BB@@@@@@@BA@BBA@@@@@A@@@@@@B@@BB@@@@@B@BB@@B@@A@ABADAB@@@B@@@@@@@BCB@@@B@B@B@B@B@@A@A@@B@@@@A@@@A@@@AB@BA@A@@@AB@@A@A@@@A@@@@@@AA@@@AA@@A@@@AAA@@@AB@@A@@DA@@B@@@DCB@B@BA@@B@BC@@@@@BB@B@@@B@@@@@@@BBB@@@@B@B@@@BB@@B@BB@@@@@BB@BB@@@@@B@B@@@B@@@@@@BBB@@@B@@@@@@B@@@@@@B@BBB@B@@@BBA@@@@B@@@@B@@B@B@@@B@@@@@BBB@@@BB@@B@@@BA@A@@@@BA@AB@B@@A@@B@@AB@B@B@B@B@BB@@@@BB@@B@@B@@BB@@@@@B@@@@@@B@B@@AD@@BB@@@@B@@BB@B@@@@BB@@BA@@BB@@B@@@@@B@@B@BBB@@B@@@@@@B@@@@@@BBBABBB@BBBBB@@B@B@@@B@@@B@@BBBBB@B@@@@@@@@A@@BB@@B@@@@@@@@@@A@@@AB@@@A@@BA@@@@A@@@@@@BA@@B@@A@@@BB@@B@@BABAD@DA@@B@@@@BB@@BBB@@@@@B@BBB@BA@B@@BB@DFB@B@B@B@B@@AB@B@@@BB@@@@BAB@BAB@@B@@B@BBJKBAB@@AAA@A@E@C@@BC@C@A@@@ABCBC@C@@@E@A@@@A@@BA@A@@BC@A@@@ABA@@@E@E@@@@BGBG@A@A@A@@@AAA@@@CEAC@C@E@@@A@A@A@ABA@AB@@AB@D@C@C@@@A@@@@B@@@B@B@@A@@@@@AAAB@A@A@@@A@@AA@@@@@@AB@@@BA@@A@@@A@@BAABA@@@@@@@A@A@BA@@B@@@@ABAA@@@AB@BCB@B@BA@@@AB@A@@@@@@@A@AA@@@@@AA@@@@@A@BAB@@AA@@@A@AB@@@@A@ABA@@@AA@@@@@@@A@B@@@@B@@@AA@@@@@@@A@@@A@@B@BAAAAAA@@@C@A@C@@@AA@@B@@AB@B@@@B@@@BA@@A@@@A@@@@@@@AA@B@@@@ABA@@@@@A@@A@A@AAA@@@@A@BABA@@@@B@@ABBBA@B@@D@@A@@B@@@@@BAC@@B@@A@A@@A@B@@A@@@@@AAB@@@@A@@@@@BA@@@@@A@@@@@A@@@@A@@@BAA@@@B@B@@@@AB@@@@@@@@A@A@@A@@@@@@BAA@@@@A@@@@BA@@@@B@@@A@@@@AA@@@@B@BA@@@@B@@B@@@@B@@C@@@@AA@@@AA@@@@@@AA@@@@@@@@@AAAFEJ@DCB@N@D@F@DCFAHBBADABBD@B@J@ADE@FBFBDDD@BCFI@E@GFQ@@@@"],["@@CCCCA@@@ADBB@B@B@B@@B@BB@@@BB@DDBC@A@A@@@A@@AA"]],"encodeOffsets":[[[120003,29960]],[[120091,30007]],[[120097,29998]],[[120032,29906]],[[120020,30030]]]}},{"type":"Feature","id":"360222","properties":{"name":"浮梁县","cp":[117.215066,29.352253],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAAAA@@@AA@A@A@A@@AC@@CA@@AA@A@@AA@A@@@A@@BA@@D@BCBAA@@@@AAA@@@@@AA@ABA@AA@@A@A@@AAB@@@@@@AB@BA@A@@@@@@BB@@BB@ABCAEA@A@@A@A@@@A@AAA@A@AF@B@DAB@@A@@@@B@B@B@B@@AB@BCD@BAD@@A@@B@BABAB@@@@@@@BB@@B@@@B@@@BAB@B@@@B@@AB@@AB@@@BA@@@ABABABA@@B@@@@@@@BB@@@@B@B@@AB@B@@BB@BBB@@@@@@B@@@B@D@BA@BB@@BB@@BB@@@@B@B@@@@@D@B@@@BAB@@@B@@@@B@B@BB@@B@@@BBB@BB@@@@BDBB@@BAB@DA@AB@B@@BBAB@@@BB@@@B@B@@@B@B@BBB@B@BBB@@B@@@@@BB@B@BB@@@BD@BBD@@@@@@B@B@@@@B@@@BB@@@@@@@@@BBBA@@B@@B@@B@@@B@BADCBAB@B@B@@@BCB@@AB@BA@AB@@@B@@@B@@B@@@@B@@@BBBB@@@B@@B@@B@@@BBB@@@@@B@@@B@@B@@B@@@B@B@@@BBA@B@@B@@BBB@@@BB@@D@@@BB@B@@B@@B@@@@BB@@@B@@B@@@@B@@B@@@BB@@BB@@B@@DD@@@@@B@@B@@@@@BD@DA@AD@@@B@B@@@DB@@BAB@@@BB@@@@BB@BB@@@B@D@B@@@B@@BB@@@@@BABCD@@ABCB@@BF@@A@@B@BB@@D@@@B@@BB@@B@@B@@BBB@BBBDAB@BBB@D@@B@@BB@@@@B@@@B@@BB@BAB@B@@@B@@@@B@ABB@BD@@A@B@@BBBDDBBB@@BB@BB@B@@C@AFAB@@ABA@A@AB@@BBBBB@@D@B@B@@@BA@@@ABA@A@A@@@@B@D@BA@@BAB@B@BB@@B@@ABBD@@@B@DBB@@@@@B@@A@@BAF@@CD@B@@A@@A@@A@@@AB@@AA@@A@A@@@A@@@@A@@A@@B@AAA@@@@AA@@ABA@@B@@A@@BA@A@@@@@@@AA@@@@A@@@@AA@@A@A@@AA@A@A@@@@AB@@A@A@@@@@@B@@B@B@@@@B@@BB@@@@@@B@@@@B@@@@@AA@@@A@@@@D@@@A@A@@@@@@@A@A@@A@@@A@@@@@@B@@@D@@@B@BB@AB@@@B@@B@@@@BAA@@@@A@A@A@A@@@@B@@@BBB@@@@@@@@@@@BA@BB@@@B@@BB@@BBB@@@@@@A@@AA@ABB@B@@@@@B@B@@@@BB@@BB@@@@BA@@@A@@@A@@@BB@@@@@@AAA@@@ABB@@@@@@@B@@@@@@B@@@BA@@@@@BA@@@AB@@@@@B@@A@@B@@A@@B@@@@@@BA@@@B@@@@@B@@AB@@@@BBB@@@DEBA@@@AA@DC@@@A@@@@B@@@@B@@@B@@@@BB@@BB@@B@@@@ABB@B@@B@@B@B@@@@B@@@@D@@CB@@@@@B@@@@ABA@@@A@A@@B@@@B@HB@BBB@DBB@B@@@@B@@@@@BBF@@@BDF@@ABCBC@CBC@A@AACB@AAACAAA@A@C@EAECEEAGCG@E@CACCCCACACAACAAA@@AAAACCACAC@CAC@ECAA@C@AB@@ADCFCDGHADC@ABA@C@A@A@@AA@@AAC@A@ABA@@@@CAA@A@@A@@A@@@AA@A@@@@@A@@@A@A@A@A@@B@@AB@@@@@@A@@BCBAA@@@@@AA@A@@@@A@BA@@AA@@@A@A@A@@AAA@@@@AA@ABA@AB@@@@AA@@A@A@@BA@A@A@A@A@CEA@@AA@B@@AAA@A@A@@@@AA@AA@@A@@A@@@CBC@ABAB@@@AA@@A@@@BA@@@AB@@@@@@@B@@B@@AB@@@A@@B@@@B@@@@@@@@A@@@AA@@@B@@@@@@A@A@AAAA@@@A@@@A@@@A@AA@AAAAA@AAABAA@@@@@@@A@@@@A@@@AA@A@AA@@@@@A@@@AA@@AB@@AA@@@@@AAA@@@A@@A@@AC@@BA@A@@@@@@@@A@@@@AA@@@AA@@@AA@@@@AAA@A@A@A@A@@BA@@@@BA@A@@BAB@@@@@BAB@@A@@@AA@@A@AA@@@@A@@@A@A@@@@A@@A@@@@@AB@A@@@AAA@A@A@@@@A@@@@@@@@A@@AA@A@@@@A@@@A@A@@@@@A@@AAA@@@@A@@A@AA@@A@@@A@A@@A@AA@@@@@@A@@@A@A@@A@@@@ADA@@@ABA@A@CD@@A@@@CB@@@BA@@B@@BB@B@@@BB@@B@@BB@@@@@@@B@@@B@BA@@B@@@BABA@@B@@@B@@@B@@A@@@@B@BA@A@A@A@A@@@A@AD@@@@@@A@@@A@CBAB@B@BA@@@AAA@@@@@A@@AA@@@@@@@@B@@@@@D@B@@AB@@B@BB@@B@@@@@@@@BA@AB@@@B@BA@B@@BAB@@@B@B@@@B@@@@@BAB@@A@@BAB@@@@B@BBBA@@BB@@@@@@AB@@@@B@B@BA@@@@B@@@ABB@AB@B@@A@@@AB@@@@AB@@@B@BB@AB@@@D@@AB@@A@AAA@@BA@@@C@@@@B@@@@@BC@CB@@A@@@@BABAA@BCDAB@BA@A@AB@AAB@@AB@@CD@@@@A@A@@@AB@@A@A@@@@AA@@@A@AA@@AA@@A@@@@B@@@@@B@@@@@BB@A@AB@B@@@BAB@@@B@@@B@B@@@@@@BA@@@@B@@BABBB@@B@@@@B@@B@@@B@@@@D@@@@A@@B@@@@@B@B@B@@B@@@@@BA@AB@@@@@@@BA@@@A@BB@@BB@@@DA@@B@@B@@B@@B@B@B@B@@B@@B@@@B@B@@@@BB@@@D@B@@@BAB@@@D@B@BHEB@B@@BB@@@@B@BD@BB@@B@@@@BB@BB@@@BB@DA@@@@@B@B@@@@@@@B@BB@@@@B@B@BA@@@A@@B@@@BAB@B@B@@@@@D@@BB@@@D@B@B@BA@@BA@@B@@@@ABAB@@@@AB@@@B@@D@@@B@B@@@@@@@BB@AB@@BB@@@@@B@@@B@@@DB@@AB@D@@@B@B@@@B@BA@@B@@@@@@@BA@@@BB@@@B@B@@@B@@AB@@@@B@BBBB@BABA@@@@D@B@@C@@@A@@B@A@AA@AB@@A@A@@@@@A@@@C@@@A@@@A@@BA@@B@@A@AAA@A@@@@BCBAB@@A@@BA@AAA@AB@BA@@B@@@B@B@B@@AD@B@D@B@@@@DB@@@B@@@B@BAB@@@B@B@@@DAD@@@B@@@B@@@@@B@@AD@@@B@BB@@B@BAB@@@D@B@@BB@@BB@@BB@DDD@B@@BB@BB@@BBBB@@D@@@BA@@@@@ABA@ABA@A@@B@@@B@@AB@B@@@@B@BBBB@@@@B@BB@BB@@B@@@@BB@@@@@@CD@@@B@@@@AB@@@BAB@@AD@@@@@@@B@@@B@@BB@B@@@B@@@@@B@B@@@B@B@@BB@@A@BB@@@B@B@@@BBD@@@B@@BBB@@DBB@@@B@@@B@@@@@B@B@@@B@B@@@B@B@@@@@@AB@@A@@BA@@@@@AB@@@B@@@@A@ABA@@BA@@@AB@@A@@@@BA@@@ABBB@@@@@B@@@@B@@BB@@B@@@BBB@B@B@B@BA@@DA@@@BB@@@B@B@B@@ABABAB@B@@@B@B@B@@@BA@@@BBAB@BA@@BB@@B@B@B@@@BBB@@A@@D@@ABA@@@@B@F@@@@@@A@@@ABA@AB@@ABAB@B@BBB@@CB@B@@ABA@AB@@@BBB@B@B@@C@@BBB@@@BA@@@@@BD@@@@@B@BB@@B@@@BBBB@@@BBB@@BBB@B@BB@@D@@@B@@@B@@@@@BBAB@B@@@BB@B@@B@@@B@BB@@@@B@@@B@@@B@B@B@B@@@B@@@ABBBA@@@@B@@@B@@@@@B@@@D@@BB@B@@@@@B@@@BD@@B@@@B@@@B@@B@@B@@@@@BDB@@B@@@B@@B@B@@@B@BB@B@@B@@@B@B@BD@@B@@@@@@B@@@B@BAB@B@@@BA@@B@@AB@@B@@BABA@AB@BA@@@@B@BBBB@@B@@B@@@B@BB@@B@B@B@@@BBB@@@B@BBB@D@B@B@@B@@@B@@@@B@B@@@B@@B@@BB@D@BB@@@@B@@B@B@@BBBBA@ABABA@@@@@AD@DAB@@A@@B@@@@@B@DA@BBA@@BB@@B@@@B@@B@@@B@BBB@@@AD@@B@@@@B@@@BBBB@BB@@B@@@BB@@BBBB@@@A@BB@A@BB@@@B@@@@@B@@ABAB@@A@@@@B@B@@AB@BDBPHPJLHHHFHDJBH@@CHGLIFGF@HBHHFJJFDJDFDHFFFBFALCJAF@@CHCFKHE@@BQFUFGBGDAFCDEFGDGBADCBCFAF@DBDDBDBP@JBFBFHHFFHDHFDFDJDFBHBJFFDBFB@@F@@BJCLCHAD@F@F@HBFFFDDHDJDLHB@JBJFNBDDFDLDNAJ@NFHDB@FBF@L@J@JCLCJCB@HEHAJCHEFGDGDGDI@GDG@GBGAICI@C@CCGAECEAGCECG@E@CBEFGFCBAB@FCJ@DBF@HEFEJAHAF@@@F@@@BFBFBJDFFFFBH@H@JBJBJDFDDFFBF@DCDGDIDKDI@C@ADEDEDCHGFA@@LBLDLDBHDHBJBJBLDDLFJ@PFNBJBHAFADEBG@IBECECIEMEKEICGCEBE@GBCFK@@DEFEFEDC@ADEDEJKFEDAH@DAFCJEDEFC@G@GDM@I@ICOAI@ECI@KAEBGBGNGFEFGFGFEDCHCFAHCDCFAHAH@HBFBHDD@F@F@FAFCHEFCDCBC@EACAAECAA@@@C@C@CAAAA@ABGA@@A@@@AB@@A@A@A@AB@BABA@AA@@AAAAAA@@@@@@@DAB@@AB@@@@C@AAA@@BABA@A@A@@@AA@CC@A@@F@D@@@B@@A@@BADE@C@@@@D@B@@@B@BA@A@A@A@ABABABC@A@@@@B@@DB@@B@BDD@@B@@@D@J@BABABCB@B@H@H@F@DBD@HCHCFCDAF@HBHBLDLFNJJHHFHFLFHFHDLBRAJCBAFEDE@E@CDED@HAHADCBE@E@G@G@GBG@G@@DGFIFEFCFCHCNAB@BA@A@@AAIACA@@A@@A@@A@@ACCCA@AA@@@@@@AA@@@@@ACA@AA@@@@@@AAACAAA@@ACAAAA@EAA@A@@@C@C@A@A@A@A@A@ABAAC@@BA@@@@@ABAF@@ABCBABA@AB@@A@@A@@AC@@AA@A@ACAC@A@@@@AB@@AAAA@@A@@@@@A@@A@@A@@@CBA@@ACBCAA@@A@A@@A@@AAA@@@A@@@AA@A@CA@@A@@@@AC@@CB@@AAA@AAA@@AA@AB@@A@@@@@AA@@@BA@@B@@AB@BAD@@CA@@AB@B@@@B@@A@A@C@@@@AAA@@@CAA@@AC@@@@@AAA@@A@@BA@AB@@ADCB@AAA@ACC@AA@A@@@AAA@@@BA@@D@@@BBB@BA@@@BB@B@@@BBDAB@B@@A@@@@@BA@@@@A@@A@@@B@AA@@@A@@@A@@@@@@@A@@@AA@@A@@@A@@A@@AB@B@@A@@AAAAAA@@ACAA@AAAA@@A@C@EAA@@AA@@AA@@EA@AA@@AA@@@@@AA@@AA@@A@@@AD@BA@@B@@@@A@A@@@C@@@AA@@A@A@@B@@@B@@@BB@@@@B@JAB@@BBCB@BABAB@@AA@@A@@AC@AA@B@@AB@BA@@@@AAAAA@ABA@ABA@AA@A@@A@@@@ACAA@A@C@A@A@AA@AA@@@AA@@@DABCBAB@BABAB@@A@@AAA@@AA@@@AA@A@@CA@@CBA@ABA@AAA@@AA@@@A@EAA@@@A@@@A@A@@@A@@@AA@@@@CA@@CA@A@@AAA@@A@@@@@@A@@@AAA@AA@@@@@C@A@@AAA@@A@AAAAEA@@AAA@@@AAAAAAAAA@AA@A@C@A@A@@@CB@@@BABAD@@C@@@AB@@@B@B@BB@@BB@@B@B@@@@B@@@@BB@@BAB@@@@A@AA@@AAA@@@AA@@@@AAOEAA@A@A@A@A@@BA@@@@@@@AA@AAA@A@@@@A@A@A@A@@@A@AFA@@@CBCAA@A@A@A@@B@@ABA@@B@BAB@BA@AAA@@BAA@@A@@A@@@@AAAA@CAAACAAA@@@@A@@@GAE@@@@@A@@@A@A@E@@@AA@@C@C@A@@@C@@@AA@@@@@C@@B@@A@A@C@AB@BA@@B@@A@@B@@A@A@C@A@AAA@@@ADE@@BABA@@@A@A@CAA@@@C@@@@@C@A@A@@@A@@C@@AA@@@@@@A@@@AA@@@AA@A@@@A@@@A@@@A@A@@@AB@@AB@BABC@@@A@@BA@@@C@@@AB@@@ACA@A@CA@@CC@@A@AA@AAA@A@@CAA@A@A@A@@@@A@@A@@@@@AA@@A@AA@@A@A@A@@BA@A@A@@AA@@AA@@@AAABA@@@AA@@A@ACAAA@AAA@AAA@C@@@A@@AAAAAA@@@@@@AAA@@A@@@A@@@A@@A@BA@@@@@AAA@@@A@@@@AA@@A@@AA@@@AAA@@A@@AA@A@@@@AA@BA@@@AAABA@AA@@@@@@AA@A@@A@@@A@@A@@@@@B@@A@@BCA@@A@@A@@@A@@AB@@@@@BA@@DAD@@@BAB@@@@@@@BAB@BA@A@A@A@A@ABABC@@B@@ABA@@@ADABA@@B@BABA@@@A@AB@BA@@B@B@@A@A@@@A@@@@ECC@@AA@@A@@@A@@AA@@@AAC@A@A@@A@@A@@AA@@@@A@C@AA@@AB@@A@@@A@@A@@@A@A@@AAE@AAA@AA@A@A@@@AA@@AAA@@@AA@@@A@@@A@@@A@AAA@@@@AA@@@@ACA@@AA@@ABA@A@A@@@@@C@A@@@CBA@A@A@AA@AAAAAA@@A@@AAECCE@@A@AAA@AAAA@@AA@A@AA@AAGAAA@@@A@A@A@@BA@@@A@ABA@A@@@AB@@A@@@A@AB@@@B@@A@A@@A@@@@AA@BA@@AAA@@A@@@A@@AA@ACA@AB@@A@@@@AA@@AA@@AAB@AA@@AAA@@A@@AA@@A@@@@CAA@@@@@A@@@AAC@@@AA@@A@@AAAAA@A@E@@AA@A@@@A@@BA@@@@@AAA@@A@@CB@@A@@@A@AA@@A@ACA@@ACA@@@@@A@@A@@B@BABA@@BA@DDABA@ADA@AB@@@B@@ABAD@@A@BBA@@@A@@BA@@B@@@D@@A@@B@@BB@B@@@D@@@@@DAB@A@B@@A@BBAB@B@@@@ABA@A@A@A@C@@@@A@A@@@A@@@@@AA@AA@AC@@@@@A@@B@A@@A@A@A@@@@A@@@A@@A@@B@BAB@BA@@BAB@B@B@B@@A@@@@A@AA@@BA@ABA@@@@@CA@@A@@AA@@@@@@A@@@@AA@@A@@@@@@AA@@@AA@@AA@A@@A@@AA@AA@@A@AA@@@A@@A@A@AA@@@@@@AA@A@@A@@@AA@AA@A@@AA@@@@AC@A@A@A@@@AA@@A@@AAAC@@A@@GE@@A@@AA@CA@@A@A@@@@CA@AAAAAA@@ACA@CA@ACAAAAAAACAA@@@AA@@C@@AEAAAA@EAC@AAAA"],"encodeOffsets":[[120057,29866]]}},{"type":"Feature","id":"360203","properties":{"name":"珠山区","cp":[117.202919,29.299938],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@BANCBABGAEBCDE@C@M@A@CDI@EFBB@B@@@@@@@@BB@@@@@@BB@@B@@B@@D@@@@A@@A@@@@A@@B@@A@A@@B@@B@@B@@@A@@@@@AB@@@@@B@@B@AB@@@@@@@BB@B@@@@@@@@@BA@@@@@A@A@@BB@A@@@B@@B@@@@@B@@@@@B@@A@@@@@B@@A@BB@@@@B@@@@A@BB@B@@@@AD@AB@@@@A@@@@BC@@@@AABAA@BA@@@@@ABABB@@@@@BB@B@B@BB@@@@@B@BA@@@@@ABB@@@@@@B@@@B@@@AB@@A@@@A@A@@BA@@@BB@@D@B@D@@@B@BBBBABA@@@@B@@@B@@@@@@BB@@A@@@@@@A@B@@@@@@BB@@B@BAB@@@@@BAB@@@B@@BA@ABB@@@@@B@@B@@@@BBB@@@@@@@B@A@@B@@ABA@A@ADA@@B@@BBBA@@@@@AB@@A@B@B@@@@@@ABBB@AB@@@B@@@AB@@@@"],["@@@@@B@B@B@@BB@@ABB@@@@@@BBB@@@@B@ABAD@@@B@@@@A@@BA@@@@B@B@B@B@@@B@@@@@BBB@@B@@@@BB@B@DB@@@@AB@B@BBD@BB@@BB@B@D@B@BAD@BCHGDCDEBC@@BAAA@@@@@A@@A@@A@@@AA@@@AAB@@@@CACAAC@ECADBB@@@B@@@B@BADCCA@@A@@AAA@@@@A@A@AAABC@@AE@A@AA@@AA@ABIL"],["@@BAB@B@BA@@BABED@@@@AAAA@@AA@AACCAA@AA@B@@@ACA@BAA@@@@@A@CBC@@AANBB@@@@@@@@@@@@@B@@@@@@A@BB@BAB@@F@BB@@A@@@ABAB@DABA@@@ODA@@@A@@@A@EJMZ@@@@BD@B@@@B@@B@B@@@BA@@@@@B@BBB@@@B@BB@@B@@B@@@@@BB@@@@@@B@B@@AB@@@@AB@BA@@BB@@@@BB@B@AB@@@@B@@B@@@B@B@@@BB@@BA@@B@@@@BB@@@@ADC@@BE@AB@@@@A@@@@AA@C@A@@ACBA@@@AA@@A@ABA@AB@@A@C@A@@B@B@B@BA@@B@@A@@@A@A@CA@AAAA@@"],["@@@B@B@BAHAH@@@@@F@F@@AB@B@@@BAD@@@BAB@@@B@@@B@F@@@DADAD@B@@@B@DAD@@@D@F@BBB@B@BB@@B@BBFB@DDDDBCFDD@BBBD@D@@A@BB@@B@@B@@@BB@@@@B@@@@BBD@B@DB@FBD@DBDBDDDBBBB@@BBDBBBBDBDDDDDDBF@H@HDFBDFBF@F@D@BBBDBBB@BDABBB@D@DAD@DABA@@CE@A@@AE@A@@@@@A@@A@A@CAA@AAA@@G@A@@@AB@B@@@B@BA@@@@@A@@@@DA@@@C@@A@@@@@@A@AA@@@@AAA@B@@A@@@AA@@AA@@@@@A@@@A@@A@@@@@@B@@CDB@@B@@ABCF@@A@AA@@@@BA@@@A@@@@@A@@AB@@@@@@@AB@@@@AB@@@@A@@@@BA@@B@@A@@@@AB@@A@@@@@@@@A@@@@@@AA@B@@BB@B@@@@A@@A@@@B@@@B@@AB@@@@AA@@AA@@@@@A@A@@@@@AAA@BBB@@@B@@@@A@AA@@AA@@@A@@AAB@@A@@@@@@@@@@AA@A@@@A@@B@B@B@B@@@@@BB@A@@A@@@@A@@BAA@@A@A@@@C@@@A@@@@B@@@B@@@@B@B@@@@@@@B@B@@@C@@B@@@B@@B@@@@@A@@A@@@@@@@AA@@@A@@A@A@@@@A@@@@@@@A@@@AAC@@@@NYFIB@@@B@@@B@PC@@B@BA@CBABA@@B@@@AAE@@@BA@AAA@B@@@@CAB@@ABABMED@@A@AA@@@A@@A@@@AAA@AA@@AA@@@@CA@@AAA@@@AAA@@@@@A@@AB@AE@@A@A@A@@BA@@A@@AAAAABBA@ABAB@DA@ABC@@@CACD@BABABCBE@C@CD@@AB@FBB@B@AAA@@@BABABCBCBA@A@@BA@AA@@C@@@A@A@@BCB@@CAC@@@@A@@@@A@@@@CC@@@AA@@AA@@A@@@AA@@@@@@AA@@@A@@A@@A@@@@AA@A@@A@@@CA@@A@@AA@AA@@@@AAB@A@@@A@A@@@AA@@@@A@@@A@@@@AA@A@@@AA@@@@A@@AAAA@@A@@@@@@AA@@@A@@@A@@BABA@@BA@AD@@A@A@A@ABCDABA@@@A@@@@AA@@@ABAA@@@@@@@@A@@A@@@A@@A@A@@@@@@@AC@AAC@@A@@A@AAA@@@@A@@@AA@A@AAA@A@A@A@@@A@A@@AA@@A@AB@AA@A@@BCBA@AB@@@@@@ER@H@FEJADC@CCEAEAF@BCI@A@C@AAMB@@B@B@@A@AA@@A@@B@@@@B@@BB@@@B@B@A@BB@B@@@@@BA@A@@@A@@@@@@B@@@D@D@CBA@@BAB@BAB@B@B@@@F@D@D@FB@D@@BB@B@@"]],"encodeOffsets":[[[120002,29961]],[[120006,30027]],[[120098,30015]],[[120020,29971]]]}},{"type":"Feature","id":"360281","properties":{"name":"乐平市","cp":[117.151796,28.97844],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACACAAA@@AA@A@@EC@@@A@@@A@C@@@AAA@C@@@AA@A@CBAA@@ABA@@@AB@@@BAB@@EA@A@@AA@AAACACCA@@@AB@@AAC@A@A@A@A@@@AB@@AB@@A@@B@B@@ABA@@@A@BB@@@@ABA@@B@@@BB@@BB@@B@@@BA@@B@@BB@B@@@@ABB@BB@@@@@B@@A@@@AB@BA@@@@@B@@@B@@@@@@BA@A@@BA@@D@BA@A@A@A@C@@AAA@BA@@@BB@B@@BB@@BAB@@@B@B@@@@B@@@@@BA@AB@@AAAAAAA@@@@@@B@B@A@@@A@A@@@@@@@@CB@@C@@BAB@B@B@BA@@@A@A@A@@@A@@@@A@@AA@@@@A@@@@@@@A@EA@@AB@@AAAAA@AA@@@@@AA@@@@@@@@@AB@@@AAA@@@AAA@@@@ABAAA@@@@@ABA@AB@@@B@B@@@BA@ABA@A@EB@@@A@ACD@@@A@ABA@@@@AA@@@A@@@@@@AA@@@A@@AB@@@@A@@@@@@@C@@@@@A@A@A@@@@BABADAB@DA@ABCD@@AB@@CAA@AB@B@B@B@B@@B@B@B@B@B@@@@@@@ABAB@B@@B@@B@@@B@BAAA@AA@@BA@@@AA@@AA@@@@BA@A@@B@@@BBBABB@@@@@@@@@@@B@@B@@@@@@@@@D@@@B@B@@BBB@@@@@@F@@A@@B@B@BA@A@C@@@@BA@AB@@@AA@@B@@@@@@@@@@A@BBA@@@@@A@A@@@@B@@AB@@AB@BA@A@ABAB@BA@@@@A@@A@@@A@@A@@AA@AA@@@@A@@@@@@@@AC@@@A@AA@@@@@@@@BA@@@AA@@@@AB@@A@@@BB@@@@BA@@@@@@@B@@B@@@@@@@@@@@A@@@A@@@@@@B@@@B@@@D@@@BA@@B@@@@A@@A@@@@@A@@ABA@CBAB@@@B@@@B@@@@BA@@B@@@@@@@AB@@@@@B@@BABBA@@@@BA@@@A@@@A@@@@@A@@AA@@@A@AA@A@@A@@B@@@B@@B@@BB@BBB@@B@@@@@@B@D@@B@@@@@F@@BB@BAB@B@D@B@BA@@AA@C@@@A@@@BA@@@@BA@A@@@@A@C@@@AB@@@@AA@@B@@A@@@@@@AAA@@@A@@@@C@@A@@CB@@@B@A@AAAAB@@B@@B@D@@@@@@@@@A@@@A@@A@@A@A@A@@@@@AAAA@A@@@@B@@@@@@@A@@@AA@A@@@@@@@B@@@B@@@@@@@@@@@BA@@C@@@A@@@CA@@A@AA@@@A@@AAB@@A@A@@@AB@@A@@@@@@@@BB@@BB@@A@@@@BA@AB@@@@B@B@B@@A@CB@@B@@B@@BBB@@@@@@BBB@@@@@BA@ABBB@B@@A@BBDB@@ABABCB@B@@ABA@A@@B@@AB@@A@@@AAA@AAAA@@A@@@ABCBA@A@E@CA@@C@@BA@@B@@@@@B@BAB@@A@@@@@@AB@@@@@AA@@@@@@AB@BAA@B@@@@AAC@@@@AA@@@@AB@A@@A@@@@A@@@@@@BA@@@AB@@AB@@@B@@AB@@@B@@@@@B@@@@@@@D@@@BAAAB@B@@D@@BABA@@@@@@@@@A@@AA@@@AB@@A@A@AA@@@@CB@@CB@@A@@B@@@@C@AB@@@AAAA@AAA@A@@BCB@@@@A@@@A@@@@@@A@AB@@@@@@@@@FC@A@@@@AACB@AA@ABA@@BAD@@AA@@@@@@@@B@@@@A@AB@@AA@@B@@@@A@AB@@AA@@B@@@BA@@@@@@@@A@AB@@@@AAB@AA@@@@BAA@AA@@@BC@@B@@AC@@BA@@@@@A@@A@@B@AA@AA@@@@A@@B@AA@A@@@@B@@BB@@AD@@@@BBB@@B@@@@@@@B@@E@@DABAB@@@B@BA@@@@@CBBBB@@BA@@@@@@@@A@@@@@BA@@@@@@@@@@@@B@@AB@BA@@B@A@@@AB@@A@@AA@@@@@B@@@@@B@@A@@@@A@@@A@@@@@B@B@@@@A@@@@A@@@@@B@@@@@B@@@@@@A@@@BBB@@@ABB@A@@@@@A@@BB@AB@@@@B@@@B@@@A@@@AB@B@@@@@@A@@BA@B@@@@@AB@@@@B@@A@@B@@@@@@B@@AB@@AB@@B@@@B@@@ABABA@@B@@AB@BA@ABCB@@@@C@@@@@@A@@A@@@B@@AA@@@@@@@@@@@B@@@AAA@@B@BAB@@A@AA@@@BB@@BA@@B@D@@@B@@A@C@A@@@@B@B@C@@A@A@@@@@@@AA@BAD@B@@A@@AC@@BA@@@@@@@B@@@@@D@@@@@A@A@@BB@@@@@B@@@BA@A@@BB@@@@B@@@@@@@@@@@@BA@A@@B@@@@@@BB@@@@@@@B@@@@@@@BAB@@@@BCA@AAA@@@A@@B@BBBBB@@B@@B@@@B@D@@@@A@@@@A@A@@@@A@@@A@ABA@A@AB@@@B@@@@B@@BB@B@@@@B@@@@CAC@@@A@A@C@C@@@@BAB@B@D@@A@@@@BB@@@B@@B@@@@A@@@@@@B@B@@B@@@@A@@B@@B@@@@ABA@@@@@@@@@@@A@@@@@@@@B@@@@AA@@@@A@@B@@A@@A@@AA@@@@AAA@A@@A@@BA@@AA@@@A@@D@@@@@AA@@@@CB@@A@@@@@@@A@@BA@AB@@BB@@@@@@ABAB@BA@CAC@@@@B@D@B@BBF@D@BBB@@@@@BAB@@ABA@A@@@A@@A@AAEBAA@@@@A@@A@@@A@CD@@ABEB@@@@AB@BBB@BBB@BEBC@@BBB@B@D@@@B@D@B@@@B@@AB@B@B@@@@A@AB@@A@@B@BABA@@BA@@B@@@@@B@A@@@B@@B@@B@@@B@@DDDDDBB@@@@@BB@@B@@@@@@@@BB@BB@B@@@@B@@@B@@B@@A@AB@@B@@@@BA@@@@AA@@@@BB@A@B@B@@B@@B@@@B@@@@@AB@@BB@@B@@B@@@BBD@BAB@BB@BF@@BB@BB@@B@@@@BBB@@@AB@@@B@@A@@@DB@@BDB@BB@B@B@@@B@@@@@BA@@B@@@@B@@@B@@B@@@@B@@@B@@@@@@@@@BA@@B@@B@@AB@B@@B@B@@@@AB@BA@@B@@@@@@@@A@@AA@@@@DABABB@@@@@B@B@@B@@@B@@@BBB@@@BB@@BB@@@@BBA@@@ABA@@BB@@@@@@@B@B@@@@@DABB@@@A@@@@B@@B@@@B@@A@@A@BA@@B@@BB@ABB@@@@B@@@@@@B@B@@ABB@@@@@B@@BBB@@@@C@BB@@@BDB@@@@@@@@A@@@A@@@@A@@AB@@@@A@@BBBBD@@A@@BCB@@@B@@@@BB@B@@B@@B@@@A@@@@B@@B@@@@@BBB@B@@BBBBB@@BB@@B@@@@A@@@@B@B@@B@@B@@@@A@@@@AA@@@C@@@@@@B@BBB@B@@@@B@@@A@@BBB@@A@A@@B@@A@@@@@@B@@@@D@@B@@A@AB@@@@BD@@BB@@@@B@@@@BBB@@@@@@@@@B@@@@@B@BA@@@B@@@@B@B@@B@@@@@@B@B@BB@@@B@@@BAB@@A@@BB@AB@@@AA@@BA@@B@@B@@@B@@B@@@@B@@BAD@@@@@@BB@@@@ABA@A@BB@@BB@@@B@@@@@BA@A@@@@BBB@BBDBBBB@@@DAB@@@B@BB@@@@AB@@@@@BB@BAAD@BA@@BAB@DAB@B@@BB@B@@AD@@@@@@AB@AA@ABA@@@AB@@@@A@A@A@@DA@@B@@@@AA@@@@A@AD@@AB@@A@@@BB@B@@@@DABA@@B@AB@@@BB@B@@A@B@@@B@@B@@B@@@BB@B@@B@AAB@@@@@B@B@@@B@@A@@B@@@B@BB@@@@@@A@@B@@ABA@@BB@@@@@B@@@@D@@@@@@@@BB@@@B@B@B@B@B@DB@@BB@D@BBB@@@@B@@@@@@@A@BBDB@@@@B@@@B@A@BB@AD@@@@AB@B@B@@B@@BB@B@@@BA@@@@B@@@B@@A@@@@B@@@@BBBB@@@@BB@@A@@BAB@@@@A@A@@@AB@B@B@@AB@B@@AB@@@B@B@@@B@@@@A@@@@@@BA@@B@@BBB@@@@@CB@@A@@D@@@@AB@@@B@BAD@B@@@D@BAB@@BBA@@B@BBB@@BDA@@@@@@B@@B@@B@@@@@@@BBB@B@@@@@B@@BB@B@@@B@@BB@@@B@D@@@@BA@@ABBA@@B@@A@@@@B@@@@A@@B@@@@@B@BAB@@A@A@@@A@@BA@@DB@@@@@B@@@BAB@@@@B@BB@BB@@@@@B@@B@@@BBBA@@DA@@BBB@@B@@@@@B@BB@@B@BB@ADA@@B@@@@AB@@@BAB@BA@@@A@@BB@@@D@BB@B@B@@@@B@B@@CB@BAB@@@BA@ABAB@@@@ABAB@@@@BB@@B@@@BB@@@@B@@@DBB@B@@@@DA@@@BB@BB@@B@@@B@@@B@@@B@@B@B@@@@AB@@@BA@CDA@A@@BCB@@A@@B@@A@@@A@@@AAC@@@@ABA@@C@@@@@A@@B@@@@A@A@AB@@@@B@@@DBBBBBBBBB@@@@CB@BABB@AB@@AB@BA@ABA@@BA@@@@BA@@@@B@@@@@B@@BB@@@@@BAB@@B@ABB@@@B@@B@@@B@@B@@ZN@B@B@B@B@@@@@@@BA@@B@@@D@@@B@BA@@B@B@@BB@@B@@@@@BB@B@@BBB@@@DB@BBB@B@B@B@@@B@@@B@@@B@B@BCB@B@@@@BB@@@@@BB@@BBD@D@@AB@BBB@@B@@@B@@AB@B@BA@@@A@@@A@@@ADABA@@DCB@D@@A@B@@B@@@B@BAB@B@@@@@@B@@@@@B@@B@@@B@B@@AB@@@B@@@B@@@@AB@@AB@@@BB@@B@@@B@BAD@B@@@BA@@B@@@@A@@A@@@@@@A@@B@@@@@@@@B@@@@@@B@@@A@@@BB@AB@@@@@B@@@BA@@BA@A@@B@B@@@@B@@@@@@B@B@@@A@@BA@@@@BD@B@B@@@B@@@@@@@B@@@@BB@@@@AB@@BB@BB@B@@@BA@@B@B@@@@B@B@B@@@@@@B@@B@B@B@@@@BAB@B@B@@@D@@ABABBB@@@B@@B@@B@@@@BB@B@@@B@@@BA@@BAB@@@@BB@@B@@@@@@B@@BB@@@B@@B@@@@@@BB@@@@@@BB@@@@B@@@B@B@@B@@BA@@@@@ABAB@B@ABB@@@@@@B@@@B@@B@@AB@B@B@@@B@@@@ABB@@@@@B@@A@@DDBB@@BB@@@@@@@@B@@B@@@@@B@@@@@@@@A@@@BB@@@@AB@@@B@@B@@@@@@B@@BBB@B@@@B@@@@@B@@@@@B@@B@@B@@@@@@@@B@@B@@@@@BA@@@AB@@A@@@@@@AA@AAA@@@ABA@@@A@A@@A@@A@@@@@@@AB@BABABA@@B@@A@@BA@@BA@@@A@@@ABA@A@@@A@@@AA@@A@@@@@@BABA@A@AB@@@BC@ADC@ABA@@@A@A@A@A@@B@@@BA@C@ABEB@B@BBB@@@B@B@@@@BFBDBBAA@@AA@@A@@@@B@B@@ABA@@@@@@BA@BB@B@@@BBB@BAB@@B@@@@BB@B@@B@ABADC@@@AB@@@B@@@BBB@@@BBB@@DB@@BD@@@B@B@BBB@@B@BBBBBBBBD@FBB@BBFB@BD@@@BB@@B@DBBBBBBBDB@BDBB@BD@@BBBBBBB@@D@@B@B@@@DBB@@BB@@@HF@@@BD@BB@BB@@@BB@@B@B@B@D@@B@@B@@BB@B@@BBB@@B@@@@BBB@@@@@@BBB@B@@@@B@@BBB@@@BBB@@BB@@@@BBB@@BB@@B@@B@@@@B@@@BB@@@@@B@@@@B@@BB@@@DB@@@@B@BAB@@AB@@B@B@@B@@@@A@A@ABA@AB@@ABA@A@AB@@@@B@@@B@@B@B@B@@@@B@AB@@@@@D@@BBBB@@B@@@@@B@@@B@B@@D@B@B@B@B@BA@@@@@ABAAAB@@@@A@BBA@C@@@@@C@@@AAA@@@AB@@@@C@@@AB@@AB@@@B@AAB@@@BCBA@@@A@@BAB@BCB@BACCB@@AB@BA@A@AB@@@@B@@@@DB@BB@BDB@@@BBB@@@B@@@DA@@@BB@BB@@@@B@@AB@@@B@B@@BF@B@B@BBBB@@@BB@@B@@B@@AB@@AB@@A@@@AAA@@@@@@@A@@@@AA@@@@@@B@@A@@@@B@@AB@BA@@@AB@@BB@BAB@@@@C@@@A@@@@BA@@@@B@@A@A@@@AA@@A@@@A@A@@BA@AB@@@@C@A@@@@@A@ABA@A@A@@AAA@@@A@@@@A@@AAB@AA@@BA@@B@@A@@BA@AB@@@B@@B@@@AB@@A@A@@B@@@B@B@@@BA@@B@@@B@@A@@BA@@@A@@@@BAB@@@BAB@DAB@B@@@B@@@@@B@B@@@@@B@@@B@@AD@B@B@BA@@@@@A@@@A@@BABA@@BA@@BAB@@@@A@@BAB@B@@@B@B@@@B@BBBA@A@@@@B@@BB@BB@AB@@@@@BA@@B@@A@@B@@@B@@@B@DB@@@B@B@@@B@@@B@BB@BB@B@B@B@BBB@BB@@B@D@@@BA@BBABBB@B@@BBB@@@@@B@@@BBB@BAB@B@@@B@B@B@@@B@B@BADBBA@AB@@@BABCBA@@@@D@@@DD@@BBB@BB@@@BBB@@@@@BB@@@B@@@@B@@B@@@BB@@B@BB@@B@@@BB@@BB@@@@D@@@B@B@B@BA@@BBB@B@D@@BB@B@B@B@BADA@@@A@A@@@ABA@A@@@@@A@@@@@A@@@C@@@@A@A@@@@A@@@AB@@AAC@A@A@@BAAA@C@@@AAACAAA@A@AA@A@A@AA@@@@@@@A@A@@@@@A@A@AAAA@BA@@BA@@@AA@@@A@@A@@AA@@A@@@AA@@@@@AB@@@BA@@@A@AB@@AB@@@@@@AB@@@DA@AB@@ABAD@@@@AA@@A@A@@@A@AAAB@@A@CB@@@BB@@@@B@@A@@BBB@@A@@B@BA@@B@@A@@@AB@@@@@B@@AB@@BB@@A@@B@@@@@@@@BB@BB@@B@@@@B@@@@@@DD@@@AB@BB@@B@@@@@@A@A@@@A@AB@@@@A@A@@@AB@@@@@@A@@@A@@AA@@@A@@@@AB@@A@@@AA@AAAE@@AA@@@BC@@@AA@@A@@@@@@@A@A@@BA@@@A@@@@AB@@@@A@AA@@A@A@@AC@@@AA@@@@@@BA@AB@B@@@@A@@@A@@AA@@BA@@@A@@AA@@BA@@@A@A@@@@B@@@@ADBB@@@@@@A@@@@A@@A@A@@B@@@B@B@B@@@@@B@@@@@@@B@B@@A@@@AB@@@@AA@@@@A@@@@@A@@@@B@@A@@@A@@BA@@BA@@BA@@@@B@D@BA@AB@@@B@@AB@@A@A@AA@@AA@A@@A@@A@A@AB@@@AAAA@A@@@A@@B@@CA@@A@@BC@@BA@@@A@A@@AA@AA@A@@@A@@@C@A@@@@@@A@C@@@AA@@AAA@A@CA@@@A@A@@@A@@B@BABCA@@@@A@A@@@@AB@@A@AA@A@AA@A@@@A@A@@@A@BA@@BA@@B@BADA@@@ADA@@A@B@AAA@@C@AA@@@A@C@C@A@@@@A@A@A@@AA@@@@C@A@AAAA@@@@A@BAA@@@@AB@@@BA@B@@@A@@@@BA@A@@@A@@@@BA@@AC@@@A@@AA@@B@@A@@B@@@B@BB@@B@B@B@@ABAB@@ABAB@@@@A@@@A@@@AAA@@@@@AAAAE@@@@BAB@@@@AB@@@B@BA@@D@@@@@@A@@AA@@@@@A@AA@@@@AA@@BCBA@@@@@@@AA@@AA@AA@@AAA@@@@A@ABA@A@@@@AAB@A@@@@A@AA@@AB@@@A@@BABA@@@@@@@@A@@@@BAA@@@@@A@@A@@@AA@@BAB@@@@AA@AA@BA@@@@@A@@@@@@BA@@@@@@@A@@@AB@@@@@AA@@@A@@@@@A@@@A@A@AAC@@@@@AA@@AAA@A@@@A@@BAAA@@@@@@AA@AA@@@A@@BAB@B@B@@ABA@@B@@AB@@@@@B@BA@@@@@A@@B@@@B@@A@@@@B@@@@A@@BABA@@B@@@BA@@B@BBB@B@@B@@B@@@@@@@BBB@@@B@@@@@@B@@B@@@BB@@B@BA@A@@BBBA@@@@B@B@@@@@B@@A@ABA@@BA@@B@@A@@BA@@B@B@@@AAAE@A@A@@BG@A@A@A@@BA@@@@B@@@B@B@@@FA@@@@AA@@@A@@BA@A@AA@@@@A@@D@BABA@@B@B@B@BAB@@@BA@@@AB@@@B@@@@@@@@@BABA@@BC@@AAB@@AA@@AA@@@@AB@@ABA@@B@@AB@@@@@@A@A@@D@@@@@B@@BBB@@@@@B@@@@@@B@@A@@@@B@@B@@B@B@BA@@B@@@B@@@AA@A@@@A@BB@@B@ABA@@@@@@A@@C@@@A@@BA@@@A@@@@B@@@@@@@@@@BB@@@@@@@@@BB@@DA@@B@@@@@@@BB@@@@@AB@@A@@@@@AB@@@@A@@@@A@AA@@CB@@AAA@C@@A@A@@AC@@D@@@@@@@@A@@D@B@@@@@B@BBDCDA@@@A@A@@B@BA@@B@B@@A@@@@B@BAB@B@B@B@@@F@@@@@B@@@@BB@@BB@BAB@B@BAB@@AB@@AB@@A@@AA@@A@@@@A@@CA@@A@A@@A@@AA@@AA@AA@@A@@@@@ABA@@BA@@@@@@@A@@@A@@@@@@@A@@B@@A@@@@@@AA@@@@@A@@@CA@@@@AAA@A@C@@AA@A@@@@@A@ABC@@@@AA@CA@AA@@A@@@A@@@@@AA@A@A@@@A@@A@@@@A@@@B@@AAB@AA@@@A@C@@@@@@@@AA@@AA@@A@@@AA@@A@@@@A@@@CAABA@A@@@A@@@ABAB@BAB@BA@@B@@A@@@@@@@@@A@@@A@A@@A@@@@@AA@@@@@A@@BA@@@@A@@A@@B@@A@@AA@@B@@A@@CA@A@@B@@AAA@A@@@@@@B@BBB@@B@@@AB@@A@@AA@@@AAA@@@@@A@A@A@@@A@@@A@A@@@A@@B@@@B@@@@@@B@@A@@@@B@B@@B@B@@@B@@@D@@A@@@AB@AABA@A@C@@A@@AA@@A@@@AA@@AA@A@@@@@@@@@A@@@@@A@@@AB@B@@@BA@@@@@A@@BAB@@@@@@A@@@A@@@AD@@@@AAA@@@A@AA@@@@@AA@@@@BA@@@@@AAA@@@@@@@@@A@A@@@@AA@@@A@@@A@A@@@@@@BBBA@AAA@@@@AAAAA@@@@@@@@AB@@@@AA@@A@B@@B@@@BB@DB@@@B@@@B@B@BA@@@A@@@A@@B@@@B@@@B@@B@@@@B@@@@AAAC@@A@@@@B@@BB@@BB@@AB@@@@A@A@@@@@@B@@@B@B@@@@AB@@AB@@A@@@@B@@BB@@A@@BA@@A@@C@@@A@@B@AA@@@@@A@@@C@@@@@@B@B@@A@@@@A@@AA@@A@@@@A@@A@AB@@@A@@@@@BA@A@@@AB@@@BB@@@@@@@@@A@@@AB@@A@@@A@A@@@A@@B@@@@C@C@A@@AA@@@A@@@A@@BA@AA@@@B@@A@@AA@@BA@A@@@@@AAA@@@AA@@@@A@@@A@@B@BAB@@@@AB@AA@@B@@@B@@@@AB@@A@@@A@@@@@A@@@AB@@AB@@A@@AA@@@A@@B@@A@@B@@@B@BA@AB@@BB@@CB@@A@@A@@@A@@@@@A@@A@@@ABAB@@AAA@AAA@@@AAA@@@@@@ACC@@A@A@@@A@AA@@A@ABAB@@A@@@@@@@@AA@@@@AA@@@@@@@A@@@@B@@A@@AA@@@@@A@@@A@@@AA@@@@AB@@A@A@A@@AA@@AA@@A@@@@B@BAB@@AB@@AA@A@@@@@A@@@@@A@@ACACAA@@@A@@AA@ABA@@@AAA@@@@@A@@@C@A@A@@@CBAB@@A@@D@@ABA@A@AA@@C@A@AB@@A@@BA@@@@@@@AA@@@C@@A@@A@AA@@A@ABA@@@AB@@A@@A@BA@@A@AA@@@@@A@@@A@A@@@@@AB@@A@AB@@ABAB@B@@@@@DB@@@@@@@@BA@@BA@@@@@CB@@AB@@@B@BA@@@@@@AAAA@@AAAA@@@@AAA@@A@@D@@@@@@A@@@@BA@@@A@@@A@@AA@@@@@A@@@A@A@A@@@A@@@A@@@@@@B@B@@@@ABA@@@@@@@@ACA@@A@@@@@@@@A@@@@@A@CBC@@@C@A@C@EA@AA@@@@@A@@BAA@@@@@A@A@@@CBA@A@A@AA@CC@@CA@@A@@@ABABA@@@A@A@A@AA@@@@@C@AB@@AA@CC@@AAA@@@A@AB@@A@A@AAEBA@EDA@AB@@AB@B@@@@ABA@ABAD@@CCC@C@C@C@C@A@@@@@@C@A@@AA@@A@A@CB@@AB@@BB@@@@A@A@A@A@CC@AA@@A@@AAB@@AAA@A@AAA@@A@@@@@C@C@@@AAB@AA@@AAC@@@A@E@EA@@ABA@@@A@A@@@@A@A@@CEAC@A@A@AACA@@A@AAA@@@AA@AAA@@A@AABE@@@AAAACA@@AA@@EB@@"],"encodeOffsets":[[120100,29430]]}}],"UTF8Encoding":true});}));