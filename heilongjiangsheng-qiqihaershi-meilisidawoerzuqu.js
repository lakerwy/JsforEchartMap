(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('梅里斯达斡尔族区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230208","properties":{"name":"梅里斯达斡尔族区","cp":[123.754599,47.311113],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACEGCECEAACAEAGCEAGEGCEGAC@ABABCDE@ABIBEBABCBCDADAFAB@D@DBBBDDB@DBD@D@BABADA@C@C@CCCACEAG@E@E@G@GBGBA@EBA@CAEACCEACCCCACAEAE@C@CAAAACCKEGCECACAA@C@ABCDEBEDCBAHGHG@CCGAACCEAEAGAEACCCCAC@C@ABCDA@C@CAAACC@E@C@EAC@EAEAEAECAACC@C@A@CDCJGFEBADCBE@@BABEBABA@A@A@AAACAAAAC@ABABCBADC@ABA@A@A@AAAA@CAC@CAI@IAICCAE@CAE@CBCBADCBEBE@GAC@CACCE@C@IDGDE@E@C@E@IBE@EAEACA@ABE@EAACCEEIG[]GKISGCEAGCGCCA@A@@AABGBAD@F@FABABABC@ACE@ABEDEBCAEACAACCE@E@G@E@EAGACACCEECCAEECECEAGCICGEGEAGACAEBE@E@EACCACAC@CBA@GDIFEFEDCBEBE@EACAAAAA@C@C@CAAAACAECCAEC@C@CAC@ACCGECCAACCEAEEBAB@B@@@BAB@D@D@@@B@B@B@BBB@BD@@B@B@@@@@@@@@@@@AA@@@@A@@@@@@@@B@@AB@@@B@@@@@@@B@BABADCBCDEDCDEDC@@@@@@@ABA@@CECE@@AK@E@CAI@CBABCHCDABC@EAAGEAAC@G@E@CAEACC@A@ABG@A@AAACCEGAACAAACACAA@C@A@ABADCB@BABCBC@CAA@GCCCAA@AACBABADAFCHCDC@CACCCIEEAEAEBQBE@C@CAAAAACECO@G@E@ECEKKGOEEGOGMEIACCIAA@@AC@AAA@A@@AA@AA@@AAC@@@AAAAA@A@AA@@AAA@A@@AA@@@A@@AA@@@AAA@@@AAA@@@A@@AA@@@AA@@A@A@@@@@A@@@ABCDKBGBOACMQGGGOEMEICGGEKAMAIBABCBELEHCHGBGBEBGAICGAE@EAACCC@IDMBEAGEECCOCQCK@QBKBKBC@]EOAG@@BBB@@BB@@@B@@BB@@@@@B@@@B@B@@@@AB@@@B@@A@@B@@@BB@@B@@@BB@@BB@BB@@BB@@BB@@B@@B@@@@@@@B@@@B@B@@@BA@A@@@A@C@A@@@A@AAA@A@@@A@AAA@@@A@A@A@A@@@@@A@AA@@A@@AA@@@A@@@@@A@C@C@C@C@E@ABA@CD@@CDADAFAF@BBBID@@@@@@@@@BCBEDA@@@ABCBAAA@AAAAA@AAAA@@A@ABA@A@A@A@AB@@A@A@@@A@@@@@A@@A@@@A@@A@BA@@@A@@BA@@@@B@@ABA@@@@@AEAAAAA@@CAAB@@EACA@BA@A@A@@B@BA@@@@@CDA@@BABCFA@@@@BB@@@@@AB@BAB@@@@@@BB@BAB@B@B@@@@A@@@AB@B@@AB@BA@@@A@AAA@AA@@C@EAA@CA@@ADADA@@BB@@@@BABCDAB@@A@CFCH@BCJERCH@BAHAD@B@@@D@B@AB@@@B@B@FDB@@B@@AB@BA@@B@@@BA@AD@@JHBB@@E@@HBF@@@@D@@AFA@@@FFDDDABBBBB@@@BBB@@C@IBABB@BD@@@@@@@@@@D@@BE@@B@DB@@B@@@@AB@A@@@@A@@@@@BB@@MFDFABCB@@A@@@@@@@AB@@@@A@A@@BA@@@A@@@AB@@A@@@ACGEIJCAIBOFA@@@E@EBE@C@@D@DBJ@FBF@FBB@B@B@@AB@B@B@@@B@B@@@DBB@@@DBB@@BDBBBBBB@@DBBBDDB@DBBB@@B@BB@@BB@@@D@@@B@B@B@B@D@FAD@B@D@B@DAF@F@F@F@B@B@BABBBAF@B@@DHBFDD@BBBBBDD@B@@CF@@CHEH@BCF@@@@DBB@D@B@DBDB@@@@@B@D@B@B@B@B@DB@BBBBB@@D@BEDCDEFGDCD@@@@@@@@@@A@@@@BA@@@A@@BA@@@@@ABAB@@CBCBIDEBEB@@A@A@CAA@@@C@AB@@@@B@BBBBDB@BBBDB@@@BDBBBB@@BB@@BDBHF@B@@B@@B@@@@BB@@BBBBB@DBBBB@B@DBB@@@BD@B@D@D@BBF@@@D@BD@B@B@B@DBBB@@BBB@@B@@B@@@B@@@BB@@@@@@B@@@@@B@@@@@B@@@@@BB@@B@@@B@@@@@B@@@@@@@B@FBLBD@JBJBD@ADAF@B@@B@@@B@@@B@@@@@@@@@BB@@@@@@@@AB@B@@@@@B@@@B@BA@@B@B@B@B@@@@@B@B@B@BA@@BABABEHEDADMDcNmRaNSHIDMFA@A@A@@@@BBBB@B@BBB@B@B@B@@B@BBB@BBB@B@B@B@B@B@@@B@@@B@BB@@B@B@@@B@@@@B@@B@@@BB@@B@B@@BB@@@@BB@@@@BBB@@BB@@@B@@B@DAH@FAH@H@D@D@BA@@B@D@F@F@D@@DBD@D@J@DBD@F@F@FBF@H@JBB@D@H@D@HBF@F@D@DBD@D@D@HBH@F@F@B@FCFC@@@@DAFCDADAFAHEB@@@BBDDDFDDDFDFBDDDDDDFBDDFFFBB@B@B@B@@AB@@AB@@ABAB@@@B@@BBDBDBDBHBJFF@JFJDDBB@BBB@BBB@B@B@B@BBB@B@D@BBD@D@B@BBB@B@B@DB@@B@@@DAB@@@B@DBD@B@B@DBD@@@D@B@B@DAB@B@BBB@B@DBDBDBHBFB@@BB@@D@HDDBFBB@FBDBDBDBHBFBHDFBHBDBDBHBDBFBHDHBFDHBB@FBFDHBFBHDFBDBD@FBHDDBDBHBHDF@DBDBJDFBFBFBFBFBHDB@DBHBFDD@FBDBDBDBHBFBBBDBD@DBDBDBD@DBDB@@D@BBDBDBHBDBFBB@B@BADCJCBAFCBAFCB@@AB@FABADCFABABAB@DBD@DBD@FBB@BBD@B@BBFBB@@@DBFBJBJBLDLDD@DBB@B@BB@@@DAD@BAF@BAD@DAFAD@DAF@DAB@@@BD@D@D@F@D@D@D@D@F@D@D@D@F@D@D@F@D@B@D@D@B@F@D@F@D@B@@A@@@ABA@ABC@A@ABC@ABC@CBC@CBCB@FBF@H@H@FBH@F@B@D@HCJAHA@@B@@AB@@A@ABA@ABA@ABA@@BAB@DBD@@@@AB@@@B@B@F@HBB@F@F@B@@@B@@@B@B@B@B@D@BBB@F@@@D@@@B@@@@@FDBDFDDFFFFFDFBBBBBBFFDDDD@@BB@@BB@@@@BB@@BB@@BB@@@BB@@@@BB@@BB@BB@BBBBBB@BB@BB@@@BBBBBBBB@@B@@BB@@BB@@B@@@@B@BBBB@@@BB@@@BB@@@@BB@@@@BBBB@@BB@@BBDB@BBBB@@BB@@@BB@B@@B@@@@BB@BB@@BB@@BBBB@@B@@BBAF@B@D@B@B@@@B@@@@@BB@B@@@@@@B@@@B@B@D@D@B@B@BAD@D@D@F@F@D@DAD@A@@A@@@C@@BE@@@@@A@AB@@@BABAB@B@BAD@B@D@D@B@HBF@D@FA"],"encodeOffsets":[[127294,49014]]}}],"UTF8Encoding":true});}));