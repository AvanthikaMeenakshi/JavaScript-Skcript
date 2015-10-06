<html>
<body>
<p id="myWeather"></p>
<script type="text/javascript" src="jquery-2.1.4.min.js">
	</script>
<script>
var text = '{"coord":{"lon":80.16,"lat":13.03},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":306.15,"pressure":1008,"humidity":63,"temp_min":306.15,"temp_max":306.15},"visibility":7000,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1444111800,"sys":{"type":1,"id":7834,"message":0.0076,"country":"IN","sunrise":1444091331,"sunset":1444134364},"id":1465622,"name":"Porur","cod":200}';
obj = JSON.parse(text);
document.getElementById("myWeather").innerHTML =
obj.coord.lon+ " " + obj.coord.lat + " " + obj.weather.id + " " + obj.weather.main + "" + obj.weather.description + "" + obj.weather.icon + " " + obj.main.temp +""+ obj.main.pressure +""+ obj.main.humidity +""+ ;
</script>

</body>
</html>