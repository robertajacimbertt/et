const http = require('http');

http.createServer(function (request, response) {
   console.log("CHEGOU console.log(JSON) -> ", request.method)
   
   if (request.method == 'POST') {
       console.log('POST')
       var body = ''
       request.on('data', function(data) {
         body += data
         console.log('Partial body: ' + body)
       })
//        request.on('end', function() {
//          console.log('Body: ' + body)
//          response.writeHead(200, {'Content-Type': 'text/html'})
//          response.end('post received')
//        })
   } 
   
   response.writeHead(200, {'Content-Type': 'application/json'});
   response.end({"oi":"testando"});
   
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
