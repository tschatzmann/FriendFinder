// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      name: "Ahmed",
      photo: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/51960778_2305521733056607_8764632670232641536_n.jpg?_nc_cat=105&_nc_ht=scontent-mia3-2.xx&oh=7e1256cff843973e1e287839cd9f28c8&oe=5D257FFA",
      scores: [ 5, 4, 3, 1, 5, 2, 5, 2, 2, 2 ]
    },
    {
      name: "Linda",
      photo: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/222189_217013771649509_6422640_n.jpg?_nc_cat=107&_nc_ht=scontent-mia3-2.xx&oh=60647157aefa3cd2c2753245517005e3&oe=5D0C1A06",
      scores: [2,2,5,5,5,1,4,3,1,5]
      },
      {
        name: "Tammy",
        photo: "https://www.gamblingpedia.org/wp-content/uploads/2018/12/poker-hands.jpg",
        scores: [
        2,
        2,
        5,
        4,
        5,
        1,
        4,
        3,
        1,
        4
        ]
        }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  