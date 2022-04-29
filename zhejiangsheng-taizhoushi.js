(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('台州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"331004","properties":{"name":"路桥区","cp":[121.37292,28.581799],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@PSDAfGhQDGFSFyHSNQ^aFKBOMwU@gAU@KBCBEJ@B@JBN@B@BAD@@BAB@B@BD@DEB@B@DABABCBIBCBA@A@@@A@E@CDA@ABA@CAABCDCHADABBBEDCBGBE@C@CAAAAC@ACACAC@E@CBCB@BABABC@CBAAC@AAAAAAAAA@C@ABABAB@@BFAB@BCBABC@ABA@CAA@CAAA@@A@@@@@@@@@@B@@@@A@A@E@@@@A@@@A@@@@A@A@ABEAC@CAA@@@@B@B@@@@A@@@MAE@SK@ABA@@@C@ABA@@B@@A@@BA@A@A@@@@@@@@@@A@@@@@A@@BA@@@A@@@AA@@@AAAAAA@@AA@ABA@@BA@@B@@@@@B@B@@BBBB@@@@@@@@BB@@@@B@@B@@@B@@@BA@@@@B@@@@@@A@@@@@@@AA@@@@A@@@A@@@A@@@@@@@A@@@@@@A@@@A@@@@@@@@@@@AA@@@@@@@@@@@@@A@A@AB@@AAC@C@E@CBCBABA@@@AB@A@@CA@@A@@@@@A@@@A@ABAB@B@@@@BD@DBDADABEDEDCDA@ABA@@BA@A@C@@BA@@B@@ABA@A@CA@AAAA@BC@AAACAA@C@G@@@@@@@IB@@@BA@A@AA@@AEAAAAA@C@C@@@C@@@@@A@GB@@@@ABE@CBABABABAB@@CBC@ABABC@CBABABEFAB@@ABCBABC@CAA@@@A@E@E@A@@@@@A@@AAA@ACAA@C@E@EBCB@BADAHEFCBC@EBAB@BA@A@@BA@@@B@@B@@BB@BBBAD@B@BGFABA@CDA@@B@@@@BB@@@B@@@B@@ABA@@@AB@BA@A@A@@@A@A@@@@D@FBDBBAB@DCDABCB@B@B@D@FBDABABCBA@A@@DADABA@A@@BAB@BBBBBD@D@BBB@@B@H@BDD@B@@@B@@ABAAEBA@A@CBABADCB@D@@@B@B@@AB@B@B@@@BDB@DDDDBBB@F@BCDEDE@BD@FBFBDDBB@DCBCBCDAFAF@D@HDBBB@BBBB@@B@BBBBBBDDDDB@F@BBB@B@BAD@L@BDBBDA@@@AB@@@@@B@B@@@BA@@@A@A@@BEBABAB@@A@C@A@ACCCA@@A@BADAD@BAB@B@BA@ABCBABC@C@AAAAA@A@A@CB@BAB@B@@@FCFCFADABAB@D@B@B@B@@@FAB@BAB@@A@A@@BABADABAB@D@B@@A@CBE@A@A@@D@DBF@BB@AB@@A@C@ABABAB@B@BD@BBB@B@BBB@BB@B@H@HBF@BBH@F@DB@@B@BBDA@@B@@A@C@@@@@A@A@@@@@AAA@@@A@CBE@C@AB@@@FAFAB@D@B@B@F@@@@@\\HXD`DFBPBB@FB@AHK@@JB@@AL@BVDD@D@DA¬F"],["@@@@B@B@@@DBB@DAB@@AB@@AA@@A@@A@A@@@A@@@@@A@@@A@A@@AA@@B@@@@@B@@A@@@A@@B@@@@@BB@"],["@@@BBB@B@B@@@BB@@BCA@@@@@@@B@B@@BBDDB@@@@@B@@A@@A@@A@A@A@AAA@@BAAAAC@@CA@@@@@B@@@@"]],"encodeOffsets":[[[124505,29273]],[[124567,29231]],[[124569,29210]]]}},{"type":"Feature","id":"331003","properties":{"name":"黄岩区","cp":[121.262138,28.64488],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@D@D@@@@@@@@@@A@G@ABA@A@@BA@A@A@@@C@ABA@A@A@@AE@ADG@@FG@@@AB@@@@A@A@A@A@AAA@@AA@@@@A@@@A@@AA@@@@AA@@@A@@@@@@@@@@@AA@CB@@AA@@@@@@A@@@A@@A@@@A@@AA@@@AAA@@AAAAAACA@@AAC@@@@@@@@@@A@@A@@@@@@@@@@CBAAACK@C@ABA@A@AAE@A@CCCCAAAAAAA@@@AAAAA@AAGCC@E@EBCBADADCDA@CAACAE@EACF@FCDC@A@EAACACC@CCA@A@@@A@ABA@@@A@A@@@CDABCBADAB@B@FABBBA@@@A@@@ACC@A@G@AA@AAC@C@AAAA@ABA@AB@B@BABC@CB@B@DABABAAC@E@C@A@ADABADC@CBAAAAC@E@C@@B@B@@@B@B@B@@ABA@@B@BA@@@A@@@A@@AA@@@@@AB@DCB@BAHE@A@ABCAA@AAA@@@AA@@@C@CBC@@@A@C@CCA@@@A@@@AB@@A@@@AA@@AAC@CAA@A@C@A@CBC@MBEAA@@AAA@@@CECECIC@@GCCCAACACAE@G@A@@AACAAC@GDGBCBC@@ACAAAAAAAA@CBMBEBCBA@ADCBC@E@KAE@C@A@@@A@@BABAB@@A@A@@@@AAAACCAAA@@IAG@MC@@@@@@@@A@A@@@AB@@CDCD@@ADABA@@@@@CDCB@@@@A@@B@@AD@B@@@@@@@@ABA@@B@@AAABC@@A@@A@@A@@@@A@@@A@@@A@@@A@A@@B@@@B@@@@@@@B@@@@B@@B@@A@AB@@@@A@@@A@AA@@AA@@A@@@A@@@A@@@CAC@@@@@A@@@@@E@@@@@@BABA@@@@B@@A@EJCFGD@@@@@@ABCBA@A@E@@@ABAB@@A@@@@@A@@AA@@@@AA@@@@AAAAA@A@ACECCEACC@@@@A@AA@AAA@A@@AA@@@AA@@A@@@A@A@A@A@E@ECGACEGEC@@@@A@@@@@@@ACAA@CACBA@A@A@@@A@@@A@AA@A@@AA@A@@@AA@@A@@@@AA@@@A@A@@@A@@@C@A@C@@@C@C@AA@@MAE@EBEBA@@BA@@@@@AB@@A@A@A@@@@@AAAA@@@@@A@@AA@@@@A@@@@BA@A@@@AA@@@@AAAA@@@@@A@@AA@A@@A@@@A@A@@@A@@@A@@@@@A@@@@@A@@B@@@B@BAB@@@@@B@@@@@BC@@BAA@@A@@@AA@@A@A@@@A@@@@@ABA@A@CB@@CA@@AA@C@A@A@@@A@@@@A@@@AA@@ABA@A@@@A@A@@@AB@@@BBB@@@@A@A@A@AB@@AB@@AB@B@@ABA@@BA@@@A@@@@@AA@@A@@@A@A@@@@@E@A@EB@B@@A@@@@@A@@@A@A@A@@@@@A@A@A@@@A@A@@BAB@@CF@B@BAB@@@@EFA@@@@@@B@@BD@@BBBB@@@@@B@@BFABBB@BBB@B@B@B@BA@@@@BA@@@AAC@CAA@AA@@@ABA@A@@BA@@B@@A@@@A@@@AAAA@@A@@AA@@AB@@A@EB@@@@@@CD@@CBA@A@A@A@@@A@AB@@A@A@AB@@A@I@E@CCECCAEEECAA@AAAACACC@CACAC@CAC@A@A@E@C@CBED@@@@G@@@KB@@A@ABC@C@A@A@ADABABABA@AB@@ADCB@D@B@D@D@D@B@@ABAB@@AB@@A@@BA@@B@@A@@BA@@@A@@@C@AAA@@@C@@@A@@@A@@@ABADAB@@CAA@A@@BCB@BAB@@AB@@@@CF@@@B@B@BB@BDHH@@@@@BBBBD@BB@@@@B@@@@@@@BBBBB@@@@@@@BAB@BABA@AB@@EDEDGH@@@@@BAB@B@B@DAF@BABA@ABA@@@GBGBIDG@CB@@A@@BAAA@ABCDAB@@@B@@@BBBBB@@@B@B@@@BBB@@@D@@@BAB@@A@@B@@A@AJDBDDD@D@H@BFBDAF@DAFBBBF@BDBDBHBH@F@J@H@H@J@DBFBD@F@JB@@BBB@BB@@B@@@@@B@@@@@@@B@@B@@B@BDBB@@@@@@@@@@@@@B@@@@@@@@@@@@BB@@@BB@@@@B@@@@@@@@@@B@@@B@@@B@@@B@B@@AB@@@BAB@@@@@DAH@F@D@B@BAB@D@@@BB@@D@D@BAB@B@@@@A@@B@@@@@@@B@B@@@@@@@@AB@@@@@B@@@@@@@B@@@@@@@B@@@B@@@B@@@B@@@B@B@@A@@B@BBBB@D@@@@@BA@AB@@@@@@@@@@AB@B@@@@@DEHGHGDQJ@@A@@@A@@@@BAB@@@B@DB@@BBB@B@@@@@B@@@@A@@@ABC@@BCBEB@@A@A@AB@@ABAB@@@@@B@@B@BBB@DDB@@@B@@@D@DA@ADAB@DD@BB@@@@@B@@@B@@ABA@@@A@AAA@@@A@@@A@@B@@@B@B@@@@@B@DBB@@@B@@BB@AD@BBD@H@@@DBDFDBDDD@B@FAFAHAFBJBHDDFFJHBDBDBFDHBBB@B@BAD@D@B@BDB@B@@AB@B@@A@@BADADAB@DBDBD@@@B@BAB@BABEBEB@BCDCBADEB@DAD@FAB@BABAD@D@DABABABADADAB@BCD@BABABC@A@@B@BAD@B@@ADA@@HCBCFCBADAF@@@DBD@B@@@B@@@@BB@@B@@BB@@B@B@BBBABBB@BAB@@@@ABA@ABA@AB@B@@ABA@@@A@CAA@A@A@@BABCB@B@@@BBBBB@DBB@B@BA@@BABA@A@@@@@ABBB@B@B@B@@AB@B@D@B@@@@BBF@DFDBBBBDAB@DCBABA@@B@DBBBDBDBB@B@D@BBD@BDDFBF@@DBDBBBDADA@@DCD@@@@BD@@@B@JHBB@@HFHDJFFDB@D@@@B@DABABA@AB@BAB@@B@BB@BBBBBD@BBBBFA@BBDBB@D@B@B@B@@@B@FBDBDBB@D@DAB@@@B@BDBBDBBB@@BB@B@B@B@BB@@BB@B@FB@@HBHBLDF@BBB@@@DBB@BB@@B@@BB@@AB@B@BA@@@@@A@C@C@ABAB@@@B@@@BBBBDBBDDBBBDAD@BADCBCB@HAFAB@B@BA@A@ABCBC@EBEBCBA@@B@D@B@FABAJCBA@ABA@@BBB@DDDBB@FBD@B@BBB@@@HF@BD@FDB@B@B@BBBB@B@@DBD@BBB@@@B@B@BCB@DAB@B@BA@AAA@E@CBEBE@ABAD@DA@BB@BBB@B@B@BABADABAB@@@FCBAB@BAB@DCBA@C@A@@B@@ADD@BBB@DBDBFBDBBFBFBPBH@DBD@@@"],"encodeOffsets":[[124264,29385]]}},{"type":"Feature","id":"331021","properties":{"name":"玉环县","cp":[121.232337,28.12842],"childNum":20},"geometry":{"type":"MultiPolygon","coordinates":[["@@CGQW[S[UKKU]E]GKEK@ICOAACEICKEAA@CCUAEACGCECIAKAI@GBEBCDIPEFOHYLIDW@ICEC@E@IDGBIJONQFODM@KAKKcCECEEGECICGEKIMOIIGCmK¿MSBO@QDIDGJERCT@ZAPWCXINQN`RHLHJFHDDBHBXJ|B\\BNBL@V@JBN@JDHDFDDFDJBPDLBLAJ@FANELAL@LAF@HBFDHDHBP@H@B@@@RCPEJADBBBBBBDBBDBBB@@B@DA@@B@D@DBFFDB@BB@FBJBJBFBFDBDDD@@@B@@BBB@BB@@@@DBH@@@@@B@@@B@@@B@B@@@B@@BB@DBB@BB@@@BBBBB@BB@@@B@@@B@@@B@@@B@BBB@@BB@@B@@B@@@B@@AB@@@BA@@@AB@B@@B@@@@@@@@@B@@@@D@@@BBFFFDDB@@DDBDBBB@DBBBB@B@@@B@@A@A@ACECG@@BA@A@A@@@A@@AA@C@@@@ACAA@A@@AA@@@ABA@@@@@@@AA@A@@A@@@@@@@@D@@A@@B@B@BA@@B@B@@@@A@@@CAC@@@@AAA@@AA@A@AAAAAA@AAC@CA@@A@A@@BCDADABAB@F@HAF@FABAD@HBHABEBEBCDG@@@A@AB@@@@@@@D@DB@@@@B@@@@@B@@@@@BBD@@@B@@B@@B@@@ADAB@DB@@@BBDBDB@@@@B@@@B@@@B@@A@@@A@A@@@A@@@C@@BA@@BABB@@@BBBB@@@@@B@@@DC@ABABAB@B@F@B@@BB@@@B@@@B@BA@@B@@@B@B@D@H@HAHBNAP@"],["@@@@B@@@@AACAAA@AACAA@@B@BBBDDFB"],["@@@@B@@@@@@@B@@@@@@@@A@@@@@@AA@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@B"],["@@ABCFABBBBDBBB@H@FBBBFAFBBBDDBBBD@BB@DBDFDBB@B@BA@ACOAAACC@C@AAAA@ACAAAC@EEAAC@CBA@A@EAAA"],["@@ABA@@B@DBHDFBFHHDDBBHBFBB@BBBD@B@BBBHDBBB@BAHK@A@CKMAAA@ABA@ABABC@C@AAACCCAEAE@ACACACACAAA"],["@@@BDBB@B@B@@@B@B@@AA@@A@@@A@@@AA@A@E@A@@B@B"],["@@@B@B@@DBB@@ABAAAA@A@A@"],["@@@@A@@B@@@BB@@@@BB@@@B@@@@@@A@@@@@@@@B@@@@@B@@@@@B@@BB@@@@@@B@@@@@@B@@@@@@B@@@@B@@@@B@@@BA@A@@@@@@@B@@BB@@@B@@@B@@@@@BA@@@@@B@@B@@@@@B@@@AB@@@@@@@@B@BB@@@@BBB@B@@A@@@A@@AAA@@@@@@@@@AA@@@@@@B@@@AA@@@@@@@@@@@A@@@@B@@A@@@@@@@AA@ABA@@A@@@@@@AA@@A@AAC@A@@@A@AA@@A@@AC@AB"],["@@@@@@@@B@BB@@@@@@@@@@@B@@@@@@@@B@B@B@@@@AA@@@@@@A@@@@A@A@@@A@@AAB"],["@@EAEAA@@B@@@BA@@B@D@BB@@BA@@B@@DB@B@@ABA@@@BBB@DBB@@BA@C@A@A@@BA@@AAB@@BDBDDDFFFB@A@A@AAA@AB@@A@A@ABA@AAA@@A@@ABA@@DBB@DA@A@@AA@@A@BA@@A@@A@@@A@AACCC"],["@@@BB@@AB@@@BBB@@AB@B@BA@@@A@@A@@@A@@AA@@AB@@@@@@A@@@AA@@@@AAAA@@B@@@B@@@B@@A@@@@@@@@@@@@B@@@@ABA@@@@BA@@@@BB@BB@@@@"],["@@AAA@AAAB@@ABAAA@A@@@@BBB@@@BB@B@@@B@@@@@BB@BB@B@@@B@BBB@BBD@BA@@AA@@B@@AA@B@@A@@@A@@@@@A@AA@A@A@@@@B@@@B@@A@CA"],["@@@@A@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@A@@A@@A@@@"],["@@@@@BB@@@@@B@@@B@@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@@@AA@@@@BA@@@@@@B@@@@"],["@@@@B@@B@@@@B@@@@@@@@@@B@@@@B@@@@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@@@@A@A@@@@@AA@@@@@@A@@A@A@@B@@@@@@A@@@@@@@@@A@@@@B@@@@@@@B@@"],["@@@B@@@@@B@@B@@A@@@@@@AA"],["@@B@@@@@@@@@@@@@@@A@@@@@@@@@@@"],["@@@B@@@B@B@BB@@DB@@@BB@@@@BA@@@@@AAA@AAA@@@AA@@AA@@@"],["@@@@@@BB@@B@@BBA@@@AAAA@A@@@@B"],["@@@BBBBBBDBBBBD@HBDBF@@@F@B@B@B@@A@@ECCAEAEAA@@ACAC@A@AA@AA@C@@@AB"]],"encodeOffsets":[[[124373,28933]],[[124246,28812]],[[124325,28786]],[[124259,28762]],[[124419,28746]],[[124332,28884]],[[124333,28888]],[[124301,28795]],[[124311,28806]],[[124325,28754]],[[124328,28713]],[[124327,28725]],[[124407,28807]],[[124402,28804]],[[124403,28772]],[[124440,28777]],[[124448,28781]],[[124447,28741]],[[124449,28742]],[[124053,28686]]]}},{"type":"Feature","id":"331002","properties":{"name":"椒江区","cp":[121.431049,28.67615],"childNum":16},"geometry":{"type":"MultiPolygon","coordinates":[["@@abUXed«ECBC@C@UC@ABK@@IA@@GL@BEAA@OAEA_CWC[G@@@@E@A@A@C@A@EBEB@@A@@B@DAF@D@B@@BB@B@@@@@B@B@@@@@D@BA@@@CBAAA@@@CAE@G@AAE@GAG@A@A@@AAA@A@AAA@AACA@A@ABAB@B@D@BA@@BAAE@CAC@@@@B@BAF@D@BA@C@A@ABCBABAB@@@B@BA@ABA@EB@@A@A@A@C@A@ABCBEBEDED@@A@A@ABA@@D@B@BBBBB@B@DADABAD@BABA@A@ABC@CBABB@@@DBDD@B@B@D@BA@ABABAF@@@B@B@@AB@@A@A@@@@@A@@B@@@@@@@@@@@@@BB@@@@@@@@@@@BD@BB@BDBBBB@BB@BB@@B@@BB@@@B@@@@B@@@B@@@@B@@BA@@DBB@@@@@@@@@@B@@@B@@B@@B@@BB@@@B@@@@@BB@@BB@B@B@B@B@B@@A@@B@@EH@@CH@BBF@@@B@BAB@B@D@@@B@BAB@@@BAB@B@H@B@@@@@@@@C@C@C@AD@D@F@@DD@BBH@FBHBH@J@DABA@CBCD@BADCJAB@@BBDBB@BBBBBB@@@BB@@@B@@@@@BB@BB@B@FBB@HDB@@@@@B@@AB@@@@@@@@@BA@A@@B@BAB@@AB@@@B@@B@@B@BA@@B@@@B@@@@@B@@@B@@BB@@@@BBD@B@@A@@B@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@@@BA@@B@@A@@@A@@@A@@@@@A@@@A@@@@@@@A@@B@B@@@@@B@BB@@B@B@@@B@B@B@@A@@@@@@@@B@@@B@D@@BB@@@@@B@@@@ABA@@B@@@@@@@@@BB@BB@@@@B@B@B@B@@@@@DB@BH@B@@@B@B@BADCDADAD@BAB@@A@@@CBA@ADCDCHABAB@BABA@@BAB@B@B@BB@@B@BBBAD@B@D@B@BBB@DBB@BBBBB@@AB@@ABC@E@AB@BAB@@A@A@A@@@AB@@A@@@AB@B@B@B@BBD@DBB@@BBBB@@@@@@@DCB@@A@@@A@@@A@@@@@@@@@A@@@@BA@@@@B@@@B@B@@@B@BA@@@@BABC@@@@@A@@@AAA@A@A@CBCDAFAD@BADAD@DABBB@DBDBBBBBBBB@B@DC@@@@B@BA@@B@@@B@@BHC@@@@B@FA@@FA@@@@@@B@DD@BDABCBA@@@@@@BC@A@@BCB@@@@@@@DC@@B@@@@@@@B@@@@@B@BABC@@@A@@@A@@B@@@BCBCDGFIDE@@B@DB@@BCB@@@AF@@FB@@B@@@@@@@D@@@@@@A@A@@@@@@@@A@@@@@@@@@@@@ABA@@@@CACAGC@@@@@CB@@@B@B@@A@@HOHGJELE@"],["@@@@@BB@@@@@@A@@@@@@@@@@A@@@"],["@@B@@BB@B@@@@B@@@B@@@@B@@@@@B@@@@A@@@@AAB@@@DBB@BB@@B@BBB@@@@@BA@@@AA@AAA@CAA@A@@@C@AAA@A@@@AB@@@@"],["@@BAD@D@BA@ABAAA@A@ACAA@@@ABA@A@AAC@IGE@A@A@@@@@@B@@@BDDDDB@D@B@BBDD@B@D@@@@B@B@"],["@@B@@B@@@@@A@@@@@@@@@@A@"],["@@DBF@@@DA@@@A@@AAC@C@CAACA@C@@@AB@@@B@BDBBBD@"],["@@A@A@@B@@@@@B@@DB@@@@BB@@B@@@B@@A@@@A@AA@@@@@@AA@A@"],["@@MBI@A@CD@B@DBBDDLH@B@DABABADBDDB@B@BABCAMCA@ABAB@F@DBBB@H@H@DBHFBB@BAD@BBBDBF@JDB@BA@A@CEC@A@ADABA@CBCBAD@F@BBD@HAD@F@BA@AACCCCCEI@CC@C@A@ACBABCDA@CAAA@E@C@C@GEGAEA"],["@@C@@B@BDJBBBBB@BADBDBDD@BBBAB@@@DBBBDDBHDBD@B@BB@BBFCD@FABB@B@B@@@BD@T@D@DBB@F@D@@A@CACCEMKAAE@GAEAECCECCAACBA@ABAD@BA@CAAAACAAAAE@C@CCCCC@"],["@@@P@B@@D@D@@@BA@AAI@CBI@AAAA@A@ADAF@D"],["@@B@BBB@@@AA@A@AAA@AA@A@@B@@@DB@@B"],["@@@BBAB@@@@@AAAA@A@@@A@A@@AAA@C@@@A@@BBDBDBBD@"],["@@@@BBDB@@D@@@BAB@@AA@@ACA@@@AAC@AA@A@AA@@AB@B@B@BBF"],["@@AD@BBB@@AB@D@@BBB@B@DAB@@AAAA@@AA@@AB@@@BA@ABA@@D@@@DAB@B@@@BAA@A@@AA@AACBA@CBAB@BC@"],["@@@@@A@@@@@A@@@@@A@AA@@@A@A@@@A@@@A@@@@@AA@@A@A@@A@@@@@@AAA@AB@@@BBB@@BB@BB@@@B@@B@BBB@@BB@@B@@A@A@@@@B@@@@@B@B@@@B@"],["@@@@@@@BBBB@@@BBB@B@@@@@@@@AA@A@ACA@@@A@"]],"encodeOffsets":[[[124506,29361]],[[124674,29303]],[[124786,29298]],[[124741,29298]],[[124722,29296]],[[124738,29288]],[[124850,29221]],[[124815,29155]],[[124795,29107]],[[124867,29125]],[[124840,29096]],[[124821,29091]],[[124838,29076]],[[124843,29139]],[[124786,29113]],[[124828,29078]]]}},{"type":"Feature","id":"331022","properties":{"name":"三门县","cp":[121.376429,29.118955],"childNum":15},"geometry":{"type":"MultiPolygon","coordinates":[["@@LqDCJCr[\\QDE@G@KGOCKGaBIBKDEFG]PGPIJKFS@MGuBIBIJKdUPIHO^yTiHSBQASAKGGICMCU@SBNRG@IECIECCCOGCACA@A@@AA@C@@A@@@@@@A@@@@AAGAA@@EA@A@AAEA@@@C@@AAEAAC@@@AEA@@@@ABCB@@A@@AABA@@@A@@@C@@@AAA@@@CBA@AD@@@@BB@@@@ABABA@A@@@@@@B@@A@@@CA@@A@@@A@@@AC@@A@E@@@AC@@A@@D@B@@C@@B@@B@@B@@ABA@A@@@GEGCA@A@ABDD@BADABABABABA@ABABA@@AA@@A@@EAE@@@CBEHABCBA@@@A@CCA@CCA@ABAB@AA@ACA@E@IBGBC@E@GBGAK@A@E@A@@A@@ACBA@@@AAB@@AB@@A@@@@@@BA@@@@@@@@BA@@@@@A@@AA@A@@@CAE@E@CBCBEBCB@@@@@@@@@@@B@@@B@@B@@@B@BFBDBDAB@F@D@@AD@@ABABC@@BA@@B@B@@ADA@@B@@@B@@@B@@BB@@BB@@@@@@@B@@@@@@@@A@@B@@A@@@@@A@@@C@CBEBE@CB@@@@A@@B@@CDADAB@@A@AB@@A@@@A@@@@@A@@@@@@@@BBB@@@BB@@BB@@B@BA@@BA@@B@@ADAD@F@@@@@B@@A@@B@DAB@@@D@F@D@BBB@B@B@@@@@BA@@@ABA@@@@A@@AA@@A@A@@BA@A@A@@@A@C@C@ABABAB@BCBABCDCDCFAFAF@D@B@@@BA@BB@@@BBB@@AB@@E@EBEBED@BAH@@@@@@@@@@@B@@@@@@@@@@@@A@@A@@@@@@@A@@@A@@@@@@@@@@A@@@@@@@@BA@@@@@@@@BA@@@@@@@A@@B@@@BB@@@BBB@@@@@B@@@@@B@@@@@BB@@B@@@@@@@@@@B@@AB@@@B@BA@@B@@ABC@ABCB@@@@@@A@@@@@@B@@A@@@@@A@@@@@A@@@@BA@@@A@@B@B@@@@@@@@@@@@@@@B@@@@@B@@@@@@@@@BA@@@A@@AA@AA@@AA@@A@ABA@A@A@@@A@@@AB@@@@A@@B@@@@C@A@A@@@A@@@@@A@@@@@A@@@@@A@@@@@AA@@@A@A@AAA@@BA@A@A@@@A@@@@@A@@@@@@@@@A@@@@@@@@@A@A@CA@@@@@@@@@A@@@A@AAA@@@AAA@A@@@@@@@AAC@ACAAAA@A@AB@BCBA@A@A@C@AA@AAAAAAAAAAAAGAE@AAA@ABCBADEBCBADA@ABCB@B@F@DBB@DCDC@@D@BAB@FAFABEDA@A@@@CC@@A@ABA@A@AC@@A@ABC@K@C@G@@@@BA@A@AB@@C@@BA@@@AB@BA@@B@@AB@B@B@@@@@B@@@@@@A@@@@B@@@@AB@@@@@@@@@BBB@@@B@@@@@B@@@@@B@@B@@B@@@@AB@@@BA@@@@B@@A@@@@@@@A@AB@@A@AB@@@@AB@B@@A@@@A@A@@AA@@@@@@@A@@@A@@B@@@@@B@@A@@@@@@@@B@@@@A@@@@@ABDF@BBD@D@D@D@B@@@@ABCBA@A@A@A@CAC@CA@@CCCAAEAAAA@@@@ABA@IBGBE@GBCB@@A@ABAB@BA@C@@@A@C@CCCAA@A@@@A@@@@@@BBH@D@@@BA@A@@B@@ABEDABA@@@EBQBC@A@A@@BEBBD@@BDDDBB@DBD@D@DBD@DBB@@@BFD@@DDDD@BBBDJ@B@@@B@@@BA@@BAB@B@@BBDDBD@@DBLHBBB@@BDHBDFHBB@BDBBBB@FBDBB@@@@@@BBFFNBB@BBBA@ADAD@@BFDFD@B@@@D@B@B@B@B@BCB@HC@@@@@AA@CC@@@@@A@@DCBCB@BAD@B@BA@@BABCB@@AD@HA@@@@@ABC@@@A@@B@F@B@B@DB@@B@@@AB@D@B@B@@@@FD@B@@@F@B@BDD@@@@@B@@EHAB@@@@@BB@@@BBB@D@F@B@D@DADAB@@A@C@E@A@@@A@@B@D@D@@@B@@B@DBB@@DD@@BDDHB@DDDBDBFBF@B@BBDB@@@@BDB@@@BBBBBBBD@B@@FD@BB@@B@@ABAB@@BD@BA@CD@B@@@B@BBFBDBBNVJRDD@B@@@D@B@@@BA@GHAB@@@B@D@BBBB@BBFBBBJBB@BBFDHHDB@BB@@@B@B@BA@@B@BADCFEFEDCBADC@CB@@AB@HEB@@A@@@AAA@A@ADM@@@@@A@@AACA@@@@@AA@@A@A@A@@BAB@@ABAB@B@BA@@B@D@DBB@D@@@B@DB@@B@FAB@B@@@JBFBD@J@F@D@D@J@FAF@FCDADADCDCHEDCFADAHAH@PAZAFAHALAHAFAF@D@D@DBDFDDFHFJDFFHDFDDBDBDDFBBDBFBDBJ@H@HAH@zE"],["@@@B@@BB@@BBB@@@B@@A@@@AA@@A@@@A@@@A@@@A@@@C@@A@@@@B@BA@@AA@@@A@@@@B@BB@@B@@@B"],["@@B@@B@@@B@@@BB@@@BBBB@@B@BAB@@AAA@A@ADABAB@@@B@BA@ABB@@B@@@@AB@BA@AA@@CAA@A@@A@A@A@@BBB@BA@@@AB@@@BA@C@@@ABA@A@@BC@AAA@@@@B@@BBBB@@ABA@"],["@@BBBBABA@ABABC@ABAB@B@BB@@B@D@B@BD@D@@@B@@@@@D@@BB@B@B@@@@@@AAABA@AB@BA@BB@B@@A@@@@BE@A@A@@BAB@B@@A@@@@AAA@A@@A@A@@@A@A@ACAA@C@EFA@A@@B@@"],["@@AB@D@@BBBBD@B@@@B@@@@A@@B@BA@@@A@@@A@A@@BA@@B@@A@AA@A@@@A@@BA@EBCB@@"],["@@@@BA@@AA@@AB@@A@@@@@A@ABA@@@@B@@B@@@B@B@@@B@@AB@"],["@@AB@BAB@B@@BBBBB@D@BBBA@AA@@@@A@@@AAA@CA@A@A@"],["@@A@@B@BB@@@D@F@B@@A@BB@@@B@@AAA@AA@A@G@AB"],["@@BABAB@DBB@B@B@@@@AAC@A@ABA@@@AC@CAEBA@A@ABCDC@@B@BABAAA@C@ABABAB@@@BAB@@BBB@BA@@B@BA@@@AB@BB@ABB@@@B@BB@B@BAB@B@B@@ABA"],["@@@@@@@@B@@@@B@@BA@B@@B@@@B@@A@AA@@@@@AA@@@@A@@@A@@@@A@@A@@B@@A@@@@@@@BB@@@@@@@BB@"],["@@@D@@B@DBB@@@BAB@B@BBB@B@BA@@@A@@AAAAA@A@@@A@AA@@A@ABA@@B@@@@A@@@@@A@@@"],["@@@@@@@B@@B@@B@@@@B@@@B@@@@@B@@@@A@@AA@@@@A@@@A@@@@@@@A@"],["@@@@@B@@A@@@@@@B@@@@@@B@@@@@B@@@@@BA@@@A@@@@@@@@@A@@B@B@B@@@@AB@@@A@@AA@A@A@A@AD@@@B"],["@@@@A@@@@@B@@B@@B@@BB@@@B@B@@@@@@@@A@@A@@@@@B@@@B@@@B@@@@AA@@@A@@@@AA@@@A@@B@@@@@@@@@@A@A@"],["@@@@@B@@B@@B@@B@@A@@@@A@@@@A@@@@A@"]],"encodeOffsets":[[[124528,29870]],[[124669,29792]],[[124616,29787]],[[124608,29795]],[[124607,29815]],[[124608,29824]],[[124592,29764]],[[124603,29758]],[[124593,29760]],[[124700,29674]],[[124690,29677]],[[124687,29685]],[[124727,29654]],[[124719,29657]],[[124720,29654]]]}},{"type":"Feature","id":"331081","properties":{"name":"温岭市","cp":[121.373611,28.368781],"childNum":25},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@B@@@@@@@@@@@@@@@@@@A@@AA@@@BA@@@BB@@@@"],["@@@@B@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@A@@BB@@@"],["@@BD@@@B@BBBB@B@@A@@BC@@@A@@AAA@AAA@AB@@"],["@@AD@@@BBB@BBBBBB@DBB@BA@A@AB@B@AA@@A@BA@@@A@@@ACACAC@CB"],["@@DBBBB@B@@B@@@@@B@@@@@B@@@@@BB@@@@@B@@@@B@@B@@@BB@@A@@@@B@@B@@@@@BA@@@@B@@BA@B@@B@@B@@@@B@@@@@B@@B@@BB@@B@@@B@@B@@@@@B@@@@@@@@A@@@A@@@@@@@@BBB@@@B@@BB@@A@@@A@@A@@@AA@@A@A@@@A@@@@A@@@A@@AA@@B@@A@@A@@A@@B@@A@@@@A@@@A@@AA@@@A@AAA@@AAAA@@AAAC@AAA@A@A@A@@B@@BB@@@A"],["@@@@@B@@@B@@B@B@D@@A@@@A@AA@@A@@AB@@@@A@@@A@@@@@@B"],["@@@@@B@@@@@BB@B@@@B@@A@@@@@@B@@A@@B@@A@@@@@@@@@A@@B@@@@@@@@@@A@@@@@@B@B@B@@@@A@@@@@@A@@A@@B@@@@@@@@AA@@@AA@@@@@@@@AA@@A@@@@@@@@@A@@@@@A@@@@@AAA@AA@@A@@@@@@B@@@@@@@B@@@@BB@@@@@AB@@@@@@B@@BB@B@BB@@B@B@@AB@@@@B@AB@@@@A@A@"],["@@A@AB@@@@BBB@DBDBB@@AB@@BB@B@@A@@B@@@BA@@@A@A@@@A@@@@@@B@@@@A@@@A@@A@AA@@A@@AAB@@A@@B@@A@A@@@AB@@@@BB@B@@A@A@A@@B@@A@@A"],["@@DBBBA@@B@@@BBBBBB@@ABA@@@ADB@@BAAA@@@A@AAAAAAA@AA@CAC@ABA@BB@@BB@BABB@@@"],["@@AB@B@BBB@@BBDBB@@@B@B@@@@A@@AAA@@A@AA@@@@@@A@@B@B@@@B@@A@A@@A@AA@ACAA@A@A@@B@@@BBB@B@@"],["@@@@@@@@@BB@BBB@B@@A@@AAA@@@A@@@A@"],["@@@BA@@@A@@@BB@@B@@@@BB@@@B@B@@@B@@@@@B@@@B@B@@@@A@@A@@A@@@@@@@AA@@AA@A@@@@@AA@@@@@@A@@@ABB@A@@@@@@@A@@BB@@@"],["@@A@@B@@@@BBB@@@BB@@B@B@@@@@@@@@@AB@@B@@BA@@@@AA@@@@B@@@AA@AA@@@@@A@A@@B@@A@A@"],["@@AB@@@BBBD@@B@@@BA@A@@@AB@@@B@@BBB@B@B@@@@BBB@@B@B@B@@@BB@@D@@@@A@@@AA@@AAA@A@@@A@@B@B@B@@A@@@ABA@@@@AA@AAAB@@AB@AA@A@@@AA@@AA@ABAB@B@B@@A@A@@@A@A@AAAB@@@B@@@@@@AB"],["@@AB@BB@BBB@@@BA@@BB@@B@@@B@@A@AAA@AAA@@AA@@ABABAB"],["@@@@B@@BB@@@@@B@@@@@@@B@@@@@B@@A@@AA@@A@@@@B@@@@@@AA@@@@@@A@@@@@@@@@@@@@A@@@@B"],["@@@@@BB@B@B@@BB@@@B@BA@@@AA@@@AA@@@@A@@A@@A@@@AB@AAB@AA@@B@@@@BB"],["@@BB@@@B@@@B@@@@B@@@B@@@B@@BB@B@@A@@@@@@@@@AB@@@@@@AA@@A@@AA@@@@AA@@A@@@AB@@AA@@@@A@@@A@@@@B@@@@@B@@B@"],["@@ABA@@BBBDBBBB@B@HDBBB@B@BAB@@A@@CAAA@AC@AA@A@@@AB@B@B@BA@@@AAAC@CAAACB@@A@C@A@A@ABBB@BD@BB@@@@A@"],["@@A@@@A@A@@B@@@BB@BBB@B@B@BBBA@@@@B@@@@A@@@@@@@A@@@@@@@@@A@AA@@AA@@@A@@@A@@@@BAB@@"],["@@@@B@BB@@BA@@@@@A@@@@B@BA@@BAA@@@A@@@@@AB@@@@@@A@@@A@@@@B@@@@A@@@@@@B"],["@@@B@@@@@B@@B@@BBBB@BAB@@@B@@@@A@@@@A@@@@@A@@@@AAAA@A@A@@@@@@@"],["@@B@@AB@B@@ABAFAD@DAFEBGBC@ADAFAF@D@B@DB@BBB@BB@@@@@B@F@F@B@@@B@DBD@BADABA@@BAFEBABADAD@BABAD@DA@@BABABABADAF@BA@@@@HAB@@@@@D@@@D@D@B@BBBBBF@@BBB@B@@A@@JA@@@@@@H@D@B@DBBB@BADB@BB@BDBB@B@BA@@@AB@@AD@B@B@@AB@BAB@DCFCFCBABCAC@CAC@@@@@ABABAB@@@B@@@@@B@@@DB@@@BBA@@B@BADADAF@D@D@BB@@BAB@B@@@@@@@@@@@@@B@@B@@@@@@@@@@@B@@@B@@@@B@@@@@@@B@@@B@@@B@@@@@BB@@@@@@B@@@@@@@@A@@B@@A@@@A@@@AA@@@@@AA@@@@@@@@AAAA@@@A@A@@@@@AB@@AB@BAB@@BB@BBBB@B@@BB@@B@@@B@@AB@@@@@B@@@@@@@@@@@@B@BAB@@@BA@@@AB@B@D@@AB@BTLF@NB@@B@@@@@@A@A@@B@DBD@FBBAB@B@@@@@@B@@@B@@F@B@B@@@@@@A@@@@@@@@B@@@BBDBB@DBB@BAD@BADA@ABAAE@@BABABAD@B@BBBBBBBBD@BBDAD@BABA@ADADAF@D@DBDB@BBDBBDBD@F@HADAFCAABABCDGDCBADBB@BAB@DCF@B@@@B@B@DAJADABABA@C@AFA@CACA@A@AB@@BC@A@AAM@I@AFIDALAV@hBV@VCNEJOJ[BUCIGCkMMCCCBCBEBA@A@EACCCGKMKIEICCGAE@C@CBADAD@LBRHPHD@BABQBABALHDABCAACACA@C@C@EACY]EIAICEACCGCGCGBGDEDG@EACAACACAEAAACCAE@E@AACACEGGEECQAKA_EICGECAC@ABABAFALCDGLALANDRCHKHsXYH[FY@ICKEGIGMEIQKSMCGAG@MBEO@MBGAGBG@C@A@A@@@A@@@ABA@@@A@@@A@@AA@E@A@A@ABAB@BCD@@A@@@@@A@AA@A@@AAAB@@AB@@@D@@@B@@@B@B@@@BA@@@A@@@A@@@@@CACAAA@@A@@CBABC@@A@@@@AA@@@C@AA@@@@A@@@@@A@@@@@CAC@@@@@@@A@@B@B@@CHADAFAFGBGAC@ABEBE@GBE@A@ABCBCBAD@@@B@BB@@DBD@BBBBBBBB@B@@BB@BB@@@@BD@D@@@B@@A@A@@@ABA@A@@@@BC@@@@@@@@@@BB@B@@B@@@@@@AB@B@@BB@@@BBBBD@@@@@DBB@@@B@@@B@BAB@@DHDF@B@B@BA@@@A@A@AACAA@AAACCC@@CAECEEAA@@C@@@@@@A@@@@@@@@@AA@A@@B@@AB@@A@@BA@@@A@@@@AA@@AA@AAA@@@A@@@A@@@A@@@A@@AAAAA@A@@AAA@CAA@@AA@@@A@A@@@A@@@A@@@@@G@CA@@@@AAA@AA@@@A@@CCACECEAIAIAEAA@@ACAEECAC@A@@@CBA@@@AACAAAACAAAACAIBOFQD@@A@G@O@GAGCECGAE@KBK@KBMFEBI@KBFHHJDFHJFFHJJLFHDFBDBDBDBFBB@BBAB@B@BA@FCA@@AD@DBFBJBHBHBDBB@BBDAFAF@BABABABCBABADEH@@BBD@B@@B@@@B@B@BB@@@BA@AB@BAB@BBD@LBBB@B@BABA@AB@BDBDDBBBBB@@BBBB@@AB@BBBAB@D@B@B@B@B@B@B@B@@@DBB@B@BB@@ADBB@B@BBBBD@BFH@BAB@FBB@BD@B@FB@@BBA@ADCDCBCBC@CDCBCBCBADABEB@@CBA@C@@@A@A@A@E@AA@@A@A@@@AB@B@B@@@B@B@BB@BD@BBB@BB@BBB@@B@BABABABE@CAE@A@A@ADCD@B@@@B@BAB@@AB@@@HADABCD@@@BBBDBB@@BA@ABCBC@A@EDEDCB@B@@@B@DBD@@AB@@A@A@AB@@A@A@@BA@@@A@CAA@@BA@@B@B@BA@A@A@@@AD@DAB@@@B@@@@@B@BA@@DADCD@DA@A@ABAD@@ABB@@BBB@@@B@D@B@DNDH@JB@@BBDBBDBB@B@@B@B@@@BABA@AB@@@B@D@F@LBF@D@DABCB@DAFANADAB@BBBBBBDB@BD@DAHAHCD@BBBD@BB@H@F@DBDBBBDDHD@@JDFDFD@D@@BB@BB@FBNAD@DAB@D@B@B@DBD@BB@@BB@@B@@@BA@@B@@@B@DDD@B@@@D@DAD@"],["@@BD@@B@BBB@@@B@AA@AEC@@A@@B@@"],["@@@@BBB@@@@@@A@@B@@@@AA@@@B@AA@@A@A@A@@BBB"]],"encodeOffsets":[[[124629,28928]],[[124626,28921]],[[124639,29082]],[[124646,29057]],[[124563,29031]],[[124605,29069]],[[124608,29066]],[[124600,29052]],[[124567,28976]],[[124579,28970]],[[124583,28979]],[[124615,28944]],[[124606,28949]],[[124599,28958]],[[124656,28946]],[[124562,28929]],[[124584,28889]],[[124568,28896]],[[124554,28903]],[[124487,28924]],[[124478,28927]],[[124470,28955]],[[124236,29214]],[[124512,28921]],[[124531,28926]]]}},{"type":"Feature","id":"331024","properties":{"name":"仙居县","cp":[120.735074,28.849213],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BE@AAA@CBAFEBAD@@@DCBA@@BABCBA@@@C@@BA@CBCBA@ABC@A@AB@B@FAHAB@HAH@@@B@@ABA@AB@DADC@@@A@EBEDC@A@@BA@@BAB@D@B@@@B@@ABC@@BA@CBC@C@AAAAACAAA@@@@BABAFEBCBABABAB@D@D@B@B@B@B@DABB@@BA@@BABAB@B@BA@@FGBC@@A@@AAA@AA@@@A@@@A@@@@@AA@A@A@@@@@@@@@@BA@@DC@@@@BABABAB@@BB@B@@@@@@A@@BA@A@A@C@ABA@C@C@E@@@GAEBEHCDCDEBEFMBEBECKCGEIAA@GBIBEFGBC@EBA@@@C@C@EBCDEHCFCDABA@ACAA@AAAA@@CECA@AAAGCECAA@C@CDA@ABA@@DKDCBAAACGAEACACIGEECCAGAIBEBGBE@E@ACCACECAC@C@@@GAC@ABCA@@AA@@@A@CAA@@@@@A@A@@@A@@@@B@@@B@@BB@B@B@@AB@BA@@@A@@@@@A@@ACCA@CB@BCBC@@@A@@@A@CCA@AAA@@@@A@@@@BABA@@BAB@B@@@FADA@AD@BA@@B@@@@@@A@@@@@AAA@AA@@C@A@@BA@A@@B@@@B@@@RIHCHGFG@C@@@@@ABA@@@@@@@@@@BAB@@A@@@@@CAAAAA@@@@BA@A@@@A@@@A@@@A@@@A@@@@@@@A@@@@@@@A@@@@@A@@B@@@@@@A@A@@@@@@@A@@@@B@@A@A@ABC@C@@@AA@@C@A@ABA@C@E@G@CB@@@@A@AB@@A@@BA@A@@@A@@@A@@@A@@@@@@@@@@@@A@@A@@A@@AA@@@@@@@@@@@@@A@@@@@@@@@@@@AAACA@@@@AA@@@@@@@A@@@@@A@@@AAA@AA@@IAE@C@EACAI@G@G@I@E@G@GACACA@AAEAABE@CBEACAEG@C@C@CCCABICCAAAAAAA@C@A@CBCFABADA@C@A@CAA@ABABGDC@A@C@C@AACAA@A@A@@B@@AB@DA@@D@B@B@BBDBB@B@@AB@@A@ABA@A@A@@@A@@B@@AB@B@@ABA@CBA@C@@BA@@@@@EACACA@@@@AAACAACAC@A@@@E@C@C@@@ABC@ADA@EDABABA@ABC@@@CACCCE@G@@@A@AA@@EBC@@@@@CAAAAACAA@@@@A@@A@@A@A@A@@@CAA@A@@@@A@@AC@@AA@@A@@@C@E@CAG@A@E@AAC@@@@@@A@@@@@@@@C@ABA@A@@BC@A@ABABAB@@C@A@A@@BA@@@A@@@ACCACAAAC@A@AAA@A@AA@@AA@@BAFEFEBABA@@@C@A@@@ABA@@BA@@@@@A@@A@@@A@A@AAC@AA@@AAA@@A@@A@@@A@@@@@EF@@@@A@A@A@@BAB@@@BA@A@@@A@@A@@AAA@AA@@AAAC@@@@AAA@A@@@@A@ABAB@@CBC@ADABA@@@A@AAA@@BA@@@A@@@E@C@A@@AA@@AA@AA@A@@@CAA@C@A@ABA@A@A@G@G@@@K@@@A@MA@@C@A@A@A@@AAAA@@@A@A@ABADCDEDA@A@@@C@A@@AAAA@AA@A@@@A@@AA@@E@EBE@@BADC@A@@@A@CACAA@A@@BCDCFABABAB@BCBCBCBEBGB@@@@ABABAD@@AB@DA@ABC@C@A@EDC@AB@@A@@AA@@AA@A@A@AB@@A@CBCBCDAFDDADEFADCHGF@@@@ABEDA@A@A@A@@AAA@AA@@BC@EFEFC@GAC@A@C@AAC@A@A@CAA@CAA@ABA@A@A@@@AACAA@@A@A@CAE@A@A@@@AA@A@A@ABA@@@A@@ACAAAAA@AA@@AA@@A@E@A@A@A@@BA@@@@BCBABA@A@AAEACAAAA@A@A@A@@BAB@@@@A@A@A@@@A@@@AAA@A@@@@@A@@@A@@A@@A@@A@@@@@A@@@A@A@@@@@@@A@AB@@@@@@AA@@@@A@@ABC@@@A@AA@AAA@@A@A@@@A@@@@@@@@@AB@@@@@@@BA@A@@@@@@@@A@@A@@@A@@@AAAA@AA@@ACA@@@@@AA@@@@@AAA@@BA@G@IAG@@@@@A@@@A@@B@@ADCB@BA@AA@@@@@@A@@@@@@@@AAECEC@@EEEE@B@@A@@@@@A@@@@@@@AB@@@@@@@@A@AA@@@@@A@@@AA@@@@AA@@@@C@@@@@@@AB@BA@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@A@AAAAA@A@@@@AA@@@@@A@@AA@@@@@@@@@@@@A@@@@@A@@@@@A@@B@@@@@@@B@@A@@@@B@@@@@@@@@B@BA@@B@@@@@@@@@@@@A@A@A@@@@@@BA@@@@@@@AB@@@@@@@B@@@B@@@BBBAB@@@B@@@@@@@@@@A@@@@@@@@@@@ADAD@B@B@B@@ABA@@BAB@B@B@B@B@B@@@@ABAB@DA@A@@BA@C@@@EAAAAAA@A@@B@BABA@@BA@C@A@C@EAC@C@IAIA@AC@A@A@@BCDABCB@BAB@B@B@@@BB@BB@@@B@@@B@@@BA@@@@@A@A@@@A@@@EBEB@@EBEF@@AD@BABCFA@ABA@CA@@AA@CACAAACCIAA@@AAA@A@A@A@ABABCBEBA@@@AB@@@BBD@@@F@@@BADAB@BABBBBB@BADAD@@@BAFBF@BBBBBDBDDFDFDFDBB@B@BB@BDBBBBDD@@B@B@BABADABAB@B@@@B@@@B@@@@B@@@B@@@@AB@BBB@@@BBBDD@@BB@@AD@B@BABA@AA@@AA@BA@@@@BA@@B@BBBBBBBDDHDDDBBB@@@B@BABAD@DABADA@@B@@@HA@@BA@@B@B@@B@@FDB@B@BBBBDBDB@@@@@@B@JCHEDAD@DBFHBD@@@BBDBF@FAB@BA@ABAB@B@@BBBBBB@B@B@BCDADA@ABCAABA@A@ABADAD@BBB@B@B@D@@ADCBCB@BCDCBC@CBC@A@AB@BAB@@CJA@BB@@@BBBBBBB@@@AD@@@B@B@@@@B@@@DBB@D@B@B@B@B@@A@A@C@A@@@@@C@@@@@AB@@AB@@@BAB@@A@A@@@A@@@CBA@ABC@@@EDCD@@A@@@AD@@@@@@@@AB@@@@@@@@A@@B@@EFABCD@@A@AF@B@B@FBD@@@T@@FPJPB@@BF@HB@BBBD@BB@@B@@AB@DAB@@@B@B@FDDFBFA@@@ADAB@@AB@B@B@B@B@@@BBB@B@@A@@@@BA@@@A@@AC@@@A@A@@@@@A@@@@AA@@@A@@@@@@@@@@@@B@BBF@@@B@@B@@BB@BB@@B@@BBADBD@BBB@B@BB@BB@D@B@B@BBB@BB@DB@BBB@BBBB@@@B@@@B@@AB@@@@BB@BBD@F@B@@@@A@@@A@@@@B@@@B@B@B@D@B@@@BB@@B@@@@@BAFBDDDFJLJDHHLB@B@B@B@BADAB@F@D@@@D@DDBB@B@D@B@BFBDB@BBB@BAB@BCD@B@BBDBBDDBDB@BBBB@B@D@B@D@BBB@DBBBDDDDDD@DBBBFBB@BD@@@BDBBBB@BBB@@@BBFBBBB@DBD@D@B@B@B@HABAB@D@@@B@BAB@B@BBDBB@B@B@BAD@B@@AB@DG@A@@B@@AAA@A@A@@@@@@@@@AB@@@BADA@@BBBBDDBB@BAB@B@@A@@@ABB@@BDBBBB@BB@@@BABAD@@@BBB@@B@B@FBDBB@B@@AB@@@B@@BBB@B@@ABA@@BA@@B@@BB@@B@B@BBB@BBBB@@ABAB@BCDABCDAB@FBB@BDBJ@DBB@@@JDBJ@B@B@@@DA@@BBBBDBBBB@BBB@@@@@AD@BABAB@@A@@@@AAAA@@@A@@@A@@B@@AB@@@BABABA@@B@DAFBD@D@B@B@BCB@@@@ACA@@A@A@AA@AACBA@ABCBA@@BADAB@B@B@@BB@BBB@D@B@DABAFCBAB@B@B@B@D@D@D@B@FBDBDDBBBBB@B@DBD@B@BBB@DBBDDDBBBB@BBDBBBBB@BBDBFBDBFDDF@BD@@AB@DBHBFDFDF@F@LBFBHBJ@JD@@B@BDFFDBBBDBBBBD@BBBB@BBBBBBBF@HAFADEF@D@HBFDF@BDFB@HDBFDJBF@F@JAFBFDDDDHBL@BBFBDBDAB@B@@A@CBC@ABA@@BA@@BBB@DBB@D@BAB@D@D@D@DBB@BDB@@@@@@@B@@@B@@@BBB@B@@@B@B@B@D@D@@@B@@@DBB@@@D@DDFB@BBB@BB@@B@@B@@BB@@@@@@@@@@@BA@@B@@ABABA@A@@@AB@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@B@B@B@@@@@@@@@@B@@BBAB@B@@B@@@@B@@B@@B@@@@@@@@BB@@@@@@@@@@BB@@B@BBDBFBLBHB@@BADA@@@@@A@@B@@A@@@@@@@@AA@@@@@A@@@@BA@@B@@@B@@@B@@@@@@ABA@C@EAA@A@A@@BE@@@@BCB@@AB@@@BBB@BAB@BABABCBA@ABCBA@@@@@AB@B@@@DA@@@@BB@@B@@@B@@@F@@@@@@@BAD@@@@@@@@@B@@@DCDC@@B@@@@@BA@@BA@@@@@@@@@@@AB@@@@A@@@@B@@@@@B@@@@@@@BA@@BBB@@@@@@@B@@@B@@A@@"],"encodeOffsets":[[123727,29647]]}},{"type":"Feature","id":"331023","properties":{"name":"天台县","cp":[121.031227,29.141126],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AAGAAA@@A@@AB@@CBCBA@@@AB@@@BBHDBB@@@@DAB@@ABA@A@A@E@AAAACCACCSKCCCAAA@A@A@@BABA@@@AGCAA@CAAAE@A@C@C@CDEBEBG@C@@@A@@A@A@C@C@GBA@A@A@@A@AAC@CAC@AAAA@AACEAA@@@@@ABCFKLKB@@A@A@C@@BA@@BADAB@BA@@@@AA@AAAAA@AA@EA@@AAAAA@@AAA@A@@@@B@@ADABADADAB@@@PAL@D@LALAD@D@D@JDH@H@FAB@D@@@@ABA@@BE@ABAB@@@BAD@B@B@@@@@@A@CAE@E@A@@BCBEDEBCBCDADCFEBAFCBCBA@@@AAA@ABA@ABABA@@@@DB@BB@@AB@BA@A@A@A@@B@B@BB@@BBBBB@B@@A@@@@AA@ACAGCAA@A@@@C@KBO@G@C@C@CAA@AA@CE@@@ABCBCCEAE@@BCBCB@AA@AAAEMAE@A@@@@A@CAEAA@AACA@AAAEGACCG@AA@AAKGCA@@ACCCAA@@@ABA@AB@@A@@@A@@@ACIAA@ACCCC@@EC@A@@AA@CAC@C@CAC@CAACCAC@@ACC@A@E@C@A@A@@@@BAB@@@B@@@BABA@A@A@C@A@@@CBCBCDCFEFCDA@@BC@CBGBCBE@@@C@A@A@A@ACAAAA@@AG@@A@@@A@@@@FADADABCDA@CBA@C@@@A@@@CCCACAA@@@GAA@C@EBA@@BA@@BBB@B@DA@@BABADABABA@A@GBODEDIBABCBABABABABA@C@CA@@A@ECCCECCCAAAAGKCE@A@AAGAC@AAA@AA@@@CAKEMGAAE@AAA@CCEAEACAA@A@@@A@A@CB@@KJABEBABADAB@@A@A@AAA@@@A@G@A@AAC@A@A@IDC@A@C@G@E@C@C@@@@BA@ADABABA@A@A@AACCACCAAE@@@@ABCFCBCDABC@GAEAA@A@AACCAACCAA@ACEACAECCAC@AAAA@A@AAE@ECC@GCC@C@A@EAE@CAE@A@A@A@AAAACAAAICCAECCCACCAACACACAECCECAAEAGCCACAA@CCCACAEAAAAA@CAEAGCEECCA@ACBE@A@EC@@@BA@@@A@@@@@@@A@AA@@AB@@@@@@A@@@@@A@@@@@@B@@A@@B@@@@@@@@@@AB@@AB@@@@A@@@CDCD@@A@@@@@@@@@C@AB@@@@@@E@@@A@@@A@@@AA@@@@CB@@A@A@@B@@@@ABAD@BABADABABA@ABA@AA@@A@@BA@AD@@@@AF@@@B@BBB@F@DAB@B@@@@A@@@A@@@A@@@AB@@@@@B@@@@BB@@@@@@@@@BA@@@@B@@@@CBAB@@GAKAEACAAAA@@@AA@@@@@@@@@@AA@@@@@@@@@AA@@@@A@@A@@@@ABAAA@@@A@@@@@@@@A@A@A@@@@@@@AA@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@A@@B@@@BABAB@BA@@@AB@@@@@@@@@@A@@AA@@@@AA@@AAA@AEACCC@@@A@CA@@A@@@C@C@A@A@A@@@A@A@AA@@A@@@A@@@@@@@A@BB@BAB@@B@@@BB@@B@@@B@DBB@D@@BB@BB@B@D@BAB@BABA@AD@BA@@@@AAB@@@@AD@@@BB@F@DBDBCH@D@B@H@B@B@@CF@B@@A@@A@@CCAA@@ABA@@@@@@B@BBF@BBBDHBB@@AB@@@@AB@@E@A@@BA@AB@B@@AH@DA@@B@@A@ABCAA@@@A@@AAA@A@CAI@CAAAA@@A@ABCBABGJABAB@B@HCH@@@B@@BB@@B@DAB@@@DB@BBB@B@@@@@BC@IFCDA@@B@@@BB@JFFFDB@BB@@BAB@DBBDF@BBB@H@BABADADABA@EDABABAD@BABBB@B@BB@HJBBB@@@DBL@B@@BHJBBDDDD@@@BBB@DFLBB@@@@B@@@BAHE@AB@DAB@B@D@B@@@D@B@DBBBB@@BBB@BB@@F@B@B@@@@A@G@C@@@AB@@A@@BEJ@B@@ABA@CBCBA@A@A@@@AAACAAA@@@A@AB@@AFAB@B@BABEFCD@B@@@B@@BFBBBB@@B@D@B@@@BBFLBB@@DDBBBBFFB@@BFBHBBBDBBDDBJHDBDDBBBBBF@BBBBDDB@@BBLDFDLHDB@B@@@@@BGHAB@@@B@@BB@@B@BBBB@@@B@F@@@B@@BBHFBB@@B@@B@@@BA@GDCDPDHBPFFBDBDBF@F@B@@@FAFADAB@F@F@DBD@FBDBDDDB@BB@HJDFJHDDDBBBB@DB@@BAF@BA@@B@@ADEBCDC@A@@B@BAB@B@B@@BBBB@B@BAB@FEDCB@@@D@B@D@B@DBB@D@FA@@BBB@BB@@CP@FAD@@@@ABEFABAD@@AB@D@D@B@@@DBDB@BBBBDBJBBBB@@BB@@B@B@DAH@FBF@F@D@BBBBB@BDBDDFBBBD@B@@@B@BA@ADABCDABA@@BCBA@ABAB@D@NAF@FAB@BA@@BEDAFADABA@@B@D@@B@@DJ@FBFBFFFBB@B@B@D@B@B@@DBB@B@F@B@D@DBB@H@H@FBF@FBB@B@BBBBB@FFDFBBBBB@F@F@B@JCF@@@@@BA@@@A@A@A@E@A@@@ABAB@@@B@DADBD@LBH@@@DBFDDBBBBBBBBF@BB@BDB@BBB@H@V@FAB@D@HAHADAB@J@F@D@D@@A@@@@@C@@@@AC@ACC@AAA@@BC@A@@@AB@B@NAJAD@D@D@BBB@@BBBBF@F@F@BBD@BABCH@B@B@F@B@DBBBDBBBBB@BBDBD@B@D@D@B@DAFAHCB@FEHA@@@@B@BBD@@BB@BBDFBDBB@BB@@@@@@@BA@ABCBA@A@@AG@A@E@CB@@@BABAD@F@DABBB@B@@BDF@@BBBBBB@@BAB@BADA@@DEB@B@BAD@DA"],"encodeOffsets":[[124103,30026]]}},{"type":"Feature","id":"331082","properties":{"name":"临海市","cp":[121.131229,28.845441],"childNum":22},"geometry":{"type":"MultiPolygon","coordinates":[["@@@A@@@@AAA@A@@@AB@B@@BBBBB@B@@A@A"],["@@@@BBD@D@D@@@@A@@@CAAAAC@A@CB@@@B@D"],["@@B@@@BA@@@@@@@A@@@A@@A@A@A@@B@@@@A@@@@@@B@@B@@@BB"],["@@A@@@@BBB@@B@@@B@@@B@@A@A@@A@@AA@AB"],["@@BBB@B@B@@A@@@@@@AA@AAAA@@@AB@@@@@B@B"],["@@@@@@@@@@@BB@@A@@@@@@@@@AA@@B@@"],["@@@@@@@A@@@@A@@AA@@B@@@@@@BBB@"],["@@@BB@@A@@@A@@A@@@@@A@@@@@A@@BB@@@B@"],["@@@@@BB@@@BBBB@@D@@@B@@BBB@@B@BBB@B@@A@@@A@@A@@AA@B@@A@@AAA@A@@@A@@@A@A@@AA@@@CAAB"],["@@@BB@@BBB@B@@B@@@B@@@B@@BFBBBBAB@@BB@BAB@@A@@A@@@A@@@@@AAA@A@@@A@A@@A@@AA@AA@A@@@AA@@AAA@@@AB"],["@@@A@C@A@A@AAAA@AA@AAA@@A@@@@B@@@B@@A@A@AB@@@BDBB@BB@B@@@B@BAB@@B@@B@B@BB@B@B@BBB@@BA@BB@BB@B@@A@@@A@@B@D@B@@@B@@A@AC@CAC@AAAA"],["@@A@@@BBB@@B@@A@@@AB@@BBB@BBB@B@@@BAB@@B@@B@B@@B@@@B@BB@B@@@B@@BA@@B@B@@BBBB@@BB@B@BA@C@CBAB@D@BBDD@BBBADADBB@@BDB@BABA@AB@B@@BBB@DB@D@@ABC@@BC@CB@BBBFDF@D@@BB@@BBBBBB@BAB@B@B@B@@CAAB@D@B@DA@AACCAAA@ABAD@F@DA@AAACAE@IBA@@C@A@AAA@C@@DA@AAAEAAA@ABABA@EMGEACAGEGCCAGB"],["@@@B@BB@H@D@@D@BE@C@AB@BB@@B@BA@CAA@ABDDDBB@@D@BBB@@BA@AB@@B@B@BB@D@@@DBB@@AAABA@@BAB@B@DBD@J@F@BBDBB@B@BDB@DDF@B@AD@BD@B@DDBB@BBBBBDADABBH@BAF@FBBABA@AAAE@E@C@CAAAABC@A@@ACA@@@@@ANAB@@AEACAA@EDC@AAOCCAAA@@@AAAA@@A@AA@AACA@@AACBA@AAAACC@ABA@@D@B@DC@A@A@A@@DA@A@@@CC@A@AA@AAAABA@AA@A@A@@E@A@@BC@A@A@@B@B@BBBBBA@@BC@C@C@AAC@C@A@@B@@BBB@@BBBB@BB@@@BA@A@A@"],["@@@B@@@@@@B@@@@@B@@BB@B@D@@@BA@@CACAA@A@@BA@@@"],["@@@@@B@@@@BB@@BA@@B@@@B@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@B@@@@@@AA@@@@@@@A@@@@A@B@@@@@@@B@@@@@@@@@@A@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@A@@A@"],["@@B@BB@@@@@BA@@B@@@BA@AA@BA@@@@BB@B@@@@@@@@B@@@@A@@@AAA@AB@@A@A@@B@@@BB@B@BB@@@BB@B@B@B@B@@B@@@B@@@@B@@@@A@@@@@@@AB@@@B@B@D@@@@@B@@@B@BBB@@BB@@BB@F@B@@@B@B@@@@BB@D@BA@@@ACA@@@AB@@AA@A@C@@@AAAAA@A@@A@@BA@@@A@AA@@AC@C@@BA@@BAA@@AA@A@@AAA@A@@@AA@A@@A@AA@@A@@B@@AB@@@B@@"],["@@B@@@@AAAC@A@AB@B@BB@@@@B@@B@@@B@@@@A@@B@@@@A"],["@@FA@AB@B@D@RAFA@@B@BAFCBA@@@AB@B@@A@@@CAG@A@@@@B@@@B@B@DBDDD@B@@@D@B@@ABABAB@@@DAHAF@HAJAB@BA@@@@BBBBBFDBDD@@DBD@DBB@B@B@B@DABA@@@@@A@C@C@CAC@ACEBA@@@@B@@@@@@A@@@@@@B@@@@A@@@@@AB@@@B@@@@@@@B@@BB@B@@@B@@@@ABA@@@@BAB@@@BAB@@@@@@@B@@@@A@@B@@A@@BA@@@@@AA@@@@A@@@@@A@@@@@A@@AA@A@@@@@@@@BA@@@@@A@@B@@@@@@@@A@@@@@A@ABA@@@AB@@ABA@@B@@AD@@@BAB@B@@A@@H@D@L@D@BAB@@@BDB@B@BAB@@@DD@@B@B@FCBABE@EBA@A@CD@DC@CAA@C@E@ADABAB@BCDAFABCDABAB@BBF@HBBBBBBBBBBBBBB@@B@D@B@BABADA@@B@BBBBBBDD@BB@@@@@@B@B@BB@@B@BBB@@@B@@@@@@@@@B@@D@B@B@@@@@@@@@B@@@@@@@@@B@@@@@B@@@B@BAB@@BB@B@B@B@@BB@@@@B@@@@@B@@@@@B@@@@@B@@@B@B@D@@@@@@AB@@@@@BA@@B@@@B@B@B@BAB@@@BB@@BBB@@BB@@@B@@A@@@@@@@@@A@@@@@A@@@@@@@@@@@@@@@A@AB@@@B@@A@@B@@@@@B@@@@@B@@@@A@@@@B@@@@@@@DABAD@BA@@@AB@@A@A@@BA@@@A@@@@@@@@A@@@AA@@@@A@@@@@A@@@@@A@AA@@A@@A@@@AB@@@@@@@B@@A@@@@@@B@@A@@@@@@B@@@@@@@@@@@@B@@@B@@@@@@@BB@@@@@@@@@@@@@@A@@@@@@@@@@BG@AFCFAFAF@@@BA@@AA@A@@AAB@@A@@@A@CBEBEDEDCDCBADA@ABABABAD@D@B@@@B@B@B@@AB@B@@@BB@@@B@@B@BA@@B@@A@@@@@A@AAA@A@C@E@C@@BA@C@AB@@@@A@@@@@EBCBC@@@AB@@AB@@A@AA@@AA@@A@@AA@A@@@@@@B@@@@@B@@@B@@@BAB@@@BABCDC@@@AB@@@@@DAF@FADAD@@@B@@@@@B@@@@AB@@@@@@@@@@A@@@@@@AA@@AA@@@A@@@A@@@AB@BC@@@A@AB@@AD@BABA@@BC@@@C@EBAACACAEA@@@A@@@@A@@@A@@@@@@@@@@DAFADADAF@F@DB@@B@B@@BB@@@@@B@@A@@@@@@B@@A@@@@B@@@BA@@BA@B@@ABBD@@@BB@F@B@L@HBHAF@D@HAJAF@B@BDB@@BBABAB@DDB@DDB@@@B@DABAFGDA@@F@FB@@@BB@@BB@BABAB@BABABABABC@ACCBAB@B@HDHF@@B@B@BA@@@AA@@@@AD@@@@A@CB@@@BD@@F@B@@@BD@@B@@@B@@@DB@@B@@@@A@@@@B@B@BABA@@@@AA@@@@BCB@DA@@B@BB@@D@@@B@@@B@BA@BB@@@DABA@@@@FB@B@@BDFBBB@@@D@@FBBBB@B@@FB@HBBB@@@@@B@@@@B@@@@DBB@@@BDBDBPHDDFDDJnGJCJQL_J[DS@WCQGOG]C]Ci@MCWGUKSWMkQKsI@KFIFGHGP@@@BA@A@@@A@@D@@@@HDDBDB@@@@AB@B@@@@@@@@@@B@@@@@@@@@@B@B@@@@C@@@@@@@A@@@EA@@BE@@A@AD@@CAA@@@CFEJCHADAD@@A@@@@B@@@B@@ADABA@@@@@A@@@@@@@A@@@CD@@@@@@A@AD@@@BAD@@@@@@ABADCB@ACCA@@@@@@@EB@@EBA@@@@@GD@AA@@@A@@@ABA@@@@@CDA@A@AAAAAACACAA@AACBC@CBABC@EBCBAD@D@B@BBB@B@@@B@@@@ADAB@@@@ABA@@@A@A@@@A@@@@@AB@@@@@B@@@@@@@@@B@@@B@@@BA@CD@@@@@@A@AA@AA@CAC@AAA@A@A@A@@B@@@BA@@B@@@B@B@BA@ABA@@B@FAD@BA@@BA@AAAAA@CAA@AAA@C@A@C@ABAAA@@@AAA@A@A@AB@@ABABA@ABGBCDCD@BAB@D@@@BA@ABC@CBCBCDABA@A@@@A@G@@ACA@@@@A@A@A@A@@@@@AAA@@A@@@@@@@@@AB@BA@@@@@A@@@@AA@@@C@A@@@A@@@@@@B@@@@A@A@A@@@A@AA@@A@A@@@@@A@AB@@@@@@@B@@@B@@@@@B@@@B@@@B@@@@AB@@A@@@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@AB@@@@AAC@A@@A@@AA@@@A@@@@@A@@@A@@@ABA@@@@AA@@@A@@BA@ABA@@@@BAB@@@@@@@@A@@BA@@@@@A@GCA@EAA@A@@AAA@@@@A@@@A@@A@@AAAAAAA@CAAA@@BADIBC@ADCDAB@BA@C@IAGAG@EAG@ACC@@@E@CBC@@C@CAG@OAEAEAAAACAEAC@CAA@ACC@BA@@@@B@DABCDA@ABA@ABED@@A@ABCBABABA@A@A@AAA@@ACBC@AB@BAFAF@D@FBB@BABA@A@CBA@ADA@A@@@A@AAC@CA@@@AAAAAA@A@A@ECC@@AGE@@A@AAA@C@EAA@CACCA@AA@@AB@BABIDABEBA@C@A@@@ABADAF@FADAD@B@BABA@A@EBGBA@ADCDABC@CBAACAACCAAAAA@@A@@@A@AB@B@D@D@B@@@@ABA@A@@BA@@AA@@@AAA@CA@@A@AAE@KCGAGA@@EAA@A@@AA@@A@A@A@AAA@@AACAAAACA@@@A@CBC@A@CACAEAA@@@A@A@A@C@A@CAAAB@AEAA@AACAAAAA@@A@AA@ABA@@BABABCBA@@@C@A@ECIEGCGE@@AAIGA@@@C@@A@@C@CD@@CBCBAACACA@@AECEACC@AAC@A@A@CACAAACAA@@@ABABCDA@CBAAAAEC@CAE@A@@A@C@A@A@@BA@A@A@A@AA@B@@@@@BABAB@@ABA@A@CAA@AAAA@@A@A@ADAB@@@B@BBB@D@B@@AB@BA@A@@BAB@BAB@B@@A@ABA@AAABAAA@A@@@AA@@@AA@@A@@A@@@A@C@CA@@E@CBABEDADGD@@CB@BA@C@ABA@@@@BADABABC@ADA@CBCBABABABCBC@C@ABABA@EBC@CBA@CFABCDADA@AFAFABA@ABA@@@C@CACAA@CBCBAB@@@BA@A@@BA@A@ACA@C@C@ABA@A@ABCDCL@@AB@BCB@D@DBBFDHDBB@BDBDF@@BBBBB@DB@BABCBEDGDCFAD@F@D@D@@AB@FADEHAFAJ@HBBFJDHDLAFAFENAFCFCDGDAFBF@H@@@F@D@DAB@B@D@B@BAB@@@B@@@@A@A@@AA@ABABAB@@@@CD@@AB@@@@@@@@@@@B@BBB@@@@B@@@B@@@B@@BBB@BB@@@ADEH@@ABA@A@ABAB@@AB@@AACBA@A@A@A@C@C@A@ABABABADEFABAB@@@@BBDBBBBB@B@DAD@DAB@@AD@BA@@@A@C@A@AB@@AB@@@BCDAF@F@B@@CDCBA@@BAB@BA@@@G@GBA@GBEBA@A@@B@BAD@BABAD@DAB@@@D@@ABADAB@@ABCD@@C@ABEFAB@DBB@BAFFDB@F@DA@BDBFDDFBHBF@DBBBBFBDBDBDDB@DBDBHDFBBBFDDDBFBDBDBDDBBDDDFDDBJDBBDBBBBBB@B@B@F@DBF@FBB@D@D@HDD@FDF@BBB@B@BB@BBDDDBFBDDF@BBBDDBBDDBBB@B@FBHBD@BADCDADEBA@@@@BFDBBDDDBBB@B@B@BABABCB@@A@@D@D@F@H@D@B@D@JCB@B@D@BBB@H@B@@@B@BBB@B@@@BABCBAFABALI@@DAB@B@@@B@B@DBFBFBDDB@BBF@BBNHLFDB@@B@@BBB@BBDBH@B@BDFHLBBBBDDFDDDFDB@@@DBD@B@BABABABADABAJAFCPCHAB@B@BABABCBA@AB@@C@AAA@AB@@AB@FAD@B@HB@@B@DBDBDD@@B@@@D@B@DAB@DCBABCBC@E@@B@@@B@@@BH@@BBBBBDB@B@B@D@@@F@DAHADAD@@AB@DCFEDEDCDADA@@B@D@B@B@B@BA@A@@@A@@BA@A@@B@B@D@F@B@D@"],["@@@BB@DB@@B@@A@@AAA@@@A@A@"],["@@A@ABAB@@BB@@B@F@@@DB@@BA@@ECCA@@"],["@@@@B@@@AA@A@@A@AB@@B@@BB@@@"],["@@@AFAB@@@DBBBBADCD@BBDJBBA@A@@D@BBBB@B@B@@B@B@BABCBA@@BB@BBLAJAFCDE@@AAA@C@A@CCA@@A@ABBD@DABABA@A@@B@BBB@B@BAB@@@@BB@B@BAB@B@@DD@@BBBDBDDB@BBBBBD@BB@B@B@BDB@BAB@@ABAACAAA@CACACCAA@CAA@A@A@A@@BAAAAAAAA@BA@@@AA@AA@A@AC@C@AAA@A@A@AD@@AAC@A@@B@BBDABA@A@AF@BC@EBEDC@A@AA@ACCAA@@C@@@AA@@C@A@IC@@A@ABIJ@B@BBBFDB@B@@@@@@BB@D@F@B@@AAAEAC@A@A@A@AA@@"]],"encodeOffsets":[[[124716,29490]],[[124698,29479]],[[124787,29411]],[[124785,29380]],[[124757,29347]],[[124720,29337]],[[124717,29331]],[[124715,29328]],[[124770,29531]],[[124727,29442]],[[124749,29455]],[[124762,29462]],[[124774,29424]],[[124787,29390]],[[124820,29358]],[[124846,29397]],[[124850,29392]],[[124114,29721]],[[124678,29407]],[[124654,29401]],[[124683,29383]],[[124672,29380]]]}}],"UTF8Encoding":true});}));