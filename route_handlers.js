var ExampleModel = require('./app/models/example');

module.exports = function(app) {
// example model route
app.get('/example/show', function(req, res) {
	var e = ExampleModel({
		name: "Example Model", 
		age: 33
	});
	res.send(e);
});

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.sendfile('./public/index.html'); // load our public/index.html file
});

};