(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('掇刀区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420804","properties":{"name":"掇刀区","cp":[112.198413,30.980798],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@ACA@A@A@C@A@A@AA@@AA@A@@@EB@@C@@BABA@A@@@A@@CA@@AAAAA@AAA@C@AA@@BAAIBA@ABADABABAAKAC@@AAA@A@GFCBA@A@CA@@AA@A@A@C@@A@C@AA@@DGB@@AACAA@AAAC@AAA@CBAA@A@@BC@A@@ACDM@AB@D@BABA@@B@@B@@AB@@D@B@@ABAAC@@B@BA@@DBB@B@@@@A@A@C@C@@AA@@@@ABAB@B@@AA@@BABC@@B@B@BCBAB@DAD@B@@B@@@@B@B@@@@A@@@@D@B@B@BB@@@B@AB@@A@@BA@AAG@@A@@A@ACA@@@ABABCAC@@A@C@@A@C@E@@BAB@BABA@A@E@GCC@AAA@@A@A@A@A@@@AA@A@A@@A@A@@@@AAA@BA@@B@@BB@@B@@B@B@@A@A@AA@A@@A@@@AD@B@B@@@BA@@@AA@A@A@A@AA@A@ABABABA@@@@A@C@@A@@@ABABEBCBA@@@BA@@BAB@B@@A@ABA@@B@BA@@B@@@DBB@DCB@D@BA@@@A@ACCAABAB@@@B@@CB@@BBD@B@@BA@C@ABABABA@@@C@@D@@A@A@@AA@ABA@@AAA@@AD@@A@AB@@@@C@AB@@A@A@@AAA@ABA@CCA@AAAB@@CFAF@BA@CBC@AB@@@B@@E@@BADAB@@C@@@ABAF@BA@@@A@A@@@@@@B@BBBBBBB@B@BA@ABA@A@@A@CA@@AA@ABC@@A@@AA@G@ACA@AAE@C@E@AAA@CA@A@ABA@ABA@A@AAAAABABC@@@AA@AB@@A@@@AAA@@A@@@A@@AAAB@@AD@@@BA@ABEBC@@@AA@@AABC@EB@@AAAA@BCBA@C@A@@BAFBB@BB@@B@B@BBJ@B@D@D@@@@A@A@@FADABABA@A@AB@@@BAB@@ABAAGAABA@ABA@AAAACAA@A@@BBB@@@BC@AB@B@F@BABC@ABA@AD@BA@@@CCAAA@@@A@A@@BAAA@@A@A@@@AAAA@@A@A@A@@AAAAAAA@A@CAA@@AA@BC@@AAC@@@A@AAA@AABA@A@@AAA@AAAF@BA@@B@B@B@@AB@BA@ABA@@BABCDAB@@BBB@@BABA@@B@B@@@BB@BB@B@@BFK@CDA@ABAB@B@BD@@B@@AB@@A@ABADA@A@@@AA@@@@A@ABA@@ACAAA@@@E@A@@AAE@AAACC@E@A@A@AA@A@A@M@@@CAC@A@@@KBE@E@E@AAA@AA@@AC@C@@@AB@@CBA@@D@@CBC@C@@A@AAE@A@A@C@EA@C@AB@B@BBB@@A@@@@@EA@A@@BA@AAAA@A@A@AA@@A@ABAB@B@B@@BBAB@@A@A@@@CFAB@@CA@@ABABA@@A@AEA@@A@A@ABA@AB@BA@EBC@CAECEAGECACCECACC@EAMCMAMAMAC@@@A@@@@B@@@@@B@@@@@@A@@@@BA@@B@@@@@B@@@B@@B@@@@B@@@@@@@B@@@@@@@@@@AB@@@@@@AB@@C@@@A@ABA@@@A@@@AB@@@@A@@@AAA@@B@@A@@@@B@@@B@@@@@@AB@@@@@BA@@@@BA@@@@@@@@@@@A@@A@@A@@@@@@@@@@BA@@@@@@B@@BB@@@@@B@@@B@@@@@B@@@@BB@@@@@B@@@@AB@@@@@@BB@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@B@@@@BB@@@B@@@@@@@@AB@@@@A@@B@@B@@B@@@@@@A@@B@@A@@@@@@@@@@@A@@B@@@@@B@@@B@@@@@@B@@@@@@B@@@@A@@B@@@@@@@@@@@B@@B@@@@@@B@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@@@B@B@@@B@@@@@B@@@@B@@@@A@@@@B@@@@@B@@@@AB@@@@A@@DA@@@A@@@@@@@@B@@@B@@@BA@@@@BBBBB@B@B@@@B@@@@A@@@@B@@@B@@@B@@@@A@@BA@@@ADA@B@@@B@B@@@@@BB@@BB@@@BABAB@B@BBBA@@B@BAD@B@@A@@@A@@BCB@DAF@DBBDBFDF@FCNINOBCB@DDBDBDDDBBFDDBFHFNBDAN@@DDFBTJF@FAD@F@FDFFJRFDHBJDFBJHDB@BDBDDBB@BADA@CB@BAB@B@@@DABA@ABA@@B@B@BBBBBBD@BA@A@@BAB@@@D@BAB@B@B@D@B@@@B@BAB@D@@AB@B@B@@ADCNKJEDGLABBDDHEFCBC@CCEECCEFAB@BBDLHBB@DCHBDDF@JAFCFADBBDDFH@B@DADCDCBCDAFAH@H@FBJ@HAFGR@F@LDDF@LAHCVSXQRI\\QFAJDJDF@FEFCDEF@FBBBD@D@B@BADKFEBCB@D@BB@B@DEJAJ@BBDFHFRBNAJ@F@B@BBX@DB@BBBABCBC@A@@@@@C@A@ADAHANCD@@@@@N@DALGHMFALCF@FCBE@I@ECMCAKAE@EA@K@CECGAI@A@@@A@@A@A@C@CACA@C@CBC@A@A@AABCDABA@ABA@@BAB@DABAJU@CBAJGBEDIBE@ADABADBBDDN@FBDDBFBJ@TERA@@BB@B@BB@F@B@BBBFADADADBBB@F@HAHBDBDDB@DADAB@B@@ABCBADCFCBAHADADAHE@@@@B@BABEDMBCBCBE@A@E@E@GDA@C@ACAA@AEACBCBAFCB@FCBA"],"encodeOffsets":[[115048,31663]]}}],"UTF8Encoding":true});}));