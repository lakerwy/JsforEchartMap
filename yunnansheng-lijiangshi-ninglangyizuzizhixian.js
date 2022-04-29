(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宁蒗彝族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530724","properties":{"name":"宁蒗彝族自治县","cp":[100.852427,27.281109],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@A@A@A@A@ACA@AAA@AAA@AAAA@AA@AA@A@AAA@@AAA@@AA@A@A@A@C@A@C@@AA@A@A@AAA@@@A@A@A@A@A@AAA@A@A@@AE@@@A@@@AB@@@BA@@@@@A@@@@@AB@@@@A@@@@@A@@@@@@@@@A@@@@@@@A@@@@@A@A@@@@B@@A@@@A@@@@@@@A@@@AB@@@BA@AB@@A@@B@@@@@B@@@@@@AB@@@B@@@@@@@B@@@@@@@@@@@B@@A@@@@B@@@BA@@@@@@@A@A@@BAB@BA@@@@@@B@@@@BB@@A@@@A@@B@@A@@@@@@@A@AB@@@B@@@B@@@B@@@B@@A@@@A@@@@@@@@B@@@@@BABA@AB@@@B@@@BA@@@A@@BA@@@C@@B@BA@@BABAB@DAB@D@D@BAB@B@@@BAB@BADABB@@B@BA@A@A@A@@BC@@@ABA@A@ABA@A@@BA@@@ABABAB@BAB@BADABA@@BABABC@ABABA@ABA@A@C@A@@BA@A@A@A@A@C@A@C@C@@BE@A@C@C@C@A@ABC@A@A@ABA@C@A@A@ABE@A@C@A@ABA@A@ABC@ABABAB@BA@AB@BA@A@AB@B@BAB@@@B@BA@BB@B@B@@@B@B@B@@@B@B@B@B@B@B@B@BBB@B@B@B@B@B@B@D@B@BB@@DAB@B@B@B@B@D@BABBBAB@B@B@BA@@B@B@BABAB@BABADABABABABA@@@A@@@@@@B@@@@A@@@@@A@@@@AA@@@@@@A@B@@@@@A@@A@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@AA@@@@@BA@@A@@@@@@@AA@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@AA@@A@@A@@@@@AAA@@AA@@@AA@@A@@CA@@A@@@A@@@A@A@@@A@ABA@@@@@A@@B@@@@@@@BA@@B@@@@@@A@@B@@@BA@@B@B@@@B@@@@@@@@AB@B@B@@@@@B@@BB@@@@@B@@@B@B@@AB@@@@@@AB@@@@@BA@@@@BA@@@@@@@AA@@A@@A@@A@@A@A@AA@@A@@AA@@@AA@@A@A@@@AA@@A@@A@@@@@AA@@@@@@A@@@A@@@@@A@@@A@@@A@@AA@@@@@@@A@@A@A@@@A@@A@@A@AAEIACAEAA@@BAFARB@BDBDBBBBBBH@BHBHA@@BC@CC_AGBGLCH@HCHMV]FIDG@@@AB@@IAEB@DADABA@ABA@AFG@ABABEDEBABA@ABABADABAB@@ABA@ABA@ABCBMAWEK@EGKEEAABEBABCBMCSAOA@B@AAB@B@@@B@BB@BBB@@@@D@@@BBBBDB@@@@BB@@AB@@BB@@BBBB@BBB@BBB@BB@BBB@DBB@D@B@@@B@@@BAB@@@B@D@@@B@@@B@@@BAB@@@@@B@@@B@@@@@@A@@@A@@@@DA@AB@@A@@BC@@BA@AB@B@B@@AB@B@@@@A@@@@BA@@@A@@@@@ABA@@DC@CBABABABABA@CBABC@A@A@AA@AA@AAAA@@AAAAA@A@A@A@C@ABA@@BABABABABC@ABABABA@ABCB@@A@A@A@A@A@A@ABC@ABABADAB@BAD@@ABBBA@@BAB@@ABA@ABA@C@ABA@ABA@ABABABA@A@ABABABABAB@BAB@BAB@BA@@BA@ABA@ABCB@@A@ABA@A@A@C@A@A@A@A@A@A@ABABCBABABAFABAB@B@B@D@B@BBB@B@@AB@B@B@B@@AB@@@BA@@@A@@@A@AAA@@AA@A@@@A@A@AB@@AB@BA@@@ABAA@@A@AAAA@@@AA@@AA@AAA@@AA@@AA@@@AA@@AAA@@@AAA@@@AAA@A@AA@@A@@@A@@BA@@B@BABAB@@@BAB@@AB@BA@@BAB@BA@AB@BABABAB@@@FGBEBO@IGQ@C@CBEDCFCT_BC@@@EBE@AEACAAA@ADODIBADCBCDADAB@@@B@BAB@B@@@BA@A@@BA@@@A@@@A@@@A@A@@@A@A@@@AA@@A@@@ABA@@@@BA@@B@@AB@@@BAB@B@B@B@B@@@BAB@B@@@BA@@B@@@BA@@B@B@B@@AB@BBB@BA@@@@B@BB@@B@@@B@@@@BB@@@@BB@@@B@@B@@@@@@@BB@@@@@B@@@B@@@@@@BB@@@@@B@@B@@B@@A@@@@@@B@@@@@@B@@@@@@B@@B@@@@@@@@@@@@B@@@B@@@@@B@@@B@@@BB@@B@@@BB@@@@BBBB@@@B@@@@B@B@BA@@@@B@@@@@B@@@@@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@B@@B@@@@B@@@B@@@@@B@@@@B@@B@@@@@@@B@@@@@@@@@BB@@@@@@B@@@@@B@@@@@B@@A@@@@B@@A@@B@@@@AB@@@B@@@BA@@@@B@@@@@BAB@@@B@@@@@@@B@@@@@@BB@@@@@@@B@@@@AB@@@D@@@@@B@@@B@B@@@B@BA@@@@B@@@@@BA@AB@@@@@@@B@B@@@@@B@@@@A@@@A@@@@B@@@@AB@@@B@B@B@B@@@B@D@@@BB@@B@@@D@@AB@@@@@BB@@@@@@BA@@@@B@BB@@@@@@BB@@@@B@@@@@BA@B@@B@@@@@@A@@@@A@@@@@@A@@B@@A@@B@BA@@@@@A@A@A@A@@@AA@@A@@A@@AB@AA@@@A@A@@@@@AB@@A@@@@@@@A@@@@AAA@@A@@@@@A@A@@@@@@@A@@@@B@@@@A@@BA@@@@@@@AB@@@@@@@@A@@@@A@@AB@@A@@@@@AA@@@@@AA@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@@A@@@@AA@@@A@@@@@A@@@@@@AA@@@AA@@@@A@@@@@A@@@@AA@@@A@@@@@@AA@@@A@@@@AAAA@@@@A@@A@@@@A@@@@@A@@A@@@@@@@@B@@A@@@@@@@A@@@@@A@@A@@A@@B@@@@AB@@@@A@@@AAAB@@A@@@A@@@@AA@@@@AA@@@@@AA@@A@A@@@@AAAA@@@A@@@@@@@@@A@@A@@@B@@A@@@A@@@@@A@@@A@@@@@AB@@@@@@@@A@@@A@@AA@@@@@@AA@@A@AAA@@@@AA@@@@@@@@@@C@AAA@C@@@AAA@CAAACAA@AA@@A@A@ANKHABA@A@C@C@IAA@@ACAAAE@CAAAAC@AACA@ACC@GBCBA@C@CAAACDG@CAC@CAA@CACAAAA@AA@EE@CAQ@CBCPGPIREXC@@DABAD@DABADADADADABADADADA@@BAFAFCF@D@DBD@DBFEFENEBADE@EACAGAO@EBC@CDCDADCD@H@H@L@H@H@DBDBF@B@DG@CAECEEECIAGAEAC@C@AFIDCBABABC@IBCDCDC@@D@FACGCAAAAAAAA@CBABA@AAKECAA@A@AB@BAHAFCFABADAB@BBBBBDD@B@BA@ECUOECA@A@@@EHADA@E@G@EACACCECAAA@CBABABEDEFAFAD@PADADABA@A@CBG@E@AAAA@@@ABA@AEK@AC@@@ABIFCB@BBB@@BB@BABED@@@BB@B@B@BAB@@BBBBBD@BB@B@@ADAD@B@BDBBB@BAB@BAAC@AA@A@@AA@@GAE@C@@@A@EBM@GBIBE@A@CAMU@@AAA@C@A@CAACAEAAAA@@A@CBADGJCDAD@D@B@BBDAF@DBB@D@@@BA@CBA@A@G@C@CBABABC@E@C@AAAA@ABA@AB@D@B@BA@A@AA@AAAAABA@EBA@CAEAGCEAC@EBA@A@IHEDEBA@ACCCAQBK@@B@@A@@B@@@@@@AB@@A@@@@@@@@@A@@@@@A@@@@AA@@@A@@@@@ABABAB@B@B@@A@@BA@@@@B@@@B@BA@@B@@AB@B@BAB@DB@@B@B@@@B@B@@A@@BA@@B@B@BA@@D@@@HABADEBEDCBADANBN@@@DADC@ECEMOIIAKBS@C@E@ABABABEBC@AAG@C@GBABABA@CAG@ABCFG@ABA@AB@@A@GBIBA@@BA@@B@@@B@BAB@@ABA@G@ABABA@@B@@@BA@@B@@@B@BA@@@A@A@C@A@AAA@@@@@B@B@BABABCBIDGFG@CBA@ABABABADAFAB@B@BA@@@@AAACECAAA@AAAA@A@@B@DABADAB@BBB@DDD@BBB@BA@@@A@A@A@ABAB@@A@@A@@AC@A@C@EAAAA@@BAB@@@B@B@@A@A@@@@AA@AB@D@BA@ABABAB@BA@AAAACA@AAA@A@A@ABABA@A@@@BABAD@@A@ACA@A@A@A@@BBBBBBDBDBBBDDDDBD@@B@D@FAF@HAF@DAFCDADABABABABA@ABC@ABCAC@CBAB@@AB@@@B@@CDEBAB@B@B@BB@@BABABE@CDAHCDA@C@A@AECAAC@CAEAGIGECAA@@@ABCDEBEBEBA@ABQHADA@ABA@A@GCA@A@C@A@CBA@SEMACAA@@A@IAAAAE@G@G@@@@@ABE@A@AAGGC@CACBAAGAEAC@A@AA@@@A@ABABCFKBC@A@C@C@ABI@C@A@A@AAAC@AAC@AAA@C@AA@@@A@ABA@AAAEGIEAAEIEAGCE@SIAAAA@C@A@ABAB@D@D@DB@@B@@@BABGBABAB@B@DABA@@@AAM@EAAAA@@CAAA@A@A@ABA@ADCB@BAB@B@B@D@BA@@@AAK@E@EACAAC@AA@A@I@A@AD@D@B@DA@AAAA@@@AA@@@AA@@@A@AA@A@@@A@A@AAA@@@AA@@@A@@A@A@@@@AA@@AC@AAA@@@A@@AAA@CAA@AAA@A@@@AA@AA@@ACAC@A@A@@BAB@BBJA@CBKDGDA@E@A@CAAAEBA@ABCAEAECCACAABA@EBCAGEE@EAEAKQKKCAAACBCBCDAFAF@DCDADABIBEB@DAH@FDDDDFBDBFBD@JCHCDADBB@FFHJDBBDBDDDBDBBBBPBFBFBDDDDDFDBBDDFHLBD@B@BCDCB@B@B@B@BCBC@E@GCCCCEAAAAA@ABABABCAA@ACAAAAE@A@A@ADADABA@A@IK@@A@A@CDADC@SAO@AAAACSCCCAABCBEFAD@BABGBEBE@E@CAA@AB@D@FBF@DAFABFHJFNPHX@J@DBFFBHBNBJBDDBNDDHDFDBDBDCLBFDHDFBDBDBBDBBBBB@DABABCFIHEFAD@BDPFNFJ@DEDGHAH@JCDGDKLKNGDA@AFCF@BABABA@@@@BA@AB@BBBJRBF@BADC@ABAAMKCI@G@CGEGKOKaKKCEAG@GBCAACCE@IAGAKCMEICEA@C@G@G@C@A@ACACCACBCBCDGLCDABADEBEBE@EAEAC@@BAB@F@B@BABA@C@C@AB@@@HBDABCBGBEDEDCFABA@@@CD@@@B@@@BBBBBBBDD@@ABCB@B@B@B@B@B@B@BB@B@B@DB@B@DADA@CACAAAA@ABEFMFGDC@ECEAC@CBCBAB@@EEC@A@GDADILADGLEDIF@DBBDD@BAFEFIDIFEHCH@L@@AHDRDDDFB@FBDBBDBD@FAF@DBBFDBBBD@FEH@B@B@BDDDBF@DDBB@BCD@@GBKHIDCBMAE@AB@B@LBDBBHDRDNJDHFFDDB@HB@B@H@@@B@BCBA@UBA@AB@BB@@@@B@@B@BB@@@B@@@BB@@B@@BB@B@@@B@B@@@@@B@BB@@@@B@@@@@BA@@@AB@@@@A@@@A@C@A@@AA@@@A@@AA@ECCE@@A@A@C@C@A@AA@CA@@@AAA@A@A@GHKD@@C@E@A@C@AAGIECQGIAECCA@A@CBABAB@B@PJD@B@BABA@A@AOK@C@CBIBABC@CCIMICAAC@@BABAH@DADABAB@DAHAHAD@JA@AB@B@@A@@@ACCGAMAG@A@EF@@C@A@GECCIACAC@ABABELABA@A@A@@E@E@@@AA@@AA@AAC@CAAAAA@EAAAA@@ABABCDAD@DADBDBBDBB@D@B@DABBBB@B@BBBBDBBBD@BABABAAQGGAEACBGDADCBAB@@A@AAA@GG@@A@A@AF@@ABA@A@AA@@@AA@@@A@AB@B@@A@@@A@A@@@AAA@A@A@@@AB@B@BBF@D@B@B@@B@DFDD@FBB@@BBD@V@B@HB@BB@@BCDADBB@@DDBB@BBB@BAD@D@B@@BB@BABEHCBABAAQECAA@A@ABA@AB@AACC@C@CAEGAAC@AAA@A@ABABA@ADCBABCBA@CBA@C@IAAACBEBA@A@ABCBCBEDMJMN@@BB@@BBHDFDHBFB@BB@@@@B@B@@@D@B@@B@B@B@FAD@@@B@D@BBB@@@@BBBBD@DAB@DBBBDDDBB@D@BADEHAB@BB@B@FDB@B@DBB@D@DBD@DBBBB@DDBDBB@BEBGB@@EBCBABCBAB@@AB@BABABA@CB@@AB@@A@@BA@@BABC@CBC@ABABCDCBC@E@BB@B@@BBBBBF@D@B@BABADABEFABAFCF@B@F@@@DBFDDBFBD@D@BABADCBABCBE@CBCBCBCBCDAB@B@F@F@BABBD@B@B@DADA@ABCBCBA@GDADCBABAB@BBD@DBBBBBDBBDDDBB@BBFAB@FAFCBCFAB@D@B@DCD@B@DBBBBD@FABBF@FBDBDBDDDHBD@FAB@BBDAB@BADADAB@BAB@BBDBBBBBBBDFBBBBBBBB@BBB@D@B@BBBBB@@@B@BB@@DBBDFB@@B@BBD@F@@AB@B@DBDBBBB@BBB@BDDBB@BBBBB@BBD@DBF@B@D@B@BAFADAD@BAB@DAB@B@BAB@@ABABABABA@ABABAD@BCHAJCHEDADCBAD@B@D@BBBBD@B@D@B@D@B@@@D@B@B@B@DAB@DAF@BAB@D@DBFAB@D@DCD@BCFAF@D@D@B@B@BBD@F@BABAB@B@B@B@HAB@BABAD@B@@BDBBBDBD@BDBDDB@@BBD@BDD@B@DBBBFDFBDFFBBBDBB@B@DAB@DCB@D@BABADABA@ABA@A@C@C@GAC@A@CBA@@@AB@@A@ABA@EDADAB@BCB@@CBC@A@C@CAC@CAA@EACAC@ABA@CB@@ABEBABEBCBAB@BADBB@DAD@DAFCDADABEDADAD@BADAD@B@D@DABABADABADAD@BBF@F@F@BADAD@B@B@DADABCBCF@BABAD@D@FBB@DBFBDBDBBBDBB@DBDBFBDBD@BBB@FBF@D@D@BBDBDDDDDBB@BDF@BBF@B@BBB@DBFBF@BEF@D@F@F@H@DADCBABAD@D@HCDCD@FBH@F@F@F@BBDBFFF@D@DBF@DCFCBABABEBE@G@G@CAABABBDBDBFBD@DAD@DAFCFCDEFADCBC@E@GDEBCBCFAFBHDDDDFDBFDF@DCFAF@H@F@DBB@DBB@DDF@H@F@FCDEDCBCBCDEDCDADAFCFCBCBE@CBABEDCFCBGDB@BB@H@B@BBFBD@BBB@D@BAB@B@BA@@B@B@BB@BBBBB@B@BDDB@@BBDBB@FFBBBD@B@B@BBBDBDDDDDDDD@BBBBB@B@BBF@BBBB@@DBBBB@@@DBBBD@@CB@B@FADBB@D@@@B@B@BBBBDBD@B@BBBB@BBB@B@B@BD@@B@B@BBB@@DBBB@B@@@DBBB@B@BBB@@@B@@@DBB@B@B@B@BA@ABABBBBBJBD@HBHAHAHAHCJAF@F@JAHCDCFADEFEDAFCFCBDDFFD@@B@BBB@B@@A@AB@@C@A@CBE@ABCBA@C@CBIBA@A@AB@DABADABABAB@D@B@B@BBB@BDDBB@D@F@DABC@ABABABA@ABC@ABA@ABA@ABABAB@B@@@BBBBBBB@BBBB@@BB@B@@BB@B@@@BBB@BBBBBBBB@BBBBB@BBBBD@BBB@BBD@BB@BBB@@BB@BBBBBDBBBB@B@B@DBB@D@@BB@BB@BBB@@BB@DB@@BBBBBB@DBBBDBB@BBBBDBB@BBBB@@BB@BBB@B@B@D@B@D@@AD@B@@AB@B@BBD@DB@BBBB@BBBBDBBBBBBBB@BBBBD@B@B@BBB@BBBBB@BBB@BBB@@BBB@BBDBBBBDBB@B@B@@@B@B@B@BBB@@BBB@D@@AB@B@B@B@B@B@D@BAB@DA@ABAB@B@B@D@@@BBBB@BBB@BBBBB@@BBB@BBD@B@B@B@@@DBB@BA@@B@BBB@B@BBB@@BB@@B@@B@BBBA@@@A@A@@@A@A@A@A@@@AAA@A@@@AB@@@B@BAB@@@B@BAB@@@BAB@BA@@@@BA@@BA@A@@@A@A@AB@@A@A@A@A@ABA@A@ABA@@BAB@@AB@@AB@BAB@BA@@BAB@@A@AB@@C@A@A@CAA@AAAAAAA@AAC@@AA@A@ABA@AB@@AB@@AB@BAB@B@BA@@B@BA@@B@BA@@B@BAB@B@BA@@BAB@BAB@@A"],["@@A@@AE@E@E@C@ABC@@BA@BB@BBBBBBBD@D@DADAFCBA@A"]],"encodeOffsets":[[[103137,28527]],[[103144,27450]]]}}],"UTF8Encoding":true});}));