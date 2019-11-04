var myLatLng;
var latit;
var longit;
collection;
// Initialize and add the map
function initMap(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    myLatLng = {
        lat: latitude,
        lng: longitude
    };
    // The map, centered at Lumbee Hall
    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 16,
            center: new google.maps.LatLng(34.690501, -79.201006),
            mapTypeId: 'roadmap',
            gestureHandling: "greedy"
            
        });
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    var bounds = new google.maps.LatLngBounds();
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My location'
    });
    //created an array to store locations
    collection[collection.length] = ['Current Location:', latitude, longitude, 0,
    "../icons/running.png"];

    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    for (var i = 0; i < collection.length; i++) {
        var position = new google.maps.LatLng(collection[i][1], collection[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: collection[i][4],
            animation: google.maps.Animation.DROP,
            title: collection[i][0],
        });
        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                latit = marker.getPosition().lat();
                longit = marker.getPosition().lng();
                // console.log("lat: " + latit);
                // console.log("lng: " + longit);
            }
        })(marker, i));
        marker.addListener('click', function() {
            directionsService.route({
                // origin: document.getElementById('start').value,
                origin: myLatLng,
                // destination: marker.getPosition(),
                destination: {
                    lat: latit,
                    lng: longit
                },
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
    }
    /*marker.addListener('click', toggleBounce);*/
    
}
function geoError() {
    var map = new google.maps.Map(document.getElementById('map'),
    {
        zoom: 16,
        center: new google.maps.LatLng(34.690501, -79.201006),
        mapTypeId: 'roadmap',
        gestureHandling: "greedy"
    });
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;
    
    for (var i = 0; i < collection.length; i++) {
        // Append a link to the markers DIV for each marker
        var position = new google.maps.LatLng(collection[i][1], collection[i][2]);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: collection[i][4],
            animation: google.maps.Animation.DROP,
            title: collection[i][0],
        });
        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                latit = marker.getPosition().lat();
                longit = marker.getPosition().lng();
                // console.log("lat: " + latit);
                // console.log("lng: " + longit);
        }
    })(marker, i));
}
    
}
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initMap, geoError);
    } else {
      showError("Your browser does not support Geolocation!");
    }
  }
// Dropping Icons
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

