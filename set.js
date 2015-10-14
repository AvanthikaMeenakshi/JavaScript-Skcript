function setHomeAddress(){
		if (document.getElementById("homepostalcheck").checked)
	{
		var text = document.getElementById("postaladdress").value;
		document.getElementById("homeaddress").value = text;
		document.getElementById("homeaddress").disabled = true;
	}
	else
	{
	document.getElementById("homeaddress").disabled = false;
	}
	
}

