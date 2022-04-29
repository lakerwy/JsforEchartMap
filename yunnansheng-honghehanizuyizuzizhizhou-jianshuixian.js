(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('建水县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532524","properties":{"name":"建水县","cp":[102.820493,23.618387],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@DABE@CBAFBDDBLNJJDD@DABABCB@BBBDDDBDBB@@D@@BDBDRHPHBBFBDBFBHD@BDHBB@DABAD@BDBFHBHBJDJDJDDBBDBB@@DBD@F@HBDBDBBDBDDBBDDFBDDDBFBBBD@DAB@B@BDBHBBBDFBD@BB@@BB@AB@F@BAD@DA@AB@BABAA@@A@AB@@A@E@CBA@A@CDABA@A@CBGBC@CACAEACCECCACCA@A@E@CBC@AAA@@A@@@CBA@A@@@AA@@BA@ADA@A@A@E@A@CAAAAAE@A@E@C@E@AA@AA@ADE@ADE@AAC@@@C@A@CAAAA@AAAACAAAAAAACAA@C@@@E@@@C@@@A@C@A@AA@@AAA@C@C@C@A@ABE@A@CBABE@CBAAC@A@C@A@A@CBABEBAB@BA@AAA@A@AB@D@BABAF@B@@CBEDABABBBBB@BAB@@ABA@CBA@ABA@A@C@A@A@ABAD@@ABA@A@AAA@@@C@ADA@ABA@CBA@@@AB@@@B@DAB@@@@@@AB@BAB@@ADAB@B@DBBBB@DADA@ABAAA@AAA@C@A@A@ABC@A@A@@AA@A@C@AAC@A@AA@AA@A@A@AAA@AAA@A@@@A@AAA@AAAA@@@@AB@@A@@BA@E@@BC@AB@BABC@@@A@AAE@@BC@A@CBA@AB@BA@@BCB@@A@@@ABABC@AB@@ABA@ABABCEGG@CAAACAABEBC@CAC@GCCEGCAACCAAEEAAA@A@ABA@AA@@C@ABA@ABC@AAC@AAAAAAAC@A@AAAA@A@@AAACACAAE@CCA@C@AACC@ADABC@A@AACBE@G@A@@A@@ACACACAC@G@EAGAGEGEEECEIGGAACAC@C@AC@C@EBCDCBC@E@E@AAAACAC@CAAA@EE@@AA@@@ABABADAD@@AFABCBADGDCDEBCB@FEFEFIBGBE@EAEC@AACCACCCAC@AAC@ABC@ABA@E@CAG@G@ABCF@F@B@BA@ADAD@DAB@B@@E@CDCDAFADADA@@@AA@C@CAACAAAC@ADE@C@ICECCECCAC@AA@AAEBCBA@A@CBC@A@CAIBABCBADA@ACAAA@CAACCACBCDEDCDCFCF@D@DBD@HBF@BADABAD@DAHCBC@GAI@E@IAIAAEACACACAAACACACC@E@C@CDCDCFCFADCBA@CBEBEBGBC@ABIBC@C@E@EAC@G@CD@B@DADABC@ABA@CC@A@ACAA@C@A@CBC@A@CAEAACAAECEAEAC@E@ABE@@@C@EACAAEAM@SCO@GBKFABS@E@EA@E@A@CECMCKEICGEGGEIBIBGBCACGCCCGAICEICKBIBKBE@C@CA@AAEAC@E@G@EDGBCBADCFEBGFG@E@AAE@ECEAEEC@CAEACCCCKCC@@@AB@@ABA@@A@@A@@@@A@@BA@@AA@@@@@A@@AAA@@@A@A@AAAA@AA@@AAAA@@A@@@@BA@A@@AC@@A@@BABA@@@@@AA@@BAAA@@@ABA@@@@@A@@@@A@A@@@AA@@@@D@@A@@@@AA@@@C@AB@@@@A@@A@@@A@@@@AA@@AB@@@@@@A@@A@@@A@@A@@@@@A@@@@@ABB@AB@@@@A@@C@@@@@@A@@BA@@AAAA@@AA@AB@@A@A@@AA@CB@BA@ABAA@CA@A@@@AB@@@BA@ABA@@AAABA@AABA@C@A@ACC@@@ABCB@BABA@@C@@@@@@ADAB@@AA@AAAA@BA@A@A@B@@@@A@@@A@@AAABA@@A@A@@BABA@@BC@@@AABA@AA@@@AB@A@@A@@@@@AB@@A@AC@AA@@@@BA@@@@@AA@AA@AA@A@A@CA@A@A@AD@@A@@CC@C@A@CA@@A@@@A@A@@BC@@@AAA@A@ABA@ABA@A@@@@@AAA@AB@BA@AA@@C@AAA@@@A@A@@AA@A@C@@@AC@@@@ABC@AAAAAAA@A@A@@AAABA@@AAAAA@A@A@A@A@AA@CA@A@@A@ACECA@AAAAAAAAAB@@AAA@@@@AAAA@@A@C@@A@A@AA@AAA@@CA@AA@C@A@CCAACCAAE@@@@AAAAA@@@E@A@A@AA@@@A@@@A@AE@@@@@A@@AAAA@@C@@A@@BA@A@@A@@AA@AB@@CC@@A@A@@@AC@AA@@@AA@ABA@A@A@ACBCDCF@@A@A@A@C@C@@@ABBDBBB@BDDF@D@BDDBD@B@DAB@BMLABAB@DADA@ABABADA@C@CDCD@BAB@B@BBBBBBBBDABABABEBC@CBA@C@A@A@A@ABCDEBABA@AAA@@DA@@DABABA@EBA@CBA@ABEDCBABA@C@AACAA@C@A@@@AB@BABA@ABC@A@EBCBCBC@CDA@A@@@ADA@ABCBA@C@A@A@C@E@C@A@GBA@A@ABA@C@A@ECAAA@@AA@@AA@CAC@AAA@C@AAA@AAAAAACC@@@CA@CCECCAA@ABA@@BAB@B@B@@ABC@ABABA@@@A@A@CBAB@@@@AAA@@@@@E@C@A@ABABAB@DABEDCB@BA@A@A@AE@ACC@AAAA@C@A@AB@DABCB@B@B@BBB@B@BABCDCB@@AAA@A@ABA@C@A@@@A@A@C@AAEBCBCDA@ABC@@@A@AAACCAA@C@C@ABABCBA@ABABAB@BA@@B@DDB@@FNHRDF@BBD@DBBBD@D@FCFCDADADABAF@BBDDBBBDDFBDD@DCBCBADCDCFADCD@FCFAFAFCFADDLBDBBD@@D@DCDKFGDCDGD@BEBC@EBAB@D@D@FBBDD@BBFBB@FCLBFDDDDBBD@FDBBDDD@FBF@FBF@HBDDAFC@GDEBGDEBS^GD@BEDCDCFAHBBFBDBBBFBFBAHABADCBABCBCBABADADCDABBB@DBB@@@@@@@@B@@@@@@@B@@@@@@@@@@@@B@@@@@@B@@@@@B@@@@B@@BDBB@BAB@BBDBF@F@DDDDBFBDBD@BBDBBBBD@D@DDDBDDBBDFD@DBDDDDBDBDBDBBDDBBDDBBBDBBBBDBFBHBDFBHBBBBB@D@B@FBDBBD@F@B@D@BBBBBB@D@DADBBBDF@FBB@B@RL@DBB@F@FBFBB@FBD@BBBD@HBHBFBBFBH@FAFAFAFEBGBODE@CBC@EBA@IBABEBCDEDIDCB@@CDEBEBCBABEBADABCDBFBD@FBFBHBFBD@D@D@B@BDHDDBFADAHCDCD@@ADC@CACDEB@J@FCBCBCD@BABA@AB@B@BBBBDDDBBBBBB@@AB@BA@DDFADAD@DAF@D@D@F@DBH@FBF@H@DBB@D@D@D@FDBFBFDFAH@BBD@D@D@D@FCF@D@HBD@BAHBBHB@DCD@DAD@DBDBFAFCBAFAFAFBHDDAHAD@B@FBDBBB@H@D@D@BBDB@D@D@B@@FBFFBBDDDBDDFD@@BB@DBB@FAF@DABC@UGG@I@ABAFALAFBFDFHFBD@DCH@@BBDD@@BDBDADAD@BCBC@AB@D@BDH@BBDDDDDBDDDHDBBDBJNFHDBFDHBD@FCDBDADBBBBHABAFBFBDDBFBB@@BDDBB@BBDA@AD@BA@@BHFJJBDIAADBHFLBBBDFBB@B@BAB@BADBHBF@DBD@B@FCFCJAB@D@@D@DABJFFBHAJADFDBFBHDFFD@FDHFDFDFBBB@@@B@LAFAFACCCCCE@E@CACBEAEDAH@FADEBCBABC@ECC@AFC@IBI@@@@BA@@BA@A@ABABABA@ABAB@BAB@BA@@B@@@B@@BB@BBB@BBLBH@PFBBB@ABADCFCD@DABAF@FHFHDF@L@LCHAD@BBB@@BB@@@@B@@@@@B@@A@@@AB@@@@@B@@BB@@@@@@BB@BB@@@@BB@@B@B@@@@@B@@@@@B@@@@@@BB@@@BB@@@BB@@B@@@@@B@@@@B@@@B@@@B@@@@@B@@@B@@@B@B@B@B@B@B@@@@@BB@BBB@@@B@@BB@@BB@BBBB@@B@@BB@@@B@B@D@DBB@@@B@@B@@BB@B@@@B@BB@@BB@@BB@@@B@@B@@B@@@@@@B@@@B@@B@@@@@@@@BB@@@B@@@@@@@B@@@@BB@@@@@@@B@@@@@@@B@@BB@@@B@@BB@B@@@B@@@B@B@@@@@@@@@B@@@B@@@@BB@@@@@BB@@@@BBHBLFF@DAHKLK@@@AB@DCFADAHAF@B@FC@@DABABABCBADABAB@@@B@BABCBCDADABB@AFBD@F@JAB@FS@@AC@CH@JDFDDD@B@@BFBDB@DDB@BBD@DAF@BBB@@@ADA@ABCBA@C@C@AA_H"],["@@@@AAAAAACACEGEC@AAECAAETD@DFBH@B`G"]],"encodeOffsets":[[[105511,24618]],[[105527,24614]]]}}],"UTF8Encoding":true});}));