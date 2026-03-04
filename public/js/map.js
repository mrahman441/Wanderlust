mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [89.249, 24.006], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 12 // starting zoom
});