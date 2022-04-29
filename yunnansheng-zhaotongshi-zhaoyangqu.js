(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('昭阳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530602","properties":{"name":"昭阳区","cp":[103.717267,27.336636],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@ACAA@C@C@C@G@@@E@A@AACBA@A@CAC@C@A@G@C@A@CA@BC@CBA@@@A@@A@@@@@@@A@@A@@@@CA@@A@@@A@@@A@@@@@@@A@@@A@A@@@A@@AA@AA@@AAAAA@@A@@AA@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@B@@AA@@@@@@@@A@@A@@@A@ABA@@@@@@@A@@@@B@@AA@@@@@@@@@@A@@B@@A@A@@@@@@@A@@@A@@@@@@AA@@A@@AC@A@G@C@ADC@A@C@CECAA@ABA@A@A@C@@E@E@AA@A@G@OAC@CBE@EA@A@AB@BCB@BA@CBI@GBCBA@AAAAAAAA@AAA@AA@BA@A@ABA@A@A@A@A@AA@AAA@AAA@@AA@@AAA@AA@AAA@C@A@CA@@A@AAA@A@A@C@A@ABA@AB@@ABC@A@A@@@A@C@A@AB@@A@@@C@CA@@@@CC@CBQ@GAEA@A@GDEHA@A@@@@C@A@@BC@@@A@CBA@A@AAA@@AAAAAACAAA@AAA@AAA@A@CA@C@A@C@A@AA@AB@BADA@A@A@CC@E@C@AA@@AA@@AAAA@AA@AAAEAACAE@K@G@ACAKAEACCAGC@A@@AA@A@AAA@A@C@A@@@AAA@A@@A@AAA@AAA@A@AAAAAA@AAC@CAAAAAC@AACAA@AAC@AA@AAAAAAA@A@A@A@ABA@A@A@A@@@A@@A@@AA@A@@BEHY@CAEAACAG@CACAACAA@AAA@A@@AA@BA@ABABA@A@@BA@A@A@A@A@A@A@A@A@A@@@CBA@A@A@C@AA@@AA@@AAA@A@AAAAC@AAAA@@AAAAC@ABA@ABCBC@A@C@ECA@A@@AAAA@A@CB@AC@C@@@AAC@AA@AAAC@A@@AA@@BABAB@@ADCBAB@BAB@B@B@@@B@B@B@B@BADBB@@@BBB@BBB@BBBB@BB@B@B@B@BBB@@DB@BB@BBB@BBD@BB@BBB@B@B@DBB@@@@JDLBVFJBFBDB@B@D@@@D@B@BABABABAB@BC@@BABABABA@AB@BCB@BCBAB@BADA@ABABAB@BABABABC@ABABA@@@I@WFKB@BABAB@B@DAFABAD@FDHJPDLANADADIHADAFGHE@A@AC@C@A@@C@A@@@C@@A@ACA@AA@AAAAA@AAA@A@C@CBA@C@A@C@A@@BA@@BA@ABA@@BA@A@A@A@ABA@ABA@CBCHGFMHC@GE@@@AAAA@@@CAICCEAAAAC@@B@BABAB@@C@AAICGCC@A@CBEDC@AA@G@@AAA@@@A@@@CB@@CBA@ABCDKBEBGAAAIIAAE@CAIACBEBADAD@FBDDFDFBFBFBHBDBF@D@FBDBFDFDFDDBFFFDFDJ@BDFDFDDDDBHAB@FDDBBDJ@FAFIPCJ@H@FJZDJDD@BAFABCDABAFCDADCDABCDABAFCDCHCDADCD@D@DBBBDBDBFBDADCDDFBBBF@L@JABAD@@EBCBCBCD@FBBDF@@BDBHDD@BB@BBAB@@A@A@ABA@ABAB@BA@@@A@@BC@CAEE@@CAAA@ADA@A@AA@A@CHCDA@CBA@@BADAB@@ABABA@@BA@B@@@B@BBD@B@@@@B@@EF@HBHFF@BCDCD@D@DDF@DCBABCDCDCBCDCBEDCCBCACACCCCCAE@C@A@@@E@C@CCEA@ACABA@AB@@ABC@AB@@AB@@@B@BA@@@ABA@@@@BA@@@A@ABABC@A@@@C@ABABAB@@A@A@AB@@@@@@A@A@A@@@CBA@AAA@ABA@@@CACA@@A@@@AAA@A@@@A@AAA@AAA@AA@@A@A@@@@@A@@@@@@@@@@@A@@@@@A@@@@AA@@AA@@AC@@@AAA@@@AA@@@AAI@C@GBCDCAC@C@CBCBEBEBCDCDCF@DADADABCBCAG@CACCCAEACCACAGAAAC@C@AA@A@AB@@A@ABA@@BC@A@@BA@@B@@@CAAAAA@@@A@A@A@A@A@@@AB@@AB@@ABAFAFABADEDADCD@BCFABA@A@A@@AAA@A@A@A@A@KBAA@AA@@CDA@@@AFCBAD@DAHEDEFELKDABA@AAAC@OCEAGAGI@A@AFENEN@HCBAACACCCCACE@GBCB@@@DGDC@A@ACCICAAA@ADIPCDCBC@EEAKACACC@GBCF@DEBE@C@AA@CBAAAAA@A@ABABC@CAEA@CAEAACBCDCDC@CCACBEBEAABABAFEBCBGBGDEBC@CBCDCBCDEBADAFADADABADCDABCDADADCDCF@H@DCDABG@EB@@E@C@CB@BABAB@B@B@DAB@BA@IDABA@@B@BBBJFBB@B@BA@A@CBA@A@CDCBCDABADBD@DEDCBCBC@C@CB@B@D@BGBCBEFEBADA@A@BCAC@@CAAEA@A@A@@BABA@ACAABGACA@CAA@A@@BBDBF@FEJADA@A@KGC@A@A@@B@BA@CAAA@ACAA@CKCAE@C@E@C@@@ACAAA@A@A@E@CBAAECA@E@C@CBE@C@I@@BGHCFCHAF@D@DCF@BABAB@DBBBD@F@D@F@F@HAH@F@D@DDDBDBDBFBFBDDBBBBBBDDHDJDBDFDDBB@DBFBBDB@BB@BBB@D@BBDBBB@D@F@FBDBFDFBFBDBDDDDFDBFBDBHBHBFDBDBB@FBDFFBFBB@HDJ@HBHBDFDHDNDFBF@FAFAJ@J@D@F@DAB@BABMDCBABCB@@@FCFCF@B@@@DCDADERODCFCDCFCFC@@DAFAFAHEFADCBAFAFADABEBCFEDCDAD@BD@DBBFBNGF@L@HBLJLDPDBB@F@JAHEHEL@J@FBDLF\\LTFH@J@HBF@D@B@D@LAD@D@DB@@F@HBDBBB@BAB@D@BBBDJ@DBDBD@@BBHADAH@DCFCFCFADADADAF@DCJADAF@BABADCBADCB@B@BBBBJN@BBD@B@B@@BF@@@B@D@@@D@B@B@@BBB@D@FBDADAB@DADA@CBA@ABAB@@@@A@ADCB@B@BBDBB@@@BC@@AAAC@AAACAAA@ABAB@DB@ABA@A@AA@CA@A@@BCDCB@AAA@AAAA@A@ABC@A@@@@@@@@@AA@A@A@@A@@BC@ABAB@DAB@D@B@BAAACA@AB@B@BBBBB@DCBA@A@AB@DBB@BABABBBBBBBABAAAAC@@BAB@FDB@D@B@D@BBDDB@DBFBF@B@BBDFBDFD@DB@@B@@@BABAB@@AB@B@B@@BB@BB@BBB@@BB@D@B@D@B@B@D@B@@BB@@B@@@B@BABA@ABEFMFCDABAHBB@@@@BDBB@B@@@BABABCBABAB@@BDBDB@BBD@DANGLCJED@B@BB@BCP@DDJ@DBBDBJBHBDAB@B@BAD@BABADABCBADABABAB@BA@@BAB@BBB@F@D@BB@BDDB@DBB@B@@B@BAB@D@D@F@@A@@BA@@BA@@B@@@B@@AB@@BB@BD@D@B@D@BAB@B@DBBAB@D@BAB@BAFABAF@B@B@B@F@B@B@D@F@BBB@B@B@DAB@B@D@@B@BAB@BAFAD@@B@@@@@BBD@BBBBBB@BBDBBB@BBB@D@BA@@@@B@@@B@DAB@@@F@B@H@F@H@D@B@DADEB@B@DBJDDB@B@BABABA@BDB@D@D@DBBD@D@D@D@BBBDDBDBB@@@BB@B@D@@@D@BB@@BA@@BAACBABABAB@BAACA@AAEAAAA@@A@@@AB@BABA@ADABABB@@DBBDBBBD@@BDD@D@D@B@D@D@B@D@F@D@@@@@BBAD@B@@DBBBBB@@B@B@DABAB@FBB@B@BB@@@BBB@@BB@BBBDB@@B@BABAB@BBB@B@BA@@BADEBADABC@AB@DABADEBABAB@D@BAB@@A@@CACA@@@A@ABA@A@ACE@A@ABAB@HCDABCB@BAB@BBBBHHDBJDDDDDBBB@D@B@B@@@BA@A@C@AB@D@B@@@B@B@B@BBB@@@BB@@BBBB@DAJB@B@@@BBFDB@BBFDDBBBD@B@D@DBD@BBBAB@BCBA@@BABABA@ABAB@DAB@B@D@B@B@J@B@BCBA@A@EEECKEI@I@C@C@CAAAC@ECIAA@A@AA@@A@@@CAAAA@@@A@AAA@@@AAAAA@AA@@A@@AA@A@AAA@A@@AAAA@AACA@@A@AAA@A@ABC@A@@BABA@@DAD@B@@AB@@@BABABABC@CAAEAECCCEKAACAAAAAA@AAAAA@CAAAAAAAAAACAA@A@AAA@A@@@AAA@AAA@@@AAA@@AAA@A@AACAA@A@AAA@AA@A@@AAAAA@AAAAA@@AA@AA@AAAAA@AC@M@IACE@K@A@A@CBA@C@A@C@A@A@AAA@AAABC@A@A@A@ABA@AA@@AAAAA@AAA@ABA@ABA@ABABABA@@B@@@LHFAD@BCB@@@B@B@BAB@BC@CB@@A@@BA@AB@@AB@BA@AB@D@BA@@BA@C@A@AAAAAAA@AAA@E@CEEEGAE@CDCFCB@B@BADADCBABA@@BAB@BADCB@FB@@@@@ABAB@BCBABAB@@A@AB@BA@@BC"],"encodeOffsets":[[106401,28045]]}}],"UTF8Encoding":true});}));