(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('铜山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320312","properties":{"name":"铜山区","cp":[117.183894,34.19288],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@@A@@@@B@@@CK@@@@@@A@@@@@@@@@@A@A@@@@@@@@A@@@@@@@@@C@@@A@@@@@@E@A@@B@@@@@@@B@@AA@@@@@@@@@@A@@@@@@@@@@@@@@@@AA@@@@@@@@B@@@@@A@@@@@A@@@@@@@@@@B@@B@@@@@@B@@@@@@@@@@@@@@@@@@AA@@@@A@@@@@@@A@@A@@@A@@@@C@@@@@@@@@@A@@@@@@@C@@@@@@A@K@@@@@@@@A@@@@@@E@@@@@@@@B@@@@A@@@@@@B@@@@@@@B@@@@A@@@@@A@@@@@@@@@@@@@@@@@@@@D@B@@@@@@@@@@A@@@@@@@E@@@@@@@@@@@@@@@@@@@@BA@A@@@@A@@@@A@BH@@@@@@B@@B@@@@@@@@DE@@A@@@@A@@@@@@@AB@B@@@B@@B@@@@@@@@@B@@B@@@@@@@@@@A@@@@@@B@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@BB@@@@@B@@@@@@@@@B@@@@B@@@@@@B@@@@@@@HDD@@@@@@@@@@B@@@@@@A@JTB@@@@@@@@@@@@BN@"],["@@@@@@A@@@AA@@@@@@@@@@@AWA@@@@@@@@A@JX@@B@@@@A@@@@@@BA@@@@@@@@B@@@@@B@@@B@@@@@@@@@@AB@@@@@@@@@@@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@A@@B@@@@@@A@@@@@@@@@A@@B@@@B@@B@@@@@@@@B@BA"],["@@A@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@B@@@B@D@@@B@@@@@@@@BBA@@@@@A@@@@A@@A@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@B@@@@@@A@@@@@@E@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@C@"],["@@CHADCFADCBADCDEDEDG@G@GBCF@DBDFDBDBFCHCBCBEDEDABEFEBCDCBC@G@E@CAE@C@GACAGAGAEBEACAACCCAEAEAEAEC@I@GBGBEBEDCDAD@DIBE@EAEAACEACCCA@@O@A@@K@@KAG@G@M@WAIHEDIJI@@@@KA@[@@@UNUHIFCBEBSAHXBDBDA@KBAA@@EA@@IBOFG@@@@FBDAF@D@F@FADAD@DADGFE@C@E@G@EBEBCDCDCDCFCDEFEDI@I@G@GBEBCBEFSFEAICA@ANABCBAFCFABGAE@GBC@A@@@DFBFBJBJBFFFFHDJDHFBDBBBBB@BAL@BBDHL@BCBABCBC@@L@D@@BFHD@B@HCFCD@@@@EB@@KCKGEE@@MF@BATADCBE@G@EBIDGFKFGDGFKHGFEDCDAF@H@F@FDHDFFJBLC@EDABADAD@F@DBFBFDDFFHJDHBD@D@D@H@DAFAB@@A@KFABE@QB@BA@BPP`@DKBCDCBGBG@EBEBIDEBCBGDCBEDIBCBIBE@EBGAG@EAGCIAC@IACAEAGECCECECCAE@G@GAKAG@G@G@E@CAEBILYXFFDBDDHFDFBDBDDFDDDDDDFBFBHBHDFDDBBFBBBDBD@F@HADBDDJ@HPBDBHNH@BHD@bANIDEVCFFHBP@NCBA@WTCBHLHLADCJA@B@PAD@BJ@F@JCLAF@B@@GDAHADABAFAHFDDBDB@BFBF@BLA@TKD@@BHFRJB@@DDBHBD@@FDB@BDBDDFDDDDDBDBHDF@F@FAJ@D@F@@@@@@@HBDBBB@BBBDBLBFJDF@@DBD@H@D@DABA@@B@FBBBBDDBBBD@BBA^L@^B^@F@RCVC@KA@@@K@A@AAEK@ABKBO@C@C@G@GBABEBIBAB@HBNBJBD@BA@ABCBI@@BC@@@@@ADI@@BA@@@@SI@CB@@@@ABCBG@A@ABC@A@A@@H@B@@A@@B@BB@@BBB@@@BFBHB@B@HA@@GW@@B@NAB@@B@@FALCFCB@DD@@@BGHB@@@@@HG@A@BPJBBFH@@@@BAA@CEAAMKGCAACEACGQCG@@@@BAB@dHDBBB@DAB@B@@D@@@BB@BBBDBDAB@DBD@BADABCBA@C@@BABAB@DBB@BBNFDDBB@@@BBB@@@BBB@@@@@@@@BB@D@BBB@F@@@@A@@@@@@@@@@B@@A@@@@@@@@B@B@@BD@@BBB@DBDBBBBB@B@@@D@@@B@B@@@BAD@@ABAB@@@@ADAB@@@B@@@B@@@@@BABAB@B@@@B@@@B@@@@@BA@@B@@@@BBBB@BB@BB@@B@B@B@@AB@@@BABAB@DBB@@@@@@@@@@B@B@@@BBBBBAB@D@B@@@B@@B@@B@@@B@@E@KB@@@B@@@@LA@@@@@@@@AB@B@B@@@@@B@@BD@@@@D@@BB@@@@@BB@@@@@@AB@@ABA@AB@@@@@@AB@B@@BD@@@@BB@@@@@@@@@BA@@AA@@@@@A@A@A@@@AB@@@@@@@B@@@BBD@@@@@@DB@@B@@@B@B@BAB@@A@@B@@A@BB@@@@@BBB@@@BBB@B@@@B@B@@@@@BA@@B@@@BBB@@@DBHDB@DB@@@@@BBB@@@@@@B@B@@@@B@@B@@@@BD@@@@@B@@B@@@B@@@@AB@BA@@B@@BB@@@@BB@@@@@B@@A@@@@@@@A@A@A@@@ABA@A@@@A@@BA@@B@@@B@@@@@@@B@@@@@@@@@AB@@@@@BB@@@@@@@@BB@@@@@@B@BB@@B@@B@@@@@@B@@@@@@@@B@@@@@@BB@@@A@@B@@@@@@@BA@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@B@@@B@@A@@@@@@@@@@@@B@@@@@@A@@@@@A@@A@@A@@@@@AB@@@@@A@@A@@@@B@@@@@@@@@@@B@@B@@@@@B@@@@@B@@@@@@@B@@@@B@@@@@B@@@@@@B@@@B@B@@@B@@@@@@B@@@@@BB@@@@@@@@@@@B@@B@BA@BB@BB@@@@JEBABABA@@B@@@@B@@B@@@B@B@@B@B@@BB@BB@B@BB@BAB@BCF@@@BA@@@A@@BA@A@AB@@@@@@@@@@@C@@@A@@A@@@@@@AA@A@@@@@@@@@@AAB@@@@A@@@B@@@@AA@@@@@@@@@@@@@A@@@@@@@A@A@@@@B@@@@@@@@A@@BB@@@@@@@@@@@A@@@A@@@@BB@A@@@@@@@@B@@@@@@B@@@@@@B@@@@@@@@@@@B@@@BB@@@@@BB@@B@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@B@@@@B@@@@@@A@@@@@@@@@A@@B@@@B@@@@BB@@@B@@@@A@@B@@@A@@@BA@@@B@@@@@@@B@@@@@@@@@@@BB@@@BA@@@@@@@@@A@@@@@@@AB@@BB@B@BBDB@@DBB@@BB@@BBB@@BB@@@B@@@BB@@BB@@@B@@@B@B@@@B@B@@B@@@@@@@@@BB@@@B@B@BA@@B@@@DAB@@@@@BB@@B@DBBB@@@BB@@@@B@@A@@BA@@@@@@@@BB@@@HEFABAB@B@@@B@B@@@BA@@B@DCJCLEFCDAPGB@@gBEJGFAFADAMCqWIGGEIEQCQGGCIMBC@CDGBIAICEMQ@IBADCFGBCV[DE@I@ECEWGI@CAGECGCCEBILEBEAKGAEDGDC@KGIQOMMGGEMCMBEDEJ@JCB@@A@A@C@EBCBADA@@@A@AC@C@AAIKACECKGEE@EQAIAK@EAMDUBkDCDCFCHARALC@@@@A@@@@A@@@@@A@@@@A@@@@A@@@@@@AB@@@@A@@A@@A@@@@@@@@@A@@@@@@@@@@A@@@AA@@@A@@@@@@A@@@@@@A@@A@@A@@A@@@@@@@@@AA@@@@@@A@@@@A@@A@@@@@@AA@@@@A@@A@C@@@@@@@@@@@A@@@@@A@@@@@@@@A@@A@@@@@@@@C@@@@C@@@@@@AA@@@@@@@A@@@@@@@@A@@B@@@@@@A@@@@@A@@@@@@@@@@E@@@@@@@AA@@@@@@@@@@AA@@@@A@@@@@@@A@@@@@AA@@@@@@@@@@AA@@C@@@@@@@A@@@@A@@@@@A@@@@@@@@@A@@@@E@@@@@@@A@@A@@AA@@@@@@A@@@@@@@@@@@@AA@@@@@@@@@C@@@@@@@E@E@@@@@@@@@C@@@@@@@@B@@A@G@@@@@@A@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@AA@@@@@@@@@A@@@@@@@@@A@@B@@@@A@@@@@A@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@A@@@C@@@@@@@@@@@C@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@C@@@@@@@@@@@@A@@@@@@@@@@@@E@@@@@@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@@@A@A@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@@@@@BB@@@@@@@@@@BB@@@@@@@@@@@@BB@@@@@@B@@B@@@@F@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@D@@@@A@@@@@A@@@@@@@@@@B@@@B@B@@@@@@@@@A@@A@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@D@@@@@@@@@B@@@@@@A@@F@@@@@BEA@@@@@@A@C@@@@@@@@B@@@@@@@@@D@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@B@@@@@@@D@@@@@@B@@@B@@A@@@@@@@@@@@B@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@BBA@@@@@@@@@@@ABDL@@@@@@@@@AB@@@@B@@@@@D@@@@@B@@@@A@A@@@@@@CM@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@ISA@@@@@@@@@@@A@@@@@@@@@@A@@@@@@B@GC@B@@@@A@A@A@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@A@E@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@B@@@A@@@@@@@@@@@@@@BA@@@@@@@@A@@A@CF@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@@@@B@@A@@@@@@AG@@@@AB@@@@@@@@@@@@@B@@@@@@@@@@@B@@A@@@@@@@@@@A@@@@C@@@@B@@A@@@@@@@@@@@@@B@B@@@@@@D@@@@A@A@@@@@@@@D@@@@@BA@@@@@G@@@@@@@A@BCA@@@@@@@@@A@@@@@@@@@@A@A@@@@@A@A@@@@A@@@@@CA@@@@@@@@@@@@@@A@@@@@@A@@@@@@@A@A@@@@@@A@A@@@@B@@@@@B@@@@@@@@@@@@A@@@A@@@@@@@@A@@@@@A@@@@@@@@@@@@AA@@@@@@@@@@@@@E@@@@@@A@@@@@A@@@@@@@@C@@@@@@A@@@@@@A@@@A@@@@@A@@@@@@@@@@@A@@@@@@@@AB@@A@@@@@@@A@@@@@@@@@@@@@@@@C@@@@@C@@@@@@@@B@@@@@@@@A@@@AA@@@@@@A@@A@@@@@@@@A@@@@@A@@@@BA@@@@@@@@@A@@@A@@B@@@@@@@@@AA@@A@@@@@@@@@@@@@B@@@@@@@BA@@@@@@@@@@@@@A@@AA@@@@@@A@@@@@@@@A@@A@@@@A@@@@A@@@@E@@@@@@@@@@@@AA@@@@@@@@A@@@@A@@@@@A@@@A@@@@@@A@A@@@@@@@A@@B@@@@@@@@@@@@@@@@@A@@@@@@@@BA@@@@@A@@@@@@A@@@@@@A@@@@@@@A@@@@@@@AB@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@A@@B@@@B@@@@@@@@@@@BA@@@@@A@@@@@@B@IW@@@@@@@@@A@@@@@@@@B@@@@@@@@@@B@@@@XB@@@@@@@A@@@@B@@@@@@BB@@@B@@@@@BB@@@@A@@B@@@@@@@@@@A@@@ABB@@@@@B@@@@@@B@@@@A@@@@@@@@@@@@B@@@@B@@@@@@@@A@@@@@@@@@B@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@A@@@@@@@@A@@@@B@@@@@@@@@@@@@A@@@@@@@@A@@@@@@D@@@B@@B@@@B@@@@@@B@@@@@@@@B@@A@@@@@@B@@@@B@@@@@@@@C@@@@@@F@@@@@@C@@@@@@B@@@@@@@@B@@@@@@@A@A@@@@A@@A@@A@@@@@@@@A@@@@B@@@@@@B@@@@@@B@@@B@@@@@@AB@@@@@@@@@@@@@A@A@@@@A@@@@@@@@@@@@@@@@@@A@A@@@@@@A@@@@@@F@@@@@@@B@@@@B@@@B@@@@B@@@@A@A@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@B@@@@@@@@@@B@@@@A@@@@@@B@@@@@@A@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@B@@@@@@@@@C@@@@@@@@A@@@@@@B@@@@@@@@A@@@@@@@@@@B@@@@@@@@AA@@@@@@@A@@@@@@C@@@@@@B@@@@@@@@A@@@@B@B@@@@C@@@@@A@@B@@@@@@A@@@@@@A@@G@@@@@@@@@A@@@@A@@@@@@@@@@D@@@@@@@@@D@@@B@@@A@@@A@@@@A@@@A@@A@@@@A@@@@@@@A@@@AA@@@@@@@@@@@@A@@@E@@@@@@@@B@@@@@@AA@@@@E@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@E@@@@@@D@@@@@@A@@B@@@B@@@@@BA@@BA@@@@B@@@@@@@@D@@@@@@B@@@@@DA@@BA@@@@@@B@@A@@B@@@@@@@@I@A@@@@@@@@A@@@C@@@@@AC@@@@@G@@@@@@@@@@A@@@@@CCCA@@@@A@@AAA@@@@@ACC@@@A@@B@FC@@@A@@@@@@DA@@@@@A@@@@@A@@B@@@@B@@DB@@B@@@@@@B@@HF@@@@@@@@BB@@@@B@@@BB@@@@BB@@@@@@@@N@@@@@@B@@@@H@@@@@@AB@@@@@@A@@@@@@@@@@B@@@@@@@@G@@@A@@@@A@@@@@@@@@C@@@@@@@@CBA@@@@AG@KDCFE@G@CDCFCFADE@ADAB@@B@@LHFAFAL@@@@@@@HBBEBG@CBGDAFCJGB@J@DFDDDFDDDBD@D@BC@GJCJCf@NBRRJOBCBAAAOQAC@@@@@@CC@CDAJGDADA@CAKBCL@D@DADEDCFCFALAJBLFH@H@D@JCHERCFAFEHERCH@F@D@DBBBDNBRFLBDBBJFBF@H@BABCH@@@@@@C@E@@@AB@B@D@BAB@F@DBHBJ@F@DBBDBFBDBDBBBDBHDBD@B@BADDDFBHBLFFDBB@B@D@FBDBBXFVDBBDB@BBBHHBB@BBDFHBDBBABABABAHAH@D@BDBDBJFBDBB@D@D@BAF@F@P@D@BBFHAXATCL@J@PBVFTHNDbJ^FJDNEDA@A@@@@DCFGDEL@XAT@RA@@HDDDBFDHDFVLDDBPBLDHHDRBHBJ@@EBI@C@@@@B@@@D@F@B@H@LAB@B@BABABADA@@DAD@D@B@D@F@@@B@D@CGEAEA@@AEAEGAIGACBEBC@GBE@CAE@E@EBEDEDCDICCCEEECECC@E@C@CAC@EBE@G@GAE@EDCBEBCDEDEDEBCDGBCBEDEBE@CBGBEBCBGBGBCBG@E@CBCDCDEJEHEFEDADCFEDEDEDCDEFEFEGEAC@C@CAECCCCAAAECECAACACAEACCC@EECACCAEAE@E@C@GBCBCBGBCBE@C@G@C@CAEBE@KBCBE@C@G@E@EAE@I@EAGCCAECICC@IAIACBI@G@EACCAC@C@CAE@C@CBGBCBEBCBE@C@EAEGAE@C@EBGBC@E@C@EBEBEAIACEGCEDIBE@C@CCACAEAEEAEAGAI@EAG@CAEACCCACCCACAGCCACAGACACAEAEAGCG@ICC@G@EAG@C@EBC@EDCBCDADAH"]],"encodeOffsets":[[[119945,35189]],[[119896,35121]],[[119970,35121]],[[120220,34855]]]}}],"UTF8Encoding":true});}));