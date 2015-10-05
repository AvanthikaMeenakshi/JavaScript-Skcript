function Display()
{
		var x = document.getElementById('someText').value;
		var table=document.getElementById('thisTable');
			var row = table.insertRow(-1);
			var cell = row.insertCell(-1);
			row.innerHTML= x;
}
