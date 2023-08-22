export function showMap(latitude = 51.505, longitude = -0.09, locationName) {
    if (window.map) {
        document.getElementById("map").remove()
        window.map.remove();
        window.map = null;
    }
    const outputMap = document.getElementById("output-map")
    const mapContainer = document.createElement("div");
    mapContainer.setAttribute('id', 'map')

    outputMap.appendChild(mapContainer)
    let map = L.map('map').setView([latitude, longitude], 13);
    var locationIcon = L.icon({
        iconUrl: "./images/icon-location.svg",

        iconSize: [46, 56], // size of the icon
        iconAnchor: [26, 80], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([latitude, longitude], { icon: locationIcon }).addTo(map)

    window.map = map;
}