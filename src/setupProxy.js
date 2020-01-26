const proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use('', proxy({
    target: process.env.REACT_APP_HOST,
    changeOrigin: true
  }))
}
