var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')
var open = require("open");
var app = express()
var config = require('./config.js')
var proxyTable = config.proxyTable
var port = config.port
var readyPromise = new Promise(function (resolve) {
  _resolve = resolve
})
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
app.use(express.static('./'));
var server = app.listen(port)
open("http://localhost:"+port + '/demo/index.html');
module.exports = {
  ready: readyPromise,
  close: function () {
    server.close()
  }
}