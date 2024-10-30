var Currency = {
  rates: {"USD":1.0,"EUR":1.09238,"GBP":1.3049,"CAD":0.725573,"ARS":0.00102473,"AUD":0.673127,"BRL":0.178288,"CLP":0.00107727,"CNY":0.14151,"CYP":0.397899,"CZK":0.0431375,"DKK":0.146413,"EEK":0.0706676,"HKD":0.128655,"HUF":0.00271979,"ISK":0.00730677,"INR":0.0118871,"JMD":0.00632434,"JPY":0.00669676,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0518061,"NZD":0.60914,"NOK":0.0931362,"PLN":0.254356,"SGD":0.764788,"SKK":21.5517,"SIT":175.439,"ZAR":0.0572665,"KRW":0.000741202,"SEK":0.0961832,"CHF":1.16513,"TWD":0.0310988,"UYU":0.0239556,"MYR":0.233203,"BSD":1.0,"CRC":0.00193464,"RON":0.219558,"PHP":0.0174718,"AED":0.272294,"VEB":2.60218e-10,"IDR":6.42364e-05,"TRY":0.0291662,"THB":0.0300612,"TTD":0.147406,"ILS":0.26711,"SYP":7.67015e-05,"XCD":0.370211,"COP":0.00023778,"RUB":0.0104178,"HRK":0.144984,"KZT":0.00206439,"TZS":0.000367279,"XPT":976.776,"SAR":0.266667,"NIO":0.0271997,"LAK":4.56227e-05,"OMR":2.59979,"AMD":0.0025977,"CDF":0.000353616,"KPW":0.00111107,"SPL":6.0,"KES":0.00776211,"ZWD":0.00276319,"KHR":0.000245887,"MVR":0.0649422,"GTQ":0.129379,"BZD":0.495706,"BYR":3.05811e-05,"LYD":0.209011,"DZD":0.00751176,"BIF":0.000345,"GIP":1.3049,"BOB":0.144509,"XOF":0.00166532,"STD":4.45149e-05,"NGN":0.000614941,"PGK":0.254497,"ERN":0.0666667,"MWK":0.00057711,"CUP":0.0417211,"GMD":0.0145788,"CVE":0.00990641,"BTN":0.0118871,"XAF":0.00166532,"UGX":0.000272093,"MAD":0.101836,"MNT":0.000293993,"LSL":0.0572665,"XAG":31.1841,"TOP":0.425033,"SHP":1.3049,"RSD":0.00934993,"HTG":0.00759124,"MGA":0.000217923,"MZN":0.0156489,"FKP":1.3049,"BWP":0.0752957,"HNL":0.0402582,"PYG":0.000128238,"JEP":1.3049,"EGP":0.0205512,"LBP":1.11499e-05,"ANG":0.555849,"WST":0.366241,"TVD":0.673127,"GYD":0.00478938,"GGP":1.3049,"NPR":0.00742598,"KMF":0.00222043,"IRR":2.36171e-05,"XPD":1049.98,"SRD":0.0308013,"TMM":5.71738e-05,"SZL":0.0572665,"MOP":0.124908,"BMD":1.0,"XPF":0.00915414,"ETB":0.00832223,"JOD":1.41044,"MDL":0.0566847,"MRO":0.00252599,"YER":0.00399459,"BAM":0.558525,"AWG":0.558659,"PEN":0.26779,"VEF":2.58375e-07,"SLL":4.43471e-05,"KYD":1.21803,"AOA":0.00108892,"TND":0.325346,"TJS":0.0937566,"SCR":0.0724767,"LKR":0.00341547,"DJF":0.00561428,"GNF":0.000116018,"VUV":0.0084164,"SDG":0.00166252,"IMP":1.3049,"GEL":0.366975,"FJD":0.445306,"DOP":0.0166137,"XDR":1.33833,"MUR":0.0216981,"MMK":0.000476513,"LRD":0.00518789,"BBD":0.5,"ZMK":3.78084e-05,"XAU":2648.51,"VND":4.0324e-05,"UAH":0.0242883,"TMT":0.285869,"IQD":0.000762905,"BGN":0.558525,"KGS":0.011696,"RWF":0.000743179,"BHD":2.65957,"UZS":7.83298e-05,"PKR":0.0036074,"MKD":0.0177575,"AFN":0.0147753,"NAD":0.0572665,"BDT":0.00836901,"AZN":0.588252,"SOS":0.00175102,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.120365,"ALL":0.0110706,"BND":0.764788,"KWD":3.26314,"GHS":0.0627371,"ZMW":0.0378084,"XBT":64175.5,"NTD":0.0337206,"BYN":0.305811,"CNH":0.141023,"MRU":0.0252599,"STN":0.0445149,"VES":0.0258375,"MXV":0.424416,"VED":0.0258375,"SLE":0.0443471},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};