// jAjaxWrapper v1.0.13 by songhlc@yonyou.com
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).jAjaxWrapper=t()}(this,(function(){"use strict";var e=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),t=function(e){var t="";try{t=JONS.stringify(e)}catch(n){t=e}return t},n=function(n,o){var r=n.ajax;n.ajax=function(n){if(!1===n.async)return r(n);var a={};if(n.type||(n.type=n.method||"get"),a.method=n.type,a.url=n.url,"get"===n.type.toLowerCase()?a.params=n.data:a.data=n.data,a.headers=n.headers||{},n.contentType?a.headers["Content-Type"]=n.contentType:!1===n.contentType?a.headers["Content-Type"]="multipart/form-data":a.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",n.beforeSend){var s={setRequestHeader:function(e,t){a.headers[e]=t}};n.beforeSend(s)}if(a.headers["Content-Type"].indexOf("x-www-form-urlencoded")>=0&&(a.data=function(t){var n={};"string"==typeof t&&0===t.indexOf("{")?n=JSON.parse(t):"object"===e(t)&&(n=t);var o="";return Object.keys(n).forEach((function(e,t){o+=t>0?"&"+e+"="+n[e]:e+"="+n[e]})),o}(n.data)),!n.success)return new Promise((function(e,r){o(a).then((function(o){var r=o.data;n.dataType&&"text"!=n.dataType.toLowerCase()||(r=t(o.data)),e(r)})).catch((function(e){r(e)}))}));o(a).then((function(e){n.dataType&&"text"!=n.dataType.toLowerCase()?n.success(e.data,"success",e):n.success(t(e.data),"success",e)})).catch((function(e){n.error&&n.error(e)}))}};return n.isAxiosReady=function(e){var t,n=0;t=setInterval((function(){n++,(window.axios||n>50)&&(clearInterval(t),e())}),100)},n}));
//# sourceMappingURL=jAjaxWrapper.js.map
