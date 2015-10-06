$("#myBtn").click(function(event)
{
		event.preventDefault();
		var city = $('#someText').val();
		var table= $('#thisTable');
		$.ajax({
			method: "POST",
			url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric",
			dataType: "JSON",
			success: function(data){
				temp = data["main"]["temp"]
				table.append('<tr><td>'+city+'</td><td>'+temp+'</td></tr>')
			}, 
			error: function(data){
				alert("404 not found");
			}
		});
		
});
//alert( "Handler for .click() called." );
//});
