(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('保康县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420626","properties":{"name":"保康县","cp":[111.262235,31.873507],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@CBC@C@A@AAACAAAC@A@@AAAAEA@@C@A@A@A@ABABCFABCDEHA@A@AA@@CCAECECAAC@AAAAA@A@A@E@@@C@A@@CGMECAACACQHBHBDABIAKH@DBD@RBFDBHBFLBHBHBB@FABADEBK@KAKEECC@@@@FDNFLFNHHJBDDFJDBB@BCBGHCFADE@@FBBBDDBBDDHFDDD@DBJBDBDDDJBBD@DAD@BA@ABC@A@AAA@A@A@A@ADE@CBEBEAE@ABCBABCBAFC@ABABC@AAA@@CAC@CA@@@A@ABA@@@AAA@A@CBABABAB@HE@ADC@CBA"],["@@AEBKAAGA@ABCBAB@F@DB@@DBFAFBDHBDAFBBB@FAF@FBVP@BGJ@BDB@BD@FBF@@@D@DBF@L@B@B@D@DBBBBDB@BBBADALADA@C@CBCDELIPERAFZHNB\\B\\EZ@LAJCHEPa@CAGDGJKJGJIHIFIHKJMFOBO@GAGLCLAF@LENCNAZCLEDGFAJAHDJBFBHEHGHIFGLEFCD@FCDCFEDCBADCLEFADEDCBCAAAAA@A@K@A@AAAA@E@G@@GEIEGEEECECC@GAGBEDGDCHGLEFAJAHGHCJCFEHCFCFEJEJKJGHGJIHGHEFEDEDGHIJKNOJEDI@@JCBADA@AAACCECA@AAS@AA@A@C@@EAEB@@@FABEDUAAA@GG@CAC@C@AAACDEFI@C@CAEEI@ABCBABCDABAFAB@BBBBBD@BF@F@FAFAJGBAF@B@@AAAAA@A@AF@DAB@BC@CACGAC@G@@@ABCDABABA@AACEAAAAC@CBABCBC@A@A@AA@CBCDAAE@G@A@CHIFEDC@A@AACECCA@AAIBCDCFCBACCCAACAEACDG@I@C@CCAAAA@C@E@E@EACEACAE@CBEBEACACACBEDCH@H@H@DAB@D@PCB@BCBA@CA@A@EBCACAGEC@ABABC@AAEEC@OHC@A@AACE@@EBGHEBCBGBE@@@GACCBEDEBE@CBG@ECCAC@CBEDEFCFCBA@AFCBC@EGMGOACBAD@HAF@FBDABCBC@AFABABEJKDC@CACEAKEA@A@E@E@CIBE@CACC@E@E@CAACAE@GBABCAAJSDK@CAAC@CDEBEDC@EA@CFCDAACGAE@C@E@EC@A@@@CA@A@A@AA@@AAAA@@ABEBC@BC@C@AB@@ABA@ABA@A@ABC@AAC@@AA@AA@ECA@AAAAMHGBCBG@CCAAR_BCACEGCGGGCA@ACA@CBEBCCCACECCAA@C@ICCAC@CBA@KAGAIGKICCC@G@IAC@EBCBCBIBCBCBMDGBCFEFA@ABC@ABADAD@B@DBDBD@B@DABA@K@CBCBCDABC@MBI@E@EAIBCBEFIR@JBH@DCBCFAHBDBBJDDBFLBLBFAHCHADCDEDEFIBMDSFMFEBKBI@EAC@ECAAAAACCCAGAEEKCEEAC@C@CBABADCBCBCDEBCA@CAACAC@ABAFCF@BCBCBA@A@CCCCEGACAACAEAGCECAAA@CBCACBA@CDABCBE@C@AACAAACCGECAACACCGAA@EAEAAEAC@IHC@E@C@C@CB@@@BBDDD@BBBAFCFCBABEDA@GJCDA@C@C@EEGAE@CBGDE@AB@@CBADA@EFIPAFAF@DDL@P@JDHLPHHNHFF@DAD@@CBCBAFAF@P@BCD@@KDCBCDIHED@B@DDBJFHFBD@F@DAJAJABEBC@KAEAGBE@IAM@I@ABABCDCBA@EAA@EACAC@QFIBKAICKAO@C@CB@B@D@DAPABEJAJ@FDLLNPTHNLTFLF@D@D@DBB@BBB@@@BB@BABCFAFABC@EDIBCBA@IJAB@@C@G@@BA@ABCDABABA@EBCAIEAACAE@C@CAKAMAE@EBAFAD@DADABIBCBABCBCBAB@@AD@@@B@BADABAFAD@BA@@BABAB@BABABABAD@BAD@D@B@DADAB@B@@BB@B@@@B@B@@@B@@A@@@A@@DA@A@@@AB@@A@@B@BAD@@BB@B@@D@BB@B@@@B@@@B@BBB@BABBBAB@@@B@BADCDAB@DCHILIJMRKPMPIHGBK@MAO@IFGHKNSZOLADAB@D@FADAFADEBCBCBED@F@BBDFDFBD@L@D@DBBDDD@BCPCF@F@BFBH@H@F@FCD@@AFGDCBCBAB@BBDBDBD@BBDAD@HCB@D@BBD@B@B@DCBAB@B@LBB@@AB@DCBAB@B@J@F@NDL@DBB@BB@@@B@BGHCF@DBDBBB@BABADADE@@D@D@BB@B@BABABGDADAB@@BBBBFDJBH@F@D@BABABCBCDCBAFCFCFAJAFADA@D@D@BCD@B@DDBH@PFFBFDHDB@B@B@BAHGBALAB@BA@C@IBCBCBADCDAFADABCDA@CBCF@DBBDDDHHHDFDDDBBBDB@DBB@BABADEBA@A@A@A@A@E@CACAAA@GCC@@A@@@A@@DC@@BA@ACI@CBGFEDEB@B@DBBBBBJBFB@@FDBBB@BB@B@BABC@AB@B@@FDD@D@B@BBBD@D@D@DADADCBABCDADCD@FBH@Z@BCDAB@BAD@BA@A@EBAB@@A@@CA@@@A@CF@F@DABA@@B@@@BB@@@B@B@FHDDLHDDCDCH@BE@CBABA@AB@@@@BBBD@BBH@D@DDL@FBBB@D@BBDD@BADAFCDABAD@DABBDABAJAB@B@@B@D@DAD@B@BBBB@B@BA@EDA@AD@H@BA@EFCBABABAB@@C@ABEDCB@BBDFJB@BBBB@@B@D@D@@@BB@@@BABAD@B@JB@BBD@DBHDHBN@JAH@DBJAJGBC@ADCBG@@BE@ODIBCNMDG@ADS@A@ABBDHBBDBD@B@BADCDCDA@AHGFKBAHEBCB@B@B@FBFDDDB@@B@DABCDERCBABABE@KF@@ADAB@D@BBJB@BBD@@B@B@BA@ADAHABCFC@C@CBABA@A@EEAAAC@C@AAAC@AA@A@A@A@AA@@@A@@BABCBABC@@B@B@@BBBB@BABEAAB@@B@DD@@@B@@@BAF@BBF@DDDFFDBD@FCB@BBBD@FBFD@F@BB@DRG"],["@@@A@A@E@A@@@AA@A@A@A@@@AB@DAB@BBD@@ABAB@@@DABAD@BC@ABEDEB@BAB@B@@@@@@BBBA@@BAB@B@B@D@H@D@@@F@B@BB@@BBB@@@BABA@A@A@A@AAA@AA@A@AA@A@C@C@C"],["@@BAA@AACACAA@AAECEEA@AAC@ABA@ABA@@B@B@@BDDFBBFDBDBB@D@@BBBBBAD@BAFEFC@A@@"]],"encodeOffsets":[[[113812,32816]],[[113755,32784]],[[113657,32694]],[[113726,32186]]]}}],"UTF8Encoding":true});}));