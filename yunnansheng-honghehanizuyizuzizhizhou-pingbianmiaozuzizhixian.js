(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('屏边苗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532523","properties":{"name":"屏边苗族自治县","cp":[103.687229,22.987013],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBDBBDBBBDBDDDFDD@B@@@B@BABADABCDA@CDCDCFAD@DCDABADADAD@HADBBADADAF@D@F@D@DABADABA@@BA@@@AB@@A@@@@BA@@@@DABCB@@@@@B@@@@@B@@@@@BA@A@@BA@@@@@@@@@AB@@@BA@@@@B@B@B@B@B@@@@@B@@@@AD@B@@A@@@@@C@@BA@AB@BA@@BABA@@BB@@B@@@BA@@@@@AA@@@@A@@@A@@@@@A@@@@@A@@BAA@@@@AB@@@@@@AB@@@@A@@@@@@BA@@BAB@@ABA@A@@@A@@B@@AB@@@B@@AA@@@@@@A@@BA@A@A@@@@@A@@@A@@@AB@@@@@BABAB@@A@@BA@@AA@@BA@@@@AA@@@@@A@@B@@@@A@@@@A@@@@A@@@@BA@@B@BABAB@@@@A@@A@@AB@@@B@B@@@@@@@@A@@BAAABA@@@A@@@AB@@@@@B@B@@@@@@@@@@A@@@@@AB@@AA@@A@A@A@A@AB@AA@AA@@AA@@A@A@@@AA@@@@@A@@AA@@A@A@AAAA@@@AAA@AAAA@@C@A@AAAAA@A@@AAA@@AAA@@@@AA@@@A@AA@A@CAA@A@@BA@@@AB@@A@@AAAA@@@AB@BA@AACAAA@@AB@@ABA@@AA@A@@@@@@AA@@@A@@B@AC@A@@@@AA@A@@@A@@@A@AAE@@@CB@@A@ABADCDA@A@@@C@A@C@@@A@AB@@AB@DCFE@@B@@@@A@ABABA@@BABA@@BCBA@A@@B@@A@A@AAA@AB@@ABABAAEBA@@@AB@B@BCDAB@B@BA@A@A@@AC@@@A@@BAB@B@B@BA@@@A@A@AA@@@A@@AA@@A@A@ABA@A@A@@@AAA@@@A@ABCAA@@@AA@AA@@@A@A@@A@@AA@@A@A@ABA@A@AB@@A@A@C@C@@@A@C@A@A@A@A@@@A@@@A@E@@@CBABABAB@@AB@@A@@BAB@@ABABA@AA@AECCACAECC@A@A@A@ABADABA@A@A@A@AAACEAAAACAA@AA@CAA@A@ABA@C@A@C@A@C@A@CBAB@BABABABA@@@C@ABABEBA@@@@@CBABABA@@B@@A@@@@@A@@B@@AB@@A@A@ABAB@BABA@ABA@ABABABA@A@ABAB@AA@A@C@AAC@@@C@@@A@A@AEIAA@A@@AA@A@C@AAA@E@@@ABA@A@AA@@A@A@C@@@AA@@A@@BABAAA@AAA@A@A@A@@@A@C@A@A@AA@@AAA@@@@A@A@@@A@@@A@A@A@CAA@A@AAAAAAAAAAA@ACA@@C@@CC@CAA@@@AAA@A@ACCAAA@@@CAA@CACA@AEI@@@AAA@ACA@CA@AA@C@AB@BCBA@AB@D@@AB@@A@AAA@@@A@ABA@ABA@C@ABA@ABC@A@A@A@@CC@AA@AC@@@A@ABA@A@ABA@ABC@A@E@AB@@ABA@@@A@@AA@@AA@@@A@ABA@A@A@@AA@A@ABA@A@@@ABC@A@A@@B@@AA@@@@A@A@A@A@@@AAA@A@@@A@AAA@@@C@ABA@AAAAA@A@AAA@C@@@AAAAE@A@AA@@@AACEA@@AAAA@A@AAA@A@A@A@C@CBCBCBA@A@C@CA@@AAAA@@AAA@@BAB@BAD@@ABABAB@@CDAB@B@B@B@@@B@@@B@D@B@@BFB@@B@@AB@FAB@@BB@B@BBBBBBBBB@@BB@B@@AB@DBB@B@@@B@@@B@B@B@@@BAB@@@B@BAB@B@BAB@BABA@@BA@@@@BA@AD@BABABABAB@BAB@B@D@BEDE@GBE@AEAAC@CDEDC@IA@@C@ABC@A@C@ABCA@@E@A@A@A@@C@AAA@A@@AAAAAA@@AAA@CC@AAAACEEAACCCCEAA@ECAECGCEECCAGCACAEGCEAK@EBCB@HAH@NAFAHCB@FCBAJODEBEDEDIBG@K@GBE@CBCDEHEDC@G@CF@DBFADCFEDCFAF@BAFCDEBCDADCBCF@FGDCDCBEHCBEBGAE@EAE@C@CDCDEBA@A@AAA@A@@@EAA@A@AA@@AACAA@AAC@A@CAA@@@G@CAA@A@A@AAA@AAC@A@EAAAA@C@A@E@C@A@AB@DAB@FBFBBDF@DADBFBFBF@DCDCBCDEFADADAHAD@DAF@FEJABCBIHEB@DCFAFCFEHCDEFEFGFGDE@SFKFGDOJEBC@CGEGCAABCBCBIBA@ABC@CBA@ABE@ABEBA@@@CAEEAAA@AAA@EA@@GEAAA@@AECAAGEAACA@@ECGCAAAFABCJADABABEB@BA@CBABGDABCBEBCBC@@@@@BBB@@B@@@@@B@@BF@@@@@BB@@BA@BB@B@@@B@D@@@@@B@B@@@BBB@@BB@@@BBB@B@@AD@BCDADCD@BAB@D@B@B@B@BCBABCB@@CDA@ADABCF@H@BAFAB@DBB@B@@FFFHHFBBFBBBDBHBD@DBDFFFFBB@FAF@D@D@D@D@FBD@D@DBFBBBB@F@HAF@B@DBDBBB@@BBBBB@AD@@@B@B@@B@@@@B@D@BBBA@@B@@@@AAA@@BBB@@BBB@@@BBBB@@@BBD@BBB@@@B@@AD@B@@BB@@@BBB@@@DB@@BB@@B@BBB@BBB@BBBDB@@@B@@@BB@@@BB@B@@B@@B@@B@@@B@@BD@B@B@BBD@BBBB@@HHHHBB@BD@F@F@@@F@FDBBDBFF@AB@@@@@BA@@@A@@@A@@@A@@@A@@@A@@@@@A@@BA@@@@@AB@@A@@@@@A@@B@@@@@B@@@@@@AB@@A@AB@@A@@@A@@@@@@@@@@@AB@@@@@@@@@BAF@DBFBBBHBD@BBBBBDDDBFBFDHDDDBHAF@@A@@BA@ADADCBABADC@ABA@ABA@@@A@C@EBA@A@@BA@ADCDAJEFE@ADA@ABA@ABA@ABABA@ABABA@ABA@AFGD@BAB@B@BAB@NCBAH@BA@@B@FA@@BAB@BAB@FADCB@B@BADA@@D@HDFBDDFDBDCFAD@F@DDFFDDBBDDDBDAFADEDGDKD@DFHIBCB@D@FBFBDBDAFGLBHHFDBFBDBBBDD@B@B@@@BABCD@@AB@DABAD@B@D@BAB@BCD@B@@@BAB@BABABCFA@@BAB@BCB@BABCDA@A@A@CA@@ABC@ABC@ABABA@@B@@ABBD@FBDFHHDFFFDDFJJHJFDDB@B@BD@BBAJ@J@J@FGHAB@HBJAFBJABCFCFCDBDDNB@@@@B@BBDBBBHAFCBC@C@EF@B@F@DHFLBBDDBBBDDFBDDDFHNFBBBFCDAHCH@FAH@B@B@@@@A@@@@@@BA@A@A@@B@@A@A@@@@B@@A@@@@@@BA@@@A@@BA@@@@@@@@@A@@@@@@B@@@@@@@@@@@B@@AD@BAB@@@@@B@@A@@D@@A@@B@BAB@B@B@@A@@@@@@@@B@@@@@@A@@B@@AB@@@@A@@B@@ABA@@@@@@BA@@@@@@@@@A@@B@@@@A@@@@@A@@BA@@@@@A@@@@B@@@@@@A@@@@@@BA@A@@@@@A@@@@@ABCBA@ABADCBA@ABA@@BA@@@A@AD@@@@AB@@@@@BAB@@@@@BA@@@@AA@A@@@A@@@@@@@A@@@A@@BC@A@@@C@A@A@@B@B@B@DBD@P@D@@@DA@@DAFCBAB@D@B@DBB@B@BAHADADAD@DBD@BBB@FFFDBBBB@@HHHJ@@BB@BBB@B@BBB"],"encodeOffsets":[[106308,23899]]}}],"UTF8Encoding":true});}));