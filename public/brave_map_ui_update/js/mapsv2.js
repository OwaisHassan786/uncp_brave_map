var myLatLng;
var latit;
var longit;  
// Initialize and add the map
function initMap(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
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
            mapTypeId: 'roadmap'
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
    var collection = [
    ['Oxendine Science Building', 34.684956, -79.200055, 0,
    "../icons/university.png"],
    ['Lumbee Hall', 34.690501, -79.201006, 0,
    "../icons/lumbee.png"],
    ['UNCP Bookstore', 34.688786, -79.202015, 0,
    "../icons/books.png"],
    ['Chavis University Center', 34.688431, -79.200306, 0,
    "../icons/friends.png"],
    ['Belk Athletic Complex', 34.689564, -79.204335, 0,
    "../icons/football.png"],
    ['Belk Residence Hall', 34.686516, -79.202404, 0,
    "../icons/apartment.png"],
    ['Auxilary Services Building', 34.688456, -79.202155, 0,
    "../icons/business.png"],
    ['Student Health Services', 34.693151, -79.201945, 0,
    "../icons/health.png"],
    ['Business Administration Building', 34.687830, -79.201477, 0,
    "../icons/business.png"],
    ['Caton FieldHouse', 34.690178, -79.204298, 0,
    "../icons/sports.png"],
    ['Chancellor Residence', 34.685954, -79.202866, 0,
    "../icons/house.png"],
    ['Cypress Residence Hall', 34.694701, -79.199844, 0,
    "../icons/apartment.png"],
    ['Dial Humanities Building', 34.690841, -79.199911, 0,
    "../icons/university.png"],
    ['D.F. Lowry Building', 34.687030, -79.201123, 0,
    "../icons/university.png"],
    ['Dogwood Building', 34.687009, -79.205067, 0,
    "../icons/business.png"],
    ['Intramural Field', 34.699732, -79.199100, 0,
    "../icons/sports.png"],
    ['North Hall', 34.686710, -79.202034, 0,
    "../icons/apartment.png"],
    ['West Hall', 34.686869, -79.202860, 0,
    "../icons/apartment.png"],
    ['Hickory Hall North', 34.686023, -79.202254, 0,
    "../icons/apartment.png"],
    ['Education Center', 34.687188, -79.201890, 0,
    "../icons/university.png"],
    ['Football Practice Field', 34.689318, -79.205532, 0,
    "../icons/football.png"],
    ['Givens Performing Arts Center (GPAC)', 34.689178, -79.199917, 0,
    "../icons/actor.png"],
    ['Givens Performing Arts Center (GPAC)', 34.689178, -79.199917, 0,
    "../icons/actor.png"],
    ['University Center Annex', 34.688965, -79.200186, 0,
    "../icons/friends.png"],
    ['Hickory Hall', 34.685776, -79.202506, 0,
    "../icons/apartment.png"],
    ['Pine Residence Hall', 34.687676, -79.202856, 0,
    "../icons/apartment.png"],
    ['Oak Residence Hall', 34.688163, -79.202824, 0,
    "../icons/apartment.png"],
    ['Jones Health and Physical Education Center', 34.689300, -79.201613, 0,
    "../icons/gym.png"],
    ['Sammy Cox Baseball Field', 34.691639, -79.201932, 0,
    "../icons/baseball.png"],
    ['Jacobs Hall', 34.686603, -79.199570, 0,
    "../icons/business.png"],
    ['ROTC Building', 34.699732, -79.197780, 0,
    "../icons/rotc.png"],
    ['Global Engagement', 34.687316, -79.204899, 0,
    "../icons/world.png"],
    ['Lumbee River EMC Soccer Field', 34.697093, -79.198411, 0,
    "../icons/soccer.png"],
    ['Old Main', 34.685018, -79.200530, 0,
    "../icons/lumbee.png"],
    ['Sampson Building', 34.692064, -79.199494, 0,
    "../icons/university.png"],
    ['University Courtyard Apartments', 34.692165, -79.202764, 0,
    "../icons/apartment.png"],
    ['University Village Apartments', 34.694092, -79.199550, 0,
    "../icons/apartment.png"],
    ['Weinstein Health sciences Building', 34.693181, -79.200454, 0,
    "../icons/university.png"],
    ['LRA Softball Field', 34.692509, -79.200495, 0,
    "../icons/baseball.png"],
    ['Wellons Hall', 34.687256, -79.200701, 0,
    "../icons/apartment.png"],
    ['Tennis Courts', 34.690391, -79.201925, 0,
    "../icons/tennis.png"],
    ['Carter Hall', 34.687805, -79.198113, 0,
    "../icons/doit.png"],
    ['Practice Field', 34.691389, -79.200694, 0,
    "../icons/sports.png"],
    ['Moore Hall', 34.685966, -79.20022, 0,
    "../icons/jazz.png"],
    ['Magnolia House', 34.687520, -79.205453, 0,
    "../icons/university.png"],
    ['Pinchbeck Maintence Building', 34.696441, -79.199906, 0,
    "../icons/repair.png"],
    ['Locklear Hall', 34.686663, -79.200382, 0,
    "../icons/art.png"],
    ['Livermore Library', 34.685943, -79.201817, 0,
    "../icons/books.png"],
    ['Lindsay Hall', 34.687147, -79.198389, 0,
    "../icons/university.png"],
    ['Current Location:', latitude, longitude,0,
    "../icons/running.png"],
    ];
    var infoWindowContent = [
        ['<div class= "info_content">' +
            '<h3>Oxendine Science Building</h3>' +
            '<p>1403 Old Main Road, Pembroke, NC</p>'+
            '</div>'
        ],
        ['<div class= "info_content">' +
        '<h3>Lumbee Hall</h3>' +
        '<p>1 University Drive, Pembroke, NC</p>'+
        '</div>'
        ]
    ];
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
    alert("Geocoder failed.");
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
