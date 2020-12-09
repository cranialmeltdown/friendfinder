const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pull in two route files
// Needs to be in this order to avoid default taking over the api routes too
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

/*
app.get('/', function(req, res) {
//	res.send("hi!");
	//	__dirname is always THIS FILE's (like server.js) absolute path in the system
	// path.join
	homepath = path.join( __dirname, "app/public/home.html" );
//	res.send(homepath);
	res.sendFile( homepath );	
});
*/

// Start up our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
