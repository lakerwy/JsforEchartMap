(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('罗平县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530324","properties":{"name":"罗平县","cp":[104.309263,24.885708],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DBD@DBB@DABADA@CBCBAD@B@@AHAH@DB@F@FBDDHBBF@B@HIBAD@D@FBD@D@F@D@DAD@PAVC\\ANAJ@DD@BEDEFAJBLBFDDFBFB@@DBD@DBB@BBBB@D@D@D@B@B@FBBBDBBBFBBBB@DBD@B@BBDBBBDBD@BBDBDD@BBB@@DBD@B@D@B@BBBBDBD@B@B@D@BBB@B@@@B@B@@BB@B@BB@@@B@BBDADADABAB@BA@@D@@@B@BBB@B@D@D@FABCBABAB@BABABA@AAC@AAC@AAC@ABCBE@C@CBC@@@A@AB@BADABEB@BAD@@ABA@@BA@A@C@AAA@C@ABC@A@@@A@AAA@AAC@A@C@A@A@@BABA@@@A@@ACBABEBAB@BCBCDA@ABA@@AA@A@A@A@@@EAAAA@AC@@ABA@@B@BA@@@AA@@ABA@A@@@A@@@A@@@@@C@@DA@@AA@A@AAC@@@CA@ACAA@@A@@AAAACAAA@@@CA@AA@A@B@BA@@B@@AB@@ADCBABCBA@ABA@C@CBC@AB@BAF@DABCDGBCDC@A@ACCICEGAGCICQGEEEEEGGAAAC@A@@CAEAA@BCA@@A@CBG@AB@BA@AB@DAFCD@@AB@@@DA@A@@@GBABC@A@C@ABC@A@ABAD@B@@@BDBBAD@B@B@HBHDDDBBBDBB@BE@ADAB@@AFGHEFEDCFGBG@G@G@EBKDAHABAFIDODGDE@EBEBE@AACDEBI@A@@@EAA@AA@CCCCAEAC@CDAFAFABAACBCAGBGBGAEBCDEBCAECEGGCGAE@EBABACCAABAFAHCFCFCHBLBHBNBFBFBFBD@BCDABADAHBF@D@B@B@@CD@F@J@F@TBXBRBTBPDNDJFLDBBBBB@BE@@BCDADBFBFBDBDBD@FBFBD@B@B@DBB@@@B@B@B@B@B@DA@@B@BA@@@@DAB@F@B@B@D@B@D@DBB@@@DBBBD@DBD@F@B@B@B@DAD@@@FBB@D@B@D@BAB@B@BADAB@DAF@BABCBCBADCDAFEBADCBABABA@A@AAA@C@ADEBABABA@C@ABAAA@A@CBC@EBEBADEBABABA@EBA@A@A@AEACAAAA@C@A@@@A@@B@@A@A@C@ACCCAAA@CAABCAAAAAA@AA@AACBCBABCBA@A@@AAICCAIAA@ACECCAA@C@AA@AA@@A@A@CBE@A@A@EAC@@ACCAECCCAAAAA@A@@AAABA@@@C@A@ACEACCECA@ACA@@AA@ACCACAC@CAC@@@C@A@AAC@@@CAAAAAAA@AAA@AACAAA@@CCA@AAA@CAA@G@A@A@A@A@AACAAC@@CCGAAAAAEACCCEEGAAACCCACACAA@CAAACACAAA@AAA@AA@A@ABC@@@AAAAAACAAACACCACAA@CAA@@CACAAEECAAAAA@CA@CAA@CAAAAC@A@CAAA@ACCAAA@A@@@C@A@A@ABA@ABA@ACCACAC@C@C@A@ADCBABA@C@CAC@A@ADABADA@C@CACAAAAACAA@C@EDC@A@C@CCCACECCAAEACCCCE@C@C@CBCA@EAEACAAA@AAA@C@C@CAEAAACAA@C@EAEAEEEAEACCACA@CAC@A@C@C@CAEAGAC@AAECEACCEACCCACAACAA@C@C@GAEACCAGEEEACACBGBGDE@A@A@AGBCFAFAD@BADAACB@HBFBHBDHBF@FFBFAF@D@BABE@C@ABADADAD@BADCDAD@DADC@C@A@CAC@C@C@C@CAC@A@A@EBCAABC@AAC@AAA@C@C@EBAB@BABA@C@A@@BA@A@C@A@C@CBC@ABADABABCBABC@A@C@C@CBA@ABA@A@ABAC@CAAAEIWSKGI@A@CBKHIDCDCBEDEHCBAA@CDAAEDCBCA@EAG@C@EEGCG@IAECG@GBI@IBEBCCMEMCI@GBED@BBF@FDFBF@JDDBF@FC@AH@J@H@H@F@@@B@D@D@F@BAD@D@BBB@@@DBBBD@BBBBBBD@@FFBBB@BHBD@@ADAHBFDHAHCDCBABDDBBABE@CBCDADGDEBCFA@CACECCEAEDCDGFCD@FBFCF@FBF@DC@G@EAGBCF@DAFCBEACAEDAFBJDJDFADCD@BBD@BAD@FADCBEBAF@FA@CDEDCFEJEDCBG@E@EDCBCDCHEDEBIDG@E@CAEBEDCFCHEFCBGBCDAD@DD@DA@BABCDCDABA@@EACCAEBC@AD@HADBF@BE@@@A@BFBF@D@@@@@BA@@B@@@@ABC@ED@DEDCDEBE@OBOBQCIEEACDC@@A@A@A@ACAAA@C@CA@C@C@ADA@ACAAEACCEECACA@B@FAFADBDAF@DEBEAGCGCIAGEE@EBEB@DBFBB@BADEBCFAD@FDFHFFB@D@BA@I@GDGFGHAB@DDDLFJ@F@@F@FADEBCDAF@DFDFBNCJ@FBHFDF@@DBDDFBH@HDFFDLBHFBDB@BBBBBAB@BD@BBDBBB@BBDBBBBBB@DBFDBHFDBDB@B@D@D@BA@AA@AA@@@@@CAA@A@A@AAA@AAA@@@AB@@C@C@A@AAAB@BA@@@@B@BABABAB@@A@A@ABABAB@DNR@FABADABAB@FBHBFDHFL@DAH@FDF@FABAB@D@DDDDF@HAFADADEDEDC@G@@@A@@@AAA@MEQGOEAC@C@CAECCCACC@CC@CA@@I@I@YDQHGLCDI@ICGACDCFmPCF@FDHAFABEBE@GCICE@C@EBCBC@CACAAB@FCFCBCBEDABC@@BC@CBA@A@C@C@C@C@EBABC@CBABCDABADCD@@@@@@CDABCBC@ABC@ABADA@CBDDBBFBDDDBFFBBDBBBD@BBF@B@D@B@BBB@DFDDFFDBB@B@D@B@B@@@BDDBBB@B@@B@BBBB@@BB@@@BB@@BB@BB@@BB@BBD@@DB@@BBB@DD@D@B@@@BA@A@@B@B@BB@@B@BA@CBC@A@BB@BDB@BABAD@B@BBBAB@@CB@B@@BB@B@B@B@BCB@@@AAA@A@A@AAAA@A@A@@B@B@D@B@BA@CB@@@BB@D@@DABA@A@CA@@ABA@ABAD@BBB@B@BABA@CBA@@BAD@D@BCAA@A@C@A@@B@B@B@@ADAB@@A@CB@@ADA@@@A@A@@@AAA@@BCB@BB@BBB@@@@@@B@@A@ABA@@BDB@BBABABAD@BFDFDDD@HAJAJBL@H@B@BA@CDAD@F@@AD@D@BAD@D@D@BCD@BB@D@@D@BABEBCFAF@B@BDDB@BBD@FCBCDCDAFBFBDDDDDB@DBB@D@B@D@BBD@B@BAFC@ABCBAB@B@@@@FBBB@@D@DAFEBEBIFCF@BABBHBTBD@B@L@B@BDBLFBB@BBJ@D@BBBB@B@@@@ADEBCD@B@D@JHFBFBD@BA@BFABABCBCB@@@BD@BB@B@B@@B@DDDDFDDFDFDB@LFFB@@BB@BABEDCH@HAFBFBDDBB@BBD@DB@@@@B@B@B@@ADAFAFADAFDD@F@BAD@BB@D@BBAB@@BBB@BB@D@B@@@ABADABAF@DBD@@AF@F@B@DADBHDBD@D@DB@DBFBBD@D@D@F@HBHDHHDDAF@BBDBBD@DBBDDDBFBDFBBBD@D@BDBDBBBB@BABCBC@CD@DAD@D@FAD@BDBBABBD@BB@B"],"encodeOffsets":[[106723,25930]]}}],"UTF8Encoding":true});}));