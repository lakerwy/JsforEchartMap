(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('唐河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411328","properties":{"name":"唐河县","cp":[112.807636,32.681335],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@OEEGEI@AE@KBG@GFGBG@EB@@IDAB@FADEBGBA@U@M@CAKDA@KJIHGFSDABOHC@S@IBSBKBC@C@A@CBADABMFCD@@EAAA@BCBMHCBA@A@A@CCAC@ABABABA@CACEGCGCCKI@@A@ABEDABEDC@CAGAEAE@C@@@C@GCCA@B@B@B@@CDCBABCBCBIFABA@CBEDCBCD@B@B@B@B@D@@BBBD@@BB@H@BB@@@B@BADEBADCDABAB@HAB@FADBB@@@DB@B@B@@@B@BADCBAFABAFAF@B@B@DB@DDB@BBDBD@BBD@@@DBF@D@BAB@BAB@BABCFCBAB@B@@@FBBBBBBBBBBF@D@D@DBD@BBB@D@BBBAH@BBB@L@B@B@B@@@D@@@DBF@B@B@B@B@B@@B@DBBBDDBBDD@@B@B@B@D@LCDAFAB@D@HBBBDB@@BB@B@B@@@D@BA@CFABADABABABABAB@D@D@B@BBBBDBBBBB@BB@@HDBB@B@D@@ABADA@@@AB@@@@@BBBBB@@@@@@@BAB@@@B@BA@AB@@@@@B@@@BB@@@B@DBD@B@@@BBB@BBBA@@D@BBD@BBB@BB@BB@B@@@@B@@@B@@@@B@@@@@B@BBB@B@@@@@BB@@@@@BA@@B@@BB@BABAB@FAB@@BD@BA@A@@BA@@@ABA@@@@@@BDB@B@@DB@@@@@@BB@@@B@BADA@BBBB@B@B@@@@BBB@BBBD@@@@BB@B@D@@@@B@@@BB@B@BB@B@@B@@AB@@A@A@@@@BBB@@@@AB@@@BB@@@@@BBA@BB@@@@A@@BE@@@@B@B@@BBBB@B@@@B@BB@BH@BAD@@@@@B@B@@@BA@@@@@@B@B@@@B@@B@@A@@@@BA@@BA@@BB@@@@@B@@@BA@ABC@A@@BA@AB@BA@@D@F@@A@@BCB@@@B@BBB@@@BA@@B@@@B@B@BAB@BB@@B@B@@@BA@@BCD@B@@@B@B@@AAEAABGBAAAAAEIDC@IBAAA@CBABADAF@DBDJCHEBD@BBFBD@@B@FAD@D@@@@BH@BAB@@@@A@@AADAFA@D@@DABFC@DFHAAED@@@B@BDD@@BAB@BEBBB@BKD@DDH@@LCBFCBFHAB@@ABAFFHDDBDD@B@HCACAADAA@AAB@@ADA@@B@B@B@BDBABDCBBBFCFAD@DA@BDAAAFAHABA@@@BD@@B@@DAB@@CD@BHA@@BDA@BAB@B@BA@@BQFC@@@ABFD@BHHB@@BBBB@DCBA@AB@BAB@@@@@BB@BBDBBBDDFBFABA@BBCB@@BFBBDB@@BBBBBB@@AB@BABAAA@GDAAC@@@@B@B@BA@@B@B@DDA@B@@CB@BA@BD@@BF@@A@AHCBAACBCC@@EB@BA@@@AB@@CBBDB@@BBBBBDFEB@BA@@BC@@@BHBF@B@B@@B@@@D@B@B@@@@BBBB@@@@@D@AAFA@@D@FA@BDJC@BDEB@B@BCBB@@B@@BBB@BB@@@@@B@@AB@@@B@@BB@B@BBBBBDAVA@B@@GBBFDABFD@@DBD@D@BF@@DCB@BA@BDC@@B@@@B@D@BB@@D@@@BBF@@GDEB@@A@BB@D@@BDBB@@@@HP@@@@GB@BC@@BBDB@BB@@@BA@A@@BA@@@@@BBBHB@@D@@@@CBA@@BBDBD@BBBDDBB@B@B@@B@BBBB@B@BBDBB@@@@B@B@BBB@@BB@@AFAACD@L@@AD@B@@@@F@@@@B@B@B@BDDA@B@@BB@@@BDDB@BADA@@@BB@DAAA@@BA@@AADAAC@@FA@@B@@@B@BBFA@B@BBDBDDBBD@@BDB@FHF@H@BAHA@@@BEBB@@FBB@@DA@BCBBD@@EB@@BDDH@@AB@B@@E@@B@@B@@BEB@@@D@D@BA@AB@@@@@B@D@F@@A@E@ABG@@@BBEBBDDADFDABD@@FJ@BCBCC@@@BCBA@@BBBABA@@@@DCB@@DJB@ABA@A@CB@B@BABB@@BB@@A@A@@FCDADHB@DADABDBFD@B@JGA@FC@@AAFABA@AB@B@F@D@@AB@@BD@ACD@D@DABDHA@D@@HCDA@@BBDADDB@@A@@B@@AB@@@BB@@D@AA@A@@@@B@BA@@FCB@B@DAD@JCBAA@@AA@@@@@A@@AACB@AC@AD@AEAAB@B@CEHCAADAFAB@BDB@BFBA@@BD@@FAFA@@BFDABHB@B@@BHA@FB@@@FADAD@@@@@B@B@FA@@@@BAACD@@EA@BA@AA@@@@@@@@AA@@A@@@A@@BB@@B@@@B@BA@@@A@@ACB@AA@AA@A@AA@AA@@AB@B@B@FA@@AADAAMAC@@D@@@AC@E@C@@@@B@B@D@D@@@BBBADAAAB@BAD@@@BDBABBBABB@@LCAAD@@EB@BDJAD@D@@DJABDFAB@@@@A@A@@BAB@@@EGD@BAAA@@@AD@B@@@D@B@@A@AB@@ADB@AB@@B@@D@@AB@B@DB@@@AB@DCB@D@B@@AB@D@A@@AA@CAA@AA@@AC@A@AA@@@@@F@PA@AJ@D@B@B@B@DAD@JA@@@C@@DA@@@A@@BAD@@@B@@B@@@BB@@BB@@@@B@BB@@BBBBBBDDD@@B@BB@@NC@BFAA@@A@@JC@FB@B@@@@A@@CKBAD@@@AAHAFA@@B@@@@@@AB@B@B@@@BA@@@@AA@@@@@A@@@@AA@ABA@@AA@@A@@AA@@A@@BA@@@@@@@@D@D@@@BB@@BBB@B@B@@@@@@A@@B@@AD@D@@@B@@@@B@@D@B@B@B@@A@A@@BAD@D@BA@@@@@@AAA@@A@@BA@@B@@B@BB@B@BA@@BAB@@@@@@B@BB@@@B@@@@@@@@AA@@@@A@@@@@@BAB@BB@@@BBB@B@B@@BBB@B@@@B@@@@ABA@C@AB@@@@@B@@@BDB@BB@@@@@@AB@B@@DDBBB@FBBBB@BA@@B@@BB@@@B@@@@A@@BA@@B@B@BDDD@@FB@@@B@B@B@@BB@@@@B@@@@C@@DADA@@@AB@@@AAA@@@@A@@BA@@D@@@@@BA@@@@@@B@@B@@@@@A@AB@@A@@@@A@@A@@@@B@@AIKFADAF@RBD@BB@BD@@@BB@@@@FAD@BB@@J@@@ACD@@CD@@A@AAAHAAE@@B@D@@@@@@D@@BB@BJA@BFA@B@B@@@B@B@@@B@B@B@@H@BDF@@DC@FL@DB@@BDDFA@B@@@@@@A@@B@@@@BB@@B@BA@@FPBBBBBBB@B@D@D@D@D@DABBBBB@D@B@BBHAFF@@HANCB@D@BDBB@B@@B@@@@@BC@@@AB@@@B@BB@@BH@@BBFD@@BD@BB@BB@@B@BAB@@A@@@A@AAA@@@A@@B@@@B@B@@@B@@@B@B@BAB@B@@@@A@@@A@@@ABCB@AAB@@DB@B@@@@@@A@@BA@@B@BA@@@@@A@@A@@@@@@A@@B@@A@@@A@AA@@A@@B@@@B@@AACCCAC@@@A@@AAA@@C@@A@@C@A@@DA@ABA@@A@@@JABB@@@A@AAA@@AA@GB@ACD@AABA@@@E@AC@@A@A@A@AA@@ECB@CABA@@CAAA@ACD@@@@AD@B@B@BAB@D@@@@@AA@A@AB@B@BA@@ACD@B@@A@@@@F@@@D@@@@A@@AEAAAAFA@@DAD@BB@@F@AEDAA@BA@A@@DA@@@@@@@@AA@@@A@@@AAA@@A@@AA@@AA@@@@@@A@CB@B@@C@AD@AEGB@AC@@@@@@CC@A@@A@E@@AA@@AA@A@@BAAA@A@A@@A@@B@@A@@A@@A@@@@A@@@CAEJ@@CAADI@@@ABBBB@@BHBB@BBDBBDDBBHFB@BB@A@@AE@A@I@@AAB@@@@GAB@@CM@EJ@B@B@@A@ABAD@B@F@BBHBHAD@@A@@D@@AHAD@@@AABAB@BCBA@A@@@ABAD@ACBA@@@@A@@@DA@AAC@@@@B@@@BB@@D@ACA@BA@ABA@AB@F@@@B@B@BBBD@B@@@@@EB@@@DAAC@AACD@ACD@@ADAAAB@FFDA@@@@BC@A@ABA@ABC@A@@ACAA@@@@@@@A@@C@@A@AAE@AACAA@AC@@@@@@A@@A@CC@@@@ABC@@@BB@B@@CB@@ABA@@@@@@AA@@@AF@BBHA@A@@BBB@@A@@@BBDDD@BB@BBD@@B@ADA@@@CAC@B@AB@@@@AA@@AACB@BA@@BB@B@A@@BCBC@A@A@@@AB@@BDABCBBB@@A@@@@B@D@B@@@D@@BBAB@AA@AAED@BC@@B@@@B@@AEEB@AA@@@BBE@@CB@@ABB@AA@@@AAA@@AABC@EAA@A@@@@@@A@@@@@AA@@@@BA@@A@@A@@@AB@@@BD@@@A@@@A@EGACCEAC@@AAD@@A@A@@@AAA@AAA@A@@A@A@@A@@D@@@AA@AAAA@A@@@@AAA@AEC@AA@GBA@A@@EAA@@C@@@BC@E@A@@@@D@CCDCDCB@BA@AFA@CB@@ADAB@BD@@D@BB@@@@B@@A@@B@DC@@@A@@A@CB@C@@@AD@A@@A@@AAA@AAAA@@@@AA@@@@BA@@@A@A@C@@@@A@BAB@@A@@@@@A@AA@BAA@BA@@@ACACC@@@A@@A@@AA@AABA@@DB@@BAA@@A@@@@@@@@A@@A@BAB@@AA@@@@BA@AB@@@AA@@@@@@@A@@BAF@@@BA@@B@B@BB@@@CA@@EA@@@@CAC@@B@@AC@@@@AA@@@@@@@B@@CC@A@A@A@A@A@@@@@@@@@AB@@A@@@EECEA@A@C@E@@@C@CDA@@B@@@F@@ABCD@@EB@@A@C@A@@AAB@@A@@B@@AB@B@F@@AB@@C@@@A@@BABA@KDA@G@@@GA@@I@A@C@A@ABADCD@@C@G@A@@AA@@@ABA@@@AAA@A@ABA@AB@@A@A@A@AAAB@@@@AB@@@B@AA@@CA@A@A@ABA@@@A@A@@@AA@@@A@@DC@@@@@AA@A@A@A@A@@@A@@B@@@@A@@AAA@@@@ABA@@A@@AAAA@AA@@@C@A@@@@A@A@A@@A@@@AB@@@B@BABA@C@@@AB@@A@@@@AA@@A@@A@@@A@@@C@A@AA@AA@@@A@@@@@@BAB@@ABA@@@CA@@A@ABA@@@@B@@@@A@A@@A@@C@@@AAA@@@@@@A@A@@BA@A@@A@AAC@@@@@@@@ABA@@@@@@@AA@@@A@AB@@A@BAB@BABA@A@@BABA@A@@AA@@@@@AACB@@AB@BABCDC@@@A@@@AA@CCA@@AAAAAAA@@CBABCD@@A@A@@@@@A@@@@DA@@BAD@B@B@@BBBB@B@@AB@BA@C@AB@BCB@@@DADAD@@@B@@BDBB@D@B@B@@@@GBA@@B@@AD@B@@@D@@@BB@B@B@@B@@BF@B@@CB@@CBA@@@@AC@@ACAAA@AA@AAA@CBA@C@@@A@@@AA@@@CBC@A@GAAAC@AA@A@CB@@@A@@AA@AA@A@A@@@ACAA@AAC@A@@@@@CDABC@@@C@@BAHC@@BADE@@BAB@@AB@H@@@B@BA@@B@B@B@B@D@D@B@BA@@BAACFCBBD@AA@AAA@@C@CBC@A@@@CAAAC@C@A@C@AACAEACAA@@A@@A@BA@@B@BAD@B@FB@@BBBADABA@@BA@@@A@A@@@@B@B@BA@A@AB@B@@A@A@ABA@@@AAA@AAAAA@AA@C@@@@AAAA@@@@A@AA@@@C@A@@A@@@@@AB@@@@A@@B@B@@@BA@@@A@ADA@@BA@@@A@@BABA@ABCBABA@@@CAA@ABA@@@A@@@AA@AA@@@AA@@@@@A@@@ADAB@@A@AAA@@@AB@@A@@B@@@BDB@@@B@@ABCB@@A@@@A@G@@@A@A@CBABA@A@@@AA@A@A@A@A@@@A@@B@B@J@BAD@DABAB@DAB@@@@C@A@@AA@@@C@@@A@@BABA@ADCDA@@BC@@DC@AB@BA@A@AB@BABAD@@@DEDCBAB@@@D@@@B@@@BAA@@A@A@@AC@A@A@A@@@@A@AAA@AB@@CDA@ABA@AHAD@@A@A@@@AA@AAA@@AAB@AG@@@A@ABC@EBA@A@@A@@AAA@ABADA@ABC@@@@AAAAAAGAC@AA@A@C@@AA@@BAFC@ABG@@BA@A@AA@@A@@@A@A@A@@BA@@F@B@D@B@@@B@BCB@D@@A@@@@EEAACC@@AA@A@@@A@@EDCBA@A@A@AAAAACGCAAC@GAWAKKKU@EBE@ABKBC@A@KGKGAMCA@KDILIPKFM@C@G@]B@@CBC@WBGAIAKKAAMKOAC@ADADB\\CHKBEAMASIIGEAOI]GKCUEUKCAMIGGIBACEIBECCECICG@C@EBGBC@EDGFKDABBH@DCL@FIACA"],["@@B@@CFC@AAA@AC@I@CBADADDBLB"]],"encodeOffsets":[[[115433,33142]],[[115437,33140]]]}}],"UTF8Encoding":true});}));