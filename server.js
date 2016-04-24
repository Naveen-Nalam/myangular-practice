var express = require('express');

var server = express();
// var router = express.Router();

server.use(function(req, res, next){
	// console.log("Disabling the CORS");
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
	// res.header("Access-Control-Allow-Headers","Conent-Type, Accept");
	// console.log("CORS Disabled");
	next();
	// console.log("After Next");
});
server.use(express.static(__dirname + '/app'));



var port = 6767;

/*server.get('/', function(req, res){
  res.redirect('/index.html');
});*/

server.listen(port, function() {

	console.log('Server listening on port '+ port);
});