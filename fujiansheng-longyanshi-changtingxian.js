(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('长汀县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350821","properties":{"name":"长汀县","cp":[116.361007,25.842278],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BBBDBDADAD@D@D@D@DBDBBD@DBDFDBFBD@DCDADCBABBD@D@BCDCF@N@PCJIFGBED@FHLFH@BC@CDADAF@DDBD@D@D@D@BDBD@BBFBBBBBBFBB@BABCDCB@@@B@BD@B@DBF@D@DCDEBAB@DADABABCDAB@DDBBBDD@D@BCB@D@@BF@B@@B@B@B@B@@@@B@@@B@@GDEDABAB@BDD@BDFAHBDBBD@BABE@C@@FB@FAH@FBFDBDCBCD@DBDCDADED@D@DDBBBBD@FAD@F@DBD@FBBDDB@D@D@FAB@FAH@HBBBFBBDDBBDBB@DDADAB@FBFBDBDDDFFDD@BBDBFBBF@F@D@FBBBFADABBBDD@D@JFJBB@@@D@B@B@BA@AAACE@A@ABG@@@E@C@AFABA@@FBFD@D@B@D@BBD@B@D@F@FBDBFBDDD@D@DEDADAFCDC@CBAD@BADABCDCBC@CBBF@BBD@DABAFCBABCBABCBEDC@CBE@CD@FADABA@@@CCCACD@F@H@DADAD@B@D@F@D@LBDBB@DAFDBDDDBDBDBDBBDBFBBFBFFFBBBF@D@FB@@JAD@DBDL@FBBBDBB@DBBHDJFBBFBD@D@D@DADBF@JBBBBBFDD@FBFBFBD@DABEB@BCDCFAFBFBB@DBF@D@DAFAFBDBBDBDBHDDDBFBF@D@F@F@D@D@DDDDF@D@D@DBFBDBDBBD@DBD@BBFDBBBDDDBDBD@BBDBBBDD@DBFBF@@BHDDH@L@FDDBBBLBL@JAL@FBDDBBAD@DAD@B@BAFAFADAFADCDADAF@FBD@@@B@B@B@B@@BB@BBBB@@BBB@@D@D@B@B@DB@D@BAD@@DD@@FDBDBB@@@B@@BB@B@BB@@BBB@BBB@@@B@BBB@BB@@BB@B@BBB@B@@@B@B@B@B@BBB@B@B@B@B@B@B@@ABABA@@BA@@B@NEPIPCXERAfCPGJIDKAK@SDOHKHEL@LJPNLHPJNNJFH@LERGRCVERGJFHHFHHALCHEHCLBHDJLBTDNBJLCPIDC@AACAABADAHBF@@A@AA@@AA@AA@AAA@ABC@@CEEQ@O@EHEDICKBM@KDEHAV@LKDCKOKGGE@@DAB@FADABA@@@C@EAA@A@A@A@A@A@C@AAAGEAA@A@CB@BA@C@A@ABA@EAABA@ABC@ABAA@CAGBA@C@A@A@C@ABGAACAAA@CEAAA@CAAAE@@@CDADCDABC@ACAACCCEACAC@@AC@@@A@ABABABBF@B@B@@A@CDGB@DABAFBDAB@B@@ABE@C@EBC@C@AA@CAAA@@BA@AFEBAB@BAB@D@DBJBF@BCDCDCF@@@@@@@FBBABA@A@ACCACACA@ACCEACA@@E@GGGMEKIECMGECA@AIAGAA@MBC@EACCMAC@A@EBIAEAAAAAA@@BABA@A@AAC@AAA@@CACAAGCAAA@AAACAEI@AAA@ABAAGDE@A@@E@AA@@BABCBC@@@@@AAAAAGAG@@@C@A@CA@@@AAA@A@EBA@CFBF@@CACCAGA@A@A@AAAAC@C@AAC@C@EAI@C@A@A@E@ABABC@C@CBCBABA@A@EAABA@A@@BA@A@A@AACAA@CEGCC@EBEBE@ACACA@AAG@ABE@C@A@C@C@CAC@@@ABAHC@ADC@A@C@E@@@@@@@EAABA@CDEDE@@@A@AA@AAA@GA@@EIAGE@OGEEAKDMFIDKBWCQEKAAGMEMKYCKEUSBIDGBMDKAKOIGMGOKO]Q@GJIHI@KAOGOKGMCI@IAMCUGMCGKCS@KDOAQCQCMTAHBBBBBD@B@B@DADCBABABCBEBABCDAB@BA@AAA@CCGGCAEAAACCAAAACAACAA@CAC@AA@AAABADAFCBABCACC@EDEDEBE@AE@EAAAC@IAA@AAA@@AAA@A@C@A@CBE@ECCKEC@EMGO@GBGLMCKIEKFSFG@GDAJGVANGPANFV@LNbFRLLP\\DJLLHLFJD\\@B@F@BADABA@EAECCAA@CBADAB@B@BCBGACBABAFADCDA@CB@B@F@BADCBKBG@ABA@A@E@A@A@A@ABA@A@E@ABA@CBA@ABCBABAB@BAFBDDFABE@A@AACAAACCEEEAC@A@ABCBCBADCBA@AACAAAAAA@CAA@A@EFA@C@A@@AA@OHOHOHIBCACG@KAC@AA@C@C@A@G@CAAAAAAA@AC@C@G@@@AAA@AA@C@CBALCTGJGBCgSGBIFEBA@AA@AAA@C@CBCHEXENEFI@CAE@AAAA@@@A@EDABAACAECAACCGCAAC@C@ABQD@@GJIPUZKLKJKDUCKAQEO@QDIFCPMRA@I@AB@@EACCAAA@CBCDAFBL@DBD@@ABA@AB@B@BBB@@DBDDFHBHDLHBFBPBLH@@ADAD@@BD@D@DAD@D@D@D@B@D@DBB@DBDBF"],"encodeOffsets":[[118823,26159]]}}],"UTF8Encoding":true});}));