import JSONbigint from 'json-bigint'
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
var jAjaxWrapper = function (jQuery, Axios, rewriteResponse) {
  if (rewriteResponse) {
    // 增加Axios配置
    Axios.defaults.transformResponse = function (data) {
      try {
        return JSON.parse(JSON.stringify(JSONbigint.parse(data)))
      }catch {
        return data
      }
    }
  }
  var oldAjax = jQuery.ajax
  jQuery.ajax = function (opts) {
    // 暂时没有好的办法
    if (opts.async === false) {
      return oldAjax(opts)
    }
    var axOpt = {}
    axOpt.method = opts.type
    axOpt.url = opts.url
    axOpt.data = opts.data
    axOpt.headers = {}
    if (opts.contentType) {
      axOpt.headers['Content-Type'] = opts.contentType
    } else {
      axOpt.headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"
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
        opts.success(res.data, 'success', res)
      }).catch(function (err) {
        if (opts.error) {
          opts.error(err)
        }
      })
    } else {
      return new Promise((resolve, reject) => {
        Axios(axOpt).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default jAjaxWrapper