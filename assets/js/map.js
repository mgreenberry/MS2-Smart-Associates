function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {
          lat: 51.4816,
          lng: -3.1791
      }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
      { lat: 51.552357315163896, lng: -3.5756131615333095 },
      { lat: 51.59891821738963, lng: -2.982949917035935 },
      { lat: 51.40577645965158, lng: -3.2672158593759235 },
      { lat: 51.48869178472494, lng: -3.1588434728647146 },
      { lat: 51.56827102557492, lng: -3.2168369882025782 },
      { lat: 51.53526051692627, lng: -3.3915307151909198 }
  ];

  var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });

 var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}