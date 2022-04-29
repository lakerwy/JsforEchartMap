(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('楚雄市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532301","properties":{"name":"楚雄市","cp":[101.546145,25.040912],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@B@DBH@D@DABAB@B@D@B@FBRJD@D@BCBQBAHEHGHEJIPOHO@CAKKOAO@ABAFCF@F@D@FEB@@AAACAAA@C@EDGBC@C@AEKAC@CBCDEFAF@H@D@DABABC@Q@ABQ@@BCBAD@FBDBD@DADCJSBAH@X@HBF@DADCDCBKDG@@B@B@B@B@@A@IBADCBAB@ACAAEECQBCHGRKLIHMAIAEACGIEEEEOIME]IECECECEAGACACA@C@CBC@AACAK@EBAB@FABAD@B@J@B@DABBNDLDDBDAFAD@B@D@BABADAF@HADCBABADC@E@AAACEEGACAA@A@A@@BAB@DABADABCAACCACAACCA@@ABADAD@D@B@BBD@BCGOIQEGGMEEC@CAGKAAA@SBE@A@ABDH@B@BAB@@C@A@C@A@@@A@@A@@@AAAA@@AA@@AA@@AA@A@@@AA@@AA@@A@@@@@A@@AABA@@BAH@BABE@C@CA@A@@HI@C@A@@A@A@@AA@@A@@@AA@@@@@A@A@@@A@@A@@AA@AA@@AAA@@@@AA@A@@@AA@@@@@A@A@@@@@AA@@@@@A@@@@AA@@@@@@@@@AD@@@@A@@@@@@@@A@@@AA@@@AA@@@A@@@@@AB@@@@AA@@ACA@@A@@@A@@@A@@BA@@@@A@@@A@@@AA@@@AAA@AA@@AA@A@@A@@@@@@@@@AA@@@@BA@@@AA@@A@@AA@@B@@ABA@@@@@@AA@@@@A@@A@AAA@@@AA@@@@A@@BA@@@@@@@A@@@A@@@A@@@A@@@AA@@C@A@A@AH@FDF@B@B@BC@C@CBEDE@GBEAEAAACECEAAGCQEEAAAABADEHAF@FADCBEBGBEDEBCDC@A@ABA@@D@DILIFIHC@A@A@C@@@AAECBA@@AC@@ECAACBC@@@A@EEAAC@@ADA@ABC@@@AA@CECAABABADABA@BCAACC@@@A@E@EDGBABMA@A@C@CBA@AB@B@@@B@B@@A@C@@@A@A@A@CCECCEA@CAEC@A@@@@@A@ABADABABA@A@A@@A@AAA@AB@@A@A@A@CBAAA@AE@AGGCCA@ADADABADA@ABA@A@A@A@A@A@A@@BAB@B@B@B@BABCBCBA@ABCAC@GCC@IAE@C@@@A@@BBD@D@DA@IFC@ABABA@ABG@G@C@A@@@@A@ADAHEBA@A@@AC@C@ADGDKDGDEBABA@A@A@@B@BA@A@C@@BAB@@AB@@@@@@A@AB@BABABAB@B@@ACGAACAKAMBI@MBE@E@A@AACACACAEC@@AC@ABAB@DAD@FEDEBE@GAE@EACACACCCGEAACAA@C@A@C@A@AACACACAA@G@G@CBG@EBA@EAEBE@GDI@CAI@AAAA@@AC@ABA@@B@B@B@@AB@DABAB@@BB@B@B@HADABADC@@BAD@@ABCBGDC@AAA@CCCAA@C@CBC@AB@D@B@B@@A@AAE@@@AB@JBB@BAD@@ABCDE@@BAB@BCB@D@D@D@BAB@@ABC@C@CBAFEDCBA@AB@BAFB@@DADAF@DEB@@@B@BBFBBBB@B@DABA@C@ADA@C@AAKAACCA@@ABAB@DAB@@A@A@AA@A@AB@@C@C@GAQAEACAECEECACACAEACCGCCEAA@A@AAAA@C@A@AACCCCIGC@CAA@A@CBSHI@A@A@CEA@@AA@ABC@E@C@E@E@GAKGECCAA@C@A@CBC@C@CAE@EAC@C@A@A@ADABABAD@@C@A@A@@AA@@IA@AA@A@@AA@A@@@@A@@A@A@@@AAC@@@AA@@C@A@A@AAA@A@AAA@AAA@@@@@A@@ACA@@@AA@@@C@@A@EDA@E@EAA@EAACAAAE@CBEDG@CBCACACCCACAEACAAC@GCEEKCKCC@ECEAAAC@EDABCAABCBCBEF@DCFCFAD@DBJ@BADABCBCBG@C@EAC@CCCCAAC@A@A@C@ABGBABCAA@C@AB@B@BBD@BABCBCB@D@BBBB@@BDB@B@BCDEDA@AA@@A@ABGHCFAB@@@D@D@BABABC@C@C@CAA@C@GBABCDAB@@A@AAC@ACEAAC@AAAA@@AA@@@CA@@A@@BA@ABC@@BA@@@@BA@EBA@AAC@A@A@@A@@@AA@A@@@ABA@AA@@CB@@@AAA@@A@@AA@@A@@@@A@@@AA@@@@AA@@A@@A@@AA@@CA@@@A@@@A@@A@AA@AA@A@A@A@@A@AA@CAAA@@AA@@AA@@BA@@AAA@@A@A@AAACA@@AA@@A@@@AA@C@@AA@@@AAAA@@@AC@@AA@A@@@CAA@A@@@AAC@AAAAAAAA@A@@AAAA@AAAAAA@@E@MBE@A@@@@AJQ@A@AA@A@IHC@@@A@AA@@@CAA@@EAEEAAAEEECA@@CBC@E@CBCBCB@DAHABILCJ@P@NCPIPAHFJ@LAHCFKHMJERMZGFOLKTELEJAHELAHCHGNGLIPMLSNMHCDAD@DBB@B@D@JBB@DDBADCDAF@D@FBF@DBDBBFBDBBB@FEJEJGHA@A@C@CCAAECE@E@EBCBI@AACAA@@DA@CBA@ABADAD@B@DBBDDFDDFBB@BABGF@B@BDRBHBB@BFBHFHFFFJJFHBFDDBDB@DBDBB@D@B@DADADABA@@B@BBDDBB@DBB@BCD@BABE@C@A@AACAA@AA@@A@CBABA@@B@@@DABA@@@ABBB@B@B@BADEDCF@DA@@BAB@B@FAF@F@DFJ@BAD@D@@CDCBCBC@@BCBCBG@A@@BCBGJABC@AB@B@FBF@B@FAF@@@BA@@@C@@B@DAD@FBD@D@DADADAB@D@B@BAB@@AD@B@B@@@B@B@H@D@B@@B@@ABABA@@B@@BBF@BCPAL@BCD@BAD@F@B@BBBBDBB@F@D@B@HAD@B@BDD@BBB@B@DABCFADAD@B@B@BBB@D@D@BBH@DDDBD@BBBAD@@ABAD@B@B@@BBFJB@BB@B@BEJ@D@@BB@DBB@B@DADAH@B@B@DBD@D@B@DABCFABEBI@IBGFAD@H@DCFAB@DBFFHFHLDLCTGHDHFDNHVDBDDFAJALCJ@P@F@PMD@DBPPBJ@HBFDFDDFELKFABDRLF@RGZMNGLEZE@@@@LCHCBEBCLAJANGFEHCPDJBNAF@HEHGRK@C@ABA@@@@B@@BBB@ABABAB@BAB@B@BBBB@@B@@@@A@ABABABAB@@ABA@@B@B@@@@@B@@A@@AAAA@@B@B@@AB@BB@@BAB@DABA@@@@AA@AB@@AB@@@@A@A@@BA@A@ABA@@@AD@@A@@@AA@AA@@@ABA@A@A@@@AB@B@ACBA@A@ABC@AB@@CBADA@A@ABA@@BA@ABA@@BAB@BA@@@A@@@AD@@@@A@@A@@A@@@@BAB@@C@@@A@AB@B@B@DA@@BA@ABE@A@@A@AACA@@@A@ABC@AB@@AD@@@@@DB@BB@@@BA@C@@@@B@@@@@B@@A@A@ABA@A@A@@@E@ABA@@@A@A@A@A@ABA@AB@BBB@D@@@B@@AB@@@@@B@BA@AAABC@A@C@@BEBA@@BBB@B@DB@@DB@@D@D@B@@@B@@A@@D@BAB@FAH@BBB@@BBB@@B@B@BBBAB@@@BA@@@@BBB@@@DADCBC@@@C@@BABBF@BDBFBDBDHBFBL@FBHFDBBADAFCDAD@PNBDBBDJADGJGJABC@CBEDAB@@BDBBBD@BCF@B@DDHD@B@DAD@BAB@DBFJBFFFF@D@D@D@D@D@BBBB@FABA@ABE@G@C@@D@B@DDD@F@BABAF@B@DAD@HBDDBFBDDRHFHBJ@HBLBFDDTNNPDDBBN@FDDDFD@BCDAB@HALBHFLDFBH@DABEBK@EDEFEBIBABBBDDD@D@HCD@BBJXDHHLP^DLBHAHABADAHCDABBDDF@D@DA@@@CAAAAAA@@@AB@@ABBD@LJL@BABCDG@EAC@@@A@A@C@A@@@A@@BBD@BB@DD@@CFA@CAA@@@CBAB@BBBBD@@ABABA@@@ABBF@BABA@@B@@DDBB@@F@JFDBD@B@DCBAD@DBHBNBJBDBDDRNAD@@ADABB@@@DADABBBB@DAB@@@D@H@DABAB@BBBD@F@F@BBBBHL@D@@@@A@A@CAGEA@@BABBBDL@B@@ABADABA@ABG@ABAB@@BBB@D@FCD@B@DBBBDF@BB@DBLBB@BABAACACEE@A@ABA@A@CACAABAHEHGDC@A@ACC@@@ADCDADAB@DBJDB@BD@D@BBBB@BBB@B@@@@C@A@@@AB@DABABA@C@E@A@EBCHM@@@AACECA@@@ABABABA@AAEG@A@CBABAAAAAAAE@E@A@AACA@A@AAAAAAACAA@AA@A@CDI@AB@BABA@AACACBA@ADCF@F@B@@ABAB@D@FBPLDBBAFAD@F@F@DBB@BA@AB@J@DBJDF@FABA@ABCBADAJ@B@J@F@D@FGDAHK@AHEBCBCDAB@FAJDDBD@BCHKLKDCFABAD@H@H@H@HAHEDCBABCBC@M@CAAECAABABAFAB@BBDBDBB@FAD@DGFADAF@B@DDFDFBPFB@@D@BABABA@@BB@BBB@BADADEBAB@DDHB@BB@AD@B@@@@@@B@B@@A@CB@@@B@B@B@B@B@BDBBD@F@B@B@BC@@B@B@@B@@ABABB@BBDBB@B@B@BB@@B@"],"encodeOffsets":[[104091,25773]]}}],"UTF8Encoding":true});}));