(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('牟定县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532323","properties":{"name":"牟定县","cp":[101.543044,25.312111],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@B@D@HHDFBD@BB@BBH@BB@B@DBBBBB@B@D@@@B@@@BB@BBB@DB@BD@@@@@BA@ABC@CBABA@@D@@@BBB@@BBD@DBD@@ADC@@BA@@B@B@@BBB@B@BBD@@BBDBFBF@DAD@D@D@D@FAB@B@B@BBBBD@F@FADAD@DBB@DJBDB@B@F@NCFAAEACACCC@A@ABAFBFBB@@E@C@CB@D@DBDBB@D@D@CCAA@CBABBDFBC@KCEGGBEDODC@AA@CCAEAMBKFEHENMPK@CGGACFERIHCD@D@DDFDLHF@FA@CBAD@DBF@BABC@EBA@K@G@ABABAB@B@B@DABA@A@AA@CAC@AAAAAAACAICS@G@E@A@AFE@AAC@C@A@E@ADC@EVURMFOCK@I@ABA@@@A@CAAECAA@B@BABMFCBEDABA@OAGAKCQGMGOGGCKGKEKEIGKEMKIIACE@KGGGC@AJADCBCE@IIAG@CAMCIDCBC@E@CA@ACAG@EAKAEAACBADBF@DA@C@CACD@F@DABEHEF@DU@GAE@A@@FAB@FAB@@AGEAA@@@@D@FBB@@@@AA@CAA@AAAECCICIEEEGAIAA@ABABAD@DAD@B@@A@CAAAAAB@BC@@@A@ACAMEA@A@@B@BA@@@CAA@@ADCBAACGEA@@@ABA@A@@@A@SaC@C@CEDADERCPBR@N@JEFIDEDEFG@IFGBGBIAKAM@CBBB@D@DCD@D@DBDADABA@CGI@A@@BAB@BA@A@AACCCGC@@@@DABA@@@C@AA@C@A@@A@@@CBAAA@@A@A@CDA@CBG@AA@@BAB@@A@@@A@@AA@@ABCBAB@@A@CC@AA@C@ABCDA@CBA@A@A@AAA@AA@B@@@BBB@BAB@BGDABA@@A@A@A@AB@BAB@@A@EC@A@A@@A@@BAB@B@@@@AA@CAA@CBCHABC@AB@B@B@B@BA@A@A@AA@A@E@CBA@A@@BA@A@A@EB@FEBE@AGGCCEACA@@@CBAROHCLGDCDE@CCCCAMECCAABABA@A@CA@A@A@@AAABCBCA@@@AAA@A@A@CAAAA@BABA@@@AA@A@@@ADA@A@E@C@AAACA@A@A@A@A@@@A@@D@BA@A@@@@@@@@ABCA@@AGACCA@ABCFCBABA@AAA@@AB@BABA@A@CA@OEEAECCCA@E@CBEBCHC@EBA@CACAAAA@EBABABBBFDBB@D@NADADABCDGFGBG@G@G@C@ABEBCDKLGLADC@CAICEBA@CBADADGF@BGLCBEHC@E@I@A@I@CBABAD@BABEBE@ICCAI@A@@BABA@CAE@E@C@EBABCAOKEAC@A@AB@BA@E@E@CD@BABBDBD@BABABA@@BCJ@D@BBBB@DBBBBBBB@B@BDBBBB@F@F@BBBBBBABAB@D@BFHBBB@BABABA@@B@FDBD@B@@GNAD@F@B@F@DABABCBA@@B@@@B@D@@A@A@AAA@AA@A@CACA@ICCAA@CBCBCD@B@@DD@B@BCDGHGFABBBBD@D@BAB@B@BFFBDBDABABA@KACAA@@ACEAACAA@C@EDC@A@AA@@BABAH@BAB@BABCBA@@@ACKAABA@AB@HFDBB@B@@@@@@CGKAAAAE@E@C@AA@ABABA@C@G@C@@BA@CAAAACBCB@@A@BABC@@BCQMCCCAIAMAGACAC@ABCDA@C@CAIEE@@@AACCE@CBAB@BILADAL@TBNBPHLJNDJJJHLHNBJ@DORABSJSP@DFHHJ\\ALD@DBBB@B@DDBD@D@BABEFAHABC@AB@B@@@BHB@@@BA@C@CAA@A@AB@BABABAFABAB@B@D@@@BA@ABA@A@ECC@@AA@CAC@@BA@@@CACCA@@@@B@@DF@@AB@@AAGCA@A@@@@D@BA@C@AA@@AB@BAB@@@DCX@FADCFAD@BDFBBBDBJ@FAF@B@DFDHDBBD@D@D@@A@@@@@ACAECCA@C@IAC@CCEAAAAB@D@BBDBDFBBDBB@DADCBCDCB@B@DBB@B@BKJGDC@CDABADAD@D@BBFDB@BBBADADABAB@D@B@B@DBDDBBB@BABADEBCB@BAD@D@@A@A@A@@@AB@DBD@ND@@BA@@@AA@CC@@BAF@D@D@DB@@BFBBDBBBBF@@FFB@B@DABA@A@A@C@C@@B@DDFDFDHDBB@BADABABAJAF@B@B@BDBHBBBDB@DBLCF@B@@@DAJAFEFADCF@D@B@BFDBBADA@A@C@CCAAAAABBBBD@BFBDDBBDBFBB@DADCDCBA@C@CB@BADADBDD@BB@BADABAFBB@@CBC@G@CB@BADBJFBBB@BQHOHC\\cDAHJDFBBABCDBB@DD@DBHHDBDADAB@@B@D@D@DH@DDDDDD@HAB@DERBFBD@D@BADABC@C@A@CBAD@FAF@FGJQRQN@DDBD@DBBDB@B@AA@C@A@ABAD@PBJFFBH@D@FCB@D@B@BFHJJHFHBF@DABA@@BB@@@D@B@DBB@DH@D@BAD@BB@@@JBD@DBFBB@B@B@D@B@F@DBBA@@D@HBF@F@BAF@BAB@B@@B@@@@@B@@@B@@@@B@B@@@B@BABA@@BFB@B@BAB@B@B@B@BB@@BAAQB@@AB@@BB@DFFFBHBDCBAD@B@D@B@BBBBABBAD@FBDBDB@B@DABAD@B@DBFBRJ@@B@B@B@D@@@@@B@@@@BADABAJ@@@BABADAB@B@B@B@BBBDHBB@BFF@B@@@BADAD@@@BB@@B@@B@@@H@F@D@DBBBBBDBJFHB@B"],"encodeOffsets":[[104104,26240]]}}],"UTF8Encoding":true});}));