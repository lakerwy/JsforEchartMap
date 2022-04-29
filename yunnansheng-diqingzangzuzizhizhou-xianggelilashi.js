(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('香格里拉市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"533401","properties":{"name":"香格里拉市","cp":[99.708667,27.825804],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABC@A@CBA@C@A@C@A@E@A@C@A@CBABABABCD@B@D@BBD@B@B@D@BCDABABEBCBCBE@C@EBCAC@A@C@AAACEAACABA@ADABCDA@C@CBAAC@@@C@ABCBA@CBA@A@CAABABEDCBABCDADCBADAFAF@F@FADCDADAD@DABCDADEDAB@D@FDD@DAB@@ABCBCDADBH@B@D@DBD@B@B@B@@A@CBEBEBEBCDCDCDCDABABA@AACCCACCCACCCCCACAAAC@A@@DAD@BA@C@AAAAECEAC@AACACACAECEAC@ABC@A@CBABAD@DBDBB@D@DADAFAF@FAD@FAF@F@FAB@DABABADCBAD@B@F@B@DAD@DCDADAB@DBDBBAD@DABADAB@D@B@B@BABABC@A@C@C@CBAB@DAF@F@D@BADABCDABABABABEDADBB@DBD@BAD@DAB@BADA@A@@AACAAC@CAE@E@CAE@EAE@A@C@CAAAAC@EAEBC@EAEACACC@C@CBEDCDCBCBADCB@DAF@D@D@BAD@BCBCBEDA@ADADCFADCDADCBA@A@A@ACAAACACAAACCAAAAACCAACC@GAA@AA@AAABCBCDCBCBA@A@CAAEECCEECCCAAACAGAGAI@G@G@CAC@CAGAGBG@EAE@GAEACAAAAC@CBA@C@@CAAACAAAAC@CAA@A@AAAA@CACDC@C@E@@@ADABADCBC@CBCBADCBCBC@AAACCACEA@AACEAAA@C@C@EBCBC@C@CBC@@@AAAA@AAABC@ABEBA@A@@ACCCCCACACA@AC@@AAB@A@@A@@@A@@@@@A@@@@A@@@@A@ABC@E@A@@@@@@@AA@@@@AA@@@@@A@@@@A@@BA@AB@@A@@@@@A@@A@@@BA@@BAB@@@BA@@@A@@@@@A@@B@@AB@@@B@@A@@@@@@B@@@@@@@AA@@@@B@@@@@@A@@@@@@B@B@@@@A@@BA@@@@B@@@B@@@@@B@@@B@B@@AB@@@BA@@@@DCBA@CB@@A@A@@@A@@@A@@@@@@@A@@@@@A@@B@@@@AA@@@BA@@@@@@@@BA@@@@@CBAB@@C@ABA@@B@@A@@@A@@@AB@@@@@@@B@@@BA@@@@@A@@B@@ABA@A@ABA@ABA@@@A@@@A@@@C@@@@@@@A@AB@@@@A@@BA@@@A@@BA@@@A@@@A@@@AB@@@@ABA@A@@B@@ABA@@@@@A@@BABA@@@@@@@AA@@@@AB@@@AA@@@AB@A@@A@@B@@@@@@@@A@@@@B@@@@@BA@@@A@A@@BA@@AA@@B@@@@@@@BA@@@@@@AA@@@ABA@@@A@@@@@@BA@@B@@A@@A@@A@@@@@A@A@@@@BAB@@@@@@@@ABABA@A@A@@BAB@@ABA@@@AAA@@B@@A@@BA@@@A@A@AB@BCB@BA@AB@@A@@@A@@@@B@@@@AB@@A@@BABA@@@@@A@@@@BAD@@A@@@BB@@@@@B@@A@@B@@@@@@@BA@@B@BAB@@@DAB@@@B@@@@@B@@@BA@@@@B@B@B@@@BAB@@AB@@@B@@@B@@@@AB@@@@@B@B@@@B@DA@@B@@A@@BA@@B@B@@@B@@@BABAB@@ABCB@@AB@@@BA@ABABA@AB@BC@@BC@A@@BAB@@ABABA@A@A@@BAB@@@BC@@@@B@@ABABAB@@@B@B@@@B@@@B@BA@@BABA@A@@@C@@DC@@BA@@BC@@B@@AB@@@@ABABA@@BA@@BADABABA@A@@BA@@DADCBCB@B@@ABA@@B@@@B@@@@@BA@ABA@@BABCBADAD@@AB@B@B@BA@@BABCBA@A@A@AB@B@@A@A@C@ABABABCBABAAA@AA@CACCEEEEGICEAEECECEEAG@E@GDAFBDBJ@F@FEDEDAF@DA@ADEDAFAFEFEFAH@DBH@DAD@FEHEFCD@F@L@H@FAHCFCDBFBFDFBF@FAFCHCD@FBFDFBDBFADCFEFAD@DC@CCICECAACBAFCAE@CBCDEBA@CACECEACCCECAGEECACCE@EAEBEBCFEDCHCFAHABCBC@GAEAGAE@EACBEDEBCBGBG@E@ECECECCAEACA@AAAA@GAABA@C@CAC@EAEAC@E@A@ACAAAEACAAAA@AA@A@CACACACAE@C@ABABADAFAFAFABABC@G@EBE@C@ADC@CAAAACCCCEAAAACAC@E@ABCAAAAAAA@G@C@A@@C@@AAAC@A@A@A@CAE@ACAA@C@C@C@CAAAACAC@A@EBCBCBCBCBCBA@EBCBC@AACC@AACACAAAC@C@A@C@A@A@GAA@C@AA@A@A@E@GBA@CBC@A@A@C@C@C@ABC@CBA@CBC@AAAAAAECCCCAAE@AAECCACAA@CACAAAAAAC@CAC@CAA@AAACECCCCAAAAAAA@EACCCAACCCEECCACACACAC@EAC@CACAA@A@CAAACACAAC@CAAA@A@C@A@EBCBA@@FE@ABABCDCDCDCBCBADEBCBCBEBCBEDCBADEB@@ABEBC@ABA@A@A@E@C@CBC@CBCDABABCBA@CCEAC@AA@ACACAAA@@ABA@ABA@@FE@ABA@@FEDCBCBABABCBCBABADCDCBABEBEDCBE@C@C@A@G@A@A@A@ABABA@CAEAC@@@C@A@AB@BAB@DABA@@@@@ABA@C@A@C@GAC@@ACCC@C@A@AAAA@CACAEAA@EAA@A@ABC@AAC@CA@@AA@@C@A@C@C@@@AAAAECAAA@ACACACAE@AAAAAECAAEEAA@A@A@AAA@@EAA@@AACCEAAAGACACAACAGAAAA@AAA@AACACCCAACCACCAA@C@C@@AAAAAAA@@CAAACCAACCCACACAA@AA@AEACCCECAACCCCACACACAA@CAC@ACCACAACAAAAAAAAA@AAA@ECCCAECE@C@ICKAICC@A@ACA@ICGCECAECKAIAGAKAI@KAM@KAEBIDEFEBIDE@A@E@M@GBABCBABABAD@DADI@GBIDIBE@ECCGECECEAC@A@EBCBCBADADADCBE@C@EAGAECGACACACEGAAAAACAE@AAEACCE@C@A@A@C@EAE@AACAC@C@A@ABC@A@C@CBC@EBG@GAG@ACAC@CBC@CACACEGK@EACCCA@AC@A@CBA@A@C@AAAAAACGCC@GAEAAAAAAACAAAAACACCCCA@AAC@A@CAC@CAA@AAAAAC@CAAA@E@C@EAEAA@CAAA@AAAAAACAAA@CAA@CBE@CFCDAD@DBFBDDDBD@D@D@DAD@DABCDCBCFEDCDAB@BBFBDBDDDDFBD@D@D@F@DCDAD@B@BBB@DBB@D@BAB@B@B@BADABADAFA@AD@@DDBBJDD@D@B@DB@B@B@B@BADADCDCFEFCDCBEDA@@B@@@B@D@B@F@JADABABABGFIJABCBCBCD@BCB@@@DDF@B@BEFCFADADAFCDADABCBC@CBCDGDCFCDEDCFAFBD@FBHAF@FCFGFIHMHEDE@C@CAE@E@EDGHELCNGRAFAF@F@F@BABC@EDCBCBCFEHEFABABAFCHABABCBGBMDGDGFCFADAB@D@FAD@D@F@BAHADGDGDQDA@ABAB@DAH@DEHEBGBIBG@G@GDEDCDCBAHAFEHCHEFCDIDEDADAD@B@B@DADC@C@E@IBGBCDAF@HAH@BCDCBEBEDGDIHEBAB@B@BBB@@@@ADADEBABGAA@EBCBA@AD@B@B@B@HBHBD@BABCDCBMDIFEFCJ@F@HDHBH@BAD@BBDDDNFFDFD@BBDABADCDCDGJCDCF@DCHCFEDIDGDEBABIFGDCDAD@D@DBD@@@D@D@DAFCDADEFEDIHGFCD@BBDDDDHBB@BAD@DBBDBDDBDBFADADCDKDA@C@AACCCAC@ABCBAF@H@DCBCDEDEDEBEBADAF@HBH@BAD@BCBABCDAF@B@F@FBHBBBDDDBFBF@FBF@F@FADABA@A@AACBC@CDEFED@BAB@BBD@DBB@DBD@F@FAF@DAFABEDABA@C@A@A@@A@CACAAC@CBABCFCFADADCDCFBDBBBB@BCFADEDADAH@FBFBF@D@DCBADAF@DBDBBDBBDBB@BABABCBCDABEBC@ABE@ABCACAEAC@E@CBCB@DADADCDCBADABBD@D@FADAFEFCFEBAB@BAHAFAF@BCFAFBF@HABABABCBEFEFAFADBB@BADCHCFCHABC@IDABADAB@B@FDF@J@F@FADEFEJCDCFCFAFBF@DBD@F@HDFAB@FDFBDDDHDFDDBDFDFFDDFBDBBB@FBBBDB@D@DABGH@DABAD@D@DBD@DCD@D@D@D@DADADAD@DAF@FCFABAB@B@D@FAHAFAFAD@JBDBH@D@BABADGHA@EFADCH@J@BAB@B@F@DABCBABABC@IBCBABCF@BBFAL@DARAL@BBJ@DADAFAHABABABABAB@B@BFXDFBDAD@DFH@F@FAF@DADADCHAHCFADBFAF@DAD@D@@@B@BBDBB@DBBBB@BAD@BABCF@@@@@BABAB@DAB@D@D@D@D@H@B@D@D@BBBBDBDBB@DBBBBBBBDB@@@@@BD@DBD@@@@@BADABCDCFCDCDCBCBABA@A@A@ABA@AB@B@B@BBD@B@DAB@BAB@B@B@BBB@@BBBBB@DBBBDDBDBDB@BB@B@D@B@@AB@BB@BDB@@B@D@BAB@@@B@BA@@BABA@CFA@@@@BABB@@D@@CFAB@BA@AB@B@B@B@@AFA@CB@BAB@D@@BB@B@@@@AB@@@@BD@@@BA@@D@DAF@B@@@B@DA@@B@@@@@BBF@B@B@D@DBFBD@BDLBB@@BD@B@@BD@DBB@D@D@DBBDF@B@BBB@@@BBB@@@BBBBB@@@BBBDJ@@BD@@@@@BABBB@@@@BBB@@@DDB@BBB@BAB@B@@@B@BB@B@B@F@D@D@BAD@F@D@DADAD@B@DABAFABCDC@EBABEJGPEFAD@BBBDBFDHBDDD@DLAT@H@L@@ABADBF@BFDRJDHBZBFBDHDLJHL@FAPIL@BI@I@G@A@CDADOZAP@FBBHBDBDDB@DBD@DBB@FBB@BBBB@BA@@@@@A@@B@@A@@@ABA@@@@@AB@@A@@BA@@B@@@B@@AB@@AF@D@B@@@@@B@@A@@@A@@B@@@@@B@@@B@@AD@B@B@BAB@@ADAB@BABGHOHCBAD@@@FBP@D@B@D@BBBD@BBB@BB@B@BABCHIH@BBBNLDD@D@DAJAD@DBBDDB@DDF@BAD@DADBDBBDBBDBFBF@F@FAD@DBBADCBCDAD@DBDBFADBB@FABAD@BD@D@BAF@FBBDFBDAB@DADBBADAD@DDDNLPNXJFFBFAR@FBDPFF@FADAHEDAF@F@JBJHBB@BDBDBDBDD@BCFAB@D@BBD@DBHBB@D@D@FAF@B@DBDBDBD@B@D@D@DADABCFCBEBABCBAB@DBBFFDBBDD@DFDDDBDBBDBDBFBFBD@FBDDDB@DBBBBFFA@@DCDAB@HBJDJDJDFDDBDBD@FBDBBDDD@DCDABDBFBFBD@DBDDBDADADCDADCDAD@FBDDD@DABAFCDAB@D@DDD@D@DBDBDBDDDDBDDDBFFBBBD@BBD@HAH@DBD@BBDFADAD@D@D@D@DBDBDBB@D@F@FADAD@FADBF@D@F@D@DADCDAB@FBFBBBDBD@DD@DBB@BFJFNFHLDJBB@B@@DBDBDBBDBBCBEAC@E@ABE@C@C@C@EBC@CBCBE@EBAACAEAE@C@C@ABCBC@EBE@G@G@E@EAE@C@EAC@C@C@C@CBABEBCBEDCDEDCBADABCBEAE@CACAC@C@@AA@A@A@CHCLCFAFCDCHIBGBADAD@H@X@DABBBAF@DAJBDBD@BA@A@CBABAB@@@B@FAB@DCHGFEFEFCDCBCFGFABAB@@@DCHGBCBABAB@FABA@A@C@C@AECGI@ABCD@JA@@BAAAGEGK@C@@D@J@F@B@@@B@@@B@@B@@B@@@B@@BB@@@@@B@@B@@BB@@B@@@@@BB@@@@@@B@@BB@@@@@@@DB@@B@@@B@@@@@@@D@@@B@@@@@@@@@BAF@F@DABABA@E@C@AAE@@@AB@BADC@A@C@CAC@@@@BABAFCDABAB@D@B@B@B@B@@@DABAB@BAJ@B@BAB@@@B@B@B@B@@@BA@ABABAB@B@HBF@B@BA@@@C@ABA@@BAB@NGFABA@@@ABA@@DA@ABCBAB@BAJ@B@BAB@BCDEDA@CAC@A@@@C@@@A@A@ABABCB@B@D@B@@@DD@@BA"],"encodeOffsets":[[102362,29247]]}}],"UTF8Encoding":true});}));