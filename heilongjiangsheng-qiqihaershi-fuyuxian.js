(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('富裕县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230227","properties":{"name":"富裕县","cp":[124.469106,47.797172],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EACEEAICICA@@@C@AAE@AAE@AAE@EA@@A@C@EAE@GACAC@CAE@CAC@A@AA@@@@@@@@@@BA@@@@@@B@A@@@@@@@@AA@@@@@GAECGACAGAEAAAEAEAE@AACAGCIAA@GCGAEAE@CAC@EAGCGAC@CAIG@@AA@@AAA@@AA@@A@@AA@@A@@AACI@G@G@GACAA@A@A@@@@@A@A@@@A@EAE@CAC@A@@@A@@@AA@@@@A@A@C@AAA@A@C@EAC@A@A@A@ACAECCAEACCEACCEACAEAAAAC@ECA@ECGCCACACAC@CACACACACAEACA@AC@AAGCECEACACA@@AAEAIA@AEAICKASKICEAEBSESGIEA@GCAEAA@@@@EAEAA@@AA@CAEACAAAA@A@AAECOEIC@AA@A@EAKEKC@@@@C@CBG@GBABC@A@A@EDEDEBEDEDEBEDEDEDEBAB@B@DBD@B@B@@@@@BBFK@UBM@M@M@MBK@M@M@E@E@G@O@A@A@C@oABR@VB@AB@BAB@@AAA@@AA@@@AB@@@@ABA@@@B@DBBB@B@@@BA@@AC@A@CAA@@BABA@@B@@@@B@B@DAB@BABBB@@BABCDA@@B@@@B@B@@BA@@DAD@B@@@@@@@ABA@@B@@A@@B@@@BBD@@B@@@@@@@A@@B@@@@@BB@@@BAB@B@B@@@@B@@@@ABA@CA@@A@AB@@@@@@@@F@@@@B@@E@AB@@@@@BB@@@DC@@D@B@@@AB@@IDAB@@@B@@@B@@B@B@BABA@AB@B@@@@B@@CBABCB@@@B@@@@@BBA@@@A@@@@BBBB@@BB@@@B@@A@@@@B@@@BA@A@C@C@@@A@@@BBB@BBB@@@@@@@A@A@E@M@ABA@G@A@M@E@AAC@CAQ@M@G@AAA@CBIBC@CBCBkAA@O@Q@O@M@O@QAO@Q@Q@O@OAO@Q@O@Q@I@A@E@K@S@M@Y@I@K@K@K@K@I@K@Q@K@I@EBEDGDCBGFCDAB@@CBGFGFAB@@@@@BADAB@@@@@BA@@@@@@@@BA@@@A@@B@@A@@@@BA@@@A@@@A@@@@BA@@@AB@@@BA@@B@@@B@@@B@BA@@BA@@@@BAB@DBB@@@BABADCDA@CDEBA@@BCFCF@@AACBCBAB@@@D@@A@@@CAA@@@AAA@CAAABB@B@@@@AB@@@@@BAAA@EAE@AAA@ACA@A@CBABABCB@@A@A@A@@@A@@AA@@@AACAAA@@AA@@AA@@A@@AACAAA@@@@@A@AB@@@@A@ABCBA@@BA@A@ABA@A@A@C@E@A@@@AFAB@BA@@@A@AAA@AAAA@@A@A@@@AA@@@@@AA@@@A@@@C@@@@AAAAA@@@CAAG@K@A@A@@@A@C@A@AAC@CBD@BBHFBB@FADCBGDADAB@DBJ@D@FBL@@DFDF@@AB@B@@@@@@CDCFCDCFADCDABABA@@@@@@@A@@@A@@BA@@@@@@@@@@B@@B@@B@@@@@@@@@@A@A@@@ACA@AAA@A@A@@@C@C@A@AB@@A@A@ABFFFBDDBBDDHFDD@BBD@D@DFDDBFDDBBBBB@D@D@DBBBBDBFBF@FADAFCFEJEHCB@DAD@DBDBBD@F@FAFBFBDBHHFHFJDHDFBFDFDBFDDFFDDDBHBFBF@H@F@F@DDBBBDBFADCFAF@BDF@BADABABEBE@C@ABAHBB@@@BDBHDHDFBHDJTHL\\^JHFFDDBB@FAF@BDBFBFBF@JAF@D@F@F@HCJCD@F@DDDBD@HBF@FADABCDADAF@DBF@DBJDJBJ@DBD@DBB@BB@B@B@BAB@BCDABADAB@BBDBBDBBB@B@B@BABABAFAB@@AFCDABEFIHCD@D@B@DDDBBFDFBFBFBD@FBD@F@D@BDBB@D@DCBAD@B@DBDDDDDFBHBFBFBDDBBDH@DGHGHABCDAFCFAD@B@DBBBDFDHDLFDDBBBB@D@DBFBFBDDDDDFBDDFBDBB@FAB@HAHAH@F@F@H@FBBDDD@D@D@DCBABABC@C@CAA@CCAACAC@A@EBCBCBADADABAFAJ@BCFADAB@BBDFHHDHFFBHDFBDBBBDFDFFHBDBBDDBF@D@DAFAFCDEBADIBG@CBAD@D@DBDDDFFBDBB@DADADCDEDCDEBEBGBCBCBABADBDBDBD@HBHBF@DBBBBBBD@B@D@FAHCD@D@D@FBD@DB@BBB@B@DABCBAB@@@BA@@@@B@@@BA@A@@@@@@@@B@@@BB@@@B@BAD@BAB@D@B@BBB@@BB@@@D@F@DBB@D@BBDBBB@B@B@BCBABEBb@@@B@B@@BF@BBJ@D@B@D@J@FBF@B@B@F@B@H@H@D@F@D@FBB@F@F@D@F@D@D@D@B@BB@@@@JDFBLB\\HFBD@HB@@DBLBPFF@DBLDB@B@B@FBD@DBDBB@DBD@DBB@B@DBB@B@BBB@B@BBB@D@BB@@D@@@@@HBJDHBHBB@@B@B@BBB@@@BBB@BBFBB@@JBT@R@F@D@H@@B@B@B@BDAD@B@@@AAAA@AH@@@B@H@D@F@DBH@D@D@D@B@B@DBB@@BB@@A@@D@BBB@B@B@@@D@B@B@F@BBB@RBTBNBPBD@D@B@@BA@@BB@FBH@H@TB@A@A@A@AAA@E@A@A@A@A@@@CA@@@AA@A@A@AA@@C@E@A@CBA@A@ABEBEBC@CBCBEBC@C@AD@AC@G@A@BD@D@H@FBF@D@B@HADABBF@BBHB@CDBF@D@FBB@HAH@F@@@BB@@F@H@ABADAD@@@BB@D@D@D@B@D@DBD@D@BAB@@B@BAD@B@DABB@F@@D@B@BAB@B@B@BAB@B@D@B@@@B@@AB@B@@F@D@B@BBB@B@D@BB@@B@A@@B@@@B@@AB@@@BB@@@F@@@BAJBL@FBB@B@D@B@DBF@HBF@B@HB@@@D@@@@@D@B@BD@H@D@D@DBF@D@D@F@B@B@B@D@B@BBB@B@DAB@B@B@FB@@B@D@B@DAB@D@F@HBF@F@H@DBB@@@@B@@FBD@J@B@F@@CD@F@D@@BF@B@DBD@@B@A@A@@F@H@J@LB@@D@@@@@D@B@B@@@F@L@HCDAJE@@@@@ABA@CBA@C@ABAAE@EBA@ABC@A@A@AA@@A@ADKBIG@A@C@@ABI@ABC@A@CBA@CBEBE@EBCBGBG@ABIBC@CBE@CBG@ABA@CBC@GBIBE@C@EA@GBCBC@A@IBA@C@E@@@C@@@C@CAC@A@C@AAC@C@A@A@@@AA@@BA@A@CBC@A@ABA@A@ABC@@@CBA@A@ABC@A@A@ABA@A@AB@@EBA@CBA@ABC@A@AB@HBJ@HBH@F@B@FBF@J@HBH@JB@@F@H@DBL@D@HBH@HBF@H@HBD@B@B@B@FAB@FAD@B@FAFAHAB@JAB@HAB@HAD@DA@@@@@A@@BE@A@@@ABC@A@CBA@CBCGCA@BA@C@CBA@A@A@@@@@A@@@CBG@@BE@A@@@ABC@C@EBC@A@CBC@CBA@AA@@@@@@A@@@B@@@@ABEDA@@@@A@@@@C@@@@@@@@B@@@@@@@@A@@@A@@@@@@@A@@@@@@@@AA@@BAA@@@@A@@@@B@@@@A@@@@@@@@@@A@@@@A@@@CB@@@@@@@BAA@@@@@@@B@@@@A@@@@@@@@A@@@@@@A@@@@@@@@B@@A@@@@@@@@AA@@@B@@A@@B@B@@@AA@@A@@@@@A@@@B@@AA@@A@@@@@@@@B@@@@@@@@@@A@@A@A@@@@@@@@@BAB@@@@@@@AAA@@@A@@@@@@@A@@@@@AA@@A@AA@@A@@@@B@@@@@@B@@B@@@@@@AB@@A@@@A@@@@@@BB@@@B@@@@@@@@B@@@@A@@BAA@@A@@@@@A@@@AA@@@@B@@@B@@A@@@@@@@AA@@@A@@@@@AA@@A@@A@@@@A@@@A@A@@@@B@@@@@@B@@B@@A@A@A@@@A@A@A@@@@@A@@B@@@@@@AA@@A@@A@AA@@@A@@@@@A@@@@BA@@@@A@@@@@@@A@@@@A@A@@@@@A@@@@@A@@@@@A@@A@@AAA@A@A@AB@@A@@@@@A@BB@@@@A@@@A@@@@B@@BB@@@@@B@@@@@@A@@@AAA@@@A@@@@@A@@@A@@@A@@B@@@@@@BB@@@@A@@@@@A@@@A@A@@@@@@BA@@@@@B@@B@@@@@B@@@@A@@AA@@BA@@@A@@B@@@@AB@@A@AA@@A@@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@A@@AA@@@A@@@@@@@@A@@@@@@@@@@A@@@@@@B@@BB@@@@@B@@@@A@@AA@@@@A@@@A@@A@AA@@@@@@BA@@@@A@@A@BA@@@@@@BA@@@A@@@@@A@@@A@@@AA@@@@@B@@@@AB@@A@@@A@A@@@@@A@@@@@@B@@@@A@A@A@A@@@@@A@@@A@A@AA@@A@@A@@@@AA@@A@@AB@AA@@A@@BAB@@@@A@@@@A@@@@@@A@@B@@A@A@A@@AA@@B@@@@@@@@A@@@@@@A@@@@@A@@@@@A@@@A@@@A@@@@B@@@@AA@A@@@@@@AB@@@@@@@A@A@@@A@@@A@@@@@@@@@@@@AB@@@@@@@A@@@A@@@@B@@A@@@A@@@@@@@@@@@@B@@@@C@@@A@@BA@@@@@@AA@@@B@@@@AB@A@@@@@A@@@A@@AB@@@@@@A@@@@@@B@B@@@@A@@AAA@@A@@A@@A@@A@@@A@@@@@@@@@B@@B@@@@A@@@@@A@@@@@@A@@@@@AAA@@@@A@@@A@@@@A@@@A@@A@@@A@@A@@@@BA@@@A@@@A@@@@@AB@@@A@@@A@A@A@AA@@A@@A@A@@@@A@@@@@A@@A@@@A@@@@@@AA@B@@A@@@A@@@@@B@@AA@@@@@AB@@AB@@A@@@BA@@@@@AA@@AA@@@@@B@B@@@@AA@@@@A@@A@@@@BAA@@@@@@@@@@@@@B@@@@@BA@@@@@AA@@@@@A@@@@@@A@@@@@A@@BA@@@@@A@@@@@@@BA@@@@@@@@@AA@ABA@A@A@@@@@BA@@DA@@@A@@A@@@A@A@@@@@@B@@AB@@AA@@@A@@BAB@B@B@@@AAC@@@@A@@@@BA@@@AA@@AA@AA@@IAA@A@@A@@AAA@@AA@@@@@BA@@@@@A@@@@AA@@A@@@AA@@A@A@AB@@A@@@@AB@A@@AA@@@A@@@A@A@A@ABA@A@@@@@@B@@@@@B@@@B@@AA@@A@A@AA@@B@BA@@@@A@@@E@@@A@@AA@@@@A@@BAAA@@A@@A@@@@@A@@B@@@@@@@BB@A@@@@@@@AA@@A@@A@AA@@@@@@@@B@@@B@@@@A@@A@@AA@@@A@A@AAA@@@@@@A@@@A@@A@@@A@@@@B@@AB@@@@@@A@@@@A@@@AB@@A@@@@@@@@A@@@A@@@A@@@@@@@@@DA@@@@A@@@A@A@AB@BA@@@@B@@@B@@BB@@@@AB@@AA@@AA@@A@@@A@A@@@A@@@@@@AA@@@ABA@AB@@@@@A@@@AA@@@BCDGBE@ACC@CA@AE@AHANAD@DEFGA@EACAA@BABABAB@DBB@B@BBB@DEBCHGBEB@@CBE@@@@@@@A@@B@@A@@@A@@@@BA@@@A@@@A@@@@@A@AB@@@@@FBFDB@@@@B@@B@B@AA@CB@BAB@@@BA@A@@B@BABA@@BABAB@@@BA@@BAB@@AB@BA@@B@@ABABA@@DA@@@AB@BAB@@A@@B@@@BA@@BABA@@BAB@@ABAB@@@BA@@BA@@@@B@@AB@BA@@BA@@@@@@BAB@@A@@B@@A@@BA@@@@B@@A@@B@@@@@@AB@@@@@B@@@@AB@@@B@@A@@B@@@@AB@@@BA@@@@B@@A@@B@@AB@@@B@@A@@B@@@@@BA@@@@@@BA@@@@B@@A@@B@@@BA@@@@BA@@BA@@@@@@BA@@BA@@@@B@@A@@B@@AB@@@@ABAB@@A@@B@@@BA@@BA@@@@B@@AB@@A@@BA@@@@BAB@@A@@@@BA@@@@BA@@@@BA@@@@@@@A@@@A@@@@B@@A@@@AB@@@BA@@@@BABA@@BA@@@@BA@@@@B@@A@@B@@AB@@@@AB@@@@@BA@@BABAB@BABABADABABABADCB@@@B@B@D@D@D@BABA@@BABA@@BA@@BAB@@ABA@@F@D@@AB@@C@A@CBA@A@CBC@C@A@C@@BC@@@CBA@C@ABA@C@CBC@A@C@ABAAAAAA@@@AAA@A@@@@@@A@@@AB@@A@A@@@A@@@@@@BAB@@@@@B@@A@A@@@A@A@@@AB@@@@@B@@@@AB@@A@A@A@@@A@@B@@ABC@@A@A@AA@@A@@A@A@A@C@A@C@A@AB@@A@@B@BA@@@@B@@I@C@AA@@@@ABA@A@ABA@A@A@ABC@@@CBA@C@A@A@A@@@AA@@A@@BABA@@BABABA@@B@BCBA@ABA@ABA@A@@@C@ABA@ABA@@BADCBABAAA@A@A@E@C@A"],"encodeOffsets":[[128028,48615]]}}],"UTF8Encoding":true});}));