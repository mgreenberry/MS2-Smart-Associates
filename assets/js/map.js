// function loads a map focussed on Cardiff as it's centre
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {
          lat: 51.4816,
          lng: -3.1791
      }
  });

  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let locations = [
    { lat: 51.56827102557492, lng: -3.2168369882025782 }, // Project 1
    { lat: 51.552357315163896, lng: -3.5756131615333095 }, // Project 2
    { lat: 51.59891821738963, lng: -2.982949917035935 }, // Project 3
    { lat: 51.40577645965158, lng: -3.2672158593759235 }, // Project 4
    { lat: 51.48869178472494, lng: -3.1588434728647146 }, // Project 5
    { lat: 51.53526051692627, lng: -3.3915307151909198 } // Project 6
  ];
// To add markers/icons to the map to display where locations are
  let markers = locations.map(function(location, i) {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
  });
// To collate markers on a small map when map is zoomed out or viewed on a mobile
 let markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}