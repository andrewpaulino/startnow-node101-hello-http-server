
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,  { 
  'content-type': 'text/plain',
  'host': 'localhost:8080' ,
  'accept': '*/*' });
    res.end("Hello World")
    console.log('Server running at http://127.0.0.1:8080/', req.url);
}).listen(8080, '127.0.0.1');
