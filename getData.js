$("#MyBtn").click(function(event)
{ 
		var req = $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=chennai",
		dataType: "JSON"
	});
	$("#demo").html(event.result);
	table.append('<tr><td>' + req + '</td></tr>');
});


//function loadData() {
 // var xhttp = new XMLHttpRequest();
  //xhttp.onreadystatechange = function() {
    //if (xhttp.readyState == 4 && xhttp.status == 200) {
      //document.getElementById("demo").innerHTML = xhttp.responseText;
    //}
  //}
  //xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q={chennai}", true);
  //xhttp.send();
//}