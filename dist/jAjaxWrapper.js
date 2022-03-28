// jAjaxWrapper vsign-1.0.0 by songhlc@yonyou.com
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).jAjaxWrapper=n()}(this,function(){"use strict";return function(e){var f=e.ajax;e.ajax=function(e){if(function e(n){for(var f=!1,o=0;o<e.length;o++)if(0<=n.indexOf(e[o])){f=!0;break}return f}(e.url)){var n=function(){};return e.beforeSend&&(n=e.beforeSend),e.beforeSend=function(e){n(e)},f(e)}return f(e)}}});
//# sourceMappingURL=jAjaxWrapper.js.map
