const friendsData = require("../data/friends");

const path = require("path");

/*
When using a file like htmlRoutes.js as a module in a require('htmlRoutes') statement, 
whatever is set at module.exports is basically what gets returned to the script calling it.
So in this case, when we call up...
	require('./app/routing/htmlRoutes')(app)
... we get a function back that is then applied to our 'app' variable.
Then that function (seen below) sets some request route listeners for various paths and patterns
by using the .get method of our 'app' instance of an express server.

*/
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
