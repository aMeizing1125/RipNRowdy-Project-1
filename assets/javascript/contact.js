// ----- LINKING IN FIREBASE ----- //

// Initialize Firebase
// Mei's Bar Crawl Project config for contact form entry stuff. 
// One way information
var config = {
  apiKey: "AIzaSyB76RPsQKnl5tyOVAR1GA5cUxG6KM0t-Xc",
  authDomain: "bar-crawl-contact-db.firebaseapp.com",
  databaseURL: "https://bar-crawl-contact-db.firebaseio.com",
  projectId: "bar-crawl-contact-db",
  storageBucket: "bar-crawl-contact-db.appspot.com",
  messagingSenderId: "376710116624"
};
firebase.initializeApp(config);
var database = firebase.database();

// ----- GLOBAL VARIABLES ----- //


$('#submit').on("click", function() {
  event.preventDefault(); //prevents hitting enter and submitting
  var customer = {
    name:  $('#formName').val().trim(),
    emailAddress: $('#formEmail').val().trim(),
    brewery: $('#formBrewery').val().trim(),
    story: $('#formStory').val().trim(),
  }
  database.ref().push(customer);
  }
  
)
database.ref().on('value', function (snapshot) {
  $('#addBeerStoriesHere').empty();
  snapshot.forEach(function (beerStory) {
    console.log(beerStory.val().brewery);  //it works!!
    var createDiv; 
    var createH3;
    var createP;
    var bStoryName = beerStory.val().name;
    var bStoryBrewer = beerStory.val().brewery;
    var bStoryBrewer = beerStory.val().story;
    // console.log(bStoryName.brewery);

  })
})


//testing because i set database up so you couldn't read or write it. 
// database.ref().on('value', function (snapshot) {
// console.log(snapshot);
// })

