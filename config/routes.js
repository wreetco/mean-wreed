module.exports = function(app) {

// sample api route
app.get('/api/', function(req, res) {
	
});

// route to handle all angular requests
app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load our public/index.html file
});

};