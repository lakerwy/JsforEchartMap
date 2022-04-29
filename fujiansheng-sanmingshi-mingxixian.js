(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('明溪县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350421","properties":{"name":"明溪县","cp":[117.201845,26.357375],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JEN@RCLARELENAJANARBPBJALETGHCLGLGLCJ@HCFGAECGAGAGCYEOAQBGHYBKDKHKFQHOPAH@RBL@LATDH\\FNJDF@BBF@DBD@D@@ABBHAFADA@C@I@GDGBAFEFCFGFEJEHAF@DBBB@BCFAD@DD@F@J@H@F@FDJHFBD@HEFEDEDE@@@AFEBC@A@@D@BBB@BB@BBBBBBBBBDBBBB@DBB@BBBB@@BBBBDBBBBBF@BBBD@BB@@DBB@B@B@B@D@DAD@D@@ABAB@@DD@B@B@BA@C@EB@@ABADABADAB@B@BAB@D@@@DBDB@BBBBD@D@F@B@B@HBB@D@HAH@D@DABAB@BAAA@C@CDEDABAF@LDPFFJFDDDFFBBFLBDHDBFDHB@BBB@JAB@B@BB@@DB@@@B@@B@@BB@@@@B@@B@@BA@@B@BBB@@BB@@A@@BBB@BBB@@@B@@BB@DADAD@DBBDB@@D@HFHJ@FABABE@GDIHCD@FBDDDFDHRBFB@DAJILMJEFAF@HBDB@FBD@DADCDQL@BBBFDHBD@DADCDABBDBD@JCJCDAD@BBDFDDFB@@D@H@DBHAH@DABA@CBAFC@CCEICEGAA@@@AACAACEAECAAC@A@@DE@E@ACACAA@CAEICE@@AE@C@ABEBC@A@AB@BABAD@@AD@D@BA@C@A@C@CBABABADBBBBBDBD@FAHBDDDFF@DBBAAC@A@CBABC@ABABA@@DKBCBADE@A@CMWACACBCBAB@DA@AAAAE@@CECCAAAAA@@A@@@ABA@@BABABC@C@E@@BE@A@@A@AACAAAAAA@AAKCEGAIEIIKEGAABA@@BADAB@@@BADB@@@C@CCCAA@ACAAAC@CACAC@CAA@CAAAC@GBE@A@CAACAC@@A@C@AAAACAAAA@CBGAA@@A@@@A@@@A@@CA@ACA@A@ABABA@@B@BBB@@@BADABA@@@@A@C@E@@@@A@A@A@@AGCCA@@A@@@@B@DBB@HFD@D@B@B@BABA@CBC@C@@AC@M@C@AAC@AA@CAAB@@BB@D@B@@A@@@A@C@A@A@@A@A@C@A@AAAA@@A@G@AAAA@ACEC@AAA@@AC@AAC@ACAG@@@G@G@CACAG@E@_DI@EBC@@BADA@CBG@G@CACCCICGCCAASGIAK@GAGAI@GBEBAACAIICAACBALEDCBAAAAAAAA@ADMHGBCBCACCA@B@@FCBCDABA@AAGCECE@E@EBA@CCECCC@ABADCBABG@G@EAEAEEECCAA@C@AB@AACCE@A@@BABA@@@AAACACAAA@ABABABBBBB@BABA@A@A@A@A@C@ABA@AB@D@@A@CACCAGACA@C@ABA@A@@@CCEEEEOOCCAA@ABCBABA@A@ACACAAA@A@ABBDBB@B@@A@@CA@@AAA@@@@A@A@@B@B@B@BC@CBADCDABAAA@CCA@@EE@@BAB@DBD@BA@AACA@CBC@AA@@@@A@@C@ABA@ADAB@B@D@DABABABABABABABABABABAB@B@BBBBBBD@B@B@B@@@BA@ABCBE@CBAAC@ICKEEIEIACCACCAAAACAIAGCCAAAFCFCFBNDJAFEDG@OASCMAEA@@@@A@A@A@@@C@EA@@C@ABC@C@A@C@CBA@C@A@CAA@AA@AAA@A@CAC@ACACAA@CACACAEEECEE@@CA@BA@@@C@ECCASEIFEDADAFAPAR@P@RFNHL@NCRCN@PINKBQ@MBKNGTMHCPJPJLETINIZMXOLKVKXELCTAZGFK@OWAIASKKKDIRMDQFILEHQRALBNFFBCDAH@JFBDADA@EAEBAD@D@L@J@FABI@IBEDADBBBBBBB@BB@@B@B@BBB@BD@BBBAH@B@@B@@@BBB@@B@D@BADABAB@B@B@BCDADABABCBA@CACA@A@@AAA@C@CB@B@DBBBDBB@BB@@BCBGBIH@@@A@B@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@A@@@@@@@@@@@A@@B@@@@@@@@@@@B@@@@@@@@@@AB@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@B@@@@B@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@B@@@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@BB@@@@@@@@@@@@B@@B@@@@@@@@@XFNNDJAFEFE@GEEE@AA@AAAAAF@BCDA@@@AAAABEACC@C@ECC@OHKFEEDGDEEC[CYBA@A@EBADBBAFABC@EA@EBAAAC@@@CDE@CAG@@C@CFICCCAG@C@AFEFDDBB@DAFADC@CACC@CAGCCCACCC@A@AD@FADC@AAAE@A@AB@BC@C@ACACECEACC@CBA@C@OEQ@SFSXEZaRE@EBCFCHAHAJ@DBD@FB@HBFDCNCJEFIBK@A@ABABABAB@BAD@B@@ABABC@@@ABC@@B@BABA@ABABA@BD@B@BBBAB@B@D@B@B@BB@@B@BC@@B@BB@LBFB@FBJ@FB@HFHBJFFFDJDDFABEBGDGBEFEFCDAFBVPTBT@BEBGLELFHFANDHH@NDLHDLITAPDNZDLHIPIH@JPLBBBBBF@FADAD@B@BB@BBHCD@DA@GAIBGJEHAHCFGFAHANE@ADAJ@JAHAB@DAFCJAFBBBLCLMT]DOHILUHGTDTBJ@HGJKDKDIHCJ@LDNFDL"],"encodeOffsets":[[119900,27204]]}}],"UTF8Encoding":true});}));