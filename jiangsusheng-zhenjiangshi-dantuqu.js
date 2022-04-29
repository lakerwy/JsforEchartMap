(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('丹徒区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"321112","properties":{"name":"丹徒区","cp":[119.433883,32.128972],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ADAFAPDD@BBHAJBLAJBN@J@FDLFFBFBH@HALAN@FBHDTDFFHFBHBHBH@HALBFBDFBF@FCLCJ@@@@A@GLIHCJDFDFBDDDBBDH@L@JAFCDAFAD@HADAF@FADAD@FCFEFCDE@IDC@GBGFEDADCDAFCBEHGHBBB@@B@@B@BB@@DA@@@@@@@A@AB@@@@@BBB@@@@@B@B@@A@@BA@B@@@@@B@@@@@@@BAB@@AB@@@@@@BBB@@B@@D@B@B@@@@@@A@@BA@@B@@@@@AB@B@@B@@@AB@@@BDBBA@BBBB@AD@@AB@@B@CF@BBB@BA@KA@AAB@AAB@B@@@@A@A@@@@B@D@@@@IL@BEAE@IA@@@@CA@AC@A@C@@@A@A@@AACDAAAA@@@@@AA@@A@A@A@A@A@@@AB@B@@A@AA@AC@@@AB@@@B@@C@A@@@A@A@@@@AA@A@BCAABC@@@B@BB@@@@@B@@@@@B@@C@AAACAEBQJGDAJEPGF@@GJ@DCBG@EBEBGBCDCDAD@FBFBN@D@L@BBF@F@DBHBH@DFDLFBBFDDDBDFBDF@D@DADgZQHYLXLPFH@FBD@F@H@FAF@FBN@HBD@N@RAJ@RBHAD@HAF@H@F@D@RCbE@@LA\\@N@IKIIIOCAACECIECAEAEASGE@MCC@OAM@@IB@F@DALBDAN@BAD@@@DDDB@@B@@@@@@A@@BA@AB@LAD@@A@A@@B@@AB@@@@@@@@@@A@A@@@@@A@AAAACBA@A@@@@@AA@@@@@A@@@@@AA@@AA@@@@@@A@@@AADA@AB@@@BADAB@BBB@@@BB@@FBD@@@B@@@@@B@B@@A@BB@@AB@B@@@BAD@@@@@@C@@AAA@@@C@AAA@A@@AD@BAB@B@@@@AB@@A@EA@A@A@@@AB@@AD@BA@A@@@GAA@@@@A@@B@@A@A@AB@@ADA@AC@@ADA@@BE@@CA@@@@@ABC@A@@D@F@@@B@@AB@@@@@@BAB@@D@@@@BB@@A@@@@@@BA@@@@@B@BB@@@B@@@@@@@@A@A@@@AB@@@@@@@B@@@B@@@B@@@FBB@B@@@@@AB@B@@B@DA@@FAJAH@BBB@BDB@DB@A@@B@@@@@@@@BB@@@B@@@B@AAB@@@@@@A@@@A@@BAB@@@@AB@@BB@B@BBB@@DBBCB@BB@B@@B@@@B@B@@@BBBA@AB@BA@@BCA@@@@@@AB@@A@@@@DB@@@@@@@@@@@A@@@@@AD@@@@@@@B@@AB@@@@@B@@@@@@@BB@@BBB@DB@D@B@@B@@B@B@@B@@D@@@@@@@@@B@@A@@B@DAB@HB@@@@B@@ABABA@@@B@@B@@@B@BC@A@@@AA@@@A@@@@@@B@@@@@B@@@AA@@@A@@@A@@A@@@@@@B@@A@@A@@@@@@@@AA@@@@A@A@@@@@@AECC@AAAB@@A@@B@@@D@DABB@@@A@@DBBABB@A@@B@DAJCJE@@BBB@@@DB@@B@BBD@@@B@BB@@@@AB@@A@BBBBFDHA@A@@AED@@@BB@ABAB@@@@AA@@@@A@@@@@@@@BA@@@A@@B@@A@@BCB@@B@@B@B@AAB@@@@@BB@@B@B@BABADAF@D@FBDBB@B@BAD@@@B@B@@@B@@B@@B@@A@@@@@B@@@@@@@@@B@B@@DDDBDF@@@B@@@B@@@@@B@@BB@@D@@@@@@BB@@BB@B@B@DADAD@B@D@B@@@B@BBBB@@B@@@DJ@@@D@B@@D@BB@@A@@B@@A@@BBBB@HDB@FB@B@@@B@@B@@@B@@@B@@@B@@@@@B@@@@@@A@A@@@A@A@@A@C@ABAA@A@@B@@AB@@@@CBA@A@C@@@@B@@@B@@@@A@@@@@@BA@@@A@AB@@@BABC@@@@@@BABAB@F@BAB@@@B@AEAA@@BA@@DAB@@ABAD@@BF@@@@B@@@@@DB@@BFA@@@@AB@@B@@BB@@@B@B@@@@@@@B@@AB@D@FB@@@B@B@@B@@@BA@AD@@B@@BBB@@A@AB@B@DAB@@A@@BA@@B@@@B@@@@A@A@A@@@AD@D@@@BA@@@@DB@@@B@B@@@@BAB@@@@BD@@@@@B@@B@@B@B@HE@@@@@AB@@@BA@@D@DA@@@C@@@BB@@@BABA@A@@D@@@D@@@@BABAB@D@B@DAB@@@F@B@@D@@B@@@B@@@BP@B@DAFABB@@@BCDCDCBAB@B@@@B@B@@@DB@D@DBD@D@HBB@BBAD@B@@BBBAB@@@@BB@@@B@BCD@DC@@@A@@@A@CBA@@B@BAD@@BBB@@@@BBB@@@B@BB@@@D@@B@B@BA@A@@B@@@@@BBDB@@B@FB@@@@BA@@BAB@@@AA@AB@AA@@B@@AB@@@@A@A@@@@B@@AB@@@@A@@BAB@D@BBB@@A@@B@@@B@B@@@@BA@@BAB@@DB@@B@@B@@BBF@F@@@BA@AB@@@BA@AB@@A@A@@D@@@B@@CD@@A@@@AB@@@B@B@@BJ@BBB@DBB@BB@BB@B@B@D@@@B@@@B@@B@@@@@B@@@B@@@B@@@@A@@@AB@B@DABCDCLBB@@@B@@J@FBDF@@AF@BA@A@C@C@A@@BAB@B@D@DABABAB@@A@@AA@A@@D@BBBDD@@DDD@@@BAD@@B@@@DABCBE@ICABAD@@@@@@ADCH@BHFDBBDBHBB@DCDSHA@@@GDGBG@CDA@@F@@@BABGBEOGMMMaUcMUEOEYAqBYDCBGDEBCBABAB@DAB@DAD@F@rNAV@TBPBNBHDBD@DCJ@FBD@@FFJBB@PCFEBABGDI@SAUB@DB@@DFBHB@BB@DBD@F@HAD@BCN@B@B@BBDBDBBBBFDFDBBFBD@JB@@@@B@ZDF@FBHBFDHDDDDBFFBBBFBDBB@@B@F@B@PINAEGUgNABAFAF@DAHAFAFADCDAFCFCFEFCDCDAFERIDCNGJELGVITAR@VDF@HCJEDEDC@E@CCEECEAG@MAEAIGCE@CBEBGBGBKCICKEKCIAMAI@IBEFIACA@MCABGBCBA@A@A@EAC@@@CBGBKBC@MDIBI@Q@E@C@MLCDGHADCBGDC@GAEAAACEEECECABCFEBCFADC@CSGEAECEAEACCEAEAG@CBEBEBCBEBCBG@CAAMAEAGGGCASMC@CEACCCECGECCEAEDC@EDAFCBCBEFGDCBEDCBCBCBC@AA@A@A@CCECCCEACKBEAE@M@A@ABA@C@GBA@ABABADAB@@@A@@@AA@AAA@C@CAA@A@@BIFSLGFA@@@GA@@@@CD@@A@IAECBE@@W@C@@CAEGI@@@@CGGOCEAECACECCGCC@C@IBG@GEAE@G@EBCDIBABEAEKKCCCEEGEGAGDGFEDE@ICEAGCGIQCGAE@G@IBICSEEKMCCCCEI@G@EJG@A@A@A@CAC@A@C@@@ABAFA@ABC@@@A@A@A@@@C@A@CBA@CB@@@F@BAB@DABA@ABA@@D@@@@AB@@@AA@AAACCAA@@AAC@AA@@@CAE@ABCB@@A@@B@D@@@DBB@BADE@@DKDENOJG@@AA@@ECM@@@AHEFA@A@@@ECCAE@GBEBE@C@GBGB@@@DKFEJEFA@CBGAIA@@C@CBEHCHADED@@C@E@E@C@E@A@@BCACA@@C@CF@@EA"],"encodeOffsets":[[122204,32624]]}}],"UTF8Encoding":true});}));