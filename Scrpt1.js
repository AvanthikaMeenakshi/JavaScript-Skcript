$(document).submit( function(event)
{
		event.preventDefault();
		var x = $('#someText').val();
		var table= $('#thisTable');
		table.append('<tr><td>' + x + '</td></tr>');
});
//alert( "Handler for .submit() called." );
//});
