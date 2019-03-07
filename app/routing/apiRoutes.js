// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/api", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    // API POST Requests

    //Comparing user with their best friend match 
    var totalDifference = 0;
    //Object to hold the best match
    var pokerMatch = {
      name: "",
      photo: "",
      friendDifference: 50
    };

    // Here we take the result of the user's survey POST and parse it.
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    // Converting the users score to a number (Instead of string)
    var userScoresNum = userScores.map(function (item) {
      return parseInt(item, 10);
    });

    userData = {
      "name": req.body.name,
      "photo": req.body.photo,
      "scores": userScoresNum
    };
    console.log(userData);


    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    console.log('userScoreNum outside function ' + userScoresNum);

    // Converting the users score to a sum number (Adds up all the numbers in array)
    //
    var userScoresSum = userScoresNum.reduce((tot, amt) => tot + amt, 0);

    console.log("Sum of users score " + userScoresSum);
    console.log("Best match friend diff " + pokerMatch.friendDifference);


    // console.log("+++++++=================++++++++++");

    // Loop through all the friend possibilities in the database. 
    for (var i = 0; i < friendsData.length; i++) {

      console.log(friendsData[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match friend diff " + pokerMatch.friendDifference);

      var friendScoreSum = friendsData[i].scores.reduce((tot, amt) => tot + amt, 0);
      console.log("Total friend score " + friendScoreSum);
      totalDifference += Math.abs(userScoresSum - friendScoreSum);
      console.log(" -------------------> " + totalDifference);

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= pokerMatch.friendDifference) {

        // Reset the pokerMatch to be the new friend. 
        pokerMatch.name = friendsData[i].name;
        pokerMatch.photo = friendsData[i].photo;
        pokerMatch.friendDifference = totalDifference;
        // }

      }
      console.log(totalDifference + " Total Difference");

    }
    console.log(pokerMatch);
    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friendsData.push(userData);
    console.log("New User added");
    console.log(userData);
    // Return a JSON with the user's pokerMatch. This will be used by the HTML in the next page. 
    res.json(pokerMatch);

  });

} 
