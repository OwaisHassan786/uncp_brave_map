// Initialize and add the map
function initMap() {

    //created an array to store locations
    var collection = [
    ['Oxendine Science Building', 34.684956, -79.200055, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/university.png"],
    ['Lumbee Hall', 34.690501, -79.201006, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/lumbee.png"],
    ['UNCP Bookstore', 34.688786, -79.202015, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/books.png"],
    ['Chavis University Center', 34.688431, -79.200306, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/friends.png"],
    ['Belk Athletic Complex', 34.689564, -79.204335, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/football.png"],
    ['Belk Residence Hall', 34.686516, -79.202404, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Auxilary Services Building', 34.688456, -79.202155, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/business.png"],
    ['Student Health Services', 34.693151, -79.201945, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/health.png"],
    ['Business Administration Building', 34.687830, -79.201477, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/business.png"],
    ['Caton FieldHouse', 34.690178, -79.204298, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/sports.png"],
    ['Chancellor Residence', 34.685954, -79.202866, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/house.png"],
    ['Cypress Residence Hall', 34.694701, -79.199844, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Dial Humanities Building', 34.690841, -79.199911, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/university.png"],
    ['D.F. Lowry Building', 34.687030, -79.201123, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/university.png"],
    ['Dogwood Building', 34.687009, -79.205067, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/business.png"],
    ['Intramural Field', 34.699732, -79.199100, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/sports.png"],
    ['North Hall', 34.686710, -79.202034, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['West Hall', 34.686869, -79.202860, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Hickory Hall North', 34.686023, -79.202254, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Education Center', 34.687188, -79.201890, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/univeristy.png"],
    ['Football Practice Field', 34.689318, -79.205532, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/football.png"],
    ['Givens Performing Arts Center (GPAC)', 34.689178, -79.199917, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/actor.png"],
    ['Givens Performing Arts Center (GPAC)', 34.689178, -79.199917, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/actor.png"],
    ['University Center Annex', 34.688965, -79.200186, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/friends.png"],
    ['Hickory Hall', 34.685776, -79.202506, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Pine Residence Hall', 34.687676, -79.202856, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Oak Residence Hall', 34.688163, -79.202824, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Jones Health and Physical Education Center', 34.689300, -79.201613, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/gym.png"],
    ['Sammy Cox Baseball Field', 34.691639, -79.201932, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/baseball.png"],
    ['Jacobs Hall', 34.686603, -79.199570, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/business.png"],
    ['ROTC Building', 34.699732, -79.197780, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/rotc.png"],
    ['Global Engagement', 34.687316, -79.204899, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/world.png"],
    ['Lumbee River EMC Soccer Field', 34.697093, -79.198411, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/soccer.png"],
    ['Old Main', 34.685018, -79.200530, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/lumbee.png"],
    ['Sampson Building', 34.692064, -79.199494, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/university.png"],
    ['University Courtyard Apartments', 34.692165, -79.202764, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['University Village Apartments', 34.694092, -79.199550, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Weinstein Health sciences Building', 34.693395, -79.200230, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/univeristy.png"],
    ['LRA Softball Field', 34.692509, -79.200495, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/baseball.png"],
    ['Wellons Hall', 34.687256, -79.200701, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/apartment.png"],
    ['Tennis Courts', 34.690391, -79.201925, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/tennis.png"],
    ['Carter Hall', 34.687805, -79.198113, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/doit.png"],
    ['Practice Field', 34.691389, -79.200694, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/sports.png"],
    ['Moore Hall', 34.685966, -79.20022, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/jazz.png"],
    ['Magnolia House', 34.687520, -79.205453, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/univeristy.png"],
    ['Pinchbeck Maintence Building', 34.696441, -79.199906, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/repair.png"],
    ['Locklear Hall', 34.686663, -79.200382, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/art.png"],
    ['Livermore Library', 34.685943, -79.201817, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/books.png"],
    ['Lindsay Hall', 34.687147, -79.198389, 0,
    "/Users/christwalker/Desktop/machine_learning/braves_talons/brave_map/icons/univeristy.png"],
];

    // The map, centered at Lumbee Hall
    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 17,
            center: new google.maps.LatLng(34.690501, -79.201006),
            scrollwheel: false
        });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (var i = 0; i < collection.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(collection[i][1], collection[i][2]),
        map: map,
        icon: collection[i][4],
        animation: google.maps.Animation.DROP,
        title: collection[i][1],
      });

    };
    /*marker.addListener('click', toggleBounce);*/
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(collection[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

}
// Dropping Icons
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
