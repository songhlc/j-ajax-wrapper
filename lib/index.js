var matchList = ['/xxx1', '/xxx2']
// 判断url是否满足规则
const isMatchUrl = function (url) {
  var flag = false
  for(var i = 0; i < isMatchUrl.length; i++) {
    if (url.indexOf(isMatchUrl[i]) >= 0) {
      flag = true;
      break;
    }
  }
  return flag
}
let jAjaxWrapper = function (jQuery) {
  var oldAjax = jQuery.ajax
  jQuery.ajax = function (opts) {
    var url = opts.url
    if (isMatchUrl(url)) {
      // 在这里处理ajax,根据参数加签名 或者其他处理修改opts,然后再调用初始的ajax

      return oldAjax(opts)
    } else {
      return oldAjax(opts)
    }
    
  }
}
export default jAjaxWrapper