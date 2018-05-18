/**
 * Author:  Amanda
 * Create Date:     2018-4-10
 * Modifty Date:     2018-5-18
 * Description:  公共方法
 */

var util = {
	setStore: function(name, content){
		if (!name) return;
		if (typeof content !== 'string'){
			content = JSON.stringify(content);
		}
		window.localStorage.setItem(name, content);
	},
	getStore: function(name){
		if (!name) return;
		return window.localStorage.getItem(name);
	},
	removeStore: function(name){
		if (!name) return;
		window.localStorage.removeItem(name);
	},
	setCookie: function(key, value, domain, expire){
		var expires = new Date();
		if (!domain) {
			domain = document.cookie.match(/(^| )city\.domain=([^;]*)(;|$)/);
			domain && (domain = domain[2]);
		}
		/* 三个月 x 一个月当作 30 天 x 一天 24 小时 x 一小时 60 分 x 一分 60 秒 x 一秒 1000 毫秒 */
		if(!expire){
			expires = expires.setTime(expires.getTime() + 12 * 30 * 24 * 60 * 60 * 1000);
		}
		var domainStr = domain && domain != "null" ? (";domain=" + domain) : "",
		expireMs = expire && expire != "null" ?(new Date().getTime() + expire*24*60*60*1000 ) : expires,
		nDate = new Date(expireMs);
		document.cookie = key+"=" + encodeURIComponent(value) + ";expires=" + nDate.toGMTString() + ";path=/" + domainStr;
	},
	getCookie: function(key) {
		var result = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)'));
		return result != null ? decodeURIComponent(result[2]) : null;
	},
	delCookie: function(key, domain){
		var expires = new Date().toUTCString(),
		domainStr = domain && domain != "null" ? (";domain=" + domain) : "";
		document.cookie = key + "=; path=/; expires=" + expires +domainStr;
	},
	setCookieExpire: function (key, value, timeout, domain) {
		var date = new Date(),
		domainStr = domain && domain != "null" ? (";domain=" + domain) : "";
		key = key + "=" + value;
		if (key.length > 256) {
			key = key.substring(0, 256);
		}
		if (!domain) {
			domain = document.cookie.match(/(^| )city\.domain=([^;]*)(;|$)/);
			domain && (domain = domain[2]);
		}
		timeout = new Date(date.getTime() + timeout * 1000);
		document.cookie = key + "; path=/; expires=" + timeout.toGMTString() + domainStr;
	},
	trimSpace: function(array){
		for(var i = 0 ;i<array.length;i++){
			if(array[i] == "" || typeof(array[i]) == "undefined"){
				array.splice(i,1);
				i = i-1;
			}
		}
		return array;
	},
	// 延迟执行
	delayIpt: function() {
		var timer = 0;
		return function (callback, time) {
			clearTimeout(timer);
			timer = setTimeout(callback, time);
		}
	},
	// 去重
	unique: function (arr) {
		var ret = [];
		var hash = {};

		for (var i = 0; i < arr.length; i++) {
			var item = arr[i];
			var key = typeof(item) + item;
			if (hash[key] !== 1) {
				ret.push(item);
				hash[key] = 1;
			}
		}

		return ret;
	},
	// 获取数据
	getData: function(url, dataParam, callback, ajaxConfig) {
		var _this = this,
			defaultData = {
			"type": "get",
			"datatype": "jsonp",
			"cache": false,
			"async": true
			},
		dataParam = dataParam || {};
		ajaxConfig = ajaxConfig || {};
		ajaxConfig = $.extend(true, defaultData, ajaxConfig);
		_this.debug && (ajaxConfig.datatype = "json");
		ajaxConfig.jsonp = ajaxConfig.datatype == "jsonp" ?  "jsonpCallback" : "";//服务端用于接收callback调用的function名的参数
		$.ajax({
			url: url,
			type: ajaxConfig.type,
			dataType: ajaxConfig.datatype,
			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			data: dataParam,
			cache: ajaxConfig.cache,
			jsonp: ajaxConfig.jsonp,
			success: function(data) {
				data && "function" == typeof callback && callback(data)
			},
			error: function(xhr, type) {
				if (type === "timeout") {
					console.log("连接超时!请稍后再试");
				} else if (type == "error") {
					console.log("系统繁忙,请稍后再试");
				} else {
					console.log("请求404");
				}
			}
		});
	}
};