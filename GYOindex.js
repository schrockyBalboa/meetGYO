
// Welcome to GYO

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

  if (request.url === "/") {
    fs.readFile("GYOindex.html", function (error, pgResp) {
      if (error) {
        response.writeHead(404);
        response.write('Page could not be found');
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(pgResp);
      }
      response.end();
    });
  } else {
      response.writeHead(200, {'Content-Type': 'text/html' });
      response.write('<h1>GYO</h1>');
      response.end();
  }
});

server.listen(5000);

console.log('Server is listening on 5000');
