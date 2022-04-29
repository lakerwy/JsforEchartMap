(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('珠江毛南族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"451226","properties":{"name":"环江毛南族自治县","cp":[108.258028,24.825664],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBHHB@B@@@DB@ADADCB@BHABAB@DBBDBB@@@DBF@@@F@D@DDBD@@JCF@DBDB@@HAHGBCAC@GBGFEHIJCBAB@BCHEHAFCFCDCDCD@@BDBDBBA@@HGFCBA@@DEHMBGBGFABE@CBEFG@CAC@ABCDMDGDGNEFAD@DF@DBDBFBDDBFBJDLBJBJB@@HBDFB@D@FAFAD@FBH@DABEDEJAHCFEDEBE@IBADAFCDC@AA@@AAC@CAC@@AA@EBCB@D@HDD@DBDBF@BEDADA@@B@B@FEHADADA@A@@@A@CBCFADABEBCFAB@B@BGDEDADCBE@CACCCBABCDABAJAFAHAH@FCBE@GFGDA@CDCBA@CCCAA@E@CAAAA@CDABA@@ACBA@@B@BADBBCDEFEDCFCD@BBBGDGBCFCFADAB@DBBB@B@AJCHCFEJEFEBEEEDGAGDAFIBGCGBCDADACECE@AAE@@@@B@@A@@AA@A@A@@BA@A@@@@BA@@@@B@@@@A@@@@@A@@BA@@@ABA@@BA@ABA@@BA@@B@@A@@@A@@A@@AAAAA@A@@@@@A@@@A@A@A@@@ABA@A@CAABA@A@A@A@A@C@@@ABABABC@ABBB@BA@@@@@A@@B@@@BABA@@BABA@@BADAB@BBB@BBFA@@@@BAB@@@BAB@B@@@@@B@@@BB@@B@@@B@@@BA@A@A@@AAB@@A@CBA@@@A@@BAB@@@F@DEFAD@@@B@B@B@BA@@DABABABABCD@@A@@@@B@@ABA@@B@BAB@@@D@@@@@B@@@@@DA@ABA@@AA@@AEEG@C@@@A@@@C@@@@A@BA@@@@@A@@@C@@@AEGCCEA@FAHBFADECEBE@@@@BA@C@@@A@@@@A@@@A@A@@@AAA@AAA@A@@@AA@@@B@@AA@@@@AC@DGA@@A@B@A@@A@@@@@BAAA@@CA@@AE@AA@B@@@@@B@@B@@@@B@@AAA@A@@B@BC@@@@@A@@@@A@A@@@A@DECC@AB@@@@A@AD@@AE@@@@BE@GBA@AGBGACCC@EDGDEBCD@DBHFHB@EHCFEBCH@@DFBFBFEF@@@AA@@C@C@@BA@A@@A@@A@@A@@@C@@@@AAAC@@AA@@AEAAA@@@AA@@@@C@@BA@A@@@A@AA@AB@@AB@@A@C@A@A@A@AB@@AAA@@@C@ABC@A@GBA@A@@@@A@C@@@A@@@AA@@CA@@@AAA@A@@@C@AA@@A@ABA@A@@A@A@A@AAA@CBA@ABABCBA@AB@@C@ABA@@BA@@BA@A@CBA@C@C@A@AB@BADABA@@DA@@BBDC@@AE@A@@@A@@@AAAA@@AA@@AAA@AA@AA@AA@@BA@@@AA@ACAA@AAA@@BA@@@AAA@AAA@@@A@@@@ABA@AA@@C@@@A@A@@@A@A@@@A@A@A@AA@@E@@@AAA@ABA@@ACA@@@AAAA@@@@A@@AAAAE@CA@@A@@@ACA@CA@ABAB@@A@AAC@AAAAAACB@D@DABADA@@@C@@FG@@@@@C@ACC@AAA@A@G@A@E@AA@@ABA@A@@BABAB@BBDABA@CBA@A@@@C@@@AA@CAAA@@AAC@ABA@@BABA@AAC@AA@ACAC@A@A@CAAAA@ADCDC@ABAD@BAA@BCACAABC@E@E@EAC@AAA@AAAB@@A@A@@@C@AAC@CBCBC@@@CBA@@@@B@BBBBBB@@@ABA@A@@BBB@B@BE@AAAAA@A@C@AAA@A@ABA@A@C@A@C@ABC@CBC@@ACACA@AE@CA@@AAA@A@@@@ABAAA@C@A@A@@A@@@ABC@GB@BABA@A@@@@AA@@A@A@@@CBABA@@B@BA@A@ABA@@@C@CB@@@D@B@B@B@DA@C@@BA@@AA@@@A@@@A@A@CAA@A@A@A@ADE@@AA@AB@@AAA@AA@CA@AAA@@@A@A@AA@A@A@A@A@@A@@@A@AA@A@@@@AAAAAAA@@AA@ACA@@@@@ABA@@BE@@B@@AB@BBD@B@BA@@B@@ABAB@B@B@@@@@@A@AB@BC@AEA@AE@C@A@AAC@A@@AAA@@E@A@A@AA@@A@A@@A@@AC@@AA@@@@@@@AB@@A@CAAAABA@AAA@ABAA@@@AA@@CB@@@@A@@@A@@A@@AA@@A@AA@@@AB@@ABABA@A@@B@BA@@@ACA@ABC@CBAD@BC@A@@BABBDBB@B@@@@ABA@@DABC@@AAAA@ABAB@@A@A@AAA@@@E@C@@@A@@@@@AA@CAA@@ABCBA@AABAA@@A@E@CBA@AA@AA@EKAAA@AAA@@BCBABA@@@C@@@A@@B@@@@@BA@@@C@A@@@AB@@A@@@A@A@@@@@@@A@@BA@@@@@AB@@ABA@A@A@CBCB@@A@@AA@@@CCACAA@AAA@@A@A@A@@BA@@@AB@@ABA@A@ADA@C@@@@@C@@@@@@@A@AAA@AA@AAABA@@@C@A@A@A@C@ABA@A@A@@@A@@@@@ADAB@@@@AB@@AA@@@@ADABA@@@AB@@ABABA@A@@AA@AA@@@@A@@@@B@@ABAB@@A@A@AA@B@@ABA@@@@B@@A@@BA@@DAB@@@@ABC@@@A@@AAAA@@AA@ACA@@AAA@AA@BA@ABAAA@@@A@A@@AAAA@AE@@@@B@B@B@@@BA@@@AAAAAA@@AB@B@@@BA@ABA@A@C@@@AB@@A@@CAAA@@B@@A@@@ABA@@@A@@B@@@BA@@@A@@BAB@@A@@AA@A@AC@ABCAA@A@@@A@A@BCBAB@@AB@@@AE@AA@AA@AAAA@@A@@AA@@A@AA@ACBA@AA@@ECECBC@A@AAACAECAAEAAAA@AACCA@A@CC@@A@@@A@AA@ACAA@AC@E@@@@AAA@B@@AAA@A@@B@BA@@BAAABA@@@@A@AA@@C@A@A@C@ABA@@@AA@@AA@@@AA@@AA@AAA@@@A@@BA@CB@B@DABAB@B@@EF@BCA@@A@AAAA@@A@@AA@@AA@@@A@@@A@C@A@AB@@AAA@AB@BC@A@C@A@@@C@A@C@ABA@ABA@@@@@A@CA@A@A@ACC@@@@AAA@A@A@A@ABA@AB@@@B@BA@@B@@ABB@@@@B@@@@@BABEBABA@AB@BAD@@AB@B@@AD@@A@@@A@AAA@C@@@BA@@@A@@AA@@AA@@AAAA@@AD@@A@A@@@A@@@@@A@C@A@@@@AA@A@A@A@AC@AA@AA@@A@@AA@A@CB@@A@C@@@@@@@@A@@@C@@@@@@@@A@AAABAA@@A@CB@@A@A@A@@@ABA@@@@B@@@BCBAB@@@BA@A@@@@@A@A@A@@@A@A@ABA@A@@@A@ABAB@@A@@@A@@BC@A@A@CB@@A@A@A@C@@@ABAB@@ABAB@@A@A@@BA@@@A@A@@@@@ABA@@BA@@B@@@BEB@@A@ABA@C@@@A@EC@@A@ABAB@@E@AAA@C@A@C@A@CBA@A@@@AAA@AAAAA@@@CBA@A@@@@AA@@@@A@@AA@@A@AB@@AAAA@@@@ED@@AAAB@BA@C@@@@@AB@@@BA@@BA@@@@B@B@BBBBD@B@@BD@B@B@B@B@BAB@B@@@@@B@@@D@@@B@@AAABA@A@A@@@@@@B@@BD@@@BB@@BBB@@@B@@@B@@DD@@BBBB@@@@BB@@AB@@A@@@@B@@@B@@@@@@ADAB@@A@ABCBA@@B@@@@E@AA@@AAA@@@A@@BA@@BA@@@A@C@@B@@A@@@A@@@@@AA@AAAA@A@A@@@@A@A@@@A@@@AAA@@@A@AA@@@AA@A@A@@BAB@BAAAAAAAA@A@@AAA@AA@@CCC@@@AA@@@BA@@AAA@A@AA@@AA@@@@A@EA@BA@@A@@@A@CA@@@AA@AA@A@@A@@@@AAA@A@@@A@C@C@EDA@AB@@ABB@@BA@B@ABAB@@@D@@AB@@@BA@@B@@@BC@A@ABA@A@A@A@A@A@A@A@AAA@@@A@AA@@@AACA@@@C@@@CB@@AB@@ABA@A@@@AB@D@@A@A@A@A@A@@@@@@A@AA@@@A@@@@@A@@AA@@A@@@@C@@@ABA@C@AAA@@@AB@B@B@@A@@@CB@BCD@@DB@B@BA@ABABB@BBDBAB@@@@ADABA@@@A@A@@@@@EDA@@@A@A@A@@@A@@@A@AAACAA@A@@C@@BA@@A@@@@A@A@AAA@A@AAA@@@A@A@CAAAA@AA@A@A@@@AAAAAAA@A@@@A@@A@AAAAA@AA@@CAA@@A@@AAA@@AAAAA@@A@@A@@@@ABABA@A@AAA@ACA@A@AB@BA@ABA@A@A@C@ABA@ABB@BBBDB@@BAB@@ABEBA@@@A@@@@B@BA@@@BB@AB@B@@BB@@BBBB@@@AB@@B@@@@B@BA@@DAB@@@@A@A@A@ABA@AB@@@B@@ADADADAD@B@BA@CB@@A@@@@@@@@BA@@D@@AB@@@@AA@@AA@@@@@B@@@B@BA@A@ABA@A@ABABAB@@@B@@@B@@@@BD@BC@A@A@GAE@G@ABBB@BABAB@B@B@DADA@AD@@A@AB@BABA@@B@@@B@B@B@@ABABA@A@@@CBA@@BA@@@@AAAA@@@A@@A@@A@@AA@A@A@AAEA@@@@@A@@@@A@C@AB@@A@@@AAABA@@B@@C@AB@@@@AA@@@ACA@@A@@@@B@@CDBB@@@@AB@@AB@@@@BB@@A@@BCA@@C@ABA@@B@@@@@@@B@@BBBB@BB@B@@BB@@B@@@B@@B@B@BAB@BAB@BB@@@@BB@@@@B@@@D@@@B@B@B@@@BB@BB@B@@B@BABCBA@@@@BAA@@@@A@@@ACA@A@AA@@A@@@A@@@ABAB@B@@@@BD@@BB@@AB@DAB@BBBDB@B@@@DBB@B@@@@@B@@@BB@@@@@@B@@@@@BA@A@A@@@A@AA@AAA@AA@A@A@@AC@@@A@@BA@@@@BBB@@@BBBB@BBDB@B@@@BAB@@D@BB@BBB@@B@B@DDABAB@BBBB@BBBD@B@@@@BB@B@@@@CDA@@@A@A@@@AAAAA@AAABAAA@@@AABA@@C@@AAA@@@@@A@@B@@C@@@AB@@@AAA@@@A@A@@A@@A@C@@@@A@@AAA@ABA@@BA@@@AB@@@@AB@AC@A@@@A@A@ABABBB@@@BFB@@@B@B@B@@@B@B@BBD@@@@ADA@@@A@@@C@CB@B@@A@@@AB@BAB@@@BDB@@B@@@BBBA@@B@@B@@BB@@@@B@@@BAD@DC@@B@@@B@B@B@D@B@DB@@B@@BBBADAB@@ABA@A@CBABAD@B@B@BABABCB@@CD@DA@@B@B@D@@@BABHJB@DF@BB@BBBBD@BBBB@@@BB@@BAD@B@B@DBB@@B@BB@@BBB@BD@@BBBBBB@@@B@@@BC@@BC@CBA@ADABAFAH@B@BAD@D@N@D@DBB@BBB@BBBBB@BBB@BABAB@BCBABA@AB@@AB@DA@@B@D@@@B@B@@AH@BABAB@BCH@BABAB@@A@A@A@C@@@A@A@A@A@@@AB@@@B@BAB@B@B@BBBBD@D@B@BABEFAB@BABAD@D@D@HAH@BAD@D@B@BDH@D@BB@@B@D@BBD@FABABCBA@GHCDABABEDEDEBEBCBEBGFADADA@AF@@@D@D@DADBB@@D@BFDBD@DDD@JDHBJFFDDDBFBF@DBDFFDCD@D@@@L@D@BBDDD@FABB@B@B@DDBB@B@B@DDBBD@B@FBB@DB@BBBDBB@D@F@DAFA@@BBBDBBB@HDBDBBDDBDB@DD@@BBFBBBDB@@PDNBHBLFNFNFPHFFDFF@NC^DB@@@DBD@DBFBF@BCJBN@DBFAJ@JAHCD@D@FADAD@LDXJTLBFB@DBF@BB@BHTDRJBBBD@HDBDADBL@J@JBJDFFDFH@DCFGJENANFNFF@@JFLLDP@NELKHIDCJ@DFBLD@B@BDDJHBHBHBHBF@DABA@AD@FBBBBABAFCBGB@BGL@@FDPDHADALCFDFBFABAFAF@B@BDBH@AD@B@B@B@BD@BDFBHADEBED@FBDFDBB@@CBCBEBAFEHIBCDEBCACECAABCDCHCJ@DD@BDDDD@HDHFHDHDF@FBDFDBFBFEFCDADCF@FAB@BB@BB@D@DCD@DBDC@@HQBG@CAE@EBCD@FBJBF@JED@HBDD@BB@ADBB@JADABGBEFIFABA@AB@@@@@@BB@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@B@@@@@@@BB@@@@@@@@@@@B@@B@@@@B@@@@@@@@@@@B@@B@@@@B@@@@@B@@@B@@@@@B@@@@BBD@B@HJNHLFLBJ@LFFDHLJJFFDBJNHTDJED@@BD@B"],"encodeOffsets":[[110903,26134]]}}],"UTF8Encoding":true});}));