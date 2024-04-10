function initMap() {
  //alert('it works');
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.8124691, -87.66884);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.mapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/icon.png'
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });

  //<script src="https://maps.googleapis.com/maps/api/js?AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap"
    //async defer></script>
}

google.maps.event.addDomListener(window, 'load', initMap);