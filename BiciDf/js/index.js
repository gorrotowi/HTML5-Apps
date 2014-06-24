var mapa;

function askLocation() {
    if ("geolocation" in navigator) {
        getLocation();
    } else {
        alert("Geolocalizacion no disponible");
    }
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        iniciarMapa(position.coords.latitude, position.coords.longitude);
    }) {

    }
}

function iniciarMapa(var lat,
    var lon) {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(lat, lon),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        //icon:iconomarker,
        animation: 'DROP',
        title: "Usted esta aqui."
    });

    map = new google.maps.Map(document.getElementById('mapa'),
        mapOptions);
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', askLocation);