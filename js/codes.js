//commented out which currency exchange is not working
const countryList = {
//     AED: "AE",
//     AFN: "AF",
//     XCD: "AG",
//     ALL: "AL",
//     AMD: "AM",
//     ANG: "AN",
//     AOA: "AO",
//     AQD: "AQ",
//     ARS: "AR",
    AUD: "AU",
//     AZN: "AZ",
//     BAM: "BA",
//     BBD: "BB",
//     BDT: "BD",
//     XOF: "BE",
    BGN: "BG",
//     BHD: "BH",
//     BIF: "BI",
//     BMD: "BM",
//     BND: "BN",
//     BOB: "BO",
    BRL: "BR",
//     BSD: "BS",
    NOK: "BV",
//     BWP: "BW",
//     BYR: "BY",
//     BZD: "BZ",
    CAD: "CA",
//     CDF: "CD",
//     XAF: "CF",
    CHF: "CH",
//     CLP: "CL",
    CNY: "CN",
//     COP: "CO",
//     CRC: "CR",
//     CUP: "CU",
//     CVE: "CV",
//     CYP: "CY",
    CZK: "CZ",
//     DJF: "DJ",
    DKK: "DK",
//     DOP: "DO",
//     DZD: "DZ",
//     ECS: "EC",
//     EEK: "EE",
//     EGP: "EG",
//     ETB: "ET",
    EUR: "FR",
//     FJD: "FJ",
//     FKP: "FK",
    GBP: "GB",
//     GEL: "GE",
//     GGP: "GG",
//     GHS: "GH",
//     GIP: "GI",
//     GMD: "GM",
//     GNF: "GN",
//     GTQ: "GT",
//     GYD: "GY",
    HKD: "HK",
//     HNL: "HN",
//     HRK: "HR",
//     HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
//     IQD: "IQ",
//     IRR: "IR",
    ISK: "IS",
//     JMD: "JM",
//     JOD: "JO",
    JPY: "JP",
//     KES: "KE",
//     KGS: "KG",
//     KHR: "KH",
//     KMF: "KM",
//     KPW: "KP",
//     KRW: "KR",
//     KWD: "KW",
//     KYD: "KY",
//     KZT: "KZ",
//     LAK: "LA",
//     LBP: "LB",
//     LKR: "LK",
//     LRD: "LR",
//     LSL: "LS",
//     LTL: "LT",
//     LVL: "LV",
//     LYD: "LY",
//     MAD: "MA",
//     MDL: "MD",
//     MGA: "MG",
//     MKD: "MK",
//     MMK: "MM",
//     MNT: "MN",
//     MOP: "MO",
//     MRO: "MR",
//     MTL: "MT",
//     MUR: "MU",
//     MVR: "MV",
//     MWK: "MW",
    MXN: "MX",
    MYR: "MY",
//     MZN: "MZ",
//     NAD: "NA",
//     XPF: "NC",
//     NGN: "NG",
//     NIO: "NI",
//     NPR: "NP",
    NZD: "NZ",
//     OMR: "OM",
//     PAB: "PA",
//     PEN: "PE",
//     PGK: "PG",
    PHP: "PH",
//     PKR: "PK",
    PLN: "PL",
//     PYG: "PY",
//     QAR: "QA",
    RON: "RO",
//     RSD: "RS",
//     RUB: "RU",
//     RWF: "RW",
//     SAR: "SA",
//     SBD: "SB",
//     SCR: "SC",
//     SDG: "SD",
    SEK: "SE",
    SGD: "SG",
//     SKK: "SK",
//     SLL: "SL",
//     SOS: "SO",
//     SRD: "SR",
//     STD: "ST",
//     SVC: "SV",
//     SYP: "SY",
//     SZL: "SZ",
    THB: "TH",
//     TJS: "TJ",
//     TMT: "TM",
//     TND: "TN",
//     TOP: "TO",
    TRY: "TR",
//     TTD: "TT",
//     TWD: "TW",
//     TZS: "TZ",
//     UAH: "UA",
//     UGX: "UG",
//     USD: "US",
//     UYU: "UY",
//     UZS: "UZ",
//     VEF: "VE",
//     VND: "VN",
//     VUV: "VU",
//     YER: "YE",
    ZAR: "ZA",
//     ZMK: "ZM",
//     ZWD: "ZW",
  };

  


//exchage data
// AUD
// : 
// 1.5818
// BGN
// : 
// 1.8067
// BRL
// : 
// 5.7322
// CAD
// : 
// 1.4281
// CHF
// : 
// 0.8812
// CNY
// : 
// 7.2583
// CZK
// : 
// 22.988
// DKK
// : 
// 6.8914
// EUR
// : 
// 0.92379
// GBP
// : 
// 0.77196
// HKD
// : 
// 7.7746
// HUF
// : 
// 367.67
// IDR
// : 
// 16565
// ILS
// : 
// 3.6635
// INR
// : 
// 85.7
// ISK
// : 
// 133.12
// JPY
// : 
// 149.95
// KRW
// : 
// 1466.2
// MXN
// : 
// 20.004
// MYR
// : 
// 4.436
// NOK
// : 
// 10.4471
// NZD
// : 
// 1.7399
// PHP
// : 
// 57.53
// PLN
// : 
// 3.8462
// RON
// : 
// 4.5964
// SEK
// : 
// 9.9746
// SGD
// : 
// 1.3357
// THB
// : 
// 33.845
// TRY
// : 
// 37.975
// ZAR
// : 
// 18.1646