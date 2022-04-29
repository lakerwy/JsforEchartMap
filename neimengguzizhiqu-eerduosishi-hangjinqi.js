(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('杭锦旗', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150625","properties":{"name":"杭锦旗","cp":[108.736324,39.831789],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@NCHATKNG@@TCJ@JADCBGBEAGAK@CBE@@JMHEFCREVARCH@JDLBlFRCTENAXKJC@@J@JBB@PLFBB@F@NKNGFAD@ZALAB@LBB@JATENEDEFKDGNGJEVMDAHCHAHABCLMBE@CACEICI@A@AB@BAD@B@\\@dBH@DADCHEFAP@N@VBB@DADADEFGNGDE@A@A@@@AAAECGAMAIAAACA@A@@FEHGBCBADAJ@D@BBHDDDHBB@FAB@FCB@DCDEJITQFEBC@C@AECCCEEAE@@@CBAFEDAFAF@LDNBV@FADAFCBABEBCAACAGAEA@@@ABCFAFAH@P@`F@@XDHBFAJANETMFGPSLKDCD@D@HDPB\\FFBLAD@FABABC@A@ECGMUEIIOAGAGBKBEFG@@HGDAFCDAF@L@LBD@F@J@JBHDDB@DBJBFDBFDF@DB@@DAFALIB@PIFCFAJAB@H@H@DBVFHDF@F@DAPC`GZKB@RGHABCDEBGDABA@@HCHAD@BBHJ@DDD@@D@B@JENGBADADABAF@B@@@BBBB@DBDHFLHJFLDF@TB@@FBLBFBN@N@HAJ@D@@ACEGGEGCICO@E@GHQHO@@@@BCFEBIB@BAD@BA@@ACCA@CDGFE@A@AA@C@EBA@AAA@@A@CACCEA@AA@CAEACCCGECECCAAA@A@AAA@ACAEA@CACAECC@@AA@@BAFCFAB@@A@A@CCCCC@G@CAECECAA@@BAB@D@FB@@BA@@CCGEAEAC@ABC@A@A@AAAGCAA@@BG@C@@BADAB@BABADAFAFCDA@AB@DCLELEBIDMBKDGBKBGBIBIBGBGDO@@BGBE@EBE@CDI@C@AD@FCLCJCBAF@J@LAH@ZCL@TARA@@BANI@@@ADKDODKDO@@@@@I@IAI@G@G@K@@A@CCMGQKMGECB@DC@@@AACAGCIGMAE@@@A@AAA@@ACACAA@A@@AAECACAA@@A@AAA@@A@@@@@A@@@A@@@@@A@AAAAC@AAAAA@C@@@@AG@A@A@A@@@A@@@@@@@A@@@A@@@ABABCBA@@@ABA@@@AB@BA@@@@@@@@@AAA@@@@@@BABABA@@@@@@@@@@@ABA@@@A@A@AB@@A@@A@@A@@@@@@@@@AB@B@@A@@BAB@BAB@BAB@@@D@BAB@DADABAB@@@@@AC@CAA@CAE@A@@@@@A@@B@@A@AAAB@@A@@@ABA@A@@@A@@@@@A@@@A@@@@@A@@BA@@BABA@@@@BA@A@@BABABABA@@BADC@ABABA@A@@B@@A@@AA@A@@AA@@AAAAA@A@AA@@@@@AA@@A@A@AA@@@@A@@@@@AA@@AB@@@@A@@@A@@@A@A@A@@@A@@@@BA@@@A@@@@BA@@BA@@BA@AB@@@BAB@B@BAB@BA@@B@@A@@@AD@B@@@BA@@@A@A@A@@B@@@@A@@B@@@BBHDFBJDJDHD@B@@BAJ@PAF@D@B@B@@@@@@A@@@A@@B@@@F@D@B@B@B@@AB@BABA@@B@B@@@BBBBBBBB@BD@@@B@B@DAD@BAB@D@DAFAF@B@B@B@B@BB@@BAB@@@BA@A@AB@@AB@D@BABBF@F@@@@@@@BB@B@B@FBB@B@@BBB@@@B@D@B@B@@@B@B@B@B@@@B@D@FABAF@BAB@B@B@B@@@B@@@BAB@@ABA@AB@@ABA@@B@BAB@B@@@@@BBB@B@BBB@B@B@B@@@D@B@D@B@@@@@B@@A@@B@@AB@@@@AA@@A@@@@BA@AB@@@@A@@AA@@@@@@@@@@@@@@@AB@@@@@@@A@@A@@@@@@B@@@B@@@@@@AA@@@@@A@@@A@@A@@AA@A@@@@A@@@@@@@A@@@@@A@@@A@@@@AA@@@AB@@A@@AA@@@@@ABA@@@@@A@@@@@@A@A@A@@@AA@@CA@@@@AA@AA@@A@A@AAAA@@@A@@@@@A@A@@@@@AA@A@@A@@@@@@@A@ABC@@@A@AAA@@AA@@@A@@AA@@AAA@@@AA@@@@@ABA@@@A@@@@@@A@@@@A@@@@B@@AB@@@@@@A@@AAA@AAAAA@@@@@@A@@@@@A@AB@@A@A@@@@AA@@CAAA@@@@EACECCACACAC@EACCCEAC@CC@CBC@CACCCGCGAECCAAEAGACCCEBGDCBEBEBG@CAE@ICEAGAKAEAGAGAAACKCGCGAKAE@E@C@ABCBADAFCBABG@CBGBC@EBEDEDEBE@E@G@E@C@ADCFGDCBCBEBEAECECCCAGCCC@A@ABCLCHCH@FAJCFCFCHCDADI`YPOJcNYTQBAH@HADCBCBC@A@E@ADEBCFCBEBCBE@E@E@CAC@CBCBCBABCDE@E@A@EHQDEDEBG@C@EAAAAEAEAI@G@ICEAAAEAI@IAG@G@K@K@KAGAICAA@C@E@CFEDCDCHCHCBAAEkCGIGQCqCA@EAEBEDCBGFCBEB@@CAECE@IAG@IBIAEAMEGCKECCGCIACCCAACCI@GAEAECCCCCAEAAA@CAC@CAG@EAGAI@EAEAG@EAECEGGCEAAeKACBCTkRkBADCFADCDCBEBC@EAGCEACEEECA@CAICGCEAKAA@iS@@CCCCECCACAECEAC@ECICGACAICEAIAKCGCIAEAECCAGAE@C@G@K@IDGBGBCBG@KDEBA@CBADCDGDEDIFEDEBGDEDGDGFGDGDEDCDABGHCFCFCDABCFEDEDCBEDGBGBIBIDCBEBCBEDEDAB@BADBBO|FnABABCFEFADGDEDIFGFCDEDEFABEDCFAFADADCHAHCDCFCHCFCFEFEFCFADCDCDCDEDEDGBGFGBIBGAI@IDKBEBGBE@CBEDGDEDGDEFCDCD@BAFCFCBCBCDGDC@EBGBGBC@E@K@I@E@EBI@G@EDCBEDA@E@G@IBEBE@GBC@CBĹrCBE@I@EBC@GBIBKDG@IBIBE@EAA@K@E@G@MBE@GDEFEDCDGFEDCDGHEDEBMBG@KBCBG@GBEBABCBABCD@BG@E@GAGBKBG@CDGFEDGDK@GBKDGBEBCBKBEBEBMBE@IDIBEDIBIBEBEDGDEDEBIDEDEFCBADC@EBGDKBG@EBMBE@E@MDE@IBMDEBEBKFEBEBKBEDGBKBEBE@KDGBG@GDE@IBIDGBMDEBCBKDABE@KDA@C@@@CFABCBCBEBCBC@CBEBEBCBA@EBCBCBCBC@E@A@E@C@GBC@E@E@CBE@C@C@EBC@C@EBE@C@C@C@EBC@C@E@CBEBE@E@C@E@C@CBC@C@E@AAE@EAC@EAC@C@EAC@C@GAC@CACACAC@AAC@EAC@CAC@I@E@CBEBCBEBCBCBABABEBEAE@EDC@C@E@C@C@C@C@E@C@C@C@G@C@CBC@CBABC@CBCBC@EBA@C@CBE@ABCBCBADEDABABADEDABCBABCBC@CBC@CBE@EBEDCDCBABC@CBCBCBCBABG@CBCBCBCBCBCBC@CBABC@CBEBC@CBC@ABC@EDABCBCDCDCBCBCBKBC@C@E@C@ABC@C@CBC@EBGBCBABABCBCBCBCBEDCBCBABCBABCDABEDCBC@CBC@ABADADCDCBGBEBCBCBE@EDEBEBGBCBC@EDIBEBCBGBCBEBC@E@E@CBC@C@CBC@CBC@C@C@E@GACAECC@GAE@E@C@EAEAC@CAEAC@E@C@ABCBCBE@CBC@E@E@CAE@CAA@CAAAA@@@EDCBCDABCDCDADAB@BCDEHGFGDEDGFIDGDCBEDGDCBCDEDCBEDCBGDEBC@CDGDGFEDCDABCDCBABEFEDCDEFGDCDCDCDABMB@@KJKHCBYF]FA@ABE@EBIBIBABC@EBGBIDEBE@IDIDIDABEBKDGDOFCBCBE@OFGBABMHIHA@IFKFIHEBEBGDEDKDEDA@@@ABEFEDCDABCBEDIHGD@@CDCBCDGFEDGFCDEDCDCB@@GHEDCBEDA@CBABIDEDCBABEBCB@BCB@@CBCDEDEDEFCBGFGFABA@MLGDAB@@KDIFODCBABIBYJMFEBEBIBEBAB@@IHOPDBVLTHBBLFVHHHPFJHJLHHDBJFLFPRRLPHDFDJBJDTBJ@DBNBN@F@D@B@H@@@BDBDDFJFLDFDDFDJHHBHB\\BFB@@DBBDBBBFDJFLBDDFDBFBD@F@XBJDHDHFFJBBBBDBB@D@BAFATGB@D@D@BBB@HDDBHFFHHJ@HBF@HEXKVABAD@DBHABABAB@BADCFABAD@@@FAD@B@B@@@BBBBBBDBFBBBB@BBD@B@BBB@BB@BB@BB@DBBBDB@@BBB@BDBBBB@@BBB@BBB@@@BAD@@@@A@@BAAABC@@@A@A@@B@@@BBBB@BBBBFBB@BBBBDBDBB@BBB@BBBBBBDBBDDDDBBBD@@@B@@@D@D@BEBIDIDGDOHABC@IFGBEBGF@@@F@B@FBFBFBFBB@BCDADBB@D@DDF@BBB@B@BAD@DAD@DBF@D@D@@@BB@B@BB@@DBDBDDB@DBB@D@D@D@D@DAD@D@DAFAHCHCFCDADAFAFCFCFCDABABABAF@DAFAF@B@D@D@DBBBBB@DBDBF@F@F@HBDBHDHBFDHBD@@BD@BBD@BBBDFDDDFDDDHFHDHDHFLBHDDBJDDBFBDDDB@BDFBBBD@FBF@F@DADADABADCBAB@FADADAB@D@B@D@FDHBF@D@F@F@LCLALCJAB@HAH@H@H@B@D@FBB@DBDBDBFFDDFFFFFFJHDFB@BBBBFBFBDBHDDBJBJBHBHBD@BBDBFDDDFBDDBBBDBFBFBDBBDDDDDDDDDBDDDBFBF@HBB@F@D@DABABAB@DAFEDEDADAFAF@D@B@B@DBFBFBDBBDFDFFDFBBBBBDDBFDBDDBDBFDLFRHHFHDBBBB@BABCHAF@B@B@BBFFJDHDB@BDBBBDBFBDBFDFDFBFBB@D@D@B@DABAD@DAF@@@FADAFAFADADADCFAFCDAFCFAFADADAB@B@D@D@D@F@D@FBD@DBDBDBDDBBDBDDBB@@BDBBBFBDBFBD@D@BBDAF@BADAD@DAHAD@D@D@F@FBDBDBBBBD@D@B@FAHAFAHCDCHAF@D@B@DBB@@BBB@B@B@BADABADCDAD@DADAF@B@D@B@B@B@D@D@B@BBB@FBDBBBDBBBBBDBBB@BBDBBBDBB@DBD@B@BBD@@@B@D@@@B@@@B@@@B@B@B@FAD@B@FAD@BAD@DAB@DAD@@@B@DADAFAD@BAD@D@B@B@B@BAB@B@DADADAB@B@BABAB@BABABADABA@CBA@AB@BA@AB@@@B@D@B@BBDBB@BBB@DDBBDD@@BBBB@@@B@@ADADABAB@DAB@B@B@@@B@BBB@@@BBBBB@@BB@@BBBBBBB@BBDBBBDBDBB@DBD@B@B@BBB@@ADABADABABABADABABAB@DA@@FAFCFADABADAB@DAFCDCDABAB@B@BAB@B@F@B@B@BAB@D@D@B@B@BBB@BBD@DBDBBBB@DBDBHBD@FBFBB@FBNFJBLDJDDBB@L@FCHCTMJIFGBEB@B@B@D@JAD@@@JHB@JFJFFBD@L@LAHARGFCDAFAF@FBD@BBB@DHJFDBF@LCPEPAT@XDLBN@P@FBF@N@H@@@D@@BBBAF@DDH@DBDFBBB"],"encodeOffsets":[[110772,41851]]}}],"UTF8Encoding":true});}));