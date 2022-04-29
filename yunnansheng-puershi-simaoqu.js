(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('思茅区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530802","properties":{"name":"思茅区","cp":[100.973227,22.776595],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AACCAA@AA@A@@BABCBA@A@@AC@@@A@A@ABA@CAA@A@AAAA@A@@ABA@@@@A@AAAAA@C@@CA@CA@@@@B@@@D@@AB@@A@@@A@ABA@A@@A@@AA@A@A@@A@A@A@ABAB@@@B@B@@ABA@A@CCAACAA@@BA@@AAAA@AAA@CAC@AA@@AA@A@@@@AAA@@BAB@AA@CCAACAA@A@A@A@C@@AAA@A@@@@CAA@EBA@@@AA@@@AA@@@A@A@CDA@C@A@@@A@AA@@C@@@@AA@@AAA@@GCSIOKQIQIO@SFODIDK@UDMBMCYEOCOCI@O@MDKHKLKHKDUCUAI@SA_EOBUDQDSHIJq\\iZAFABA@AAA@@B@@@BAA@@@@@A@@A@AB@@@@A@@@@BA@ACA@@A@@@@A@@A@@A@A@A@@@AA@@BA@A@@@ABA@@@@A@@AAEA@@@A@@@A@A@AAA@A@ACA@@A@@@@@@@A@@@@A@@@A@ABA@@@@AA@@@A@CDA@AB@@BD@@ABABA@A@A@@@@@@AA@@@A@ABA@@F@BA@@@AC@EAACEA@@C@ABC@CDCBEFCBA@A@AECEAGAE@ABWBC@EAC@C@E@AA[OGGIGSKEGICGAQ@G@GFKJEFKBABAFAHBFAFAPILCFEFCD@BEFCH@DGF@@C@A@@@A@A@A@CA@@AAA@C@A@@@@@@@A@@@ABA@ABA@C@A@@BA@@@@A@@AB@B@@AB@@@BA@C@A@@@@@A@@@@@A@@@@BAA@@A@@@@B@@AB@@@@A@@@A@A@@BA@@@BA@AA@@@A@@@@@@A@A@@@@A@@B@@A@BBAB@A@@@@CA@@ABB@@BA@@AA@@@@@@B@B@@A@AB@@AAAB@@@@@@A@@@A@@B@@@@@@A@@@@A@@@@BA@@B@@@@A@@@@@@A@@@@@@A@@@@BA@@@@A@A@@A@A@@B@@@@@@@@A@@@@@@B@@A@@@A@@@A@@@@BA@AAB@@A@@A@@DC@@C@A@AA@@A@A@@@@@AA@A@AA@@BCBA@CA@@EB@@@B@@C@A@A@@A@@C@@AA@A@A@@@BAA@@@CBA@@@A@@@@@BA@@AA@@AB@@AB@B@@@@@@@@ACAA@@AAA@@@@@AB@@@BC@@@@AA@@@@B@@A@@@@A@@C@@A@@A@@@@@@@A@@@@@@@@AA@CBA@A@@@@A@@B@B@@AB@@@@@A@E@A@AA@@A@ABA@@A@@@A@@AA@@@@@AA@@@@@A@@@@@@A@A@@@@A@A@@@AAAA@@A@ABC@@AAA@A@ABC@@@AKGAEAEACCACAAA@I@GAACCCEEGECG@GBE@CEECICKBGBGBIDIBE@KCECK@E@AAAKAIDM@EGEA@IAA@AAA@A@C@C@A@EAAAA@CACBA@CAI@GACGCICGCG@IDGDEDCBGCGGIIGABC@CBCB@@CA@AA@@A@@C@@@A@A@@@A@ABA@A@A@@@ABA@@@A@@@@B@BCBA@@B@@@B@@@@A@ABA@@@@@@B@B@@B@@@AB@@@@@@@@BB@@A@@@@BABAB@@BB@B@FEHEH@DADEDGBCDAB@DFDF@LCD@FBFJAJAJCBEBADBNAHCJCHEDADADCFAHADABABENCDIBCBKBKBCBCDCBGDEBIDGDABINEBIFEDCDAFADABCDABA@C@EBKDKBCBEDEDCDGFAHABCDCHEHCFGNCBCFABCBEFCDCHAFABADADEHMNOLIFOHGDEBWFEDCHALBR@D@BFH@FBFDT@ZCJADAB@D@DCH@HDRBLAL@D@DAF@HAFEDEFENCHAH@DCDGFK@ADAHCNCHIJAFAJCHADE@G@CBCB@D@DDBJBDBFBD@FBD@JAD@D@BBDBB@D@J@@@B@JDB@BADCD@F@B@HDNFDAFAHAFABADBD@FAHCJERKFCD@DAF@D@DADAFADBFAB@DADAB@BBBABA@@B@BBDBDFB@DADA@A@A@A@AD@@ABCDCFAFADABA@ABABEDAB@HAJ@D@DABCBADEBADAFAD@FBD@J@NBBBNDB@F@B@B@BBD@BB@B@B@D@DAFAB@F@F@F@DAFAH@B@@BD@F@BA@@B@BBBB@@BNBH@HBB@B@BBBBB@B@BAFCB@D@F@H@F@DBB@D@FAB@D@@B@D@DAB@D@BBBFFBD@FBBBDB@BBB@B@B@@AD@B@BBFDB@@B@D@@BB@@D@B@B@@@BBBDBD@DBB@D@H@H@B@DABABAB@BCBEBABCDA@@DA@ABA@ABA@@D@@AB@DAB@D@@@DABABABAB@B@B@D@BADAB@@ABABABBBDB@@@B@F@D@BBBBBB@BB@@BD@BBBBB@FBBBBB@DBD@DBB@@B@FCHADAB@@BB@DBDBFDBBBB@@@DA@AB@BAB@BB@B@BDDBDBDB@DBFBFBDDB@D@D@B@BBBD@BAB@BBBBBFBBBFFHH@D@JAH@H@BBHADAFB@B@HBJDD@@@D@B@D@F@DAD@B@BBBBBB@B@BAB@B@@BDBB@B@BDDBBB@BBB@BDBBB@BBB@@B@B@BAJBBBDB@B@@AB@BABBDBBBH@D@BB@B@B@@@BB@@ABA@@B@@BBB@@@B@@B@B@B@@A@@@ABB@@@@B@@@BABBBB@@@A@AB@@A@@BB@@@B@@BB@B@@B@@@B@@@BAB@DA@@@BB@B@@BA@@BB@BA@@@B@@BB@@@@B@@D@@BBB@BBBBBABBBAB@@@B@@@@@@@@BABB@@B@BB@@BD@B@@BB@BBBB@@@@B@@A@@BB@@@@BAB@@@@@@B@@@@@@BB@@B@@@@ABA@@B@@@@@@@BB@@@@@@B@@ABB@@@@@A@@@A@@B@@@D@@@DADA@@@C@@B@@A@A@@@ADA@ABA@A@A@@@A@@BA@@@AAABEBC@@@@@@@C@A@@BA@@@@@A@@B@@@@AAC@A@@@AB@@A@AB@@AA@@A@@B@@@BA@CB@@EB@@A@A@@BAB@B@@@BA@@B@DBB@@@B@@@DABABBB@D@B@@BB@@AB@@@@A@AA@@@@@@@AA@@@AA@A@@@A@@@@AA@@@@@@@@@A@@@@A@@@@@A@@AA@@@CAAAAA@@@A@@@AA@@@A@AA@@A@@AA@AB@@@B@@@B@BAFABABBDABA@@@ABABA@AB@@@H@@A@@@@BE@A@C@ABCBA@@AA@@@A@A@@DA@@BA@@CAA@@AFE@@A@@@ABA@A@@BA@A@@AAC@A@CBABCB@B@HC@AFCDC@@LADAH@@@BA@A@@@@A@AA@@@AB@@@@AA@@@@AB@AA@@BA@@@@AA@@BA@A@@@CB@@@B@BABAB@@@@A@ABA@AAAA@A@A@@@@A@EDCB@@A@A@A@A@@AA@AAA@A@AB@@A@A@AB@@ABAB@BAF@B@@@B@B@@@BB@BAB@BBB@BDB@@B@@BA@AB@BA@@BBD@DB@B@B@B@B@@@BB@@BAD@BAFAB@B@@A@CBABADC@@BAB@BB@@BDBBB@@@BBBB@@@BB@BBDDB@BBF@B@@@DD@@B@B@B@BBD@@@FBB@@B@@@B@BB@B@B@@ABA@ABA@@BBBB@@B@B@B@B@B@@A@ABAB@BAD@BABA@C@A@ABA@A@@JKLULORCdJZ@VW\\ODUD]XQjIRN\\@VQR@@C@CDCFCDAFAB@B@B@B@@@BBDAB@@@B@B@B@BBB@@@B@BAD@BCB@@@BA@@B@DAB@B@@A@@BAB@BBBBB@@@@@BBBADA@@B@B@BA@@@@@A@@B@@@@@B@@@BAB@BBB@B@B@B@BAB@D@B@@@@@DAD@B@@@@@BA@@B@@@BAB@@@@@B@@@B@@@B@B@B@B@@AB@@@DAD@B@BAB@@@@@@AB@@@B@F@BAB@DADC@A@A@C@@A@@AB@B@BBB@@@BA@@@@B@D@B@BB@@BBB@BBB@D@B@@BB@@@B@@BB@@@@ABA@CB@@@@BB@@AD@F@@@BA@@B@@@B@D@@@@ABA@AB@@@BABAH@@@@@@@@AA@@A@ABA@CBA@@@AAA@A@A@A@@AAAC@ABA@ABA@AD@@A@A@@A@A@@@AA@A@C@@@A@C@A@@BAB@B@@@DABAD@D@D@B@FBFB@@DBBDBB@@B@B@@AB@BBB@B@D@B@B@BCB@B@B@DA@AB@@BB@B@B@@@B@B@DEB@FABAB@B@@A@A@@@A@A@@@AA@@@@@@AAAACA@@AAAB@@A@A@@AAAC@@@A@@AA@@@AA@@AAA@@@A@@AC@AF@BABC@CBCDAB@R@@@J@LAHCFCBADAFBBCDKJKJGFEB@HBB@B@B@BDBBFFFBB@@@@AD@@ABADABABABA@C@ABA@@B@@@B@B@H@FAB@@A@CBA@A@AB@@ABABA@AB@@@BAAA@A@@B@B@B@@@BABAB@@A@@@ADC@C@@B@@@BBABB@@B@@BA@@@C@ABABA@A@@AC@A@@B@B@@@BBB@B@@A@A@@@AAAA@@ABAB@@@BC@A@@@@AA@ABA@AB@@@B@BB@@BA@@@@@AB@@@BBB@@AB@@AAA@@@ABC@A@ABAB@B@BB@@BAB@@AAA@@AAE@@@@A@@@AB@@@B@@@B@@@@@@A@AB@BABAB@@BB@BBD@B@@BBDBD@@BB@@BAB@D@@C@A@AAA@A@ABC@@@ACC@@@AB@B@DBB@FCB@B@@AA@EC@@AC@@BAB@B@BADAB@@@B@@BB@B@B@FEFA@@@A@AAA@@@AFG@CB@BAB@D@B@B@@@BEBC@AAE@CBCBABAD@BABBF@B@B@B@BA@A@C@C@A@AAA@A@ABABABC@AB@@@BBD@B@BC@A@AA@AE@ABABA@@@BB@BBBB@BB@BABA@A@E@C@A@AB@B@B@@ADC@ABC@C@@BA@CBAB@DAB@@A@AAE@@AA@A"],"encodeOffsets":[[103881,23127]]}}],"UTF8Encoding":true});}));