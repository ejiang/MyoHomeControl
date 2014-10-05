var http = require("http");
var exec = require("child_process").exec;

var decide = function(request) {
  // so, now we want it to be more of a toggle
  var ret = exec("test -e /tmp/foo");
  ret.exit(function(code, signal){
    if (!code) { // if file doesn't exist
      exec("touch /tmp/foo");
    } else {
      exec("rm /tmp/foo");
    }
  });
}

http.createServer(function(request, response) {
  decide(request);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

