let finalhandler = require('finalhandler')
let http = require('http')
let serveStatic = require('serve-static')

// Serve up public/ftp folder
let serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
let server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3005)