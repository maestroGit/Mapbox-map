
mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsa2V4cGVyaWVuY2UiLCJhIjoiY2toZXo4Njg0MGt3NTJ5bnYwam1za3gybiJ9.likY50yxjntRWPEvwuYDDQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const locationDevice = navigator.geolocation; //Returns a Geolocation object allowing accessing the location of the device.
console.log(locationDevice);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    //console.log(position);
    console.log( "Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude)
  }

  getLocation();


   const nav = new mapboxgl.NavigationControl()
   map.addControl(nav)
