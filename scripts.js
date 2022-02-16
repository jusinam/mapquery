let map;
window.onload = function () {

    // consuming API KEY
    L.mapquest.key = 'eHBwBAHhVSKwr5veyXHTinizX4GZZyMS';

    // reading the select ID
    // input = document.getElementById('selectLocation');

    // 'map' refers to an empty <div> element with the ID map
    map = L.mapquest.map('map', {
        center: [37.7749, -122.4194],

        // L.mapquest.tileLayer('map') is the MapQuest map tile layer
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    

}