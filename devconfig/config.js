var port = 8087
var host = 'http://yc.yonyou.com'
module.exports = {
  proxyTable: {
    '/cpu-biddoc': {
      target: host,
      secure: false,
      changeOrigin: true,
      host: 'yc.yonyou.com',
    },
    '/yuncai': {
      target: host,
      secure: false,
      changeOrigin: true,
      host: 'yc.yonyou.com',
    },
    '/cpu-pubapp': {
      target: 'https://pur-daily.yyuap.com',
      secure: false,
      changeOrigin: true,
      host: 'yc.yonyou.com',
    }
  },
  port: port,
}
