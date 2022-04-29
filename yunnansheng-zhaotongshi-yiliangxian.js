(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('彝良县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530628","properties":{"name":"彝良县","cp":[104.048492,27.627425],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CBABCBG@A@C@C@C@ABAJADGDAH@DDFBD@DA@@@EACACAABA@CDEDI@A@CBABA@EBA@ABA@CBA@A@A@A@AA@@A@AAA@A@@@A@AB@BA@ABABCBA@ABAAA@C@A@A@C@A@AAC@AAA@AAAAAA@@B@BA@@B@@A@A@@AA@@@AAA@AA@@A@AAAA@@AAAAAA@CA@AC@@@CAAA@@AA@A@AB@@ADCBAFADABA@AAC@A@CBEAAA@@@A@@@@D@BABEDA@@@AA@@@AB@BA@@@A@AAAEEAEEG@@@A@AB@@A@@@AAAA@CA@@CA@CC@@@C@I@I@AAA@@CAACCAEAE@CBA@CAAAA@A@@@@@@A@@AA@@@@C@@A@@A@A@AA@@@@A@A@A@AA@@@@A@@@AA@@A@A@@AAA@@@@@A@@@AA@@A@AA@@AA@@AACACAA@C@@B@H@B@@A@CA@ABC@ABC@E@CAAA@AAA@C@CBC@@@AAAA@CCGCCC@CAA@AAAA@C@AAAA@A@@G@AGCEA@A@ABEBC@ACC@A@AB@B@D@@A@@@A@AA@@AAABA@@BABAB@BA@@BABA@A@ADCBABA@@AAAACA@CAAC@CA@A@@@ABA@@BA@@BA@A@@@A@@AAA@AAAAA@@@@BAFA@@@@B@BABA@@BC@A@GCCAEA@@@EA@CAA@@BCDCDADCBODA@CCAAAAB@@ABA@@B@@AB@BABA@@@@BA@A@@@@@A@@BA@@@AB@@@@ABEAE@AC@A@@@CA@@C@GAC@IFABADABC@@B@@A@ABABA@@@A@A@@@AAAEBG@CAAAA@A@@AA@@AA@@AA@AA@AA@@AAA@@AA@@@A@A@AA@@AA@@AA@@ACA@ABABABABCBA@@BABEFCDCBADABABC@@BA@@BA@@@ABABA@@B@BA@@BA@CD@@@B@BABAB@BAB@B@B@BA@EB@BAB@B@@ABCB@BCBAB@B@B@D@@BD@B@D@B@BBBB@@B@D@DAB@BABCB@@CBA@A@EDG@AB@@A@ABAF@BAB@BAB@@A@A@CAA@C@C@CAEAA@AACCA@AAC@C@C@CAA@A@ABAB@BAFADABABC@@BGBA@ABA@ABABABC@CB@BA@@B@@ADABCD@B@BA@CBA@A@@@A@ABA@EFA@EBC@CBABA@ADA@ABABC@A@@@A@@BABA@A@@BABABAB@BA@ABA@ADABAF@BAB@BBB@DB@@B@BBBAB@@@BAB@@@B@@BB@B@@BB@@@BA@@D@BBD@B@B@B@B@@@B@B@@@@@@@B@B@@@@AB@@A@ABA@@@@B@B@B@@@B@B@BAD@@@BDB@BAB@B@B@@@@@B@@AB@@@B@@@@@@@@A@@@A@@@@@@@AB@@@@A@@@@@AA@@A@@@@@A@@@@@AB@@@@A@@@A@@A@@@@A@@@AA@@@@AAC@AAA@@@@A@@@@@A@@A@CA@@@A@@AA@@AAAAA@A@@@AA@@@@A@@@@@@@AA@BA@A@A@A@AAA@A@@AA@@BA@@BABAD@@ABA@@BA@@@A@C@A@A@A@A@A@CBGBG@AB@DBF@BABC@C@A@@@A@A@A@C@A@@BA@@BA@AB@BA@ABA@@BAB@@@BA@AB@BA@@B@@A@@@A@A@@AAA@CAA@A@A@AAA@C@AAA@AAA@A@A@C@AAA@A@A@A@A@ABA@A@@AA@@@A@AA@AA@AA@AAA@@AAA@A@A@A@@CCEGAEAM@CC@C@C@@@AAAD@@ABA@@B@BA@ABABADA@AB@B@@@@EAA@CDABA@AB@@ABABCDCBABA@A@EDCD@DBFFHFF@D@FBB@BBBBBBB@B@B@DAB@@ABC@A@@BABA@@BA@@BAB@@@BA@@DADA@ABA@A@@@A@ADC@EBKG@@A@@@ABABAB@BAB@BAB@BBB@BBBBB@BB@@BAB@B@B@B@BADBB@BBB@B@B@B@D@B@DAB@D@B@B@LDFJBN@D@@BBBBB@BBBB@@BB@BBBBB@BBBB@@@BBBB@BBB@B@DBBBB@B@BB@@BB@B@@BB@BBB@B@@@BBB@B@BBBBDBBBBBBBBDBB@BBBBB@BBBBDBBBFLDDFDFBBB@DADABABAB@@A@@BA@C@CB@@ABAB@@@BAD@B@BBB@B@BB@BD@BBBBB@@@BBB@B@BBB@@@BB@@BBBBB@B@@BB@B@B@@BBBBB@DBB@B@D@B@FDDBDBDDJDDBDBBD@@BBB@BBFDBBFDHHHDLDHDDDDHBBBBB@BBBBB@BBB@@@D@FBBDDB@D@BDBBB@DBBFBBBBB@@BBBB@@BDBBBB@BBB@B@B@B@B@@BHBBDF@B@B@B@D@B@@BBDJ@D@BABABAD@BBBB@BDBDBDBD@BBBBD@@AB@BADAD@DA@@BABA@CBCBABABABAB@@@B@BBD@B@DABCBCDAB@B@B@B@B@BBF@BBB@@BBBBDFDFBF@BB@@@DBB@BBB@B@B@B@B@D@B@B@BBBB@BB@B@D@@BB@@D@FBBAB@BABABAFA@ABC@@BABBB@@@BBD@B@BAB@BA@@D@F@F@BABAB@D@B@B@B@F@BAD@B@@D@B@B@B@ABBBDDD@BBDBBBD@BBBB@B@DBF@B@BBB@BBDBBBDFD@BBD@DBFBBBBB@B@DBD@B@B@DBFBDDBD@@@D@BABADAB@D@D@BBB@DB@@BBDBBDHBDBBBDBDBBD@HB@@LDHBFAJGDC@@@@B@@A@@AEA@@ABCACACA@@A@C@ABCBC@AB@D@D@B@DBDBB@@@D@DAD@FA@BD@DBDDDB@DBB@B@DFDBBDDBFDF@BDFBBDD@BB@BB@@NLBDBD@BBBJHBBBDFDB@HDFDDBNFBBDBBDDDBBBF@@DDDBFBDDBBBDBBBD@BFHFBBBFBHDBBHFDBDDDDDFDADABABC@C@A@A@@@C@@BABE@@BADEFA@ABA@@@A@A@AA@AAAAA@@AAA@A@A@A@ABA@ABABA@AB@BABAB@BABAB@@ABABAB@@A@ABA@A@A@C@A@A@AAAAAAAEAAAA@AC@AACAA@C@AAAAA@C@A@C@ABA@CAAACAAAA@AAAAA@A@AA@@C@A@A@C@@DABCDCFAFA@C@AHC@@B@@@BBB@B@B@DA@ABBD@B@BABCD@BABABA@E@@@A@A@A@@BA@@BAB@B@BAB@@AB@@ADA@AF@DFFDFBD@HBBFBDB@B@BBB@BB@@BBDB@BD@B@B@D@B@BAB@B@BABA@ABADA@ABA@AD@@AB@BBB@BB@@BBBB@BB@BBBBB@BBD@@BBBBBD@BA@ABABAFIFAF@DB@D@F@DHHFFB@@@D@BBB@DBBBDBBBBBBB@BBBBBBBBBDBBBB@BBB@B@B@B@D@@@D@B@B@BB@B@B@@@B@B@DBD@DBDBB@BBBBBBBBBDBDDBBBBB@BBBB@@BBB@D@B@@ABABAB@BA@A@C@ABA@ABCDAB@B@BADAB@B@BAB@BABAB@BA@@BABAB@@A@A@@@A@A@AB@@@D@BBBB@BBB@B@D@BBBBBBBBADBB@DAB@DBB@B@D@BBB@B@BB@@DB@BBB@DABCDCBCBA@ABGHA@CDCBA@AB@@@D@@@D@BBD@D@B@B@D@BAD@B@B@DBB@BBB@BBBDBDDBBBBBB@BBBBB@BBBBB@BBB@@BA@ADA@ABADCBABAB@@ABABABA@@B@B@B@B@@@B@@A@AA@@AA@@A@@@ABABAB@DAB@DAB@BAD@D@D@F@BAB@B@@A@@BA@ABAB@D@B@B@@@BA@@@ABAAABA@ABA@A@ABABC@ABABA@AB@BABA@AB@B@BA@@B@B@BBB@B@B@DBB@@BB@@BB@@B@@BB@B@@@BBB@BB@@BB@BBB@B@B@D@B@DAB@DAB@B@BABABABABA@ABA@@B@@ABA@A@ABA@@@AB@@@B@@@B@@@@BB@@@@@BB@@BA@@@A@A@AB@BABABAB@BA@A@@@A@AA@@AA@@A@A@A@ABA@A@A@@BA@AA@@A@A@AB@BAB@B@B@D@B@BAB@@@B@@A@AAA@A@@@A@CB@BC@@B@BAB@@AB@B@B@B@B@BBB@B@BBFFDDD@DBBBB@FBB@DBDBHFFDDBD@D@DB@@B@B@B@DAF@HBB@BA@ABA@AB@@ABA@@BA@@@AB@@@B@@@B@@BB@BBBBB@@BB@BBB@@@BBB@BBB@DBHFFFFBNLHDFFB@B@BBBB@BB@BBDBBBLDB@D@FAHBPDHFJD^LNBHBNFL@D@B@@A@ECCAABC@AA@@A@AC@AAA@A@A@A@A@AAA@AAAA@AAAAC@A@A@A@C@A@A@CBABA@C@A@ABA@A@A@A@@@AAAAAAA@AC@CACAAAC@AACAA@CAA@A@AAA@AA@@ACAA@AAAAC@@@AAAAAACAAAA@@AAAAAAAA@AAAAAAABA@ABA@@BA@AB@BA@@@A@@BAC@A@AACE@A@CAAAA@CAC@AAAACAAACACAA@CCAAAACAAACAACC@CCCAAACAAACCACAA@CCCCIGA@@@AA@@CDA@ABA@C@AA@@ACE@AAC@AACAA@AB@@@@AC@@AC@AA@AC@@@AA@ACECICAAAI@CDA@CBA@CAAAA@@CBA@CBABADEDEDCHGBE@ABABA@ABA@A@A@CA@@@@AAA@E@C@ABA@AAAAAA@AAA@A@A@AECAAAAAAAA@AA@AA@AA@@A@@@AI@GCEAC@A@C@A@@A@A@A@AAAAA@@CAAAA@AAAAA@A@AAA@AAAA@A@AAA@A@@ACA@AAAAAAA@@A@C@A@A@A@AAA@A@AA@@A@AA@AACAA@C@AAAB@AA@C@AAA@A@A@AB@@ABAAA@A@@AA@A@@@C@CBA@AB@BDF@DCBGFCB@BA@AB@BAB@B@B@B@B@@@B@BBB@@@BBB@@@@@BBB@BB@@BB@@B@BB@@BAB@BABAB@BA@ABC@A@@AA@@@A@AAA@AA@@A@KCSEMCA@ABBB@B@DBB@B@D@BAA@@CBABABC@A@CAA@C@C@C@C@A@A@I@C@@A@AA@@ACAAACAABA@CAC@MAE@@A@A@C@A@C@CAC@A@ABA@A@A@A@ACEGE@A@@BABA@AAA@ABA@A@AAAGCCACAC@G@EBCBEFCDA@A@@@@@@AAAAA@@C@AAA@C@@@C@AAA@CAC@EA@@C@C@CACAAAEAA@AAA@C@C@A@AAAA@@AAECEAEAA@@@@@AA@AA@A@A@ABA@@@EFEB@BCBCDA@C@CAEACCAAAAAAAAAAAC@A@CAC@ABC@A@CBA@A@ABA@A@ABA@A@CBA@AAA@CAAAA@AAA@CAABA@@@ABA@@B@@@BAD@D@DBBBDAD@@A@ABA@@@A@A@A@C@@@A@A@@@@BA@ADAB@DADBDBBDFBDD@FDFDBFB@@@@B@B@BAB@B@B@B@B@@@BAB@B@@@DAD@DBD@B@BABGFCBCD@DB@@@@BAD@@@DAB@BA@@BA@@BAB@BA@@DAB@B@DCD@DCB@BA@@@A@A@AAC@@AC@AAC@A@A@A@ADAD@DABA@A@@AAE@A@A@BA@ABABG@C@ABABEFEDEBEDEDEBE@E@ACAAA@@AA@EACAA@CDA@A@AAE@A@CBA@A@C@C@A@C@CDCDCDCBC@A@A@ADCDAB@DABB@ADA@A@@@ABA@A@A@ABA@@@C@A@A@CBA@A@CB@@@BAB@DABAB@BAB@BABABAB@@ABABA@A@@BC@A@C@A@A@@@C@@AC@@AA@A@A@A@A@A@@@A@A@A@@@A@AB@@A@@DADA@A@AAE@A@C@@@CGOAA@AC@CBA@A@@@@@AA@C@AAC@C@ABA@CBA@A@AB@"],"encodeOffsets":[[106939,28091]]}}],"UTF8Encoding":true});}));