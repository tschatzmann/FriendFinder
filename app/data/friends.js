// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      name: "Ahmed",
      photo: "dkdkdkd",
      scores: [ 5, 4, 3, 1, 5, 2, 5, 2, 2, 2 ]
    },
    {
      name: "Linda",
      photo: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/10151946_10152193601935687_6912141694837279439_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=d1d7b48aa1f32eff3a09e9b942470b75&oe=5D1A6525ww.hollywoodcolumbus.com/-/media/png/east/hollywood-columbus/images/aside-486x273/poker18-bulleted-list-486x273.jpg",
      scores: [2,2,5,5,5,1,4,3,1,5]
      },
      {
        name: "Tammy",
        photo: "https://www.facebook.com/photo/download/?fbid=10155223774629528&ext=1552103723&hash=AeRBRYPW2FlrvGGK",
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
  