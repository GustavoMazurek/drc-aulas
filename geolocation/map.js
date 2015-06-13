window.onload = function () {

    navigator.geolocation.getCurrentPosition(

        function(geoPosition){

            addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);

        }
    );

    function addMap(latitude, longitude){

        var options = {
            zoom: 16,
            center: new google.maps.LatLng(latitude, longitude)
        };

        var map = new google.maps.Map(document.querySelector('div.container'), options);


        var marker = new google.maps.Marker({

            position: options.center,

            map: map,

            title: 'Here I am',

        });
    }

};