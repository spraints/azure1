var http = require('http');

http.createServer(function (req, res) {
	console.log('Got request for ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end("<!DOCTYPE><html><head><title>Hi</title></head><body></body></html>");
}).listen(process.env.PORT);