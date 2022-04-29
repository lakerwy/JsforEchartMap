(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广元市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510802","properties":{"name":"利州区","cp":[105.845307,32.433756],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@F@@@FB@@@@ADABCBCF@BABBDBA@@@@@AB@B@DA@AB@D@BB@BCD@BB@BAB@@@@D@BD@DADBHAD@BAD@B@@@AAA@A@@@@@@ABABA@@ACB@A@@A@@DA@ABCB@@@BABA@@AA@A@AB@@@FC@@B@@@CD@BB@B@B@B@@B@@@@DB@@B@@CB@JBB@DA@@DBBB@DBB@@DAB@@@B@@BBB@@BA@@B@B@@@@@AAB@@@B@@A@A@AB@@D@@BB@@B@@AA@@@BA@AA@@A@@@@@@BA@@@@BBB@BGBAB@@C@BB@@@@A@@BA@@B@@@@@B@@A@@@@B@DA@@DBFABA@A@@@ABCBC@ABABAB@@@DAF@BAB@BA@@BA@AA@@AA@A@A@ABCBCBE@A@@@A@@@@C@A@C@A@AAC@AA@A@A@@AA@@@BA@@BA@ABA@@BA@AA@AAA@IB@@A@CAEC@@A@@@@@A@@BA@ABC@A@A@C@A@@@@@AA@@@@@A@A@CBC@A@A@A@@BA@@@A@AA@@@@A@@AAAAAAAA@AAA@AAAAAECEEA@@ACCAEA@@AA@AB@@ABADCB@@CBEBCBCBEDABC@CBC@A@A@A@AAEA@AABABA@ABC@A@A@AACAA@C@CAA@A@@AAA@ABABABCFADAB@BC@ABA@C@AAC@ABEAECG@AAA@ABC@ABADAHAJC@@DAB@B@BAFBF@DABABA@A@C@AEGEIEEA@AA@AB@DCDADGFEBABAHCFAHADAFCFEJ@F@J@DBBAB@BA@A@AAC@A@AB@@AAACCGECCCAECACCCAAAACCGAA@I@A@AA@@ACCI@CA@@@A@EAEAC@ECCCOCA@CFA@A@C@@@AAAAEACAECECCAAAC@C@C@C@ABEFCDADIHCF@B@@AB@BGJIHC@OB@@ABCFAH@BABCBCBCBA@AB@B@BA@AH@BABGDCDABA@@@A@A@AAC@A@@@A@CDAB@BAB@@AAECA@@@DD@@@B@@BF@B@B@@@B@D@BAD@@E@A@@FA@A@A@CBGBEDAACCAACCACA@CBA@A@BAB@BAB@@AB@@AB@B@BAB@@AB@AAA@C@@A@@@@BC@GEBID@C@EDC@AI@AAAAAA@@ABKBC@QBAA@@A@@EBKAA@A@E@CAA@C@GBE@C@G@CAAAC@AEGACCCKKAAA@WEE@ICA@@A@ABABAACAC@CA@CCAAECODC@EEIDKBABK@EBIAC@CBIBGBEBCDC@CFGFCDEFINCBAD@BBBBB@DA@@BB@@BA@@@ABABCDA@@@A@EBC@@@A@A@@A@@@@AAA@EBADAB@@@B@@@BA@CBEBA@@C@AAAA@ACAAAAEAC@A@@@@B@BCFCBAB@D@D@B@BB@BBBBBF@@D@@BBB@@@D@@@B@B@BC@C@ABA@CD@@A@A@A@AAA@@@A@BBABBD@@@@@BABBD@@@BADAB@@C@@AAACAA@A@@@A@@AABCAAAA@@@A@@AEA@@A@@BAB@@B@B@@B@@BB@@ABAB@@CAA@CD@B@@A@@B@@A@CB@@CAUG@BABAD@B@@C@AD@BBBADBBAB@B@BA@@@@DAB@B@D@@@@ECCAEG@A@@@CA@@AA@A@C@A@@@@@A@@@A@A@ADAD@B@D@@@BAB@@@@@@@B@@@B@B@@@B@@BB@B@@AB@@@@A@@B@@@@@@@@B@@@BB@@@@@@A@A@@@@B@B@@CB@AA@A@CAA@A@A@@BA@CBA@@@A@@@BA@@A@@@A@C@@AEABA@A@C@A@CBABCBCDCBABABACAC@E@KDC@MBE@A@A@C@@@@@@@@A@AAA@C@CB@DC@@BA@A@C@AC@@@@A@@B@@@@ABA@EBABA@AB@@@@A@@BAB@@C@ABGCG@AAC@A@A@@C@@AE@A@@@CB@@AAA@A@@@ABCFBBA@@@@@CAAA@@@@A@CB@@AAAAA@@@A@@@A@AAA@@@A@AACA@AA@@CCAECABC@AAAC@@A@A@@A@A@@MCECA@CAEAECAAC@CACAC@AA@AC@M@C@A@A@C@A@C@@AA@ABCFEDOAQAQAIBEFAB@D@DBF@B@BKBCBENCFCBW@C@ABAD@BCDCBABE@CDCB@B@H@@DBDDDHDJ@L@FCBGF@BCB@@C@CDCDCHA@IDC@CCEBC@KGECC@CACCI@CB@FGDG@AAGEIKGIGGGGECGBKBMFBFAF@FAHAFEHADCD@DADAFCBCBMA@LLFLDBBAF@B@DBDCN@D@F@F@F@HBDBD@B@BFB@@ABB@@@D@BA@CDE@@FCD@BBBDAF@DADAD@B@@@BBAB@@@@@B@@@B@B@BB@@D@BB@@@@@B@@@@@B@@@@@@@@@@BAB@@@B@@@@@@@B@@B@@@B@@@B@@@BB@@@@@A@@BA@@B@@@@@@@@B@BBB@@@@@@@@AB@@@B@@@@@@@B@@@@B@B@@@@@@@BB@@@@@@@@B@A@@B@@@@ABAB@@A@@BB@@@@@@@@@@@@@BAB@@@@@BB@@@@@BB@@A@@@@BA@@@@B@@@B@@A@@@@@A@@@@@AB@@@@@@@@@@BB@@@AD@BA@@@@@@B@@@B@@@@B@@@@@@@B@@AB@BB@@B@@@@@@@@B@@@@@@A@@@@BA@@@@@@@A@@@AA@@@@@B@@@BA@@@@BA@@@A@@@AA@@A@@@A@@@@B@@@@@B@@@BB@@@@@@@@BA@@@@B@B@@@B@@@B@@@@@@B@@@B@@B@@@@@B@@@@AB@@@@@B@@@@B@@@@@@@BAB@@@@@@@B@BABCB@BAB@BBBDBDFBBB@@@B@FAJCD@BADBB@B@DADCLG@DBBB@B@BCDCBAF@B@FAD@DAB@BFBDBBDDBDD@B@BAH@D@F@DADABADABA@BBBABAF@DBB@BBD@B@FDDBDBBDAD@H@JBDDBBDFDFBBDFAJ@H@BBBF@D@FBF@DBBBDFFBD@D@DBB@@@ABAL@HBHCAEAGCGAI@C@KC@AACAACAC@GBCBABI@EBABE@ABADA@ABA@C@A@CBA@CD@DAD@BCB@B@DED@BEDA@CFBB@BA@@@AD@BAB@BCDABGACBEDCBCDABADADADCF@H@H@F@DBFFFFDFDDDDBRGFBHBBDFBH@H@BEDOJ@NCP@@DBD@BB@DA@ADABAF@BBB@@@B@BAB@DBBBB@@BBB@BB@@B@@A@CDA@@@CCC@@@EF@B@BA@AB@@@BB@@@@B@@AB@@@BB@@@AB@B@BB@@B@@@BDB@@@@BA@@@@@@BBA@@B@@@@BB@@@F@B@@AFBD@B@D@BHBHADCNOF@DB@@B@BAD@B@FA@@LDBBFAF@@@B@B@B@B@@@BBFBBD@@ADBBBB@BBD@B@D@D@BDHDJDDDDBDBBBBDDFDDDBB@B@BBB@@DBB@BBBDBBBBBB@BF@@BB@BBB@FDBB@BBB@DBDHEDEPM@EB@F@BBD@DBB@B@DCFCDE@A@CBA@EBE@AACBA@@B@DBB@FADAFKB@BA@@@CCAEGGK@C@CBG@CBCBABADAB@B@B@BABC@A@@BG@CBC@A@ABABEBEFI@ABA@C@@DG@I@C@AFCLE@C@ACA@AFCBE@MAEAAACACGK@AAECAAA@CDE@@DCDAJE@@@A@@EBAA@@@A@@CAA@@AAA@A@@FCBA@A@@@AB@BAD@B@HFFBDBBB@@B@@ADA@A@ABADC@@BA@@@AACBAD@F@B@@@@AA@@@@A@ABAB@BCF@DAD@B@B@B@@@D@FBB@B@BC@C@AAIBAFAB@DBBADCB@@DD@B@ABBB@@F@@@BB@BFBDBDB@@DF@BD@@BBBBFD@@BBBBBD@@@@DDDDD@BBD@@BBHBJFB@DABB@B@BBBB@BBH@B@BBBBFDBB@@B@BABCD@BAHD@@BCBA@AB@BC@@BDA@BFB@DA@AFBFBF@DBB@BD@BCH@@BB@B@@B@BDDB@@BADDB@@@AA@AB@B@@B@@B@B@B@BBD@AA@@@A@@BB@@BA@@BB@BDBBBBDBB@B@@AB@BB@@BBBFBB@DABA@@B@DBB@@@@@BA@@HBB@B@@@B@@AB@@@@B@@B@@@@@AA@@@@B@B@BAB@@@DA@AAAAA@@@A@AAA@@AADBDB@BB@@BD@@@@@@CAABA@@B@@@B@@BF@DBB@BA@@@A@A@@@AAA@@B@@@D@@@B@BB@B@D@@@BB@B@BAD@BA@@BB@@@BAB@F@F@BBD@@AB@BAB@B@@BB@BB@DB@@B@B@B@D@@@@A@A@E@@B@B@BBB@D@B@@ABABA@AB@DCB@@@@BB@@BBB@@@A@A@@@@A@@A@@D@B@@@B@@@@@@B@@@@A@A@@@DB@@@ABA@@B@B@@@B@DB@BF@@BB@@@B@@@BB@@@@BA@C@@@CBA@A@@@@B@@D@B@@@BB@B@@BB@@@@@B@BAB@@@BA@@B@@@@@@A@@@@@@@AAA@CBAB@@@@AB@@@BC@@B@@BB@BBB@@@F@@AB@@A@@@@DA@@@A@C@C@@BAB@@A@A@@GAAA@AD@@A@@AAEAA@@@@A@@AA@@AA@AAABAFBDEDADAB@D@D@DB@@@B@@@@B@@@B@B@FB@@B@DABAF@B@@BF@BB@@B@@A@AF@RBD@H@J@B@BADAH@B@B@@BDDDBBAB@HAF@DBB@ADB@DDBBB@@AB@L@FD@@@BBBJ@H@D@FB@@A@@A@A@A@@BCBEDA@ABABABA"],"encodeOffsets":[[108629,33287]]}},{"type":"Feature","id":"510812","properties":{"name":"朝天区","cp":[105.882642,32.651336],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@ABA@A@A@CACA@CAAAAAAA@AEAAACA@B@@@B@@@B@B@@@F@@BB@@DBB@DBBDFDBD@@"],["@@AA@@AC@ACCCC@C@@C@AAAA@AC@AEAA@AC@@ACE@@CACAEA@AAA@@E@@@AABAA@C@@CA@CDABCAA@EBABBJ@B@DADA@A@EAC@@@A@A@A@C@CBE@ADA@AB@B@B@@B@@B@@A@E@C@ABBD@B@@AB@@CDAB@B@BCB@BA@@@AACAEAGEA@C@ABA@@B@@@BABED@@@BBB@BB@DB@@@B@@BBFA@@@B@@IFCBCD@@CF@DBBDBBF@BHLBDBDBBBF@NAFED@BDB@B@DKFED@B@D@JCH@@@DAB@BEJAFAFAB@B@BAD@DAH@@@BADABA@A@A@CBABABAD@DAH@D@DHLFHDB@D@@ABA@ELCBEBA@CAA@@@ABBD@BAF@FAB@D@BCFEDCDA@A@CAC@AAE@A@@FONCFGFCHAF@B@D@H@DAFADAFCFHJDBF@JADBDDDJDDHFD@HAJFHHD@B@L@D@B@BFDHDDDBDFBFD@F@HADBFDDHNNDBLFJAXIFJFHLJFBFCDCF@B@HFD@B@F@@@B@DADGHQDEDADDHDFBLFFBDBDDDHFHFFDBF@D@DABABAB@@DAFAHAH@HEHBDHLHF@D@BCDADAD@D@BBDBDBPBBH@@@D@B@DADCFCJABB@@BADABAD@DBBBDDBDBHB@FAFFB@BBH@FBDBBBBBDAHBD@DBBBB@FDB@B@HCBADCD@DAB@@@DBDAHAB@D@D@FADAFEBAD@B@B@LHF@B@HDLHBBFBBBBDFHBBDDDBBBF@B@DABAJGFCB@D@B@DCHG@AFE@A@AFCLBB@BBD@BB@@DAB@D@BB@DBD@H@@FFDBFBBB@DBD@H@FAF@@@BB@B@DARKB@@@BB@D@DBBFBD@AB@DAD@BB@B@B@B@@ABCBCBADCACCC@@@ADC@ABCB@BAFED@FKDCHCBCJEB@@A@ACA@A@AB@FBB@DALBD@DB@@B@DCD@D@@A@@AEAG@@BAFG@CACACAABABCBA@CAC@CCCA@CBC@A@A@ECCIAACAM@GAA@CA@A@CAAAE@GAE@ABAL@DBB@D@@A@E@CAG@@@AJGBADABABADE@@DBB@BAB@DCBCBA@CBABAF@HAHADCDCDQBABAFAHALDLBB@@@@@@@F@DABAN@DABC@A@ABEDEBCDCDBJBHDJBDADEBG@CAABCHAHCB@FBHBH@L@HCD@D@BB@DBBD@BAB@BCHCB@NAF@F@HDHBDEB@BAF@JBHBBA@ABCDCBADABA@EBGDEDCFCHAB@F@HDF@FBH@BC@A@@@AAAAAGACA@CAA@ABA@CBABCB@DAB@DA@A@CAAAEAA@@@A@ADCB@BABABCBA@EBEBCBEBA@A@A@@AAAAA@C@E@EAEACAE@A@CAC@CAA@ABC@A@C@C@GAGAC@@@@A@A@C@A@AB@BAD@FAFAB@BA@@BA@A@A@A@AA@@ACACCEACCAAAA@A@A@CBA@ABA@AB@BAB@DAB@@AB@AA@AAAAAAAA@@A@ABABC@A@A@C@A@GBAAE@E@@AA@@AA@@C@C@AAECCC@ACEAEAAA@CAA@E@AAEAA@AA@A@GAG@C@A@C@AA@A@CCCAAAACA@@AEAAAAACEAE@@AAA@A@O@A@GAAAA@IDEDA@@B@@@FBB@@ABA@C@GDA@CBAB@BCJAD@@A@@@A@@ECK@CCE@AAA@AAA@A@@@AAAEG@AAA@A@@AA@@@AA@AEABEBCA@@CBA@@@@@@BA@@@@@A@@@AB@@@B@@A@@A@DA@ABAHA@AA@@@@AB@@@@@@@BB@@BAB@@B@@BA@@@AA@@@CA@@B@B@BA@@@A@BB@@@@A@A@@@AB@@AA@AA@@@A@CB@@AA@CAACA@@CBA@IAA@@DA@@@CA@@@@@AA@A@A@A@@ADC@@A@@@ED@@A@@B@BBB@@ABAB@@A@AD@BCB@@@BB@A@BD@@ABAB@B@@@@B@B@BB@@A@C@ABC@GBCACBC@@A@C@@A@ABA@@ADC@AAAC@A@@BCBA@A@@B@@@@ABACBA@ADEDABABC@@@@EA@@E@ABABAB@BCBAFAD@@@B@B@BB@@@EAC@G@I@AA@A@@ECK@A@@BA@AACCA@BCA@CAE@GBA@ABCACC@AA@A@G@CBABA@I@G@C@QAE@@B@BA@@@AAE@@AA@E@ABCBA@@@EAA@A@@@A@@@@@@A@@CAC@C@A@CBCBCFEAABBB@BBB@@BB@@@B@@B@FBBB@@@BC@@BBBHB@@@B@BA@AB@@@D@D@B@@CB@@@@@BA@@BE@@@A@AAA@@AA@@@AD@@A@@B@@A@AB@DBB@B@@@@@@@B@@@@A@@@AB@@A@ABA@@@@@A@@AA@A@@A@@@A@CA@@@@@@BAB@D@@@DAB@@@@AA@@A@@@A@@AE@@ACAA@@@A@A@@@AB@B@@CA@@B@B@@@@@@A@@@@A@@@A@C@@@@BB@@@@@@B@B@@AA@AA@@A@@A@CDA@@BABAB@BA@C@A@AAA@A@@@@F@B@B@@C@A@A@A@@@CAA@@AAA@@@ABA@ABA@@AC@A@E@EBA@A@@AA@@ABC@ABA@A@@A@@@C@AAAA@@@C@@@A@@@BB@B@@@B@B@@ABA@CAE@@AA@@@A@@@ABBB@D@@@@C@@AA@@ACACABB@@BB@B@B@@BBBB@BCB@@A@ABA@A@@@@@BB@@@@A@@@@A@@A@@BA@@@A@A@GA@@AB@@@@A@CAA@@@ABCBA@EAAA@AA@@ABA@@@AAAACAACA@AAA@@AB@@AA@@@B@@BBC@AAA@A@A@@@@AA@A@@BBB@@A@CCAB@@CAACA@@@@AAA@@DG@AACA@CAE@EAEA@BCBA@AEB@AC@@ADA@@BABAD@@GCABC@ADABA@@@AAECAAAAA@G@AAA@AA@A@AAACBA@IEGA"]],"encodeOffsets":[[[108634,33560]],[[108328,33289]]]}},{"type":"Feature","id":"510823","properties":{"name":"剑阁县","cp":[105.524766,32.287722],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@A@@@@@@@@@A@@@@A@@@@B@@@@@@A@@@@B@@@@B@@@@@@@@@@@@@B@@@@@@@@@"],["@@BCB@DAFCBABA@CAA@@AACBE@C@CAA@AAC@CAA@AA@C@A@C@AAAAA@A@@BABABABIAAAA@CACAA@C@CAA@A@AA@A@CBA@A@@@CCAA@@A@A@@DCBADAB@BBB@B@FADCL@@AB@B@D@@@BBB@B@DCBA@CBC@EAC@A@AAGACAACAA@C@E@CAA@AAAE@GBCBGBE@CACAGEAAE@CBA@@BA@AB@@CBC@A@@@ACA@C@CBCBAB@D@DAB@B@BA@@BA@A@C@@@@@AAA@A@@BAB@BCD@BA@@@A@CB@AA@@E@A@@A@C@ABA@@B@B@B@@A@@@AACE@AA@E@A@CBA@ABA@@A@ABADABABA@@@C@A@A@A@A@@@AAAA@CAA@@A@A@AA@@AA@A@ABABA@A@A@@AB@BC@@@ABA@A@ABA@ABA@@BCAAA@CBCBEBA@AAAAAAAAA@A@AAA@AABA@@@A@AAAA@C@A@A@@A@ADC@AAAAC@@@@ACC@CAE@AAA@CAA@@ACBA@CBABAB@B@BE@A@CB@DABC@A@C@E@ABABC@C@@@AB@B@BBB@@@BABA@C@G@C@CAAAC@ABABAD@BBBDD@@@FAD@FABABA@AAA@A@CD@@@@A@ABIDCBAB@BA@@@@E@@B@B@@A@@AAAACBA@@BBD@B@BAB@DAD@B@D@DBD@F@D@@@F@BADADAHADBDBDHP@FAFADCDA@GDA@EBC@C@C@E@@@EBA@A@CAACAGCAA@C@@BABABABADGBEDGBA@ABA@ABEDCBEBE@@@AB@D@D@DBDDBDDBFBD@HBD@DB@DBFBDB@B@B@B@DAFAD@DADBD@D@DABABCBABCBADADABC@EBABAD@DADABABCDGDCD@@@DBDBB@DADAD@DAD@BC@A@@@@AA@IEA@CAAACCCA@@CCCAECCAAAAACAA@C@ABC@EBG@C@AAAACACAC@ABABADCBABE@A@A@@DABBBBBB@DBBDBBBB@D@BB@DBD@D@DAB@BBBBBDBBDBB@B@BB@@BB@BBBBBB@BB@BAD@DCD@D@B@BB@DBFBFBF@HBFBHBDABABAB@B@B@@BBD@B@BBD@F@@AF@DAF@BADAFAF@D@@CBA@C@CBEBEDCF@B@BBDBBBD@@@BCBC@ABABAHA@CBC@AAAAA@C@EACBA@@@ABAF@@A@A@CAEGAA@@@ABCACCK@A@AA@ABA@AB@D@DABCBKHKLAHBD@@DBDBF@BB@B@B@F@F@J@BADEJCDABADA@EDC@CBABCBA@E@GBEBA@ABAAA@CCEAE@C@CDAD@B@DBFBF@F@B@DBBBBBBBBBDBBBFBH@DAD@D@FBD@BDDB@DBDBBBBBADCB@@ABADC@C@ABABA@C@ABABA@@J@BABABABA@@B@BB@@B@@A@@@A@@@A@A@A@A@ABABA@CAA@G@CA@CC@A@ADAD@@@D@BBDBDDDDHBDDDDDBB@D@DBBD@DBBD@@@B@B@HBB@@D@D@B@B@@B@B@BA@@B@B@@DB@@ABA@CAABA@ABABA@A@A@ABCBCDAD@B@DAB@BABCBADABBD@B@BDDBB@F@BAB@BA@@B@B@@@BBB@BIJEFEFED@DB@@BA@A@@@@@@@@B@@@@B@B@BA@@B@B@@@BBB@@A@@@@@@@@@AD@@@B@@@B@B@@@BAB@@@B@B@B@@AB@@ABAB@@@@@@@@BBB@@@@@@@B@@@@A@@@A@@B@@B@@B@B@@@@A@@@@@@@@BB@@@B@BB@@BAB@B@B@@AB@@@@BBB@@BB@@@@B@@@B@@@@@@@A@A@@@@D@@@@@B@@B@@@@@@@A@@@@@@B@@@@@@@@AB@AA@@@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@A@A@@B@@@@@B@@@@@@@B@@B@@@B@@A@@@B@@@@@@B@B@@@@@B@@@@@B@@@@@@@@B@@@@D@D@@A@@BA@AAA@@@@@A@A@@@A@CD@BB@@B@BB@@@AB@@@@@@@B@@@@@@B@@@@B@@@@B@@@@@@@B@@B@@@@@@@@@@B@@A@BBA@@BB@BB@B@BB@@B@B@@@D@@@B@BABB@@@B@@@BA@@@A@A@A@ABC@@B@@@B@@@@A@ABA@@@@@@@@BB@@@B@@@@@@@BB@@@@B@B@@D@B@B@FB@AB@@@@BB@@@@@@@@@@A@@@A@@@ABA@ABAB@@ABA@A@A@@BA@ABA@A@ABABA@ABAB@@CB@@A@@BA@A@A@A@@@A@@@@BA@A@AAA@@BA@@DA@@BA@@BBBBBBBBBBBDBB@BCDABABBBABBBDD@B@@BBADB@DB@@AD@BA@A@@B@@AB@F@BB@DDB@B@BA@@B@@@@B@BB@@B@@@B@@@@AJBF@D@D@BADCBC@A@EACA@@A@@BAB@@AC@@@@@D@F@@@@BB@B@B@BAH@D@BGHBBDF@HDBD@@@B@BB@B@B@HAD@DAD@F@DAB@D@BBB@BDBHFBBJFHFHFBBNJLJDD@D@BC@ABA@CBC@GBCBCFABA@A@@@C@E@A@ABA@AB@B@@@BBB@@DBD@HBDBF@H@B@BBBBAB@D@B@@DDFD@@FFDBBBDDDBDDDDFD@BFBFFFDBB@@PFJFRLJF\\THDRPFJNFHBBAFIFCNED@LHJFDDDN@F@J@LETAHABIJIHABAFBHFDDHDDLJJLFDJHRJJHDBFFHLJJDFDDLHFFJJDDDFLNDFDBBDDDDFFDBDBFHF@G@ADADCF@BADADC@ABCBAD@X@DADEFMDALA@A@AAE@C@CBAFEJARBRBPBFCDEBA@@AA@AAE@@AAAAAAC@CAAAAC@OAAACMGAC@A@CBCF@HBFFFDFDRJDBB@DCDAHCJAH@BABABCBSBC@MBE@CAACAMBC@CA@ABCDE@MBGBEDAJ@LBLBB@D@FCDIBADAFALAD@BCAEAGCEAC@C@CBABB@@@B@@B@@@@@BB@@B@@B@@B@@B@@@BB@@@@@B@@@@@@@BB@@@BB@@B@@@@B@@B@@@@BB@@@@BB@@@@B@BAB@@@B@B@@@B@B@BA@@B@@@BA@ABE@A@@BA@@@A@@@A@@BAB@@@BA@ABC@CBA@@BABABA@@BAB@@ABA@ABA@A@@BA@@BAB@BA@AB@BADADABA@@@@B@@@F@B@BB@@B@@@@BB@@BB@BBB@BBBBB@B@B@B@B@@@FABAD@B@@A@CBCBABCFEBABC@E@E@ACECCKICAC@G@GAC@A@CCAA@A@ABADADAF@REHANCHCHADADABABAFGBA@A@AAEACCCECCAG@G@K@E@CAAAAA@CBCDCDCHAJADADABA@C@AACAAACCAGCICIAEACACCAC@C@C@CDADCF@F@FBHDD@D@BADA@C@CAAAAACCAAAGCECCEAE@EAEBE@ADEFCBE@A@CAEA@AAEAOBCACAAAEBEDEBA@ECGKEGAEAABA@ABAHKHOAAAACECC@ABAJBH@H@FCDCDALKJGBIDEHC@GBIDM@KAICCGFCDE@CAAABCCCCCDEDCDCFELAFCBCBCBEDADCHAF@FABABABCB@@CCKBCF@NDJF@D@DBDFBFDFDHBDDLJDBF@H@DBADCDAF@DBDDFDFHDB@DCDGBADCD@F@DBDDDDBF@F@FAFCFADADBB@DDBD@DADADCBCBCBC@G@GBC@ADEFCHGFCDC@CDCBABA@C@ECCCACECE@AA@@AC@KGEABEACCCAE@C@ABEACEAEC@CEEACACAABAFEBABC@A@CACCCA@ICCCCE@ABAFGBCDEAECAEAGCKAICCBCBEHCA@@ACAECIBG@ABIBKBI@IDEBAFGLIBCBAJEBIEEQCCC@C@@BIBK@CECK@G@KGIEGCCAECABC@CAEA@A@A@A@C@@@ABA@CB@C@C@C@@@AAACAC@C@E@A@ABC@@BABCDEBA@ABC@C@AACA@CACAAA@@@@AC@ABC@ABCBA@AACAAAA@CAA@ABABADA@ADA@A@A@CACACAA@AA@A@ABABC@E@AAA@@A@A@ABADABA@A@AAAAAAA@@@A@A@@CC@BA@AB@@A@A@E@A@AC@@A@E@A@@A@A@AAA@@A@ACAC@A@C@A@A@AAAACAA@A@AAA@AAAAAAA@A@A@C@CAA@A@CAA@@@A@AB@DADAF@BADADABEBC@CBC@C@A@C@A@A@CAAAA@@A@@@@B@D@BAD@BADABAB@BA@A@A@AA@AA@AA@BA@@@CFAB@D@F@B@B@@A@A@CAGAAAABA@A@AA@A@@BA@AAAAAC@A@C@A@CAA@A@C@@BA@AB@D@F@DABADABABCBA@AA@A@A@A@AAA@@AA@AAAC@EAC@CACCA@AAA@ACAA@A"]],"encodeOffsets":[[[108028,32310]],[[108167,32356]]]}},{"type":"Feature","id":"510821","properties":{"name":"旺苍县","cp":[106.289983,32.229058],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@CA@AACAC@AA@A@C@A@ABA@EDABEBCBCBC@A@G@KCA@@DCH@B@F@@BB@@@D@D@DEDEFCBE@GB@@@@@@C@AC@@@AABA@ABABCAA@CAEBC@GEIGGEGASCG@AAK@KD@FAFAF@FEJAHCHCBA@GBE@EACBBFBDBHGHAD@JADEBE@GACCKIGGEAAE@AC@@@AHC@C@CAEECCECCDABCDA@ABCB@BA@A@@B@@@B@BBD@B@DAB@D@B@@BDBB@BBB@@AB@BAB@BBB@B@@BDB@@BB@B@@BB@@DBBBB@@BB@B@D@BADAB@DBB@BBF@DBD@BABA@@@ABA@AA@@AAA@@AA@A@CA@BCBA@EFEDABA@C@@@G@A@EBIBA@C@A@C@ABC@EBA@ABC@I@E@GBA@S@I@SBA@ABAB@@@B@B@FBHBDB@LBF@B@DBBBB@@DBB@B@B@BABAF@BBDBD@@BBDAB@FADFJTBB@@@B@@@B@B@B@BBBBBDBDBDBFB@@FBDDB@BB@B@@BB@BAB@@@B@@@BBBBBB@BBFBBBDFDBBBDBD@DBFBB@B@D@@@B@BA@@BCBG@@D@HHBDFBHBFBDBBBBBBB@@@BBD@DBB@B@B@B@BBBB@PDDDFDD@FBFBB@@@B@@DDJBD@@BBB@J@B@HBDDBBBBDDBDFDDBDDHFDDBB@BA@@B@BBD@B@BABA@ABCAI@E@I@EFEDCBGBEBGDABABEFCHCBCDA@@BBBB@FFFJFH@B@D@BABABCBE@EAABA@A@CB@@IDGBCBAB@BAD@BBB@BDHBFAF@BBD@B@DAB@BADA@CBEBADABAB@BBB@BB@B@DBD@B@DBBBB@B@D@BAB@BABA@BFBBBB@B@B@D@DAD@BAFCDADAFADA@@DABCBA@@BAB@@BB@BFDD@BB@FFFDBBBB@BBB@BBBBBBBBB@@@B@@B@@B@B@@AB@@@B@B@BAD@D@B@B@@@@BB@@@@B@D@B@B@D@BAB@@AB@@@@@B@@@FDDBB@@@JAB@BBB@@BAB@@AB@BAB@@AB@@B@@BB@B@B@@BBD@B@B@D@B@D@@B@@@B@F@DADABAB@B@B@@BB@@BAB@@ABA@ABE@CB@@A@ABAB@BADAD@B@@@BBFB@@B@@BB@@@BBB@BFHBB@B@@@BBB@BBB@BDF@DDL@FB@@@B@@@BCDI@ABADAB@HCD@B@BA@@AA@E@@@AB@FCJCB@BBHBB@P@B@B@BB@@BFDFBBBBFB@BB@BDBBDBDDB@B@@B@D@B@DBH@H@BBBB@FBBBF@B@DBB@BBBFDF@BDDFDBBD@D@@@BB@@BB@@@FBFAB@H@B@D@B@BADAB@B@BB@BBBBBB@BBBA@@BA@CBA@ABA@@BAB@BAB@D@B@BBBBBDDFBDDDB@BB@@B@B@B@BAB@@ABA@EBEBC@ABA@@B@B@D@B@B@@D@HBHBD@D@B@D@BAB@DBD@DBB@F@DBFBFBF@D@B@BBBB@@@B@BABAFADAF@FABADABABA@CD@B@B@@BBBFBB@D@BCBA@CBA@ADAB@DAB@BBB@DDBHBBBBB@B@@@BADD@BBFFBBBBBBB@FALALCPEDAHBH@F@B@FANA@@B@BB@@BADABCBADAJEFCFCDCJKRIBCCK@CB@BADAB@BAAC@CDGLIDADCHAB@B@B@DDB@FAJAD@BAB@B@LFBDDDFDLJ@@RPDBB@@B@@@DAH@DBD@F@D@DBF@BB@B@B@BADADEDCBAFADAL@HAF@H@BAFBF@F@JA@B@@B@@DBHBFBD@BB@D@DBDBHBB@BBBBBDB@B@B@F@DBNDD@NBLB^DD@@@BBF@D@BBHBB@BDB@B@B@ABBBB@DF@@B@@B@@BB@@DBB@DBFALEF@B@DBB@NEDAJ@D@F@F@B@DAB@BBBBLFFBBG@I@G@M@E@A@EBCBC@E@E@E@E@EDIFGBEDCFABCDABCDQ@EACCECECAAABKAIBA@CDEFQ@GBE@EACEG@C@A@EDCDA@A@AACACAA@C@A@C@I@CAM@ABA@AB@DC@A@A@A@CEEACGGAC@A@A@ABCDCBAHAHEFEVIBABCDC@AAECK@ABABCDAFCDCFGBEBC@AAACAAAAEACAG@EBG@C@@@@BAD@AE@CCC@A@ABC@@A@BC@AF@F@FBBAA@B@BAB@@@AAA@BEB@@AAA@EAA@@C@@@AA@@@C@@@@B@D@@@@ACC@A@A@ABAAA@A@A@ABA@E@A@AAA@C@C@E@A@AAE@IBADCBA@CBA@CAAIICG@C@ADEBADAB@DBHBJBBBD@B@DAFCHCPIFGFG@ABABA@A@@ACAC@@@@D@@AAA@@B@@@BA@C@AFABBDBCD@@D@BBDDBBDADCB@DA@CB@DA@@BABA@@AA@@B@BB@FBDB@DBB@@BB@D@B@AA@AAAA@@CCB@@AA@E@A@A@ABCFAB@B@DAD@BADCBABEBC@@AAAAK@I@ACCCA@EAA@AABE@AAAA@AB@@A@ABEDKDCBK@EBCDC@C@A@C@AAGBAECECC@ADCD@FC@C@IAKAAAAMCCBEBCAGAAAC@ABEDCAC@@BA@A@@B@BBABB@DAB@@AF@@@@C@AAACAAA@A@EDA@AA@A@CAI@AAA@C@AACCECEACCAC@OCKAGAGBE@A@ICKAQCMAKAKAC@E@CCIAMAICGAGCEAACAG@@Ec@IACBE@A@E@EAEEK@CBCBALIBCAE@CAC@C@EDMBKBEBO@C@CMEIGCCAC@I@ACAC@I@C@AAE@AAAE@AAA@C@C@A@ABABAFADCBADCDAB@BAH@BAF@BA@ABC@A@ACCECCAGAC@ABEBKFCBA@A@A@CCCEGIECEAAA@AAA@CAC@A@C@A@CFCDE@AAAC@C@O@GBA@A@@A@A@EBAAEAEBA@ABA@A@@@E@CBA@AD@B@DA@A@A@C@IAEAGAA@A@CC@CBC@EBCAAA@@AA@G@AA@AKCECCCCACBGCEAEAAIBEDCBCBBBBF@B@BABADAB@DABCDAB@B@BB@BB@B@B@B@BAB@BC@A@AB@@AD@D@BBDBBBB@D@FA@ABABA@ABAB@BBFB@@DA@@BABABAFABAH@B@D@DBBBBBDBBBB@@D@BBB@@B@@@B@@@@ABA@A@C@A@AB@@AD@B@BAD@BAFAB@B@DBBBDFFBD@B@BCFC@ABCAMEC@A@A@@A@E@CAAC@C@@BCHCD@F@DADAFAB@DA@BBBDBBLJDD@BBBABCDC@E@CBC@CBC@ABEFCD@DADCHA@CDABAF@DADABA@AF@DCFEJA@ABEBE@E@CAEAC@CAG@CBABABA@@B@@BBB@D@BB@@BB@B@BAB@@ABABG@IAA@O@O@A@@AEIEIA@CAE@KBC@A@AA@@@ABA@CBA@@@A@ACAEAC@CAIAE@A@C@CAC@AAACACCE@A@@CAAAC@EAECKC@@ECCACCGCCAA@A@A@A@A@A@ABABADA@ABA@@ACACAA@C@EBA@"],"encodeOffsets":[[108800,32884]]}},{"type":"Feature","id":"510822","properties":{"name":"青川县","cp":[105.238842,32.575484],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAAA@A@AAC@E@GAABABA@ACCAAAAACEAA@E@@@A@@B@D@BA@ABA@E@E@C@A@C@E@A@C@C@G@I@A@EAAAAAAAACCCAIBE@C@C@AAAAACAEAGAAAIAA@CAAAA@OK@@AAA@@AAAA@CAAAC@A@@DAJ@B@@FJBHBDB@@BAD@D@@CBAA@@@BABEDIH@@@BAD@B@BCBC@AB@BAD@@@BABAB@@ABCBA@E@C@ABCBCBAB@BAB@D@DAB@B@D@B@B@B@DBBBB@BBBBD@BBD@@@D@@DBB@BBF@BAB@FAB@@@BB@B@@B@@@@@@B@B@B@@ABA@@D@@A@CBAB@BAB@@A@A@AAA@A@KA@AC@I@A@A@C@CBC@CBC@E@E@C@CAA@AA@AA@AAAAC@A@C@C@CAC@A@CAC@EAA@ABAB@@ABADABA@ADCBABABADCBABADADCBABAD@BAB@BABCDABC@A@CBC@C@EBC@C@CBE@C@C@C@C@CAA@AAC@CA@@GACCEAA@@@ADCFCBC@CBCBABCDABAB@@AB@B@DAB@B@BABABC@C@A@E@CACBC@ABCBABA@ABCBABABCBABCBA@CBAB@BABA@A@@@ADAB@B@B@B@@A@@@A@A@A@@@CDA@AB@BAB@BAB@B@B@D@B@B@D@BBB@B@B@DBB@BAD@BAB@BABCBABCBA@@BCBAB@B@BAD@B@BA@@@C@AA@B@@AD@B@BA@CA@@@@@@@BB@BBFB@@@BABC@@B@@@@BFDBBB@@@@BBA@AB@D@BABAB@BABAB@@@@@B@@@BABB@@BA@A@AB@BCBCD@BBBB@@@@BBB@B@BBB@B@D@B@B@B@@AB@@@@B@BD@B@@CD@@AB@@BDBBB@@@BBBB@@DHBB@@ADABAD@@ADABA@A@EHBHBF@B@BDF@@@B@BBBAB@BAB@BBBBDBBABCB@@ABABADABABCBA@CBC@CBC@ABCBCBCBCDCBEBCBABEBCBCDCBCBCBC@C@A@C@CBA@ABC@ABC@A@C@ABC@C@C@CBA@A@CAA@CAAAA@AAC@C@C@C@CBABC@ADA@@B@B@B@B@B@D@DAD@BAB@BAD@BADABABABA@ABADCBABADABABABADAB@BCBABC@CBC@C@C@CBCBCBABAD@B@B@@@BBBB@BBBB@BB@@B@B@B@BAB@BABABAD@B@D@@@B@D@BBB@B@DBB@BB@@DBBBB@BBBBBB@BBB@BB@@BB@B@B@B@B@BAB@B@B@D@BBB@D@BBBBBBB@BBD@BB@@DBB@BBABADABABABABAD@B@B@D@HBDBD@D@D@D@D@DAD@PDRFLHLDLCFEFGHGLOFIHCLGB@DCFEBADAJBFDFBHDFDHDJ@F@JCF@N@DBD@H@DAD@NHRFDBFDBDBBBH@DBBB@HBJA@@FCHCHEFAFABIDCBCHGBCBABCDADADAHCDCDCBCDEBCAI@E@EBCB@FEDCBCB@B@FDFAFBJ@L@D@B@D@FBBBHBFDH@F@FBBDBDDDBBDBFBFBD@HDHBFBDBNFDDJFFDF@D@D@D@FADBHFBBDBFBDAD@FBB@@@DAB@HBF@DBDBDBDD@@DBFH@BB@D@BBPCFAHCD@F@J@F@HADABADCBAHCL@DAB@DGBABC@ABCB@BAHK@C@@DCBABEBCBEBCBABAFCDADCBA@@BCBADAD@HDB@D@HBNBBBB@B@BBH@FBF@BBBBBDB@BBD@D@FBB@DBBBJBFBDBB@D@BBBBBDBDBBDAHAB@BB@D@BBHBBFBHBP@D@@B@BABAB@@@BB@JBB@FBDBDD@FBLAXDH@BDHFBF@DADAJBJBDBD@DAHCRQFCDCB@DAFBHDHBFBD@FAHAF@D@FBDBFFBFHJDBDFD@N@H@D@BDBHFBNBF@D@NHBD@FDDHL@DDFFBFHHJFDDBB@DABCBARFJDF@D@DBDBBBDBDBDBTHDBHHFHDBF@@@D@D@F@H@DAHAD@DBBBBBBBHB@B@BAB@H@H@BBBDBDDAFAJ@B@BCB@B@@@BAB@BABC@A@@@AAAA@@@A@A@A@@@ACCA@A@@@ABAD@D@B@BBD@B@BABABC@A@EAC@EBC@ABE@@B@@@BBDBF@HA@ABA@AD@B@BAD@B@B@@AB@@@B@BA@AB@B@DAD@@AB@@A@@B@BAB@BA@@D@@AD@BABAB@BCDABAB@@@@@@ADABA@@B@B@BA@ABAB@@AB@BA@GFA@ABABABAB@@@@@@BB@@B@@@@@@@B@@@@@@@@A@@@@BB@@@AB@@@B@@@B@@@B@@@@@B@@B@@@B@@@@A@@@@@C@@@@@@@@@@B@@@@ABA@@@@@@B@@BB@@@B@@@@BB@@@@@B@@A@CB@@@@@@@B@B@@@@@@@@A@@@@@A@@@A@@@@@A@@@@B@@@@BB@@@@B@@@B@@@@@@@@@@@@B@@A@@@A@@@@BB@@@D@B@@@@@B@@A@@@@B@@@@B@@BB@@@@@@A@@@AB@@@@@@@@@@@BB@@@@B@@@@@B@@@@A@@@@@@@A@A@A@@@@@@@@@AB@@@@AB@@@@A@@@@@A@@B@@@@@B@@@@B@D@@@B@@@@@@B@@@@B@AB@@@@@B@@B@@B@@@@@@@B@@B@@@@@@@@@@@@@A@@B@@@@A@@B@@@@A@@@AB@@A@@B@@@@@B@@@@A@@B@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@AB@@@@@@@@A@@@A@@@A@@@@@@B@@@@AB@@@@@B@@@@@@A@@@@@@AAB@BABBB@B@@@@BA@@F@DBDDFDBBB@FAH@FBHD@BAHJfBRDFDFHDDDDDBBJBJBL@JAJ@LBJAFAFAHEHCD@D@HCHCFEDCD@DEDCD@AEA@ECAA@WAEAKHWDGFCNKNABABEBGBABCFADAB@@G@SBCDCJUAECGAGAGBCHUDCBAD@HDDBDDDAD@BBDBD@BABA@A@CAQAE@EBCBEBCFAFAF@BCBCBCAEA@CCEAGCCEAG@E@E@IBGFGJEFAF@NDD@D@FDDBB@BC@C@EBCBADEBG@EHSB@F@FBV@JBN@BBBBDEBEBCBE@C@G@C@ABEDGAC@CAA@AAAECA@AAA@@AE@@AAAAAAAACAAA@CA@@AA@A@AAACCECCCAAAAACCCCCCICG@A@C@C@AAC@AAAAABC@@ACEAAA@@A@A@A@A@@@E@EBAAKC@@EBA@C@ABA@@@CAE@MPCDGBGA@A@C@AACBE@@@A@E@@AA@@@@@AB@AA@@@@@@AB@@@@CA@A@@@AA@@A@ABA@@A@@A@@BA@@@A@@A@@A@@BAB@@A@AFE@@D@DD@@B@DCB@@@@AA@@AAA@AA@AACAA@ABA@@@A@AAE@ABCB@BCBA@@AAC@CO@MDI@CPAFG@G@EAACGAEAQHCACCECECEEAE@C@E@G@GDEBCBCBCBADCDAFCDAHBBADC@ABA@ABC@@B@@AAADEB@FC@AFC@C@ADA@ABC@CDCB@DAB@D@B@BAB@BCBAF@BAFAJ@BADAHAD@DBBBBD@BLDD@J@HBHDFBDBAG@GBKBA@@A@CAC@C@EACEAACAE@EAC@E@AA@A@GBICEAACECEAACCIAG@C@CBAAACCC@E@AAC@AAA@CBEBAAA@AABCBABCBCBE@C@G@ABA@C@ACCCAAACAEA@CBC@EBA@E@ABCDADA@A@AA@CKHCDCBA@A@CAABC@IDEBA@@@A@AACECAAA@ABA@ADABA@A@A@@@@@@BA@A@@@@@@@A@@A@@@@@A@@B@@A@@@@@A@@@@A@@@A@@@@A@@@A@@@A@A@@@@@AB@@@@@@@@AA@@A@@@@@A@@@@@@B@@@BB@@B@@@B@@AB@@@@AB@@A@@@@@B@@B@@@B@@@@@@AB@@@@@B@@@@A@@@@@@@@@@AA@@ABA@@@A@@@@@@@A@@A@@@A@@@@@@@ABC@@B@@AA@@@@@@@@@@BA@@@@B@@@@@B@@@@A@@@A@@B@@A@@B@@@AA@@@@A@@A@@@@BA@A@@@@@@@@@@@@AA@@@BA@AB@B@@A@@@@B@A@@@@@@A@@A@@@@@@@A@A@@A@@@@@@@A@@@A@@B@@@@@@A@AAA@@@@@@@@@@AB@@AB@@@@@A@@A@@@A@@@A@@@AA@@@@@@@A@@@A@AB@@@@@@@@@@@A@@@@@A@@@@AAC@@@AAA@A@@@A@@@@@A@AB@A@@@ABCBC@CBEACAAC@ED@@CF@DABC@@@A@BA@@EA@A@AACAC@G@E@E@E@CDMAC@C@ABEAAKCKE@KNBDADABEBC@CDCBCFGBEBG@EBEAENELAHAFDHHHHHJJLHFBBH@HC@EDAJ@DDDBD@FDLHD@FADDD@JCB@DGDCDCD@@@DA@AHEDA@E@KCICGCCCA@@GEAEACECCECCACCACEKMCECCIIEEKGCCCEIIGKEECAIGQIIGECIKKICCCGECAGBEBAJGJIBABGFS@K@I@ECMCCIEKGC@MFEDEJABGAMEEIQOGC[SIEQKIEOE@@AAECEEEA@AECCCCCCACCAACAEE@@@B@@AB@@@BABCBC@@@EFA@@B@B@BDF@BED@@KAC@A@A@A@ADEFCDCDABGF@B@@BDDBBBBB@@DBDB@@DDDFFDDFDDBDBF@BCF@@@@A@@C@AA@@@A@CBA@C@@@@B@@@@BBBB@B@@ABCBA@@@A@A@ABA@AB@@CBA@@@A@EAAAAA@@A@@@@@@@AB@B@@CBC@AB@@@BB@D@@@@BBD@D@@CBA@FHDFBBDBBBFBDBFBB@B@BBBB@B@BAB@BA@AB@@ED@BABCDA@BDFHFHDDDDBD@@DDBF@DDFBBBBABBB@BCBABDLBFCBA@@@A@CAGCCAEAAA@@A@CBA@AD@@ABEDEDABCFADCD@@B@DDDDBBNLFBDB@DB@@DBBA@@B@B@BCFEJABCFABA@C@A@EAIAC@A@C@C@C@AAGAEAA@AAA@AACCAAAAAACCG@A@A@A@G@A@A@A@GAE@CAA@AAIACAA@@BGBE@@BC@CAA@CBCB@@A@A@A@A@ABEBA@C@AAAAA@A@EBA@ABC@GBKBC@G@ABAAA@A@EBC@A@A@AAAAA@@@E@A@ECGAA@C@GBCAA@"],"encodeOffsets":[[107612,33082]]}},{"type":"Feature","id":"510824","properties":{"name":"苍溪县","cp":[105.934756,31.731709],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@ADD@@@AC"],["@@H@FBB@DDBADBB@B@@ADA@@BC@@D@BABAB@B@D@BAD@@ABABBBADAD@AAAAAAEICAAA@@@C@IAA@@@@@EACAA@AA@ABCBCDE@@BBBBBBB@@@@@B@@@BBF@B@B@B@@D@F@B@B@A@@@ABAB@@@@@B@@@@@B@B@B@@AB@BA@A@@@A@@BCB@@@@@BA@A@AAA@@@AA@@BAACEBADABCBCBADCD"],["@@AA@ABC@ADABA@CBA@@DAB@DA@@@AAAC@A@CACACAAAC@A@C@ABAA@ABC@CAA@AAA@AAAA@CBABABA@AB@B@B@F@BA@ABA@CAA@A@A@@@AB@BB@BD@B@B@BC@CBC@A@AD@B@D@B@B@BA@A@E@A@A@@@@B@BHBBBBBABABC@CB@BA@@B@BB@BBB@DA@AB@B@B@BB@BBB@BA@ABA@ABCD@B@DBBBBDBDBB@@@@BAB@BA@A@C@@@AAAAAAA@AAC@ABA@ABAB@BABC@A@C@CACAA@A@C@@BA@@BABAB@B@D@B@BBB@@@BA@A@A@A@AAABCB@D@BAD@@@BA@@BCBABCBEDADADA@@BABAH@BADADA@@@GBA@I@C@CB@@BDDB@B@B@BADABEJGDAD@B@H@H@B@@@BA@ABCACCCAA@CAAAAAACCCCIAAA@C@C@CBCBCBABABA@CDA@A@CBA@A@@DAB@B@@@D@B@B@BFBDBD@BAFDDBHDJFLHH@L@FD@DALAJ@@@DDDRDFFAJIFABADKJEHABCF@JAJALAJ@BAHDJBFBD@@DBFGDADAJDLBHDFBDBBFCFADEHAB@BDFDDJDB@DDBD@D@BADABEFABBBBDBDFF@DFDFBBDAF@B@DBFDDBDAFFBLHD@@BB@@BDFDFDBDD@F@DABABCD@DCDEDGHEDCF@BAD@HD@DBJFF@B@HAFAB@@AJCFEDGFABBF@DAB@D@DD@BADA@BBDDBB@D@BABGFIJCFCJAJAD@DBDBDB@DD@@FDBBB@DADAAEBEBAD@BBDBBDFF@F@BBFBFDDDDDH@FCDC@@BADABBD@A@@@@B@BD@@B@B@@B@@A@A@@@@@AA@@@@@@@AA@C@AB@B@@@@B@BC@@@B@@@@CD@@B@BBBB@B@@A@@BB@@D@@A@AA@@A@@@@@ABBD@@@B@@A@@A@@A@BBBB@@@@BA@@@BB@@@@B@@@B@@B@@@@ABA@@@@DA@@@A@AB@DC@@FCH@B@BBB@BAD@BB@B@@BB@@@@@AB@@@B@@@B@DAB@D@F@H@H@J@FBF@BF@DBHDDD@FBF@BA@AAAEEAC@ABAF@B@FDHDD@D@BCBC@CAAEAAA@CDIFIDEHAFAJC@@J@DCBCDADCBBD@DFDDDDHBABCBA@A@AH@HA@EFEBMHE@C@E@CHADAJDDBDBBBDD@HEDCBABABAB@BABA@A@A@CBA@@@AB@B@BA@@DBBBB@B@JEDBB@BA@@BBBDADBJDDHDBB@D@D@FDBJBDDBBDDHJBDBD@D@JDDBD@JBBBB@BCBEBC@IDAB@B@@BBBBH@HBHBHDDFBF@B@@B@B@@DDFBDBBBB@F@BB@B@@B@BCBAB@B@@@@AB@@B@@B@ABA@@BABCB@@@D@D@@@BBB@@@DB@@B@B@DABAB@BB@BBAB@DDDBHD@@D@@@B@@B@@BB@@CFFBB@BBB@ADAB@@@BAB@BB@D@BBB@@DAB@B@@@BAB@@C@@@BB@BFHDB@BB@AB@@B@B@BB@@B@@A@@@@@AB@BAB@D@BBDB@B@BDBB@BB@@B@BBB@DADADAD@@@FBD@BDDDBBD@B@B@B@DBB@BADAB@DDB@FBB@BC@@B@@B@BBBB@@@B@F@@BDADGBGFI@EBEBE@ELCL@BBH@TDHBHFJHHFD@FADBB@DBBABAB@BA@B@@BDD@@@@@@@HAF@DAFEFC@C@C@C@@AA@@@E@ADG@CB@LDH@B@D@DADAFABAFCB@BAB@D@B@B@@BBDBD@BDBB@B@FAD@B@DBDB@BB@BAB@BCBABAB@B@B@B@B@B@DBHDDDDBFD@@LDFDFBD@BBDB@@@BDFBDBDBBD@DBD@B@F@JBDBD@FBDB@B@B@@AB@DAB@B@@BBB@D@LAF@DBB@FJFJ@BB@P@P@B@JBH@BABA@@BA@A@AAA@@AAC@A@AA@@@AB@BABADAH@DBD@FBDBF@F@FABAB@FIDE@CBEB@BABC@CBEBADCB@DGBC@CDCFEBAD@DAD@DAF@D@DCBAAA@ACCKIAAACAAB@@CBABEBC@C@EDCDG@AD@D@BB@D@F@BB@B@D@NFDBBAD@DE@A@AACEEACAA@C@ABABE@ABC@A@ABC@@BAB@D@B@B@BA@@@@@A@@@AA@AAC@@@AAAAACAAAA@C@C@ABGBABEBABA@AB@@CA@AE@ABABAB@BABAB@@E@CAAAAAC@A@CBC@@BAB@D@@ABA@A@A@A@AAAA@@A@ABADCBA@CBABCBA@A@AAEAAC@CB@AA@CEC@A@AAEBC@ABCBABC@A@CA@ABCHIFEFEHGFG@@DGDM@CAECAA@E@CDADABE@EACACCACEIEECA@@C@CBABAAAB@BC@ABC@A@A@ABABC@@@AD@@CB@BA@A@CAABCCA@EAG@DCBCDADABABCFA@ACA@@@A@@@@@A@@@@@@@BA@AAB@A@AAAA@EBABAFGBAD@BA@AF@DCDABAB@CAAACAAACAI@C@CAAA@A@A@ABCBABAB@D@F@B@D@B@D@BABC@A@AAAEECAICGCCEAC@A@A@ADG@EBC@CAAAEAE@AB@@A@A@C@@@C@CBADIBABA@@DCDABA@AACECEGAECC@AAA@ABCAEBEACCAA@GCC@C@@BAA@BA@AA@@CACAEACAABCDCBAD@@@B@BBBBB@D@B@D@@AB@D@BABADADBB@BABABABABABA@ABCAAAAAC@EBCB@B@FADBB@BBD@@BD@B@BABABC@CBA@EBC@AAC@AACAA@A@A@ABC@@@ABC@@@@@A@@AA@@A@@@@A@@@@A@@@A@@@A@@@A@@A@@A@A@@@@@@@A@@@@BA@@@@@@@AAA@@AAAAA@@A@@AA@@@A@@@@@A@A@@A@AA@@AA@@@@AA@@@@A@@@AAA@@AA@@@A@@@A@@@A@A@A@A@ABA@@@A@A@@AAA@@A@@@AA@AA@AA@@@@@AA@@AA@@AA@@@AEAA@@@@@ABA@@@AAAA@A@A@@BA@@BA@@AA@@A@AAA@@AAABCBADADABAB@BC@C@AAEACAE@AAA@AADABC@C@C@ABAAABA@ABC@C@AA@@A@A@AAA@A@A@AAA@A@A@A@A@@A@AAA@AC@AA@@ABA@A@@AA@@@@A@@@@@A@AAA@@@@@A@@@@@ABAB@B@@A@@@A@@B@@@BA@A@@@A@@B@@AB@@@B@@A@@@A@@B@@A@@@@@A@C@CCCA@C@A@AAAAAC@C@ABCDCBC@C@C@C@EAAAAACACCAAAAC@A@ABABABAJABEB@@CBCBA@CBCDABCJAH@D@B@DAD@@BD@BBBDBBDDD@BBH@H@BABA@ABA@C@C@A@A@C@AACAAACACACAA@AAC@A@EBC@AAEAECAAA@AAAAAA@ACA@@@BABA@A@@B@@BBBBAB@BA@EBA@GCA@CAC@@BA@@BAB@BAB@B@BALCFABAD@DDB@B@BABA@@@AAAA@@AA@@AA@A@A@@@KACCAAACA@CAC@@AEDG@AAAAAC@CABC@AACAEAC@@ACACB@D@B@BA@@BABBD@BBDBBB@@@A@@@AAACA@A@@D@BAA@@AAA@A@@BABAB@@@DC@ABA@@AC@ABCBC@ABCAA@@A@AAAA@@AAC@EACACACAAAAA@AAC@A@@@A@AEE@A@ADE@CAAA@A@C@A@A@A@A@@A@@@@@CBABC@A@AAACECAUOIGAAECEAMCAC@@@ADAHCFADABAD@BA@A@AAAAAA@CAA@C@C@A@C@C@A@E@EBEBG@A@C@C@AAACCEACC@C@C@CACACACAABA@C@AA]EA@C@ABAAEACE@EAAA@CAE@CAC@@AAABABCBEAA@AABCBABA@A@ABAAA@CA@CAAAAA@C@C@C@A@ABABABCJ@BA@ABA@ABC@CAICCCCAEAGCGAE@G@GBE@C@AAAEAC@CBABAFAFCDE@A@CAAACCCIICA@C@C@E@AAAEAI@KFEDGFCDCFCHAFCFEBC@A@CA@C@C@AC@A@AA"]],"encodeOffsets":[[[108404,32773]],[[108956,32706]],[[108419,32402]]]}},{"type":"Feature","id":"510811","properties":{"name":"昭化区","cp":[105.962819,32.323256],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@@ACA@@@@@@B@@B@@B@@@@@@BB@@@@B@B@@@@AA@"],["@@DIDEJIHEBA@A@CAACCAAB@BC@ACCC@A@CBE@AAEBCHEFID@BA@EBGBA@E@IECAC@@HADADADCDCBCBC@CA@CAABCBCDEBE@E@EAECCCCCAE@C@CDABCHCDA@GCCECEAC@CBEDCBCCAG@E@CAKICCGAECECEAAC@C@CIEMCE@ADDL@DA@ADABABEBE@GBCDCBAFADADEDKBEFCDCDCFDDDDADBBDBF@DCHEDDBJ@LCNAJ@HGDCFAJIHKLCBCDEDG@G@IAAB@BDDDFBBBBGPGLAB@BABBBBFFHHLFDB@FAFCFABBDBDBPAFBBBB@BF@D@BAFEDCF@BAFBF@FBFDFFDHDBBDBBDBBBB@D@DCBABC@C@GCEAE@E@CDCB@D@D@DBDDDDBFBJBJDHDDBBDBBBD@B@DABCBCBIBGBCDCDAD@DBBBBDBF@L@H@H@DBFDDDBDBF@B@BABEHABABCBCBGBGDMDGBQFE@CBCBAB@B@BBBDDB@D@HBH@D@DBLJDDDF@B@F@FADABEFADABAD@D@BA@C@ABEB@@A@A@A@A@A@AAAAA@AAA@@AA@@A@@A@@@AAA@E@@@A@@@@@ABCBCBABA@@BABA@AB@@AB@@@BAB@BAB@BA@AB@@ABABAB@@AB@DAD@BAB@@A@AB@@@B@@@B@@AB@@@BAF@BAB@@A@@@ABA@A@@@A@A@@@A@ABA@@@@@AA@@@@AA@@@@@AA@@@@@@AA@@A@@AA@@@@@@A@@@@@A@@A@@@AA@@@@AA@@@AA@@@@A@@@@A@@AAAB@D@DBDDFBHBFADC@KBEBCBABCJEDC@A@KAKAI@CBAFAH@NCFAD@BDBD@NADBBB@DAF@NADATADABABG@IBGDCBCDA@CAQIECECEEGAE@AD@D@BBDNHBDBB@PBDBBDBD@BBBBBB@@BF@BBB@@B@@BD@B@D@B@B@D@N@D@@BBBD@DBDBD@BBFDFBDBB@FDND@@@B@BB@B@@@BDBBD@BAFDDB@DB@@BDBBBB@@@B@BBB@@@B@@@B@BBBB@@DAB@@@@@BBDB@@@@B@AADEBA@@B@B@BB@@DA@@B@F@@BD@@@@B@BBD@BDHAH@B@DA@AB@@@B@@A@@BABAB@FAB@B@@A@@@@B@@D@@B@D@BAB@@CDA@@D@DBB@B@B@@@@@@D@B@B@F@NAD@LCF@D@DBABABABCDADADAB@D@B@D@BABFB@BD@B@@@B@@@AB@@B@@@B@DAB@@AB@B@B@DBB@B@@BDA@@@A@A@@B@B@@@@@@@AA@@A@@@@@@@@@@AB@@@@@BA@@@AAA@@@A@@@A@A@@@A@@@@@@BA@A@@@C@ABCBCB@B@@@B@@@@@B@D@B@B@@BB@@D@@@BFHDBFD@@@@@C@ABA@C@@B@@A@ABAAABCAA@ABCD@@@@ABCBA@AVHDB@@DAB@@@@AB@@@@ADCB@DB@@BABA@@AA@@@AA@A@@@BA@AB@@@FB@BB@@@B@BBDBBA@BB@@@B@B@DBBB@BD@@@BABC@A@@ACBA@A@@@@ACBAAAB@@@B@BBB@B@B@@@DCB@BAD@D@@A@A@A@@@C@@AA@AC@@@AEAAAAA@@A@A@C@CBADADE@A@A@@B@D@FBBBBBBDB@BB@B@DB@FADAB@@A@@@A@@BABCFAB@BB@@@@@BB@B@@@D@FAB@@@B@DCBABA@@B@@AA@@AB@@CAAAA@ABCDAJMFEDCHEDED@DCFAHAJADAD@JBFAL@BALAJCFFD@PCFDBBDDB@@DBDBDABAB@B@BB@JDF@XFB@BBLLDDBDFH@BBDBB@D@H@DAF@H@DBB@D@F@BBBAL@FB@@@BBRAD@LABA@@BBBBBBJ@@BCD@F@DJCFA@HAD@@@@@BD@B@BBA@@BA@ABA@A@@BA@@BA@ABA@ABB@B@DAB@BDDDBBDDBBFCHADAB@B@B@@EB@F@@@BC@A@C@A@@@A@AAE@@@A@@CC@@B@FDBB@@BA@ABADCB@@@B@D@BBB@B@@@B@BADCHCBA@ABGB@@A@ABAB@DADADABA@ABGDEBA@@PAD@JGHI@ABA@@@ADEJGBCDCFEBAD@D@D@D@BBDBFDFDDBFBBBBB@@D@B@B@DEAA@A@A@A@AAA@CAC@A@@AAAAAACAEAGAEAACGGC@@@AHAD@@ABA@@@C@A@A@EACAC@CAAACACEAAEAAAA@AAAA@A@@@A@@BA@AAA@@@AAAA@CCEA@@EACACACAAAAA@A@A@A@A@@@A@@AAISCEEBA@CBAA@@ACAC@ABEBA@A@A@AAA@CA@AACAA@E@KAA@ACAG@E@A@A@@BABAB@TAJ@T@B@HAF@J@D@BAB@FAD@BAD@B@D@B@JAFAB@H@@@D@B@BAFCFEB@DA@ADBB@B@@BB@BB@@BBB@BA@@B@BA@AAC@CAE@AAA@CBABC@A@C@AAA@@AAAA@CA@@AA@A@@AA@AC@@@AAA@ABA@ABA@@AA@AAAAC@@@A@CBA@C@AAC@A@A@@@AB@B@@ADABAB@DCBADCFDDDFFDBD@D@BG@@D@@BBFFBHHLJDDHBF@FABC@IBCHGAGACAEDAFBF@HAB@@AE@A@@@A@AA@A@AA@@@ADA@EAA@CCA@CBABA@CAA@A@A@C@AACCACC@EA@@C@CBCBCBA@AAA@@@AAA@CA@A@ACAAAC@A@ABA@@B@@@@@BA@@@AAA@A@@@BAA@@ACAEG@AAA@@D@@@BA@A@@@ABA@CA@AAC@A@@ABA@A@@BABCA@AAA@EADE@@AA@@@AA@@@C@@@GCCACCA@AB@AAAA@ABCBA@A@@@CA@@A@AA@@C@C@@@A@ADAB@@AB@B@AA@@@BA@@@@@ABADA@A@AA@A@@A@EAAAAACCE@CA@A@@@@AAECEGCGAGAG@AAAA@@@ABAJCD@FADA@AAAAA@IACCC@I@CACACGICCAACCIACA@E@C@CAAGCCCAIBCACAA@@ABA@CAIFA@A@AACA@@ABA@A@@B@@AB@D@B@BABABA@ABABABCDGFC@ACAAACCCBIBCDGF@D@F@NGFAFEB@@GBGB@B@DABAGACCCCCEC@AACDCBADCDI@@@IDEBGBCFEJCJ@DBBFBBB@DADADC@C@GCECA@E@AB@BBDFFBB@BABE@EAC@CCAG@CAEE@EAI@G@G@E@C@A@CBA@@@A@@@A@@B@@@@AA@@@AAAC@ABA@AAA@G@ED@@CDA@@B@B@@CB@@@@AB@B@@A@@@@A@@@A@@A@@A@@AB@@@@AAAAB@@@@BB@@@@A@@ACBA@@@@B@@@BBB@@@@CA@@AB@@@@AAAAAA@@@DC@@@@@A@@ADA@@@@@@ABABCBABC@AD@DC@ECGCCCCAEAE@A@EEEACCAAAC@ABAFBFCBCBA@AAEC@@CCA@ACAC@CBCBI"]],"encodeOffsets":[[[108408,32776]],[[108380,32730]]]}}],"UTF8Encoding":true});}));