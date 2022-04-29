(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('北票市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"211381","properties":{"name":"北票市","cp":[120.766951,41.803286],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@BABABABCB@BABAD@DA@@BAPGJMHGBI@MISAIHI@YNKAA@@@A@@FGBADC@A@@@ABA@@B@@ABADC@C@A@C@A@EBCBCDCDA@CBG@CBABCDMDSKGGIAKAIAKCGESSIUOCOFUJQF[CMEKGMC@@IIKDODAHA@AB@BA@@@@DB@@B@B@@BB@B@B@B@@@D@D@B@@@B@@@B@B@B@@@@A@@@@BB@@@@@@B@@@B@@@@@B@@@BB@@B@@A@@@@@@@BB@@@B@@ABB@@@ABA@@@B@@B@@A@@BA@A@@B@@A@@B@@AB@@@D@@@@@@@B@@@@@@@@@B@@@@A@@@@@@BAB@B@@AB@B@DADA@@B@B@B@@@@@BAB@@@@@NCJ@L@NHVFTDNF\\@ZGLELCHCDEBCJKBKDIBIJQ@OBGHIJCLCFAXKVG\\CVG\\EFAD@FEHE@G@EAE@A@AB@BABC@A@CBAAAA@@CGCCCA@@A@A@@A@CA@@AA@A@A@@CAAE@A@A@@AA@@@A@@A@A@@@@AB@@CAC@AAA@@BA@@DA@@@@C@A@A@C@A@AB@@@ABABA@@@AA@BAAA@A@@AA@@@@@A@A@@@@AAA@AA@@CB@@ACA@@AA@@AA@@AAA@@@@B@@A@CA@@AB@@A@A@@BA@AA@@AAA@@BABA@@@A@A@@BA@A@@BA@@B@@A@@C@CA@@C@@@@AAAAA@@AAA@@A@@@ABC@@AA@A@@A@AA@@ACAA@@AA@A@@@A@@B@@A@A@@AA@A@@AAA@@A@ABA@A@@DADAAC@A@@@@C@A@AAA@@@ABC@A@C@AAA@@AAABC@@A@A@AB@@A@A@C@AA@@A@C@A@AAAA@@A@A@@@AA@@A@@@CA@@A@@@@AAA@@A@@@@@AC@@@A@AA@@@BAB@BAB@@ABAA@@ACCAAAAA@@@AA@@AAA@AA@AA@@AAG@@@@@AB@@@@A@ABADC@@@A@@@@AA@@BAB@B@@@@@@C@A@@@AFBFAB@@@@A@@@@BA@@@A@A@@@@BAFA@@A@@A@A@@@AAAB@AA@@A@@AB@AACA@@AA@A@A@@@AA@@@@AAABA@@@@FA@@@@@A@A@AA@@AAC@@@@@@A@A@A@A@@@A@@A@@AA@A@@CCCG@@@A@@BA@@DABBB@@@D@D@@A@@BAA@AA@ABA@@AA@C@AAA@@AA@@@@A@A@@@A@AAA@ABC@AAA@CAAB@@AB@@CCCA@@A@@BA@A@@@@@@A@A@@A@@@@A@@A@@@@B@B@B@@A@@BA@@AA@@A@@AB@BA@ABA@@@A@@@@@@AA@AA@A@@AAA@A@@AAAA@ECC@AA@@@A@@CCAC@@@@A@@B@@AB@@@BBF@B@@A@CD@BAA@@@@AA@@@AACECAAABCBABA@ABCB@@C@A@@@AAAAA@@A@@@A@@@@@AC@@@@@@AAAA@AAAB@AA@@AA@AAA@@@BCB@B@@AAA@A@@@C@A@@AADE@@@A@@C@@AA@@@A@@@@AA@CBA@@@A@AAA@@@@ACBCE@@CA@@@BA@@@@A@AAA@@AAA@E@@@A@@A@@@@BE@C@AB@BA@@A@A@A@AACA@ACA@A@@@C@@@AA@AAAA@@@@@A@A@@AAA@C@@@@B@@ABABABCBA@@@AAACA@ACAA@@A@A@ECCAA@A@CBA@A@A@CBA@AAA@E@AB@@AA@@@AB@@@AAA@@@@A@@CBA@AB@@ADB@AB@@E@A@BDDBDD@@@B@DABCBAB@@CAAAA@@@AAA@@C@CBA@@AAA@@B@B@B@@@@CB@@EDA@@@@A@@@@CA@@@A@@@BA@@@@@@@C@@@AA@A@@@@@A@AB@B@@A@A@ABA@@B@B@B@@@@B@B@@@@@@B@@@@A@@@AB@@A@@@@A@@ACA@@@@A@@@@B@@A@@@AB@BAD@B@@@@@A@C@ACB@B@@@@@B@@@BB@@@@@@@AB@@AB@@AB@@@@@A@@BA@@@A@A@CB@@A@@A@@AA@A@@@AA@AAAA@@@EBCA@@AA@@@AA@A@@@A@@CEA@@@BBF@@A@A@@@C@AAA@@A@A@@IAEBC@A@@BA@@A@@B@BABA@@B@D@@AA@@A@@@@A@@AA@@@@AA@@@@BA@@B@BABA@@@E@EAC@AA@@CAAAAA@A@@@@@A@@@@@AC@@AAA@@C@@@A@@B@@@B@BA@AB@@AC@@EC@@ABAB@BA@@B@@A@A@EB@@A@@AAA@@A@C@@A@ACA@A@ABCBA@AAAAA@AB@@@AC@A@A@@BADA@AB@@A@CBA@A@@@@CACA@@B@BABABA@A@@BADC@@CA@@AAA@A@IGAA@A@A@AA@CAC@@@@@@@BA@@AA@@AA@@AA@@A@AAAACAAAA@@@@AB@@@@AA@@@BAA@A@@A@ABC@@C@@@CAAB@@C@A@A@@AA@@AA@C@A@EAAA@@BAAA@AA@AACEA@CAE@CBC@@CAA@CAAA@CBA@CBA@C@ABA@@@@@@@AC@@@@CAC@AACA@@@AB@@A@CAA@@AAA@AAAA@CAA@@BC@A@A@C@E@C@A@@AC@@@AAA@ABA@A@AAACC@A@A@@@AA@@@@@@ABC@@BAD@@@@@D@DC@@ACAC@AACCA@AA@AA@@CBA@A@@@A@A@@BB@@@@B@@BDA@@AC@@BA@CBA@@@A@@AA@@A@BA@@BABA@@@@AA@@@A@A@A@AA@@@@@A@A@A@@AABABA@@@A@A@AAA@C@AB@@@BA@@AAAA@A@@B@@C@@@A@A@@@@@A@@AA@@A@@A@A@@@@B@@@BC@A@@AA@@@A@A@@@A@A@A@AA@@@BA@@B@@ABA@@@AAA@A@@A@A@@@@A@@BCBABA@@@A@@BC@@B@@@BA@@@A@@BABA@A@AAAAAA@CAAA@@A@@@@@C@AB@@@B@@@B@@A@@@A@A@A@@@@A@AEACA@AA@@@A@@@@A@@A@@@A@A@@@A@AB@@CB@@@B@@EF@@AB@@@B@AABA@A@@B@A@@@@AAAA@@A@@@A@@B@@ACABAA@A@@AA@@@@BA@@@A@@@AAA@A@@@@@A@A@A@ABA@A@AB@@@AA@A@@C@@@@A@@AA@@EEA@@A@@AA@@A@A@@@ADAB@@C@ADA@ABABABBBABABAB@@@B@B@BAFAB@@A@@B@@@B@@ABBD@@@@ABABA@A@AB@BC@ABA@@A@@@A@@A@@@@@@@A@@@A@@@@A@A@AA@@@@@A@A@@A@A@@@@@@@AB@B@BA@@BAB@B@BC@@AC@@B@BA@@@@D@@ABAA@B@@A@A@A@AAA@@@AA@A@@AA@A@A@CAA@AA@@@@@AAA@A@@A@@@AAA@@A@@A@A@@AC@C@A@ABA@A@A@@@AA@B@BAB@@ABABAB@B@BBDBB@@@@@B@B@@CB@@A@@@@B@@AB@@@@@D@DAAA@A@@@A@AA@@AA@@@@C@@@ABQBSBIAMAAD@@@B@B@@@@@B@DCB@BA@@@@@@B@@@B@@AB@@A@EAAAA@@@AACC@ACA@@@AAA@A@@@AC@E@C@EDOJGNALCNGHGHGFMBW@SBODOHKHOBEBG@UB@HDFJJRVBJBNBFBBHBRF@F@LCBKBI@EAK@GBEHFLLL@@@@BBPRBF@DAFKJ]RMFAB@BBDFDTNFDDF@FKJYLGFCHBTBpBRBFHLVPNJHNERQLIPBPLX@VCLINQHMJEJCPG@CEIIEDANSDGFELKBINI@IIESDWZ_LKBOIOaSiKwCSJG@IIQCQHIJAHELKPIJGDC@E@GAEBIFWRGHGFEFADBJBFBB@BB@BB@@ABB@@B@@A@ABAB@@@B@@CBB@BB@B@@@@@BB@@B@BB@@@@B@@@BA@A@@BA@@@@@@BA@@@A@A@@@@@@BA@ABCA@BC@ABA@AB@@@@BBBB@@@BBB@@@@@B@B@B@@AB@@@BAB@@A@A@@@@@A@AB@@A@@@@@A@A@@B@@@B@@AB@B@BAB@@@@@@B@@@@@@@ABA@@@@@AB@@A@ABEB@@@@B@@@AB@@B@@@@@@BA@@@@B@@C@@A@@@@AA@@@@@@@@CDAB@@BBBDAB@@BB@B@DBD@B@B@B@@@B@BA@A@A@@@@@@BB@@B@@@B@B@@CBA@@BABA@A@ABA@CB@@@B@B@@AB@B@@@@B@@B@BAB@B@@@BA@@B@@@B@B@@A@@B@@A@A@@@A@@B@@A@@B@B@@@BB@ABAB@@@@CFAB@BBB@B@@@BD@@BB@BD@BDB@BB@BA@@B@BBBB@@@B@BABABA@@@DF@@BB@@BB@@CD@@@DCBEACB@@@@A@C@A@ABA@@@A@@@ABC@@@AB@@A@A@A@C@@@@@@D@BABA@@@@@ABA@@@A@@@AB@@@B@BB@@B@@A@A@AB@@@@CAA@A@@@@B@@C@A@AA@@A@@BA@A@@BA@A@AA@@@@AAA@C@@AA@C@A@@@C@A@AB@@@BAB@BCF@@@B@BABA@@B@B@@CB@@@BA@AB@D@@A@AB@@AB@@CAABC@A@@@A@@@A@CAA@@@A@@AAAC@A@A@@@AB@B@@AB@BAB@DAB@@@BBDBD@B@@@BB@@BD@@@B@@BAB@@@B@@BBB@BA@@@BBA@@B@@CB@BABA@ABC@C@@B@@@BBB@D@FBB@B@@@@B@@@@A@@@IBA@@@AB@@ADAD@@ABD@@BBBBBDD@@BB@FF@DB@@B@HB@@BA@@BE@@BA@BB@D@@BB@@BB@B@@A@AAC@@B@B@@@@@@A@@AC@AA@@@AA@AC@@AE@BC@@B@@@DBDBDBDDBBBDBB@DB@@BB@H@B@@@@H@BA@ABA@GB@@AB@@BB@F@@@@AFAB@BBB@@BDFB@B@@@@BBD@B@BBFDJDB@B@DBDBBBB@BB@@@@AB@BABB@@BDB@B@@@BA@@BA@BB@BADA@AB@BBBB@D@B@B@B@BABAB@B@B@D@B@BB@@BB@@D@DB@@B@@@@BBDB@BBBDB@D@F@DB@BBB@@B@B@BB@@@@@D@BB@BBD@@@B@DAJCDADAFCFAF@DAB@BAD@F@H@D@B@@AB@D@DBD@D@BBD@@@B@@@AB@BA@@B@B@@@B@BA@ABEDCB@@CBA@@@@@BBD@B@B@DBDBFDB@@BBB@@DDBB@B@@B@BBB@BAB@BAF@D@B@B@BBB@@BBB@@D@@BBB@@B@D@B@B@DBDDB@BB@B@@ADAB@@ABADAB@@@B@@DJ@D@@@BAB@B@@@B@BBDA@@FAB@@@B@B@@@DABAD@B@D@@BB@@@D@D@B@@B@@BBAD@B@@@B@@@@BB@@@@@B@@AB@@@B@BB@@F@B@BB@@@BBBB@B@BBBADBFDBABBB@B@D@B@B@@@BB@@BBD@DDDB@@@B@BBBBB@@@BA@@BEFAB@BCDCFCDF@DAB@@@@BB@DBD@@@@@B@B@BB@@BBBB@B@@@BA@@BA@A@@BA@AB@@A@A@A@ABA@AAA@AACC@@A@@@A@A@@AA@KFIHENNLPJ\\HVNTJTHXJPBNDRJPHPRRNfKNGRCLATJFBNJNJNDVJXLRJPTVFNBPDLJLLHNPDP@PAP@REZA\\PRBPBLFC@A@@@@@@@@@FFBB@@@BAB@@A@ABAB@DBBBFB@BDBF@B@@@BBB@@@@BABAB@BABCB@B@FBB@DBB@DBB@@@B@@ADA@@@@B@B@BBDDBB@@BD@@BBB@@@BAB@@@@@@AAC@@@A@@@@@@B@BAB@B@@@B@BBDB@@B@B@B@@AB@BAB@@@BA@@BA@@B@@A@@B@BA@@B@@@@AB@@@B@BA@@@@B@@AB@@@B@B@B@@@@@B@@@B@@@B@@@BB@B@@@@@BA@AAA@@BA@@@@@@B@@B@@B@@@B@@B@@@B@@@B@@B@BBB@@@@@BBB@@@B@@@@@@C@AA@@@@@@@B@@@BB@@B@@@@@B@@A@@@AB@@A@@@ABBB@@A@B@@B@@@BA@@B@@A@@B@@CB@@AB@@@@@@@@BB@@@@@B@@@@@B@B@@@@BA@@@A@AB@@@@@@BB@@@BB@@@@@BA@@@@B@@@@BB@@B@B@B@B@@AB@BAB@B@BAB@BA@@B@@@B@B@B@B@B@@@B@B@B@BBB@BB@@BB@BB@B@B@BBB@D@B@B@FBB@D@B@B@D@@@BBBB@BB@@B@BB@BB@@B@B@B@BAD@@@DAB@B@BAB@B@B@BAB@B@D@B@@@BAB@B@BAB@BAB@BA@A@A@@AC@@@A@@BAB@B@D@@@B@@@B@@A@@@AB@BABAB@B@@ABBB@BB@@B@B@B@B@@@@@BA@@B@DAD@@@DBBBDBD@B@@@BABAFAFAD@B@D@DBB@DABAB@@A@@AAAAA@A@AAAAB@@ABABADADABAB@BAB@BA@@B@BAD@B@DA@@D@BA"],"encodeOffsets":[[123933,43258]]}}],"UTF8Encoding":true});}));