(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('祥云县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532923","properties":{"name":"祥云县","cp":[100.554025,25.477072],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BA@ABA@@@@AAEAAAACCA@@@A@E@A@C@E@G@C@EEEA@@A@@AA@A@CFCBA@E@CACAC@@A@@@@@A@@@AA@GEAA@ABCDC@A@A@@@@GCEAA@ABCBEBC@CAC@ACCC@@@@AC@A@ABCDCDABEBE@ECEGCGAE@A@AC@CDCBGHIFEDEDCHGFEDABABA@AB@@ABA@C@@@AA@@@A@@A@E@ABA@A@AA@AACAAA@A@@@C@AA@@@C@A@CBC@AA@@A@A@AACA@@A@@@@B@BA@A@A@@@CBC@C@@B@B@BBB@@B@B@@@AB@BAAA@CCAAA@@@@DADA@C@C@CBA@CBCC@AAAEG@@@A@ABA@A@CAACACAI@IDE@C@CAICEAC@@@@@CB@BCDCBABABKFGFCBKAK@K@IFC@@@KHEBC@C@EBA@CDADADA@GBCBCBEFABCD@@AAECCAEAAAAABABCDMBGBC@C@A@@BABAB@B@BBDBBABA@@AI@CBCAIAEAAE@E@CAECAA@A@@@@BAB@BABAB@@CACCCCC@A@ABABA@ABAB@B@BA@ACKAC@ABAB@@ACGAAA@@@@A@@AB@@@@A@@B@@A@@@A@@BA@@@A@@@A@@@A@@@@@AA@@A@@@A@@@@DADAB@@@@CDA@CBC@A@A@KCAAA@EBEBCBA@C@@@EBABA@A@AB@BAD@DABABEBEBA@A@A@C@A@@B@BABCB@BEDABCFABA@AB@B@D@DB@@BBB@BABA@A@C@@@A@@B@@A@BBBBB@@B@@ABABEDEFCBA@@@AA@CACAA@@A@CBAF@BBBBB@BBB@F@B@B@B@@AB@@@B@@BB@@@B@B@B@BA@@AECCCA@A@ABABC@ABCBABABAAC@@@ABCFABA@EACAA@A@A@@B@DCH@B@B@@A@AACAEEEAC@AACA@CAC@A@ADIBA@A@A@@K@C@CACAAAAA@@ABABA@@BBLAB@B@@AB@@@D@F@DABADABA@A@A@@A@A@@CBA@A@@B@@@B@D@B@@@B@B@@@D@@@B@@@BCBAB@B@B@@@DA@@@AACAAAAA@@ABAB@@@B@BDBBD@B@DAJAF@BA@AB@@@@A@ABA@CBA@AAMCCAC@A@A@CBEDABA@A@@@CACAEAAACAAAA@@@C@ABABADADA@@BABKFC@ABAB@BAB@BCD@@@B@BBBBD@@@@@@@B@@@B@BABAB@@@BDF@BBF@B@@BB@@D@@@@D@BB@BBDDBBBBBDDHBDBBBBB@DAB@B@B@BBBFBDBB@BABABABAD@BB@@B@@BB@@@B@@@B@@@BA@ABABABABAB@@@BA@@@A@AAA@@@A@CD@B@B@@@B@B@B@DABABA@@B@@BFBB@DA@A@A@A@EEAAA@EDA@A@@@@@@B@@@BBB@B@@AB@@A@A@A@AAA@A@AB@@ABA@A@CACAAACAAAAAAAABAB@BA@A@ECA@AAA@A@@@@@A@A@A@C@A@C@AAGCE@A@AAAA@A@AA@@@A@@@@B@@@@@@BB@BA@@@A@CA@A@AA@A@@@CBABABABA@C@A@ABAB@BAD@BAHAD@BADBNADADKJAB@FABA@AA@@A@@@A@@@ABA@C@AB@@ABA@@@A@CCA@@@ABCBADABA@@@BBFDBB@B@@A@E@A@@@AA@@A@A@@B@F@BABA@@BCN@DCF@B@@@B@BB@B@B@@BB@@@@@BBA@@B@BADABDFB@@@AB@@ABABA@CBA@@BA@@BABBBPXDDBBBB@@@D@@@@@DADCDMLCDEBCBG@QCMCE@A@AB@@FH@B@B@@@B@B@BBH@D@BAD@@ABCBCB@@CDEFCDCDABCBABA@FDBDBDB@BBBBBFBDBBDD@D@B@@@@CF@@ABABC@ABA@AB@BAF@@@DADAB@BABGF@@@@GHEDAD@BBBFHBBFAFAFAB@DBBBHBBCDCBCDAB@BA@@BBBBBBBBB@@@FAF@F@B@FBDBDDFDFBB@HDDBD@B@B@B@BBBBB@@BBD@BAB@@@B@@@@BB@@@@JFB@@@BAB@@AB@@@@A@@@C@@@@@@@@@@B@B@B@HBF@FAJADABAFKDABAB@DBJHDDD@F@B@BA@@B@FAFADCBAAA@CA@BCBA@@@ABABAD@B@D@FCHEHGBC@AAAMCC@EBC@A@CCACCCAADEFGDELED@B@DBDDHHFBB@FADAFAH@HBBBB@B@DAFC@@B@BB@@A@ABAB@@@B@B@B@BBBFBB@BAB@BAB@BADABABAB@H@D@B@B@BBBD@BDBDB@B@B@@AB@B@H@@@@BB@@BCBA@@B@BB@FBBB@BB@BJNBBBBB@DABAB@BBDB@@B@DBDDBBBBB@D@BBBB@B@BABCBABA@@BBB@BD@B@D@@@DABA@@BBDFBB@BD@DBB@D@@B@BCJABA@@@A@@@@@AB@D@DBFB@@BBB@BB@BBB@B@B@BBB@BB@B@B@BA@@B@B@@@BB@B@B@@B@BBD@BB@B@BB@@@BA@AB@BABAB@BA@@@@BBBBD@@DBB@@@DBDDHFJFDDBBD@B@DA@@BB@@BB@@@B@B@BABEB@B@B@@BD@B@@@@A@A@C@@@@@@B@@@B@@ABC@CBA@A@@BA@@B@BABABCFCDADGFA@@B@BHHB@@@BCDCBA@A@@B@BBBBJFHJB@BA@@BADBB@DF@BB@@@DAB@@@BBBBFFB@B@DADAB@@@@@@BA@@BABABCB@@AB@B@B@@A@ABA@A@@BA@@BBBBD@J@F@BAB@@@BBD@@@BA@@@A@ECICA@@@A@@@@@BBHH@BBAB@B@@@@BAH@B@BABEF@BA@@B@@BB@B@BAD@@BD@@@@@@@D@@@BA@@@@BEBABA@A@CAA@AAC@A@A@C@@@@@AB@BA@A@AAA@AAEAA@C@A@CBC@CAA@A@@@@B@DA@@@A@EAA@A@@BA@@B@BBBDFDDBBDBHDD@B@DBBDBFFNBBBBDBBBFFB@BBB@B@@@@BAD@D@BABA@ABADCF@B@BDL@@ABABEBABABAB@@@BB@@@BB@B@B@BCF@BABB@@B@@@B@@A@@B@@BBFHFHDFBB@B@@@BB@BB@@@@ABAD@@@B@@AB@@@BBDDFFDB@B@DD@B@BAB@D@DBDB@@B@B@B@B@@@@D@F@F@DAF@BCFEFCBCBAB@BAFBD@FDFBNJVJDBD@B@BABADEDKDCDCDAFADADABCBA@CAA@ABABAFADA@A@@@@BC@ABAD@HBD@D@BAB@BA@@@AAA@A@A@@@@AGCK@AAC@AAC@A@CAAEC@A@ADADADABADAHAFAJBBBFDDJBD@BBBB@DADADCDAD@D@DBBBD@DA@@B@B@DAHGREJALEJEBCB@BHHDFBDD@FDB@D@B@FAD@B@B@FFJBBB@D@@ABAB@B@@@B@DE@A@CBCBADA@@HG@@F@DAJAFBBBBA@AAABC@CB@@@F@F@D@D@BABCBCDQBABCRQFG@@FEFEBC@AGIACAAAACACAAAACCKAC@AB@B@DBBBF@HDHBB@D@DBDBB@B@B@DA@AB@D@FBDBB@DABE@AAIAGKKEGECGECCACAA@ACACAA@CACAAAA@AAACACEECC@ABAHEBABCBK@CFAHCLCDABC@A@@AA@AAC@GAC@ACCACAA@@AA@AA@@AB@B@D@D@DBB@DBB@DB@@BBDBB@F@D@FCFAHCBAD@BBD@B@@@B@@A@A@@BABAB@@A@C@CBCBABI@AAC@@EC@AA@@ABCFEBABC@A@CBAAAA@@ABC@AAA@@AA@@@ABABA@A@C@E@A@AB@BE@EAE@A@@@AHGDCBA@A@QAAA@AA@@@A@G@ABAB@BA@C@EAAA@A@C@CAAA@@C@A@A@CBABABABABA@A@A@A@C@C@AAA@C@E@G@A@CA@@KC@@AA@A@C@A@A@A@A@A@CAA@A@C@EAA@@A@AA@@AA@A@@@AAAAA@@@A@CAA@A@@@C@@AC@A@ABCDCBA@@BABABC@A@AAACCA@@AAC@AA@AA@@@A@@BA@@@AAE@@@AAAAA@CBA@C@A@@AA@ABCBADC@@@@AC@@AAC@IDA@AA@@@A@@DAB@BABA@C@@@AAAAAA@BAB@F@DABABEBA@@HE@AFG@A@@@AA@A@A@ACCE@C@C@G@AAA@ABAB@@@DAD@BAD@HEBA@AAAAAB@BAD@D@@@DABEDCB@HAB@B@@@@AA@AA@A@C@CBCBCBA@AD@FAFBB@B@BAD@BAB@@AB@@BBBBB@@@@B@B@@ABA@A@C@@AAA@@AA@@AB@@@B@B@BBBDB@B@B@@B@@@@@BABCDCB@@AB@@@@@@D@@@BAD@F@BBD@D@BBB@B@BA@@@A@C@ABABADAB@B@@@DABEB@B@@@FD@BD@BADA@C@A@CCKCIAA@AB@LEB@DBB@B@@@BA@@@AAAIGGAAAAAECCC@A@@@ABADAHGBAB@B@B@@@BA@A@@BC@@@@BABBB@@AB@@A@@@A@@AA"],"encodeOffsets":[[103468,25963]]}}],"UTF8Encoding":true});}));