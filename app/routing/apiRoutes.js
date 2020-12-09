const friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
	var questions = req.body.questions;
	var closestFriend = false;
	var bestScore = false;
	for (var f=0;f<friendsData.length;f++) {
		var totalDifference = 0;
		for (var q=0;q<questions.length;q++) {
			totalDifference += Math.abs(parseInt(questions[q]) - parseInt(friendsData[f].scores[q]));
		}
		if (!bestScore || totalDifference < bestScore) {
			bestScore = totalDifference;
			closestFriend = friendsData[f];
		}
	}
	console.log(friendsData);
	console.log(closestFriend);
	var json = JSON.stringify(closestFriend);
	res.type("json");
	res.send(json);
//	if (closestFriend!=false) {
//		var html = "<img src='" + closestFriend.icon + "' />";
//		res.send(html);
//	}
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.get("/api/addjon", function(req, res) {
    if (friendsData.length < 2) {
		friendsData.push({name:"Jon"});
		res.json(true);
    } else {
		res.json(false);
	}
  });

/*
  app.post("/api/friends", function(req, res) {
    if (friendsData.length < 2) {
		friendsData.push(req.body);
		res.json(true);
    } else {
		res.json(false);
	}
  });
*/

};
