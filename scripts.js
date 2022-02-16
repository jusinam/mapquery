let map, input;
window.onload = function () {

    // consuming API KEY
    L.mapquest.key = 'eHBwBAHhVSKwr5veyXHTinizX4GZZyMS';

    // reading the select ID
    input = document.getElementById('selectLocation');

    // 'map' refers to an empty <div> element with the ID map
    map = L.mapquest.map('map', {
        center: [37.7749, -122.4194],

        // L.mapquest.tileLayer('map') is the MapQuest map tile layer
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    L.mapquest.geocoding().geocode('New York, United States');
    map.addLayer(L.mapquest.incidentsLayer());
    map.addControl(L.mapquest.control());
    // L.circle([lat, long], { radius: 2 }).addTo(map)

    // map.addLayer(L.mapquest.marketsLayer());

}

function loadIncidentMap() {

    // reading the select ID
    let selectedValue = document.getElementById("selectLocation").value;
    L.mapquest.geocoding().geocode(selectedValue);

    // querying the server
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (selectedValue) {
        if (this.readyState == 4 && this.status == 200) {
            myJson = JSON.parse(this.responseText);

        }
    }
    xhttp.open('GET', 'http://www.mapquestapi.com/traffic/v2/incidents?key=eHBwBAHhVSKwr5veyXHTinizX4GZZyMS&boundingBox=39.95,-105.25,39.52,-104.71&filters=construction,incidents');
    xhttp.send();

    //  tabular incident rendering            
    for (let i = 0; i < xhttp.length; i++) {

        let tableBody = document.getElementsById("incidents");
        let tr = '<tr>';

    tr += '<td><th scope="row">' + 1 + '</th></td>' + '<td' > + xhttp[i].incident + '</td>';

    // adding the table row to the table body 
    tableBody.innerHTML += tr;
    }

}