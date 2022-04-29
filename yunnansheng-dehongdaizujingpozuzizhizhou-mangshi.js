(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('芒市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"533103","properties":{"name":"芒市","cp":[98.577608,24.436699],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@AAA@A@A@AA@AAA@AAA@AA@@AA@@@A@@@@@A@@@A@@B@@AB@@@@A@A@@@AAA@A@@@C@@A@AA@AB@@AB@D@B@BBFFBBB@DADALGF@@@D@B@@@@A@A@A@A@A@@DA@@BC@AAAAA@@@AB@D@FA@@@@@A@C@ABAB@D@D@BAB@DCB@B@B@@A@@@@AAA@AA@A@A@@BCBCBADCDA@A@A@AC@AA@@@@BABADAFADAJEFEBA@@@AAE@AB@BAB@@@@A@@A@AA@@@A@@BAB@B@@AAA@@@ABAFCBA@A@A@@A@A@A@C@@@CA@@@@BAAC@ACIAG@A@@@@BBDDB@BB@AB@BABCBAB@AA@@@AA@@@AA@@@ABIBA@@@@B@D@BDBDBBD@DBFDDBF@@@BBBB@@B@B@DALEDA@@DABBD@B@BAB@BBJFDBBBD@J@DBB@BBB@BAB@@@@@BB@B@BBBJFFBF@DB@BDBDBBB@@B@BA@@B@BBDBDBBDHHB@DBD@F@B@BABA@@B@@@B@B@BBB@B@B@BAD@DBDBB@FBFD@@FDDBD@B@B@DAD@B@BBB@DADABAD@FADAB@BCBEDABABBD@DBF@D@D@BABABCB@@ABABA@@B@BBB@@BBAB@DCB@@@B@BBB@BAB@@@B@@BBB@@BBHBBBB@DADADAB@BABABABA@CBABC@C@CBABCBABC@@AAEAGAEAAAA@EEAA@C@EBABCBANCFABCAE@AB@H@@A@AAA@C@A@ABAB@@AHABAFEDC@IBGBCDA@BB@D@DABABABAB@B@B@B@BA@A@AAAACCA@AAACAA@CAA@AACAAAA@AACAACAAAEAAAC@AAC@CACAAAAC@AAAAAA@AAAAAAAC@A@ABC@@A@@AAAA@CBABABCDABC@ABC@@BABABA@AAA@@@C@ABA@A@ABAB@@A@AAA@@AAC@@@A@AAAAAA@C@ADCDAD@DCFADCBAB@@ABA@C@AAA@A@A@ADADAB@BABABAB@BABA@CBA@CEG@A@ABAB@BABA@AAC@ABCDCFCBAB@B@D@@A@AAE@C@AB@@AAAAAA@C@AAAC@CAA@C@AACAA@CAAAA@A@ABABCD@BAB@@AB@BABA@ACG@AB@@A@AAGCCCAEAA@CA@C@@@@AC@C@C@CAAAAAC@CACACACACAAACAC@C@EBE@CDC@A@C@CBC@C@A@AAAAAA@@A@A@A@EDA@CDCBCDABCDCDABABCB@DA@@BC@CBC@EBEBCBC@A@CBAAABC@ABCB@BA@ABA@C@AAAAAAAAACCCAAACAC@CAEAAACAAAAACAAAA@CAA@A@CAAAA@CAAAAA@C@C@CAC@C@AAC@A@C@A@ABAB@BAB@BA@CAA@A@C@CAAACAC@CACAC@A@AAA@AAA@ABC@A@A@AAAA@@@@@@@@@@AB@@@@@B@@@B@@@B@@@@@B@@@B@BA@@@@B@@A@@@@@@B@@@B@@@B@@A@@@@@@@A@@B@@A@@@@BA@@@@BA@@@@@AB@@@@@BA@@@@B@@@B@@@B@@@B@@B@@B@@@@AB@@@@@B@@@B@@@B@@A@@@@B@@A@@@@BACGCECECCCCECEAAACAE@CAA@ECC@A@C@CBOBA@AB@@GDABE@C@E@EBC@CACAICEAAACCEAAACACCGEIGICCAGAG@EAA@AAC@AA@@A@@@@@@BAB@B@B@@@B@@AB@B@@@B@BAB@BA@A@ABABA@A@A@A@ABA@A@@BC@@BABA@C@ABABABABADA@A@A@ABA@ABAB@@ABC@A@ABA@AB@BA@@B@B@BAB@BABAB@B@B@B@B@D@B@BAB@@ABAB@@CB@@A@A@C@A@AAA@AAC@A@A@@@C@A@A@AAA@A@A@A@@@CAA@C@A@A@C@A@A@A@C@A@A@C@CBC@A@@AA@@AA@A@AAABA@A@A@ABC@A@@@A@A@@AA@A@A@A@A@CAA@A@A@AB@@ABC@C@C@C@@BA@A@A@C@A@A@ABAAA@A@A@@@A@A@@AA@A@C@C@C@C@A@C@@AA@A@A@C@A@C@AAC@CAC@C@A@C@EAC@A@A@A@C@A@A@CAA@A@A@AAA@A@A@@@A@A@CAC@CAC@@AA@AAC@A@A@A@A@A@C@AAA@A@A@A@A@A@A@AAA@C@A@AAA@A@A@A@AAA@@AAA@@@@@AAA@CAA@AAA@A@A@A@A@AB@C@A@AB@@A@AB@@@@@B@B@B@@A@@BA@@AA@A@@@AACAAAC@A@A@ABA@@@A@A@A@A@ABA@@BA@A@C@@@ABA@A@A@A@A@CAC@A@A@A@ABC@A@A@C@C@A@AAAAA@AAA@A@A@A@CBA@A@A@A@A@A@C@ABA@ABCDEDA@A@A@A@CBA@A@@@CBA@@@A@A@AAA@C@AAABA@A@A@ABA@A@C@A@A@A@A@AAC@AA@@A@ABC@ABA@A@ABA@@@A@@@A@A@ABA@C@C@A@CBA@ED@@A@A@C@A@AAA@AACACAC@@@@EC@A@AAAACAACA@CAEAABBEEBEBC@CBA@C@C@C@CBC@A@C@A@GBABA@ABAB@B@@EFADAD@F@L@BA@A@EACAC@EBEDCBEDAB@@C@C@C@E@C@EAC@AACAAACAA@A@ABC@A@C@CBAAIBKBGFKTCDA@@@A@AAA@ACA@ECC@E@AAA@ACAACAC@AAAAAC@@AAA@C@ABA@A@EAC@CAA@C@A@C@@@C@AB@DARCFIHGDEBAD@FCD@@BBBBBBBBB@DBBB@BBBBBDBBBDBBBD@BBB@BBRJVTBBBDBBB@BBB@DB@BBB@DAB@B@B@B@BABB@@DBB@@@BBB@B@B@@@BBB@@BBBB@DBD@DBB@D@B@B@@AB@BAB@BBB@BABADABAB@B@B@D@BBB@@HJBD@@ABA@ABA@CAG@AACBA@A@CBA@@@A@A@@@AB@@ABADAB@BAFAD@B@D@DBF@FBDBD@@@B@B@DBB@@BBBB@BBBBD@@BBBBBBBBD@DBDBD@B@B@@@BB@@BB@BBF@@@B@BBBBB@BB@DBFB@@D@BBBBBDB@BB@@B@D@BAD@BAB@@BB@@B@D@BB@BBB@DBB@B@@@BBB@BBBBB@DBB@D@@@BBB@@B@B@B@B@B@@@BB@@B@@DF@B@D@@@B@DABA@ABABABA@@B@B@B@B@BADA@AD@BAD@@@BBBDDBBBB@@B@@@B@B@DABAB@@@BA@@B@B@@BB@@BBBBBB@BBDBBBBBDBBBBD@BBDBBDBBBBBDDBBBBBBB@BB@@BBB@BB@@BB@BBD@B@BB@BD@BB@BBDBBBD@@BDD@BBB@@BBB@BBDBB@BBB@BDBBFF@@FDBBBBDB@@BB@BBB@@BBB@@@BAB@BA@@BABAB@@@D@B@@@B@DBB@DDB@DBBDDDBBDD@BBBB@B@BBB@@BBDBDB@@BB@BBB@@@BBBBBBB@B@B@B@F@B@B@@@BDBBBB@B@B@BBB@DBB@@BBBBBD@@@D@B@B@BBBBD@DBB@BA@@B@@@BB@DB@BBBBD@BBD@BB@AB@@@B@BBB@BB@BBBB@@BBBB@DB@BBBB@@B@BBBBB@@BB@@@D@@@B@@@BB@B@@AD@BB@@BB@B@B@@B@BBB@@BBB@B@B@BFDBBFBBBF@DBDBB@D@D@D@DBB@B@BADABBD@J@B@@BBDBDBB@B@@BDJBBBD@BAB@@@@AB@BBD@@@BA@C@@@@@@B@@AFBB@@@@B@B@B@@BDB@@@@B@BABAB@@@B@@@BDB@B@@@FCB@D@BAH@D@B@B@DAB@B@@@@B@@CBADAD@BA@@B@@@B@B@@AB@@@@@BB@@@BBDBBBFFBDBDB@@D@BAB@BBDBF@F@B@BB@DAFCB@@@B@B@BDB@B@D@@@DADCB@D@D@F@B@B@D@B@BBB@B@D@@@DBB@@@DA@@B@@@B@BBB@@AB@B@@@BDBDBB@@B@@@B@BAB@B@B@B@H@F@BBBBD@@DBD@@@BB@B@D@B@B@B@D@B@@B@@@BAB@@@BBBB@@BBB@BADABCDAB@BBL@BADABHP@HADABEF@@AB@B@DDL@D@@BBD@D@JD@BD@BBDDDH@@B@@@BADA"],"encodeOffsets":[[100786,25250]]}}],"UTF8Encoding":true});}));