// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

// var config = {
//   apiKey: "AIzaSyBtfleJjantBqTZXzSJnvMJGU6_pMAonPY",
//   authDomain: "bar-crawl-project-f4740.firebaseapp.com",
//   databaseURL: "https://bar-crawl-project-f4740.firebaseio.com",
//   projectId: "bar-crawl-project-f4740",
//   storageBucket: "bar-crawl-project-f4740.appspot.com",
//   messagingSenderId: "917856200360"
// };
// firebase.initializeApp(config);

var map;

function initMap() {
  // Create the map.
  var charlotte = { lat: 35.227085, lng: -80.843124 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: charlotte,
    zoom: 70
  });

  // Create the places service.
  var service = new google.maps.places.PlacesService(map);
  var getNextPage = null;
  var moreButton = document.getElementById('more');
  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) getNextPage();
  };

  var request = {
    location: charlotte,
    radius: '5000',
    query: ['bar']
  };

  // Perform a nearby search.
  service.textSearch(request,
    function (results, status, pagination) {
      if (status !== 'OK') return;

      createMarkers(results);
      moreButton.disabled = !pagination.hasNextPage;
      getNextPage = pagination.hasNextPage && function () {
        pagination.nextPage();
      };
    });
}

function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = $("#places");

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    //This creates the new div for each bar
    var thisBar = $("<div>").text(JSON.stringify(place.name));
    thisBar.attr({
      "data-rating": JSON.stringify(place.rating),
      "data-address": JSON.stringify(place.formatted_address),
      "data-hours": JSON.stringify(place.opening_hours),
      "data-price": JSON.stringify(place.price_level)});
    thisBar.addClass("bar");
    thisRating = $("<div>").text("Rating: " + JSON.stringify(place.rating));
    thisImageUrl = place.photos[0].getUrl({
      'maxWidth': 300,
      'maxHeight': 300
    });
    console.log(thisImageUrl);
    thisImage = $("<img>").attr("src", thisImageUrl);

    thisBar.append(thisRating, thisImage);
    $("#displayResults").prepend(thisBar);

    console.log(place);

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
  allowClicks();
}

function allowClicks(){
  $(".bar").on("click", function(){
    thisBar = $(this);
    console.log(thisBar);
    thisBar.toggleClass("selected");
  });
}