var mongoose = require("mongoose");

module.exports = function(db) {
	mongoose.connect('mongodb://127.0.0.1/' + db, {}, function(err) {
		if (err)	{
			console.log("[!] Database error: " + err);	
		}
		else {
			console.log('[+] Connected to database: ' + db);	
		}
	});
};
