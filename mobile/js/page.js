/**
 * Author:   Amanda
 * Create Date:     2017-3-15
 * Modifty Date:   2017-3-15
 * Description: 常用功能
 */

// 整页缩放
;function scalePage(e, t, x) {
    var i,j,
    screenHeight = document.documentElement.clientHeight,
    screenWidth = document.documentElement.clientWidth,
    n = screenWidth / screenHeight,
    a = 320 / 568;
    i = n > a ? screenHeight / 568 : screenWidth / 320;
    j = i;
    if(typeof(x)!= 'undefined'){
        if(j<1){
            j=1;
        }
    }
    $(e).css({
        '-webkit-transform-origin': t,
        'transform-origin': t,
        '-webkit-transform': 'scale(' + j + ' ,'+ i +' )',
        transform: 'scale(' + j+ ' ,'+ i +')'
    });

    if(i<1){
        var fontSize = 12/i;
        $(e).css({
            'font-size':fontSize+'px'
        });
    }
}

;function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

;function isAndroid(){
    var userAgent = (window.navigator.userAgent||window.navigator.vendor||window.opera),
        isAndroid = userAgent.indexOf('Android') > -1;
    if(isAndroid){
        return true;
    }else{
        return false;
    }
}

;function isIOS(){
     var userAgent = (window.navigator.userAgent||window.navigator.vendor||window.opera),
        isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if(isIOS){
        return true;
    }else{
        return false;
    }
}