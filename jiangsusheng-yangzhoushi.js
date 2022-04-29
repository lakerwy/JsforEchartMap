(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('扬州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"321012","properties":{"name":"江都区","cp":[119.567481,32.426564],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCBEBCBE@E@I@CACAC@C@EDCBCBCDCBEDA@CBGCAACCAEAE@EAEAE@K@E@C@EBEBEDEDGFCFIFIDEBCBEBGBE@EEACEIACACCKOKCACE@EDCDCBCDCBC@E@EAC@EACCE@G@CDGDCBCBEDGDEDCHAFCBC@A@GACCECACCCCEGAC@IBI@EBG@C@G@E@@@CBE@CAIEEGC@C@G@E@C@EEQJGVITHTDFGBCDMBEBEBEHEHADCACACCI@ELEBCAEIACAE@CAEA@E@CCEAA@@@@CAECAACGBEFGFEHIDCBCBCAGCCACECCACAACECECBEBE@CBGAC@EBCCCAA@EDCBA@@@@@@BEBCAECGECCCECEEC@IICACAGGEFCBEDCBCBCBEDEBEBCBGBE@CBaBoI]SMOOBGBABCDCJGLQTMPSNSNUJWFWDSBSBE@CDGFEBGBG@E@GBCB@B@BBB@DHFBBAD@BC@A@C@IECAA@A@ABAFAF@DC@AAAAACCACAE@CB@D@BBFDBHBFBF@BD@B@DABMJCBOBABCD@BDH@B@DCBC@C@MDA@G@CBADAD@DBF@FAPB@H@B@D@J@B@B@BB@B@BIREHIFCFADAHADCFAFCJAFABCDEHCHEFABMPINCDEBEDQNGJGHCJCFCJCJCH@F@HBJ@HFPDHHJBDDHAFO^Gd@BCTAFG`D@FBNCHCFAHBBDBBBHBFDFDDDBHBFBH@J@FAN@FBFBDBD@FCBG@CDEBEHGL@rCXFd@`@BJ@@@@DtDfHX@@@@@BLBT@J@H@FBNBRDJ@D@NAV@F@HCDCRIFAPAN@JBFFFHBHAFNRlt\\NNDBA@IDADCDEDALCHAZAJADAFCBE@ECACAECGGCEEACACCC@CCAEAEBG@CBEHGFEFCFEBCBCBEAEBC@EBCFCLAFCFCBCDACGCAAGAEAK@CDCDAFAHAD@F@D@H@F@"],"encodeOffsets":[[122773,33459]]}},{"type":"Feature","id":"321084","properties":{"name":"高邮市","cp":[119.443842,32.785164],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FAFADCHGJCFCFCDCDAFEJIDEFIDI@EBEBC@E@G@EBEBKBCBCFKBG@E@@@@@A@E@CBCDGBAJGFEBCAC@EAC@MAEAECCAE@E@GCGCE@CACBCDQDGBCFCBCFAHCBCAE@EACAEBEDGBEBEDGBEDCHCDAF@F@NAHAF@D@FDNBHDBDDBHHFFFDHBHCBCDE@C@C@CAEBE@EDK@CDKLC@@BCCKBADAHE@@DEACAA@ACACC@@@A@@D@NGAAMICC@A@CDCFCBG@C@AACECGCCECC@EAEAGBCB@@ADCDAFAFADAHAF@FDNHJDD@JAAIEECIMC[MksMQBEAGEGEEIAM@OBEBQJCDGDE@U@MBC@I@QCMAEAG@I@S@KA@A@@@@GWCeCs@@@@AI_@c@WEqDK@GHAFCF@DAHEDC@CAEAEAM@EBI@G@EAGACACCCEAEAGAAACGAEBGDMDEAC@GBEBC@KDG@I@EBI@EBIDEBG@EBEBGBSFCBIBGBK@EACCCCAC@C@EBE@GAECEMGGAGCCAAGCGCEAECACAIBC@CBEBEDC@CBE@I@CAACBC@EBA@KACACCECAIAI@EAIAGAIAGACAIAE@E@G@EAGAMCC@EACCCAC@CBEHADCDADAFAD@@@@@D@@@@@@DHEBC@EBEBCD@FAF@DBFBDBD@F@DADKFEDADAB@DBfDn@rENBJ@HAF@H@F@D@F@DCFADABCFCDAB@FAD@FAFAD@DAF@DAH@DADAFAFAF@JAL@HAJ@FG^L@ôuLfTZpJ~Ila²GnAdBZB@BBbX`fJR@FRIJCJENGHA@@@G@I@@PALDB@F@B@HCDAJ@DAHBFBNHFFHDF@FBDBB@@@@@D@DAF@FAHADAHADA@@@@@@DAFALCHA@@@@D@F@HBF@J@D@F@FBDDFBF@FBJDHBHBFBF@H@H@LAF@D@FADBF@FBJBJFDFAF@D@DADAF@FADBFDDDDDDDFDFFDDFDDFDDDFFNHHFH@D@D@F@HBFBFFBDBFBHDDFF"],"encodeOffsets":[[122517,33900]]}},{"type":"Feature","id":"321023","properties":{"name":"宝应县","cp":[119.321284,33.23694],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HQLWBAD@LFHBB@LAP@@AB@@@Pk@@C@@@FS@@B@BU@GB@`DBAB@AI@AFCAEAE@A@@CE@@BCHE@@HABG@CBE@AACCK\\YB@D@@@DB@BBFN@hFB@@HRBBBB@B@D@BMNC@ABA@@BA@I@@DEDA@ABA@@CAKCEBEECEBEEKGG@ACEAICEA@CA@C@ABCDEFEBGF@VELC@A@G@AAKAAAC@IAA@@E@@@GF@@ECACEI@CEG@@GGIC@@EEEC@AMGAACAGCCACAAAAC@@@KE@A@@@G]EUAE@EACBC@E@K@GAGEECCAGAEACEEEAGAE@C@C@G@GEMGEECCECCCCEECCECECCCCCCAEBC@EBEBC@C@CBECEIEIAEAE@CAEBC@E@KBG@G@E@EAGAGAICEAE@EACCEAE@C@I@E@GAE@C@@@@@GBKDEBCB@@@@@@CBGBCBGBEBE@CBC@@@@@A@CAEAE@GCEEMGEAGACBI@CBGDA@E@A@KCOB@@@J@H@@GBMHIFIDQJ@XiXKXEP[dGbETOLA@sTQFYLABMH@@YGQEA@AD@@ERDDHDABMlG^DD@BA@@@MBAGIBG@CDA@DUJG@@@GNGV@N@BFRBDJFHFLTB@BPA@CJMJ@B@FFAFA@@NBLFRDH@F@LBLBVBHBHBHFLBNBJDZ@JBJBAFEFCDGFCBCFAFADCNADAFCFKPDHHDDB@@F@H@D@FBdHLF\\HTDTDnBR@lBD@XBpJ`BLBNFZDHDFBXPRLPJHDPD`@B@JBlLJBH@FALCHCLS@@PC"],"encodeOffsets":[[122437,34201]]}},{"type":"Feature","id":"321002","properties":{"name":"广陵区","cp":[119.442267,32.392154],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAIIS[MBOJA@E@A@@@AAACAEAAEECACCGCECGAEAE@YCA@@@@@IAC@EAAAECECAAAAACAC@A@A@ADM@ABC@G@EAC@CAAA@AGCE@@CAA@BV@TCJAHABEFODA@IAEE@@AC@EDI@CACGCMAOASA@F@P@H@x@BB@B@J@@@BR@B@@@DQ@CBM@QCOADE@A@@MGECACDCAAc_@\\@B@DKPABC@A@GGEACAA@ABGHGFABCBKFGDABCDCF@FAB@F@B@BC@A@@BADBTHn@HDR@FC@A@CAC@GA[EOAWA@@AB@B@DBD@BAB@@@B@@F@@@BB@B@D@B@@A@@BA@@AA@@AAAA@@@@@A@ADABAJAF@BBB@BB@F@@@@@@F@H@@AB@@@B@@@JATAF@B@@@@BFF@B@D@B@@@@@B@BABBBADBD@F@HBDBD@@@@DBD@BABCF@B@B@D@@BBB@N@DBF@VHFBJDF@@H@F@R@B@DAN@HBDBDBH@NBN@LBNBHBJBHDHBB@FFCFADCJMNOBAFEDGFGDCBABEDIBEDEBCBGBCDEJEFGJQ@A@AAAA@A@I@C@A@G@A@BO@EAE@CBCBCDAH@B@NCD@D@DA@C@ACG@ADCBAPADANIBA@C@AACE@EAGACAAE@A@CDAF@DBDBBDBBBBD@@CBEBEBAB@B@DBJFD@B@D@@ABCAAGE@CAA@A@ADAHAF@H@HAFAHEDCF@TATAXCXEVITMTMNORSHKDIDCBAHAPA"],"encodeOffsets":[[122598,33072]]}},{"type":"Feature","id":"321003","properties":{"name":"邗江区","cp":[119.397777,32.377899],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@H_BEDS@AHcP]BECGACGICGEO@GAI@G@EDGDIDIDEDIHGHIRM@EAACGAGAIAGAM@KAM@MAGACAC@GBM@C@A@Q@E@GE@ICEAUGE@CAM@A@AA@@@C@A@ADEBA@AAC@C@@C@CAGAE@C@CAABAAABA@@@@@A@C@A@E@AE@@@@@ABEBS@I@@@A@@BA@@@G@E@@@@E@A@@AAA@ABEBIBABCB@@@@@B@BB@BB@@BB@@AB@@@@A@C@AAA@@E@@@@A@@BA@AAC@C@ABA@@XBPB\\FHBD@DBB@D@@ECQ@GGmASBC@AB@D@@A@A@EBA@EDEDCBAHCLEDABAHEHGBAB@DBFBHHB@D@BALO@C@A@[GGA@C@@@EHABABEBsLaBG@qIkU_WQSM@[@KBBDBH@B@@@BB@DBB@BB@BABA@@@@@@D@@@B@BCD@@BB@B@BA@@FA@@@A@C@A@ABA@@@@BAF@@C@ABADABCAA@AB@B@@CFABA@ABAF@BABAF@FBFPHBB@D@@ABAH@FAB@BAB@JABCF@BG`ANGbG`ER@@@@GAAACBA@EHINAB@B@BLtBL@@@@CBILCDAB@DEFA@@B@BLLBD@DBD@D@FAFAH@N@N@F@F@LBR@FDTEFCDA@IDA@ABGDIDCBADEFGFABBBFRDHBDBH@DBH@D@BCHEF@B@B@@@@B@@@@BB@@@B@B@@@@@D@@@@@B@@@@B@BB@B@B@DA@@@@B@B@@@BA@@@@BA@@@@@AJ@DH@BB@BBB@@@@@B@@AB@@AB@@@DE@ABA@@D@B@B@BB@BBBBD@@@B@@A@ABCDBBCFAF@FAHCJBFADCDEBEBCFADCFJ@JBDBDFBDBD@LAB@FADBDDBJ@F@DAD@FCFADAD@JADBDBBFDFDHBHDBHDHBNHDFBF@HAF@F@DBDDDDDFBL@HAJADATEHAFAFAH@FAJCFAJ@FAJ@H@LCD@FAHA"],"encodeOffsets":[[122330,33432]]}},{"type":"Feature","id":"321081","properties":{"name":"仪征市","cp":[119.182443,32.271965],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DEBCDEFAFADCBCAEDIBG@EBEDEAADCBAB@@@@A@@ACAA@AAAA@A@C@@@AB@BCF@@A@@BA@@BA@@@@@A@AAA@@ACGI@@B@@@@AB@@@@AB@@A@A@@@@@CBA@A@A@@A@A@@A@@@@@C@@@@@A@A@@@A@@A@@A@@@@@@A@AFEDG@A@CAG@CAGACCGEQAABAHEFEBCDAJCHCBAB@JCB@DCFECS@EAQ@K@E@E@M@MBGBE@E@CAC@CACKK@A@AB@FE@CBADCJKDA@@@@AKKs@A@ABAJMFGB@DABBHB@@@@FQH_HaBMH_@ADEBA@IBA@ABA@EBGBA@@@CAAOGAE@EBEBA@ABEBAB@BADE@@@ABAB@DBBABCBAD@@@BE@A@@B@BAB@D@B@@@B@@EB@@A@AAA@@DC@A@A@@@C@@@@B@BA@AAAA@CAA@@A@@@AAGAC@@aFQDC@E@G@E@GBC@GBQAI@QBM@C@GAM@EAE@EBG@E@C@EAG@OEWK©boJkDqCkEMHCDADCB@@@@@@GB@@@@M@CB@@@@IBODSFEF@@BFDFBJBBAJAFBLAH@@@@CFAD@BBFDD@B@D@BEFADBDBF@H@J@HBDHHABSPEHCF@@@FFF@@JBBBBBBFDDDDBBB@KJ@@@@CBCBWHABA@@D@@@BB@@BD@Z@FB@HAD@D@@C@C@CCC@CBIF@@@FAD@BEBCB@FAF@RBFBDHDD@BB@FFFDD@BCHILAD@FBH@H@@@@@@@DBDD@D@FA@@JEPPHFNBJ@BCJADBB@LMJCHAF@DDDBBDDDHNDDJFLDDDDBFBJFFFHHHDFFD@HBL@D@ADEFCDHJBDDDBDDFBJADBFBHFDFDBBDBFDDDBD@FADAFCDEBCBEDCFCDBD@FDDJF^H@@@B@@@@AB@@@@@@@B@@A@@B@@B@@BB@@@@@@@@@BBB@@@@@B@AB@@@B@@@@@@@B@@BB@B@@@@@@@@@B@@AB@@@BA@@BB@@BADBDA@@@@@@@BB@@@B@@@B@@@BDBPJ@@B@@AFI@@EG@@@ABCDGFGBAB@B@H@BAD@LGFAFBF@DF@D@D@H@F@JBHBDBFLD@C@@@@BCBEBCDCBCFGDAD@DBDDFBD@NDHBFBH@F@F@JBDBHBJBHBJBFB"],"encodeOffsets":[[122165,33383]]}}],"UTF8Encoding":true});}));