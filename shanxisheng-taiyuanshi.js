(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('太原市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140105","properties":{"name":"小店区","cp":[112.564273,37.817974],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@H@B@F@B@@@B@@@@@@@@@H@D@F@B@B@D@D@B@F@DBF@D@F@B@F@F@F@@@@@@G@@@@@@@@R@@AB@@@DC@@@@@@B@BBB@B@@@B@@@@@B@@@@@@@@A@C@AA@@AA@A@AAECA@@@@@@AG@@@@@A@@A@@A@@@A@@@@@@BC@@A@I@C@@@A@AB@@@@@@@@A@@BC@@BA@ABABCDCD@@@@@@@@@@@@B@@@BAB@@@B@@@B@BH@P@@D@B@@@BB@B@BBD@@@B@@@@@B@@A@@AA@A@@@@B@@@@@B@BD@@@@@@B@@@@@@@BA@@B@H@@JL@FAF@FADAF@FFHJFDNBFD@FFHHNHFFHFDL@DABGJCDA@A@AA@CC@A@C@C@AACAAAAKEGGEM@GHIJQ@C@AAAACECCCMGKGCACCA@CAA@C@AAA@AC@A@CDABCBA@ABA@ABABADABA@ABA@A@C@C@EACBCBABCD@BABAAAAACCCCAAA@AACACAA@AA@A@C@C@EAGAIAE@ACAA@E@I@E@EAC@C@C@CAAAEAAE@CAA@CDABADABCBA@C@C@GACAACAEAE@A@C@AAAA@GAE@CC@EACA@AAA@EBABEBABABAFAFAD@DADA@C@@@@@@@GACCACACAGAE@CAC@C@E@E@EBEAC@EACACAAAAC@C@CBC@E@E@@@@@ABE@CAE@E@C@A@CB@G@A@@@AA@AACACCAC@EDGDADA@A@C@C@E@CBCBC@A@A@A@A@A@@@ABA@A@@AA@A@A@@@ABA@@@@B@@AB@@A@@@ADAB@BB@@B@@@B@@A@AB@@@@@B@@B@@B@@@@@BAB@BAB@@CBABA@@@AAAB@@@@@B@@A@@@A@@@@@A@@@A@A@@@AB@@ABA@CA@B@@@@@@ADA@@@AA@@A@AA@AAAAAAA@@A@@@AAA@A@A@AAA@@CAC@@AAEAE@A@E@CB@B@DAB@BE@MBOBC@A@AC@K@KAGCCQGICG@KBUNSJEHAFADIHCBA@@@PZRPHBFDL@HBD@D@PNFFFFLJNLNNNJJB@@D@D@LEDAD@F@JBD@@BD@LHLRFHRLNRPXDH@FA^ERGNADCJADAHAH@BBFBFBFBHBN@D@DBLBF@H@F@@@@@@@@@@@DBF@HCJAFAD@@@@AD@@@@@@"],"encodeOffsets":[[115240,38747]]}},{"type":"Feature","id":"140107","properties":{"name":"杏花岭区","cp":[112.560743,37.879291],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@C@ABADCDABABADABC@ABC@@ACCAA@GAACCCAAAA@AEFCFC@C@EAECKAC@@DCDSAMBIAEGQAEBABC@EEECQAEEEKEICC@CDADC@EQI@CBIDGAE_CeGQAE@KHIBE@@@@@AAAEO@@@@@@@@DG@Q@@@@@A@@@A@@@@@@@@@A@C@C@@@@@@F@F@B@BC@AAA@AB@CY@@@@@@@@@A@@@@@I@@@@@@@@@@@@@AB@CACEBA@A@G@@@@@@BE@@@@@A@@@@@E@@@@@@@IA@@@@E@BH@H@J@LB@AB@@@F@@@@@B@@@@@@DBDB@BBBFF@@@@B@BBH@@BB@H@B@@@B@DB@BDB@@B@@@@@@B@HD@@@@@B@DFAB@@@B@@@@@DD@@F@@@@@D@@@@@BC@@v^C@@@@@@@@B@@@HH@@BB@@@FAB@@@@@@C@A@A@GDA@AD@DD@FJJFD@HABGF@B@DBDFFDN@TEBA@DAFAFFBDBJDNBHCDBD@DAHA@@@@DCB@@@BDD@BAHAHEDCBA@ABA@AD@DABAHE@@HGNGPGHGPCXAB@FADAFAFBFDDDDBBD@DAD@B@BBBBBDBDBDAFCHEHCNGLG"],"encodeOffsets":[[115476,38851]]}},{"type":"Feature","id":"140108","properties":{"name":"尖草坪区","cp":[112.487122,37.939893],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DA@@BABAB@BAB@D@AB@BA@CB@B@BB@BDFDB@BB@@@B@@B@@@B@B@BA@AB@@@BBD@@BBB@B@B@BAB@BCDCBC@@B@@@BB@B@B@BBB@@BABA@CBAB@B@@BBB@B@B@BBD@B@B@B@B@BAB@B@B@B@B@B@BBBBBDB@@@B@B@BCBAB@BA@@BAB@BB@BBD@BA@ABA@C@A@AB@@BBBBB@BBD@BB@D@B@B@BA@ABCBA@@B@B@@B@B@DADAD@D@B@BBBBBDB@B@B@BABA@AAAAA@AJ@HBDD@DCFCDADB@BD@D@D@HBF@DBDDHBDEHABBDNHD@BC@CBABBDBBBDDDDFBBDDBBDBBDBBBFFFBB@RMLGDE@E@GBADAF@D@D@D@DBF@DAB@DAD@@@DCDCBCDEHAH@H@DB@FBDDBF@F@@AB@B@BAB@B@BBB@B@B@B@B@B@B@D@B@B@B@B@B@D@BBB@B@B@BBB@B@B@BBB@B@B@F@BCFADCDAFADAD@DADBFDDBFFHDBDB@B@@EBODCBC@G@ABABCDGDEDEDEDGBABCBCFCDC@AAE@@A@CCCC@A@ABABADCDCBADAJERGHI@@GBCBC@CAGDMAICCAEABEBE@CABSFM@ECCECAA@E@AHGBC@IEEIC@@CBCB@HCB@B@D@@@@@@@BA@E@@AA@@GG@@A@@@@@@@@@]D@uD@@A@@@@@C@@@@@EC@@C@@@@@A@@BACEA@@@@@C@@G@A@@@@A@@@CA@ACAA@@@A@G@A@@AG@AAA@@@@@EEAA@ACACA@@@@@@@A@@@@@E@@BAA@@KE@@@@@GB@@@@@@@B@@@@@@@@A@@@@@@@@@A@@DA@@@@@C@@@@@E@@B@@@@@BC@@@@@UA@B@FAF@D@F@@@@@@A@@LSB@@@@C@GICB@BE@@KE@@H@B@@@@@@A@@@@ACC@@AA@@@@@@@B@@@F@@@@@@@@A@@@CA@@@@@@A@@@AF@BA@@B@B@@@@@BA@@@@B@@BB@B@B@@@@ABA@@@AAA@@@CBABG@ABABC@IDA@A@AAC@C@C@C@A@ABAD@DADGDEDEBGBIBCBABAJCDABA@A@ECEAAEIECEAEAAE@C@A@CDCHEBEDC@CBC@E@GBGDOJGFAFBDHFLDBB@FAP@BAB@BC@ABA@A@@@@B@B@BBBBBBBBBF@"],"encodeOffsets":[[115062,38888]]}},{"type":"Feature","id":"140109","properties":{"name":"万柏林区","cp":[112.522258,37.862653],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@AAAAAAAA@A@A@A@@B@B@BAD@@ABA@ABO@EAAKCGEACBEHEPIHCHAF@D@DAD@FCFADGDCB@D@F@BBBFDFJFBFFBFDB@B@BADCBIBADAJAHAFAFCHCBC@CBCBAB@D@D@D@D@BBB@B@JCD@BABAH@BADA@@B@BB@@B@BA@@@@@A@AAA@@@A@@B@@A@@@@@A@AB@@ABE@@B@@@@@@@DB@@B@@@@@@@@@@E@@@A@@@@@@BB@@DD@B@@B@@@@@@@@A@GF@@LF@@ADAHJD@@@@@TA@KB@@@@@@@@E@CBE@E@AVB@@@@D@@A@@@@@AF@@@@@D@@@@@B@@CB@@@@@@@@@B@@@@@@@@@@A@@@@@@HA@@@@F@@I@GAG@M@E@@@@@A@@@@@I@CBK@C@CBE@@@@@@BC@@@@BCBEDI@GAE@C@@@@@@@@@@@EM@@EEBGSGBBKQBAE@@@@A@@@@@ADAD@@@@@B@@@@BF@@@@B@@BD@@DAB@@A@@B@@@@DF@@@@@@CBBFC@ABSBBFC@BDI@BF@@@@@@M@@C@A@@@@A@@@ID@@@@A@@A@@@@@@AAA@A@@@@@@AB@BA@@BA@@A@@AAAAA@@@@BA@@B@D@B@@@@@BA@@@ABI@A@@AACKAA@AAACA@@A@A@A@ABA@AB@@@B@B@B@B@BBB@@@B@@@@@BEB@@AB@@A@M@G@G@C@OJMJEDC@G@ECCACAC@EAAACCAC@C@KCASGE@G@GAQA_K[GaGSCDD@D@BAFABABCF@BLL@@FB@D@F@JDFHJBDCDEBEBC@C@E@CBKDKHCDC@C@CAA@ABARKJSVCPENBFHBP@LADBBFINCDA@OEE@CFQhKTCH@DHDB@BBB@BBD@B@B@@@@B@@AB@@@BB@@@B@BAB@B@D@DBDBB@@B@@@BA@@@ABA@C@CBA@A@A@@@AB@@@@@B@@@BB@BBB@B@@@B@BBD@D@B@D@DAF@B@BAB@BABA@A@@AC@CA@BA@A@@A@@AAAAAA@AA@A@@@A@@B@@@D@@@B@B@@B@@@B@B@@@B@@BB@@FBF@@@B@B@BAB@@@BB@B@@@BCBABABABB@@BDB@@@@@BA@AB@B@B@@@BB@@B@B@B@BB@DBB@@AB@@A@@BA@@BCB@@A@A@A@A@AB@@ABAB@B@BABB@@@BABA@@@@BAB@@BBBDDF@BDBBBBB@@@B@B@B@@BB@BBBD@B@BBBDBDBF@DABCBMFGFCH@BDDD@D@F@B@FBBBB@D@HAFABCD@F@HDF@HAFC"],"encodeOffsets":[[115062,38888]]}},{"type":"Feature","id":"140106","properties":{"name":"迎泽区","cp":[112.558851,37.855804],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCBCBCBC@C@CA@A@C@EFCFCBEDEDEBEDEBA@A@@@CBC@AAC@AACACAA@@@CAECA@ACAAAC@E@E@C@CAAAAAAAAC@@AA@CC@AACA@CAEAEBIBA@I@AABCBC@A@EA@I@IAC@@B@BCBIDAHCBK@ECEGGEGMEG@EECMAECGIEEE@CBEBE@EBK@@IG@A@@@AB@@@@@@A@@@@@@@ACA@@@@@A@@@@@@BBB@@@BA@@@@@A@@@C@AAA@A@@A@@@A@CO@G@@A@A@@@A@@BA@A@@@A@@@@@@@@@@C@CDADAB@BAB@@AD@@@B@@@@@@A@@B@B@@@D@J@BD@@A@@@@B@@@B@@@@BB@@@@@H@@B@@@@B@FDBBB@B@@BB@@B@D@B@@@@@@A@@@@@A@@@A@A@AAA@@@@@@@CD@@A@@BQ@@@@@@@@@@H@@@@E@E@E@A@E@C@E@CAE@A@C@C@A@A@E@C@G@@@@@@@@@A@@@A@E@A@G@AF@D@DAL@D@J@@@@@B@@@@@F@NF@@@@@JB@@@@@@F@@@@@B@@@@@F@@A@@@@H@B@B@FABD@DBA@@@@@@@@@@@@J@@@@@B@@@@@@@@@Z@@DBAB@BBD@@A@A@E@E@@@@D@D@B@@@@@@@@@B@@@B@@@@@R@H@@C@@@@@@P@BFBB@@@@F@JALGF@RBfH`DBFCHAJ@DRJ@FCDCB@DDDFJFLFFRBFDFFD@BAFARBFHJBNATBDC@CD@LBFDFBD@D@DEFE@@AABCBABCBABC@A@E@C@C@CBADCBCBABCBA@C@A@A@ABCBCB@"],"encodeOffsets":[[115487,38788]]}},{"type":"Feature","id":"140110","properties":{"name":"晋源区","cp":[112.477849,37.715619],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@GAEAK@C@CAMAGAEAEAE@ABGBGBCDIBCHMFQB]@ECGOWMQQKEGKQKGC@@AC@IAE@C@CBKFC@C@@@IAMIMMMKKIEEEEOMC@C@GAK@ECGAQOOYC@AACIKQAAC@IBEBGHGPCH@@@@ABAH@DDJ@FCDAD@FDF@FADIHGJCJAFCDC@GBEBGDAHGHEHCJKL@FDFHF@DAHAHEH@DAD@D@BBDDBDDBBNFFDBBFNBD@DABEBCDAFBH@H@FADEHEDABC@@BAD@BTDbH\\H`LRBHBH@F@THDB@L@DBDDDBBFBD@DBDBFDH@D@FCNIPID@H@H@N@B@@@BA@@FA@A@@@@@A@@AA@A@A@A@A@A@@BAB@BAB@B@B@@@DBBB@BBBDLBB@@@BAJ@B@@AB@@@@A@C@A@@@AB@@@@BBBB@BB@@@AB@@ABA@@B@@@@B@B@BB@@@@@@@BB@@@@@JC@@B@@@@@@B@DN@@@@@@@AEJ@ACD@AETABAD@AEDA@@@@@@CE@@@@@AB@@@BA@CC@@AA@@@@@AE@@@@@A@@@@BCBC@@@@B@@@@@BFRAALHAHTFA@FN@"],"encodeOffsets":[[115244,38723]]}},{"type":"Feature","id":"140121","properties":{"name":"清徐县","cp":[112.357961,37.60729],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AFGDIFED@BBJADGBUDCBEDGFGDAD@@@DHBLFVBF@DB@H@@@F@@ADCDQ@IBAFADBDBF@D@BE@K@G@CB@@@DC@E@I@@D@BBFBFHDHHJJLJ@HAVAFCBC@KAMAYEO@Q@KDGDEHGVEXEFEDQDEBAJCHAB@@@@CD@@CBCDCBC@ADCFADABADCD@@MHKDAD@L@LAFAJ@HFFDJBFD@FDBB@BBD@BBBB@D@FBBBBB@BBBBBBB@@B@D@B@HBD@DAB@D@HDBDBB@DDBD@BADAF@HBB@BDBD@BBBF@DBD@FCB@FAFDLLBD@BEFAD@DNP@@DFDFPVLLNPLHNHJBDDJLDDB@@@B@DBDDDDDDJFBBFB@ABC@AD@BAFCFGBC@E@GAGBEDCFABA@CACEMAAECMEAACCCAAC@A@CBC@CFGBGBG@CGECE@ELKDIFGHGBGHCFAHAD@DCBEDIHIJGBC@ECE@EBCDC@ECI@CBGBA@@@@DGHOHGFAJAD@BBLRDJBBD@@@B@DAJGBCBEFGTIVMLAH@JDRHDDBH@L@LBDB@D@PANAF@@ABA@C@ADAF@B@F@FBBB@@BD@DB@BBB@B@B@BB@@B@@@BBBBBB@BBBB@@@BB@@B@BC@@@@@@@ADBB@BA@@BA@@B@B@@@B@@@@@B@@@B@@@@A@@@@BABB@@B@BADA@@BA@ABA@A@@@@@AA@@@@A@@@@BAB@@@@A@@@AA@@ABABC@@B@@@BA@@@A@@B@BA@@B@B@B@@BB@B@BA@@B@B@B@B@B@D@DADAF@D@D@B@B@BCHCFCD@DBBDBD@BBB@@B@H@@@BAB@D@HAFAB@B@DBB@@A@A@@B@BABC@C@ABCBEDEDCBABCBCBE@C@C@E@GAIAC@C@C@C@ABADCDABA@A@ABC@C@ABEBA@@BAF@F@B@DAB@B@B@@ACEACCCEAE@E@GACBCAE@AAC@CAC@AACACCAAAABC@A@CBC@AAAACCBGBIBGBEBEBE@C@CBABABCBC@EBC@CBE@A@C@A@AA@AAAAAEBC@C@@@@@A@AAC@CAEACAE@E@E@C@AAA@AE@EBE@I@K@I@GACAAAA@@GAEBEAEAGAGAIBC@ACEECCG@GACDCDCFEFEBOBC@E@ACEIAAAEAMAAAA@AG@GBG@GDCDCBG@EAGAEAIDCBADCFAFAFDP@BCBO@OBAAA@EAIBG@@@ACEOBICGCECCC@K@GBAA@@ACA@@AA@CBCA"],"encodeOffsets":[[115027,38358]]}},{"type":"Feature","id":"140123","properties":{"name":"娄烦县","cp":[111.793798,38.066035],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACCAECCAAAECACCECICCCCCACCCCCAAAACACAAACEAC@ABCBCBE@A@CAAAACACAAA@C@CBAFEDCFCDABC@C@@BGHIBC@IAMDABEBCBE@AAAACAAAAAAAAACAE@A@C@E@E@E@C@A@CAAAEACACAC@ABABABCFCDAHCDADCBABCBCDCDCBABCDEAC@AAA@C@C@C@AB@DA@@BA@CAEA@@A@A@CBC@ABA@A@@BABA@A@@AAKAG@GDKD@@AA@A@E@A@@E@MBA@AA@ABADEHALEFCLCRCLCFCFE@A@CCAGAACCGEACAMAO@SCQCOEYKMGQIIEM@ICACBKCKCIAAG@@@G@CBCAA@AAEDEBCDEBC@C@AACAECC@E@E@GBMBQDC@CBE@EAKEI@G@IBCBEBCBABABCDCBABABAAAACAIBE@GBEAA@AAC@EBGBCBCBE@C@CAEBE@CBGBCBEBG@E@E@I@GAG@E@CAEBCACE@CCCCCCCCCECECCCAC@C@CBCBEBCA@E@CBABG@E@E@CACBABEDE@GBICE@GACAEAAAAEACACAACCCAC@C@E@GBC@E@CAECAAECCAA@C@A@C@CDCDEBA@C@EAAACAAAC@ABC@EBG@C@EACACAEAEAEBIBG@C@GAEACACAACCCAAA@C@A@CDCDAF@DAFAD@DAHBF@FAFAB@BCBCBEBEBE@CDC@A@@BDBFBFBFBDBDBFDDDDBD@DBD@DBBDDBBDAFADADABCF@D@D@BFH@BCJEHEBCBIBEDEDCFABAD@DCD@BABABADCBAB@FCF@F@HAD@D@DCBABABADBF@D@F@D@DAD@BADCBCBABABAB@@@@@@EBABA@AB@BAB@BABAB@@AB@B@BAB@B@@AB@B@BAB@B@B@B@B@B@@BD@B@BBB@@BBBB@BBBBB@BBBB@@BBBB@@BBB@B@BA@ABA@@BABA@@BA@ABA@@BABA@@BAB@BA@@B@B@BBB@BBBDBDBBD@F@BABBB@BB@BBD@@@FBTDHDFF@F@HBHHDPFJFHDRDJ@R@TBNBH@NBPDNLJHLHHDHDRFNHHDHDVBJF@@PPHFNLJJDBBDDJ@BEPBFNFPBPBLHDAF@HGB@H@FBJAHDDHBFHAFDBBHBNADB@BAD@BF@DAB@D@DBHBB@CFADDFDHFDHBDBBFFBH@LARAN@HD@DCDKDABBHBDDDF@VGHAHAFGAKCKCMDEBC@@@@@@JEN@LFDFD@JAHAHEFGHGNKP@PEJBHCJGHGFCH@JBFLPHJAPFHDTBLJHBF@DIHCJAJARGNEJC"],"encodeOffsets":[[114736,39088]]}},{"type":"Feature","id":"140122","properties":{"name":"阳曲县","cp":[112.673818,38.058797],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GJQHIFCBABCDCDABAB@B@BDDDDB@@@BF@BCDEDADADABCHCFCFCFCHADAB@B@HADCDAP@FA@A@ACGCEECAECCACBC@CBEBCBCDEBADE@A@A@A@AAA@A@A@AAA@A@A@AAC@A@A@A@A@A@C@A@A@A@A@A@A@A@AAA@A@ABA@A@@BE@E@CAAC@ECAG@G@GBCFADCDCD@@C@CBA@CBE@CAC@C@C@E@CBAB@H@FCFKHQNA@EAEEAACAAAACCAACEACCCCAACAAAAB@DADC@MGACBAFGACCGAC@CAE@G@C@CACA@BCDCDE@CCCGAI@@BBBBB@BABABA@A@A@ACAAAAA@C@C@CBCBA@A@@@@A@AB@DABAB@@A@A@A@CAAC@AAA@AAAA@@BAB@D@B@BAB@@AAC@AAAA@AB@@ABA@ABADA@A@@@A@ACAAAAA@A@A@A@A@A@ABA@A@A@A@C@AAA@A@A@AA@@@ABADAB@BA@AA@AAA@A@A@@A@@@AD@DADC@ABA@A@A@AAA@AC@AA@@A@@BABA@A@@@A@@@@A@@AAA@ECACA@@A@ADAB@@ABAC@A@ABA@ABAB@@CBEDGBE@GCE@C@ADEBGBC@A@ADCFCD@@ABBBBB@@@BABC@EBA@@@ADAB@@A@@@A@A@@BA@@B@@BB@@DB@@@BABABADADCBCBADAD@B@D@DCDCDCDEDCBCBAFCDEDADCFABADCFABCD@BABA@ELCBKESEC@IFENFDCDCDCBEFGDQ@C@@@ADFHBHDDL@D@@BBJGDKFIDABBBBB@D@BCFCDEBEDGFABCBC@EBCBABAB@DBB@DDBB@DDDDDBAD@D@BAFALBBJDH@JELAF@JFDDRDHFDHDJDJBHBDFHDL@LCLIDG@EF@LAJALAHEHGFGDKHEHILEJEH@LB@XJXFfHL@BDAFGFI@MFGFCFAF@HFFLJLHNFFJDF@ABAB@B@BAB@D@BBD@B@BAB@B@B@@AB@BAB@BAB@BAB@B@B@D@B@B@@AD@B@BBB@BBB@BBB@B@B@BBB@B@BBB@D@B@BA@@BA@AB@BA@@JCJAH@FAHILGJIHMJINCH@N@H@JEPIRAFBHJJDJDHDLDJ@LCFEDK@GFEFEDKDIFAJAD@DEJEJDF@H@FCHCJCB@J@DDBBHJDBHBLBDB@B@D@H@H@F@F@DBBBBBA@ABAB@BA@AB@BAB@BAB@@AB@B@DA@@BAB@BA@ABA@@@AAA@A@A@@BAB@B@B@B@B@BAB@BAB@BA@@BA@A@A@@@AAA@A@ABAB@BAB@@AF@FABC@EAECGECACDEFGDCFCDCJAHAH@HAH@HDBBFBF@DAHAHAFCJ@F@DBFDDBDDJDDDFFFHFFFD@D@DAHAFC@AFCDAD@BDBF@LALAPAHCJCFCDAHCHBHAB@FB@B@B@FBBD@H@H@FBFBBAD@H@HAFADCFAB@DBBDDBBBF@BAHAJ@NDJBJBH@LBJDJ@NDJBFDFFBDFFFD@HBD@FBBDBBFDDDFFFDFFDHHHFFFHDFDJDFBF@H@HBHBHDF@NBHDDDHDH@HAHDHBHBDBHFFFFDFDFBF@H@JBHBF@FDHDDFFHBDF@FFFHBDFBDDDABC@E@C@EDEBCHCJ@DBBBHAFADBFBDBHD@DFDDFDDDBFDDD@D@DDDFBDBFBBFBDBHBDDDFBHBFDFBFBDDLDTCFFRFDD@FETCDBDD@@@DBDDFBHBJBJ@JDJBJ@J@LAHAJAFAFADEDCAEC@AA@AAA@AAA@A@A@@@A@A@A@ABA@A@A@ABA@@BA@ABABA@AB@@AB@@ABABA@@BA@ABA@A@ABA@A@C@AAA@A@AAA@AAAAA@A@AA@AA@AAAA@AA@AA@DINKLI@KMUKICCC@CCAA@ACCGAGAC@G@CBCCEAAACCECE@EBGBABCACAEAC@GAEBGACBAACAAEBAACCAI@AAAC@AAC@A@CAEAECCGAEA@A@EGEE@ECE@G@ACAC@CAG@AAA@AC@AAA@AA@@AAGAE@EBGCGCGEEAGCGCGCACCCEEIAEAC@AAACAC@EAEECECC@A@A@AAA@AA@A@AAA@A@A@ABA@@BA@A@A@AA@AAAA@CA@AAAAAA@@AAAA@@AAA@AA@AAA@AB@BA@A@ABAA@A@A@A@A@A@@AAAAA@AAA@AA@AA@@AAACFG@A@E@MAAACCAKHG@GC@@CIBCDC@C@E@CDCB@BAB@B@@@D@@ABABABA@AB@BAB@B@B@B@B@B@D@B@B@BBB@BBB@B@DB@@B@DBB@B@BBB@B@BA@AB@@A@A@A@ABC@AAG@GBGDEB@DCDCDEDAFCBCDADADCB@HEDAB@D@@@B@@CBCDCB@JETKBCB@DBFBHBJ@DADAJ@JCBA@C@CBEDCFEFEHADAF@DAF@BB@CBG@C@AG@AAA@AA@@AAAAAA@@AAAAA@A@AAA@A@A@A@ABA@A@A@A@A@IBI@IBA@C@A@A@AAC@AAA@AAAA@@AAA@AAAAA@@AAAA@AA@AB@BAB@B@@AB@B@BABAB@BA@ABCB@@ABABA@ABA@@AAA@C@A@@AAA@A@AAA@@AAA@AACBAAA@A@AAC@@QAEEEE@SAGD@@ABAB@BA@@BMNMFE@CCEC@AAE@CCECCCACC@@EAACAAAAAA@AAAA@AAAAC@C@CBEBEBCBCBC@ABC@C@CAE@CAGAE@CAEAC@A@CBEBABABEBC@A@C@C@CACAA@CCEAC@CAA@CAC@E@A@C@C@A@ABABCD@BABC@CBC@C@C@ABA@EBABAB@BADABC@C@AA@AAC@@A@C@CACAACAC@CDCBCBA@A@A@AAA@AA@CCCAA@CACACAEAECEEECCCCECECCECEIEEGICAEE@AKHMHGDGFEDCBCACAAAAA@A@ABC@CACCACCECEAEBCBEBA@WBODGHOHMHGH@@GFABCBC@@BAB@BABCDGFGBABC@AC@@A@CD@@"],"encodeOffsets":[[115354,38887]]}},{"type":"Feature","id":"140181","properties":{"name":"古交市","cp":[112.174353,37.908534],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCCACCCCA@CA@CAA@CBABADAFAD@DABAHEFCFADCDE@A@CAAAABAJCLEHCAI@AC@K@CCAGEGBC@@D@R@HCFEDADCDCECFMJED@TFLFDAFKB@BA@ADCBADEBCBADEBCFCDCBEDADAFCDCDCDC@C@C@ABCBCDADABCBCBABA@A@@CA@@AA@@@AB@@AB@B@@@B@@@BABC@@B@FAD@BA@A@@AAAABA@@DCDEBCAAEAA@E@C@C@CC@ADGHENEDABA@CAEACACAAA@C@AA@AAA@@@A@A@A@@AAAACA@ACEACAA@@BA@A@@B@BA@A@@AAABA@A@AB@BA@@B@B@B@B@BA@AD@@AB@@@BA@@BA@CAA@@A@A@A@AA@@A@@@A@ABAB@@A@@@@CA@AA@BABABADA@A@@@AAA@@A@ABA@A@@@E@EA@@AA@@@A@@@A@A@@@AA@A@@@C@@@A@@@@B@@@BBBB@BBBB@BB@@@@BABB@@DBD@@@BABABA@ABA@E@CBC@A@C@C@AAA@@@A@A@AAA@@A@@@A@@@@BA@@B@B@B@DAD@B@BA@@B@@A@@@AA@CACAC@A@A@ABA@@@A@@A@@BA@@@A@@A@A@C@AAA@AAA@GC@CDGLSRgDEF@PFB@DCJMAECAKBO@GAAEFMDOTULIBQBAB@DBD@D@DCLGLCDAF@D@D@FAFADCACGICE@I@E@CEA@@KK@ADEBABABE@A@CCCEAAAIECCCCCCCAA@@@A@CCIKCCIAMGKGMOKKOUCECE@@MO@CBCFE@AACKKECEBA@EDC@CAE@AA@AACACA@GAE@CBABC@CA@CAAACGCC@A@CBC@GAA@C@A@@@AAAAAA@AAAAAEAC@A@AA@AAC@AAAECC@A@EBABDBBDABA@MBCBGDAHEDABC@C@EBKBEBC@CBA@IHAFADABA@A@GCC@A@ABKNKNEHA@MCEAC@EBGDG@E@C@C@GCSCKCKAI@I@GDCBEFCDABABABAD@BABA@CAAAEAEBE@E@G@G@E@KCICGCEACACAE@C@E@CBCDAFADADCDAHABADADCBC@C@KAIAEAAAAB@BBF@DBFADADABCFEDCDCDCH@DADADAB@FBDAD@B@DCBCBCDCD@B@B@D@DBB@DBD@BCDABEBCDC@EBC@C@CACACACACAAAEAA@C@C@GBGBE@E@C@K@G@E@E@CBC@CAA@E@CAC@E@C@CBE@CBAB@BCD@D@F@DABADADCDCDEDCBEDGBCBCBEBADABCBE@C@C@E@C@EBABCBCBAB@BAFBD@D@BCBEBEBEFEDCBGHCD@DAD@D@DBB@D@BBD@BABABG@GBADAFAD@D@DBDDDFDFDDDDDDDDD@DDFDBFADBF@H@HBJ@F@F@H@FADAHADAF@FADBD@F@DADAHAFAD@BBB@FBHAF@JADBBBBBBABADADCBABADAFADAJAH@J@LFFBF@DAD@RCNAHAF@F@D@FDDBBBD@D@FADCFAFCBBB@DBDAH@@@H@BBDJDLALBDJDN@JFRJNHZLPFRDTDP@NBDBFBDHBDHBDB@D@BEFEDKDQDKDEDKFGBCFAB@BBBB@NAF@@@@B@F@BBB@@LCHCH@LBBB@@@BABAB@@@BAB@BAD@D@B@BB@BF@DAB@@CBA@@B@D@D@DBB@BBDCFADABCDCDADADABCDCBGDCBEDADABAB@BBDBDBDBFBB@D@B@D@F@F@F@D@BBFBDBBBBBBBBBDBB@BAFADAFCBBN@JADGJAH@@@DADCBEDCDEFAB@D@DBBDBDBBBBB@D@BAFADAD@BBDDFBBDBDBBBBBDDDDBDDDDDJDFDDDDBBFBBDDBFDDBBF@DBJHF@HERED@FCDCHBLDH@JAHAJEDEHEHAFCDILGFGJCJFDFFBLBF@PBNCPANENCNANBJGHGFC"],"encodeOffsets":[[114908,39048]]}}],"UTF8Encoding":true});}));