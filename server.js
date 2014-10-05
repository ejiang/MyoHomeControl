var http = require("http");
var url = require("url");
var exec = require("child_process").exec;

http.createServer(function(request, response) {
  if (url.parse(request.url, true)['query']['light'] == '2') {
    exec("touch /tmp/foo");
  } else {
    exec("rm /tmp/foo");
  }
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
