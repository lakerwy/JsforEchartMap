(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('盐池县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"640323","properties":{"name":"盐池县","cp":[107.40541,37.784222],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BAB@@AB@@@@AB@B@B@BB@@@@BBB@@@BB@@D@@B@@B@@@B@B@@@@BB@@@@@@@@@@B@@@@@AB@@ABAD@@@@@B@H@B@DAB@@@BCBCD@@@DBBBBFD@BBB@@HBDBNFBBDDDDFDB@@BD@DB@@BBDBBB@@@DAD@@BB@BAB@B@BBB@DBBBDB@@B@D@B@B@BBBDD@BBB@BDB@@L@@BB@J^DD@BBBB@B@BAB@BB@BDDB@B@BD@@@B@@DBBBB@@ADAB@B@DBD@B@@@DB@B@@@@A@A@@B@@@@@BD@@@@@CBAB@@@D@B@B@B@@@BB@@B@@AB@@@B@@@BBBB@@B@BA@AB@@BB@BBBB@@@@B@B@@@@@B@@NNANELaGOEIFGFGFIHMJKHIJEJEFILGJELCJAJDJANBNB^@VWRWHSXMD@@BB@@BB@@BB@@A@A@A@ABA@AA@@A@@B@@@@DBBBBB@BB@BBB@@@@@@@D@FBHBRFNDFBB@@B@@@BJlBDPX@@@BCBpED}GLABBAB@DBfTFDBJBHFL@DKVM\\@BRXT\\FHlNnPPHLZB@ZE|OnInACD@@HBdCNEEhF`DDXFpPtV\\b`hXvJPDJHZB\\@B]@MBaDC@GEKIA@GJMRADE@\\CHH^CBcCM@GAGCGCCBEFOVAHETCTAH@NBN@F@BBBABABCB@BB@@BBB@BBDBB@@@BB@@B@@BB@B@@BB@BB@@B@BBD@BB@@BBBXfKRAlVB@FHIT°@BGZATDNHRVLEH@DB@FA@@DAF@DAD@FAD@FAFAD@D@BAF@F@DAFAFADADAFAFADAFAH@DAD@H@F@FABAD@DADADAFADAFAF@FAFAD@FAFAFAD@FAFADAF@FAD@FAF@D@DAB@B@B@D@BAB@B@B@B@B@B@BAD@B@B@DAB@D@B@BAB@B@B@B@BAB@B@B@B@B@BA@@B@B@B@B@BAB@D@B@D@BAB@B@B@B@D@B@BB@B@@@@@BBB@@@B@B@@BBB@@@B@@@@@B@B@B@@@B@@AB@@BB@B@B@B@B@B@B@@@B@@@BA@@B@@@BA@@BA@@B@B@BAB@B@BAB@B@@@D@@@B@B@B@D@@@BBB@@BB@@@BB@BB@BB@@BB@BB@@BB@@BB@BB@B@@BB@B@@@@BBB@BB@@BB@@B@@@BB@@@@B@B@BA@@BAB@@AB@BA@@BAB@B@BABA@@@@B@BAB@B@BAB@@@B@BB@BB@@BBBBB@@B@@@B@B@@@B@@@B@@AB@BAB@B@B@@@B@BBB@@@B@B@BBB@BAB@B@B@FAB@B@@BB@D@@@B@BBD@BB@@@@BBBBA@@B@@@B@@@B@B@@@BBB@@@B@BBB@@@BBBDDBBDBBDBBBDDDBBDBD@DABABCBABAFAF@F@DAD@F@DAD@@@DAD@D@D@D@DBFBFDD@DCDABCBADCFCBCBCDABADADCBCDADADAD@DAD@DAF@DABC@ADCBCBCDCBCDADCDCDADADAD@FABAFAF@DAF@B@DAD@DAF@D@FCBADAB@DADAD@FADBDAD@F@D@D@D@F@BADAD@DAD@FABAFADADADADADABCBA@CBABCBABCDABCBABCDADABCDABADADADABC@C@ABEBCBADADABCDAFCDADCBADABCDABABCBABCBABCBCBCBABABCBABCBADAD@DAD@DAF@F@D@F@DAD@D@DAF@BAFABADABCBA@A@@@CHCBABAAACCS]KO@AIOIUAC@ABAHEFEDAB@NCZENCB@BBB@FFDFDDH@XFf@HELMf]qFCDANCVE\\G\\G\\GLAPCDAHENGBAB@B@DADCHE@@D]SqG]KSggK@KDCHCFEDADCFC@AAC@EACBCB@@BD@F@BABC@C@CCEEAAA@@ABCFCDAD@DBD@F@@A@A@C@@G@E@MGKEI@I@I@I@EAI@GAM@KAIAoMIKG]BO@@@@@@@ABGCWCMGOMMQKGEEAIAI@GAGAKAIAGAI@EBIFKHIBG@MAM@CACEAEDEBGDI@CzIF@DA@EAUCCGB_FEAggGECCECCCEAAA@CDE@AGEGCKCCCeBAAAAAAE@IBCBCBCBA@A@A@@@DCFEBC\\eDAJAJAnLFBBAFGBGAAACACAGAGCE@ECMAG@CCGCGACECCCAECMACGGGGKGGEkYGCGCIAKCGGEECG@G@K@S@EBI@I@IAGAGAIMyESM]EI@E@GBCDWAIEICEAKBADG@GHWL[FKLILEBCJC@@@@@@BA@@@@@A@@@@@@@AB@@@@@@BB@@@@@@A@@@@@A@@@@@@@A@@@@@@BA@@@@B@@A@@@@@@@A@@@@@@B@BA@@B@@@@AB@@@@@@A@@@@@@A@@@@A@@@@@@@@BAB@@AB@@@@@B@@A@@@@@@@@AA@A@@B@@@@A@@@@@@@AB@@@@A@@@@BB@@@@@@@@@@@@@@@@@A@A@@@@@A@@@@@AB@@@@@B@@A@A@A@@@@BA@@@@@@@A@@@A@@@@@@@@@@B@@@@@@@BA@@@@A@@A@A@@@@@A@@@@BA@@@A@@@@A@@A@@@@@A@@@@B@@A@@@@@A@@@A@@@A@A@@@@AAE@SFGBECICIAKAEC@C@EJGPGHEB@BABADCDADAHEDCDADADADABADC@@BAD@B@@@BBB@@A@A@@@A@@@@@A@@B@BAB@@@@@@@@A@@@@@@@A@@@@@@B@@@A@@@@@@@A@@@@@A@@@BA@@@@B@@@B@@@@@@A@@@@B@@@@@B@@@@@@A@@@@B@@@@A@@@@@@@@@AB@@@@@@A@@@@@A@@@@@A@@B@@@@@BA@@@@@@@@@@@A@@@@@A@@@@@@@A@@@A@@@@@@@@@AB@@@B@@@@BBA@@@@@@AA@@@@@@@A@@B@@@@@B@@A@@@@@@@@@A@@@@@@AA@@B@@A@@@@@@B@@@B@@@@@@@@AB@@@@@@AA@@A@@@@@@@@@A@@@@B@@@B@@@@@@AA@@@@A@@B@@@@A@@@@@@@@@@@@@@BA@@@A@@@A@@@@@A@@@@BA@@A@@A@@@@@A@@@@@@@@BA@@B@@@@@@A@@@@@@A@@@A@@@AA@@@@@@@@@A@@@AB@@A@@@@@@B@@@@@@A@@@@@@AA@@@@A@@@@A@@AA@@@@A@@@@@@@@@@A@@@@B@B@@@BA@@@@@@@@@AA@@@@AA@@@@@@A@@@@@@@@B@@@@A@@@@@@AA@@@@@A@@@@@@BA@@A@@@@@A@@@A@@A@@@@BA@@B@@@@A@@@@@@@AA@@@AA@@A@@@@@A@@@@A@@@@B@@@@A@@@@@@@@@A@@@AA@@A@@@A@@BA@@AA@@@@A@@AA@AAA@@AA@@@@@@A@@@@@@@A@@AA@@AA@@@@@@@A@@@@AA@@@AA@@AAA@A@@A@@AA@@@A@@A@@@@@@@@AB@@@@AA@@@@@AA@@@@A@@@@@@@A@@@@@@@A@@@@A@@@A@AA@@@@@B@@@@@@@@@@A@@ABA@@@A@@@A@@AA@A@@AA@@@@@AA@@@AA@@@@AA@A@@AB@@@BA@@B@@@@AB@B@@AB@BA@@@@@@BA@@B@@A@@BA@@@@@@@@@AB@@@@@@@@@@AB@@A@@@@@@@@B@@A@@B@@@@A@@A@@A@@@@@AB@@@@ABA@@@@BA@@@@B@@@@@@@B@@@@@@@B@@A@@@@@@BA@@B@@@@@@AB@@A@@@@@@B@@@@@@A@@@@B@@@@@@@@@@@@@@@B@@A@A@@@@@@@B@@B@@@@@@AB@@@@@@@AA@@@@@@BA@@B@@A@AB@@A@@@@AC@A@AA@@AA@AB@@AB@BABA@@@ABE@C@@@A@@@@A@A@@@C@@@A@AA@@@A@@A@@AA@@@@A@@D@DAB@@BB@@@BBB@B@B@@A@@@AC@AA@@A@@ABE@CBADCBABAD@BABA@A@@@@A@A@ABABEBA@CAA@ABCBA@C@GDGBIDEBCBC@A@CA@A@@CACEAAA@AAAAC@AA@@A@@@@B@@@B@@@B@@A@@@@@@BA@@B@@@@A@@@@@@@@@@@@@A@@B@@@BB@@@A@@@@@A@@@@BAB@@@@@@@B@@A@@@@@A@@B@@@@@@@@AB@@@@@@@BA@A@@@@@@@@@@@@@A@@B@@@B@@@@@@A@@@@@A@@@@@@BA@@@@AAB@@@@@BA@@@@B@@A@@@@@A@@@@@@@A@@B@BA@@BA@@@AB@@@@@@@B@@A@@@ABAB@@AB@@@@ABAB@B@@A@@@A@@@@BA@A@@@@@@BA@@B@@@@@@AB@@@@A@@B@@@@A@A@@@@@AB@@@AAB@@@@ABAB@@@@AB@@AB@@@@A@@@AB@@A@@@AB@@@@@BA@@B@@A@@@@BA@@@AB@@@@@B@@A@@@@@@BA@@BABAAA@CAC@@@CACAA@E@C@A@EAC@EAE@C@A@GACAA@A@E@A@A@AAC@AAA@A@@A@@@@@@CA@@A@@@A@@AAA@@@@@@A@@@A@@@A@@A@@AA@@AAA@@@G@@AABA@@@@@A@@@AAA@@@A@@@A@@AC@AA@@A@@@@A@AA@AAAAAAAAAAA@AAAA@@A@A@@@A@@@@B@@@BAB@@A@@BC@AB@B@B@@A@@@@@AB@@AB@BABA@C@ABC@ABABE@A@A@A@AAA@A@CAA@@@AA@@AAAAA@A@@@A@A@@BEBGBAB@@CBAB@B@@A@AAA@@@A@@@@@A@ADCBCFCBABA@A@A@ABA@@BA@@B@@@AA@ACACCG@A@A@ABC@A@AB@BA@ABEBEBA@AAA@A@A@@@A@A@A@A@A@@@@A@@AA@@B@@AB@B@@@BA@ABABA@@@A@A@A@@@ABA@@@A@CBA@ABA@A@@@A@@@CCA@@@A@@@ABABABABABC@ABA@EBABA@A@AA@AA@CA@ABAB@@AF@BA@A@@@ABA@A@@B@BADAB@@AA@AACA@@CBA@CBA@E@A@C@E@EBEBCBE@CBA@E@CBEB@BAB@D@B@B@BADABCDABCDEFCBEBABADA@A@CBCBCB@BA@ABC@AB@@@BABA@ABA@EBABA@C@C@C@ABC@CBCBCBABAAA@AAA@C@@@AA@A@C@AAACAA@CAA@AA@A@AB@BABAD@DADCDADAB@BBB@D@F@DA@A@A@ABABEBABA@@AA@@A@A@A@E@A@C@A@@A@C@C@A@CDADABA@CA@@AA@C@C@CBCAAAA@AACAAAAA@A@A@ABA@AAAC@A@A@ABEFGFCFGFIHA@ABA@A@CAA@C@C@AAC@C@C@@@CBCDCDGFIHEDAB@@A@@A@AA@@BGFABC@ABAB@BCBCDADABADCBCB@@@@CBE@E@C@C@EDEDCBCBA@@BAB@BABABA@CB@@AAA@@@@BCBABA@A@@A@@A@@@A@A@A@@@@@@AB@B@A@@@A@A@@A@@B@@@@@B@@ABAB@DCBAB@AA@AA@AAAAC@@B@B@BAB@B@BA@@@@AAAC@@CAC@EACAAC@@@@ABA@AAAAA@C@@BCDCBCBEDE@CACECCCCG@@AACACCCC@A@@CCBA@ABADABADADA@@AAAAAEAC@C@C@A@EA@ABA@ABEDCDCFABAHBBBB@BADABCBE@IAA@ABADBB@D@B@@@@A@@CAAA@ABKHAHBD@B@DBDBB@BA@@@AAA@E@A@A@E@CAC@C@ABABC@@@AAA@A@CAA@AAAAA@@@ABC@ABABEFABCDAF@BAAA@@AAACCA@AA@AAA@AACACACACCAAACAC@ABAD@DAHAHABCBCBAAA@AAC@EAE@CAECCACAA@AD@BADAFAD@@C@A@CAABABABCBCBEBCBA@"],"encodeOffsets":[[109178,38026]]}}],"UTF8Encoding":true});}));