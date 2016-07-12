$(document).ready(function() {
  //gets gps coordinates
  var test = [38.5132085, -89.96652209999999];
  var weatherapi = "http://api.openweathermap.org/data/2.5/weather?lat="+test[0]+"&lon="+test[1]+"&appid=d1959f50d3501d2ef0f8746fb709976f";
  var lat;
  var lon;
  
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      $(".geolocation").html("latitude: " + lat + "<br>longitude: " + lon);
     locationCode();
  });
  
   //loads json weather api  
  $.getJSON(weatherapi, function(json) {
    var city = json.name;
    var temp = json.main.temp;
    var fTemp = Math.floor(temp * 9/5 - 459.67);
    var cTemp = Math.floor((fTemp -  32) * 5/9);
    var currentWeather = json.weather[0].main;
      $("#city").html(city);
      $("#weather").html(currentWeather);
      $("#temp").html(fTemp + "°");
      
    //convert Fahrenheit to Celsius
    $("#toC").click(function() {
      document.getElementById("temp").innerHTML = cTemp + "°"; });
    $("#toF").click(function() {
      document.getElementById("temp").innerHTML = fTemp + "°"; });
     
    // gets current date and time
  var Time = new Date();
  var hours = Time.getHours();
  var stdHours;
    if (hours > 12 ) {
      stdHours = hours - 12;
    }
  var minutes = Time.getMinutes();
  var month = Time.getMonth();
  var day = Time.getDay();
  var year = Time.getFullYear();
  
  $("#time").html(stdHours + " : " + minutes);
  $("#date").html(month + " / " + day + " / " + year);
    
  //swaps backgrounds for different time of day 
  if (hours > 18 && currentWeather === "Clear") {
    $("body").css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/95/1d/26/951d26560bf254bc3534d3866a977ff6.jpg)")
    $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/halloween-flar/2048/909_-_Half_Moon-128.png)")
  }
  if (hours < 18 && currentWeather === "Clear" ) {
    $("body").css("background-image", "url(http://www.planwallpaper.com/static/images/HD-Wallpapers1.jpeg)")
    $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/picons-weather/57/06_sunny-128.png)")
  }
  if (currentWeather === "Rain" ) {
   $("body").css("background-image", "url(http://wallpapercave.com/wp/0Rjh2Oo.jpg)")
   $(".icon").css("background-image", "url(http://www.freeiconspng.com/uploads/cloud-rain-icon-2.png)")
  }
  if (currentWeather === "Clouds" || currentWeather === "clouds" ) {
   $("body").css("background-image", "url(http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/01/Dark-Clouds-HD-Wallpapers-Desktop-Computer.jpg)")
   $(".icon").css("background-image", "url(https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Cloud_weather_sun_rain_upload_download_vector.png)")
  }
  if (currentWeather === "Extreme" ) {
   $("body").css("background-image", "url(http://wallpapercave.com/wp/5gXMS70.jpg)")
   $(".icon").css("background-image", "url(https://cdn4.iconfinder.com/data/icons/proglyphs-weather/512/Storm-512.png)")
  }
    
      
  });
});

//latitude: 38.5131611
//longitude: -89.9665381

/*


*/