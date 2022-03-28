let jAjaxWrapper = function (jQuery) {
  var oldAjax = jQuery.ajax
  jQuery.ajax = function (opts) {
    debugger
    return oldAjax(opts)
  }
}
export default jAjaxWrapper