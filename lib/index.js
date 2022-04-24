var queryStringify = function (data) {
  var _data = {}
  if (typeof data === 'string' && data.indexOf('{') === 0) {
    _data = JSON.parse(data)
  } else if (typeof data === 'object'){
    _data = data
  }
  var result = ''
  Object.keys(_data).forEach(function (key, index) {
    if (index > 0) {
      result += '&' + key + '=' + _data[key]
    } else {
      result += key + '=' + _data[key]
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
      return new Promise((resolve, reject) => {
        Axios(axOpt).then(res => {
          var returnData = res.data
          if (!opts.dataType || opts.dataType.toLowerCase() == 'text') {
            returnData = _stringify(res.data)
          }
          resolve(returnData)
        }).catch(err => {
          reject(err)
        })
      })
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