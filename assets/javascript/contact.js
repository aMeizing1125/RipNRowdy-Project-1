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

// ----- GLOBAL VARIABLES ----- //
var name; 
var emailAddress;
var brewery;
var story; 




// ----- BUTTON CONTROLS ----- //
$('').val().trim();
