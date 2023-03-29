var http = require('http');
var dt = require('./fecha');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("La hora y fecha actual: " + dt.myDateTime());
  res.end();
}).listen(8080);
