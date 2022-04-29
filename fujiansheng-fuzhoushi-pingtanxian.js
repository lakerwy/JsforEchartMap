(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('平潭县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350128","properties":{"name":"平潭县","cp":[119.791197,25.503672],"childNum":90},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@B@@"],["@@A@ABABC@C@ABA@C@@@ABABABCBEB@@@BB@@BAB@BDDB@B@@AB@@D@BBB@BBBD@BC@E@ECEB@BAD@@BBBDDBDBBB@BB@DBFAB@@@BBBDBHBBB@B@@FHDBB@@@D@BBDB@B@BAB@@@BBBFBF@DA@@HBBBBDB@@A@A@CCA@CBCCMGGACBC@@AACB@@CA@A@EECA@C@CAEC@@CBAA@A@@BAAAAEIEC@"],["@@@@@@B@@@@A@AA@@@@@@@ABB@@B"],["@@@@@@@@@@B@@@@@@A@@@@A@@@@@@@@@@@@B@@@@"],["@@@@@@@@@@@@B@@@@A@@A@@@@@@@@@@@@@@@@B@@"],["@@A@C@@@@@AD@BABA@C@CCAB@@@CA@A@A@@A@@ABAB@B@@@@B@@@@B@BABA@CAC@E@A@@BAJBBBB@BA@@B@HBB@DAB@B@@F@FABABE@AAA@@F@F@DBBBFD@@DA@A@AA@@@AA@A@AAAAA@ABAB@FABBB@@BAB@D@BBBABAB@D@BBBABBB@BD@BA@A@AA@BAB@AABAB@@AB@BBB@BAAE@@AAB@B@@AA@AA@@@AB@BAAABABCACAAA@@AACABCA@AA@"],["@@@B@@BB@D@@CBC@@@A@ADAHAD@B@@BBJ@FB@@DAB@@B@@CDABA@C@@B@BDBD@F@D@FEB@D@FB@BCB@B@@BBB@B@@BBB@@B@B@FAB@BA@C@@CCA@@A@AB@@A@@AA@@FAHA@@BA@AB@BCA@CACC@@C@CA@A@AA@CAEBEAC@AAAA@BABE@CACCA@C@"],["@@C@GBA@@B@B@@B@BBBBAB@B@BBD@D@BABADABAB@HBF@BDDB@BB@DBDBBBBHFDBB@B@BC@EBCBCAA@AA@@@C@A@AAAABCBCBC@ABA@ABAD@B@DBBBB@BABA@ABCAA@ACAA@AB@BC@AA@AAA@@CAC@A@CAA@AAAA@C@C@A@@"],["@@@@@@@@@@@@B@@A@@@@@@A@@A@@@@@@@@@BA@@@@@@@BB"],["@@B@@@@@@@@@@A@@@@@@@@@A@@@@A@@B@@@@@@@B@@"],["@@B@@@@A@@@A@AA@@@A@@@AB@@@@@@AAAA@@A@@@A@@@@@@B@@BBBBBBB@B@B@"],["@@@ABG@AAEA@A@AAA@CB@BAB@HBD@@HDB@BA"],["@@@@@@BB@@@@B@@@@A@A@@@@A@@@@@@@@@A@@@@B"],["@@B@@B@@B@@@@@@A@@@A@@@@A@@@@@@@A@@B"],["@@@@A@@B@@BB@@B@B@@@@@@A@A@@@@@@B@@@B@@@@A@@A@@@AA@@AB@@@@@BA@"],["@@@BB@@BB@@@B@@@@AB@@AAA@AA@@@A@@BA@@B"],["@@@@@BB@@@BAB@@A@AA@@A@@A@@@C@@@@B@@B@@B@@@B"],["@@@B@@@@B@@@@@@@@A@@@@A@@@@@@@@@"],["@@@@BB@@B@BB@@@@B@BB@@@@@@B@@@@@@@@AA@AA@A@@@@A@@@@@@@@@AAA@@@AB"],["@@@B@@@@@B@@B@@@@@B@@@@B@@B@@A@@@@@AA@@AA@@@@@A@"],["@@A@@@@BB@@@@@@@B@@B@@B@@@@@@A@@@A@@A@@@@@A@@@@@"],["@@@B@BB@@@B@@@@A@@AAA@@@@@"],["@@@B@@@BB@B@@@@@@@@A@@@@AA@@@@A@@@"],["@@@@@@B@@@BB@@@@@A@@@@@@AA@@@@@@@@@@A@@@@@@B"],["@@DFDBDDFDDBD@BADGBCBADAFCBAACACEAC@AAAAA@E@C@CAA@ABA@@AAAA@A@A@ADADBHBH"],["@@@@B@@BBBBBBB@@B@@@@A@@AA@@@@@@AA@@@@A@@AA@@@@A@@A@@@@B"],["@@BB@@B@DAB@D@B@@A@@@A@A@@@AC@AAA@A@@@ABA@AAA@@@A@@B@@@BBD@BB@"],["@@DFFHJDFFF@DABAAC@C@A@ADAFBDBLDPBJDFBHJJDF@DA@EACCE@C@ADEBA@C@A@C@GAEECEAC@GBEFCDC@CAEEKAE@@BC@CCCAA@CBE@CACAABAB@BMJC@@BAHBD"],["@@@BBBB@@@BA@@@A@AA@AA@@AB@@@B@@"],["@@BB@@@@B@@@@@@@@@BA@@@@@@@@@A@A@@AA@BA@@@@BAB@@@@@@"],["@@@BB@B@@@BBB@@BB@@AB@@A@@@@@@B@BA@@@A@@@@AA@@@A@@A@@@CAA@A@@BA@@BA@@@@B@B"],["@@@@@@@B@@B@@@@@@A@@B@@@A@@@@@A@"],["@@@@B@@@@@B@@@@A@@A@@@@@A@@@@B"],["@@BB@@BB@@B@@A@@AA@A@@AA@@@@A@@@@B@B"],["@@@B@B@@B@B@BBB@@@BA@A@AA@@ABA@A@A@AAAAA@A@@@A@AA@A@A@AB@D@B@BBB@H"],["@@@BB@@@@@@@@@B@@A@@@@@A@@@@A@@@@@AB@@"],["@@@B@B@@@@B@@@@A@@@@@BB@@@@@@@@A@AA@@A@@A@@@@@A@@@@B@@@@@@B@"],["@@@@@B@@@@@B@@B@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@@"],["@@@@@@@@BB@A@@B@@A@@@@AA@@@@@@@@A@@@@@A@B@@B@@@@@@@B@@"],["@@@@@@B@@B@@B@@@@@@@@A@@AA@@@@@@@@A@@B"],["@@@@@@@B@@@@@@@@B@@A@@@@A@@@@@@@"],["@@@@@@@@@@B@@@@@@A@@@@@@@@@@A@@@@@@@@B@@"],["@@@@B@@@@B@@BA@@@@@@@A@@@@@@A@@@@@@@@@A@@@@@@@@B@@@@"],["@@@@@B@@B@@@@@@@@A@@@A@@@@A@@@@@@B@@"],["@@BB@@@@B@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@A@@@@@@@A@@@A@@@A@@@@B@@@@@@B@@@@@B@@B@@@@"],["@@@B@@@@B@@B@@@@B@@AB@@B@@B@@@@@@@@A@@@@AA@@@@@@@@@A@@A@@@@@@@@@AB@@@@@@@@A@@@@@"],["@@BB@@@@BB@@BB@@BA@@@A@@A@@@@AA@@@A@@@@@A@@@@@"],["@@@@@B@@BAB@@BB@BA@AB@@@@A@@A@@@A@@@AB@@@@A@AB"],["@@@B@@@@@BB@@@B@@@B@@@@A@@@@A@@@@@@@@AA@@@@@A@"],["@@AB@@@@BB@@@@B@@@@A@@@@BA@@A@@@A@@@"],["@@@@A@@B@@B@BB@A@@B@@@@AB@@@@@@A@@@@@@A@@@A@@@AB"],["@@@@@@@@B@@@@@B@@@@@@@AA@@@@A@@@@B@@"],["@@E@@@@@@@@B@@@@@@@@@@@@@@AB@@B@@B@@B@@@@@@A@@@@@@@@B@@AB@@@@@@A@@@@@@@@@@"],["@@@@@@B@@@B@@@@A@@A@@@A@@@@@@B"],["@@@BB@B@@@@@B@B@@@B@@A@A@@@AA@AA@@A@ABA@@D"],["@@@@BB@@@B@@@@B@@A@@@@@@@@@@@A@@@@@A@@A@A@@@@@@@@B"],["@@ABABADBB@BBA@@B@@@B@@AB@B@@@B@@A@@@AB@@@B@@A@C@AA@A@CBCB"],["@@@BBBB@BB@BBA@@@A@@@AAA@@@AAAA@@@AB@B"],["@@@@@B@@B@@@@@@@BBB@@A@@@@@@AA@@A@@@A@"],["@@@BAB@@B@@@@@@@BA@AA@@@@@@@"],["@@@@@A@@@@@@@A@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@BB@@@AB@"],["@@@ABA@A@@@ABAB@B@B@@A@@AAA@AB@@A@@AA@AAAB@@@B@B@@@@ABA@@D@@@B@@@@AB@@@B@B@@A@@@@@@BA@BB@@BBBA@@B@BABABC"],["@@@@@BBBB@@@B@@@@AA@@A@@@@AA@@@AB@@@AA@@@@@@A@@B@@@@@@@@@B@@@B"],["@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@A@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@B@BBB@BBB@@B@BA@@B@@@@AA@@@@A@@@@@ABA@@AA@@AA@@@A@@BA@@A@@AA@@@@B@@A@@@A@A@@@@B@BB@@@@BA@@@BB@@@@"],["@@A@@BA@@B@@B@@@B@@@@@B@@@@A@@@AA@@@"],["@@A@@B@BB@@B@@@BB@@@B@@A@A@A@ABA@@@@@A@@@@BA@@A@@AAB@@AB@BA@@B"],["@@A@@B@B@@BB@@B@@A@A@@B@@@@AA@@@A@"],["@@AB@@@BB@@@@@B@@A@@@@@@@A@@A@@@"],["@@@@@@@B@@@@@@@@B@@@@A@@@@@A@@A@@B"],["@@AB@@@B@@@@B@@@@A@A@@@@@@@@@@@@@@@@"],["@@@@@@BB@A@@@@@A@@A@@@@@@@@B"],["@@ABB@@@@@@@@@@@@A@@@@@@@@"],["@@@@@@@B@@B@@@@A@@@@B@@@@@@@@@@@A@@@@@A@"],["@@CBABAB@B@@@BB@BAB@BA@@B@@B@@@@B@@@B@@@@A@@@A@@@A@@AAA@A@"],["@@@A@A@A@@AA@@ABA@@B@@@B@@AA@@@B@BAB@@@@BB@@@AB@@A@@@@B@@@@B@@@@BA@@B@@@"],["@@@B@@@BB@@@B@@@B@@@B@@A@@@AA@@AA@A@@BA@"],["@@@@ABB@@BB@@ABAB@AA@AA@@@A@@@@B@B"],["@@AB@@@@@BB@@@BA@@B@@A@@@@@@@@@AC@@@@B@@@@@@"],["@@A@AB@AABABB@@B@@B@ABBB@@B@BAB@@@B@@@BA@A@@AA@@AA@@A@"],["@@BD@@@@B@B@BA@A@A@@AAA@@@A@@BAB"],["@@@B@BB@@@B@@@@BB@B@B@@A@A@A@@A@@ACBA@@@AA@B@@@@"],["@@BDBBBBB@B@@@BB@@BA@@AC@AA@AAAAA@A@AB"],["@@BDBB@BB@B@D@@@BA@A@A@@@AB@B@BB@@BA@ABAA@@A@A@A@@AAA@@AA@BA@@@@AAA@@BA@@@A@A@@@A@@B@@@B@@@BAD@@ABA@@B@B"],["@@AB@B@@B@B@@@B@@@B@@@BA@@@@@@A@A@@@@A@@@@@@@@A@A@@@"],["@@B@@@@@@B@@@@B@@A@A@@@@@@@A@@A@@@@@@@@@@@A@@B@B"],["@@@BA@@B@@@BB@@AB@@A@@@A@@A@"],["@@@AA@@@@@@@@@@@@@@B@@@@A@@@@@@@B@@@@@B@"],["@@HR@D@BC@ABAB@BBDBBFDBFVHBDBHBDDDJDJBJADADAF@FBDB@BBB@B@BSHAB@BDH@BADAD@B@B@B@B@BB@D@B@@V@DAD@B@@B@@BA@ADGTCJABCBABOFKDAB@@AH@DABCDCDAH@F@DDBBDDBDADBBD@FBDHFBB@DBD@@HFLFDBD@B@DAD@DB@DBD@HDHHFTJDBH@FBFBTLBB@DA@BB@@B@BAB@B@TLVND@B@D@BABADE@C@C@CCEOSIM@CACBCDOJMDAFAD@F@RFDBF@FAD@BCDCBAFCF@B@DABA@AB@HEDAFABADABADE@C@AAAAAAACAAA@CACEEAAAC@ABABAD@B@B@DCDABABCDAFAZGHAJ@D@DBVJD@D@B@BA@C@AAQCIGKYUKEGAE@C@CDADCHADCBCBCBE@AAMEYKGECCCMAGAK@KDODGBCFAHAH@B@DCBA@CBCBCBABADBJBDBB@FADABC@CBABBDBJDBDB@DABC@CAGBC@ECGCECEAA@ABC@A@AACCAG@C@EBABCLCFABCBG@GBGBGAECA@@A@A@@@AA@GACAA@ABA@A@C@AAA@ECEEKC[UGEIAGACCAECIAEBC@CBAFADAJBBABAB@B@@@JADABA@@@A@@@A@@@A@@@A@@AAA@EAA@@@A@@@@AB@@A@@AA@C@@@AAA@@A@A@@@@@A@BA@@B@@@@A@@@@@AAAA@C@A@A@ABA@@AA@@@AB@@@B@BA@AAA@AAA@A@A@A@A@IJGFCHAHABCBA@ABADA@A@@@A@A@CBA@C@A@@BA@A@ABA@ABA@A@EAA@AB@B@BEFCDCBGBE@G@I@C@@B@B@BD@D@FBF@BBBBAD@DADA@CB@AAA@AI@C@A@ABCBAFGDCD@D@BBBFFFH@D@BC@C@CAC@CDCFAB@D@N"]],"encodeOffsets":[[[122653,26290]],[[122450,26243]],[[122432,26267]],[[122588,26246]],[[122495,26224]],[[122778,26197]],[[122578,25962]],[[122568,25912]],[[122575,25918]],[[122572,25914]],[[122600,25884]],[[122600,25866]],[[122731,26321]],[[122734,26322]],[[122700,26286]],[[122700,26282]],[[122708,26284]],[[122643,26330]],[[122631,26281]],[[122600,26328]],[[122561,26282]],[[122566,26286]],[[122577,26283]],[[122575,26281]],[[122521,26281]],[[122487,26291]],[[122494,26291]],[[122535,26263]],[[122567,26229]],[[122671,26268]],[[122676,26263]],[[122686,26264]],[[122691,26237]],[[122726,26231]],[[122737,26209]],[[122786,26210]],[[122715,26193]],[[122722,26189]],[[122751,26184]],[[122691,26122]],[[122699,26124]],[[122696,26122]],[[122691,26129]],[[122701,26140]],[[122716,26129]],[[122542,26118]],[[122571,26142]],[[122580,26144]],[[122583,26146]],[[122578,26154]],[[122582,26156]],[[122580,26168]],[[122590,26165]],[[122568,26189]],[[122545,26107]],[[122532,26091]],[[122539,26058]],[[122556,26069]],[[122587,26026]],[[122681,26067]],[[122677,26060]],[[122686,26053]],[[122695,26033]],[[122693,26038]],[[122691,26034]],[[122818,26043]],[[122753,26083]],[[122747,26086]],[[122725,26100]],[[122650,26004]],[[122643,26003]],[[122634,25999]],[[122631,26000]],[[122628,26000]],[[122620,26011]],[[122588,25985]],[[122602,25961]],[[122579,25943]],[[122579,25951]],[[122570,25955]],[[122565,25953]],[[122556,25945]],[[122600,25885]],[[122619,25901]],[[122632,25906]],[[122646,25905]],[[122648,25899]],[[122586,25928]],[[122556,26196]],[[122548,26087]]]}}],"UTF8Encoding":true});}));