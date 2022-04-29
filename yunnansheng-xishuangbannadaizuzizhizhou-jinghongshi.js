(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('景洪市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532801","properties":{"name":"景洪市","cp":[100.797947,22.002087],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@BABA@A@@B@@@AA@@@@@@@@BA@@A@@@@A@A@@@@B@BAB@@@@@@A@@@AB@DA@A@A@@B@@@B@BA@@B@B@B@BAB@@@B@B@@@D@@@@BB@@BDB@@DADAD@BAJHHJDHAHCDCFCH@JDHDHDJDHHBJ@DBB@DADBB@BBFBB@D@D@B@B@BBB@JBB@HF@FCNBJBLBBF@L@FDLDF@JAJCHAHALAJDFDDFF@HAH@FDFHDFDDBB@H@JBBDBDBBDBFBFLH@B@@AD@B@BBB@BD@BAB@@@BBBB@@B@B@@@@@@B@B@@@@B@@@@@B@@B@@@@BB@@@B@@@BB@BAB@@@BBB@F@B@@@@@A@@BA@A@@@@B@@B@B@DAB@@B@@@@@@B@@@@@@@B@@@@BD@@@@B@@B@@@@A@@B@@B@@D@@A@@BA@@@@B@BB@@BBBD@@@@@@@@@ABA@@BA@@BB@@AB@@@@B@@@B@DA@@B@AB@@B@B@B@@BD@@@@BB@B@D@@@@A@@FA@@DBB@DA@AB@@B@BBB@@@@B@B@@@BBB@D@@@CD@@@BB@@@BA@BAB@@@@@B@@@B@@@BA@@@@@@@@B@@@@@@A@@@@B@BB@B@@@@@AB@@@@@B@@@@B@@@@@@@@B@@A@@@AB@@@@@B@@B@@@@@@@@AB@@@B@@@@@@@BABB@@BAB@@@@A@A@@@@B@@BB@@AA@BA@@DB@@@@@BBAAAB@@@@AB@@@@@@B@B@@@@B@@@B@@BAB@@B@@AB@B@@@B@@@@@BA@@@A@@B@@@BB@A@@B@@@@@B@@@@@B@D@B@@A@@BA@@@ABA@@@B@@B@@AB@D@B@BAB@BA@@B@@@@@@@B@D@B@BB@@DBB@B@B@@@B@D@@@HE@CDGFE@ADCFEDEJKBOBEAEBGBEBALAFELIHEH@R@HBJDFHTLJHHH\\PBBF@D@D@FBD@XABAF@HBFBFD@B@BABEDAFCD@DAD@B@DB@DFBB@FBD@@B@@A@EB@BAB@@@B@@B@@@@B@B@B@BABA@@AC@@BAB@DCB@@@B@@B@@B@BAB@@@B@@@@@@B@@@@@@@BB@BDB@B@BBB@B@@@B@@@B@BF@BB@@@@@AB@B@@@BAB@@BB@@B@B@B@@@@BB@@@@@@BB@BDB@@A@@B@@@@@BAB@@@@B@@@@BB@A@@@AB@BBB@BABEjYr[JITGRCVCPA`FTBJ@VBVDLCLGLKLGNCP@J@PDPDZFNDNAVCL@JCPCTEP@RJRJPLTJHD@@BB@BB@@B@@D@@@BBB@@@B@D@B@DCB@B@@@B@@B@@BB@@B@FAB@DB@@@@@BBB@BD@B@B@B@B@DBBBDDB@@BBA@AB@BB@@@@@BBB@@BBD@DBB@BBB@BB@BB@@AB@DBBBDDB@B@BA@@@A@A@@BABAB@B@B@@@@B@BBB@@@BB@B@BAB@@@B@@@BA@@@C@@@A@@B@@DDB@@@DBBBB@B@B@@B@BA@@@BBBBBB@B@DBB@BAB@B@@@D@@BB@B@DABA@AB@B@@BBBDDBB@@BCBABABAB@@A@@@@@AA@@AA@@@@A@C@@@ABA@@B@DEB@@A@@@@AA@@@C@A@AA@AC@A@@AC@AB@@ABC@A@@BAB@@A@@@A@A@A@ABABA@A@@BA@@@@BA@AB@@ABA@A@@BC@A@A@@BAB@@@DA@BB@BBBBBBB@@AB@@A@@@AAC@A@AA@BA@ABABABCB@@ABE@A@A@A@@@ADABABA@A@A@A@A@AAC@@AA@AB@@AB@@A@A@EAAB@@A@ABC@A@@B@@ABA@A@@BA@ABABABCBADEB@@A@@BC@CDE@A@A@@BC@A@A@ABA@A@@BC@@@A@@@@@A@A@ABA@AA@@A@AAAAA@@@AB@@AB@@@@@B@@@@@@A@CBA@@DCBCBABAB@BA@AB@@AB@BA@@BA@C@A@A@A@@@ABC@@@ABA@A@@BCBCBA@A@A@A@A@A@A@@BA@A@A@@ACCE@AA@@AA@A@A@A@A@@@@@@CA@@AC@@@AAA@AAA@@@CAC@@AA@@A@@AA@AA@AAC@@@CAC@A@@A@@A@@A@@@AAAA@AA@@A@AAA@A@A@AA@@A@@AA@@@@AA@A@AAA@A@AA@@@A@@@ABA@A@@@A@@AAAA@@A@AB@BA@E@A@C@C@A@C@@AA@@A@A@A@AA@@ACA@AA@@@ABA@@BA@A@AA@@@@@AA@@BA@A@A@@BA@A@CBAB@@A@@@A@@@ABA@E@A@C@AAA@@@A@A@C@ABA@@@A@@@AAEEEEA@A@AACBC@A@@@EBA@A@CACAC@GAC@C@CACA@@AACAA@A@A@A@A@A@@BC@A@A@A@@@AE@@CCA@@@@@ABABAB@@A@@@AAA@@AAAAA@@A@AAA@AAC@A@@AA@AA@@AA@AA@@AA@A@A@A@@AAA@@@@A@A@@@CCAAA@@@@A@@A@AAA@@@AAA@AAA@AAECA@AAA@AAAAA@C@C@A@@@AAAA@@@ABA@@DA@@BA@@@A@A@AAAA@CAA@@BA@A@@A@@AA@@@A@@AAA@@AA@@A@@AA@@CC@AACAA@C@@@A@@@A@@@@CC@@@AAA@@AA@@A@A@@@@A@A@@@@@A@@@A@@@@AAA@@A@@AC@@ACCA@@AAAAA@CA@@@A@@@A@A@CBCBA@@BA@A@@AA@A@C@@AA@AACCACCCAC@AAA@ABC@ABA@C@AAA@@AA@@AA@AACAC@CAAAAAA@A@CAAAA@CAA@C@AAAACA@AAC@AA@@AAA@A@A@ABG@CB@AA@A@@@AAA@AA@@AA@@@C@@AA@@CAA@@@AA@A@A@A@A@EAAAA@A@@@A@@@A@AAAA@@A@A@A@@@AA@@CC@A@@AABC@A@@@CBA@@@A@A@A@@AAA@@AA@@A@A@@@A@A@@AA@@A@@@@AAEAA@@AAA@E@@AA@AAAAAAA@@@CAAC@@@AAA@@AA@AA@A@A@A@@@CBC@@BA@@@A@A@@@@A@@@A@@@@CA@@CC@A@@@@@A@@AAA@@A@A@@@AA@@AACAA@A@CACAAAAAAAAA@@AAA@A@CEGAAC@CAC@SBG@E@GAICCCCECCACAU@CCCCAC@I@GBEAC@AA@@BA@@DCH@DCDALAF@H@BCBEDODGDAFAPDHBBIAO@E@EAECGGCAEDEHCDAFCFCHCHAJAFADEDCDEHAH@DCHEHEAGDEHABEDIFEFEFDDDDBD@BABEDCF@F@BCFCJABEBIJCLCLKPEBABADKBABADEAKA@CCAAKKAA@AAAC@AC@CCGMGACCBABABEBA@C@AAAAAEAA@@C@CFABCEAACBCBCBADCAE@G@AAACDCACAAC@CAG@G@C@CA@C@CCGA@ECAGBAB@@@@@DA@@@AB@@@@@BB@@@A@ABA@@BBB@@@@@BB@@BAA@@AB@BA@A@B@@@B@@D@BB@@@@@AB@@@@BB@@B@@@B@@@@@@BABAB@BB@@@@DC@@BA@@B@@AA@@@A@@AA@B@AA@A@@A@@@@AA@A@@A@A@@B@B@B@@@@AB@@AB@@@@@@AB@CA@A@@@A@@@@@A@@@@A@@@@A@@ACAAAA@A@@@@@@A@A@A@@@@A@A@@@@A@@B@BAA@@@CA@A@@@AA@@@@AA@@@@A@@@@@@B@@A@AB@@@@@@A@A@@@A@@@BB@@@BABA@@@AB@@@@A@@@A@@AA@A@E@ABA@A@@B@@@@A@@@A@A@@@@@@BAB@@@@@@@@AA@@@AAACAAACCACAC@ABE@ED@B@BFBBBDBBD@B@B@B@BC@C@KAAC@G@CAACBCLCAC@AA@COAE@E@CDCDEFADCBCACAE@C@EBC@@@ADK@EBAFEB@B@AAAAEE@@@A@AAACAECEEAA@@@A@ABA@@B@BBBBBBB@B@B@DADCDADEDCDK@A@A@AACAAACCAAAEEAA@AAAA@@AAACAACA@AA@@EBE@A@@@C@CAC@A@C@AAC@C@GA@@C@@@CAA@A@C@A@CAA@AAAAA@@@AABB@@@BA@@BA@A@@@@B@@A@@@@AA@AAA@AA@@A@ABA@@@A@@@AAA@@@A@A@@@AB@@A@ABA@AB@@A@@@AAAA@@@@A@A@A@A@A@@@A@A@ABA@A@@@A@@@@AAA@@@@A@AA@@@@CA@AAA@A@@@A@@@A@@@A@@A@A@A@@@@AA@B@AA@@@@A@C@@@AA@@@AA@A@A@@A@@@@A@@@A@@@A@@@AA@@@CAAA@@ACAA@AAA@A@CAA@@A@@AA@@@A@@AAAAA@@A@AAA@@@@A@@@@B@@A@@@A@@@A@@ACC@AA@@@A@@@@@@A@@A@A@@AA@@AAA@A@A@A@A@A@@A@@AA@A@A@A@@A@@A@@@AA@A@@AA@@AAAAA@@AA@@@AB@AA@AA@@AAA@@@A@A@A@@@AAAA@@A@@A@@BA@AA@@@A@AAAA@@@AAA@A@A@@@A@A@A@A@@@@AAA@AAA@@A@@AB@@@@AB@@@@A@A@@@A@A@@AA@@@ABA@@AAAA@C@@@AA@@AA@@AAA@A@AB@@A@A@CAA@AAABA@A@A@A@A@AA@AA@@AAAA@AAA@A@A@@@@BA@@@A@AAAAA@A@A@@@@B@@AB@@A@A@A@AAA@A@AB@@A@@B@@A@@@@A@@AA@@AA@@A@A@@BC@ABA@@@A@A@C@A@A@AAA@A@@@AA@A@AA@@@A@@@A@@@@@@AAA@A@@A@@@@@A@@@A@@@A@@AA@@AAA@@A@@@A@@@AAAAC@A@A@@BA@@@A@AA@@@@A@BB@B@@@B@@A@AAA@A@C@A@@@@A@A@A@@BABA@AB@@@@AA@@AA@A@A@@@AB@@AB@BA@@B@@ABA@@@A@A@AAA@A@AB@@A@AAAA@@A@AAA@A@AAA@@@A@@BA@@BAB@BA@@@A@@@AAA@@A@A@@@@@A@@@@@@A@@@@AA@@@@@@@@@@@@A@@@@@@@@@A@@A@@@A@@@A@@A@@A@AA@@A@@A@@@@@@@A@@@@A@@@@@@A@@@@@A@@@@@@@@@@A@A@A@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@A@A@@@@@@@@@@@@@@A@@@@BA@@@@A@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@AB@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@AA@@@@@A@@@@@AA@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@A@@@@@@@@@A@@@@BA@@@@A@@A@@A@@@@@@A@@@@B@@@@A@@A@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@A@B@@A@@@@@@@@@A@@@@A@@@@@A@@A@@@@@@@@A@@@A@@@@@A@@@@A@@@@@@@@@@@@@@@@A@@@@@@AB@@@@@@@@A@@@@A@@@AA@@@@A@@@@@@@A@@AA@@@A@@A@@@@@@A@@@A@@A@@A@@@@A@@@@A@@@@@@A@@A@@A@@@@A@@@@@@B@@AA@@@@@AA@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@AA@@@@@@BA@@B@@AA@@@@@@@@@AA@@A@@@@@@@A@@@@BA@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@A@@@A@@@@@@@AA@@@@@@A@@@@@A@@@@@A@@@@@@@@A@@A@@@@@@@@@@@@@@@A@@A@@@@A@@AA@@@@A@@A@@@@@@@B@@@@@AA@@A@@@A@@@@@@@A@@A@@@A@@AA@@A@@@AA@@@@@A@@A@@@A@@@A@@A@@A@@A@@@A@@@@@AA@@@@@A@@A@@@@@AA@@A@@A@@@@@@@A@@A@@@@@@MAIKEQESGUKSIGQESEWKQUIOISGOOIOCQ@M@OAOMKOQQMIQCSDSGSGUOOGUEUKKESCUBSLKHKJGHKD_EYKKES@KHIHOXGXENO`OLCREJGFCDHLLHFBBB@D@DGT@B@DBBD@H@DAD@BBDDNJF@FALEDA@@D@BJDFTP@BBB@@@@B@@B@@B@@@B@@@BBD@BBBBB@DB@@@@@@BB@B@@BDB@BB@@B@BB@@BBBBB@@@@B@BB@FLBLDJB@@@@@B@B@@@@AB@@AB@BB@@@@BA@@B@@@@@@B@BA@@B@@@@@B@@@@B@BBB@D@@@@@@@@@@@B@B@@BB@B@@BA@@BA@@@@@AB@A@@A@C@A@A@A@@BCBA@@BA@@B@@C@@B@B@BAB@@@@BD@B@B@B@@@B@B@BAB@B@@@BA@@@@B@BAD@@@BBBABBB@BB@@B@@ABCJGJA@AB@D@B@BBBFAD@DB@D@F@BFBHDJZBBFBRHFBFCNCFAFBBDBHBDJLLFAFDJCLKJOPDJGpCNER@B@DFBLCB@FBFFLRFFFBJBD@DAH@FBHFDBF@DAFADCFAJ@XCB@B@BDCR@HIN@B@PBH@BGVDFBBBBDBFLB@DDF@F@FBDDFP@BDD@B@BA@@BA@AB@@@@@DA@@@AD@B@BA@@DA@@B@@@@@BAB@BAB@@@@@B@BA@@@@B@@ABA@@@@@A@@BA@@B@@@BABBDHDBBDB@B@DLHBB@B@B@BCBA@@B@B@BBB@@BB@BB@B@BBBB@@@@B@@AB@B@B@B@@@B@@@@@DB@@@@@@B@@AB@@@D@@B@@B@D@B@@@@@BB@@BBB@BB@@BBB@B@@BBFAH@LADADCBA@CBCBABAHAPADGB[DEBCBAB@B@BABADADAB@BABCR@D@B@D@BDBBBBAB@@AF@B@F@@AB@BBB@F@B@@@FD@BBB@BB@B@B@@@B@@BB@B@@@@@@B@BEDEJEHAFARBJDJDJBHHDZ@NBHBGFIJAHCHCDAFAFEJA@MAG@ENBD@DDFAL@JIZAHBLBF@F@FBDG@A@CDE@ABEDBB@BFHBF@BCDEDAD@BBBNJDH@HFRDBFBL@B@B@@B@@@@@@@B@@@B@@AB@@A@@@ABA@AB@@@B@@@B@@@@@B@@A@@B@B@B@BA@@BA@@B@@AD@B@B@@A@AD@@A@@B@@@BA@@@A@@@@@@B@@@@@@C@@@@D@@AB@@@BA@@@CD@BADBDFFFBHHDFHHDDFFBB@BGLAB@DAF@F@B@DAF@@AJAHAH@D@F@B@@A@CBABC@KDA@E@E@@@C@IDGBC@IDCDCFADCF@DAD@D@FBJ@D@DBBBDBBBDDDBDDBB@FBLJBBF@B@DAJEB@LCB@D@D@D@BBDBBB@B@DADCBADGF@@ABABAD@FABCDEFCFAFEFILAB@D@DABADGLCLADEDGFA@A@UNCDCBAFIPKJGFIHCDEFIFCBGFABAB@F@DAD@BBDBFBBBDBDBDDBHDDBBBBBJF"],"encodeOffsets":[[102992,22996]]}}],"UTF8Encoding":true});}));