(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('禄劝彝族苗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530128","properties":{"name":"禄劝彝族苗族自治县","cp":[102.46905,25.556533],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DHDFDFHBDDABADADAF@D@B@@B@@BB@H@JCB@@@@BB@AHAJBJFRCRELABCBEDEDIBCFABAD@DBB@DBD@DAF@DBFBDBB@D@BADCBC@GBEBCDCDAB@D@B@BBDBDCD@D@BBBBD@FADADDBJFBHDHAF@FAF@BABCBE@EAEAE@CAAACCCCCAA@AB@BCFCBAD@BAD@DADABABABC@CAC@CACBCBCBCDCFCB@DAD@D@BADA@AD@BC@CBE@AAA@A@C@A@@@ABCF@B@H@F@FAF@DCFADCBCACBC@AAABA@@B@B@DBDBFBD@DDBBDFFBDDFDDBD@B@DAD@F@D@F@D@HDHDHBF@B@BIJKLMJA@EHKJADAD@DABABABAB@@@B@D@J@@@D@F@DBBDBFDDBBB@D@D@FAP@L@B@F@FDJ@@@BDDFBNBF@FBBD@@CDCHAJBHGABF@BBBDFBDBF@B@BDHCRKLKHKFGFABEDIBK@M@A@IJ@FBNER@NGH@LHJHJF@J@BBKFCDCF@DCD@J@JBDHDLDDDBF@FCFEDMDIDCDALBHFDADADABAD@B@BBDBDBDDBBDBBBBBDBDDFBFBD@D@DBBAD@D@B@DABADAB@BBD@BFD@BBB@@@BAB@D@BBBFDBDDFBFABAB@HBB@BBBBD@F@@@BAD@B@BDBBBDD@F@FABABABBBD@BBD@B@BBADGHAF@H@DCDA@@BC@@BEBABCBABEBA@A@A@C@AAA@C@CDABEBA@CBA@ABAD@DABAD@DCBCDCBABCB@@ABADABABC@CDC@CBC@CBCBABADABABCBA@C@ABA@A@AB@@CBABC@ABCB@BA@@@AB@@A@A@@@ABBB@@BBBBB@@B@@A@@D@DBD@F@@@@@D@BCBADADCBCBABCBABABABAB@B@B@D@D@D@BADABAB@D@BADABABABADCB@BA@AB@B@B@B@@@@BB@@DBDDBDBFBF@H@J@JBDBDBBFBDBDBBBDBD@DBF@FAF@H@H@J@F@HBJBHFFBDBH@H@D@B@BB@BBDBBB@HDDBHBDBDBB@B@B@FDFDDBDBB@D@DBDBDDDDBBHJBDDBDFFHBDDDFFBBDB@BBBDFBDDFBF@DBBJJHDBBD@J@D@DBFBH@DBD@LAF@J@F@F@FBD@DBBBB@FBDBFBHDFBFBBBDBFBBBD@B@FDFBPFDBDDDBDBBBD@BAF@F@DBDBD@BBB@B@LDPDLDHDFBDBDDBDBDBJ@PBDBBDDFDJBH@LBD@FAFCFCHENELGHANAFCFAD@L@DAB@DADCB@DCDCBCBEBEDKBCBEDO@C@CCCAACAGEOOMICCCCAEAGAE@KAC@C@CACCAAEACAC@A@ADAHEF@F@P@B@BA@EBADABAJEFCFCJCJCLCDAFCBCDEBC@CBE@ABADAJCHAD@DBD@DBD@FBDBNJD@D@B@@ABCBAFAHBFBBBFBDDDFBHBD@J@D@J@DABBB@B@DBB@DJNFHPLBDBDAB@DBBDBDBDBD@PBHBD@BDDBBDDDFNFFHFDBDBDBDDD@FBHBLBBBD@@A@AB@BAB@@C@@BA@@@ACA@@CC@AAA@A@A@AAA@A@@@AAAA@@@@AAC@A@A@A@@BA@@@AA@AC@A@@@A@AB@@A@A@@AA@@AA@AB@@ABA@A@AB@@A@AB@BC@@@A@@A@@AB@BADCBA@A@A@@A@@A@@@@BC@CBC@@@A@@@A@@B@BAD@@@B@@A@@AACCAA@A@A@@@ABA@A@AAAA@@A@A@AAA@A@@AAA@A@BA@AB@@AB@B@DAB@B@DAD@BAB@DAB@BADADADCBABABADABAF@B@D@B@B@DAD@B@D@DADAB@DA@ADA@@DA@@BABABABAD@HCBABABCBABCBEBA@@@CBABC@A@C@A@CBA@@@C@AAAAC@C@C@A@A@CBCAA@CAAAA@A@C@ACG@EECAC@ABGDGBCBIBAAGAEEK@E@GFC@EAEAEAC@AAAACAE@CBADGJGLCJCDBDH@DDBD@F@F@F@F@NCFC@AAC@CAC@CDCBEDG@ABCBAH@DCBEDGDCFCDEAEBCDOBC@C@@@EAC@CCACCCCECEAAAGAA@CC@A@AAAAAAAC@@@@EAACE@@ACACCGCEAECE@AAG@C@AF@DBDEBABABA@AAC@CDABA@ECCACACCCEACBE@A@CCD@HCFGBCBAB@B@B@BF@DDAD@BA@CAAAACAAA@AAADABC@C@CAAC@@AAADAF@BA@@BGBC@A@CBBDBBABCD@DAB@@CCA@@AAAC@ACBC@ADA@GBBCAAEBACA@ABACCACBA@A@AGBGEICGAC@A@CBA@CAACCAACCCGACEECGAEEGGECECAC@A@C@EBEBG@E@EA@@@CDCBA@A@CAC@CAG@C@G@EBCBCFCBABA@C@AAE@CAGAGAAA@CDABC@CBEBG@A@@@@C@ABABCAAAABAB@DCN@DAB@AEACCCA@GA@AA@CIGG@C@ABEBCDCBC@CBC@C@A@ABCDADABA@AAA@ABABAB@BA@AAAC@AACAA@EAA@E@GBGAI@CACCCCCAAAGEBCAECBEDCDADCBG@KCGEAA@E@ACCGKACBC@CCACAAEEGIGKG@@@CAACAC@CAE@G@E@GAC@C@AC@CAC@CGDCBC@AABABCFAFCAA@A@ABABABA@AAAAA@@ACCAOAIAEAAC@E@GDEDCDIAGGEACAAAAAA@@@@AA@E@ADABC@CBE@A@AA@C@CAA@CAEACAEAE@CACAEACACCAAA@CEGEGGEIEEA@ACAA@AAA@E@@@AAAAC@@@@AA@@BA@@BA@A@A@A@AA@AA@A@A@A@CBA@@@A@A@ACAACAAA@AA@AA@@C@AA@@AA@A@AACA@@AA@AAACAECA@AAE@A@AAA@A@AAAAA@AAC@AA@@A@A@A@A@AACAA@AAA@CAECCAAAA@@ACA@@AAA@CAA@A@A@A@A@@@AAACA@AAAAACA@@AA@@@A@CA@@A@AAAA@CAA@A@AAA@A@A@@@@AA@@BABABA@AB@@CB@@ABA@CB@@A@ABA@ABA@@@ABAB@@A@AAA@ACA@A@@@A@CA@@AAACCCA@AA@@A@A@@@AAA@@AAA@A@@A@@AA@@@A@A@AAAAA@AA@@A@A@A@@@AAAAAAC@AAA@AAA@@@@AA@@@@AAEAA@@@AAA@A@@@A@CBGDaXGBEAGEa_OIIKCG@KAAA@C@A@CBCBCBABABEDCDCDCBCB@@@BABEBC@A@AB@BBD@BA@CB"],"encodeOffsets":[[104919,26041]]}}],"UTF8Encoding":true});}));