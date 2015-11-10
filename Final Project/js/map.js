
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
  center: new google.maps.LatLng(34.0500, -118.2500),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

  var markerInfo = [{
    title: 'Hello',
    lat: 33.833563,
    lng: -118.347688,
    body: "jakdfhadsjhadsjkfkjasdhakjsdfn",
    link: 'www.google.com',
  },
  {
    title: 'Bye',
    lat: 33.633563,
    lng: -118.547688,
    body: "jakdfhadsjhadsjkfkjasdhakjsdfn",
    link: 'www.google.com',
  }
]

  markerInfo.forEach(function(val,i) {
      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+ markerInfo[i].title +'</h1>'+
          '<div id="bodyContent">'+
          '<p>'+ markerInfo[i].body +'</p>'+
          '<p>'+ markerInfo[i].link +'</p>'
          '</div>'+
          '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: {lat: markerInfo[i].lat, lng: markerInfo[i].lng},
        map: map,
        label: labels[labelIndex++ % labels.length],

      });

      marker.addListener('click',function(){
          infowindow.open(map, marker);
      });
  });
};
google.maps.event.addDomListener(window, 'load', initialize);
