mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: coordinates.coordinates, // starting position [lng, lat] from the listing
    zoom: 10
});

// Add a marker at the listing location
const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(popUpLocation)) // add a popup with the location name
    .addTo(map);