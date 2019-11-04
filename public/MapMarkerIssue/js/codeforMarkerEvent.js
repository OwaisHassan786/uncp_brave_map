//"markers" is an array that I declared which contains all the marker of the map
//"i" is the index of the marker in the array that I want to trigger the OnClick event
google.maps.event.trigger(markers[i], 'click');

//using the index provided by jquery.each()  
$('.google-map__trigger-item').each(function(i){
    $(this).on('click', function(){
        google.maps.event.trigger(markers[i], 'click');
    });
});

//HTML
<div id="markers"></div>
    <ul class="google-map__trigger">
            <li data-id="marker-1" class="google-map__trigger-item">
                <a>Trigger Marker 1</a></li>
            <li data-id="marker-2" class="google-map__trigger-item">
                    <a>Trigger Marker 2</a></li>