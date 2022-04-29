(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('多伦县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"152921","properties":{"name":"阿拉善左旗","cp":[105.70192,38.847241],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@Iʔ©þefKXBƼHtAbFpJ`D¶T¸P¶P´V¬T´P°LBIñCëĨQªOĪNĖH`C}Ǟżh\\F@@KAQAICkAKCiAGCUCSE_I}IsE_I}BOBQD]DQBUJ{BSBQPAKCSFOVuFKJSHMFILUDEDGDCDIR_DENWJSJODEDEJOBCDGHKXiBGBEPBCFYFWBGEEIIQSfaJIPKZWd_LUFEFMD[B_FWD[¬usRImj]àxiVSXAXILQvQSdK°Gn]xQZGYRCIfAV@H@LAHBTEF@TEDAJC^C\\ATAtEZINCjeDDF@nTX[FE\\]XAFCD@JAF@LAJGBI@CFCBC@@@A@@B@@AIs@@@AB@BAHAH@@@BA@@@A@@@AA@A@BA@@B@@@@@@A@@BAB@@@BABA@@@A@@@@B@@A@@AAB@B@@AB@AA@@BABAB@@@BA@@B@@@AA@A@@@@DB@@BCB@@BB@@@BA@@B@B@BABA@A@A@@BABAB@@@D@B@DCBA@AB@@@B@BB@AB@DAD@JCH@F@D@B@B@BBBFDBDBFBD@D@JAFCJAB@BADCB@B@FABBrO@@UFCLETILCXK@@A@SP@@Y@ABELwDQDS]RED_EoHKBEyAUTUVCDEDGHKDODMDsPcLAq@K]BGBKBkDqD@@FMNgDEDKHQBEBGDAFGbiFEDCJMJI^cHIX]NObiTW@@VBn@d@®BHGPOBAPO^CrlZV```FÈVÐEJ@XAlCJAìQ\\CL]OQUWCCOQouCEA@SKgU}_HKrLY`ESRABAHBZ@zDL@J@@@@Y@GKCOIMIMQESCAEMCUEKEIWSMEOOSIIAE@ICEAIGAAGEEGGGSQWICAEC@ACCAGAO@AAO@GBMDG@OBMCK@MBSAW@MHEDGDKFM@E@ECCGGMCGIAGBQBEFKDQLQNMVUJOHe@U@MBS@I@IAEECEC@CDGNMFGDOBM@G@K@IAK@EAGCECIAEACBKDGLGHCJCHEHEFAFCHADE@ECGIIGEGEIEICEACCCEAGBGDIBIDM]ċCCBIWMMMOW@I@MR}LOD@FCBANOHCDAFAVC@AD@DEFIBGDED@DALAXGfOF@LGD@PAF@HCRCTK@ECGMCEEAE@GDGDKBEDIFGDIDGCAC@EAGAECECGCKAUDoSQMECKAU@iFIDOLyTIGCECEAAEIEEEGAGAAEECAEAAAEEAAACAA@AAAAA@AEEC@CCACAAAAGCC@CAAAAAAAGAA@CCEGAAAAE@EBEABA@ABACEEA@EBA@CCAAC@KACGA@G@C@CAAEECAAAC@A@MDKBOBEBSDABA@@BEDEBEBGBE@K@GBE@@BCBEBKBE@MBI@K@GBGBIAMAIAKAKBOCKAMCWCIEEAGAEAIBMCG@IBI@MCI@ECECCCCEAEBG@IBG@EDIDKBK@IDK@KAGAG@I@IBK@EFKFIDOCKACCEEIAICCECICGAGAICECGCECEAIBEFGBEBK@E@GBE@E@MBGBE@KBGBCBEBIHGHAFCDADEDGFCAIAGAE@ECOKEEEGCECEGGACIMEICEEGAGCECIAEGIGEGEEECEAE@I@@AEAAAACCCE@EEKCG@I@GAGACAAB@DADC@@CCCAAAAAACAABABCBAHEHGB@@AAKAC@CAAGGCECCACAEAAI@ACCACKCAAA@C@IAEACCAGCCACCGBG@KAMGCAICCCEECCCEEGAEEEEEECEAGEEAECGECCGCEEGECECG@GBEBCBIDCFIFGLKB@FBF@F@HBHA@@@A@AACAAGCAAAEAEACACCCCCCCCACAAAECCACAGAC@AC@AAEACCCEACACACAECCACCCCCCACCEAACCCEAAACBC@A@AAAC@E@G@CCCCCCCACAGAEECAE@E@EACA@C@C@C@EBABCDABADCDCDAACAAACAAACAC@CAE@ABADCBABC@CBA@CBC@E@CACAGAAEACAACCAACECCACCEAAA@A@A@CBAFGDIDEBA@EBCAAACCCCCAACEACCCECAAECCAACAC@A@CBC@CBA@AACCAAAEACCC@CCACCACCCEAAACAC@C@C@A@CBC@CDEBA@C@A@E@C@ABCBAFCDCDADE@C@CBEBADCDADABC@AAEAEAAAACAG@EACAAAACACAE@C@A@C@EBCBCBCBCBCBA@C@CBE@A@I@A@E@AAE@G@EAAAACCAACAGEECECAAAGBA@CBCBCBA@CBA@CAACCCCCAAC@A@C@GACGE@CBE@CBCBABCDCDC@CBC@CBCBCBABCDC@CCAAAECCCEACBA@C@C@CACAACAC@ADEDCACAE@CAC@A@C@C@C@C@ABC@ABCBA@CBA@ABEBABC@C@C@AAAGICCEGACACACAC@AACBC@CBCBABADCBA@CBE@A@CBAB@@@@ADABABABCBABABCBGBEBCDE@CBABADCFCDCDABABA@ADA@AB@BCDEBCDCBC@ABA@@ACCGAAAC@@@@AA@AAGAC@CAEEICGAEGMACACEIAE@E@@A@EEIGKECAIEMEICKCKEEEEEACGGGECGACAEGMAOBGEQ@C@IAG@IAG@IAGAGBIAE@IBIDIBGFMBIDGDGBGDCFGHKHKJGHIJIDCFGHKFGHIDEFEDADIDEFGDCDG@GAECECEEEACACACCECICGECEIGGCEEICECGCECGAEAEAE@G@G@E@GBI@IBEBGDEBCBEBEBE@E@GBC@CBEAGCE@EACACEEEEACECCCEEEEEICEAC@CCG@CCECKAECGIICCIGIEGAMGGAEAGAIAGAGCEEIAICICGAGCMAKCE@E@EBGFE@E@E@EBKBC@IDCBIBC@G@MCEAAAAGEUCS@Y@eAEAAAEAIEG@@KIIC@@KAGBI@Q@EAM@MAI@IAI@G@MAK@M@M@G@I@K@M@CAK@M@MBGAQDM@G@GBGDGBIFCBGDGBM@EBEBIBG@GAIAEAE@K@EBG@GAGAIAEAG@G@I@IAKAGAK@I@G@IAGCEAICEAEAGCKEGCIAI@EAG@KCKAGCI@M@EAIAIAIEEAGCCAEAECGGCAICGEIAICIAOCMGSGQECAECIAKAI@EAKCCCCAGGIGMKEEq[aSMG@@@@@@@@YIGCE@MAI@I@AAECIAaIS@o@I@WmYGEA@GAeA}EEýQeA»EģGEGUBMoCMEcGAC@@@AAC@CAE@AAA@@@GBE@A@C@I@CBC@@@AAA@@@A@@@AACAA@AA@@AACCCC@@AAAA@AA@@AA@AAEAEAC@EACAA@CAA@A@C@A@AB@@A@@@ABC@ABAB@@A@@BA@@@A@@@A@A@A@@@AAA@EAICC@EAAAC@AAA@@@@AA@GGECA@@AGGECA@@BAB@@iOEAICGACA[K­IA@EDSLQJKHOJIHKFMJIFMHGFMFMJWPKFABÓª½YPEBKHKDOJKFOFKHKFIFGDIDEDCDEHEFGLGJILADGJ@@@BIPwn¿ªË´GHEDCDGBODIBKDIBKDIBOD@@Ïj±`C@UFQFWHRqNKDC@A@A@ABA@@@@@@B@HAB@B@B@B@H@DADAFCN@D@@@@@B@@AH@D@@BB@B@BAB@@AB@B@BAB@@@B@B@BA@AF@BAB@D@D@@@@@B@BA@@H@BAD@DAB@FAF@D@B@BAB@DAL@DA@@BA@@B@DAD@FAFAFAFAFCDABABABABA@ABAB@BAP@ZBD@@BHBHALALAJCHAHCD@BADAHBFBLBJ@NBL@F@JBJBHBF@DB@BBJDDBNFLFNFJDTHTHLFLDLFTFLDJDLFHBLDLDJDFBLDFBF@DDBAHBDBNFFDDBNFHDFFAF@JAJCJALCNAPCNAJALAFAD@JCJALAH@JAJALAJAH@HAFAJCFAF@DCFADADABA@CJADCFCHCHCDCFGJEHCFELEHCHCHCFCHAHADABEFGJEFEFCFGHGHCFEFEHGFGHGHCDGDADB@ð Ôʈż²äÆø@D~V~V¸p@BD@BDBBBBFHFLJRDHLTBDFNDD@D@F@FAF@FBBBFAL@HAF@LAJCLAJAF@DDHBF@FFJDHFLDJFPBD@BAFCFCLELCJELCJEJCJCLKXCHAFADEHCFIJGJIJGHGHGJILGHGHGJGJIHINUXILIHGJGJGHGJIJEHILGHGJIHEHGHDFDHFLDJFJFLFJDLFJDLDJBJBLDLBJDNDJBLDJBNFVDJABJ@ĪZæÎÜÛƸ]xÊ|Þ@@s\\CB]PQH@LDFVJZLÈVvRxFD¨HzV°pLDbHVbJW`_lcrQVE\\MtNNæx£tjljDbAdWRiJeDCNAHANNPfpCFarSPOLe\\yla|GPCFkpORWZ]`CHI^CNAFGVCFINgtKN]AMA£ICA@BGfEVQR]\\ijEFUVMfDNDHCzANK`KfIPOXYlINczUVIJ_dqz_dQTW\\GHY^ÑÜA\\GzAPABMPgnWZ[bgp[ha^afngXQLOJeZYPYPEDQLCBYPABKFMJ]R{fwbKFs`m\\M\\ELObADGPCJCHITELKVAFYtCJGNENGN]KXCFENELKZGNGRAL"],"encodeOffsets":[[105901,42888]]}}],"UTF8Encoding":true});}));