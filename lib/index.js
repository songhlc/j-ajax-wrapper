// import Qs from 'qs'
import JsonBig from 'json-bigint'
var originJSONparse = JSON.parse
JSON.parse = function (str) {
  if(typeof str === 'string'){
    return originJSONparse(JSON.stringify(JsonBig.parse(str)))
  }else{
    return str
  }
}
var formatValue = function (key, value) {
  // 被压缩之后
  if ((key==='dataTables' || key ==='parameters') && typeof value === 'string' && value.indexOf("{") !== 0) {
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
        if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
          opts.success(_stringify(res.data), 'success', res)
        } else {
          opts.success(res.data, 'success', res)
        }
      }).catch(function (err) {
        if (opts.error) {
          opts.error(err)
        }
      })
    } else {
      var resolve = function () {}
      var reject = function () {}
      var fail = function (_reject) {
        reject = _reject
      }
      var then = function (_resolve) {
        resolve = _resolve
        return {
          fail: fail,
          catch: fail
        }
      }
     
      Axios(axOpt).then(res => {
        var returnData = res.data
        if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
          returnData = _stringify(res.data)
        }
        resolve(returnData)
      }).catch(err => {
        reject(err)
      })
      return {
        then,
        catch: fail,
        fail: fail // $.ajax支持fail
      }
      // return new Promise((resolve, reject) => {
      //   Axios(axOpt).then(res => {
      //     var returnData = res.data
      //     if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
      //       returnData = _stringify(res.data)
      //     }
      //     resolve(returnData)
      //   }).catch(err => {
      //     reject(err)
      //   })
      // })
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
export default jAjaxWrapper