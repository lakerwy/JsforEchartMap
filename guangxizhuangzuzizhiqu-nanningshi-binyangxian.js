(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宾阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450126","properties":{"name":"宾阳县","cp":[108.816735,23.216884],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FABIDCLAD@JCF@B@BA@AICCCBAH@@ACAAAKAHAAA@AKCKBED@@@AC@@BABCCVMFCH@B@@IBGFCBGJ@@@EIAC@EIDAGBAH@FCHAJEJAB_D@FCBA@EC@ECA@@CDBBAACCB@ADABA@ECA@EGCCAAABA@AAAA@ACBCAA@ADCCGA@AE@A@AAACQ@CAGAE@G@A@CBA@BBBHBBC@C@CBEDEBCEAC@@@CAAGCECAC@CACA@AE@CAACEIEAK@GBCCA@ACEAC@C@GAAAAC@ECC@AACCABAB@DADABEBA@CACA@ACCA@EAGAA@C@C@EEDAA@AC@GDEBGBABCDE@G@GAEEAA@EA@E@EAECCACEA@ABAAAACBCB@A@ABAB@@AEEA@C@ACAA@C@AAABAFC@CDEFCDADADABA@AACCACCAECCCAIACAAABI@@AB@EAAAECC@A@GCAABA@BCA@GKCEE@K@GCCAC@CBOFA@ICIAAA@[DCDIGCCID@BCACDE@GBGDIDA@EGIAAC@C@A@EDA@AC@@C@IBI@EBA@CCGBKBA@C@KB@EDMACEAEEKBA@IBGDKNKJEDCD@DBHAFGBI@AAAICA@C@A@CGBA@BH@FABC@IAA@AM@GECCG@AACAAEBAA@CDAHGBAACGAC@ECC@CJCAAAOBAA@EACCA@ACAGA@@CDE@CFE@@GCA@FCBA@AEC@CBC@CFA@G@ABAFAFCH@D@FCBAD@BJBFF@BAFBD@B@BADCDG@E@BD@DA@CCCAADAF@FFD@FCLGDBFADAFAFEAE@E@EECG@ABCCAA@A@A@AAEEAGE@EACBCBGAEBC@A@C@ABDH@BCF@FGFC@C@KA@BA@AB@DADCBA@@B@B@BCAAAAAAC@CAACAC@A@EACBA@@ACA@AB@CECAE@IBEBC@CD@@@BB@BBCF@BABC@AB@@@BAB@BCB@B@@BBBHBB@BAB@FDF@D@@A@E@CBABBB@DABBBDBNDAHBJ@HIDDEEGI@GZ@DGBEBGFOBU\\I@OLFDCFCHADBDFJ@JAHEDG@CBCBDDABIFCAE@CBADAD@BDBADCDC@CAACAAAGCCCAA@CBA@AFCAAA@@@@@CC@GJCDCBA@MACBKAABKFIFGFECAAMBOBIBABEJA@A@A@AACAAAGDEDEFEFAFABEACAEAGAE@CDCDADC@IBEBCBEDC@EBG@G@GBCBAB@DDDFDFFDBBDDFDJDFFFBDBJ@DBBBBBBFFDBBD@FBDBBBADBBBDFBBDBH@B@BD@DDDDDDBHDCJLCFBFGJATCHHAFFJDAB@DAFLLDFADAHKFIHEFBFAD@J@DBD@HAHAD@BBBFDHFHFFDDFDBDADCDADAJAJBB@BD@FBFDHHJDFBBB@DBBAFBDBDHFHFFBJDBB@BBDAFABCD@B@F@FAFIFCJ@BRH@NCHFN@DDBDBBBHAH@FAD@@BCH@PAD@D@@B@DFHBBBF@BDDLBBB@BEDAJBF@BBBBB@DAB@@A@ABABAD@D@DDB@DCDBDHB@D@D@D@FABB@B@@CD@@DB@BABC@@BBBBBFAD@FBDBB@BBDAB@@@@D@B@BBB@@B@FBFB@B@DB@BBDBB@BC@@B@BB@BB@BD@BB@DDBB@BEB@BA@@BBBB@BBBF@D@@AD@BBBBBBDB@BAB@@@BF@@B@@@D@@@BF@DB@D@D@DC@@D@@BDF@@B@BABADA@ABBBB@B@D@BEF@BABABA@@BBB@BDD@B@@A@A@A@AAA@A@@@ABADAB@BBB@BF@BB@@AB@@C@A@A@@B@@@BB@D@@@BBBDBBBDBB@B@BAD@BLB@BBF@DDB@BBFBEJBDC@CD@DBJ@JADE@G@ANABADABBHBDCHEBEDGFABAAACCAEDCFAACEA@A@AD@DCCAC@CA@AD@BCECAB@@ECBCDAAABABBBB@BDAB@DCF@@GFK@A@GDAB@@C@CDEFEFEDCF@DBDAB@@EBABABBBBBB@BAF@B@@D@D@D@DADCB@BEDCBAB@@@B@@BABAHCD@B@BBBB@B@B@B@BB@B@@AB@BABB@@BB@DAHAF@BBBA@ABCBABADGFEAABMJ@NB\\BDBB@BBFL@BBADBBAFAAAD@BADE@@DDT@DAF@BDDBDA@ACC@IDADA@C@C@CEAACFC@IFOP@D@@BBBD@FD@BBCBED@DH@DHFBBHD@FABAAA@AF@HBFD@@@@CJ@HADBFAFBB@CECAC@CACA@E@CBCACCCAB@BAAAAA@A@AD@A@A@A@AB@B@@EAE@ACADE@CHCFIB@BCFCB@BEBBBCDCBEBB@BDADC@CBAF@DAFBB@BBH@BCBA@ADAH@BJ@HBDHDD@B@BBBDBCDG@AA@ABA@@AB@@AAA@ADCBBDCB@B@DBBDB@BA@ABAFBJAD@@@@@DC@CCCJKB@F@BEFCFADBB@DC@@@DB@@CDAB@BBDCJEJFHDBD@@CBEBCDOJ@DBBD@HB@D@DBHB@D@@B@@@BD@@@BDBFB@FCH@@@DC"],"encodeOffsets":[[111839,23856]]}}],"UTF8Encoding":true});}));