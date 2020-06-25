var http = require('http');
var url = require('url');
var fs = require('fs');
var os = require('os');

var myLocalIP = localIP();
var port = 3000;


var proxyUrl = "http://" + myLocalIP + ":" + port + "/proxy.pac";
console.log("Set your device proxy to automatic and enter the URL");
console.log(proxyUrl);

http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/proxy.pac') {
            fs.readFile('./patterns.txt', 'utf8', function(err, data) {
            if (err){
                throw err;
            }
            var patterns = data.split("\n");
            fs.readFile('./proxy.pac', 'utf8', function(err, data) {
                if (err){
                    throw err;
                }
                res.writeHead(200, { 'Content-Type': 'application/x-javascript-config' });
                data = data.replace(/\{LOCAL_IP\}/, myLocalIP);
                data = data.replace(/\{PATTERNS\}/, patterns.map(pattern => 'shExpMatch(host, "' + pattern +'")').join(" || "));
                res.end(data);
                console.log("Returning Proxy Config for urls: " + patterns.join(", "));
                return;
            });   
            return;
        });        
    }
    else {
    	res.end("Set your device proxy to automatic and enter the URL: " + proxyUrl);
    	console.log("Set your device proxy to automatic and enter the URL: " + proxyUrl);
    }
}).listen(port);

function localIP(){
	var ifaces = os.networkInterfaces();
	var ip;
	Object.keys(ifaces).forEach(function (ifname) {
	  var alias = 0;

	  ifaces[ifname].forEach(function (iface) {
	    if ('IPv4' !== iface.family || iface.internal !== false) {
	      return;
	    }
	    ip =  iface.address;
	  });
	});
	return ip;
}