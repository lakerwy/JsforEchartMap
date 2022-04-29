(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('蒙自市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532503","properties":{"name":"蒙自市","cp":[103.385005,23.366843],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@BA@@BAAAA@OAC@CGAE[ICAAEDCJCLEFCBC@EEIAKBCF@HBJDHAF@H@NFFDFBFADEDEDCJ@H@JAFADDDBB@B@B@@A@@GKKOCIDCFCLBL@DBDEBGAIAIEGGCCEHENELKHK@KCMKEICEEACHKHIDGFiGMGK@EDE@C@CBEBA@@BC@@BCBABAAA@A@AAA@AAA@@GIGG@@AAAAECEEA@AAC@CAC@CBCBGBABA@A@CAA@C@A@ABEDCB@@CB@@C@O@C@CAA@A@A@@@@B@B@D@@@BAD@@@B@@@B@@@@@@@B@@@BBB@@@@AB@@@@A@AB@@@@A@@B@@C@@B@B@@AB@@AB@BABCDAB@BABAD@B@@@@@B@@@@@BAB@@@@@@@B@@@@A@@@@@@B@@@@AB@@@B@@@@@B@@A@@@@B@@@@@@@@AB@@@@@@AB@BA@@@@B@@A@@BA@@@@B@@@@A@@@@@@@@@@BA@A@A@ABA@@@@BC@@@@BA@@@@@A@ABC@@BA@@@@@@@@@@@A@@@@@@@@B@@@@@@@@AB@@@B@@AB@@@@@@@BA@@@@@@B@BA@@@@B@BAB@@@@@@@B@@A@A@G@EBG@GDCBEDAAEAGMCECCEACCAACAACKAGE@C@E@AFED@D@DABEAGAAAC@A@A@@A@CMACDCDEDEBAAIBEAI@GBAHG@E@I@IBIAAC@@A@ACAECGIIICEECEEGCEGAC@EACBA@@@AB@BABAD@BAD@BA@@DBB@B@B@DCBA@ADA@ABA@AB@DEBABA@ABA@A@@@ADC@ABA@A@C@ABCBA@CBA@@DCBA@A@@@A@ACCAACAEACAGEAGHKBEACACAE@E@CDAJAEG@CLCHCFCBCBEACCCACCAECCE@C@EBCDEACECCCEAGCC@@@CBABA@A@CDEBA@ABA@AB@@EBA@@@ABG@ABMDA@ABA@A@ABC@EH@BAB@BABAB@BABAB@BAB@BAB@BCB@BEFIFCBCD@BAB@@@BAB@F@D@B@@AB@BAB@BCDABABCDCB@BAB@@@BE@GBCACCCGAEAECCACAAAAC@GAAAEACAE@AB@@@@@@@@A@@B@@@@@@@@@@@B@@@BA@@B@BA@@B@@@@A@@@@@A@@@@B@@@@@BA@@B@@@@AB@@@B@@@@@B@@@B@@@B@@@B@@@B@@AB@@@@A@@BEECAAAECE@@@E@E@C@@AAAGGGG@@AAAAC@AAA@A@C@@AA@@@A@@@@AA@@@@AAA@@A@@A@@@A@@CAAA@AAA@AAA@A@AA@@AA@@C@@AA@A@@AA@@@ABC@@@A@@AA@AAC@A@@AAAA@@A@AA@@AA@AB@BB@@@@@AB@AA@A@C@A@@A@@@@A@A@@BCA@AAAA@@AACACAA@E@GBE@A@AAEACAC@C@EAC@C@C@C@E@EBA@EAEECECAC@GACAAAEAAAGEEGEE@@@AAA@CBABE@A@GDEBABCB@DC@@DABADA@A@A@A@A@CBA@ADCBCDC@ABC@@@AAA@A@@AA@@AA@A@@@A@A@@@@@C@A@@@AAAB@@AA@@A@@@@AE@@@A@@@@@AA@AA@@@@@@@ACAAAAAAAA@ACA@AAAACCA@@AA@@AA@AAAAA@CAAA@@AACA@@A@A@C@A@@@A@A@@@A@AAA@A@A@CBC@YDUFOJ@HBDHHBBDHJJHHDBBDCDABABEDQBABEAAAI@EFEDKBQIOGOBGBGBIBIAIDE@EBGFGDIDIBGAOCAAC@EBABA@CB@@ABC@@BC@A@E@CBC@A@CB@@A@A@C@EDADABA@BD@@BDDBDDBFBD@BDBBDB@B@D@B@DBFDJHFFHFDFBBBBBBFBFDLFDBBBHDHFBBFHBBBB@@BDBF@FCHIHEL@@CBADABCBEBEBC@C@CBDDBB@DADCDCD@DEBA@@DCDEFEDKDEBABEBCBG@EFAFCF@JALBFHJFDNDJ@LEF@DB@F@HEbAB@BAFD@DCDABADB@FF@HBD@D@BBDDBBBFDDF@FBFBN@HBBBH@NELCJAB@F@JDFBFBBFBJAJAH@B@DC@ADBBFDBDAD@DAD@DDBADADABADBD@FCDCBC@CBCBC@ABADCDBD@DBDBFBD@DCBAB@DCBCBAD@FBD@DBDBDDDDBBFAHDFFDD@DABCDABAFCBBBFDDHFD@DFDDF@D@FDD@DDDFBDBB_X@@CBCBE@GAECGBAJ@F@DFHADOXKPGZAFCBEDEAEAQGKCG@C@CACFGDKBCBE@K@G@C@EDADGAC@AFABADEDCBAD@DDF@@RP@B@BABABGAA@C@DH@FCDFF@@DFFFFDRFdHFDBBBF@DDJDDLDFDFDDFDDDDDBDDHFFDDB@BJNBDB@B@B@D@DADADAD@DBBBBD@F@FB@@@@@@@@@@@@@@@B@@@@@B@B@@@@@@@BA@@@@@@@@@@@B@@B@@@@@B@@@B@@@@@@@@@B@@@A@@@@@@A@@@A@@@@AA@A@@BA@@B@@@@@@AB@@@F@DBHBBBD@D@F@F@BDHBZFHBFBDDDFJH@@FAFBDDDBFHHDDBH@HADADAFAHBFAH@D@F@D@F@J@DADAH@FAD@DAFAHCFADEFADEDADCFADAJAF@J@D@D@F@D@FAJCHEDAD@DBDBD@BABCBAHBFBD@FAHCFCDCHEDCDCBCDEF@B@DADAF@BADCFAFADABCBABCDCBABCFADAFDDDHLFHDBFADED@F@FFB@@@D@DABADEJIHCH@B@NALDJFJHDB@@HJHHBBLDD@NIHCDADBJVDF@F@DFHHDJHJDJBFAHGDG@ABAFAH@J@B@"],"encodeOffsets":[[106238,24104]]}}],"UTF8Encoding":true});}));