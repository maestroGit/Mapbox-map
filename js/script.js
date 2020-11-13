mapboxgl.accessToken =
  "pk.eyJ1Ijoid2Fsa2V4cGVyaWVuY2UiLCJhIjoiY2toZXo4Njg0MGt3NTJ5bnYwam1za3gybiJ9.likY50yxjntRWPEvwuYDDQ";

// var map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
//   center: [-74.5, 40], // starting position [lng, lat]
//   zoom: 9, // starting zoom
// });

const locationDevice = navigator.geolocation; //Returns a Geolocation object allowing accessing the location of the device.
console.log(locationDevice);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(scCallbackCoords);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function scCallbackCoords(position) {
  console.log(typeof position);
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log(lat, lng);
  centreMap([lng, lat]);
}

function centreMap(center) {
  //map object
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: center, // Paso array [lng, lat] (primero longitud)
    zoom: 1, // starting zoom
  });

  // zoom control nav
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  // Display Pop up
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(center)
    .setHTML("<h1>Hello World!</h1>")
    .addTo(map);

  // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Construction on the Washington Monument began in 1848."
  );

  // create DOM element for the marker
  var el = document.createElement("div");
  el.id = "marker";

  // create the marker
  var monument = [-77.0353, 38.8895];
  new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

  // Directions plugins
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}

getLocation();
