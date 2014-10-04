var iotkit-comm = require('iotkit-comm');
var path = require('path');
var spec = new iotkit.ServiceSpec(path.join(__dirname, "server-spec.json"));
iotkit.createService(spec, function (service) {
  service.comm.setReceivedMessageHandler(function(client, msg, context) {
    console.log("received from client: " + msg.toString());
    service.comm.sendTo(client, "hi");
  });
});
