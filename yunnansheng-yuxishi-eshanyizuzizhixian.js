(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('峨山彝族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530426","properties":{"name":"峨山彝族自治县","cp":[102.404358,24.173256],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BB@@BB@@@BB@@@BB@AB@@ABA@@BA@ABADCFCDAD@HDB@@B@@A@EBABAD@D@@@BA@DBBBB@D@D@F@D@D@@B@@@B@@AB@BAB@B@D@BBB@@DBB@DBD@D@F@DAD@BAB@@@BABADEB@@A@AB@@AB@B@B@@BB@BB@@@B@B@@@B@B@@BB@B@@BB@B@@B@@B@@D@B@DBB@@BB@DDBD@B@@BB@@B@@BB@DBDBB@D@@@HCBABABAB@B@B@@@B@DBB@BB@@@BB@BDBDB@BBB@BDBB@BBB@BB@@BB@D@B@FD@@DBBBB@BBDB@@BBD@DDBB@B@BBB@@BFBF@B@D@B@D@BBDBB@BBB@B@@@BBB@B@B@@A@@B@@@B@BBB@@BB@@@B@B@D@B@@BB@@@@AB@@A@@@@@@@@B@@BB@@B@BBB@@@BB@BBBBB@B@@ABABABA@@BA@A@CBA@@B@BA@@B@@BB@@@BB@@B@@B@B@@@B@B@@@B@B@B@B@@@BBB@@BBBB@@BBDBB@@@B@B@B@@@@B@BBB@B@B@B@DB@@BBBB@@@BB@B@@@@B@@@B@BA@@BA@@BA@@B@@@@@B@@BB@@@B@BA@@B@BA@@B@B@B@DBD@B@D@D@B@BAD@B@BABAB@BAB@BA@@BCBEBA@QCC@AAC@ABABANDF@@BDB@@B@BB@@B@@@BB@@BB@BB@B@@@@BDA@@@@B@@@@BB@@DBBBB@@@@@B@@BB@@@@B@@BB@@@@@B@B@BA@AD@@@@A@@BA@AB@@@B@B@@@@ABA@@@@@A@@@AB@@AB@@AB@@AB@@AB@@@BA@@B@B@@AD@B@@@B@B@@A@@B@@@B@B@BBB@@BB@BBBB@@@DB@@@BB@@B@@@@@B@B@BBB@@@B@B@BB@@B@@@@BBBB@@@@BBD@@@BBB@@@BBB@BB@@@B@@@B@BABAB@B@@@B@@@BB@@B@BBB@B@@BBBB@B@@B@@@@@B@@@@B@B@@B@@BB@@@B@BA@@@@B@@@@@B@@@@BB@@@@B@@B@@@@@B@@@@@BB@@B@@B@@B@@@BA@@@@BB@@BB@@@@@B@B@@@@B@BBB@BBBB@@BB@@BB@B@@@@@@AB@B@B@B@@AB@@@@@B@@@@B@@@D@@B@@@@@@B@@B@@@@@B@@@@D@B@@@B@@B@@@BB@@@B@@@@@@B@@BB@@@@@@@@BB@@@@@@BB@BB@B@DAFDD@BED@BBBDF@B@BB@@B@B@BBB@B@@@@A@@@A@A@@@@@@B@@@B@B@@@BB@@BA@@B@@AB@A@BDCDEB@@@@A@EBEF@D@DBBP@LCF@H@F@DCDAH@LAFCFG@@@@HBBC@KFMDMBCBCBEBAFAF@BCCIJ@DCDC@@JMHGJAHGDILEHMDAF@HJHN@HFFFDBBH@PBBL@FRDZ[XMFGFKBCDGBA@C@ACC@ABALDF@F@FEJCF@H@LCFEFCFAFBD@HEDCBEDCDC@A@AEEECGCGC@@@ADABABE@ADAD@BCB@BBDEFE@ADCA@AEGCIACC@@AE@E@EFCDCAAGAGACAAA@CBEBAFBHDH@DBDBHCBADGJIHK@GBGBKBMDCDOFKBALBJBHCFGBA@C@EAECECC@C@ABCBA@CAE@C@CDADAFADAD@BABACAA@CA@CDCB@HKPEDGE]AWFENDLALELFDJPBLDH@BEJ@FDJBFCBEL@HI@CAE@CJC@IHCLCFGBGHEFALBHDD@@GDCDCHIDBB@D@FADEHEHGFCDBJ@HADC@CAIGK@@ACCICGFGEC@ABABABABAB@BAB@BA@@BAB@@A@@@ABA@@B@@@B@BAB@B@B@BA@@@AB@@AB@B@@A@@B@@A@A@@@AB@@@DA@@BAB@@AB@@AAA@ABA@A@A@@B@@AB@@AB@@@@BB@@BB@@@B@B@BA@@BA@ABADAB@@@B@B@@@B@@@B@BA@AB@@ABAB@DABBD@DDBBFHDFDFDDB@FCFIMKIIACBCAM@GBAFEDCBB@B@@@@@@@@@@AFBBBBFBDHLLDBDCGI@CFCDEH@DAHFFADBDBB@FC@C@GHEBIDEBC@@@@@AAAGEMG@@AA@@BC@@B@A@KEC@AA@@@A@C@@@CAACAAA@A@AB@@@BG@@CAACA@C@CBCBCBA@@@CA@A@AIEKEGACBCFAHABC@EAEBGFCDC@A@ACCAG@CAACACCAEAE@G@EACACAABCBEH@@EBETGLIB@BABADAD@BBDB@@B@BABCBGBG@C@A@CCCCCCCAAAACACA@A@C@A@E@A@CCCAC@CBC@CBCBCDA@A@C@EAECGCECE@A@C@CBCDABGBCBABAB@@@BDBBDBBDDDD@B@@CBABABABADC@ABABCBCBC@C@A@ABABC@CBA@ABCBAB@BDBBBABABCBE@GAC@C@CB@DEJADABA@E@MIEAEBCBI@EBCDABA@C@C@ECCACAE@E@CACDAB@@A@KCGACACCAAA@@A@ABCB@@A@@AA@ACAI@AA@A@ABCBEBCBEBCDEDE@ABCD@FAD@DBB@HBD@@@F@DBD@D@DADABABC@CAEACACAA@AAAC@AAEAA@AA@AA@GCECEAIAI@K@K@EAAAECE@CBA@EBABE@EAICGAGCIAIAGAG@E@GAA@@@CE@AECE@KAGAEB@HBJAFCBABCJEJGFAACAAGAMCIEA@@ABCBC@CBC@E@C@@@AAG@CAC@CCA@AAC@A@A@A@AAA@@ACACAA@@BAD@FABA@CBC@CDCFCDBJ@JDHDBFDCDADDFFHDJCFGFOJCJ@@ADA@C@EAAAABA@@@CAA@C@@@AFA@A@E@@@@@@B@B@@AB@@@@A@A@A@A@@@AB@@@BA@@@A@@AAA@@@@@B@@@@@BAB@DAB@@BBA@@@@BA@@@@@@BA@ABA@@@@@@B@@@B@B@@@BA@@@A@@B@@@@@@@B@B@BFDBDDD@D@DAB@BFBBJXNFD@H@D@FBHAJKHIBIAI@I@IGCKEIEBEFGDMHI@@FEBI@GDKHE@IEKAO@KEIBA@CDCBC@EBCB@@ABA@A@ABA@@@AAA@A@A@AAA@A@AAA@A@AAC@AAA@AAAAAAC@AAA@C@C@ABC@A@AAC@A@AAA@AAC@AAA@A@A@A@A@ABA@ABAB@B@@@B@BBB@B@BB@@B@B@BAB@B@BAB@BAB@BAB@@BB@B@BBB@B@BB@@BBBDB@@BBBD@BBB@BBB@D@B@BABIDG@CB@DA@AB@BC@AAE@EBCFAFABCD@BBDBBBBD@F@B@CDA@IHGDCBA@E@C@ABA@CBEDEBCBC@E@C@C@@@A@@B@BADADADAHABABCDEBABABCB@D@D@BA@ABC@"],"encodeOffsets":[[104323,24829]]}}],"UTF8Encoding":true});}));