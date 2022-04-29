(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('松山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150404","properties":{"name":"松山区","cp":[118.938958,42.281046],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@HAHALEHAPCR@TCLALANCJCN@PBT@T@LAPAPARBHBJBHBN@L@NARCNDHBNFLFFDJDLFNHNHTJTFJDPHRBNBLBHBNDLBRBR@TAXAR@T@PBLAJCLCNIVMRETCVEXCZAVCRCTAVCZCXCPCNCLATEPALANCRAJAHAJAHCH@HDHBDBDFHDFFJBNDPBJCHAFGBCBGDEHIHGJ@LBLDJDHDFBF@HCHALAHEHCHCHCJAH@HBHDHFJJJFJ@RAJEBGBIDIDGJIHGLCLCXANAJCJCLAH@HDHDHFPFLDN@P@NBTANANEJGHILMLMNIHCJELCJEFCHGDIFCNGLALBJBHBJDLBH@HAH@HBJDNHNDJBJDJAFALABCDEDEFEPALBPHJBH@F@JANELELELCLEN@J@N@FABEBC@EEEKAGAM@IAGCKEIICIBM@KAEAGDCTCFBLDJFJBLBN@RATBZ@NALBJ@L@HBFBJFHDJBLDN@LBP@LBLDNDHDJFJDJFJHNLJFNHJBJDLDLDLLDDBDFJHFBDBFBJ@HBDLBJALBLBPBPBLBJAJ@JABCFG@GAKAGDGBCHCJCL@PBPHHBFFFHB@B@B@B@D@FDF@DBB@BB@D@B@L@HBB@HDFBHBB@HAD@B@D@BDBBB@B@BADAB@BBB@@DBDDBDB@DBD@B@BBB@DDD@@@B@@@BAB@B@D@B@BADAD@B@B@@@BBB@DADDFBFBFDDHDL@@DB@BBFAB@DA@GBI@I@IBC@CDGLINGLGHGHGHCJALCNAJBH@F@JDFHJHDHDVDJDJ@H@L@LBLFLFHHHFDFDBJ@FCJGHETCRCPAPAJAFADGDI@I@MDK@EAG@GDIFGJEPGLCPCREXAZAJ@J@F@J@PBPDPDN@LFLHFHHNFPFBRDNCNCNCHGDIAMGOGIIMCCEI@CFEHCNCLANGHCDEDEFGDEDABCDCBADEJKDEAEBE@C@EAAAAACACAC@C@A@CCCGKACAA@C@C@A@CAAAC@AAA@CCCAAC@ICA@AEAABCCAEEGIEGCCCACACBC@A@@@AA@AA@A@AB@@AAAAAACAA@C@CBEBA@CAA@AAAA@@@CAAEACCCACAAAAA@@AA@C@E@CBCBGBAB@@ABEBGBC@E@AAO@IAGKGBKCG@EIC_BQEWWUWQKEH@BIFACA@@@M@_J@AA@EGS@@B@B@@C@A@@A@@@A@@@A@A@ABAAC@@@@@AACUFEBaHuI@BCLCHAD@@ABCH@F@DABBBCBIBE@I@@CgGC@MAA@A@A@@BBD@BGCAAB@GE@@GA@A@@AA@@BCD@BCCA@@@A@@@IBACSAGAK@@DABABAB@@AF@AA@@GKCEWAEBCEKDGDAJYJ@BCLE@A@C@]HCM@@@A@A@AGAC@E@CBCBEFADEBABE@CAE@CBC@E@C@AC@@AA@@CAA@CBC@ABGBA@A@A@B@@A@C@AA@@A@ABA@ADA@@BAPBD@AAAC@@@AA@CAAAC@A@C@@AA@@A@@AAAAA@AA@A@@AA@@CAAA@@@ABA@A@@CC@@@C@C@@BABA@@@@AC@ACAA@A@A@AA@@AA@@@A@A@A@@@ACAA@AA@@@AB@@@CE@AEKA@AACAA@AACA@AA@AAAAECAA@C@@@A@@A@@@A@A@A@@AA@AB@@A@@BA@A@ABA@@@A@@B@@@@AB@@@@@D@B@@AB@@@BA@@@@B@@@@@@A@ABA@A@EA@@AA@@AAA@ABA@CAE@C@C@A@@CC@E@CAAAC@G@A@A@C@C@CBC@IAAAACAACBGAC@I@ACG@C@E@CACAA@E@CACBABGBCAA@C@EBEBC@C@A@C@C@CBODKBC@C@CBC@ABCBABC@CBEDA@CAEBC@C@CBGFC@A@A@G@A@AAC@C@CBO@E@CBA@@BC@CAI@E@C@I@GBC@AA@@@@@A@@@@@@A@@A@@@@AA@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@AAA@@@@@A@@B@@A@@@A@@@@A@AAC@A@@@@@A@@@AB@@A@@@@BA@AB@@AB@@BBB@@@@B@@@@@@@@A@@@@B@@A@@@@@AB@@@@A@@@@@@@@@@@@B@@A@@@A@@@AB@@A@@@@@@@AB@@@@A@@B@@@@@@A@@@@BA@@@@@@@A@@@@@A@@@@@@@@@A@AB@@@@A@CBAB@@A@@BA@AB@@@@A@@@@@@@A@@BA@@@@@@@@@A@@@@@@@@@@@A@@B@@@@B@@@@@@@@@@BA@ABABA@@BA@@@@@A@A@@@A@A@@@A@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@BA@@@ABA@@@A@A@@@@@AB@@AB@@@@A@FE@BJCDC@@BAA@FC@@AAGF@@@@@@A@A@A@A@A@A@ABA@A@A@@@@A@A@@@A@@@@@@A@@@@@@@@@@A@@@@@@D@D@B@@A@A@@@A@@@@@@@ABA@A@@@@@@@@@@@@A@@@@@@@ABA@@@A@@@@@AB@@AB@@AB@@AB@@@@A@@@@@@BA@AC@@@@@@B@@@B@@@AA@@AC@A@@@@@@@@@A@@AA@AAA@A@@@A@@AA@A@@@A@@D@BA@@BADADAF@DAB@@A@AB@B@@ABAB@BAF@@@B@@AB@@@B@D@B@@@FCBADCB@DABAB@B@DAB@BAB@B@DAB@@A@C@ABABABAB@BAD@BADA@@@AFA@A@@@A@A@ABA@@BA@@BAB@B@B@B@@@@@@A@@@@BAD@BABAA@AAAAAAAAA@C@CAAACA@A@AAA@CAC@@@@A@C@@AA@GEAACCAAGCEAA@EAEAA@AA@AAAAACAAAAACCACCCCCAA@ECCCC@AA@AAA@A@@@CBAAADCAAB@BCBA@C@@@@@CA@@A@GBC@ABABA@C@AA@@@@@@@@A@A@@@@AABSEG@CA@@@A@@A@E@C@E@A@@AE@A@AA@@AAA@AA@CAA@@EA@AAA@C@@@@B@@A@AAA@CDE@A@A@C@A@@@@GBE@E@A@G@A@C@AA@@ACAA@ABABAB@HAH@D@DAD@D@BA@@EAA@CCAA@AA@AAA@AAECAA@A@@@AB@B@@@B@@@@A@A@@@AB@BABCC@AC@@C@@AA@A@@AA@I@E@CAA@AA@AAAAC@ABAB@@A@@CA@AACAABAB@@@@AAE@@A@@AEAECGC@@@@@A@AA@CAA@A@@@A@ECA@EECAEE@AAA@C@C@A@@ECAACG@GBG@GBKAICGEAIAG@GBIDMFMBOHUBSDS@[CWCQGQIMGIEKIIEMEIEIECEECEIEMOIKCCBCFAH@JDN@J@LEFG@ACCCECKCICSMG@E@AFFJLFPJFF@FIBMBCHGFIDODO@Q@OAOIUISIMEOCQAOBKBKDMFSBU@QBMFMLGJKJKFOFODSGIEOESEUASBU@K@MAKEGGCI@E@C@EQLGBE@KBMCKAKCEEKG@EBGBEHIBEBICMGMCCIIEGICKAIAM@KBO@EAG@IBI@S@UBK@KDEFCH@DBDDFFBPDDAHDFBFDBD@DCF@HF@FAHAFBDDBF@F@F@B@JEHCBEDIFKFQFOFODMBMDGDEFAHCFBF@HBDHLDLFJJNDLDLBJAFCHEDEFIHKFODSDSBSFIDGBKFGBEHEFGJGFGFMHKDOHKBODIBGFCHCJ@HDDFFJDJDPFPHNDRDPDRHRJNJJJHJDJDFEFCFEDGBEBGDEDIFIHGJILGHEJCHCHAL@FBFBFFFHHHHFLBH@HEHELEJIJMLMLOJSNOJMHKHIHGLKNIJIFKHIJSLSNOLQLKJKJCDINENEJGLEJONKLMNMLOLKHMBMHILGPAJBJHFHNFHFDHFJDFDJHDHBHBFDDFD"],"encodeOffsets":[[120661,43668]]}}],"UTF8Encoding":true});}));