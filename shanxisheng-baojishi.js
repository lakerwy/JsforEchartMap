(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宝鸡市',{"type":"FeatureCollection","features":[{"type":"Feature","id":"610302","properties":{"name":"渭滨区","cp":[107.144467,34.371008],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BAB@HBFAJAFAAK@CD@@A@EBA@@A@@C@AB@@@AA@AD@BA@@BABBFBB@D@@A@C@CB@AABADCB@BABAACBAAABC@AA@DAAA@CAAAC@EBADA@ACCAAB@BADACCGI@A@C@AD@@AA@C@C@A@AA@A@@@EAA@A@A@AAACAECA@AA@@@AB@B@@AA@@ADBD@BA@CAEAAE@@A@AD@B@DA@AGECAAACC@ADAF@FBF@D@@A@@GCAA@A@AACAAAA@A@@FA@ACACAGBC@CBCBCAAAAA@ADADAF@FAD@B@@AACBA@A@A@@F@BADC@@E@C@AADCDECCAAEA@A@CCCA@@ABCBAAA@ADABC@C@@AAC@@AA@@C@AEK@A@@@@@AA@@AAAAAISAAACAA@ABAAA@@A@E@IBEFA@@@EAGCIGIEGICCGEGGCCMCK@QDKBEBIBCBKDEBG@IDECG@KBE@G@EBG@GBGBG@EBCBKDEBCBE@C@E@GAIAECCCCECGCC@ECGACAEAGAE@GAGCEAEAAIEEBEDCDAFADEHEHCBEHCBEDCDAF@JAFCJ@F@DAF@DGFE@GBCBEDAFAFEHEHCFADAHCDAFEFCFEFCHEJEFCFGFEDCFEDCBGDEBGBIBGBG@K@IBI@KBCBIFEDCDCF@F@DAH@DAFDD@DEB@B@FCFEBE@ABIHAB@DABCDGBM@@HABCDEBE@A@@BDB@BA@EF@D@D@BDBBBFJ@BIDGF@HDBAB@FDDJDFFCLDB@BA@ABBBB@BCB@BBBB@BDAB@D@CBCB@DEAADCDBBD@D@BCF@@D@BE@GBFDD@@@B@BD@DBBBFAHEHCDFBBDD@FAFHBJ@HB@B@FAF@B@BB@B@BADBBBB@@B@BB@@B@FDNFDBAD@DCBC@@@BDA@A@E@C@@@AAAAGDE\\MNHPFFGRALBNMX@D@DJBHBBFB@JEF@DDB@F@LABA@A@ADBDA@ABC@@DAB@AA@GACAA@EBAFIBC@ADAB@DF@@B@@C@C@ABCDA@BBDAB@BBB@@DABC@AB@B@B@@CBAD@FAB@BCFABAJKDE@A@AFBB@FCBBF@B@JFDDDEAMFGB@DBB@@@B@B@@AA@BA@AB@@A@CB@B@@AA@AA@@@ABAAA@C@@AA@A@@DABADA@@BE@CBA@CB@D@DABA@AAA@A@ABADADAD@D@FAFABABABE@AB@B@@A@@@@BA@@DCFEDCH@J@LAFBLBF@H@F@HBHBF@DAFCJCHEFABD@@@@@@@BBDDFHB@@@@D@JBLAXATAF@@A@@AA@@ACAA@AA@@@@@A@@@@@@AA@@AB@@AAC@A@A@@@AB@BCHEJENEH@LDD@HBFBBBD@BBDBF@HAHCB@B@FDFFJBJ@D@D@L@RCHCB@FCFAFAH@D@DB@@B@B@@BBBBBHBH@HALC"],"encodeOffsets":[[109868,35177]]}},{"type":"Feature","id":"610303","properties":{"name":"金台区","cp":[107.149943,34.375192],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAEACDE@EBEBCBADEBC@@BFHBH@JCD@BDF@FFBJ@DBBDA@ABBBBBADABADB@H@BBB@D@L@DEF@JDJJFBFDABCB@DB@D@ADABBBB@HA@BB@B@@@BAB@@@DC@AB@B@B@@B@@A@AB@BBBH@@ABAD@D@@BB@@ABABBB@B@BAB@DBBA@CBABADAD@BBD@B@@@@CB@B@B@B@BABBD@D@BEDABC@DD@D@@@@BBA@@@@BBFBBBFABA@G@AB@@DH@BDDB@BBBB@@CDAD@DBD@FC@AHBDFDDDABGFADE@EAADA@ALCBI@ABADAD@DCFAFGBGBGFABGBCHEDADEAEDCBCBFHDJLNJHD@@@@HBHJNHBDB@FQBADADAD@HADAHKFGDCD@FK@ADGDBFKNMD@DBJBT@DA@AL@BC@APB@G@ABCAAA@@CD@@AHBF@BCAE@AJAACBED@Z@R@FA@ABGBADAFAHSDEHAHCHGDINIEC@CBEPAFA@EZIBCEEBKBCKDGBG@GAAAAA@AA@A@@@CAC@G@EBEBEDA@GDQDK@C@C@I@IAEEECA@A@GDGBE@CAAAC@AAEAGAC@KCG@MFIFGFADA@@B@@@B@BBD@BA@@BB@@B@@@@B@@@@@B@@BBBBD@@BB@@@BE@SBWBKBIAC@@@@@GACEAC@A@@@@@@ACEBGFIDEDCBE@GAGAE@G@E@KAEAKBI@G@CDEFCD@@AB@@@@@BA@A@@BAFABABEBEBC@C@CBCBAB@B@BBB@BABCBC@A@@DAB@DAF@@CBABCB@@@BBB@@@DBBAB@B@@BBB@@BA@A@@D@BA@@BABB@@BA@A@@@A@CAA@EHBNCFCCIEA@E@AAEDA@EA@B@BCFILABEBADA@EBC@AB@DA@A@A@@BADCB@@AA@ABAAC@ACBAD@B@D@DA@@@CEA@CB@BADEJAB@FBBBD@HBBA@CB@@AD@BCBCA@B@BABKBE@A@CCE@IFA@AEGAIA@C"],"encodeOffsets":[[109485,35302]]}},{"type":"Feature","id":"610322","properties":{"name":"凤翔县","cp":[107.400577,34.521668],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@[IECCAWAWEMCC@@@@@AA@EDAHADCDEFAFBPBBAHIDERK@ABOBG@CBEAGCECCCEEECAECGEGECEEEGIIIEEEGCGAGBI@IDCDE@EBIBG@IAEAEEIEGCGEG@@AGHCJCBEAGEAIACCCE@AD@DBB@ACBCC@BAEA@C@CACBED@@ABCAGAAAE@CA@@CDIFIBEBEBEDG@E@EBEDCDGGDE@G@GBGBGBE@MBIBI@MBKBIBIDIDKFIFEFEFEFCFABBFF@@JHZIDAAC@@CGBAAC@ACSJ@BDJA@DLDABD@JA@CBG@@BAB@BGB@D@@C@@BA@A@AAI@AAI@@BK@@AA@AAA@@BEB@DEBABC@AAIB@BGB@BAB@BE@@DWD@EI@@AE@@CGBAEI@@CAAACA@@@IB@BCBACKBIB@CE@@AEIC@@AC@@CCAAEG@EEEB@LG@EHAHA@@BABDDCBGCEAA@A@ACCBKICAGEBAEEEFDFA@BBIHAAABC@ADDBEHEAGHABEFFBGJCDA@BAECCBAA@CCA@CA@AAGF@BBDABADA@AACAA@A@CAABEA@@CBAD@BC@A@@@AAA@C@@A@AABADCDCDCBABC@C@CFCD@BAB@@@BAB@D@B@BA@ABADABA@@B@B@@A@AB@@CBAB@B@@C@@@A@@B@B@BA@AB@BAB@@AB@@@FADAB@@A@A@A@@BABABCFA@A@ABADB@@B@@@@@BABA@@B@@BBBFB@@B@@BF@B@B@B@BBBBD@B@B@@A@AB@BC@ABCB@@@@C@A@@AA@A@CAA@A@ABAA@BA@AB@B@B@@BD@B@B@@ABCB@BABAB@B@@B@D@B@B@@BB@@BB@D@BAH@BBBDBBDBBDHJBBDJBD@B@D@FADBFAJ@FAJAH@B@H@FBD@DBDBBJFFDJHFDHFHBJFLHFDDHDDDD@LBJBHHHHDHDHDDDDHDFFFDFJFFLDHDF@JDJBHBLBHBJDFDF@HDFJFLD@@DD@RKJEDBDH@F@DFDBBEJKB@B@DABAH@BA@@EAACCCACBCB@BACGA@BCHIDFHJHJPRRDL@T@FGCSBIFGHAJFXRHHAFBD@FED@BBDDBD@BAFAF@HBHBBFB@H@DCD@FBDB@ADEFCDBHLB@F@B@BCFADAD@BA@@CECGB@@@DBDBB@@AAA@A@@D@D@JADBDD@@@CAE@ADABABABBBDBBH@DDDBB@HED@D@@DIPAHD@FFFABC@A@@BAB@@@@@NBD@D@DDPDVDPDRAPADAJEFEDCHEHEFEDCHEFGBCFEHGFGHGDGFEDGHIFEJEHIHKHCDEFEDCJGFCDG@I@ICKEICCICEI@I@IDI@AAMEIEK"],"encodeOffsets":[[110213,35427]]}},{"type":"Feature","id":"610323","properties":{"name":"岐山县","cp":[107.624464,34.44296],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@ABA@A@@A@@CBC@AAEDC@@E@A@A@DADA@ABCB@@ABBB@AAACAAFCDADADEDC@A@C@I@A@CFEDEBEDEDE@AHBCVELB@BABED@@EBGBCBBB@BABAF@@A@AAC@AFA@I@CBCBEBCBC@C@GACACAC@@@@A@CCCCCCDC@EBEDCDABAE@BAB@D@FCD@AC@AB@B@B@BA@AFA@C@AB@BAFABC@CDABCB@FKBA@@@AA@BAB@@A@@B@D@@E@C@GAKEC@ABA@ACCGA@@EFA@@@ACAAABMBEECAACIGECABADAB@DMFABABA@CB@BADABEBE@CCMDACA@EA@AE@@DADCDCACACBC@AC@@CAA@A@A@@A@ABC@CB@AEA@@GAAE@EBG@ABCCACC@@AD@CCCBC@BAAABAB@ACCAAE@A@CBABADA@ABC@A@A@CECECACBA@@@AA@@@@ACCACACAEACD@BA@ADCAC@EEB@CABA@A@CE@GBAB@FCDCAAEA@EBCACCBCCCCEEECGDI@@BDBBDABABA@@@@B@@AAGD@BABAAAA@BEBABABA@ABCIG@AAA@@DCABDABAA@AG@@BA@@AAB@@CBA@ACAAC@C@CAA@CBCBABA@ACCKAA@@@@@@AC@AAEACA@@@G@[@AE@E@EACA@AAAAC@@EB@@AB@@CA@@CB@BA@A@AHB@@@A@@DIB@@ADGBEBKBGDEDKBG@@@@BCBI@GBIBG@G@G@@@@@CAKA@AACCACBCB@@@AC@E@CEKEGCEEICIIGCEAE@CCGEACCEG@ADC@ABADCA@CAECACCCAAI@GCECEA@C@AEBGFKFCDC@C@EG@C@AC@IDCAEB@F@DABADADCBGFABABC@@B@@D@BDFLBDCHCBKAEGCEA@GFE@G@CC@CBCEBG@EAECGEAAEBAFADABC@@B@BADBDDHDDBD@D@BBD@BBB@BBBBDBDBD@HBD@DAB@B@B@BBBAF@BBB@B@BAD@D@H@B@@@B@BBBBB@BB@B@@@B@@BABBB@@@B@@B@@@@@@@@BDBBB@@B@@@@@@@@@@B@@@@@@@BAB@@B@@@@BB@@@@@@B@@BB@B@B@@@BB@@D@@BB@B@@DB@BB@B@@BB@B@@B@@BB@@AB@BB@B@@@@BDB@@@B@DB@@@@B@@@@@B@B@@@BB@@@@B@B@@@@B@B@BA@@B@@B@B@@@B@B@@BB@@@B@BDDFFDDDHDFDHBHBD@HBHALCJAHAJAL@LCFAHAHAHBLAFCHCDAF@F@FCHAFAFAFEJCJ@DB@@DBFBBBHAD@BC@AFBD@D@DFBABD@ADBDA@CAC@@BDFDDJBFBBHAFIDGDBH@@FHDHFHFJBFBF@JAHAJ@FCFCD@JAJBHDHFHFFJJHJFFDFHFHFFDDBFFDFDDDFBHAF@DAHAP@BQLCFGJABOAEAEBCFCDGBCB@FBB@@@@D@NDXFXBDBFD\\JRFBBHNNLLBHCFELMJGJIXQJALDJLBNDJFD^HF@FEFG@MBONAVDLDFBFBFGNIVATB`CHCBCAEKK@IBC@@DIBA"],"encodeOffsets":[[110401,35386]]}},{"type":"Feature","id":"610324","properties":{"name":"扶风县","cp":[107.891419,34.375497],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@K@CACGEAACCAAACAC@C@AAEACAGACAE@CBCBABEDAF@B@@@BCBEBGDEBEBCFGFGFEFCBKDK@]EQEGGAAE@E@EDCD@JCJCDCFCCQCICO@MFK@ACCAAAA@A@C@ABA@CB@DAF@BAB@@ABA@ADGDC@ABEDKFKHOBQCUAKBMDIFMLQH@BA@ABABC@KBKBGAC@@@@@AA@@A@@@@CB@@AB@@A@@@@AB@@@@AB@@@@AA@AA@@AB@@AB@@@A@@@A@@@A@@A@@@@@AB@@@BC@AA@AA@@@A@A@@@@@A@@@BA@@AA@A@@A@@@AB@@@BA@@@A@@AAA@A@@A@@@A@@@A@A@A@@@@@@BA@BBA@@BA@A@@@@@@B@@B@@@@@@BA@A@@@@B@@@@@B@@AAA@C@A@A@AB@A@@@A@@@@A@C@AB@@A@@A@@BA@@BA@@@@@AA@A@A@@@A@@@AB@@@BAB@@A@@@A@@B@@@B@@@@@@A@A@@B@@@@B@@B@@@BA@AB@B@BA@@@A@ADA@@B@@BB@@@B@@@BA@@@A@@@@@@A@@A@A@@@@@@@AAAA@A@@@@BC@CB@@A@A@@BA@@@@AA@@@A@@@A@AA@A@@@@@A@@@AB@@@@@AAA@@AA@@@@A@@@@BA@@BA@AAAAAA@@@@@A@@A@@@@@@F@@@@AB@@AA@@A@AB@@A@@@A@@@@@@@@B@B@B@B@@A@@AA@AA@@A@@B@@BB@@@BA@A@A@AB@@AB@@@BAA@@A@@@@@DA@@@@@@AAA@@@@@AB@@@@A@@@@A@@@AAA@@A@A@A@@@A@C@A@ABE@ECCCCCAG@MBK@CBEDEBC@CAABABAHDD@DAFCHEFAJAF@BADC@CDCBE@ACC@@@A@@D@F@F@F@HAB@B@B@@@B@B@D@DAD@D@D@D@@@DCBE@GAEACACECECAA@A@E@EB@BABA@AAUE@CBGAEAEAEBABCA@AG@K@EBE@E@ECCA@AAACB@BUEE@A@ABA@C@CAGAC@I@KAKAQDI@GBCBCDKDQFG@GB@@@@@@GBGBEDCHAFCHAH@F@FBFBF@FBJAHCFCDGBCBABBFAB@J@@BF@J@BGBCA@BAAA@@CE@@BA@@ACBC@BBIDA@C@ABC@C@CA@AABC@C@GB@BEB@BCBAD@BEBAAEB@AC@@AE@ABIBABABABGDG@AB@BC@@@GB@CGB@@ABGBCDADCDDABDAD@FFBBBCDEDA@AB@HDFB@B@BA@DFA@FBDCD@BABC@BDBFBDBDDD@B@@B@@B@@ABBDFDFD@D@B@BAD@BCBABAB@D@BBFDBBDA@ABBBABD@DADDC@@BD@BDDDBAH@FAF@BB@HB@BFA@@DAD@B@BB@B@B@DB@@BDD@DADBDBDCBC@CF@@BFBB@BDNCDDF@FABABC@ADAB@BABANE@CBABCBAFDJHBDDBFFNABABBBD@@B@FE@@HBDD@BAB@BFDBL@H@D@FC@A@@@@BA@ABB@@B@@ABELA@ADCB@DADEBABA@@B@DEB@BABA@A@A@@BBDC@EDC@A@ABF@ABCBCDAF@FCDDDDDDDB@@@@@BDBDBD@H@DADADAFAD@D@JEB@BBD@B@BE@ABABA@AAADAH@FC@AFABA@FKDUGA@BCFCFAFCFEF@D@B@J@D@BCDCFCBCBEDBBBDBBA@AA@BA@AD@BCBCBB@B@F@@@CDBF@BAD@DB@@@@BAB@B@@FDDBB@DFFCFBNHPBHBBBDDFFDFDFBHDFFFJFHHFDFFHDDDFDDFFBHBHBJBLBHBHBJDJ@NAJAJ@JAFCFA@@DDBBBFBBDA@BBBCB@BDAADADJHPFBCBAAEACBCACBBB@BBBA@@@A@CAA@AD@D@DCFAF@HAD@F@BB"],"encodeOffsets":[[110588,35444]]}},{"type":"Feature","id":"610304","properties":{"name":"陈仓区","cp":[107.383645,34.352747],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ADALFFADYJ@FEBOBAF@DFDMJCJGHGDGBCFGTEBCBABAH@BEBQ@Y@C@AFBDIB@BBFADE@GA@BC@@DB@BBAD@B@HOA@BADK@@BCBS@IACAC@MNELCACH@BELC@CDEHGLCBGBC@CBCBABERA@ACMGGIGA@@@@GCMIIKGCAEADCDBFCFCBGFADAHEBAHAHEHEBCDC@CBAB@BAJKD@BCBBB@FCFEBAHCBCCCEGA@BEDC@CAC@CB@DA@AA@ACAACG@@CA@@B@HABEBAAEAAA@@@@AB@A@@C@C@@CADCBAFC@C@AAABA@A@A@A@@D@@A@C@AAC@CBABAB@DABCAA@ABA@A@AAAB@BA@@AC@C@AB@BG@AA@ABAB@@@@AA@A@A@@BCD@@A@AB@@A@A@@AGBA@AABABCC@A@@CDABAECEAIIICE@CFK@C@A@AAG@A@BCBABCAAAABAB@ACCAI@EA@ECE@ADC@IAGEG@AD@FABCDAFAFAF@DCFBBB@CNWAMBKHQEEGONMF[HCBBBB@@D@F@B@B@AC@@D@DA@CBCCAMEECA@@@AAA@@@AAAABC@A@AAAA@E@EBA@A@@GAIEGEBC@ACEADCFGBGAEAA@CACA@@@C@ECHAF@@A@CE@ADC@C@AADCBCFB@CDADAC@A@CB@AAAAAA@ADA@AABAB@@ACADKEEICCC@EBACA@GHEJC@AEIAACA@A@C@CFEB@@ACA@A@@A@EAE@GAEACBGBEAEDCBC@C@CA@A@A@G@CAA@ABA@AACAA@C@AA@AB@@A@AB@BCB@@AACCCAC@A@ABABEFGDEFEAC@CBCFCF@D@BA@C@C@MAG@A@A@A@AAKACDCFA@CDCBA@EAEAABCFC@AAAC@AA@MBCBEDC@C@AC@GEGCAEAAAAAA@@A@@ACCA@C@KA@KGC@ECC@CBABA@GDMBEFEDEBGBEDCBGHDHBDDFAL@HCFCJCFCHCDEHCJBFDDH@LFJBHBFDBFDH@DAJ@B@DBD@F@DAAA@ABABAHABA@A@C@AAAACEAA@@A@@@C@A@A@@BCBAD@B@DABA@ABA@CA@@@@A@AAAAA@A@A@A@A@@BBD@BB@@B@BABCBABA@AAC@CAA@A@CBAAAAC@AAABA@CDCBADABCDCBABA@A@C@AAA@A@CBA@A@A@A@ABA@@BAB@BBB@BDBBB@B@@@BABABABA@A@A@AAA@AAA@@BAB@B@BABABA@ADAB@@@F@DABADAB@B@BBB@DBB@B@B@B@@ABA@C@A@@B@@ABAHAHAB@@@B@B@@@BB@@@DBBBBB@B@@@BABA@AA@@A@@A@AA@@@A@@@AD@D@BADABAB@@C@AAA@@AA@@A@AA@@AAA@@AAA@@BABAB@DA@ABA@ABCAA@@BA@@B@BBBDDBB@@@@B@@BB@B@@@@@B@@@BA@@B@B@@BB@@B@BABABCB@@A@CAA@GAC@A@A@AA@@@@CB@BA@@@AB@@@BDBB@@B@B@@ABCBA@ABA@ABA@AAC@CAA@ABCBAB@@@DBB@B@@B@BBB@B@@BBB@@@@@BABA@EAAACA@@A@A@@@A@A@A@@@A@@B@F@DAB@@ABA@CBA@CAC@CCAAAAAA@A@A@@@AAA@AA@AAA@CBA@@B@B@B@BBBDD@@@B@B@BCDABCBA@CBI@A@AAA@@@A@ABCD@BA@A@ABAAA@A@ABA@@@ABAD@DADBB@B@@@@@B@@@B@@DB@@@B@B@B@BA@C@A@AAAAA@C@C@C@ABA@@BA@C@A@@BABA@ABC@A@AB@B@B@BAD@B@BA@ABA@A@@AAAA@CAA@C@EBE@ABA@@D@DBB@@ABA@ABCACA@AA@@A@C@A@@AAA@A@A@@BA@@D@BDBBD@@@BC@CBA@C@AAACAEAC@@CAA@CBCDC@CBABC@C@EAECCAA@A@C@A@E@A@ABC@CAA@CAC@A@@AAA@ACCAA@A@A@CAAAAAAEAC@E@A@CBA@ABA@@@@B@DADBB@B@BABCBC@A@A@@@AAAAA@ACCCCACAAA@@A@C@A@ABCBEBCBCBC@ABA@ABC@A@@@AACAC@A@A@C@@@A@ABA@@@A@@@@B@@@@@B@@BB@BB@DD@DBD@BDDBDBDBDAN@BABCB@BABBDBB@D@B@@DBBB@B@D@BCFAH@BABEBEBAB@BABCBCBEBG@ABCBC@C@A@AB@FJFFFDDLDFDJBNFHDJDHDHDJDFDFHDFDDDDDFHDDBFAFA@@BBBBB@B@B@@@DJBBB@BBBD@BB@DB@@BB@AB@HAB@DBB@BBDDDBBD@DAB@BBDDLBBBAD@DCBADCBABADADCBAB@BAB@@A@A@ABA@@B@B@BBB@BA@A@A@AF@FBFBHB@@BAD@FAJCBAB@@@@@@B@@@@@B@@@B@@@@@B@@A@@@@@A@@@@@@@A@@@@@@B@@@BAB@@@@@@@B@BB@@B@@@@@@@@B@@@B@@@@@@@B@@@@@@@BB@@@@@@@@@@@@@B@@A@@@@B@@@@@@@@BB@@B@@@B@@@@@B@B@@@B@@@BB@@A@A@A@@B@@B@@B@@@@@BC@@@@B@@BB@@B@@BAB@B@@@@B@B@B@@@B@@A@@D@D@D@@@@@BB@B@@B@@AB@@@B@@@B@B@@@BA@@@@BB@@B@@@D@BB@@@@@@@A@A@@@@B@@@B@B@@@D@@A@@@@C@@@@@@A@@@@B@@AA@B@@A@BB@BAB@B@@@@CB@@@@@@BBB@@@@JA@@B@@@@@@A@@@@@@D@@@@@BB@@B@@@B@@@@A@@B@B@@@D@@ABAB@@@@A@@BA@@BBB@B@BCBAB@BABAF@DABAB@BCB@DABADA@@BAB@D@@ABAB@BADAB@B@@ACACCAEEC@@@AB@DADEB@BABAB@B@@@BA@ABADABA@@B@BBBD@BFB@BBBBBDB@BF@B@BDDBBBD@B@B@@AB@DBDDDBB@B@D@BA@@B@D@@@BAB@B@BAB@D@B@JBDBFBBCBA@@D@B@BA@@BAB@D@BA@@FCBCFCBABA@ABAFAD@BDB@DEB@BBBABABAD@BBB@DADBDDDBFDDDDHB@DAFCD@BA@ABG@A@C@AB@FFBBDBBBDBBDD@B@FD@D@@@B@BABC@CBEB@HAB@B@F@D@DBDBB@B@H@DD@DABAJ@BBB@B@D@BBDD@@BB@DDBD@B@@@B@@CDA@C@C@A@ADAB@HEBCBA@ABABADBBBD@B@BA@ADABEBCBCD@BA@A@A@AAAAC@CDE@C@A@@BAB@BC@CB@@AD@@@BA@@BBD@B@BBBDDBB@D@D@@AB@D@@A@@BGAC@EDAFCB@BDB@BDBB@@@D@BBBBB@B@BD@BADDD@B@B@FBDBBBBDBBD@H@D@F@@AFADADGBCDCBABC@@HABAFIB@FCB@@A@@HEDAB@BA@AD@B@BBBBAB@DBDAB@BDD@BAB@BAD@BBB@H@B@B@B@BBBBBB@BB@@@DBD@BA@@BBF@@@B@DABIDC@CB@@@BABADABA@C@@@@@CD@DBB@BCDAB@@BBBBB@BAB@@B@@@B@BAF@B@B@B@BBB@DDD@B@BDDBBBB@B@B@BB@@BBB@DA@ADABBDADB@@B@B@B@BDB@BBBDHBDDF@DAB@DBDD@H@DDBD@DBDBBDDFDFBH@FBBB@BB@DBF@F@BBBJ@@DB@@DADA@@B@BF@@@D@D@B@@@BADBBDB@@BBBBBBBB@BBBADB@DFDADABB@FDBH@FC@@@AAA@@@BABAAA@BCDAB@D@FDB@@@AC@A@AA@AABCDABAFA@CBAH@F@BA@@@C@ABABC@AB@B@@AB@B@FBDB@@DB@AB@@ABAD@B@B@BA@CBABAF@DBDB@@B@@CB@BCHEDAHABA@A@A@@ACEACAAC@@ACBC@@CABABCB@B@B@BAFAFA@@BAD@B@BADABABC@AAAB@FEBA@ACC@ABE@AAC@@BAD@D@B@F@DCB@@AFEDGHGBEBCFCFEDCJELCJENCFELCFAHEJGHEFGJEHEHCHEDEFCHGJEDGFGJEHEJGFCHEFCHGHCHAHBFDHHDFBDFDFDH@JAFCDGFEDGHC@@LBD@HBFAJBF@DAD@BBH@AEBC@E@C@AACCIAAGIACCAAAACAAG@ABC@A@@AA@@AA@A@C@A@@@@ABABA@ADABA@@@A@AAC@@@A@ABAB@@ABBBAB@B@DBB@B@@BB@D@@@@@DABAD@@ABAB@@@@A@AACAA@A@A@A@AAE@@@AA@AEAA@@@AB@BA@A@@@@@AA@BCBAB@B@DEBABA@AB@B@B@@@BABC@E@@BA@@BA@ABAB@@A@A@AB@@@D@@@@ABADA@@BAB@@@@A@AB@BABCBAB@@A@A@CBA@A@@BA@ADCDED@D@BADADCDCBCBA@B@BD@B@BB@@B@D@@ABCDA@@FBBADBB@B@DBBBB@BCBAAC@AHEBBB@@DDB@DBBDAFDABB@DCHIEAFEBAHGFBFGCABCD@BABBJGAAB@CEFEFFABHFDBLJDABDB@B@FBHDDACCBA@AB@BGFGH@@KFAFFH@BFDB@DD@@BD@FJ@BF@@DJALABDDA@AJA@@B@BDBB@DJ@BFHA@DF@@BJ@@FXC@CF@@ABA@AHA@AJABBD@BAFA@CFA@AB@BBB@@BL@@AJ@BBJ@BBB@B@@AD@@@@CHA@ABA@AH@DAB@@IACCBCKB@CI@ATIBDD@BBHA@DD@BBJCGY@IE@AEBADEFEFEFEJELEJCJCJALANAJ@JANAF@HAHAHAH@F@HCBEAKBGBGBGDE@KBKBIBGDIBKAG@GACAGCGCECGCCEECC@A@A@@AA@@@A@A@@@A@AA@@@ABA@A@@@@@@A@A@@A@@A@@@A@A@@@@@A@@A@@C@A@@CA@A@@A@A@@ABA@@AA@@@AA@A@@AA@A@@ACA@@@AAA@@@CA@@A@@@A@AAA@@@A@@@@A@@A@@A@@@BA@A@@@@@@@A@@@@@@@@A@@@AACA@A@@@@@@A@@@@A@@AABA@AA@@@A@A@@AAAAA@A@A@@@A@G@CBC@A@AAA@ABEAA@A@A@ABA@CAC@GACACACAA@AAA@AAC@A@CACCCCGACBC@@A@A@CBA@ABCAEAACEACAICC@CAE@CAACAECCCCC@CDCDEBE@EAEBC@A@AB@@AA@AAA@AA@C@MGCC@CAC@CAAC@GEA@CAGBC@ADA@GDGDIFCB@F@B@BCDA@GF@BCBABEBA@CBCB@@AB@BBBABC@EBKBKDCBAJCBEBMECEACAAKCCCCAE@GACDG@@@A@A@@BAB@D@DABABCBC@AAA@C@A@GAAACAA@CACAAAAAA@ADCBA@C@A@AA@@ABCBC@EBGD@BABEAE@KDA@A@BBAB@BBBBDBBJTBBBB@BB@@B@@@@@BFL@B@DB@@BD@BB@@@DADCB@BBBABAD@BB@DD@D@BFBBBDDCFCDBBD@F@@@CDABE@@@@B@BABBD@BA@C@EBE@CBCB@BBBBBDBDADAD@HADBDB@BEB@@@BBBBBBD@B@BBBHD@@@BC@E@EAE@CB@BDDBBDBHF@BCBA@C@@B@BF@BBBF@DABC@CA@BB@@BA@A@@B@@BBB@FDDBBB@B@B@BBB@F@@@BBBB@D@D@B@@BC@@B@D@BHJDDCBABA@BBDD@BCBAB@FBDBB@DBBCBB@@BADBBABBDABABA@CDABBBA@@D@D@BC@A@EAAAAB@@ABC@@BBB@@A@@B@DB@@@AB@F@BC@@DBLEBIBEBGAA@AB"],"encodeOffsets":[[109868,35177]]}},{"type":"Feature","id":"610326","properties":{"name":"眉县","cp":[107.752371,34.272137],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CBE@A@ADADA@A@CCCC@AA@A@EAA@EACACCCAC@AAC@C@@DI@ECEE@CAAA@EAAAGAC@AACCCECECABACCGBGA@AAA@C@BEBCBABA@KAGAA@ABMBEACCCAC@ABCBC@AB@BA@A@@A@AB@CD@AGEACCAAAACCACACCCACCACCEECA@@AEAAE@ABAA@A@A@EBA@C@I@@ACAACCC@KIGC@C@ACCC@CAG@C@CC@CBC@EACACACAE@CDEBC@A@E@CAC@C@E@ABCBCBADEBA@CB@@A@A@AAC@ADC@C@@@AA@AAA@A@C@CAC@C@A@A@A@ABA@A@ABA@A@C@C@A@A@@@AAC@ABEBA@ADAB@BAB@@@BADAB@DA@AB@B@BA@C@G@G@C@GAAACAAAA@AAC@C@A@A@EAAAEACAAACAAAEECA@AAAACA@ACA@@AA@A@CAC@CAC@C@A@A@A@@BA@ABABABAB@BCB@BA@C@ABA@ABA@@BAD@BABEBABCBEBC@GBABA@C@AACAAAAACAAAACAC@@A@AAE@CAC@C@AAAACAAAA@A@A@A@ABA@A@ABC@CBC@ABABC@CBA@CACBGDQHGFEFCJCFEFCFCLEJCJCHEFCFAFGJGHGHEFA@@DALBF@BEJABCD@BBDDFFJ@B@FAD@B@F@DDD@F@FDDBFBDBJBFADABCDABCB@BADDHBBC@CAA@CDICABAFA@CFEDABC@C@CDCDEFE@QDIFC@IBDDFBDH@DBFDFJHDJFJDFFHFL@D@FBD@@A@ADBDDDBBB@BL@D@@@@@H@HAHAJ@HAJAD@@@@AHCLCFAHALAFCH@BA@CJ@@@B@@GA@B@BABA@@DB@@DA@@BA@@FD@BBBBB@BD@F@FBF\\@H@@@B@BDBF@BBD@@@@@@BBDLBDB@BADADAB@DBD@D@BBBDB@DA@@BA@BB@@AH@@BBBBAACDB@CB@BBH@DJBAB@BABAFA@ABBBBBA@AHCBB@@@A@@B@BABAACCA@AJ@HCFDFFDDDDDCBCDCHABA@@HA@DHA@@D@@ABAH@HCBABABAJABAF@@BD@@BFABBFA@ABCDA@AFA@AHAD@D@BA@BDBD@D@BAD@B@JCAAD@DA@BB@@AF@@DB@BB@ADBHA@A@IAE@@@IBAAEBADAHADCDEBGAI@EAEAE@E@EBGDGBEDGFCHAHA@@@@@@HAH@RELCDCDAHAJ@RCLBLBJ@D@HBDBD@B@BAB@F@VF@ADABB@BDBFDF@F@FAL@H@@BDBBAFAFBFBHBDAF@F@D@D@B@DBDBFB@@B@BBBBB@D@DI"],"encodeOffsets":[[110623,35045]]}},{"type":"Feature","id":"610328","properties":{"name":"千阳县","cp":[107.132987,34.642584],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BIFKBGDIDG@I@I@G@G@GAIAEGCCGEGEACCIOACHQ@c@C@GAICGCEIGGGIKAAEMEI@CBGBG@G@AGEBI@GGEGCA@ILAFCACEE@G@ACFCLI@QCC@@KCIECE@GCECEAIAGAKAGCI@ICECGEKIECEEECECGCCGCGCGCGGAGAI@KCCCCCGECKGIEGAGEECIGECIEAAAC@CAC@E@G@ABGBI@EBIG@AAC@CBE@IAEBGAC@KA@@GDCHEFCHEDIBG@ECECACCEGGECGAGBGDGHEDGFEDIHGFIFEHCHIFGHEDCFGFGDGFIFEHGFIHGFEBKDEFMDIFKDIFCDEFEDADAFGHCHEF@BA@CDE@A@C@C@AB@@BD@BAF@BDD@BABEFA@BB@BADABCBABA@C@AB@@EBEBABA@A@A@ADABDB@@ADBD@@BDDBFBBD@@@B@BABGBCBGFADA@@DA@@@CACAE@ABAB@DAB@@BDB@B@H@DBD@@B@@@B@@@BBB@DDFBB@BDDABE@GBE@@@@B@BBBJBD@DBDB@BAD@DBB@BBBBBB@DDFHFHDJBBB@B@FABAD@B@BAB@B@F@CJ@D@BFDBBDBHBFB@@@@D@D@H@BBD@B@DB@BBDDBB@D@F@J@@BB@@ABB@@B@@B@@BB@@@@@BA@CDCDA@@B@@BBBDFFFFDFFHDFFFDJFLBNBH@F@HAF@HDJBFDJBFBHBH@FDHBH@J@JBJBHHHLBF@JAFCJCDAFAHALCFBFDFFDHFHDH@DADB@D@B@JFDDDFBB@DDFBJBDAD@@@@B@BB@BDAH@JBJAPCDEHCHCFCDGFEBGBEBIBGBIBIDIDIDCFEFGFEL@FB@@B@@@@CBABABA@@B@@@B@DBH@D@BDFD@BBFBBDJ@@@@B@@A@@BCD@D@D@D@B@BA@A@A@A@AB@DA@@FCB@D@B@@@@BDH@HFF@BFJ@B@@BFBBBBAD@BD@DBD@B@BB@@FAFC@@D@FDB@@BBD@H@H@FBHDFBFHFJBJBJ@J@LBH@F@F@H@HAH@JAHAHAFEBEBEDEDCDAFAJA"],"encodeOffsets":[[109946,35756]]}},{"type":"Feature","id":"610329","properties":{"name":"麟游县","cp":[107.796608,34.677714],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@G@I@EAIAGAGAG@EAIBGDEBMFGFCHGHCHCFCFAFCFADCFADCDAFEBEBEBEBG@GACBG@C@EBCFGLKFIHSBO@mLcESN[AgNQmSA@CAAACBC@CBCAACAAAAE@C@GBE@EBCDC@C@@BBB@D@B@@ABAAA@AABDADBDBFABADOEIGBCBCCB@ADAAA@ACBAAAEAACC@@EBEDIBI@IBMBI@ICGAGAKAIAGAGAEACEECCCGCEEECGGIEEECEAGCECEEECCAAGAOAMGEAEDCEA@CAECABCJ@@AD@JLLBFADGD_DSAUBMJEHEAEAKCUCMBAP@NEHEFE@]GECCIAMIKKCIBWRIJIHKNEFGDKAMKGMAAQEFLFJBN@BCJ@J@JFJJDDDFJDL@J@JCHEDIHCDEFCFGDGLGJIFEFGJCHEFCHGHEHGHEFADEHGFCDEFGFGFCDEFIFCBOBQBOCUCOCCCC@C@MA@@@@A@AB@@@BADEBEEC@BGJO@CC@C@GFA@CACCG@AAACAAABABCB@BBF@D@@CCCAIBC@C@@@@BBB@BA@CACA@@A@DHDF@@ABC@CBEBADA@E@A@GKCAEDCF@BCAEAC@CDG@A@AEGAGAE@EBABC@CAAC@AFC@EACBEGGWQIEGBEHAJDTEHS@K@QCOQGIGICEGJADB@DHABA@ADBDDDBDFB@@ABG@ABCBA@A@B@HDHF@HAJHF@B@HAHAH@DFJFNBBJLHHJHDFDHBJ@H@D@dGRBDJPDDFBFHDHHDBFBJ@H@H@H@J@JCHCJAHELAJFBFBDFDDFDHFHDHBHBH@HAJAH@FAD@HAH@JEHCDCFAHCJANCH@J@FBFBJBH@FAH@FADAHAFCF@JBJALEHAH@JBHBDBDF@D@H@H@FBD@DHHLDHDDHBDBFBDBJBHDHDFFDHFF@HAHAHCFCDAHAFCHAHAFAHDDDJDF@H@DCHEDEDEBE@AAA@CAC@C@A@A@EAA@AAA@GACAEACAEAACAB@B@F@FBD@F@B@DCB@AD@B@B@B@B@DAD@B@@@D@@@B@B@@BDB@F@B@BADCB@@@BBD@B@B@D@@BBBBBB@@@@DBBBDDB@BBABBBB@B@@DAB@@B@DBB@BB@B@B@BBBBBBBA@AB@AA@@BA@@B@B@BBDD@@DBDABAB@BD@@F@B@DAB@D@BBB@DAF@B@BBBDBD@@B@BB@B@@@@BB@B@B@BB@@@@BBB@@B@BA@ABA@@@A@@@ABA@@@C@G@AD@LBFBFBBBH@B@HAD@@@HBHFRBJDFBLDNBJANALCLCDC@@@@B@ENADAD@@B@BBBBBDB@DDBBD@B@B@D@D@DBB@BA@@@A@A@@AC@AA@BA@@@ABABGBIBGDIFIBIBGDGBGDGFGDEFGFIBEDEBE@A@ABA@A@C@CA@A@AAA@AAAB@B@@AB@@AAA@@@@@DC@C@@@@B@BABC@A@ACA@@A@B@@AB@@@B@AAG@AA@@BAF@D@BBB@@BB@@B@@@@@ABC@A@CBADCBABCBCAA@@AA@@@AB@D@BA@@@A@AAKAEAC@CBA@ABABAB@NBBA@@BA@@B@D@@@BBBH@B@BCA@BA@@D@@AB@B@@DBB@BB@@B@AA@CBA@@B@B@@ABBB@BAB@@@@C@A@@@AB@@ABA@@@@@ABADCBBF@DAJBH@LBFALDLDHDHBJFDBDFHFHDDBFDF@FG"],"encodeOffsets":[[110546,35697]]}},{"type":"Feature","id":"610330","properties":{"name":"凤县","cp":[106.525212,33.912464],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EGECCCEEECGEAEAEEGACAG@EAGACCCAA@@CBABCAAAAACAECCACAAE@CA@@AA@AAA@A@A@C@GBCBGFAFAF@DAFAFBF@HAD@DDB@BCNCJAJAHEHELCDCHGHCJCHELEFCJGJGL@FEHIHGDKFE@K@EBI@G@K@IDMFGDCJAFDHDFBFBHBF@JAF@HBHBH@F@H@F@HAFAFCHAFEFGDE@IDEDGFAHBHDJFJBJBH@HHFFFNHHFLDFHAF@JCHCHEHCFIFCB@BABAB@B@DAB@B@D@BABA@A@A@A@C@A@AB@BAB@BAB@BAB@BA@A@CAC@@A@@@A@@B@FA@@B@@AAA@@AAA@AAEAAA@@ABA@@@A@@@@A@AB@@AB@B@B@BA@@@@@AGAQEI@I@K@EBCDADEF@FAJBJ@NABADAFADABABABCD@B@DHD@BFBD@BBDBBBBB@BFDHFDDBBBFDDDBDBFDBBBDDJDFHFDHHDHFDHFDDFHJDFDHDL@H@F@HAFCHAHCHCJ@JAJDHFHFFJDFDJHHHHFHJDDBHBH@HAJ@JAHCH@JALAJ@HDBJBHDHBJAL@H@H@L@L@JDB@DAD@BBB@DAB@@B@DBDHLDH@B@@B@B@@@@@B@AB@BLNFLBBB@DB@B@BBB@FBDCFCDCFCFCFAHAFCJAL@HENAHALAJAJCLCJAJ@FCFEJCJEFIHGFGBGBGCCCECCCEECACCAAMCGAMDAFAF@FBHDHFFFHHJHJHLDHHFDHJFJ@HAD@HCFAJCJ@LADALAJAHAFEDGDMFSFGHANADALDHDFDFDHDJBJAD@DCFCFEBCDCDCHEFAJ@D@HAFDHBFDHFDDFHDHBFDFBFBHBDDHFHFHFHHGDAFCHAFAFCFENAHCB@BADAD@FDD@LHB@@L@DDBBD@@@BB@BBBBFBDBFH@HBDD@D@FCDANAB@@BBDBBD@DEBAFBFBB@DADCB@DEDCLBBBB@B@B@H@NBD@D@B@@A@CDEDEDAD@FBFEHCFEBABAB@D@DBDDBB@@DA@ABAB@@@BAB@@B@DBBBD@BAB@BBB@D@H@B@BDBD@D@DAFCFBHADAFBHBF@FBB@@@B@F@FADCBA@GN@HADCBA@CBAJGBAF@FADE@E@AFA@CCCBE@CBG@C@EDEDCFCJEDALAJ@JAL@H@HAJAHAFAHCDAFCDEFCHEDEFEFIDGFEDEFEBEDCBGBCDEFGFGBEBEFCDAHAF@HE@CBE@C@EDIBE@IBEDCFCDAFGDAFGFGBCBEDCFCFAFGHMDIDG@GDI@K@G@KAI@IAE@C@GEKCMACCEAG@GAE@IFMFKDGBGFEFGFEFEFGBEDEBIBKCEA@YBUBOCECICKAMOBKDEHBRJFALEJDPLLFJAHDFA@EQGeaEMACABGACAAAA@A@A@@@CBA@A@C@E@AAEAAAAA@EAK@GAE@G@GCEAGACCGCBM@CAGCCCCKAG@EAG@GDQ@EBE@K@EBI@GBE@G@E@GMKECKEIAGAI@G@G@MDEDG@QFKDEDKFEBIFGDIFIDKHIDIFADABAFAD@@A@C@EDADEFKJADA@ABCAC@A@AACAC@A@G@CDEB@BBD@@BBDDADCBCB@B@D@@C@E@A@A@GDCBGDADABADABABABABABCBABE@CA@AA@@AAA@ABC@A@A@A@GBABA@ACCACAE@C@ECEIEKOACAI@CGDGBC@KBEBEFA@@ABAAC@AGK@CGCACAEAI@QAG@K@EBI@GAI@I@IAGBIAK@KAK@E@MBIAMAQAICMAEBE@CAEAGECIEOHIDIBKFODIDKDIBGDGBG@GBIDODKAGBI@E@G@K@E@A@CBC@ABEA@A@@BCBA@AB@D@HADA@AB@@ABAB@B@DDFABC@GDEFEDABCDC@A@AA@EECAEBCAECCACAACA@A@E@EACAIAAAA@C@ABC@G@E@E@@@A@C@A@@BAACA@AC@C@@@A@CA@A@@BABA@ABA@AB@ACBCBCDEBC@GACCC"],"encodeOffsets":[[109207,34443]]}},{"type":"Feature","id":"610331","properties":{"name":"太白县","cp":[107.316533,34.059215],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JAD@JERCF@FEDCDCD@D@BAFCDEB@BEBAJDDCB@DBD@AACGBC@ADABADCBABCAEAIACAECC@E@ECC@C@E@ABC@E@AEICEAC@ADCBAFI@AAEBK@CB@FEHGHGHIBEDEFEDGDIFIDKDEFEDEDIFEHERGHCDADBB@DAD@BABAD@DAD@BAB@B@BAB@B@B@B@ACAAAA@CCCAC@AACCCACECACEG@E@AA@AAAAEAEAEAEACACAEACACCCACACAA@CA@AAACCCACAEAE@@@MCDKDUESA]E]IWAEBABA@@BC@ABC@C@@@AACCA@AAA@A@C@@BC@A@AAC@AA@AACAC@AYOOUCDKJIAMMI@AB@@A@@ACACCECCCCCAAACAA@AA@@A@@A@@@ABA@ABA@@@@@GPKPGNK@IBI@@@CBCBADABA@ABEB@@@EAEAAAAAAAEGAMACAA@@EECCEAEDECECI@IBGDEDGDGDCDCFIDEBIAEBOCGEOIGCICKEG@EBKBEBEBIBIAGCCEECCCEEMECCKEG@IEGAGBE@QDG@IAGCGEKEECEGEGECIEMCGA[EIAIAIAIBQAG@KDCHEHEFCHGHCFCFCFGJC@GDEBGBG@G@I@EBG@OBIDEDEBGDADEDGHCDE@EFADJ\\HJSJCR@`FRPJLAFHBPFH@NFHLDHFDLDLC@G@E@ILG@CACK@EKCKMEGGEECCDEDCBE@G@C@EDGDCECG@GA@CAICIECCCCCAIAAAAAACCAGCGAECECAI@IEACAI@ECIGG@IBQDOACDDDEJERCFKFEH@BCBEHABAD@@EBICCCCBEJGHOOMOCA@FBRJHCPJZCFG@ME@EECABE@EDC@ABCBADADAFAB@BA@CBG@CAG@CAIA@@C@GBILGFCFCFADCH@HAF@H@J@N@DAHADEFDHBDBHDF@H@HBF@HBL@FBBBBFBBBF@D@B@B@DA@@B@B@B@BBDBHBBABDFNfbRH@FEBGCIBKEOKICKFEBQIGACFALNPLBJDFDPDVAZAB@DFALAJCFAFEHEFEFEHEFAHCHELEN@JBF@HBHDFBDDNFL@H@DBF@JBJ@L@H@LCJ@HCHCJGNEHJFBBBFDFBH@HBFBHBFBDDH@FDDDHDFDDFDJBHBF@D@F@DAFALCDAFAH@HAHAH@FAH@F@LAH@FDJCH@FALCDAJAFALARCL@NDDDHHHFDDHJJFJHHDFB@@B@FEJAF@B@@@B@B@LCF@FBBA@AHCFAD@DABA@@BBB@D@B@DABCB@BBBBDBDBB@DBBBHBB@D@B@BBD@DABABA@C@CBA@AB@B@@@H@DCHBF@DBDDLDBBBDDFNFFADABIDALCLAFAD@BAAA@ABA@@DADAB@FABADA@AHEB@DC@A@A@EDAJEHCHCB@BCD@HADBB@HFD@BB@DBD@DDDNHD@B@@BBB@BBB@@BAB@D@FAFBF@FADCDCD@DDDDBFBDDBF@DBD@JDDBFBBDFBDBBAB@DAB@B@@@@A@AD@BABCBEFABBHFFDFBH@FAAD@DDDH@F@HEB@DFFHLBDADGACEKACC@@@@AD@BABAHEDABCBCBA@C@EFADBJCD@@B@DFHD@D@DCLEHEFA@B@DFBFDHDJ@BBDDBDFDDBB@CDAB@BCD@BFH"],"encodeOffsets":[[110232,34976]]}},{"type":"Feature","id":"610327","properties":{"name":"陇县","cp":[106.857066,34.893262],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@H@DAFAHBHADAHCDADEDEDEDCBCBE@GAEAECEAECG@EAGACDCBEDCFCDCDABCBEFCHCFCDCJCJAHAHABBBB@@BC@CBAB@@@@@BCACAICE@CAACECCIEA@C@A@BC@CCGEGCGEEECEAKDGBEBCBIDEDIBE@KAGGAGAI@I@IAGCG@EAGAGAECIAECI@GBE@G@EAGAMEKCIEECEEGCEEEEEACAA@@@AB@DCDCB@@A@@@@AA@@@AA@@@AA@BA@@AI@E@C@A@CAAC@ACAA@C@AAG@C@C@@@@@EAGACAAAEC@A@CDIE@A@A@ABA@C@ABEBA@A@AACIEGEGCCA@AAAA@AAA@CBC@ACACAC@IAAA@A@A@@F@HAF@BACC@AAACE@CAA@A@@@A@@@AC@CAG@A@A@AC@@A@A@C@AB@BA@@BCA@@CAEAA@A@@BA@A@@BADAB@B@D@@ABE@G@AB@DEBABCBADBBB@@B@BBD@@A@ECC@A@CBADB@BBBA@A@@BB@B@@EDG@CA@EAACBCBCEA@BCAA@AAAAAAAAA@@CAAABC@A@@@A@C@C@@AEA@@@CBCB@@CA@@AIAAE@E@CAA@@AAAEAG@EAECCCAAAC@CACCCG@C@AC@CBA@CCEACCGAA@ACA@A@A@A@AA@BCACBABCB@@CAA@AA@@A@A@AAAAACC@A@ACC@CAA@A@A@A@ABE@A@A@@@AA@ABA@AAAA@@BADC@AAA@CDC@@@@D@B@BABCBA@A@@DAD@JCBA@C@A@@AE@AB@@AAC@C@@AAA@AAAA@A@A@A@A@GAA@ABC@ABA@ACC@ABAAC@CBAAAAAA@C@@BABA@CBGF@@@BA@EDA@EJABGB@@ADABCDADCHCBEB@BE@C@G@C@AAACAACAEAA@A@C@CCABC@@A@AAAAA@A@C@@AAACA@ACA@EDCB@FBDAH@@@BC@A@@BC@C@A@CAACAAA@C@AA@@AB@@C@@BA@@DADA@AB@@@B@DCF@DBDBB@B@B@BABC@ADADAFCB@BABA@C@AACAABAB@BABADGFA@CB@B@B@D@DCB@DA@@@A@C@CA@CAA@@CCAAC@A@A@AAI@ABCBC@@C@G@AAAAC@C@C@E@ABA@GFADAD@BA@A@A@@@CECA@C@ACCAAACAAAEEA@@B@D@BAH@BABC@EDCBA@CGCCECCACCCACBA@AAC@ABABABAAA@CFA@ACC@EBAB@BABABEDADED@@ABC@A@AB@@ABA@C@@@ABADEACAIAA@C@A@ABA@A@AB@@C@A@@@ABC@A@A@CACCCAA@@BA@A@C@AACAACA@E@@ACAAAAA@AEA@AACAAA@@@ABCBAB@BAB@@A@A@ABABA@CFCBA@@B@@FDBFDDDB@BA@A@CBABA@AB@BC@A@AB@@CBABCBA@ADA@ABCBE@ABABA@ABADA@A@AA@@AB@@@B@@A@AB@BC@@@A@A@@@@B@@A@@@A@@@AA@@@@C@@@@@@@@B@@@@A@@@IB@@@@AA@A@@@@A@@D@@A@A@ABA@@A@BA@B@@BA@@@@@@B@@@@D@@@@@@BC@@@A@A@@@A@@@@@@B@B@@@@@@AAC@@@A@@@AA@@@@AB@@A@A@@@A@@@A@@BA@@@@AAA@@@@C@C@C@@@@BA@@@A@A@A@@@@@@ABA@AA@@@AA@@@A@@D@@A@@@@@AA@@@@AB@B@B@@@AA@@A@@@A@A@@@@B@@@@@@@@@@A@@B@@@@@@@@@B@@A@@@@B@@@@AB@@@@@B@@A@@@@@@BA@@@@@A@@@@@@B@@A@@BA@@BA@@@AB@@ABA@@@ABA@A@ABA@A@@BCB@@A@@@@B@@@@A@@@@@@@@@@@A@@@@BA@@B@@A@CDCBCFCF@HAFBDDJDFDFFFFFFFFDFBHBHDFBH@HDDBHDFFFFDFBFBHBDBH@DBFBDFBDDH@F@JAJ@L@F@J@H@J@DDFDDBDB@JCDCFA@@BJD@@FDF@DABAD@DBFDB@DBDBBBBB@DBBBFBBBB@B@BAB@H@@@D@BCDCBCDABC@GDADBF@B@B@@@BAD@@@FGF@@C@A@CBCBABB@BB@B@D@BABADAD@D@BAB@B@BB@B@D@B@AB@JBLFJBHCNCFCDEDIDGDEDGBGFGDEHADEFCFAHAJAJ@JAHAHAFCHAHMLGDEFGJBL@H@H@D@BAJ@@@@A@@B@@@BA@@@@B@@@@@@@BA@@@@B@B@@@@@B@@@@@@@B@@@@@B@@@@@@ABA@@B@@A@@B@@@BA@@B@@@@@@@@AB@@AB@@@B@@AB@@@@@@@BB@@@@B@@@@@@BB@B@@@@@@@@BBB@@BB@@@@@@B@@@@B@@@@@B@@@B@@@D@@@@@@BB@@@B@@@B@B@@@@BB@@@@@@BB@@@B@@B@@B@@@@B@@@@@@@@@BB@@B@BBB@@@@@@A@A@@@AB@@@@A@@@@@@@@@A@@B@@@@@@A@AB@@@@@B@@@@@@A@@B@B@@@@@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@@BFBFBD@BBBABA@A@A@A@A@CDABAB@@@@@BHBHB@@@DFJFFB@B@BAD@@@BADAHA@@@@BBB@B@BA@@BA@@@@B@@@@AB@@@@@@@B@BBBB@@@@B@B@@@B@@B@@@B@B@@@D@@@B@B@B@BBB@BB@@B@@BBBB@@@B@B@@@B@@BBBB@@BB@@@B@BB@ABB@@@@B@@@@BB@@@@B@ABB@@@@@@@@B@@@@@B@@@@@@BDBBBDDDBFD@BDBDAB@DAHAFAB@B@B@@BDD@DBF@LFFBB@BAFEDCBC@ABADABADBBBABAB@B@B@B@B@BDBBBB@B@FCH@@@JCHCHEHCJALCD@@CBA@@BABABBBBB@BABAD@D@@B@BBBDAF@FAF@H@B@DBB@@B@BAB@@@B@BFBD@@@@@B@@@@@@@@A@@@@B@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@B@B@BD@B@B@DDBB@D@B@DAB@DBD@BBBAD@BBDBH@D@F@F@FBDBD@D@DB@B@D@DBBBDFBBBD@@D@DAD@@@BABCBBFBDDBDCDC@@BABE@BFBL@JBH@JAJ@LALCL@HAHAJAJCHAHAJCHAFANCHAF@FAHAF@FAL@HAHDJFD@BDDBFDDDFBH@H@FAH@HBDBF@@@B@BCBCDADBFBJFFBB@@ADCBAHABABE@C@C@ADAFAJAHCNA@B@FBD@DDBFCH@BAF@@CBABGBE@ADEFADAHAF@F@HB\\JF@F@B@DACEGECC@AHCF@D@FBD@BADCFEBEDCBABABCBGB@BE@AACCE@ADAD@F@FBDDD@DADABADAD@DBFFBDBBBFDFB@B@FED@FDB@BACC@CAIAEF@HAR@"],"encodeOffsets":[[109634,35868]]}}],"UTF8Encoding":true});}));