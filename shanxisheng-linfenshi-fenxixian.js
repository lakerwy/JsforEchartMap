(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汾西县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"141034","properties":{"name":"汾西县","cp":[111.563021,36.653368],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@NGJIJKHGPILGPELCNANBNFLFDBFP@HDFBB@BBD@B@B@F@BDBB@D@B@BEBEBEDCBCDAB@@AAG@GBCBA@@B@B@BBBBBF@DBF@BBBBBF@B@B@DCDADEBA@AF@BBB@AF@@BBD@B@B@B@BC@@DADCBC@@FECGGAE@GKBKDOJQRUNOHGLMRIZQVMPGNEHANMNIPILKRQTKJADBEI@@@@@@GC@@@@ECOCaILQLOFKBKBQASIKIKMKOKIICOHGTEFANONYJQLMNAF@BC@K@MAOQCQAOCSISGSKOKWGSRGLKJGPORUVM@SEaEOIQCgEWCOBQDWJOFOJKHKJMNMLMPCHIRGN@DBH@J@NANGVGPMLSRSLUJSFUHODQAOAOBSDMFIFCL@N@JEJGLCLFLHNHPAHOFKJGRCNFDHBFDBFELEFELKFc@CBLNRTJBH@PAJ@LBFBD@BA@A@C@E@ADC@AAACC@CAEACBAJ@PABBB@BBB@B@DAFAF@J@DBDBFDB@DEBAD@BAB@BAB@@B@DB@FB@B@HCL@FDDHBB@BCHEFALBHBNBDBBB@D@BCBEBA@@BDDDFBBB@B@JCB@BBBFABADADBFBBDBFBLDHFFBJJHFFFPFJBFDHD"],"encodeOffsets":[[114089,37688]]}}],"UTF8Encoding":true});}));