// import Qs from 'qs'
import JsonBig from 'json-bigint'
var originJSONparse = JSON.parse
var JsonBigString = JsonBig({storeAsString: true})
JSON.parse = function (str) {
  if (str === undefined) {
    throw new Error ('params should not be undefined!')
  }
  if(typeof str === 'string'){
    // console.log(JsonBigString.parse(str))
    // console.log(originJSONparse(JSON.stringify(JsonBig.parse(str))))
    return JsonBigString.parse(str)
  }else{
    return str
  }
}
var formatValue = function (key, value) {
  // 被压缩之后
  // if ((key==='dataTables' || key ==='parameters') && typeof value === 'string' && value.indexOf("{") !== 0) {
  if (key==='dataTables' || key ==='parameters') {
    value=encodeURIComponent(value)
  }
  return value
}
var queryStringify = function (data) {
  var _data = {}
  if (typeof data === 'string' && data.indexOf('{') === 0) {
    _data = JSON.parse(data)
  } else if (typeof data === 'object'){
    _data = data
  }
  var result = ''
  Object.keys(_data).forEach(function (key, index) {
    var value = formatValue(key, _data[key])
    if (index > 0) {
      result += '&' + key + '=' + value
    } else {
      result += key + '=' + value
    }
  })
  return result
}
var _stringify = function (data) {
  var response = ''
  try {
    if (typeof data === 'string') {
      return data
    }
    response = JSON.stringify(data)
  } catch (e) {
    response = data
  }
  return response
}
var jAjaxWrapper = function (jQuery, Axios) {
  var oldAjax = jQuery.ajax
  jQuery.ajax = function (opts) {
    if (opts.data && typeof opts.data === 'object') {
      Object.keys(opts.data).forEach(key => {
        var d = opts.data[key]
        if (d && (opts.data.__proto__ && !opts.data.__proto__[key])) {
          if (typeof d === 'function') {
            opts.data[key] = d()
          }
        }
      })
    }
    // 暂时没有好的办法
    if (opts.async === false) {
      return oldAjax(opts)
    }
    if (opts.url && opts.url.indexOf('defdoc/selectdefdocbytype') >= 0) {
      return oldAjax(opts)
    }
    var axOpt = {}
    if (!opts.type) {
      opts.type = opts.method || 'get'
    }
    axOpt.method = opts.type
    axOpt.url = opts.url
    if (opts.type.toLowerCase() === 'get') {
      axOpt.params = opts.data
    } else {
      axOpt.data = opts.data  
    }
    
    axOpt.headers = opts.headers || {}
    if (!axOpt.headers['Content-Type']) {
      if (opts.contentType) {
        axOpt.headers['Content-Type'] = opts.contentType
      } else {
        // 要支持ajax附件上传的场景
        if (opts.contentType === false) {
          axOpt.headers['Content-Type'] = "multipart/form-data"
        } else {
          axOpt.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"
        }
      }
    }
    let contentType = axOpt.headers['Content-Type'] || opts.contentType
    if (contentType && contentType.indexOf('application/json') >= 0 && !opts.dataType) {
      opts.dataType = 'json'
    }
    if (opts.beforeSend) {
      var r = {
        setRequestHeader: function (key, value) {
          axOpt.headers[key] = value
        }
      }
      opts.beforeSend(r)
    }
    if (axOpt.headers['Content-Type'].indexOf('x-www-form-urlencoded') >= 0) {
      axOpt.data = queryStringify(opts.data)  
    }
    
    if (opts.success) {
      Axios(axOpt).then(function (res) {
        let responseContentType = res.headers['content-type'] || ''
        if (responseContentType.indexOf('application/json') < 0 && (!opts.dataType || opts.dataType.toLowerCase() == 'text')) {
          opts.success(_stringify(res.data), 'success', res)
        } else {
          opts.success(res.data, 'success', res)
        }
      }, function (err) {
        if (opts.error) {
          opts.error(err)
        }
      })
    } else {
      var resolve = []
      var reject = function () {}
      var _promise = {}
      var fail = function (_reject) {
        reject = _reject
        return _promise
      }
      var then = function (_resolve) {
        resolve.push(_resolve)
        return _promise
      }
     
      Axios(axOpt).then(res => {
        var returnData = res.data
        let responseContentType = res.headers['content-type'] || ''
        if (responseContentType.indexOf('application/json') < 0 && (!opts.dataType || opts.dataType.toLowerCase() == 'text')) {
          returnData = _stringify(res.data)
        }
        resolve && resolve.forEach(fn => {
          try {
            fn(returnData)
          } catch (e) {
            console.error(e)
          }
        })
      }, err => {
        reject(err)
      })
      _promise = {
        then: then,
        catch: fail,
        error: fail,
        fail: fail // $.ajax支持fail
      }
      return _promise
    }
  }
}
jAjaxWrapper.isAxiosReady = function (callback) {
  var maxTimes = 50
  var count = 0
  var _setInterval;
  var isReady = function () {
    count++;
    if (window.axios || count > maxTimes) {
      clearInterval(_setInterval)
      callback()
    }
  }
  _setInterval = setInterval(isReady, 100)
}
var isJqueryReady = function (callback) {
  var maxTimes = 50
  var count = 0
  var _setInterval;
  var isReady = function () {
    count++;
    if ((window.$ && window.$.isNumeric) || count > maxTimes) {
      clearInterval(_setInterval)
      callback()
    }
  }
  _setInterval = setInterval(isReady, 200)
}
isJqueryReady(function () {
  if (window.$ && window.$.isNumeric) {
    var oldisNumberic = $.isNumeric
    $.isNumeric = function (a) {
      if (typeof a === 'string' && a.length > 15) {
        return false
      } 
      return oldisNumberic(a)
    }
  }
})
export default jAjaxWrapper