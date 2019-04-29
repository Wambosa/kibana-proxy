const http = require('http'),
  httpProxy = require('http-proxy'),
  kibana = 'https://endpoint.region.es.amazonaws.com'

let proxy = httpProxy.createProxyServer({})

const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    changeOrigin: true,
    target: kibana 
  })
})

server.listen(8080)