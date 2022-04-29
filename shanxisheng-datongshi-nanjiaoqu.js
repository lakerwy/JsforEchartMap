(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南郊区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140211","properties":{"name":"南郊区","cp":[113.16892,40.01802],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@AA@AAC@AB@AABABC@A@A@CBABADCHEBABABAD@BADABA@ABABG@C@A@AA@AEAA@A@CCAACAGAA@ABC@A@@BADEDGBCBE@A@AAC@@AAAACAGCCAA@@@A@@AA@AA@A@AAE@C@CBA@CBEFIFCDEFEBC@ABAAA@CA@AC@A@@ACAK@AACEE@@ICCCCAAAAA@AAACE@CAA@CAGAAACCC@A@CCGCEACAE@E@GBEAGAABA@ABCB@@A@EB@@ABAB@B@BABABABA@ABADCDA@ABA@AACBABCBADC@A@A@CACAEAACA@A@@BABA@AAA@A@ABC@CB@BA@AB@BEBADABCB@BCBCBC@AMAEFGPCHSBM@OAGBMNONOPIJIBWBKBMNULSDSDYFUDMBMEIGOEKEIIKIQICĆB@R@JADDFDH@BA@@@@B@DC@CEAEC@CDAF@@@@@@@B@@@@@D@DABC@E@A@@@@@@A@B@ACJH@@@@DFH@RBCFADADCFAJDDFBNCL@NPQNQJnlDC@@@@@@@@@@BADAF@R@DA@ABM@ABADAH@B@BAAI@@@@AG@KJFHBF@HCD@D@DBDBF@F@FADCDCBB@@B@ADBB@@AB@@@B@@@@@@@@@B@@@B@B@@@B@@@B@@@@@@AB@@@B@B@BBB@BAJ@B@DABBD@BAB@B@F@BBF@@@B@DBB@D@@@B@@@B@B@@@BBB@BADDD@B@BA@@B@@ADAJAF@D@B@@@BAB@DAB@B@B@B@@AD@BABAD@B@BA@G@AB@@AB@H@BEFP@A@A@@B@B@BAD@B@B@BB@@@BBB@BBBDDBB@BB@B@D@DAP@FAD@DAB@FCB@B@@@B@BB@@B@@@@@DE@@@C"],["@@MGEAOKIGQEQEG@KCO@U@I@HODSBOBQ@I@UEIAE@G@QBWAS@I@MEI@O@IFOJG@ECEE@KHK@EEEGFKJMFEHGCI@IBKDKLIJAFAJCDFJTRHF^CXB\\FJDNFPHJLJPDJBJBN@DAHGFGHQHKBOCWA]FGJBHLFJH@F@F@BBBCF@DBB@DADA@GFGHAB@BABCBAB@DAB@D@DBD@D@D@DADADABBBDDF@DBHBBBH@B@BBDHBB@D@FA@@BB@@BB@B@FBHBLDD@DBLBDBBBBB@BDF@B@D@F@D@BBBDBD@BDBDJPDH@FBB@BDD@BBDBF@B@@ABABCDA@A@A@C@A@A@@@@@ADAB@@DDDBBBDBDBB@BBBAB@@ABABA@AB@D@B@J@FAF@B@@@@@@A@@@AEC@@@@@A@@BAB@DCB@@@AA@A@A@@B@D@@@B@@@BA@@@AA@AA@@A@@BA@CBA@@@AA@A@A@@BC@@BAB@B@BBB@@@@@B@BA@@BB@B@@@@B@DADAB@B@B@@@B@@B@@@DB@BB@@@BBBBBBBDBB@BAD@FA@ADC@@BADCDADCBA@C@ABCBA@AB@BBBB@D@BBDDDB@@@BBB@BABABA@AB@D@@B@@CDAB@F@D@B@BAF@BBD@B@@BB@@BA@@@CB@@@BBB@@@HCDAB@BABC@AB@BB@@BAB@@@B@@@@B@B@@@B@@B@BBB@FABAB@B@BAB@BCB@B@BBB@@B@@@B@B@B@@BB@@B@HCBABA@BB@DBDDBBBB@B@H@@B@@@@@B@AC@ABA@@B@DA@@BB@@@B@F@B@@@B@BABABA@@BBB@B@BB@@BB@@AB@B@@@@BBDDFB@@@BBB@@@F@F@D@@@DA@@DE@A@A@ABA@AB@@@FDB@@@B@@@BAB@B@B@B@@BBB@BB@D@@@B@@BBBBABBFB@@BDB@@B@B@B@@@BAD@BB@@@B@B@D@@BDBB@B@@@@@@A@A@AB@@@B@FB@@BA@AB@BAB@BA@CBA@@B@@@BB@@B@@@BAD@F@DBBA@@BABA@A@A@AAA@@@A@@B@B@BA@@BBB@DBDBB@B@B@@A@@@A@@BA@A@A@AB@@AH@B@@ADAB@DA@@B@@ABA@@B@D@B@BB@B@@@B@D@@@B@@B@BBB@FB@B@@BADABA@B@@BBAB@BBD@BB@@BB@B@BBH@FBB@F@B@B@D@BBB@D@JCB@B@@@BB@@@@@BABAB@@AB@@@@EDA@@@@B@@DBJFFFDDBBBBAFAD@DBB@BBBB@BB@B@BBB@@@@@B@@ABA@A@CB@@@B@@@@B@B@@@@@AB@@B@B@D@B@@@@@AB@@@BB@DA@BD@@BFFDB@@AB@F@DDBDDPDFDBF@D@D@B@DB@DBBB@F@BHLBD@B@@C@CAE@ABC@ADC@CB@BA@@B@@@B@@AB@@C@@@AABAAA@A@@A@@@@@@@AB@B@@CBA@C@A@A@ED@@C@@@A@C@@@A@A@ABCBEFCFAD@B@B@B@B@@B@@AB@BA@ABAB@B@@@BB@@BBB@@@B@@@AB@@EB@@C@@@@@BB@@FA@B@@BB@@@B@@@@ABABBB@@BB@@B@BAB@@@B@@@BB@@D@B@HDBBD@DB@@@B@@ABA@@@@BBBB@D@@@B@BADCB@B@DB@@@B@@@@CBA@B@BB@BBB@B@@AF@B@B@@BB@B@B@D@BB@B@@AB@@AB@@@HBB@B@BAB@BA@@BCBEBA@C@A@C@A@@B@@AB@@BD@@@@@@A@@B@@@B@B@BA@@BCBADADABA@@FE@ABAB@BBDB@@BBB@B@FBB@DADAFCB@@AB@@@@A@ACG@A@ADEHG@@@AAA@A@AB@@ABABA@A@AAAAAII@A@@@@@AF@B@@@DCBA@@DAB@BBB@BB@A@@@A@@@AB@B@D@J@B@FBDAF@B@@A@@@ACEACAC@AECA@@A@AAC@AAAAAA@AAA@A@EDA@A@A@@ACEAECG@A@A@@AAAAACACAC@AACA@@A@@@ABC@@B@H@DAB@@@@CBA@A@A@AA@@AC@A@E@AAA@ACAC@E@A@A@A@A@C@@@CAA@AAI@@BABE@@B@@@DAF@@@@AB@BA@@BA@A@AOCFCBE@C@@@@@MBCACAAA@C@C@CBC@AHAFC@@@A@@@@@AA@AA@@@@@@@@MC@@@@@@A@AAAE@@AA@@@@@@K@CAEE@A@EBABC@A@ASKKGGICEBGDEHEDCmkIHCDCDGNQ`EHGDIDI@GCEAACBCD@@C@ACAAABCACACE@C@IDMBM@IGE@@ECACCBCF@FBDA@C@EGHCAEBIDEACACAEEEACBADIDK@E@CBOJG@G@IGCACCCCCACA@C@AD@DAF@FAF@ACCAEABAF@BAAC@C@GB@D@NBD@F@LBRAH@HEDG@GDEHFDBDCBADGDEFCFBDBDDDBBDFBD@L@L@HADą"]],"encodeOffsets":[[[116107,41106]],[[115908,40890]]]}}],"UTF8Encoding":true});}));