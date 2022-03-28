let jAjaxWrapper = function (jQuery, Axios) {
  var oldAjax = jQuery.ajax
  jQuery.ajax = function (opts) {
    var axOpt = {}
    axOpt.method = opts.type
    axOpt.url = opts.url
    axOpt.data = opts.data
    axOpt.headers = {}
    if (opts.contentType) {
      axOpt.headers['Content-Type'] = opts.contentType
    }
    debugger
    if (opts.success) {
      Axios(axOpt).then(function (res) {
        opts.success(res)
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