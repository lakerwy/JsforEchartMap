(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宁乡市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430182","properties":{"name":"宁乡市","cp":[112.551885,28.277483],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBD@D@DAF@FBF@FCDAFCBABABADABAB@F@D@DBB@DB@BB@BF@B@B@@@BEAEAE@A@@@AB@@@BBB@@ABADA@AB@BBBBBD@B@F@HCHADAD@BADABAD@FBDBBDDB@F@DB@BBB@BA@CBCDAD@D@F@DBBBBB@BBBD@B@D@@BBDBBB@B@B@@EBAB@B@BDDDDDDBFBDBBB@B@DABAD@B@D@@BBDA@ABABAD@DBBDDFBDBB@@BABCAC@CBAD@B@DBBB@BBB@BBBB@B@DBD@D@BABAB@BAB@BAD@@BD@DAFABBB@@@@@DD@BB@@BB@B@@@BA@@BABCBAHABADABAD@DBDDDBD@F@D@DA@@DD@D@DADAFCF@B@BB@@@DADEBC@A@@B@D@DBFBFDF@F@@@FB@@B@DB@BB@DDDBDBBBB@B@BAB@@@@A@A@AAAAACA@A@@BAB@B@B@DAB@D@BAB@BAFABAB@D@BBBBBBBB@@DFDBB@B@@@B@B@F@DCB@BB@BABABCDCBCB@@AB@@@B@D@B@BAD@DAD@BDBD@FDDBBBDB@BBB@B@BBB@F@D@F@D@D@BBBBBBBBBB@@B@B@D@BAD@D@B@DBF@BBFBD@LBDBDD@HBFDBD@FBH@BBB@@BBDBDBFBFBHD@BB@@@@BB@@BFJDHLTBB@@BRBJ@F@BB@@B@F@BF@B@J@D@DBHHFHHHHHBBFCHAPANIDCBAFCBC@A@@CCKCCAA@ECEGCGACAAACACAC@EAC@C@C@A@A@ABADADCPCDADAD@BABA@@@ABC@@BA@@AA@AACAAAA@C@@@C@CBC@ABCDCBAB@BADAB@DAF@F@F@DAB@BA@A@A@CAACCAACC@@AA@AB@@ABAB@D@DBD@B@BAD@BAB@@@F@JDD@B@BA@ABA@C@CBA@ACC@AEACACACAECEAE@CAACAEBCBG@ABABAFCBCFCDEDC@ABADEBABCBAB@@AA@A@CAA@A@@A@ABC@@@AACCACACAAAA@@C@@BA@ABAB@@ABA@@AA@AA@A@AAA@AA@A@ABABABEBA@CB@@ABABADADABA@@BA@A@C@@@@@C@A@AA@GCE@CA@@BABAB@FDB@B@@AA@ACCAGAEAC@A@AAA@AA@AAA@A@C@C@ABC@G@EDCBCBCCKCA@AAA@ACA@A@A@ABA@ADCDCDCBABA@A@A@AAAAAAACAACAAC@AA@@CACAAA@@ACAEEECAAAA@AACBA@CBABA@A@C@A@A@@@@@AAAAA@ABA@CA@AA@CCAAAA@@A@@AA@@@A@@A@@@@@@@@AA@@AB@@CACACACA@@B@@@@@@@A@B@A@@AA@EAAB@@@@@@C@@A@A@CBE@AAEAA@A@AB@@AA@@@@BA@@AAAAAA@@@@@A@AAA@AA@A@A@@AA@@@@B@@ABABA@ABC@A@A@ADE@EAAAAAACA@ADEAA@A@@@A@AA@@A@CAEAACE@AEAG@CEA@AAA@C@AA@@@@@ABAB@DGB@@AA@A@@C@E@A@ABAB@FABB@AFANDLBLA@BF@BBB@B@D@BAFAACAA@ABA@AB@B@BABABBB@BAB@BAB@BADAD@BAHGJBBCBCHAB@D@DABABEAA@AD@FCDALAD@BAB@DADAD@B@B@DADDDAB@D@BABBDB@@B@B@DAF@DAB@DDB@B@FB@@B@BBD@BDBBDBDBBBBBB@D@@@BBB@@@@@BA@A@AB@BADA@AB@@ABCBBB@BA@BB@BABADA@@B@D@@C@A@@BCBABAAA@A@A@A@AAEAC@CFGFGBCAECA@AA@@BA@ABCD@@A@C@@ABE@@@A@ABB@@@@AA@@@@@@@@@@@@@A@@@@A@@C@@A@ADA@A@@@@B@@@@A@B@@@@A@@@@AAA@A@@A@A@@AC@@DABAB@DC@@B@@A@A@CLGDCBCAAGEE@EC@@AE@C@E@EAAAAAAC@@A@CBCBC@C@C@AAC@CAAAAACAAAC@C@CACAC@ABA@A@A@CACACCCCCACCEEECECC@C@CBA@EAA@C@CAC@A@@AAAACAI@A@AB@@AA@AAAAC@A@A@@BADABA@@@AAAAAI@EAC@C@G@C@ABIJABAB@@A@AAC@@@E@CAE@E@EAE@C@A@@BBBB@BBBBBBB@@B@@ABC@CBCBCBCBABCB@@ABCBC@EBCB@BCDABABA@C@E@CAAC@AACACCCAAAACC@A@@EI@A@ABAFCBAB@B@DFB@@ABC@A@C@A@CBCBE@CBABABC@A@A@AAAC@AC@A@C@C@@@C@CACACAA@@C@C@CAE@E@E@ABABAB@B@BAD@B@DAB@@@BABADABCBABEDCBC@A@A@C@C@ABA@@B@B@DBBBBBB@BA@CBCB@@@BAD@F@D@@ABA@@@AAA@@AABA@AB@BAB@@@B@@ABBB@B@BABABADAB@@AD@B@B@D@B@BDDBD@BBDBB@B@B@B@BAB@BABCBCBEBCDE@A@A@C@A@C@ABA@AB@@AB@BBB@B@B@@@BAB@BC@A@CBABA@ABAD@B@BAD@DABABA@AA@AACACAAA@AACAC@CBA@A@ABCBC@C@C@@@ABAB@BABAB@@@DAB@B@F@DAD@D@@ABCBA@EACBE@C@C@A@AAA@C@A@@BAB@@BBABADAD@DAF@F@DBDBDBDD@FB@@@BABCBCDGDABA@CBCD@BEBCFIFEDED@BCHAHADCJADCDC@C@C@EAEECCCACACACBCDCDCBC@E@A@AAEAAAC@E@C@AAEAEACA@AAC@E@AABCBA@CACCACAA@A@CACAC@AA@DCBA@C@CAC@ABABCBCBCAAAAAAACACAC@A@A@AACC@A@GBC@A@AA@A@A@C@AB@@AB@D@D@B@DBB@BAB@@ABCBA@@B@D@B@@@@AAGCMAA@E@C@ABA@@@AAA@C@C@EAA@@A@@@@H@D@BA@ABA@AA@ADI@@AAABCD@BA@CAAAAAC@EAC@@@CA@BAB@BA@@@C@C@@BADAB@@C@EAE@ABABA@@BC@IACAA@CA@@CAA@C@AAAA@C@A@@GCAACAA@A@C@C@A@AB@@A@EHAB@@A@CBC@EACAKEAAA@C@ABCDAJABAFAB@@CBGAE@C@CACAEAWEEAICGAAACAA@C@A@C@@@ABABA@A@A@A@C@ABA@ABA@C@G@EAE@A@CAA@AB@B@BAB@B@BAB@BABABA@A@A@A@@AAA@@@ABCBA@AAA@@AAA@@AAAACAAAA@@AA@AA@@AA@A@A@ABCD@BABABC@A@A@A@@B@BA@@@AB@B@BBF@B@BABA@@@AAAAAAAA@@AA@A@C@A@ACGCGA@IKACBE@CACA@C@ABGDA@@AA@@CBGAA@@A@ABABA@CAECECCCACAC@CDCDC@A@AA@CAEA@@AA@CACCAAAE@@@A@A@CBAAA@CACAA@@DABBD@BABA@GBAACAGKCEAAACAA@ACAC@A@EAEAEAC@@@C@C@C@C@@@ABABABCJAF@DCDEBEBSJG@@BA@A@CBABABABA@AACAA@A@ABABA@AACG@AA@A@AAA@AA@@AAABEBE@A@@@AA@CAA@@AA@@A@A@BH@BABA@AAA@AAAAA@A@C@CAAAACAAAAA@AB@BAB@@A@A@AAA@C@@@ABC@C@EA@BAD@@@D@D@DADADCF@BADAFAFAH@@@D@FADABAFA@@BADADADCBA@CBC@ABA@ADABADCBABC@CBABABAB@B@BADABAFADABADAFCB@BABABCBCBEBEBCBA@A@CAA@AAACCCCCCEECECEA@@GACAC@A@A@CBCBABABABABAB@D@B@BBBBDBBBD@BBFDDBB@@@DBBABGDGDA@@@ADCB@BBDBDBD@B@D@BBB@BB@DB@@@@DDDBB@B@DBDBBB@B@BAD@BA@ABADABAB@D@B@B@D@BDFBD@D@BDDDDDBBBBDBDBBDBDBDBB@@BABA@C@CBABADABAB@B@B@B@BCBABABB@BB@BEFEFABEDGD@BADCD@B@BB@FD@B@@@BDHDJDF@@DDFDFDFDFDDBDDDBDDDD@BBB@D@D@B@D@BCH@D@D@BDB@BBF@D@D@FAF@DBBBBD@D@BBDBBDBDBF@BABABA@ABABA@@B@B@@@B@@B@F@D@B@DDBBBDBBB@B@D@BABBBBBDDB@BB@@@@BAJBDBFDDDBF@DBBB@@@BDBBB@@@D@BB@DBHBDB@BBBD@H@L@H@F@DBDBBB@BAB@BCBAD@D@B@BBFDDBDB@DBFBDBD@DBD@B@BBBBDBDBD@D@D@HBFAD@BBDBDADAB@@@D@BDBBD@B@D@DAB@BBBBD@D@D@DBBBB@DBDBDDB@@B@D@D@B@@BBDADADAD@D@B@DBBBBDBBB@D@BAB@B@B@HBHDD@D@BAFEBADAD@D@H@HBD@DADCDA@C@@BA@A@CBABCHAFCFCHADADAD@HADABCBCFGDAFAD@HAD@DBBADAD@DBBBDB@@HFB@BBHA@@F@BAB@@ADAB@@@FADABABA@CBCBA@G@CDC@C@@DAB@B@BAB@BA@A@@BA@ABADBDB@BBB@DBBDFHDDDBF@B@BDFBDB@B@D@BB@@BBB@B@B@B@BBBB@BDB@B@BDBB@BBBBBDBBB@D@B@BB@@A@@B@DBBBBB@DB@BDAD@DC@ADEBAB@B@HJB@BB@D@BBD@@DDBBHBB@J@D@B@D@D@BB@D@FAFAB@BCDAJ@BAD@B@@"],"encodeOffsets":[[115013,28963]]}}],"UTF8Encoding":true});}));