// ----- LINKING IN FIREBASE ----- //

// Initialize Firebase
// Mei's Bar Crawl Project config for contact form entry stuff. 
// One way information

var config = {
  apiKey: "AIzaSyBtfleJjantBqTZXzSJnvMJGU6_pMAonPY",
  authDomain: "bar-crawl-project-f4740.firebaseapp.com",
  databaseURL: "https://bar-crawl-project-f4740.firebaseio.com",
  projectId: "bar-crawl-project-f4740",
  storageBucket: "bar-crawl-project-f4740.appspot.com",
  messagingSenderId: "917856200360"
};
firebase.initializeApp(config);
var database = firebase.database();

// ----- GLOBAL VARIABLES ----- //


$('#submit').on("click", function () {
    var customer = {
      name: $('#formName').val().trim(),
      emailAddress: $('#formEmail').val().trim(),
      brewery: $('#formBrewery').val().trim(),
      story: $('#formStory').val().trim(),
    }
    database.ref().push(customer);
  }

)

//testing because i set database up so you couldn't read or write it. 
// database.ref().on('value', function (snapshot) {
// console.log(snapshot);
// })