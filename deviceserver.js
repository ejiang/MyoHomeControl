var http = require("http");
var exec = require("child_process").exec;

var toggle = false;

var decide = function(request) {
  // so, now we want it to be more of a toggle
  if (!toggle) { // if file doesn't exist
    exec("touch /tmp/foo");
  } else {
    exec("rm /tmp/foo");
  }
  toggle = !toggle;
}

http.createServer(function(request, response) {
  decide(request);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

