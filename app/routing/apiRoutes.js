// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/api", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    // API POST Requests

      //Comparing user with their best friend match 
      var totalDifference = 0;
      //Object to hold the best match
      var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 1000
      };

      // Here we take the result of the user's survey POST and parse it.
      var userData = req.body;
      var userName = userData.name;
      var userScores = userData.scores;
      // Converting the users score to a number (Instead of string)
      var b = userScores.map(function(item) {
          return parseInt(item, 10);
          console.log("Value of b " + b);
      });

      userData = {
          "name": req.body.name,
          "photo": req.body.photo,
          "scores": b
      };
    console.log(userData);


      console.log("Name: " + userName);
      console.log("User Score " + userScores);

      console.log('b outside function ' + b);
  
      // Converting the users score to a sum number (Adds up all the numbers in array)
      //
      var sum = b.reduce((tot, amt) => tot + amt, 0);
      
      console.log("Sum of users score " + sum);
      console.log("Best match friend diff " + bestMatch.friendDifference);


      console.log("+++++++=================++++++++++");
  
      // Loop through all the friend possibilities in the database. 
      for (var i = 0; i < friendsData.length; i++) {

          console.log(friendsData[i].customerName);
          totalDifference = 0;
          console.log("Total Diff " + totalDifference);
          console.log("Best match friend diff " + bestMatch.friendDifference);

          var bfriendScore = friendsData[i].scores.reduce((tot, amt) => tot + amt, 0);
          console.log("Total friend score " + bfriendScore);
          totalDifference += Math.abs(sum - bfriendScore);
          console.log(" -------------------> " + totalDifference);
          // Loop through all the scores of each friend
          // for (var j = 0; j < friends[i].scores[j]; j++) {

          //     // We calculate the difference between the scores and sum them into the totalDifference
          //     totalDifference += Math.abs(sum - parseInt(friends[i].scores[j]));
          //     console.log(friends[i].scores[j] + " Friends Scores");

          // If the sum of differences is less then the differences of the current "best match"
          if (totalDifference <= bestMatch.friendDifference) {

              // Reset the bestMatch to be the new friend. 
              bestMatch.name = friendsData[i].name;
              bestMatch.photo = friendsData[i].photo;
              bestMatch.friendDifference = totalDifference;
              // }

          }
          console.log(totalDifference + " Total Difference");

      }
      console.log(bestMatch);
      // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
      // the database will always return that the user is the user's best friend).
      friendsData.push(userData);
      console.log("New User added");
      console.log(userData);
      // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
      res.json(bestMatch);

  });

} 
