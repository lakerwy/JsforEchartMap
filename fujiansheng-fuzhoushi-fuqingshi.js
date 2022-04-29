(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('福清市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350181","properties":{"name":"福清市","cp":[119.376992,25.720402],"childNum":51},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@"],["@@C@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@ADBABBB@BA"],["@@HFDDDF@@FB@@B@@@@AAABACCCIGIAAA@AAC@A@AB@BAB@BBBBBDD"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@B@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@@@@@B@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@B@@@@@@@@AA@@@@B@@@@@@@@"],["@@@@@@@@@@B@@@@@@A@@@@A@@@@@@@@@A@@@@@@@@B@@@@B@@@@@"],["@@B@@@@@@@BA@@@@@A@@@@@@@A@@A@@@@@A@@@@B@@@@@B@@@B"],["@@@@@@@@B@@@@@@@@@@A@@A@@@@@@@@@@@A@@@@BB@@@"],["@@@@@@B@@@@@@@@@@A@@@@A@@@@@@@@@@B@@"],["@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@B@@@@@@@@@@"],["@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@"],["@@@ABAA@@AA@@A@@A@@@@@A@@B@@BB@@@B@@BB@@@@B@"],["@@@@@@@@@@@A@@@@B@@@@@@@@@@@@A@@@@@@A@@@@@AB@@@BB@"],["@@BB@@B@@@@A@@@A@@@@@@@@BA@@@@A@AA@@@BA@@@@B@@@@@@@B"],["@@B@@@@@@@@@@A@@B@@@@@@@B@@@B@@@B@@A@AA@@AA@A@@@AA@B@@AB@@AB@@@BBB@@"],["@@DB@@@B@@B@@B@@@@B@@B@@B@@@@AB@@@@AA@@A@@@@AAA@@@@AA@@@A@@@@@A@@@@B@@"],["@@@@@@@@B@@@@@@@@@@@@A@@@@A@@@@@A@@@@@@@BB@@@@"],["@@B@BB@@@@B@@@@@@@@@@A@@A@@@@@AA@@@BAA@@@B@@@@@@@@@@@@"],["@@@@BB@@@@@BB@@@@@B@@@@A@@@@@AA@A@@A@@@@@@@@A@@B"],["@@@@@@@@@@B@@@@@@@@A@@@@A@@@@@@B"],["@@AB@@@BA@@@BB@@@@B@@@@A@@B@@A@@A@@A@@"],["@@A@@B@BB@@@B@@A@@@A@@@@A@@@"],["@@@B@BBBB@@AB@@@@@B@@@BB@@B@@@@@@C@@@@AA@BA@@@A@@A@AA@@AA@A@@B@B"],["@@A@@@@B@@@B@@@AB@@@@@@A@@@@@@"],["@@B@B@@@B@B@B@@@@@@A@@B@@AA@@AA@@A@@@@A@@@@@@@A@@@@@@@A@@@A@@@@B@@@@BB@@A@@B@@@B"],["@@@B@B@@@B@@D@BAB@@ABA@@AA@@C@A@A@@@@@@B@@"],["@@@B@BB@@@B@@A@B@@B@@@@@BA@@AA@@A@BA@@@AB@@AAA@@@A@@@A@@A@@@@B@B@B@@AB@@@B@@@@@@A@@B"],["@@@@@@@@B@@@@A@@@@A@@@@@@@@@@B"],["@@@@@@@B@@@@@@@@B@@@@@@@@@BA@@A@@@@@A@"],["@@@@@@B@@BB@@AB@@@AA@@A@@@A@A@@B@@@@B@"],["@@@@AB@@@@@BB@BA@@@@@AA@"],["@@BBB@@@@@B@@@AA@@A@@@A@@@"],["@@@@@@@B@@B@@@@@@@@A@@@@@@@@@A@@@@A@@@@@@B@@"],["@@AB@BB@@@BA@@@BB@@BB@BB@@B@@A@A@@@C@@AA@@@AA@AA@@AAABA@@@@B@@BB@B"],["@@AB@BB@DBBBB@@@B@B@BA@@@A@@A@AAAA@@@AAAA@ABAB"],["@@@@BB@B@@@B@@B@@@@CBAB@@@@@@A@@AA@@A@A@AB@B"],["@@A@@B@@@@@B@@@@B@@@@@@A@@@@@AB@A@@@@@"],["@@@@B@@@@@@A@@@@@A@@@@A@@@@BA@@@AA@@@B@@@@@@A@@@@@@B@@@@@@@@B@B@B@"],["@@ABABA@A@@@A@A@@@A@A@A@@BBB@@B@@B@BAB@@BBB@B@@BBB@BB@BBAB@BBBDBBBB@B@B@DBFBDBB@B@DB@@@A@@@CAE@C@C@ACC@A@AFEBC@AAAAAE@CBABC@A@E@AAAB"],["@@B@@BB@@@BAB@@@@A@A@@@@AAA@A@@BA@@B@B"],["@@BD@@B@@@@@@CA@@@@@@A@@@@@@@@A@@@@@A@@@B@@@@B@@@@"],["@@AA@@AAA@@@@B@@@@BB@@@@@@@B@@@@@B@@BD@@B@@@B@@A@@B@@AB@@CA@A@A@"],["@@@@@@@BB@@A@@@@@@@@@@B@@A@@AA@@A@@@@@AB@@@@@@BB"],["@@@@@@@@@@@@@BB@@@@@@@@@@A@@@@BB@@@@@A@@A@@A@@A@@@@@@@@B"],["@@@@@B@@@B@@@BBB@B@@BB@@B@@@BBB@@BBBB@@AB@@@AA@@AA@A@@B@@CBAB@BADAB@@@BA@@AAC@@@A@AB@BG@I@"],["@@@B@@@@@B@@@@B@@A@@@@@@B@@@@@@A@@@@A@@@@@A@@@"],["@@AB@@@@@B@@B@@@@A@@@@B@@@B@@A@@@@A@@@@@A@@@"],["@@EJA@A@CAA@A@ABADBBBDBD@DAFADA@@B@@@@A@AD@@@B@BDBD@HAHAFAD@DFDJDFBFAFADAD@@B@DAFAF@B@@BBBBBB@BBBB@BAD@B@DBBBDBF@B@DAD@BADCDADADCDABABAD@B@B@H@DABABCBAD@F@DAD@B@@CAEECACA@@ACEAEECCCAEEACA@@@A@@D@D@DA@CBE@EBABABA@GCA@EBCBCDADCFADEBC@CBAF@BAH@B@@CFEDGFADBBBBFBD@BADEFCB@BHAH@DAB@BABA@A@@@A@B@@A@A@A@@AAA@A@A@@@A@@BDL@DADEB@@EBA@A@@B@@@B@B@@@@@@@B@@@@BB@@@B@@@@@BB@@BCB@@ABA@@BAD@B@B@@@BA@@@@BA@A@@@A@@@EDGFCFCFEF@@@B@D@B@BAF@JBFBDBDDFDF@DBFDDBF@FAF@BFBHAJ@BB@BCDEBC@CDEFAJCJBDNBDBBDADADADCAA@A@A@@B@B@B@@@B@B@@A@@@@B@@CBA@@@A@@@@@@@A@@@@@@@A@A@A@@@@B@D@@@@@B@@A@@@AA@@A@@@@@A@A@@@@@A@@A@@@@@@@@BA@@@@@@AAA@AA@B@@@@@@A@@BA@@@@A@@@A@@@@@@AB@BBFHFNLBB@@B@DB@@@@BBB@@BJFDFDHBBBD@DABCBEBE@A@EBA@CBCDADA@A@CCEAAAABADABABK@K@IBG@EAGECAAACBAD@FABA@CACAAECCC@C@CBCB@@ABAB@B@D@B@@@@@@A@@@@BAHAD@D@B@FBDBDBDB@DABCDEBAF@DBFF@DABAB@DDBDBFADBBBBFADBB@BFB@@B@BFFBD@DAF@HDHDJBD@B@@@@CB@@ABAAA@@@AHAHCFCD@FFFBB@FCDAFAB@DBFBDBBBFD@@HFHFBDAF@B@@AB@B@DABB@@BBFFBDBD@HBFBD@@@HBBBBDBFDDHBFDDBBFBBD@DBD@B@BBB@DD@@BB@@BABADCB@JEJKDEDA@BBFBP@B@@@B@B@B@BBBBBB@B@@@BABABBD@B@@@B@BBD@B@BADA@@BAB@BBBBBB@@@B@@BB@@@@BB@@B@B@BABBLHJDHBB@@@B@@C@GDGDG@G@EDEHCD@@@DBD@FDDDBBBDDDFDDBDABG@C@CDCDCDEBE@CBEDAFAD@D@B@FCJGFEFCH@FFHHFBHAFCF@@A@@BABC@A@A@A@ABABA@C@A@@BAB@F@B@B@D@D@F@D@B@@BB@BD@BBDBDBFFDBDDNBFBDDFFFBDF@FDDDDFDBDDD@BABA@A@CBEDC@E@ED@DBFDD@B@DCBAJEHCFAB@@ADC@CAEACAE@ABABAD@DAF@DAFABA@@BC@CBC@AB@F@D@HBB@@@D@JBHBBDB@B@BAB@@AFAD@BBBB@@B@DBBABABAF@FBF@FBB@@@DADBBD@DD@BAFAHADADABCBAD@DBDABC@EACACCAE@ECAA@ADA@@@@BC@@CCECAAAADC@@BCAA@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@D@@A@AB@F@DB@C@CBCFAF@H@JCHBFADABA@@DAFAFADADADA@A@ACACAAA@A@A@C@CACAECCAAACAC@CAE@CACBCDEBEDCBCDAB@DBBA@AACAA@@@A@@@@AAAEAE@GBCBGSB_F]BO@QA[GKAGCOAIC@CAGEAGCKBGEAE@IDGDEBKBIAIBA`BFCBCFEFAJFF@^EFBDFDDJ@FCBGAG@E@CBCDI@G@AAAAACCACCAEE@@@A@AA@@A@@DKB@B@@@B@B@B@DAB@FAFAD@FBH@D@J@DAFADBFBJDPNJBD@H@DABCFE@CACCM@ABAHEHEBABGDIHC@GAGFSBCBE@ECGGGCCAC@G@IDMFELKFIDC@E@EGE@A@C@CBADAJ@DBBBFFDFFFDDDBFBB@DABA@EAKBK@AB@lJ@MuMEAAA@GCK@CCEIEOGG@CC@CDCDAD@F@FADAB@F@BBBF@BB@B@D@FCDED@DAD@@@@FAH@B@DBBB@D@BBBAB@B@BBB@DABADE@G@G@CBCBC@A@ACEAA@E@E@AAAA@A@AACBCBC@CA@C@C@CAC@E@CDGFK@CDC@C@A@C@CDA@ACCCA@CBAAAA@CDCDC@EAGGECKAEACACAC@@A@A@A@@DAD@FBF@F@LDHDDDDDB@D@@@BA@@@A@A@AAC@AAA@CCCACAAAAA@AAAA@CCAEAEAGAECE@C@E@EBC@C@ABMBC@AAAAEAACCAEAC@C@ABCHCDGJ@D@DDBBBD@D@B@@@@BCDILCFELCJ@D@HBFBDDBDFDRCFAH@F@BABA@ABC@@DCB@B@D@D@DBDDDBB@BABA@EDCB@@AB@BBBBD@B@NAFADCDCBG@EAEAEECEBEAGCEAGBCFEB@DADADE@E@CBA@@B@B@D@DBBCBABEBEDG@A@ACACCAAEAEAAEACAE@AA@@AA@CCCAABE@CAAAAA@A@C@A@AA@@@AAA@@@@A@ABA@A@A@AACA@AAA@CAC@AAA@CACAA@AAA@AB@@@@@B@@@D@B@BBBBB@B@D@D@DEBEBGBGAKAGIGAGCA@AA@CACAE@AA@A@GBIFABAB@F@DDFFJLJRNDD@D@D@BADCHQVGFEBA@ABAB@HBFBLFRBHADABABEBE@A@AAC@E@G@IBE@A@AACIEKACEECECCCCG[EACDBTCJMJAD@DPJTT@HABEBABA@AD@DB@BVBFDBDFJ^AFGDMBI@OSAAEAiHCBABATABCDsVIFCBEBEAC@ACCEGUKsAODOFODIJO@EBI@G@EACCCI@CECBCDGHO@IGG[IEIDM@GAG@SBWTYPCD@F@fJZJRHFCDC@A@A@AA@@CAA@AAA@A@EBCBAB@B@N@F@@A@@@GEaSECAA@A@C@A@@AAA@CBA@E@C@AA"]],"encodeOffsets":[[[122367,26411]],[[122412,26381]],[[122450,26285]],[[122483,26194]],[[122330,26023]],[[122528,25978]],[[122375,25975]],[[122375,25972]],[[122337,25968]],[[122386,25960]],[[122491,25946]],[[122489,25944]],[[122479,25933]],[[122477,25932]],[[122416,26230]],[[122414,26223]],[[122478,26197]],[[122473,26208]],[[122479,26187]],[[122500,26143]],[[122499,26129]],[[122497,26125]],[[122495,26125]],[[122519,26069]],[[122511,26041]],[[122548,26022]],[[122542,26007]],[[122539,26005]],[[122438,26056]],[[122436,26036]],[[122442,26033]],[[122438,25999]],[[122455,26007]],[[122420,25975]],[[122403,25968]],[[122376,25971]],[[122470,25938]],[[122346,25914]],[[122355,25916]],[[122358,25920]],[[122351,25932]],[[122342,25940]],[[122331,25960]],[[122336,25979]],[[122230,26022]],[[122230,26020]],[[122245,26043]],[[122256,26046]],[[122280,26060]],[[122299,26064]],[[122082,26080]]]}}],"UTF8Encoding":true});}));