(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('沙洋县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420822","properties":{"name":"沙洋县","cp":[112.595218,30.70359],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@DAHBB@@BBBB@B@@A@AB@D@@B@BBABA@E@CBA@E@E@CBAB@DBDBB@@A@A@CAA@A@ABABBFDFBDBDADABABA@ABAHEBA@C@KBCB@BABADABCAAAA@@@AECCCB@BCF@DBD@BBB@@D@HBDBBBB@BAB@B@@BBJCD@@@@B@H@BBBD@B@BABADADG@ABABAF@D@NAF@DAB@BA@A@CDCDAD@FBFBHLBBB@BB@BBB@B@BBB@@BDB@D@DAJCDAH@F@BBB@BD@BBB@@@D@B@D@B@@BJ@@@BBB@BBDB@BBJDJHBDADQFABABBD@@B@@BBB@BBBB@BBB@FBD@FBDADANIBADGB@B@FBBD@F@D@D@B@D@DB@B@BAD@@ABAB@B@@BD@JBJANANAHAHCBIAE@IEE@ICGAECCACAE@C@CFGDCFCDCDCFAHCFCDCHEFEDAFCFCHCFAHAHAHAH@HAJ@LEHCFAF@FAD@F@F@FAD@H@FAFAFAFEDCDGBEBEAECCAEEAG@E@GAE@CBGDE@EBG@G@EACAC@CAEACC@A@E@EBCDEJGHENGFEDEBCBE@E@CAEAECEAACEAACECGECGCGEGEGMGKAICEOaAKAC@CKUK[AG@GBEHEROPIfMHCF@J@^D^HTHXHHBLBLCNEDCDEBEACCKCCIACBEBCBCBGDABGHEBE@A@EGCCAAE@CBEDA@C@@CAE@I@AAAEAEACBABBDFFBF@BABA@A@CACAGCCAAACIAICCC@EBCBCDA@CCCC@AACC@EBCBA@CC@CBGFEHCB@FCFABC@GAEAAGCEECECEAGBI@I@EIEECGBEAGGCECKDIDEJGJGFGBGBGAECEGIEEICECMCCDAHCL@HEFEFCDIEEIGOCGAE@AAG@C@AACBEBE@EBCD@DDDAD@FCBCAAAACCDCBCBC@EACAAAA@A@G@A@EAC@ECACAACCCCCI@@@MAG@GAIBKCGEGGEECKBEDGDIBG@EAIAEEGIBMJMNEHGFIFOHMHKHGFMFEDI@GBKBKCGEACAGCCAEG@GAE@GBEDGBO@IBEAE@KAMAUMIGIEIEGCMEMBOFOJABABCJ@@A@C@AB@DA@ABADA@AAA@@@ABAB@B@@@BBB@@DD@B@@@BABA@A@A@@B@BABCDA@@D@BB@DB@B@B@BADAD@BB@BBB@JB@@BB@@A@@BA@@B@B@BAB@B@@@BBBBB@B@@@BCB@@ADADABAB@D@FADADADADCDABCBC@I@EAA@IDKHCH@JKDGBIAMCQAE@I@KBG@CB@DADABA@C@CACACCCCAAC@A@EF@AA@AAAC@CACBC@I@I@EBADAB@DBB@BBB@DABABABC@C@CAACBC@CDEBC@C@CAA@AACAAAE@C@CDAB@D@BEBCBEBCBCB@DBF@BBDAF@DDPBJBHDLDJCJAJCFEDEFEDCDE@GAEACC@CDG@EACAECCIBGDEDKLCHAJ@JBJBDDJ@HEJAHGJEJCLGJEHCDEDCFAJDFFJDJBJ@BABCBKBG@EBABAD@BADAPAF@BCBCBGDCBEBCBGHDBBBBD@HBD@BD@B@@DAD@BAFADC@A@AB@B@D@B@B@@@FAFADABABABAD@B@BABABGJCDAFCDCF@@EDABAFADB@B@B@B@BD@BBDBBDBB@BBBB@@@B@BBB@@@B@B@@BB@B@D@B@@AB@BA@@B@@@@@@@BBB@@@@@BA@@@@BA@@@@B@@@@@BB@@@@BD@NBNBNBNDFBD@BDFDDDDBHFFBFDDBD@FAB@@ABAB@BAB@B@@@FB@B@BB@BABA@@DB@@BADE@@B@B@@@BAAA@@@A@ABABAB@@@BBB@B@B@BB@BAB@@@BFB@@@@B@@@AA@A@ABAD@B@@F@D@B@BBF@B@BD@D@DA@@@CB@DA@@BA@@D@D@@BB@@BBB@B@F@FAF@L@@@BBD@D@@@N@B@BBBB@B@F@D@BDBBF@BB@@@B@F@@BBDB@BB@BAB@@@@@BB@@B@B@BCBAB@@@BA@@@AC@@A@ABABAB@DCL@AE@@@AAAA@@A@@@A@AB@BA@AA@AA@@BADCBA@AB@BAB@@ABA@@@A@A@AB@@ABEBBB@BB@@@BABBBB@BBB@@@D@BB@@ADB@@BB@DBB@B@BBBBBB@@@B@B@BB@BB@B@@@B@BB@BB@AB@B@@@B@BBDD@@B@@ABCB@BAD@BA@A@E@ABAD@@A@@AA@AB@B@DBBBBBB@BAB@BAHBBBBA@@BA@A@@BAB@B@BABABC@EB@B@@@@@@C@C@AAI@A@A@AA@@AAABE@AB@D@B@DA@ABBBB@@FAD@BA@BB@@B@@ADAF@BAB@@C@@BA@BB@BB@@@B@@@BB@B@@@BA@@BBB@@D@BABABBBBB@B@BAB@BAB@B@@DBB@B@F@DBF@BDB@B@HBB@@@BD@BAB@@BB@@D@BB@B@BAB@@A@AAAAAAA@A@A@@@@B@B@@@B@@ABEBA@@D@@@BABC@AF@@@@A@@BAD@DAB@@ABEDE@@BABBB@DDB@BAB@BB@@@B@BA@@B@D@@A@@B@BC@@BB@BB@@AB@BBB@@@B@BC@@@@D@@ABABAB@B@DAB@@@AAC@AA@@DA@@@A@ABBBDD@B@B@@ABC@A@CDA@CA@@A@@@ABA@@@AB@B@BA@A@AB@@AB@@B@DAFABABA@@B@@@@D@B@@B@BABABAB@B@@B@B@B@BBB@@B@@A@@@A@ABC@@B@@@@BBBB@B@@@@A@AA@@@AA@@@AB@@ABB@B@@B@B@@@@B@BBB@@B@B@B@B@@@BB@BDD@H@F@BABABA@AB@@@F@D@BD@B@@@BDADAB@B@@DB@B@BB@@@BH@BAB@@@BA@@B@A@@AAA@A@C@@@@@@B@@A@A@@@@@@AA@C@CBA@ABADA@A@@@ADAB@@BB@@@ABABA@@@@BB@@@D@D@B@B@@A@A@CA@@ABA@@@BDAB@BA@C@@@BA@@@AA@@@ABABC@A@@BCNBD@@@BAD@@@BBBDAB@BBD@BB@BBBBD@BA@CH@@BBD@B@@@@D@B@BBB@@DBB@B@DAHEB@B@BB@@BDBLABABCBAB@BABBJAB@@BBD@B@BBB@BBBB@@DB@@@B@@@BABAB@@@DA@@F@@@BBB@@BBB@B@D@B@B@B@BD@@"],["@@@@ACE@E@A@ABADB@DDBDBDBDDBB@B@BABABAAECG"],["@@D@@EABC@CB@BABB@FA"],["@@@CE@@@@@AAC@@BC@@BAD@B@@BB@@B@@@BBDAACHD@AB@@C"]],"encodeOffsets":[[[115048,31663]],[[114760,31424]],[[115376,31363]],[[115352,31347]]]}}],"UTF8Encoding":true});}));