function checkThis(){
	var nameText = document.getElementById("fullname");
	if (nameText.value == 0)
	{
		document.getElementById("nameerrormsg").style.visibility = 'visible' ;
		nameText.focus();
	}
	var addText = document.getElementById("streetaddr");
	if (addText.value == 0) 
	{
		document.getElementById("addrerrormsg").style.visibility='visible';
		addText.focus();
		return false;
	}
	var quantity = document.getElementById("quantity");
	if (isNaN(quantity.value))
  	{
    	window.alert("Enter valid number");
    	return false;
  	}
  	else{
		window.alert("Submitted!");
	}
}