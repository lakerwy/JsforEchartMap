(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('温州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330303","properties":{"name":"龙湾区","cp":[120.763469,27.970254],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@DBB@BB@@@@@@@@@@@@DBDBB@B@@@@@@@@@@@@B@DAB@B@D@BAB@F@DBBAB@@BBB@B@BB@B@B@B@B@@@BC@@BABAFCJEHHXQRKDARCD@RBNDHDHHDAFADC@@J@H@F@PDBIBOFGFARKB@BA@AHGDCFEBA@ADBB@B@@@DAFABABAD@FCB@B@B@@AB@D@DCDAD@DA@@@@¨oqOO±uY]KAM@KHedEBABC@BBIFILUROPCD@@ABABA@A@C@BD@@@BBB@B@BB@DAB@B@B@B@B@B@D@B@@D@D@FBDABFNCTILUFB@@H@DADGFMDCDBBN@L@D@@ABGDEFCH@JB@F@DCBI@GB@BBDJB@@@@DNERGNCLBLFDDD@F@FCFGDK@KFIFGFEF@B@FDFHJ@@HH@BCH@B@@AB@@A@@@@DBBBF@@AB@@@@@@CBCB@@@@ABEB@@@@@@A@E@GB@@@B@B@@"],"encodeOffsets":[[123608,28656]]}},{"type":"Feature","id":"330302","properties":{"name":"鹿城区","cp":[120.674231,28.003352],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GGGCMCQAC@QDCBQLWRGGIFEDABAB@@AD@@A@A@A@A@A@@A@AAA@AA@ABCAE@A@ABC@A@A@CBA@@@@@@@@@@@@@@AAAAC@C@@@@@@@@@@A@@AAA@CAACECCAA@@A@ECE@C@GDKFGBCHMC@@EAEAIACAC@DE@A@@AEAEA@@@C@CB@@AB@BA@@B@@MDAJEBADAJFH@@BB@BAB@B@BA@B@AD@B@B@FAD@D@BABAB@@A@A@@@@@@@@@AA@A@@@@@@ACCCAC@@A@AAA@@@AAAA@@AA@A@@@@@@A@AB@AA@A@@@A@@@@AA@CAC@A@A@@B@@@B@@@BA@ABABABA@A@AAA@A@A@ABA@@@@@AAA@AAA@C@C@CBA@C@@@A@ABA@ABAAA@A@A@@BADAF@DA@ABCBC@CBEDABGNABAB@B@DABEDA@@B@BABABA@AACACCCAA@AB@AC@CAAACAC@AAA@CAA@@@A@@BAB@@BBAB@@AB@A@@A@@@A@@@A@@@ABCB@@@@A@AB@B@@@B@@@B@@@B@@@BA@A@AACCAAA@@@IA@@A@@@AA@@GAA@C@A@@@@B@BBFBDBDBBB@@B@BA@EBC@A@ABC@A@A@@AAB@@A@A@C@CBE@A@C@ADABABEFADABAB@@AD@@ABABA@@@A@AAEACCGCAAAAA@C@AA@@@AACACAACBABC@CBC@CBC@C@@@AAC@CAA@A@@@@B@@@F@BBD@H@@@BBD@B@B@@BJ@D@FAB@@@DAB@B@@@B@DBD@@@BA@A@A@C@CAACA@@@A@@AA@A@@@@BEDCBEF@@CBCD@BADAF@B@@@B@@ABABEB@@BDBDBBDFFFFFBBBBBBBB@B@DABABCBCBAB@BBBBFBB@B@@AB@@CBCBEB@DA@CBIBEBIFB@@B@@AB@B@BBBVLNDJBDBHAH@JCF@FBDBB@HBH@FAFEDGJKDCDCDCHCFAD@BB@BBFDFFBDBHAJ@HAD@DCDCBCJEJ@L@NBPDNBX@T@FAD@BCBIAQ@CBKDGBCFCH@JBHBFAHAFAFCDEFS@@DOBG@GAK@@CS@A@IBQDKHIHEJCP@RBRBNBP@H@\\A@@`AhENA\\EXAPDP@lKPGFAFGFIBEBGX[DA"],"encodeOffsets":[[123707,28654]]}},{"type":"Feature","id":"330305","properties":{"name":"洞头区","cp":[121.156181,27.836057],"childNum":52},"geometry":{"type":"MultiPolygon","coordinates":[["@@CBA@AD@BBF@B@@@D@BB@B@D@D@@CBC@EACCAAA"],["@@C@ABA@@B@@@BB@@BD@@@DA@@BA@A@@A@@AA@@@"],["@@G@AB@FBDN@FAB@BCAAA@A@A@CACA"],["@@EBAB@DADBLFFfRXJHBJAFAHABC@EACKGOIICGCIAICEASE"],["@@I@CB@DBDAFCDEBCBAHBHDHFHdTF@FAVILEF@F@FDHBP@FA@CACCCiOUEICGEKOEAE@"],["@@I@GBIJGFSDMAICKGEAGBIDCDAFALBLDHHDPHTLFFDFFFLDJ@LCPAvFLAPI`_FG@CCGGCYKQGaEOCEA"],["@@BBBBDA@ABA@@CA@@C@AB@B"],["@@@BB@@@B@@A@C@A@@@@A@AD@B"],["@@@B@@@BBBB@B@@@@@@AAAAAA@@@"],["@@A@@D@BBBB@BAACAA"],["@@ABBBBB@@BAACA@"],["@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@"],["@@@@@@@A@@@@@@@@@@@@@@@@@@@B"],["@@@BBBD@B@BA@@@@@@ECA@A@@B@@"],["@@A@@@ADBB@@B@B@@@BAAA@@AA@@"],["@@@@BBB@@@B@BA@A@@@@E@@@AB"],["@@@@DBD@BA@A@@AAE@A@@@@D"],["@@@B@@D@D@B@@@@@@C@@CACBAB@@"],["@@B@DBD@@@BA@@ACE@CB@@@B"],["@@@B@BB@BBBBDBB@@A@@@AAACAAAA@A@"],["@@@B@@@B@@@BB@@@BB@@@@B@@@@@BA@@@@@AA@@@AA@@@@A@@@@@@A@@@@A@@@@@@@"],["@@BB@@@@@BB@B@@B@@BB@@B@@@@A@@@@@@@@B@B@@@@@B@BAB@B@@@@AA@@@A@@@@@A@@AA@AAA@@@C@@BA@@@A@@@A@@@@@"],["@@BB@@B@@BB@@A@@@@@@@@@@@A@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@"],["@@@@@@@BB@@@@@B@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@A@@@@@@A@@@@A@@@@@@@@@BB@@"],["@@@@@@@@B@A@B@@@@@@A@@@@@@@@@A@@A@@@@A@@@@A@A@A@AA@@@@@@@@@B@@@@@@@BB@@@@@@B@@@@BA@@BB@@@@@BB@"],["@@@@@@@@B@@@@@B@@@@@@@BA@@@@@@@@@@A@@@@A@@@@A@@@@B@@A@@@@@@@@@@B"],["@@@@AA@@A@@@@@AAA@@@@@@A@@@@@@A@@@@@@@@@A@@B@@B@@@@@BBB@BBB@B@@@"],["@@@@@B@@@@BB@@@@@@BB@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@A@@@@@@@@A@@@@@@A@@A@@@@@@@A@@@@@A@@@AA@@@@@@A@@@@@"],["@@BBB@DA@BF@BBDBB@@@BAAA@AA@AA@@@@B@@AACBABA@@@A@@@A@@A@@A@@A@@BA@@A@@@AA@@AA@A@@@@@A@@AA@AAAA@@C@A@AD@D@@A@A@@B@B@@BBB@@BB@@BB@@@@BA@@@@@@@@@@@A@@@@B@@@@BBBB@@BB@@"],["@@@@@@@AA@A@@@A@@@@@@@B@@@@BB@@@@@B@"],["@@@BB@B@@@@@@@BA@B@@BA@@B@@@@@B@@@@A@@@@B@@A@@@AAA@@A@@B@@@@A@@@@B@@@@A@@@A@ABA@@BA@B@"],["@@A@C@@@A@CAA@CAA@@B@B@@@B@@AB@@@BB@@@B@BB@@B@@@@@B@@AB@BBB@@@BBDB@BB@@A@@@AA@@A@@B@BA@AA@@@BAA@@A@@A@"],["@@@@BB@@B@B@@BB@@@B@@A@@AA@@@@AA@@A@@@@@@AA@A@@@A@@B@@@@BB"],["@@@B@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@AA@@@@@@@@B@@@@@@A@@@@@@@@@BB@@@@@@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"],["@@A@@@@BB@@@B@B@@BBB@@B@@@B@@@B@BA@@@@@AAAA@@A@@A@@AA@A@CD@@"],["@@BBB@B@B@@@BB@@@@BAA@@AAAA@@A@@A@@@ABA@@B@@@@"],["@@DBB@FBD@@ABA@A@ABABB@@BA@A@C@ABAB@@AA@@@AA@A@AECCCA@G@I@@@@BBBA@@@C@CAABC@@B@BB@@BBB@@B@BBB@D@@@BB@BAB@B@@BB@B@@@B@BBBB@"],["@@@B@@@@B@@@@@B@@@@A@@@@@@B@AA@@A@A@@B@@@@"],["@@B@@BB@B@@@B@@A@@@@@@@@@@@AA@@@@@A@@@A@@@A@@@@B"],["@@@BBBB@B@@@BAB@B@BBB@@@BA@@AA@@@A@@AA@@BA@@@@@@B@@@@A@@@A@@A@@@@@ABA@@AA@A@A@@@A@@AA@A@@@@B@@@@@@@B@@AD@BBB"],["@@@@B@BBBB@@BBB@B@B@B@B@@A@@@A@@B@B@BAB@@A@A@A@A@@AA@AA@CAA@CA@@A@@@A@@@@@@@A@@@@@@A@@A@@@A@@@@@@BA@@@@B@B@@@@A@@@@BBB@BB@@BA@@@@@A@@@@B@@BB@@"],["@@@B@B@BBBB@B@DB@BBBB@@@@A@AB@BAB@B@B@B@@@B@BAA@@A@@B@D@B@B@B@@A@@A@A@@@@A@@@@@A@@A@A@CAA@A@@B@@A@A@AAA@@@A@@@@AA@A@AB@@A@A@@@A@@@AA@@ABBB@@@B"],["@@@@@@@A@@AB@@@@A@@@@@@B@@@@A@@@@@B@@BB@@@@A@@@@@@@@@@BA@@@@"],["@@@@B@@@@@@@B@@@@@@@@@@@A@@@@@@@A@@@@@"],["@@@@@@@B@@B@@@@@@@@@@AB@@@@@@A@@A@@@@@@@A@@@@@@@@@@@@@@@@@A@B@@B@A@B@@@@@@@@"],["@@@@@@@@B@@@@@B@@@@@@@@@A@@@@@@A@@@@A@@@@@@B@@@@"],["@@@@B@@@B@@@B@@@BA@@@@A@@@@@A@A@@@A@@@@B"],["@@@B@@@@B@@@B@@AAA@@B@AA@@@@A@@B@@@B@@"],["@@Ä¥PGXCV@ZBdJjRNDHBH@LAHCBC@GAQAI@IBEBCHEL@ZCPCFEFMDO@KG_IUGKGEKCIAKBKBEBA@@@A@@A@@@@A@@@@@@@@@@@@@@@@@A@@@@@AA@@@@@@B@@@@AA@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@A@@@@A@@@@@@@@@@@@@@@@@@AA@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@AB@A@@A@@@A@@@@@@A@@@@A@@@@@@A@@@@@BA@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@A@@@@@@AA@@@@@@@@@@A@@@@@BA@@@@@@@@@@@A@@@AA@@A@@A@@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@B@@@@@@A@@@@A@@@@@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@B@@@@B@@@@B@@@@@BA@@@@@@@@@@@@@A@@B@@@@@@@@BB@@@@@@@@DB@@@@@@@@@@@@@BA@@@@@@@AB@@@@@B@@@@@@@@@@@@A@@@@@@@A@@@@@@B@@@@@@@B@@@@B@@@@@B@D@@@@@BB@@B@@B@@@@BB@@B@@@DA@@B@@@B@@@@BBB@@@B@@@@@BA@@@@@@BBDB@@@@@B@@@@@@A@@@@@A@@@@B@@@@@@@BB@@B@@@BB@@B@@@A@@B@@A@@@@@@@@@BB@@B@BB@@@@BB@@@@B@@@@B@@@@@B@@@@@B@@@@B@@@@@@@@@A@IBIAGAE@CAO@K@K@KBIBGDK@C@ABCBGH]XK@eAcAIBEDOVmRSB§@@@@CBC@CBCDC@A@@BA@A@A@EDC@ABABEBCB@@A@A@CA@BABEFCDGH@BABA@QLEBEHAPAJLDTADBDBB@N@TBP@L@HBH@JARAJATETALCZEDANCRGF@JCLCJCNU"]],"encodeOffsets":[[[123981,28693]],[[123949,28698]],[[123960,28692]],[[123950,28651]],[[124095,28635]],[[124005,28609]],[[124072,28577]],[[124130,28512]],[[124128,28505]],[[123812,28483]],[[123801,28481]],[[124061,28478]],[[124058,28470]],[[124055,28441]],[[124037,28394]],[[124096,28393]],[[124101,28366]],[[124085,28361]],[[124034,28345]],[[124173,28672]],[[124180,28680]],[[123959,28680]],[[124134,28613]],[[124138,28614]],[[124132,28608]],[[124137,28601]],[[124081,28591]],[[124033,28585]],[[124020,28589]],[[124156,28503]],[[124159,28502]],[[124134,28486]],[[124122,28481]],[[124053,28458]],[[124042,28454]],[[124042,28453]],[[124042,28453]],[[123999,28473]],[[123998,28468]],[[123990,28459]],[[123908,28504]],[[124062,28421]],[[124054,28427]],[[124039,28429]],[[124039,28437]],[[124072,28413]],[[124069,28411]],[[124081,28412]],[[124077,28409]],[[124082,28415]],[[124051,28359]],[[123896,28621]]]}},{"type":"Feature","id":"330326","properties":{"name":"平阳县","cp":[120.564387,27.6693],"childNum":13},"geometry":{"type":"MultiPolygon","coordinates":[["@@ACS{EUEMOUCEgeCCCCE@OEIFBG@CAQMMEGAIBCBCDADCFADADADCBABCBA@@@A@@@AAAAAACCCCCCE@K@EBCBCBC@C@CAC@ECCC@C@CBABCBABCBC@CACECGCA@C@ABADAH@BCHABCDCBC@C@EAE@C@EBA@A@@A@@BCHIFCDADADADG@AAAGEAA@A@E@G@CACA@CAC@@@@@@@@B@BABA@C@ABC@EDIFEDA@GIGGIII@CDCBGBCDADAD@BAFBBAD@BCBA@A@@AEECCA@A@@B@BBD@F@BADKFCBABIACAEAE@I@G@A@CDE@M@QAGIIGGCMAE@IGAAEAEAC@G@G@E@A@CAEA@@MISQUGMCK@MDIHGFKBO@YKMHI@@KC@IAK@GAUAEAC@@B@F@DBD@BABCBOAC@A@CBE@A@BCBCDA@ACCAAEAEBEDEDK@IBGFCF@H@FEDIAQ@IDABCDEDIBE@CACCAACBEFCBEDAB@BHD@@@B@BED@BABBBBDBB@@AAC@@AE@@BAA@@@A@C@@AA@@AB@BABAB@BA@AA@@E@CA@@AC@AA@ABB@@BABCDAFABAF@DBFDDB@@BB@DCDADBDBB@BADED@B@@BDBDDDFBBBJBD@DB@@BH@L@B@@BDDBDDD@B@D@B@B@DA@ABABABADAB@@GDEDADBDBH@D@B@J@FAF@F@BBBB@@B@DBBD@F@DAD@DFDDBBBDBF@BCDABCBEF@BBF@@BDBHHHFHDD@@BBD@DABA@AAC@@DAHA@@DADA@@DBBDDDBBD@DABABAB@DBBBDFB@D@FAJEF@F@DBDFDBB@D@H@FDDDBB@DABB@FBD@D@D@@@FDDDBDB@F@JAB@DBBD@@D@@FBB@BDBBBF@BBBD@@@@@BAB@BABAD@BBB@BBBDBFBDBFDDBNBBC@EBEF@J@HDLDJFFHFFFBJEHEJMTM@@FBFF@NBH@BDBB@H@D@B@DBFF@BAFCD@D@DF@DCBCBEBCDABAFADABCBCBAFAFABABADANALCTAF@HEBE@@A@@C@ACAAACACABABAFCDADABCB@BC@A@@BA@@@@@@PMBADE@@BA@@@@BA@@@@@@@A@@B@BAB@@@BA@@DA@@B@@A@@B@@A@BB@@B@@B@@@@B@@GHCBFHHBJEFABFBBPARIJE@A@@@AB@@@B@@@@@@@@@A@BA@BB@@A@@B@BGDAFGDEDADAB@D@FDHFFFBB@BB@BB@@@@B@B@@@@@H@DB@DFHBFBF@J@H@@@@@B@@@BBB@B@BADABAB@@ADBFFFFDFDFAD@FBPDFDBD@BAD@B@DDBFBD@AF@BABBDNNBFDFBBB@FBD@BBB@@BBBBDFFL@H@F@D@D@DCBEDCHGHCB@DBDBLFJ@F@DAFG@AB@@ADC@ADAD@BA@@@ATUFI@EAECE@@A@A@@A@CA@CEAA@@@GBEEC@@@AB@B@BA@@AC@ABAFAF@D@@@D@B@H@DEFAD@BB@BAF@D@@J@H@F@FAFCPGPGJCVOLCJ@TCDA"],["@@KFIJCBA@@CA@C@GDiRA@AAACFEHKDIAAIBIJEDCFC@KHAB@DDDBBDBJCD@CHAHAFBBH@FAFCJA@DIDADBBB@F@HEF@JCFABABCDGBEFCF@H@DABAFGBACC@AHEFEAAE@"],["@@DCDACECCGDGFADHDJA"],["@@F@D@BAB@BA@ABA@A@@C@EBEB@BABA@@B@@B@"],["@@C@CF@BDBFAFAF@FADC@C@ECAE@GHED"],["@@HCHCFEAAECG@E@GDBD@DCBAFBBD@FA"],["@@ABAB@B@BB@@B@@B@@@BAB@B@FAD@@A@C@ACAA@ABABA@A@A@"],["@@B@B@B@@@BA@@B@B@@@@@B@@@BA@@A@@@@@@@@A@@@@@@B@@@@@BAA@@@@@@@@A@@@@@@B@@@BA@@@@@@@AA@@@@@A@@@@@@B@@@@A@@@A@@AABA@@@AB@@@@A@A@@B@@@B@@@@@@@BA@ABA@@@BBB@"],["@@@B@@@A@@@@@@@@@@@A@@A@@@@B@@@@@@@@@@B@@@@@"],["@@B@@@@@@@@@@@@@@@@@A@@@@@@@@@@@"],["@@@@B@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@A@@BB@"],["@@@@@@@@@@@@B@@@@@@@@@BAA@@@@@@@@@@@@@@@@@@@@@@AA@@@@B@@A@@@B@@@@B@@@@"],["@@BB@@@B@@B@@@@@@A@@B@@@@@B@@A@@@@@A@@@@A@@@@@@@@@@@@@A@@@A@@@AB@@@@"]],"encodeOffsets":[[[123599,28336]],[[124014,28103]],[[124001,28154]],[[123964,28144]],[[123985,28088]],[[124020,28133]],[[124035,28128]],[[123969,28103]],[[123652,28245]],[[123639,28233]],[[123638,28233]],[[123632,28225]],[[123617,28215]]]}},{"type":"Feature","id":"330304","properties":{"name":"瓯海区","cp":[120.637145,28.006444],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@FABABA@@@A@@@ABEBC@ADCDA@@FEDAFC@A@@B@B@@BB@@@B@BDDBD@B@B@B@@A@@AC@C@A@@@ABA@C@@BA@E@CAI@@@A@AAC@A@@@GAC@A@E@@@A@@B@B@DBD@BB@@D@D@DAD@DAD@BADABBBDBD@B@@BBD@B@BBBBHDDDFBBBB@@@B@BABA@@BC@@BABABCFEBABABCD@B@F@DAD@B@B@@@BA@BB@B@D@BAB@D@FAB@@A@AA@AAACACAE@A@A@@B@D@B@HB@@BB@@B@@@JB@@B@BBDDBBB@B@@A@@@A@@@A@@@A@@@ABAB@@@@@DABA@@B@@@B@@@B@@@@BBA@@BAAA@@BA@AB@@@B@DBB@BBD@DBBBDBD@@BBAB@DBDDDBBBB@BABA@A@AB@FCBA@C@ABABAHMBAFCDAD@DABAB@@CBEBC@AB@B@B@BBBAB@BAB@@@D@B@DAD@D@B@BBB@BB@@@@B@BAB@B@B@BBB@B@BABABAB@@A@@@A@@@AB@B@D@DBB@@B@@B@@@B@B@@BBAB@@@@@@@@BBB@@BBBB@@B@BBB@@@BDDDBD@@@@@@@BBB@@@@@@@@B@B@@@BABA@A@CBC@E@A@ABCA@B@@A@ABA@AAA@@EGBIBCFABINC@@@AB@@ABA@@DAD@@@B@BFBF@@@BCFD@DBJBFBFB@@NDDGHALEHCD@F@FDB@@@BBDDDFBB@@@A@A@@HAF@B@@@@@@@FABA@@@@DADA@@@@@@BA@@AEAA@C@@B@@@BA@@@ADG@AGG@@GICE@E@AFEHEJELEL@HCDE@E@ECCECAKDKHMFQCM@@@@IAAC@AHAJ@DA@C@EIAG@EDCFAH@BC@K@M@AADCNCHEBC@C@GA@C@EAC@E@K@E@CDBB@@B@DDF@@B@@@@@@@B@@A@C@A@C@UCIGGAGAKAECACBG@AACGGIA@@@@@@A@K@Q@MCMBKJGDQAKEICC@ADBFHHDHDJ@FEHGFEBCBBBBBDF@DEDIFIHCHAFCDCACACECCE@E@EAACC@ADCFCBCB@@C@A@EAAACCEGCECAC@@@AB@B@BADEBKBIDAB@DB@FDBD@DGDG@GDE@@@A@A@G@CBA@A@A@A@@A@@ADAH@FBDEDA@@BGFEDIBUAABCDBBVFBB@DBBJDBB@BCBEBAD@BDBBD@BABIB@B@FAB@DABCAG@CBABC@E@G@G@E@CB@@@H@@A@@A@BABEBA@GDEFA@C@ACEEA@G@C@CACA@CCAAECFABE@EAE@C@E@CCAC@CBC@CA@C@CDADCDADEDA@E@AB@HYPGBEBCBC@E@EBEBE@I@C@ABEBGDA@ABC@EBG@C@ABA@@DBF@BBFDFDDBDBD@DBF@FBFBBD@BBB@@B@@@B@@@F@F@D@B@D@BAFEDABBB@FDB@B@B@B@@@B@BBBBBB@D@D@BAB@BAB@BBD@BBB@B@B@B@BABBFBDD@BBD@B@@@B@@@BBDAF@BABAB@@AF@BA@A@ABCBABCB@@@B@@@B@@@B@@@BA@B@@BB@D@@BB@@@@@@@@B@@A@@B@@@B@@@@@@@B@@FFHDHDB@@@LDB@@@D@BA@@D@B@@@@@@@BBBBB@@@@@DD@@BBB@@@@@@@@@@@@@@@@@@@BA@@@@@@@@"],"encodeOffsets":[[123288,28773]]}},{"type":"Feature","id":"330327","properties":{"name":"苍南县","cp":[120.406256,27.507743],"childNum":10},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@A@@@@@@B@@@@@BB@B@@@B@@@@A@@@@AA@@@@A@"],["@@A@@@A@@B@@BB@@@BB@@@B@@@@@@A@@@A@A@@A@@@@@"],["@@@@A@@@@@@B@@@B@@B@@@B@@@B@@@@@@@@A@@AA@@@@A@"],["@@BAB@@BBD@@DBF@@@BBB@@ABABA@ABA@@BB@@@D@B@@BB@AF@@BD@BB@@AAACAABA@AFC@A@A@@GC@ABAFCDAFEDABBDDDBF@JAFCDCBAJCR@JBFC@E@GDEHEJAL@FCFCFAFBBBDD@BCBADADB@F@DAB@D@PBDABA@AAC@C@E@AD@FBVBHBL@JBD@@LJ@NGZLP@LAHEJGNCL@NDVHTRNJ@@FBDBB@F@H@H@D@FBFBBBJHF@NBHDJHHJRBN@F@DCB@H@J@F@FBDBJBBADALEBC@A@EAC@A@AB@B@DDFF@BB@B@DA@ABCAABE@ABCBCDCHADADCJ@JJHHHJB@FCJEFCD@BAD@B@BA@A@A@@@@@@D@DBB@BD@D@H@F@BBBHFBB@BCHCBCBCBEDGJAD@@@BB@B@FAD@F@FBD@D@DADCBADG@ABGBCBAD@B@HDFDBD@DADADABADAB@D@DDDFDD@DBD@D@DADAFAL@F@DDDDDDBBBBBB@@B@@@B@DABADABCBCBCDEBCDCDAJAHBNFRNDBH@AJEGCCGDaLIJS^uHER@FADABCDWFQHIDCLCHEBCBEAEAECIamKWEMAC@CDc@iCYEMIIQKMEOCICsQ]GGGGAGBODIBG@EACACCCEEECECO_CI@EDCfQDE@CAIEKOOKSCM@SAWCQEMGSECMKKGQE{KE@aJIDG@EAGHGLGJEFCBABC@C@A@AA@@ABABBB@DCFAB@@GDGDCF@DBDBBADCDIDADADIBG@@B@BDBBBAHGF@@AB@B@BDBDB@D@BA@C@C@A@@@A@@@@BA@@@B@BBDBB@@B@@B@@@@@@@AB@BAB@DDDFDBDBDDF@B@B@@GHKFIHAFHJRLJ@FGHCJDDFBHGHKJEDABCBEDEFIPAL@HAF@BKJIFEDEFCDCHAFCHGLCBCBE@EDEDCBA@@BA@@B@DABCBCBADADBB@DBBBBBD@BAFEBGDCBADAB@B@BBBBBB@@B@B@BAB@BDDDFBFDD@D@BABADGLIHABCAEAGCG@MFA@@BBBDBBB@D@BABABA@CBAACA@A@A@E@@@@@A@@@A@@A@@A@@@@@@@A@@@@AA@@@ABA@A@A@@@@AA@@A@@@@@A@@@AB@@A@@@@@@@ABBBA@ACAAA@C@C@EDCBCBA@CBAAC@CACCACCACACAG@CBCHCFADCFABIJCF@FDFFDBB@F@J@HCFIFMHC@GN@BEF@@AB@BCBC@EBEBABCAA@MDA@CAABAD@BABGDGACGAAEBCH@JAFADGBEBABCBMFGACCAGEBCF@HBDAJCFKJAFCB@@E@E@IAA@BHADB@@BCD@@CBA@A@C@A@C@EAA@A@@@@F@@DBFDBB@D@BC@GDG@GAAAA@CBE@G@C@@B@BBFCBIBGDEDAHEHGFGDO@MBGDCF@@DDBDBB@BAB@@@@BDAF@BABABBBBD@@F@B@D@DAB@BB"],["@@@@@B@@@@B@@@@@@@@@@A@@@@A@@@"],["@@@@@@A@@@@@@@@@@@@@AB@@B@@@B@@@@@@@@@B@@@@@B@@B@@@@@@@@@AB@@@@@@@@A@@A@@@A@@AA@@B"],["@@@AAB@@@@@@@BB@@@BBB@@@B@@@B@@@@@BA@@@@@@@@@@AA@@@@@B@@AA@@@@@@@@AB@@@AA@@@@@A@@@"],["@@@@@@B@@@@A@@A@@@@@AB@@B@"],["@@@BB@@@@@B@@@B@@@@A@@@A@@@A@@A@@BA@@@@@@AA@@@@@A@@@@BBB"],["@@@B@@@@@B@@@@BA@@@@@@@@@@@AB@@@@A@@@@AA@@@BA@@@@@@B@@"]],"encodeOffsets":[[[123747,27716]],[[123759,27710]],[[123749,27703]],[[122961,28226]],[[123603,28182]],[[123603,28186]],[[123602,28183]],[[123588,28169]],[[123733,27693]],[[123737,27693]]]}},{"type":"Feature","id":"330328","properties":{"name":"文成县","cp":[120.09245,27.789133],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CC@@@E@CBCBE@CEAECCKAE@AFC@@DIDEBCAE@AEAIBGBCCAAAKAEAAOGECA@GAC@AOBEHQBG@E@C@CCMAECECEAECECEAEECECEEACACBCB@D@B@D@DCDCFCFAFABAD@BA@A@CACBC@CBCD@B@H@D@B@BAB@BCBEDEFEDADCDC@EBCBAD@DAFAJGDGDADCB@VGFA@AAEIKMACAECCAEACAAA@AAA@ABCBA@ABA@A@@@@ACAAE@AACA@AAA@EC@@@ACCAA@IBE@A@ACCCEC@@C@C@C@EAA@BA@CAACCECG@C@A@CACECAE@E@IFEBC@A@CEAACAA@ABABCBC@AACCACCA@@CBCB@@GBCB@@BD@BABCBC@AA@@CCEGGGAGAC@@AE@AFEDABADC@AAEACAACCCEC@CBE@C@AA@C@AA@AA@A@EBE@E@I@A@CAGACBCFCHC@@BABCBABABAB@@C@A@A@C@ACCACCC@AA@K@G@@AA@@CACAIAACECCCA@AA@C@CFABA@CACACBCDA@@AA@CCAE@CBEBABEDCBA@AA@AAA@CBC@A@E@@@IDGB@@OHGFAB@FBB@BBJ@BAB@@EBC@IAEAEACBABA@AB@BABA@@@CDMDCD@HDJHJ@@ABEDABCBABCBEB@@@@DBBB@@A@AB@@@B@@@@@BA@C@A@@@@A@@BA@@@@@@@@AA@@EHCDOFEB@BCFBF@BAF@BDF@DAB@BA@@B@DBBD@@@HFDF@BDHBDAD@@@DCD@B@D@BA@A@A@AAA@ABBBDBDBD@@DADCBIDA@AB@B@D@H@BA@CDIDGBE@ECCIEIUCWAMHED@@CBABCAEAAC@A@CAAAAA@@BA@@DBB@D@BABA@CBCAA@CCA@ECFEFC@@@A@@CAEAKGEBA@C@CA@@@ACBOLEJ@DADAF@BGHAB@BBF@DABBBBD@@A@AB@@@@@FDDBD@FBD@DADCBE@IDCDABAB@FCBCBCBEBA@A@@BEJCDADEBCBC@CFA@ABE@A@CBABA@@DBBBFBDBD@BDD@B@F@HAF@DADAFAB@D@@BDBDBB@D@FCFABCDE@CBCBAAA@A@ADCBABC@@@C@O@ICCICKCIAGACCD@@A@@B@B@@@D@BAF@@@@C@AB@@A@@B@@@@@B@BBB@BBB@B@@A@@B@@A@@B@@@B@@BB@@B@@@BB@@@B@@@B@@ABCBAB@@@B@@@B@B@F@B@BDFLDDD@FIBCD@@AB@D@B@T@B@BDDBFBBADADCBAFBDDBDDB@DLDFFLBDDJ@DCJA@A@A@ABEFEF@DBD@D@@@@CBAB@@@BBBDBDBBDBBB@FBDDFDFBF@H@FCDCDCJGDAH@H@B@BDBHBFDDFHBBFDJD@BIJOPMNDJPFB@D@@@BB@@BBB@B@BA@@B@B@B@BBB@@@B@DCFIDIDADD@F@JBD@@AD@D@DBBDB@@DDDDFDB@BADGDCDEFGDEDGBABAB@D@DDBBD@FBFAB@HDJHPHJJNDRDB@BBB@DAFBDBD@DAB@B@@@BB@BBBBABA@ABABABC@A@ABABA@@@C@C@AA@AACA@AB@BAACCC@AACBE@EAC@ABAHEZBF@B@LBH@PBHBB@BBAB@D@BBBD@DAFEFEFAJAFBHBDHDFFDJBF@L@N@J@DBBDBD@DCDCDBFFHHDFDB@B@BCBEFAFBDBBDHHB@FBBB@BBHDB@BB@@CLBJBB@L@NCF@BABAB@B@B@B@FCFAD@D@BBBB@BBBB@D@DAFAD@@@B@@@B@DA@@B@BD@BB@FBF@HCFGBEBEAEAE@EDA@C@E@ABAHCLCDC@A@BB@@A@@@@@@BA@@B@@@@A@@@@@A@@@@@A@@@@@@BABABAB@@AB@@AD@DAL@D@FAD@D@DBFAFAFADABA"],"encodeOffsets":[[123116,28602]]}},{"type":"Feature","id":"330324","properties":{"name":"永嘉县","cp":[120.690968,28.153886],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DFBB@B@@@@@BA@AB@B@@@@@B@B@BA@@BCBABADAB@@@DB@@B@@@@BDBDB@B@@BBBB@@BB@BBB@B@D@BBB@B@@@B@@@@BBB@@@B@@@BABAD@@@BCD@@@@A@@BADCBC@@@@@A@@@@@AB@@@@A@ABA@@@@@A@@@@AA@@@@@A@@@A@@@AB@@@@@@@@@DBFBD@HDHHBDBDD@B@BB@@B@@@@@@DFDFDDFF@@BBBB@@F@@BB@@BABAHAHABCBCBC@A@GB@@ABAFAB@BBBBBBFDF@B@B@D@DAFAFAJAFAB@@@BA@ABAB@@@B@@@BA@@B@@@@@BAB@BBB@@ADAHAF@DA@@@A@@@A@@B@@@@A@@@A@AB@@@@A@GBA@@@A@ABAB@@A@@B@@AB@BAB@@@@@@@BCD@@@@@B@@A@@@A@@@A@C@A@@@A@C@EBE@@@@@@@A@A@@@@BA@EHCF@B@@@@@B@@@@@@@B@@@@BB@@@@AB@B@@@@EBC@@@@@@@E@CA@@A@@@@@@@@@@AA@@@A@AA@@A@@@@@@@A@@BA@@@@@ABGBA@ABA@A@@B@@@@@@@@@B@@@@A@@@@@@@@@@B@@@@B@@@FB@@@@B@@@B@@@@BB@@@B@BBBBB@@BBB@BDB@BBB@@@@@B@@AB@B@@@@@B@@@@@B@D@D@B@JCJ@@@@AB@@A@@@A@CDC@C@@@C@E@@@@@A@@@@@A@@@A@@BA@A@@@@@@@CDEB@@@B@@@@@B@@@@@@BB@@@B@@@@@D@@@@@BA@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@BBB@@@@@B@@@BB@@B@@@@BB@@B@@@@B@@B@@@@@BBBBBB@@@@BAB@BCBEAA@ABEHAD@DADAB@BBD@BHBD@@@@BB@@B@B@@@@@B@@A@AB@@@B@BB@@BAHBB@D@B@@@BDBBBBBB@@@BB@@@@BADAB@D@D@B@BAB@@BB@BA@@FADAFCDA@@@@@A@AAA@@@@@A@@@@@@@A@@DE@@BA@@B@@AHE@@@AB@@@B@@@B@@B@@@@@@@@@B@B@@@BBFBDDHBB@B@FAB@BBD@F@BAB@@ABADAB@B@@A@AB@BA@@@ABAB@B@@@@@B@@@B@B@@AB@@@@B@@B@@@@DDB@BBBDBBB@F@@@BBB@@@@B@@@@@@@B@B@@@B@@@@@B@@@DBB@@@BA@@@@B@@@B@@@B@BB@@B@@@B@B@D@B@@BBDB@@@@@@@@@@B@@@@@@@@@@@@A@@BAAA@A@@@A@@@A@@@@@@BA@@@@@@B@@A@@@@B@B@B@@@@@@@@@@@@@@AB@@A@A@@@@@@@@@A@@B@@@@A@@@@@@@AB@@@@@B@@@@@B@@@@@@@@@@@@@BB@@@B@@@@BB@@@@@BBBBB@B@B@@@@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@ABA@@B@@@@@@@D@@B@@B@@B@@B@@@B@@@@BBB@@@@@@@@@BA@@@@@@B@@@@@B@@@@AFFFF@@FDFDBB@@@@@@@@@B@@@@B@@BABA@CD@BA@@@@B@@@B@@@@BH@J@HAB@@BB@B@@@@BB@@@@B@BD@@BBB@BB@B@@@B@@@BB@@@@@@@@@@BAB@@@@@@A@@B@@@@@@@@@B@@@B@BB@BBB@@B@B@@AD@BB@@@@@BB@@@@@@BAB@@@@@@@B@B@@@B@@@@@B@@@@BB@@@@B@@@B@@@@@BBB@B@@@B@@@B@B@B@@A@AB@@@B@B@BBBBBBDBF@B@BABABAD@@@@AB@@@B@B@B@F@BB@@BB@@BBBBBDB@BB@@@B@BAB@B@B@@B@@@B@BBF@D@B@BB@DBBB@@B@B@B@BAB@DBB@DBB@B@D@BBD@B@D@HBD@FEFED@@AB@@BBB@BB@B@B@B@FCBA@@@@HEDGBCFEBCCCBEDCDADAB@@@BAB@B@B@@BB@@BB@@@BAD@FCB@D@D@BAB@@CBA@@BCBABA@@@@HAFADADADA@ABABABADEDC@AB@B@DBDBB@@@B@D@BC@AF@FAF@@@BB@@@B@@@BBBB@BB@BB@D@@@B@B@FCDCBCBAB@B@@@B@BB@BB@B@B@D@@@NBB@@@L@@@H@H@B@B@B@BAB@D@B@DB@@B@B@@BBB@@BB@@@B@D@F@@@B@@AB@@BB@B@B@@ABCB@BAD@DA@AB@B@B@@B@B@BB@@@@BDBB@@BBB@BB@@@BB@@@B@B@@A@@BA@AB@B@B@@@@@FE@@@@B@@@B@@@@BB@BB@@BBD@BBB@B@@@B@@@@B@@@@AB@@AB@B@@@B@D@@ABABEFEFAB@@BB@@BBB@B@BBB@D@BBDBDBBD@@B@@@B@@AB@B@D@@@BABABAB@D@@AB@B@BAD@@@@@@@@@@B@@@@D@BBF@B@H@DBF@D@@@B@@@BB@@BD@@@B@@B@B@DB@@B@B@B@@@@BB@@@@@BBBDBBBB@D@@@@AD@FB@@B@B@@@HDFDDDB@@D@BAB@BABAFCB@BCD@BA@@D@D@F@@@B@D@DBBBBDBB@@@@DBDBFB@@@@B@@AD@B@DAB@BA@@@ABA@@@AB@@@B@B@B@BAB@@@BA@@@AAAAC@A@A@A@CB@@CBA@@@AB@B@B@DBBBD@D@B@D@HCBABAB@DBB@D@B@BCBADEDAB@D@B@BBBBBBDDB@@@@AB@@@BA@A@@@C@@AA@A@@@A@A@@AAAA@A@@@A@@BADCBAB@BB@AB@@@DAH@JCHAHA@@B@BAB@BA@ABE@C@A@ABA@A@@@@HGFCFC@@BAB@BA@ABA@A@@@@@@AAAA@A@@@@@@@A@@A@@AACAA@A@@@@GGACA@@A@A@A@@DE@@@@BA@@BA@ADA@AB@B@DB@@BABCBA@@B@@@B@@@D@@@B@BBD@@@B@@@B@@AB@@@@AB@@AB@@@BA@@BABA@@@A@C@C@C@A@CDABC@@BAB@BABABABCB@B@D@D@BAB@@@LA@@H@@@@@FCDAD@F@B@B@D@DBD@DBDBD@BDBDBB@BBBFDFFDBFDDDF@J@B@@@BAB@B@@@BAB@@@B@B@B@B@DA@@DC@@@@@@FAB@@@BA@@BB@@@BB@BB@B@@@B@@@BA@@@AB@@@BAB@B@@BBB@DBD@BB@@B@@A@@B@@A@A@A@AAA@AAABAAE@@@A@@@@AAAA@@AC@@@A@@@@B@FE@@@@BA@A@ADE@@BA@A@@@@@@BA@@@@@AB@BA@@BBB@@@BAB@BAB@@A@@@@A@A@@AA@@@AA@@@A@@BABADA@@@A@@@A@@CCCG@A@@@AB@@@B@B@@@@@D@B@B@B@B@@@B@@A@A@@@A@A@A@A@A@@@@@C@@B@@A@@@A@@@@@@B@@@BC@@@AA@@@BA@@BA@AB@@A@@@A@@AA@@@@AAGEAAGCE@A@@@C@@@@@C@AA@@@@@@@A@@@@@A@@@@AAA@@@AA@@@@@C@A@@@@@AAAA@@A@@A@@A@@@@@@@AA@@@@AAA@@BAB@@@DA@@B@@@B@B@@@B@DA@@@A@@@AAA@@AA@@AAAA@AACAAAA@C@A@A@A@@@A@@B@DA@@D@B@DABADA@@B@B@FBFB@A@@DB@@B@B@BB@@@@BA@@@@BA@A@@@A@@BA@@@@@@@A@@@@@A@@A@A@A@@A@@@@@A@@@@@A@@@A@@AA@@AAAA@@AAA@@AB@@A@@B@@AB@B@@@@A@CA@EAMGGEEAE@AAAA@A@@@A@A@A@@AA@@@A@@AA@@A@@@@A@@@@@A@@B@B@@@FAFCB@@@B@@@@@@A@CCGKOGIAACAABA@C@CB@@CAEA@@AA@@@@@ACEEA@@AAC@A@C@A@A@@@AAA@CAA@CAA@A@A@@@@DAD@@@@BBB@@BB@@@@@@BAB@B@B@B@@@BA@ABCBCBC@A@GBC@CAA@A@AAA@@@C@A@A@@AA@@ACCAAGEAA@ABABC@A@@@A@@AIBI@@BANODMFWBQAE@A@ABA@@@A@@@@DS@@@G@A@C@CACAA@AAA@AA@C@A@AACAECAAC@A@C@AAAA@@AA@C@@@A@A@@@A@AAA@A@@BC@@B@D@B@@@L@JEBABIDMACB@@A@@BA@AAAAAC@CAICEAEAC@EC@@AA@A@@@A@AAE@ACEA@MGAAACBE@C@CCGGGKOGICEKIEKEKEI@@AAAAACBA@@CIEEGGAA@AAECAM]@A@A@@@AA@@AA@@A@@@A@@@A@A@AAC@A@@AA@@AA@@A@@@@@@@@A@@@@@A@@@A@AB@@A@@@@BA@A@@@@BA@@@@@A@AA@@AB@@A@@@AA@@@AA@@@AB@@ABABA@AB@@@@AAC@A@@BA@A@@@@@A@@@AAA@@@A@A@A@@CEEE@@@A@@@A@@AA@@A@A@@A@@@@BA@@@@BA@A@@A@AAA@@@@AA@B@@A@A@@@@@A@@A@AB@@@@AA@@@@BABA@A@@@@@@AAA@AAAA@@AA@A@A@C@@@A@@A@@A@@C@C@@@@@A@A@A@@A@@AA@ACCGEOHkLO@OCWB[FMBgF_B@@[BG@O@MAQAQAO@IDGFGJCLAR@J@BDT@@BL@HAHCP@@ETCFEDEBGBEBGAIAG@EDADCHAL@DBRAJADC@EBS@W@MAOCMAK@I@IFADCDCDC@GBI@GBCAEACEAE@AAAC@EBGDCDCDCDILCHEFEBG@GAA@CAEAE@ID"],"encodeOffsets":[[123309,28832]]}},{"type":"Feature","id":"330329","properties":{"name":"泰顺县","cp":[119.71624,27.557309],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@@@BAD@@@@@BE@A@C@@@A@AB@@@DCBDBHDJDLDJJDP@D@@@D@BADABCB@B@BBDADAF@DCBADE@E@CAAACAC@@@CBABEBC@CBE@G@E@ACC@AACACAEAA@CB@BADAB@F@BAB@DED@DAFABCDCFI@AB@B@FADADADA@EBABADCJCF@DABC@CAC@EACCC@E@@@@BAB@@@ACAABA@CAE@ABAHG@ABEBC@CFIPKDA@B@@DBD@B@FALHFBDB@@@B@@EDEFFDB@DDB@DBDAB@BA@A@CAA@CB@@AB@BBBB@D@BBDFBDBBADA@@FCNGXBVDFJDJFDF@HAJCDCB@@A@G@C@ABAB@JCDABC@CC@CACAAABAB@BBB@B@B@@A@C@ADC@C@@BCACCG@ACEGE@@C@AA@C@AB@@ABA@CCE@ABE@AAEDE@AFAPEDCFG@@BB@@@@@@@@AB@@@B@@B@D@B@@A@@@@@A@@BAB@@@AACA@@@@FADABADABAFCBA@@GICI@GDCNCDC@@B@BA@ABAB@BADAFBFBJBD@FA@@BA@AAI@AAA@EBAHEPG@@HAJCACAABABA@ABEAC@@@@BA@AAAACCC@@DEHCNAP@HCHEFGBGFCHCJADAAE@A@AD@H@F@DAB@BBHBH@HCD@@A@CAAECCA@@@E@@B@B@FBD@B@D@B@B@DA@@DC@AA@BCAGB@JBF@F@@@DABELIDEBIAC@GDEFABHDDHBNEDABAFAHABCBE@IDGFABBDHHBHCBA@ABCBADBB@NCB@DBBAFAFAD@DA@ABA@@FE@AHM@ECCIEGECACAC@A@A@@AA@AC@AA@AAC@A@AC@@A@CBAAAAGBEDEDADCB@BC@KAC@C@AACAIEECE@@@A@@AA@@BA@CBABA@A@A@A@C@@@@B@BA@ABC@AAE@OASAOEEEAEDGFEDIAIEGIAEBAFEBGBUCME@AC@CC@C@KBECAAAE@C@EEECACE@EAACAGCCAAC@CA@@CCCEAGCGE@E@CE@EAEC@I@KDGDI@E@CDBF@HEFIJCHADA@C@CAA@A@@B@B@D@H@DADABC@MDA@A@AB@@A@CCC@AAA@@A@C@A@AAA@@C@C@C@C@CAGAEAC@@@C@MCGCAGBCHDHBBA@CEGCCIEECA@AACE@CACAACAE@A@C@AAAA@@BAF@D@BAGEAA@@@A@AB@BC@@AAA@@A@ABAB@B@BB@@B@@A@@DG@A@A@AA@@AA@A@@BA@ABA@A@A@A@CBC@AA@@A@A@A@A@A@@@E@A@ABAA@@A@@@BA@@@ACA@@@@A@@BA@ABABABABC@A@A@@@A@A@@@A@@@A@@@A@C@AAA@AA@A@@A@@C@A@A@@@@A@A@A@A@@@A@AA@@A@@@ABABA@ABA@@@@@A@@A@A@A@@@A@AA@@A@@A@@BA@@B@@@@A@@@ABA@A@@@@@AC@C@E@AAA@@AAA@AB@@AB@@@B@BBDA@@B@@A@@@C@AAA@C@A@A@@B@@@B@B@@BBB@B@BBB@B@@BBB@@@BB@@BA@@@@@ABAAA@A@A@AB@@AA@@ABA@A@ABA@A@@@AAAA@@A@@@@@AB@@AB@@ABABABA@@B@@ABABABA@A@A@AAAACCACCCACAAA@@AB@BABCDAB@BAD@B@B@@A@AAC@AACA@@AA@A@A@ABCBA@A@A@A@AAA@CAA@AB@@@@@B@@@@@@@@@@@@A@@@A@@@@B@@A@@@A@@@@@@AA@@A@C@A@@AA@@A@A@A@CBABA@ABABAD@@@BAB@@ABA@A@ABA@EDCBC@ABC@ABA@@AA@@A@A@AAA@C@AAAA@@@CB@@A@C@C@A@CBA@ABA@CB@@C@@@A@A@ABA@@BA@@BB@@BBBBB@@@B@B@D@DAD@B@F@B@BBB@@B@B@BABADC@ABCB@B@BBBBDBBBBB@B@BABABABAB@@A@A@ABC@A@A@A@A@ABABCBAB@B@B@B@B@BBB@BBBAB@BAB@BA@A@A@A@A@C@C@@@A@@BA@@BA@ABA@A@A@A@@@A@@BAB@B@@AD@DAD@B@@A@@BE@ABA@A@AB@@@@@BB@BDBBDDBBBBB@DB@BBB@@@D@@@BAB@BA@A@A@CAA@AAAAA@@@@@AB@@BB@B@B@B@B@DAB@D@B@@A@@@A@@@ABA@A@@@ABA@@BA@@BAB@@@B@@BB@@@BA@@@CBA@AB@@AB@B@BAB@@ABA@ABA@C@ABAAA@A@A@A@A@A@AB@@AB@@@@@B@@@B@BBB@B@B@@ABABA@@BA@@BA@@B@@@@@@@BA@@@@@@@@B@@@@BB@@@B@@AB@B@D@B@@@BA@AB@@A@A@@@AAA@@B@@A@@BA@@B@BA@ABC@A@A@A@@BA@AD@BAB@B@BA@@BA@@@BBBBB@@BB@@@@@B@@AFAB@@@B@@BBB@@@BA@@BB@@@B@DB@@BB@@B@@BB@B@@@BB@B@B@D@D@@@BB@@@B@@B@@@@@BAB@BA@@B@@B@@BB@BBB@BBB@@BBB@@@@AB@BAB@@@BAB@@AD@@@BBB@BB@BB@B@@AB@BAB@@@@@B@@B@@@BBB@@@@B@B@@@B@@A@@@AAA@@@@BA@@@@B@B@@@B@B@@B@BBB@BB@@@@@B@BAD@B@B@BB@AB@@@@CBA@A@A@AB@@AB@@@B@BB@@B@@@D@B@B@B@@BB@@BB@@DB@@BB@B@@@B@@@B@@AB@@@@A@@@@@AB@@@@ABA@A@@@A@@BAB@B@B@BAB@@@B@@B@@B@@A@@BCBA@ADCBADA@@BA@AB@@@@AB@@@B@@@BB@@@B@@@@@@BA@@@A@A@A@@B@@ABAB@@@BA@@A@@@@@A@A@@@A@@@@A@AA@@@@AB@@A@A@A@@@A@A@@@A@AA@@A@C@A@AAA@AA@A@@A@@@A@@@A@@@@@BB@@@@@B@@@BA@@BA@AB@@A@AB@@A@@@@BDF@BBDDDDHBDBDD@@@B@B@@B@DAB@DBDBDBDDBBD@BABADE@C@EBI@EBA@C@C@CBA@EBA@E@A@EDABA@C@AAC@C@AB@BAH@D@F@FADAD@B@FBBBD@FCBADCHBH@DDBBBD@DDDBBBDADABB@B@DBFBBBBD@@BDJ@BCDCDCHCB@DAB@BB@DFBFBD@D@BGFC@A@ADA@FBBBDBDDBD@DDHBF@DBBDBFBB@BDBD@BA@ABA@CB@BAF@FBHAB@BABABBBBJBBB@B@B@F@DBDBB@DBBBBBBB@DB@DBB@BDDDDBDBBB@BBF@F@DBFBBHDLFLFHDF@B@BA@@@@HBLDHFJNDBPAB@@@DHFHDDHHFDBD@BB@DFBBBB@B@B@@CB@BA@@BBD@BBB@@B@@A@ABABA@@BB@BBBB@@@B@FBDB@DBBDDDBBABA@A@I@EBAF@B@@@D@BAD@DB@@BB"],"encodeOffsets":[[122660,28463]]}},{"type":"Feature","id":"330381","properties":{"name":"瑞安市","cp":[120.646171,27.779321],"childNum":27},"geometry":{"type":"MultiPolygon","coordinates":[["@@HCFABAD@J@F@FAFAF@D@DAFAHAZO@GBAF@B@FCBCDCBCDCD@B@@DAD@DBDDDF@D@F@FBF@BADEBFDB@DDBDBD@H@B@FFBDD@B@FEHCB@FABA@A@BB@@@@G@@DAF@H@H@F@D@BADAH@DBBA@CBA@E@AJABA@AACCA@ABCFADA@AAAICAA@CAAUEAADCBAVBJAFCHE@AB@FCAC@EBGBC@@@BB@B@B@B@DAH@B@B@@@F@HCH@HC@CACECA@@CBAJCLAFABC@A@ABA@@D@DBDFFHDDBBFBB@D@@@DADADEBCD@BDFBF@F@DDDFDBDBDCBEDGJGJEFC@CCEAAAADAFAHEFG@ECICGGGAEBCD@JDLFRBHCLINANDR@L@B@@@@@@@JBHHBD@BAHBDFDLBHBHBJHVDD@B@D@B@@@@A@@@@@@@AE@CCA@@@AADCF@L@F@D@FBD@VEJKDSEMBAAC@E@C@CA@C@A@A@A@A@A@A@CBA@@A@AAA@A@@ACD@B@B@BABA@@DCPOVQJKJEAAD@BAFAfcsGQMQk]i[UMMUCBSDI@KDUPIDOHOHEDEBE@G@I@@@@CBE@AAAC@EBCFG@A@C@@@C@E@EBAB@BBD@@ABA@A@@B@@FDAF@H@@BBDFB@@D@BB@B@@@DFBF@FEJSV@B@@ABC@CB@BCD@BA@@BEHCBE@I@KECACAA@GDGHCDAFCDC@C@E@G@K@EEACAA@AA@AAC@EAA@AACEAEMMACBA@ABEC@EACA@C@ABC@AACECOCEAC@EBECECEEAEBC@@BABABC@A@AAA@A@@@A@@@@@G@IAEAEEG@CCAG@@@@@A@A@@@@@AAA@@AAAEEGEECC@A@CBCBCFEHCBAHA@@@@BA@@AABB@@@@@@@@@A@@@A@@B@@@BIFQJOBAAAEEBIFGAEGDAHG@@@A@@A@@@@AA@@A@BA@@@@BA@@@CB@@AB@@A@ABA@@@@B@@@@@@AB@@@@AB@@CFABON@@@@@@AB@@@BADA@ADCBCBEDABABDBDBBBDB@B@DB@@@AFGFE@SBKDMBCBABABEBEBABADADCBEBABCBADAFADCDE@@C@CDCBE@AEECAA@C@G@A@CA@AAG@MEEEA@@SNINGFIFEAEEEGIEKCGCI@E@AF@FADJLBF@BEBUHA@CDCBCHIHEBCBC@ABAD@FCDCDCBEFCFAFADA@ABA@C@G@A@C@AD@DADBD@D@BABC@ABEBEBEDCDCDC@A@C@A@ADBDBDFFFDFDBFDFDFBFDFDFBFDN@D@D@FAHGRAFBPD@HBB@FDPHBBBFBLBBDDHAJAFB@BBFADCFCJ@@ED@BBFDLFDFB@DAFAD@D@F@@DDDBDBJ@DBBB@D@DDFDD@BBF@DAFBDBHBD@@@HLD@@@@DBHA@ACGFEHAL@LDHHTRJJD@J@FBD@HAHBHBF@F@BABABKBE@CDBFBFDDFBDDDDF@BDBD@HDADAD"],["@@@@@B@@B@B@@@@A@@A@A@@@"],["@@ABAB@DB@F@B@DA@CA@CAC@"],["@@@BB@BB@BB@BBB@B@B@@@AA@@AAB@@@AAA@AA@@@@A@@@A@A@@@@@"],["@@@BBBDF@BBFB@B@@@B@BBBB@A@@AC@AB@@@BDBBB@B@@AAAAAAA@ACGA@AA@A@@AACAC@@@@B@B@@A@@B"],["@@B@@@@A@@B@@@BDB@BBB@@@@@@@@BAB@B@BB@B@B@B@@@AB@BB@DBD@B@BA@AB@BB@@BBB@B@BABA@ACCECAA@A@ACACCAAAACAA@A@CAAAA@@@CAA@A@@B@@BB@@AB@B@@AAA@@BAB@@@BA@AAAAAB@@BB@@@B@@BBBB@@B@@A@@@@B@@@B@BB@@BBB@"],["@@DFBBD@D@DAD@B@@AAAAACA@A@@@@B@AA@@@A@@@@B@@BB@@@@@@@@A@@@@@A@@AA@@AAC@A@@@AB@@AB@BB@BB@@@@AB@@BB@@AB@@AAA@@@@AA@@AA@@B@@@B@B"],["@@BB@@B@B@@A@A@A@A@A@@AAA@@@AA@@A@A@A@BB@DBB@B@@BB"],["@@B@B@B@BBB@B@B@@@@A@@@@@@@AB@B@BA@A@@A@AAA@C@@@A@@A@A@@@AA@A@A@A@ABB@AB@@A@@@@B@B@@AB@BB@@@@@BA@@B@@@@B@@@B@@"],["@@@B@@B@@@@BB@@@B@@@@@@@@@AA@@@@@@@@A@@@@A@@@@A@@@@@"],["@@@@B@@@@@@BB@@A@@@@@@@@@A@@@@@@@@AA@@@@@@@@@@AB@@@B"],["@@@BB@BBB@@@B@@@@@@@B@@@BDB@B@B@B@@@@AA@@@@@@@B@@A@@@@AA@@@@@A@@A@@@A@@@AA@@@@@A@@@@A@@AAB@@A@@B@@@@@@@@@@A@@@A@@@A@@B@@"],["@@@@@@B@@@@@@AA@@@@@A@@@@@@BB@"],["@@B@BBB@B@BA@@B@B@BB@@BA@@@A@@@@@A@@B@@@@A@@A@A@AAA@A@@BA@A@A@A@AB@@A@A@@BB@@@BB"],["@@BB@@@@BB@@@BB@BA@@BA@@@@A@@A@B@AA@@@@AA@@@@@AAAB@@@@@B@@"],["@@@B@@@@B@@@B@B@@BB@@@BA@@A@@@@@@@A@@@AA@@@@@@@@A@@@@@@@@@@@A@@@@@@@"],["@@BBBBBB@@B@B@@@B@BAB@@AAA@AA@@@@A@@@@@@@AA@AA@@A@ABA@@@A@B@@@BB@@@@ABA@@@A@@@BB"],["@@@@@@BB@@B@@AB@@AB@B@@@@AA@@@@@@@@@@A@@@@@@A@@@@@@@A@@@A@@@@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@@@"],["@@ADABAF@B@@ABAD@FDDB@B@BAD@B@BA@B@@@B@@B@DBBB@@@@@BA@AB@@@BB@@@@@@@@BB@@@DA@@@A@@B@B@@@BCBA@@@A@@@A@@@@B@@AD@@@@A@@AA@@AAA@@@A@@@@A@ABABA@AA@AA@@@A@@AAA@@@AAA@@AAACAA@@AA@@AAAGAA@A@@B@@DDBB@B@B"],["@@C@@B@B@@B@BB@BBB@BB@BBB@BA@@BA@@BB@@B@BA@@AAA@@@@@@A@@@AA@@A@@@@BA@@@@@@@AB@B@BAB@@@AA@@@@AA@@@A@@A@@B@@A@A@@BA@@BA@@BA@CBA@@@"],["@@@B@@@B@@BBB@D@@@B@BBB@BBB@@@B@@A@@CAAAA@@A@@@AA@@AC@@@C@AB"],["@@BBD@B@B@@@B@@@@AA@@A@@AA@@A@C@@@A@@@A@@B@@B@@B"],["@@BBBDDBDBF@BBBAB@@C@AA@A@A@ACAAA@CAC@A@AB@B"],["@@BBBAB@@@B@BBBBBAB@@AB@B@BA@ABA@@BADA@@B@@C@@@ABA@AAAA@AAC@A@A@@BABA@A@AB@@@B@BADBBA@ABA@AB@@A@A@@@ABBB"],["@@@D@B@@B@@@@ADCBAB@BA@@@@@A@@@@BA@@@AA@AAA@@@A@AB@B@B@@@DA@AB"],["@@JFDBD@B@FAB@@A@AAAAAA@A@ABAAA@AAAA@A@CA@@@A@@A@@A@@@A@@A@AAAAAA@A@@B@BBB@@BD@BAB@B@B@B@@BBB@@@"],["@@BAB@B@BB@@B@BA@@CCAECAA@A@A@@@AAA@A@A@@BA@A@A@A@@@@D@BBB@BD@D@B@B@@BBBD@"]],"encodeOffsets":[[[123238,28660]],[[124106,28316]],[[124105,28326]],[[124100,28315]],[[124114,28273]],[[124109,28288]],[[124127,28277]],[[124041,28288]],[[124077,28294]],[[123952,28301]],[[123953,28296]],[[123961,28297]],[[123948,28334]],[[123843,28327]],[[123834,28319]],[[123828,28313]],[[123836,28308]],[[123840,28303]],[[123876,28314]],[[123806,28359]],[[123819,28350]],[[123821,28346]],[[123711,28355]],[[123727,28351]],[[123740,28336]],[[123725,28310]],[[123799,28377]]]}},{"type":"Feature","id":"330382","properties":{"name":"乐清市","cp":[120.967147,28.116083],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@A@C@A@@AA@AA@BA@@BCBAB@B@@CDCBC@CB@@A@A@@@@@A@@BA@CBC@@B@B@B@@A@A@AB@@AB@DBB@@@B@@AB@B@@@BAB@B@@@BA@@AC@C@A@@@ADAFCFCB@D@DABAB@@AA@CAAA@A@@DCBABC@G@@BA@@BA@A@A@@@ADCBCB@B@F@DBF@BABABA@A@AA@AAA@@AAA@AACA@@A@A@A@@@A@ABA@@B@B@@@BBF@B@B@B@@@D@B@DA@@FABABCDADADADCD@DADADCBCB@AA@@EAA@C@@AAA@EBA@AEG@AACAA@A@AAABC@@AAA@A@CA@@A@A@A@A@A@A@A@C@A@ABAAA@@BA@AA@AA@AAAACCCA@ABAB@BA@A@AAAKAC@AAA@ABA@@BAB@@A@@A@A@A@@@AA@C@AA@@FGBCBADABABABA@ABEBEAC@AAAACAGAGAIAE@CBC@@DB@EABA@A@AB@AAAAEACACACCEEGIKGIEEGICEGIEGKAOCIAECCCCECG@IAM@I@UAKAMA[I{AWAGCCEGGIGK_QQKQKWSOMW]gQmK}SkoMVIDKDIDE@QHMDCBYFKDSBSFIBQBIBG@GAK@O@SAM@A@CACASBKCOCE@G@I@@@CDEBCBCBW\\AHAFEJEHEBHFDD@BBB@@@BB@B@B@@@@@D@D@@@@BB@@@@B@@@D@B@BBB@@BBBBB@BB@@@@@@@BABAB@@@@BB@@@@BAB@@@@B@@@@@B@BA@B@@B@@B@BBB@@@@BAB@@@@AB@@@@@BB@B@@@BB@@@B@@@B@@FFDF@@@B@B@B@@BB@B@@@B@@@@@BAB@@@BBD@B@@A@@BABAB@BA@@B@@BB@@B@@B@@@BA@@BB@@B@B@@@@AB@@@@@BAB@@@@@BA@@B@B@@@B@@@@@B@@@@@@B@@@BB@@BB@@@BBD@B@B@B@@@B@@@BB@@BB@@B@@@B@BN^DBBF@BBBHHFFDJ@@ABBDBBBB@@FJFLFLLJDFHJLPHHDH@D@DAFBDBBNHB@DF@BBF@B@B@@@BBB@@FDD@FBFBJDDBD@BBBB@BAB@@@BA@BDCNAJABIFK@@@A@C@A@@@AD@@@BBB@B@B@@@B@B@@@DBB@@BBBBD@B@D@BBFDDBBBB@D@B@@BBB@BBBBD@D@D@B@H@@CT@@@@@B@@AB@B@BBFAREXCNMPAB@@AJBJ@@@B@@@BADAB@BBBHFBBDD@BB@@BB@B@D@@@B@BBB@B@DBD@HAB@D@DADABAB@@A@@@A@A@ABA@A@@@@A@@AA@AA@@@@BC@C@@B@B@B@DBB@DBB@BB@@B@B@D@B@D@BB@@FBDF@B@@@@BB@@FBDB@@DAD@B@BADBBBHJLPDH@D@B@@@@A@@@A@EDEB@@A@A@@@@B@@@@@B@@B@@@BB@@@B@@BB@@@B@B@B@@@BBBBBF@FBHFNHFBB@@D@B@@A@A@@BA@@@@BA@@BB@BB@@BBBB@@BB@@@B@@@B@@@@@B@@@@@BB@B@B@@@@B@@@@@B@@@@@@AB@@@B@@@BAB@@@@AB@@@@AAA@A@@@CA@@@BEAEAA@A@@@CBABCBA@C@@@CBA@@@@B@@@B@B@B@DBBBBBD@BBBBB@@BB@@BB@B@@@B@@CBA@@@A@A@@@A@@@CB@@A@AB@@BB@B@@B@@B@@@@@@@BB@@@@BB@BB@B@@@@@B@D@@@@BB@@B@BB@@@@@B@@@@@B@@@@@@BBD@@@@@D@@@B@F@HDBBHFBB@@@@BB@@@B@@@BA@@BAB@@AB@@B@@B@@AD@@A@@@@@@@@B@@@BA@@@@D@@@@@B@B@B@B@B@@@B@BA@@@A@A@A@A@C@@@@@A@A@@@A@@B@@@BDHDD@@@B@@@B@@CBABAB@@@B@@BB@@B@@BB@B@@@@@@BA@ABA@AB@@A@AA@@ABA@@B@@@@AB@@@@@@B@B@@@B@B@B@@@@@B@B@B@@@B@@@@@B@@@@AFAB@F@@@@@B@B@@@B@@@BB@@@@B@@@B@@AB@BA@@@ABA@@BA@@BAB@B@B@@@@@AA@A@@BA@@B@B@@@B@B@BA@@BB@@B@@@@@@B@@@B@B@DBB@@DB@@DAB@B@BA@@@@B@@@B@B@@@BB@@B@@@BB@AD@@A@@@@@A@@@@BA@A@A@@@AB@@@@@B@@@@@B@@@B@@@B@B@@@B@@@@BBB@@@B@@@@BBBB@@@@BB@@B@B@@A@@B@@@@@BB@@@B@@@@BBBB@@@@B@B@B@@@BA@@@@B@@AB@FAFAF@NB@@BBD@D@@@D@B@D@@@B@@@B@B@@@B@@B@@B@@@BB@@B@B@@BB@B@@B@B@@@B@@@B@BABBD@DBBBD@@@@@@B@@@@@FDFHBDDH@F@F@B@B@B@B@@@BB@@B@@BB@@@BBB@BBBB@@@@@DDFBDDDF@B@BBBBB@B@@B@@B@@B@@BB@@@@@B@@@BABA@@F@B@B@DABA@@@@@@HCDEFIB@@@@A@@B@BA@A@@@@F@@@@@B@@@@@D@DB@@B@@@B@@@B@@@BB@@BBB@@@B@@@@@BAB@@@@AA@@@@@@A@@@@@@@A@@@AB@B@@@B@@@B@@@B@@@@@@BB@@@@BD@BABB@@@AB@BA@@@@@@@@@ABC@@@AB@@@@@DADC@@@@B@BABC@@DCDC@@BA@@B@B@@@@@@@@@"],"encodeOffsets":[[124081,29190]]}}],"UTF8Encoding":true});}));