// jAjaxWrapper v1.0.14 by songhlc@yonyou.com
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jAjaxWrapper = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	var queryStringify = function queryStringify(data) {
	  var _data = {};

	  if (typeof data === 'string' && data.indexOf('{') === 0) {
	    _data = JSON.parse(data);
	  } else if (_typeof_1(data) === 'object') {
	    _data = data;
	  }

	  var result = '';
	  Object.keys(_data).forEach(function (key, index) {
	    if (index > 0) {
	      result += '&' + key + '=' + _data[key];
	    } else {
	      result += key + '=' + _data[key];
	    }
	  });
	  return result;
	};

	var _stringify = function _stringify(data) {
	  var response = '';

	  try {
			if (typeof data === 'string') {
				return data
			}
	    response = JSON.stringify(data);
	  } catch (e) {
	    response = data;
	  }

	  return response;
	};

	var jAjaxWrapper = function jAjaxWrapper(jQuery, Axios) {
	  var oldAjax = jQuery.ajax;

	  jQuery.ajax = function (opts) {
	    // 暂时没有好的办法
	    if (opts.async === false) {
	      return oldAjax(opts);
	    }

	    var axOpt = {};

	    if (!opts.type) {
	      opts.type = opts.method || 'get';
	    }

	    axOpt.method = opts.type;
	    axOpt.url = opts.url;

	    if (opts.type.toLowerCase() === 'get') {
	      axOpt.params = opts.data;
	    } else {
	      axOpt.data = opts.data;
	    }

	    axOpt.headers = opts.headers || {};

	    if (opts.contentType) {
	      axOpt.headers['Content-Type'] = opts.contentType;
	    } else {
	      // 要支持ajax附件上传的场景
	      if (opts.contentType === false) {
	        axOpt.headers['Content-Type'] = "multipart/form-data";
	      } else {
	        axOpt.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8";
	      }
	    }

	    if (opts.beforeSend) {
	      var r = {
	        setRequestHeader: function setRequestHeader(key, value) {
	          axOpt.headers[key] = value;
	        }
	      };
	      opts.beforeSend(r);
	    }

	    if (axOpt.headers['Content-Type'].indexOf('x-www-form-urlencoded') >= 0) {
	      axOpt.data = queryStringify(opts.data);
	    }

	    if (opts.success) {
	      Axios(axOpt).then(function (res) {
	        if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
	          opts.success(_stringify(res.data), 'success', res);
	        } else {
	          opts.success(res.data, 'success', res);
	        }
	      })["catch"](function (err) {
	        if (opts.error) {
	          opts.error(err);
	        }
	      });
	    } else {
	      return new Promise(function (resolve, reject) {
	        Axios(axOpt).then(function (res) {
	          var returnData = res.data;

	          if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
	            returnData = _stringify(res.data);
	          }

	          resolve(returnData);
	        })["catch"](function (err) {
	          reject(err);
	        });
	      });
	    }
	  };
	};

	jAjaxWrapper.isAxiosReady = function (callback) {
	  var maxTimes = 50;
	  var count = 0;

	  var _setInterval;

	  var isReady = function isReady() {
	    count++;

	    if (window.axios || count > maxTimes) {
	      clearInterval(_setInterval);
	      callback();
	    }
	  };

	  _setInterval = setInterval(isReady, 100);
	};

	return jAjaxWrapper;

})));
//# sourceMappingURL=jAjaxWrapper.debug.js.map
