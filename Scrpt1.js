$("#myBtn").click( function(event)
{
		event.preventDefault();
		var city = $('#someText').val();
		var table= $('#thisTable');
		$.ajax({
			method: "POST",
			url: "http://api.openweathermap.org/data/2.5/find?q="+city+"&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f",
			dataType: "JSON",
			success: function(data){
				list = data.list[0];
				var temp = list["main"]["temp"];
				table.append('<tr><td>'+city+'</td><td>'+temp+'</td></tr>');
			}, 
			error: function(data){
				alert("404 not found");
			}
		});
		
});