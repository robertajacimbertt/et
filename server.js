const http = require('http');

http.createServer(function (request, response) {
   console.log("CHEGOU console.log(params) -> ")
   console.log(request.params)
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end("Hello Robs");
   
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
