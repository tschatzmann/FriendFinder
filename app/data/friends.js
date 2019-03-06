// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      Name: "Ahmed",
      Email: "ahmed@example.com",
      Photo: "dkdkdkd",
      question1: "afhaque89",
      question2: "000-000-0000",
      scores: [ 5, 4, 3, 1, , 2, 5, 2, 2, 2 ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  