;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M638.8081 555.9101c77.3161-46.1599 129.4592-131.2492 129.4592-228.6469 0-146.3532-117.3975-265.4321-261.7129-265.4321-144.3144 0-261.7149 119.0789-261.7149 265.4321 0 99.1324 53.9494 185.5949 133.5624 231.1721-158.0411 51.5707-275.3853 191.999-291.1396 366.6842-1.7142 19.0474 12.33 35.884 31.3764 37.5962 19.0904 1.7592 35.8707-12.3279 37.5962-31.3754 16.7137-185.3942 169.7956-325.2091 356.0909-325.2091 186.2963 0 339.3772 139.8149 356.0909 325.2091 1.622 17.9866 16.725 31.5116 34.4412 31.5116 1.0465 0 2.0951-0.0451 3.156-0.1372 19.0464-1.7121 33.0885-18.5487 31.3754-37.5962C921.386 747.6613 800.6257 605.4318 638.8081 555.9101zM314.0833 327.2632c0-108.1702 86.3416-196.1902 192.471-196.1902 106.1315 0 192.468 88.02 192.468 196.1902 0 108.1713-86.3365 196.1892-192.468 196.1892C400.425 523.4524 314.0833 435.4345 314.0833 327.2632z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangbianfenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M633.216 631.616c-17.984 0-35.072 4.16-50.176 11.584L495.168 555.392c6.464-14.336 10.112-30.272 10.112-46.976 0-16.768-3.648-32.704-10.112-47.04l87.488-87.424C597.888 381.44 615.04 385.728 633.216 385.728c63.232 0 114.56-51.264 114.56-114.56s-51.328-114.496-114.56-114.496S518.72 207.936 518.72 271.168c0 15.296 2.944 29.888 8.384 43.328L437.696 403.968C423.36 397.504 407.488 393.856 390.72 393.856c-63.232 0-114.56 51.264-114.56 114.56s51.264 114.496 114.56 114.496c16.768 0 32.64-3.584 46.976-9.984l89.6 89.6c-5.504 13.504-8.576 28.16-8.576 43.584 0 63.232 51.2 114.624 114.432 114.624s114.56-51.392 114.56-114.624S696.448 631.616 633.216 631.616z"  ></path>' +
    '' +
    '<path d="M914.176 837.888c0 42.112-34.176 76.288-76.288 76.288L186.24 914.176c-42.112 0-76.352-34.176-76.352-76.288l0-312.96L32 524.928l0 312.96c0 84.928 69.184 154.112 154.24 154.112l651.648 0c84.928 0 154.112-69.184 154.112-154.112l0-312.96-77.824 0L914.176 837.888zM837.888 32 186.24 32C101.184 32 32 101.184 32 186.24l0 312.832 77.824 0L109.824 186.24c0-42.112 34.304-76.416 76.352-76.416l651.648 0c42.112 0 76.288 34.304 76.288 76.416l0 312.832L992 499.072 992 186.24C992 101.184 922.816 32 837.888 32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuichu" viewBox="0 0 1029 1024">' +
    '' +
    '<path d="M631.497 244.406c20.236-18.48 51.415-16.778 69.652 3.782L888.81 478.215c8.537 9.618 12.536 21.667 12.51 33.636 0.054 0.568 0.081 1.082 0.081 1.622 0 0.567-0.027 1.08-0.081 1.621 0.026 11.996-3.973 24.045-12.51 33.637L701.149 778.784c-18.237 20.559-49.416 22.261-69.652 3.781-20.208-18.479-21.802-50.144-3.566-70.703l120.903-148.218L323.256 563.644c-27.314 0-49.415-22.452-49.415-50.172 0-27.693 22.101-50.144 49.415-50.144l425.578 0L627.93 315.111C609.695 294.551 611.289 262.886 631.497 244.406zM1009.984 351.125l0 10.808-1.108 0c-4.998 24.694-26.828 43.308-53.035 43.308-29.881 0-54.116-24.234-54.116-54.143 0-10.78 3.243-20.75 8.646-29.179L910.371 176.133c0-35.473-29.719-64.247-66.382-64.247L180.01 111.886c-36.69 0-66.409 28.774-66.409 64.247l0 674.706c0 35.473 29.719 64.247 66.409 64.247l663.979 0c36.663 0 66.382-28.774 66.382-64.247L910.371 683.413c-5.403-8.431-8.646-18.427-8.646-29.179 0-29.908 24.235-54.145 54.116-54.145 29.908 0 54.144 24.236 54.144 54.145 0 3.7-0.379 7.321-1.108 10.806l1.108 0 0 250.046c0 53.225-44.606 96.398-99.613 96.398l-796.77 0c-55.008 0-99.586-43.174-99.586-96.398l0-803.2c0-53.224 44.579-96.371 99.586-96.371l165.995 0L312.8 15.515l66.408 0L644.79 15.515l66.408 0 66.382 0 132.791 0c55.007 0 99.613 43.146 99.613 96.371l0 239.212 0 0L1009.984 351.125z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.454545 443.298909 977.454545 954.181818c0 25.739636-20.805818 46.545455-46.545455 46.545455L93.090909 1000.727273c-25.739636 0-46.545455-20.805818-46.545455-46.545455L46.545455 443.252364C19.037091 417.931636-7.493818 381.393455 2.56 338.432L46.545455 150.016 46.545455 23.272727l930.909091 0 0 126.743273 43.985455 188.416C1031.493818 381.44 1004.962909 417.978182 977.454545 443.298909zM933.096727 396.101818c3.258182-9.728 4.701091-20.340364 2.141091-31.138909L889.018182 167.098182c-0.372364-1.582545-1.349818-2.699636-1.815273-4.189091l-82.385455 0c-3.118545 9.634909-4.514909 20.061091-2.001455 30.72l46.219636 197.818182c0.372364 1.582545 1.349818 2.699636 1.815273 4.189091L930.909091 395.636364C931.653818 395.636364 932.305455 396.055273 933.096727 396.101818zM633.111273 162.909091c-2.187636 7.726545-3.351273 15.872-2.001455 24.389818l30.999273 201.681455c0.372364 2.420364 1.629091 4.328727 2.280727 6.609455l83.595636 0c2.187636-7.726545 3.351273-15.872 2.001455-24.389818l-30.999273-201.681455C718.615273 167.098182 717.358545 165.189818 716.706909 162.909091L633.111273 162.909091zM469.829818 162.909091c-1.117091 4.514909-2.466909 9.029818-2.466909 13.963636l0 204.8c0 4.933818 1.303273 9.448727 2.466909 13.963636l84.340364 0c1.163636-4.514909 2.466909-9.029818 2.466909-13.963636L556.637091 176.872727c0-4.933818-1.303273-9.448727-2.466909-13.963636L469.829818 162.909091zM307.293091 162.909091C306.641455 165.189818 305.431273 167.098182 305.012364 169.518545L274.013091 371.246545C272.709818 379.764364 273.873455 387.909818 276.061091 395.636364l83.595636 0c0.651636-2.280727 1.908364-4.189091 2.280727-6.609455l30.999273-201.681455C394.24 178.781091 393.122909 170.635636 390.935273 162.909091L307.293091 162.909091zM139.636364 907.636364l744.727273 0 0-418.909091-78.801455 0-5.399273 0.372364L772.421818 488.727273 251.578182 488.727273l-27.741091 0.372364L218.484364 488.727273 139.636364 488.727273 139.636364 907.636364zM90.903273 396.055273C91.648 396.055273 92.299636 395.636364 93.090909 395.636364l80.058182 0c0.465455-1.489455 1.442909-2.606545 1.815273-4.189091l46.219636-197.818182C223.650909 182.970182 222.254545 172.544 219.182545 162.909091l-82.385455 0C136.285091 164.398545 135.307636 165.515636 134.981818 167.098182L88.762182 364.916364C86.248727 375.761455 87.645091 386.327273 90.903273 396.055273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M738.389333 109.155556 292.280889 516.693333l446.108444 407.537778c15.616 15.516444 15.616 40.704 0 56.234667-15.544889 15.559111-40.832 15.559111-56.376889 0L207.203556 546.844444c-8.291556-8.291556-11.847111-19.313778-11.306667-30.151111-0.540444-10.837333 3.015111-21.831111 11.306667-30.151111L682.012444 52.920889c15.544889-15.559111 40.832-15.559111 56.376889 0C754.005333 68.437333 754.005333 93.639111 738.389333 109.155556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinghua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M270.336 436.69504l61.99296 0 0-175.49312 59.00288 0 0 175.49312 55.5008 0 0 53.00224-55.5008 0 0 52.98176 20.50048-19.47648c21.34016 20.31616 41.00096 40.16128 59.00288 59.47392l-39.99744 38.99392c-9.66656-12.16512-22.8352-27.40224-39.50592-45.73184l0 174.73536-59.00288 0L332.32896 597.1968c-15.33952 36.00384-31.8464 66.99008-49.50016 92.99968-5.67296-20.992-12.67712-45.83424-20.992-74.52672 23.83872-31.47776 46.32576-73.48224 67.50208-125.99296L270.336 489.6768 270.336 436.69504zM303.84128 298.68032c9.99424 37.33504 18.49344 70.67648 25.4976 100.00384l-39.50592 12.4928c-7.00416-32.6656-15.33952-66.1504-25.00608-100.49536L303.84128 298.68032zM422.83008 298.68032l40.50944 12.4928c-9.66656 32.99328-20.50048 66.49856-32.50176 100.49536l-37.00736-13.49632L422.83008 298.68032zM456.84736 428.19584l119.00928 0 0-21.99552-99.00032 0 0-43.008 99.00032 0L575.85664 341.1968l-108.99456 0 0-43.008 108.99456 0 0-39.99744 65.00352 0 0 39.99744 115.5072 0 0 43.008-115.5072 0 0 21.99552 104.50944 0 0 43.008-104.50944 0 0 21.99552 123.4944 0 0 43.008L456.84736 471.20384 456.84736 428.19584zM540.34432 749.6704l-61.00992 0 0-259.4816 262.49216 0 0 188.49792c0 22.8352-4.75136 39.99744-14.2336 51.52768-9.5232 11.48928-23.04 17.36704-40.63232 17.6128-17.57184 0.24576-44.9536 0.38912-82.1248 0.38912-2.99008-15.33952-7.33184-32.52224-13.0048-51.52768 34.83648 2.00704 57.15968 2.99008 66.99008 2.99008 14.66368 0 21.99552-8.31488 21.99552-25.00608l0-6.47168-140.4928 0L540.32384 749.6704zM680.83712 537.1904l-140.4928 0 0 24.00256 140.4928 0L680.83712 537.1904zM540.34432 626.688l140.4928 0 0-24.00256-140.4928 0L540.34432 626.688z"  ></path>' +
    '' +
    '<path d="M512 0C229.23264 0 0 229.23264 0 512c0 282.76736 229.23264 512 512 512 282.76736 0 512-229.23264 512-512C1024 229.23264 794.76736 0 512 0L512 0zM512 956.17024c-245.30944 0-444.17024-198.8608-444.17024-444.17024S266.69056 67.85024 512 67.85024 956.17024 266.69056 956.17024 512 757.30944 956.17024 512 956.17024L512 956.17024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhaopin" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512.007657 1024c-282.32369 0-512.007661-229.683971-512.007661-512.007661 0-282.308368 229.683971-511.992339 512.007661-511.992339s512.007661 229.683971 512.007661 511.992339C1024.015318 794.316029 794.331347 1024 512.007657 1024zM512.007657 67.566547c-245.053098 0-444.42477 199.371673-444.42477 444.42477 0 245.06842 199.371673 444.441114 444.42477 444.441114s444.42477-199.371673 444.42477-444.441114C956.432427 266.939241 757.060755 67.566547 512.007657 67.566547zM377.993079 817.764009 377.993079 699.308553c-43.819275 9.136081-87.8122 18.445812-131.962433 27.897529l-10.714261 2.303428-14.659201-67.203923c0 0 29.776023-4.749863 39.259406-6.216703L259.91659 318.805703l-32.97835 0 0-60.766582 251.20749 0 0 22.564403 123.868258 0 0-53.255669 60.766582 0 0 53.255669 124.45152 0 0 248.903041-59.614357 0 0-13.318003L537.191125 516.188562l0 13.318003-59.629679 0L477.561446 318.805703l-37.617894 0 0 302.537677c8.994096-1.877473 40.600604-8.726469 40.600604-8.726469l0.472943 13.144352c0.378968 10.351637 1.720165 24.015921 3.960262 40.600604l1.388186 10.193308-46.423017 9.515048L439.94253 817.764009 377.993079 817.764009zM321.850719 644.775017c18.225174-3.408665 36.939634-7.021626 56.143382-10.839903L377.994101 568.860969l-56.143382 0L321.850719 644.775017zM377.993079 509.246612l0-65.405104-56.143382 0 0 65.405104L377.993079 509.246612zM727.616711 458.310714l0-31.842469-64.837163 0 0 31.842469L727.616711 458.310714zM602.012966 458.310714l0-31.842469-64.821841 0 0 31.842469L602.012966 458.310714zM377.993079 384.210807l0-65.405104-56.143382 0 0 65.405104L377.993079 384.210807zM727.616711 369.741601 727.616711 338.497716l-64.837163 0 0 31.242863L727.616711 369.740579zM602.012966 369.741601 602.012966 338.497716l-64.821841 0 0 31.242863L602.012966 369.740579zM560.812756 809.65349l-1.499527-9.2464c-2.177787-13.553964-6.106383-28.497136-11.676491-44.418881l-5.428123-15.542778 16.441677 0.946908c39.747672 2.271762 74.194904 3.423987 102.40807 3.423987 26.541009 0 31.606508-12.90737 33.058026-25.547113 1.246201-9.64069 2.587399-22.123126 4.070582-37.539241L496.859169 681.729973l18.524466-83.346307-74.28888 0 0-57.878869 381.449758 0 0 57.878869L580.1115 598.383666l-5.412801 23.73195 192.902666 0-0.631272 11.597838c-1.956126 35.740421-4.118591 66.257015-6.406697 90.715235-4.292242 55.68576-34.304226 85.22378-86.770295 85.22378L560.812756 809.652469z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M37.76 949.824c-20.16 0-36.48-16.32-36.48-36.416L1.28 402.624c0-20.096 16.32-36.416 36.48-36.416 20.096 0 36.48 16.32 36.48 36.416l0 510.784C74.24 933.504 57.92 949.824 37.76 949.824zM913.664 366.208l-216 0c15.808-36.544 33.792-130.816 23.296-216.576-8.448-68.48-48.32-120.896-106.88-140.736-43.392-14.72-89.152-7.552-113.856 17.664C470.848 56.448 457.152 113.024 442.496 172.8 432.96 211.968 423.04 252.416 410.752 273.28 375.296 333.568 301.056 361.152 286.08 366.208L183.68 366.208c-20.096 0-36.48 16.32-36.48 36.416l0 510.784c0 20.096 16.32 36.416 36.48 36.416l98.752 0c30.464 16.448 144.064 72.96 275.584 72.96l246.144 0c40.576 0 110.464-15.68 136.512-59.072 26.368-43.712 82.048-442.944 82.048-487.232C1022.656 415.488 963.008 366.208 913.664 366.208zM878.08 926.208c-5.504 9.152-41.536 23.616-73.92 23.616L558.016 949.824c-130.368 0-245.312-73.024-246.464-73.024l0 0c-5.44 0-11.52 0-18.368 0L220.16 876.8 220.16 439.04l72.96 0c3.008 0 5.632-0.96 8.448-1.6 0.576-0.192 1.152 0 1.728-0.192 0.192-0.064 1.024-0.32 1.92-0.576 0.96-0.32 1.92-0.576 2.88-1.024C330.304 428.352 424.96 393.152 473.664 310.336c17.664-30.08 28.352-73.856 39.68-120.192 10.56-43.136 23.68-96.832 38.912-112.384C555.776 74.752 572.8 70.912 594.176 79.296c17.472 6.976 47.808 26.432 54.4 79.488 14.336 116.864-35.904 228.096-36.352 229.184C606.912 399.296 607.936 412.096 614.656 422.656 621.376 433.088 632.96 439.04 645.312 439.04l268.288 0c9.792 0 36.032 17.152 36.032 37.44C949.632 525.056 893.376 891.584 878.08 926.208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-top" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M236.8 326.4 505.6 326.4 774.4 326.4 774.4 236.8 236.8 236.8Z"  ></path>' +
    '' +
    '<path d="M384 576 384 787.2 627.2 787.2 627.2 576 755.2 576 505.6 326.4 256 576Z"  ></path>' +
    '' +
    '<path d="M934.4 0 89.6 0C38.4 0 0 38.4 0 89.6l0 844.8C0 985.6 38.4 1024 89.6 1024l844.8 0c51.2 0 89.6-38.4 89.6-89.6L1024 89.6C1024 38.4 985.6 0 934.4 0zM960 908.8c0 25.6-25.6 51.2-51.2 51.2L115.2 960C89.6 960 64 934.4 64 908.8L64 115.2C64 89.6 89.6 64 115.2 64l793.6 0C934.4 64 960 89.6 960 115.2L960 908.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhiding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M952 4.8 72 4.8c-40 0-72 32-72 72 0 40 32 72 72 72L952 148.8c40 0 72-32 72-72C1024 36.8 991.2 4.8 952 4.8L952 4.8zM952 4.8"  ></path>' +
    '' +
    '<path d="M564.8 223.2c-1.6-1.6-3.2-3.2-5.6-4.8-0.8-0.8-1.6-1.6-2.4-1.6-0.8-0.8-2.4-1.6-3.2-2.4-0.8-0.8-2.4-1.6-3.2-1.6-0.8-0.8-1.6-0.8-3.2-1.6-0.8-0.8-2.4-0.8-3.2-1.6C544 208 542.4 208 541.6 207.2c-0.8-0.8-2.4-0.8-3.2-0.8-0.8-0.8-2.4-0.8-3.2-1.6-0.8 0-2.4-0.8-3.2-0.8-0.8 0-2.4-0.8-3.2-0.8-1.6 0-2.4 0-4-0.8-0.8 0-2.4 0-3.2-0.8-2.4 0-4.8 0-7.2 0l0 0 0 0c0 0-0.8 0-0.8 0-18.4 0-37.6 6.4-52 20.8L97.6 586.4c-28 28-28 73.6 0 101.6 14.4 14.4 32.8 20.8 51.2 20.8 18.4 0 36.8-7.2 51.2-20.8l243.2-243.2 0 502.4c0 40 32 72 72 72 40 0 72-32 72-72L587.2 447.2 827.2 688c14.4 14.4 32.8 20.8 51.2 20.8s36.8-7.2 51.2-20.8c28-28 28-73.6 0-101.6L564.8 223.2 564.8 223.2zM564.8 223.2"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msg" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M256.282249 365.794928c-35.563396 0-63.788313 29.353914-63.788313 66.046307 0 36.127894 28.789416 66.046307 63.788313 66.046307 35.563396 0 63.788313-29.353914 63.788313-66.046307C320.070562 395.713341 291.281147 365.794928 256.282249 365.794928L256.282249 365.794928 256.282249 365.794928 256.282249 365.794928zM512 365.794928c-35.563396 0-63.788313 29.353914-63.788313 66.046307 0 36.127894 28.789416 66.046307 63.788313 66.046307 35.563396 0 63.788313-29.353914 63.788313-66.046307C575.788313 395.713341 547.563396 365.794928 512 365.794928L512 365.794928 512 365.794928 512 365.794928zM768.282249 365.794928c-35.563396 0-63.788313 29.353914-63.788313 66.046307 0 36.127894 28.789416 66.046307 63.788313 66.046307 35.563396 0 63.788313-29.353914 63.788313-66.046307C832.070562 395.713341 803.281147 365.794928 768.282249 365.794928L768.282249 365.794928 768.282249 365.794928 768.282249 365.794928zM895.858875 32.176406 128.141125 32.176406C57.578831 32.176406 0 91.448732 0 164.833517l0 499.016538c0 73.384785 58.707828 141.124587 130.963616 141.124587l195.316428 0c33.869901 36.127894 174.994487 182.332966 174.994487 182.332966 6.209482 6.77398 16.370452 6.77398 22.579934 0 0 0 103.303197-116.851158 170.478501-182.332966l199.832415 0c72.255788 0 130.963616-67.739802 130.963616-141.124587L1025.128997 164.833517C1024 91.448732 966.985667 32.176406 895.858875 32.176406L895.858875 32.176406 895.858875 32.176406 895.858875 32.176406zM960.211687 662.15656c0 36.127894-30.482911 74.513782-66.610805 74.513782l-196.445424 0c-23.708931 0-45.159868 24.273429-45.159868 24.273429L513.693495 903.197354l-137.737596-141.689085c0 0-25.966924-24.273429-48.546858-24.273429L130.963616 737.23484c-36.127894 0-66.610805-38.385888-66.610805-74.513782L64.352811 168.220507c0-36.127894 28.789416-66.046307 63.788313-66.046307l768.282249 0c35.563396 0 63.788313 29.353914 63.788313 66.046307L960.211687 662.15656 960.211687 662.15656 960.211687 662.15656 960.211687 662.15656zM960.211687 662.15656"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-reply" viewBox="0 0 1083 1024">' +
    '' +
    '<path d="M927.949418 811.992798c0 0-100.137173 0-228.344911 0-50.30716 0-103.705502 154.657515-158.3005 154.657515-52.932014 0-107.061765-154.657515-155.965614-154.657515-129.324328 0-230.679797 0-230.679797 0C69.244837 811.992798 0 742.747961 0 657.334201L0 154.694302C0 69.281624 69.244837 0.036787 154.657515 0.036787L927.949418 0.036787c85.41376 0 154.657515 69.244837 154.657515 154.657515l0 502.639899C1082.606933 742.747961 1013.363178 811.992798 927.949418 811.992798zM1004.742061 154.63263c0-42.685781-34.602402-77.287102-77.287102-77.287102L154.575285 77.345528c-42.685781 0-77.287102 34.602402-77.287102 77.287102l0 502.372653c0 42.685781 34.602402 77.287102 77.287102 77.287102 0 0 65.803099 0 231.8256 0 75.044183 0 130.927804 150.863055 155.447351 150.863055 26.03863 0 75.042019-150.863055 154.415154-150.863055 164.109583 0 231.190485 0 231.190485 0 42.685781 0 77.287102-34.602402 77.287102-77.287102L1004.740979 154.63263zM811.522142 347.852548 270.50702 347.852548c-21.342891 0-38.644633-17.30066-38.644633-38.644633 0-21.342891 17.30066-38.644633 38.644633-38.644633l541.015122 0c21.342891 0 38.644633 17.30066 38.644633 38.644633C850.165693 330.551888 832.865033 347.852548 811.522142 347.852548zM347.795204 502.428916 734.233959 502.428916c21.342891 0 38.644633 17.30066 38.644633 38.644633 0 21.343973-17.30066 38.644633-38.644633 38.644633L347.795204 579.718181c-21.342891 0-38.644633-17.30066-38.644633-38.644633C309.150571 519.729576 326.452313 502.428916 347.795204 502.428916z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-05" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M830.671876 197.394742l-1.723248-2.182712c-81.178881-81.408101-193.193047-131.269719-316.972165-131.269719-123.733069 0-235.747235 49.860595-316.948629 131.269719-81.201393 81.155345-131.085524 193.10095-131.085524 316.78797s49.884131 235.402381 131.085524 316.78797c81.201393 80.902588 193.216583 131.269719 316.948629 131.269719l333.101517 0 0.988514 0c19.09387 0 34.741245-15.624862 34.741245-34.213219L880.80774 766.473739c23.965831-35.224246 43.541679-74.079182 57.21305-115.644857 14.176884-44.207851 22.034852-90.667999 22.034852-138.828882C960.057689 389.277958 910.655536 278.06811 830.671876 197.394742L830.671876 197.394742zM872.490308 629.344568c-12.476149 38.8314-30.835286 74.308403-54.272068 106.063641-4.435009 5.881964-6.387477 13.464663-6.387477 20.311605l0 135.428436L511.976464 891.148249c-104.638175 0-199.580524-42.554188-268.512477-111.233384l0.230244 0c-68.725244-68.448952-111.279433-163.27669-111.279433-267.914866 0-104.845906 42.554188-199.443401 111.049189-268.167622l0.230244 0c68.701708-68.426439 163.644057-110.957091 268.283256-110.957091 104.684224 0 199.60406 42.530652 268.053012 110.957091l1.470491 1.953492c67.73673 67.966974 109.578698 161.828712 109.578698 266.215154C891.079688 553.060161 884.461967 592.673367 872.490308 629.344568L872.490308 629.344568zM444.699198 780.650623l111.968118 0L556.667316 668.636456 444.699198 668.636456 444.699198 780.650623 444.699198 780.650623zM631.94172 317.818439c-28.951379-20.058848-66.955948-30.100552-114.036219-30.100552-60.498886 0-105.373932 14.407128-134.624117 43.174312-29.272697 28.79072-46.069245 66.795289-50.389644 113.990171l134.210701 22.080901c2.780323-25.803689 0.735757-50.090838 10.776438-60.452837 10.04068-10.385535 22.747073-15.555278 38.07313-15.555278 14.245446 0 24.907273 3.354398 31.915897 10.086729 7.031137 6.732331 10.523681 16.152888 10.523681 28.285207s-8.731872 25.481348-26.239618 40.026622c-32.834826 27.802206-53.950749 47.218418-63.348794 58.247612-9.374508 11.029194-16.47523 23.206538-21.208021 36.556591-4.756327 13.350053-7.145747 30.720675-7.145747 52.112891l4.250814 29.939893 111.968118 0c0-17.187451 9.765411-48.504714 15.509229-59.21259 5.721305-10.707876 19.484773-24.88476 41.312918-42.530652 31.318286-25.137517 52.043307-46.414099 62.199621-63.854307 10.156314-17.416671 15.211447-35.499515 15.211447-54.272068C690.924065 381.143697 671.255097 344.954473 631.94172 317.818439L631.94172 317.818439z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-publish" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.3104 419.4816 256 665.6l153.6 0 0 307.2 204.8 0 0-307.2 153.6 0L510.3104 419.4816zM921.6 51.2 102.4 51.2C46.08 51.2 0 97.28 0 153.6l0 614.4c0 56.32 46.08 102.4 102.4 102.4l204.8 0 0-102.4L102.4 768 102.4 307.2l819.2 0 0 460.8-204.8 0 0 102.4 204.8 0c56.32 0 102.4-46.08 102.4-102.4L1024 153.6C1024 97.28 977.92 51.2 921.6 51.2zM128 217.6c-21.1968 0-38.4-17.2032-38.4-38.4 0-21.1968 17.2032-38.4 38.4-38.4 21.1968 0 38.4 17.2032 38.4 38.4C166.4 200.3968 149.1968 217.6 128 217.6zM230.4 217.6c-21.1968 0-38.4-17.2032-38.4-38.4 0-21.1968 17.2032-38.4 38.4-38.4 21.1968 0 38.4 17.2032 38.4 38.4C268.8 200.3968 251.5968 217.6 230.4 217.6zM921.6 204.8 307.2 204.8 307.2 153.6l615.3728 0L921.6 204.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-top1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M588.231374 851.58652h-1.14889c-7.934337 0-14.367124 6.430789-14.367124 14.367124v63.219941c0 7.93134 6.431788 14.367124 14.367124 14.367124h1.14889c7.935336 0 14.369122-6.434785 14.369122-14.367124V865.953644c0-7.936335-6.433786-14.367124-14.369122-14.367124z m182.18704-401.155555S789.959541 149.276825 508.346529 0.999035c0 0-262.072885 117.242765-262.072885 449.43193 0 0-97.702637 45.977594-97.702637 165.519138 0 119.542543 100.001417 175.865146 127.587773 183.911375 27.586357 8.046229 41.379035-12.642789 42.528925-25.288576 1.149889-12.642789 4.598559-49.426263 13.793678-49.426263 9.196118 0 54.023823 70.117279 72.41506 75.863729 18.391237 5.748448 198.852944 3.446671 209.197952-1.14889 10.34401-4.59756 65.518721-77.011621 71.26617-75.86373 5.74645 1.14889 17.241348 52.874932 18.389239 57.471493 1.14889 4.59756 12.643788 29.886135 41.381034 18.391238 28.735247-11.493899 127.586774-67.816501 127.586774-183.911375 0-116.092875-102.299197-165.518139-102.299198-165.518139z m-260.922995 11.494898c-66.655623 0-120.691434-54.034812-120.691434-120.691434s54.035811-120.692433 120.691434-120.692433S630.185854 274.577807 630.185854 341.234429c0 66.655623-54.034812 120.691434-120.690435 120.691434z m-0.575444 389.660657h-1.148891c-7.936335 0-14.368123 6.430789-14.368123 14.367124v143.680231c0 7.933338 6.431788 14.367124 14.368123 14.367124h1.148891c7.935336 0 14.368123-6.432787 14.368123-14.367124V865.953644c0.000999-7.936335-6.432787-14.367124-14.368123-14.367124z m0.575444-582.767151c-41.263147 0-74.71384 33.450693-74.71384 74.71384s33.449694 74.71384 74.71384 74.71384 74.712841-33.450693 74.712841-74.71384-33.448695-74.71384-74.712841-74.71384z m-77.587065 582.767151h-1.149889c-7.935336 0-14.368123 6.430789-14.368123 14.367124v63.219941c0 7.93134 6.431788 14.367124 14.368123 14.367124h1.149889c7.935336 0 14.368123-6.434785 14.368123-14.367124V865.953644c0-7.936335-6.432787-14.367124-14.368123-14.367124z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)