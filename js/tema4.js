if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
}

function success(position) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
}