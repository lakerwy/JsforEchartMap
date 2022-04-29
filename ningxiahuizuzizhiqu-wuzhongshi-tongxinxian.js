(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('同心县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"640324","properties":{"name":"同心县","cp":[105.914764,36.9829],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@@A@AAA@@AAAAACA@@@@@AB@@@BBB@BAB@B@B@@@AA@@AA@@AA@@NCTWXGXQ@UA]AMBMCIBIDIFKHIJKFEFIJILGNIJGHEHEJEPFbHFKBMMM@@@A@@@@@A@A@@A@AA@AAA@@BAB@@A@AA@AA@A@@@A@@BA@@@AA@@A@@@A@A@A@C@@BADA@@@@C@@A@@@@@AB@B@@@@@@ACA@@A@C@CAA@A@CB@BA@AACA@@@A@@ACA@A@CC@AAAA@ABA@A@AA@ACCI]A@@AK@@@CA@AAA@ACCAA@A@A@A@C@AA@ACAA@CAA@A@ABA@AAA@@BC@C@@AACAAA@@CAC@@AA@ECCCCCAAMECAGA@@AA@AECAAAA@C@@DCDA@A@@BA@C@A@G@A@@@@BCBA@@BA@@@@A@@@@@@@@@@@AA@@@@@A@A@@@AA@@@@CA@@A@@AA@A@@A@@A@A@ABA@@@@BA@@BA@A@@CBA@A@AA@@AA@@@ABA@A@@BA@A@@A@@@@BAB@@AB@@A@C@@@AAAACC@@BABA@@BADEBEBGB@@C@ADGFE@EBABEBCDCBCDADE@CBCB@D@BAD@BABCDEDABCBC@ABCBCBA@C@C@A@AAA@ABA@A@A@A@@@AB@BC@@@A@A@ABAA@@A@CBA@ADCBA@CA@@CBCBABADADABA@C@C@CBAFCHCBA@A@AEECCACCAAACBABCBCBCBE@@@A@A@A@C@@A@ABABA@@@A@@@A@A@@BA@ABABABA@@@A@AAA@AAAA@@AAA@AACAG@ABABE@@@AAAAIA@@A@@A@@@@EBC@ABEBABA@@@@@AA@@@A@A@@@CBC@CA@@MCGA@@A@@@@@AB@@@@AB@@@@AA@@A@A@@@@@A@@BA@@@A@A@A@A@E@ABA@A@CDEBABCBA@AB@@AB@@@@@@@A@@@@AA@@@AA@@AAAA@@AA@@C@A@E@C@A@ABABA@A@CBC@@AABABABC@@@@@AB@A@AAA@A@A@A@AAA@AAA@AACAAAA@A@A@C@ABCBCFADABCD@B@@BBB@D@B@B@BA@AB@@@@@B@BBB@@BB@@@@BA@AB@@CD@BGD@BABCD@@BB@@@B@@@BA@@@A@@@AB@@@BA@A@A@A@ABA@EFCB@BCDABCBCDAB@BAB@BAD@BAB@BCB@@CBC@ACAC@A@A@ABABABC@A@A@A@ABABABA@AFEBABC@CB@BA@ABABA@@DA@A@@@AA@CAAC@@@@@@@@@AAC@A@@@AA@@A@@@ABC@@BA@@FADA@AB@@@@@@BB@@@B@@@@@@@DCBABA@AD@@@D@@AB@B@@@B@@A@@B@@@@@B@@@@@@@@B@BB@@@B@B@FAD@BADABADCBABA@C@@BAB@@@B@D@FAB@@@BAFAB@B@BA@ADA@CBABADCBC@E@@@@@A@@A@C@@AA@@AAA@A@ADCBE@A@@@AA@A@@BA@AB@@ABA@@@@BA@A@@A@@BA@A@@@A@A@@BCDCDADC@AA@@AB@BA@@@@@ABA@A@@@@@@@@@@@B@@BB@@@@BB@@BB@B@@B@@B@@B@B@BBB@@@@B@@@B@BBB@@@@B@BB@@DBB@@@B@BB@@D@@@BAB@BAB@BABABCB@DABABABA@@@A@@AAA@CB@@A@@@AACAAA@@@ABAB@BABA@A@@BABADA@A@A@A@@A@@@@@AA@@@@@@@@A@ABCBAB@@A@@@@@@@@@BABA@A@@@@@AA@A@AA@@A@@AA@@A@@A@@@@@@@@AA@@@@@@@A@@BA@@@@@A@@@@@@A@@B@@AFCB@FCHAFAFAB@@A@@@A@@@@A@@AA@@@BA@ABA@AB@@@@AA@@A@C@CAC@A@A@@@A@@@C@@AAA@@@AAA@@A@@BAB@D@B@B@B@D@B@BBB@@@@@@@AA@@@A@@@@@AB@@@@A@@@A@@@AB@BADCFADABA@A@A@@@@@A@@@@@@AB@@@@A@@AA@@@@A@@@A@ABA@@B@@A@@@A@@@@AA@@@A@@@@A@@@A@@@@@A@@@@@A@@AA@AA@@@@@@AB@@@@AB@@AB@@@@A@@A@@A@@AB@@A@A@A@@@AA@@@A@A@@@@@A@AA@@@A@AB@@AB@@@BA@@@A@E@A@CAA@AA@AA@@A@@A@@@@@A@@@@@@@A@@A@@@A@@B@@A@@@@@@A@A@@B@AA@@@@@@A@@A@@@@@@B@@@@@@@@@@@BA@@@@@@@AA@A@@@@A@@@@@@@@@AB@@AB@@@@@@@@@@@@@AA@@@@@@@@@A@@@A@@@@@@@A@@@@@@BA@A@@@A@A@@@A@A@@@@@A@@A@@@@A@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@A@C@C@@@AA@@@AA@AAA@C@@@@@AA@A@A@A@A@A@AA@@@@@ADCBEBABA@AA@@CAE@@@@B@@@@@B@AA@A@A@@BA@@B@@ABA@AB@@@B@@@BA@@BA@ABA@@B@D@B@BABA@AB@@A@AA@@@AAA@@@A@ABABA@CB@@@@A@@@@@AAAA@@A@@@@@@@@@A@@@ABA@@BABCDCBAB@@AB@@CDABABCB@BA@@@@B@@@@A@@@@@@@@@AA@@@@@A@@@@@@@@@@AA@@@@A@@@@@@@@A@AAA@A@@@A@@@@A@@DED@@ABAB@B@@A@@B@BAB@@@@@@@@@@@B@@A@@@A@@@A@@@A@@B@@AB@@@@AB@@AB@BA@@@AB@@@B@B@@@BABA@C@A@A@AA@AAA@CAA@@AAA@A@ABC@CBCBA@@@A@A@@@@@@A@@@A@@@A@@@A@@AA@@AAAABA@@@A@@BC@@@A@ACAC@AAABC@GFEBEBA@@@A@@AAA@A@A@A@@AA@@A@A@A@@@A@C@@@@AA@@@A@@BA@@@AA@@@@@CAC@@@AA@@@CBCBABA@@B@@AB@@AA@A@E@@@A@@A@AAECCCCAAA@@A@ABA@A@AACA@AAA@@@@B@@A@@BA@AFC@A@@@A@@@@B@@@@@@@@@B@@@@@B@@AB@@ABE@ABA@ADEDGBA@CBA@@A@@@A@A@AB@@A@CBA@@@@A@@AA@@@@@@@@@A@@@@@@@AA@@@A@A@@AAB@@@@AD@@@@AB@@@@A@@@@@@@A@@B@@@@@@@@@BA@@@@@@@@@@AA@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@A@@@A@@A@@@@A@@@A@@@@B@@@@A@@AC@A@CCIAGCAC@GBIDGBC@ABA@AAEAC@A@A@ABABABABCBC@ABE@@@A@A@@A@A@C@@A@@@ACM@K@CAAE@A@CAA@C@QGEACCA@C@C@CBEACDABE@IBCBCAA@ABA@EBCFABCFADABA@A@@A@A@G@A@@AAGACAA@CAACA@@BA@ABA@E@A@AACAAAAAAAA@MBEBC@CBE@E@IA@A@ABAB@@ADA@CACCCA@@@@AA@M@GAIAKCICIAKCEAGAGCKCICOBE@EBGJEJCHOBKAEAIEABCNKDIFIDCC@C@GMKC@EDQFIBUCGAEACG@M@UBGC@IJIBK@M@KCWOEA]RCVGNLZAJgjYLAZW\\A`y|ELM`Hd[VU\\cXD`E\\qd[CMJOEIF@H\\XILBX_TCTKHI@AJJB@HiZAREBE@E@CA@E@C@AICMIACC@GAECEBCFEBC@EACCLQ^[@C@EIIKE@ADEIMOQIEKECC@EBEACCCGAKACA@GGE[GECCO@OCOIEEACBCN@NCJGFCDODKAOEEEEAE@G@OAA@E@E@ABABEHC@GCOMECA@ILBBBDBDGPCNAL@N@JDHBBH@FBDB@HEXBHRRJLABGLMHCBIHEF@@D@BA@AB@B@@AB@@ABB@@@@BB@@BA@@BB@@FAB@DABAB@@ABABAD@D@B@DA@@D@B@@A@@BBCF@BBD@@HDBDBBB@DBDBB@B@D@B@@B@BBD@BBDBBBBB@B@B@BB@@BBDBBBNHB@BB@@BB@@BBD@DBB@DDBDB@@@HBB@DBDDBBB@DD@BDB@B@D@@DB@B@FAD@B@BB@@B@@AD@B@BB@@B@@B@@B@@@@BB@@B@BB@@BBB@DBB@@@BB@@D@@@DBBB@@B@D@MNADINCJINg~KVOVQ`EHEJED}@MJMLedIFMDODKFOHOXIZAHAJFFBH@J@HCFEB@F@JADCDC@IAG@M@I@GAGBSHIDEBKBK@IA[@IBEDEDADAHEFGDEBCBG@A@DBDBFBHAF@F@FBDBBDFBF@F@DAN@HBJBFDHHXTLFLJNLDDDFDDLFNHJDBBBBHJFDB@HGBA@AA@EAAA@ADCBC@A@CD@DCDADEFOBEFK@K@CAAECAC@CACAACEAA@AFAFCBEDCLGLKFCJI@E@CF@HBL@X@HBDBD@F@B@FDR@D@F@DBD@JDDDJF@@@BABD@@AFG@A@A@A@AB@DADB@AD@BC@A@@AA@@@CBCDAFABA@A@@AAAA@@@ABAB@BADBFBDBDBB@DBHBH@F@FAHAHAFAJ@F@HBDBH@HCHADAF@F@BBFBDBD@F@FAHAJ@JCDAJCHEDAFCFAD@F@H@FAFAF@HBF@D@FAF@D@DBHBD@@BBBDBFBFAFAFCJAFAF@D@B@B@BDBBBDBDFDH@DBDBBBFDFBPBVA^BJ@VENEFI@CAE@E@G@EBIDCDEFCDEHMBEJEFCNEFCLAdKhOlMJCHCFBF@HBRFDBF@J@F@TAH@F@N@F@BAD@BCDCDEHGFGHGDE@@BA@@B@@BADAB@BBDB@BBDADCDCDCBABAB@@B@B@D@BADCBCJGHEFEH@HBDDDDBDBJ@FAFCHAD@D@FBBBDDFBFDD@DBDB@B@B@B@BABA@@BDBHBB@B@DAD@FAD@F@DBHAD@DADBBBBBDBBBDAD@BAD@DBBBDBFDBDDBF@B@B@@BABAPCFCFAHAJAHCFCDABCB@D@DAFEJAJAFADAJEHAD@HAFCFAFABDDBB@DCDCDCHCFBDDB@DAD@BG@GBEBEBCBCBCBA@A@C@CBABABBBB@B@@@@BAB@@C@A@A@C@A@C@EBC@@A@@A@AAAA@AA@A@@DABAB@B@BBBB@DAB@@BB@ABA@CB@@@B@BAB@DA@BBBA@@DB@B@DABABA@@B@@BDB@@DADABAB@BBDBBBD@DA@CBCBCDEBABAD@DCFENAHAD@JBF@B@DADCF@DAFAB@DBBDBBB@FAD@BAB@BBBBBD@BBD@BAD@@BB@@BABABA@E@ABAB@F@DBD@DD@FADABABAB@BD@B@BAB@B@BFADAB@D@BB@@C@A@ABABAB@B@BAB@B@BAB@D@@@BB@BADADCBADAD@D@B@@@@D@BB@F@BAB@@A@A@AB@B@D@B@B@@@BA@A@@B@B@@B@B@BABBBB@DA@A@A@A@@B@DAD@DAFCFCFCFEDCDCDCFCDIFCLCFCF@F@HDLFNFTFLDHDHDDD\\FLDFBDDBBBBFDD@BBDBB@BABE@EBAF@J@F@RBD@DBDBHDBBB@@BUP@@BBBBDBBDNJJFDBBBDBDDBBB@AB@BGLAD@@@B@BB@BB@@BB@B@@A@ABA@@@@B@@AB@@BB@@@@A@@@A@A@@@AB@BA@ABC@@@@@ABAB@@@@@@D@B@@@@B@@A@ABA@@B@@@B@@@BA@C@C@A@A@@@@AA@@@A@@B@@@@@BD@B@B@B@@B@@ABA@CBA@@@C@@@@@@@@B@@C@@@@@@BBBB@@B@@A@@@@B@BDBLLBBFBBDBBFFDDBB@D@D@DABAFCDEHADCDADAD@BDBF@DBFDB@B@DAHCFALCXBFDJBPAFADADAJCF@HAHCF@D@DE@@BCBC@A@ABI@E@CFK@A@@@A@AB@B@@AB@BCBCBE@AB@@@@@@B@B@@B@@@B@@AB@@@@@AB@@@@@BB@@@@@DA@@@@@B@@@B@@@@@B@BB@@@@@BA@A@@B@@@@@BBAD@B@B@@BB@@B@@A@@@@BA@@B@BB@@B@@@BA@@@A@@B@B@B@B@@AB@BADA@@@@@A@@F@DBBBB@B@DAB@B@BABAB@D@@@B@@A@AB@@@BA@A"],"encodeOffsets":[[109144,38321]]}}],"UTF8Encoding":true});}));