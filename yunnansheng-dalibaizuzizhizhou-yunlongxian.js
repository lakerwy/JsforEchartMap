(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('云龙县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532929","properties":{"name":"云龙县","cp":[99.369402,25.884955],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@BDBB@D@D@F@D@D@F@DABADEDC@CBAD@B@F@F@JBHADABABE@C@AD@F@J@JBBDBDLBD@D@D@BCFAH@DAF@BD@@@BBDBDBDDDDBDBDBFBDG@ABE@C@ABC@ABA@CB@BABAD@DADAFADEBA@AD@HBF@HBBBDBB@DBBBBD@D@D@D@H@D@D@F@F@D@DBD@DDD@DBDBBAB@BEDA@A@C@A@EAA@C@C@ABABCBCB@DAD@DAD@F@DADADC@@DABAB@D@BBD@@BBDBBD@BADA@CBABAD@DADCFADCDCDCBA@CBCB@DBD@D@DCDCDAFAFAFAFAHADAD@FAD@DBBBD@FBDBFBB@D@D@D@D@BBBBBBBD@DBD@D@B@BBB@@D@BAFABAD@F@D@D@D@FAB@B@BB@B@DADADAF@DAFABABCBCBCBEDEDADCDABAF@DAFADCDABABABA@@@@@A@A@A@@B@@BBBBBBBBFDDBDF@H@HAHCFAHBF@DDBHBB@HCFADCBABABBB@DBDBB@F@F@FAFAD@B@BA@AB@BA@@AA@AAAECCAAC@ABGDKHSFID@HDB@DBLDRFFBD@BB@@B@DAJ@D@@@DAF@D@F@FAD@F@DBB@BAB@DCD@BBBBBBAB@BCD@D@B@BCBADCFAFAFAFADAD@DAFAFAF@BCFAFABAFAFAF@FABADADADCD@DADCFADAD@DAD@D@BAFAFABADCDAFCFAD@B@D@D@D@DAD@DAFAD@BAD@DAF@DADADAFADADAFCFADCFCFCFAFEJAFCFADA@@BEJEF@@ABABA@AAECcMIAC@GFEBCBG@CA@@CACAA@A@@@@B@FBJ@@AD@DAD@D@B@FAF@F@F@FAF@D@BADAD@B@BAD@@@B@BBBBBBBBBD@BBBB@@@BB@@@@B@@@@@B@@@B@@@B@@@@@@A@@@@B@@@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@B@@AB@@@@@BB@@@@B@@A@@@@B@@@@@@@B@@B@@@@BA@B@@B@@@B@@@@@@@BA@@@@B@@A@@B@@@BA@@@@B@@@@@@A@A@@BA@@@AB@@@@A@@B@@@@@@@B@@@@@B@@@@@B@@AB@B@@@B@@@@@B@FBD@B@B@BABAB@B@BABAB@B@B@D@D@DBHBDD@B@BB@BBF@FBF@@@B@BAB@BAB@@@BDBBDBB@B@@@BCDA@AB@BAFBFBHBDBBBD@BBBB@BBB@B@BBB@BB@D@B@B@@BBPLBBDB@B@B@F@D@BAB@@AB@@@BBBB@BBD@BBDDBBDBBD@@BB@@B@@@BAB@@ABBB@@BBB@@BB@@BBB@DAH@JADAD@DADADAD@D@F@H@J@R@F@D@B@B@B@B@@ABA@@@A@CAOAA@A@A@AA@@@A@GBC@C@CA@ABAB@DARA@@BA@ADA@AB@BBBBB@B@F@D@F@D@B@BABB@BBDD@BBFDD@DBD@DA@ABAB@DABADAB@DADADABABAD@B@B@F@D@BADADAD@@ABABAB@BAF@DAF@BABABCBABCBADABAB@DAD@D@D@DBDDBDBDBB@D@BEBOFQ@SPGHADADDJAFCFMRABAB@B@BB@JDHBHDB@BBDDBDBFDDDDBBDDBBBBBBB@D@FBB@FF@@BFBHBDBBFBFBFBDBBDDFDBDBF@FBF@D@DF@BB@BBHDB@BB@BBDBH@B@B@BB@B@F@DAFAD@DAB@B@D@B@@BDDDBBDDBDDBBB@BBB@F@HAVABA@@B@B@@BBDDDBBBBBBB@DBD@D@FAD@@BBD@D@B@BBB@B@BB@DBF@BBB@B@DDBB@DBB@B@B@@@BABCBCBCBKBCBEBCBCBABAD@BABBD@D@BBD@B@DBB@FBB@D@BBBBDBBBDDDDHBDB@DBB@BB@B@D@DBD@B@BBDBB@BB@@BB@B@B@@AHDFB@@B@DABADAF@B@@AB@@A@C@ABCB@D@B@BBFJDHBBBBDBBBB@B@DBFBFBDDB@DB@@BB@BBD@BBBBBB@DBDBBBB@B@@B@DAB@DB@BBB@DBF@H@B@B@@ABCBAD@TBH@DCDAD@D@B@D@@@B@B@D@DDHFBB@B@@ADAB@BFDB@B@D@DBDBB@DDBBDB@DBD@BBBDBBB@D@BBDHFJ@DBB@BABADABA@ABA@CBC@C@C@AHOFKFIBKBABABC@A@@@AAA@AAA@@BA@@BAB@BABA@A@ACE@CAC@CBC@@BABCDCDABAFCB@BABC@CBCAC@AAAAAC@A@C@AA@@A@@@@AAABC@CAA@CAA@AAA@@AA@ABABCBA@C@AACAAAC@C@CAA@CA@@AGSGKEKIK@@@AACAA@AAC@A@ABABAD@DBF@D@D@B@BAD@BCDADAD@BAB@JCB@@A@@@A@@@AA@@A@AAAAAAAAA@@BA@@B@HDFBFBBAB@BCHMBADADAFCFCDADABADAB@D@BBBBDDDBDBDBD@F@D@F@D@DAB@BADABADAD@FAFAD@@@BDBBB@D@FBDDFDFDDFFDBD@BBABCBCDCBC@A@CACACAA@AAA@ABC@ABCBCBA@A@A@@AAC@C@AA@@AA@ABC@ABC@AAA@@ACAAACCEA@BIAMBGBGEOMQIKAACCCECCEE@AAA@C@E@CA@@AA@AAAAAAACCCEKCEAAAACAA@EAE@EAA@@A@AAC@E@EBE@E@CAA@ACAAAACBA@A@ABEBEBCAAAA@A@@@AB@BADABABC@A@CB@@@BAB@BAB@BCBA@A@EBE@EBC@ABC@A@C@AAC@C@A@C@C@ABC@C@A@C@C@EDC@CBCBCBCBCBADCBCBCBCBCBEBCBC@CBABAD@D@BABA@C@CBABA@ABA@CBABAB@DABADABEDCBCDC@A@CBCBABADADABADADABCBAD@BAB@BA@A@ABEDCDADBHDFBDBBABAACACGGACAC@A@@BADAD@D@@EACAAACAC@CBEHO@CACACA@CAC@@AAAAACC@@@ABA@CBEDC@CBEBAB@BAD@BADABA@@@EBCB@BAB@BAF@B@FBB@FCBABABADADCBAB@@@DBLJ@@B@B@@AAAB@@A@@BA@@B@BADCDEFKD@DA@AB@BA@@BA@CAACCCCAA@ABCBCB@BADBBBDDBLBBBBD@D@JAB@DA@@B@BBBB@B@DAF@B@B@BD@B@FCHCFCDAD@BBHHDBFDFDB@@BBBBBB@B@B@@@BADGBA@AB@F@DADAB@B@D@FAF@DADAD@B@DABAAAACC@CAAC@A@ABC@C@ACAACAAAAAC@ABCBCBA@A@ABC@C@CAC@AACBABA@ABA@AA@@CC@AAE@A@A@AA@@@EBI@ABG@C@@@BAB@BABAB@@A@C@C@E@EAA@AA@@@ACCA@C@CAE@CCCAAAAI@EAABA@A@A@A@ABA@AAA@@A@AAC@ABAA@BAB@B@@@@A@ABC@A@A@AA@@CAAC@@@ABC@A@@A@@BCBADAB@BA@A@A@@@AAA@@A@AAAAAC@C@A@@@EC@@A@ABADABABABA@C@CAA@A@A@ADADA@@BAACAA@@A@ABA@AACAAACAACACAAA@@C@CBAB@@CBC@@BAACA@@A@CAA@EAAAC@AAC@C@AAACAAB@B@@A@@@@BA@@@@BA@A@@@A@C@A@@@A@@AA@@A@@@@A@@@@A@@AAA@@@A@@@A@@AA@@@A@@@@@@@A@A@@@A@@@A@A@@@A@@@@@@@@@@@@BA@@@@B@B@@@@@@AB@@@@AB@@@BA@@B@@ABAB@@A@@@A@@BA@@B@@@BA@A@@@@BA@@@AB@@AB@BA@@@@@AB@@@@AB@@@@@B@@A@@A@@A@@@@BA@@BA@AB@@@@AB@@AB@BABA@@@@BA@AB@@@BA@@B@@A@@@A@@@@@AB@@@@AB@@@@A@@@A@@BABAB@BAB@@AB@@A@@@@A@@AA@@@A@@@A@@@A@A@AB@@@@A@@@@@A@@@A@@@A@@@@@A@@@@@A@@@A@A@AAABA@@@@@A@@B@AC@A@@@A@CAA@AAA@@@A@A@@@A@A@@@A@@A@@@@ABABEBEDC@EBE@CBC@CBEBCBE@C@C@C@AAC@C@CAC@A@ABC@@BAD@BAB@BBB@DBDABABABADCBC@CDC@EBCBAB@B@F@DBFAD@BABA@C@C@EBC@EBC@A@CBCBCBABABCDADABADAB@B@B@@DDBBB@@DAB@@ABCBAB@BALABABA@CACAA@AAE@CBA@A@A@A@AA@@A@ABCBGBEBQ@EBIBSHGDGD[NEDEDEBAB@@AAACGI@@@ABAHODCFABAFCJILIFGFGBGEEGCGECEAE@GBEFM@CA@A@MAEBABABC@CBABAB@BANADEFA@C@CAA@AAC@G@EBCB@@AA@@@@@ABABA@ABC@CBABCB@DCLIDE@CBC@CCEACAC@ADELKDCHGDGBA@ACACAKCEAC@ABABCDC@A@CBCBC@A@C@KCC@A@@A@AFG\\YBEBABEDEDC@AAAACAC@A@A@CC@@@AAC@E@EBA@AD@B@BABC@A@C@AAAAAA@AAC@C@CAAACAAAAKCEAA@ACAECEA@A@C@EBK@A@E@A@@@AB@DAFA@C@M@@@ABABAB@@A@CAGACCCABA@CBABC@E@ABGAGAEEE@A@EAAAAAAAA@@A@@@AACAACAA@@ACACCE@ACAAAA@@@ACACAA@C@EBC@@BACBA@AAA@CAA@CAG@C@C@ABC@EBAB@@AFABA@@BA@CACAE@E@ABCBA@@@@BABCFAB@@CBCDCBA@@B@@@@ADCD@BA@ABE@ABA@CBCBA@CBA@CBADCBA@A@A@AAAAA@@@A@C@C@ABAAA@A@AAC@CBEAE@C@CAEACACAAA@AACAE@EAAAAA@ACCAAA@@@@EAA@CBA@A@A@@@@@ACECA@A@@@AACE@AA@@AA@@AAAAA@AA@@@@B@@@B@B@@@B@@A@@BA@A@A@ABA@A@A@@@AB@B@B@B@BA@ABCBA@A@A@EAA@A@A@A@A@CAA@E@AAA@A@@AA@@A@C@C@@@@BCBA@A@AB@@ABCBABCDEBA@A@@AACAC@ECCAC@AACBAAAACAAAA@AAAA@AAC@@A@CACA@@CA@ACC@AA@C@A@@@AA@@@A@@AAA@A@C@G@@@CAAAC@AACACAA@A@A@A@C@A@C@AAC@CACAC@A@@@ABAB@DABAD@BADCDABAF@BABCDA@ABABCD@BABABCDAB@B@BDBBBBB@B@BABADAB@B@D@B@BBBBBDDFDBBDBBBBB@@@B@@AB@BAB@B@B@D@D@FADABABC@ABCDCBABABADABAD@BADADA@@DABAFAJCBCBE@AAA@@AA@CC@CA@EAA@E@C@E@E@E@E@CBA@GAAAAAKACBA@CDAB@B@D@D@D@FAD@BBDB@D@BD@@ADABCH@FADBB@@B@DABABB@BBH@HBD@BABGBCDA@@BDBBJBFDDBB@@DD@FBD@F@DADAB@BAAA@@@@A@A@@@A@@A@@@AA@@A@@@EBA@@@A@A@A@@AAB@@AB@@C@A@A@A@A@A@A@@BA@A@A@A@A@@@C@CBABABA@CB@@A@@@@@@@@@@@@AA@@@@@A@C@@@A@C@@@A@A@CB@@A@A@CDABA@A@@@@@A@@@A@CA@@@@AA@BC@@@@AA@A@@@@@@@AA@BA@A@@@A@@@A@@@A@C@C@A@A@A@A@A@@@@@A@@@@A@A@@A@@@ABA@A@@AA@@@@BA@@@AA@@@A@A@@@@AA@@A@A@AAA@@@@@AA@@@@@@A@@@@@A@@AAA@@A@AAAB@@@@AAA@C@@@AB@@A@@@A@@@A@A@C@A@A@@@A@AB@@AB@@A@A@@@ABAB@@A@A@AB@@@@AB@@@BA@@@@@@@@B"],"encodeOffsets":[[101262,26251]]}}],"UTF8Encoding":true});}));