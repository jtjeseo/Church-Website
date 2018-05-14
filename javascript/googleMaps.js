function initMap() {
  var uluru = {
    lat: 38.362135,
    lng: -85.416637
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}