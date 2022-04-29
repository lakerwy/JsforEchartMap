(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('泸水市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"533301","properties":{"name":"泸水市","cp":[98.854063,25.851142],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@@BA@A@C@E@A@ACAAAOKAA@@@A@A@CAAA@AAA@A@AAA@AA@AACAAACAGAEBE@ABAB@DC@A@@@AAAACCA@A@@BA@ABA@A@A@@AE@EAE@AAAA@C@ACAG@C@C@C@A@ABABA@A@ABABA@A@A@AAC@E@A@@@@@A@@@ABA@@@A@@@@@A@@@@@A@@@@@@@AB@@@@@BA@@B@@AB@B@@@@@@@@A@@B@@A@@@AB@@@@A@@B@@A@@@@@@@A@@@AA@B@@A@@A@@@@A@@@@@@@A@@B@@@@A@@A@@A@@@@BA@@@A@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@@@A@@B@@@@@@@@A@@@A@@@A@@@@@A@@A@@A@@AAAAC@AAAAAAAA@A@A@@BC@A@ABCBC@A@CBE@E@E@EBE@E@A@CBC@CBC@@AI@E@A@@B@B@DBDB@@DBH@DAFAHED@JBdNFDBBB@BABA@@FEFI@AB@BCDEBEFIBEDEDEDEBCDEBEBCBCBEBCBC@CBE@CBC@ABCBE@CBC@C@C@C@C@ABCDEBEDCBCBABEBE@A@CBC@CBCBCDEBC@CDCBCBCBCBA@EBEBEBEBABEDE@ABEBEBE@CBCBCBEBEBEDEBCDA@A@A@CDC@ABAAAAAAAC@CDA@ABA@CAE@C@EBE@C@E@CB@@C@I@CBA@@@AAC@EAQEKCCAA@GCC@EJGTCLAH@BBDDBFDBB@BBB@@ABA@@BABA@C@EBEBE@E@A@CACAA@AAABABCDEBGDA@GACA@CAEBGDEBG@G@GCECAECAAAAAAAA@@@AB@B@B@@@@@B@BABABADCBCBE@CBEBADCBCFCFCDADADABABABE@CBEBCBC@C@AAAA@A@EBC@C@C@E@C@ABEBABC@@@AA@A@A@CAC@CACAAAAAAC@C@C@C@A@EACAEAC@AACAC@EBC@CBGBEBEBEBEBCBCDCDC@C@CAA@AD@DABCDCDCDEBCDCBC@ABAB@DCBABC@AAAC@AC@AAC@A@ABCB@@CDCBCBE@C@CBC@CBA@ADADAB@B@D@DBB@F@B@D@BCBAFA@ABCACAC@CCC@CAC@E@E@C@C@G@C@C@C@C@AAAA@CAAACAA@GAE@GBCB@FABCBEBC@CBCBA@ADAB@BAD@BAD@F@BAH@ACAEACACCCCCCACAAA@@C@@ABE@CBGDE@A@C@CACCKCAAA@I@I@EBCD@F@BABABCAG@I@E@E@ABCDAD@FCBCBA@C@E@C@C@E@C@CAAACA@ACC@CAA@CDEBA@E@AAEAAA@CBA@A@ABAAABA@ABCDCBCD@DABAB@FCDCFCBC@A@C@CACAAACAAAA@AECCCAA@A@CBADEBC@E@CACEIAEA@A@C@E@AA@CAC@G@EBA@ABA@A@@@AA@A@ABA@ABA@CAE@GDG@C@C@E@E@CBC@EBEBCBC@GBC@CBG@I@C@GACACCGECACAIAC@EBGBA@EBE@CBC@CBAB@D@D@@@J@B@BA@@@A@A@C@C@CDCDAFCFAF@FBFBHBFBHBHBFBFBF@FBDDJDFBHBHADADCDCDEDADBD@FBHALAD@FDDBDBBBDDFBDBDBD@FBB@FAFCBCDABCDCDABAFADEBABCBCBAB@D@DBBDDDDBDDB@D@D@DAFAD@DABBFCDABCBCBCBABC@CBCB@B@BBDBD@F@DABAB@DBDBFBDDFBD@BDFCBCBEBA@C@C@CBADCBCBABCDCBABAD@DAD@BADADADAD@DCBABAB@DBBBDDBB@FBBB@B@DBBDBDB@DBD@FBDBD@BBDBD@BADABCBABCDABAB@DAB@DAD@DABADC@ABCBC@C@A@AFAD@FDD@DBFAF@FAFAFADABADBDBD@DCFCDCFCDCDCDC@@DAFAFAF@D@F@HCDAFCDADCBEDEDCDCDAFCDADCFEDA@E@CBA@A@EBCB@FAD@B@DADEDEBE@C@CAGAC@G@E@C@EAA@@D@F@FAF@DAF@DCDADADBBBF@BAD@BAD@BBB@B@B@@ABA@AB@@@D@D@B@@B@B@BB@@@B@BA@@BA@ABA@@@A@@BAB@B@BAD@DAB@BAB@DBF@D@F@D@DAD@B@D@DBD@DBBAB@DABADADCFADCFAD@B@@CACAGBAAE@@@A@@@BB@DBB@D@D@@@BD@DBBBBDAB@B@BAD@@@@A@@B@J@BAB@@@@CDADADAHABAD@DAD@DAD@@@@@D@B@BDDDBDDB@BFBDBD@D@BADAF@BD@BBDADADABADADABADCBADCBADBB@BBDBBBDBBB@BDDDBD@DBD@BBBBBDBDD@BBD@D@FADAF@F@FAB@DADAD@BABADCBABA@CBABA@C@CBABCBABA@CBC@A@CAA@AACACAAACA@AAAAAA@AAE@A@C@CBCBCBC@ADAB@D@B@DB@BBBBBBDBBBBD@B@DBB@BBB@BBBBBBBDD@BBBDBDBDB@BBBBBBB@D@BAD@B@@@@DBB@BDBBBFBB@DDDBBDDBBDDBBB@B@BAB@D@D@BABAD@BABABC@A@ABABABAB@DBD@D@BBDBBBBBBD@D@D@F@DBD@BBBDDDBDBD@FBFBDBF@FBF@DAD@BABABCBCDADCDAD@DADBD@B@D@DADADADCDCDCDADAB@DAD@B@DABA@ABABADCBAD@@A@CBA@ABC@A@@AAACCCEAAA@@@A@ABCBABC@CBEBC@CBC@@B@@@B@BBHBDBDBDBB@DBDBD@DBB@D@D@DAFABADAD@D@B@BBD@BBDBBDFDDBDBB@D@BA@ABAB@BAD@DAD@D@D@@B@BA@@B@@BB@DBDDDBFDDDFBDDBBDBDDD@BDBB@DBBBBBBBBBDBBBB@BD@BBD@BBBDBB@BBBDBBBBBDDB@BB@BBBAB@DADAB@DABAB@B@B@@AD@B@D@BBD@BBD@D@B@BBBBBDBBBD@DBB@DBBD@BBD@B@D@D@B@DAD@D@BBB@BBBD@BB@B@B@BAB@BAB@B@D@BBB@BB@BBBBBB@BBDAB@@@BABA@ADABCBCB@BAB@BAB@BBB@BBBBBBDBDBD@B@D@BAD@F@B@DBDBDBDDDBD@B@D@BAD@D@D@DBDBB@DBDDDBB@DBDAD@F@BADABABCDAB@DAB@B@@@D@@BA@@B@@@BB@@BBBBB@HBD@BDHD@@DBB@D@B@@BBB@BBD@BBBBBB@D@FBD@@AB@@ABCBE@CBC@ABABABA@@B@F@DBDBF@F@D@FBB@D@DAD@DADABAD@DAF@DADADAD@FCBAD@BABAB@D@D@B@D@BBBBB@D@DCHCNEPEF@HBJ@FAH@B@BA@A@A@CBAB@D@@ABABCAC@CACAAAAACAAAEAC@C@C@@@A@@@@@ABA@@B@@AB@BA@C@@@A@@BA@@B@DBLD@@DFDDDDDDBB@@BDDBFBDB@@F@@@FBDBD@@@B@DAD@B@H@B@FBDBB@@@B@BBF@@@B@B@BABABAD@FABBF@DB@@BBB@@@@@BBBABBDAF@D@FBLBDBBAB@D@D@B@B@@AB@@@@ABA@A@ABC@C@CACAC@EAABA@ABAB@BADADCBABCBABE@ABC@ABABCBABCDABA@A@A@AACCECGEICGAEAA@E@C@C@CDC@C@A@E@G@E@E@CAE@A@C@ABABABCDA@A@A@A@CAA@E@E@IBC@CAAAAACEAAA@A@A@A@AAA@C@ABABABEBC@C@E@E@G@EAC@C@C@EBE@CBCBCBE@C@C@E@CCCAC@@AACCAE@C@ABA@@BAD@FCDAFCDADCDAB@BABAB@@A@@@AAAAC@A@AB@@ABABC@A@A@@AACAAACAACAC@C@E@C@ABA@ABA@C@C@E@C@C@E@AAAAAAAAAAA@A@A@A@CAC@CACAA@C@ADEBEBCBABAB@B@@A@A@A@C@EAEAEAE@ABABABAB@@CBAAA@A@C@EACACCCCCAA@A@A@AB@@@H@DB"],"encodeOffsets":[[101403,26772]]}}],"UTF8Encoding":true});}));