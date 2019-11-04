function initialize() {

    var markers = new Array();

    var mapOptions = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(1, 1)
    };

    var locations = [
        [new google.maps.LatLng(0, 0), 'Marker 1', 'Infowindow content for Marker 1'],
        [new google.maps.LatLng(0, 1), 'Marker 2', 'Infowindow content for Marker 2'],
        [new google.maps.LatLng(0, 2), 'Marker 3', 'Infowindow content for Marker 3'],
        [new google.maps.LatLng(1, 0), 'Marker 4', 'Infowindow content for Marker 4'],
        [new google.maps.LatLng(1, 1), 'Marker 5', 'Infowindow content for Marker 5'],
        [new google.maps.LatLng(1, 2), 'Marker 6', 'Infowindow content for Marker 6']
    ];

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        $('.google-map__trigger-item').each(function(i){
            $(this).on('click', function(){
                google.maps.event.trigger(markers[i], 'click');
            });
        });
        var marker = new google.maps.Marker({
            position: locations[i][0],
            map: map,
            title: locations[i][1],
        });
        // Register a click event listener on the marker to display the corresponding infowindow content
        google.maps.event.addListener(marker, 'click', (function (marker, i) {

            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
            }

        })(marker, i));
        
        // Add marker to markers array
        markers.push(marker);
        
    }
    
    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.marker-link').on('click', function () {
        marker.setMap(map);
        google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
    });
}