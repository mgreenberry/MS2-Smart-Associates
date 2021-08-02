function initMap() {
    var test= {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: test
    });
    var marker = new google.maps.Marker({
      position: test,
      map: map
    });
  }