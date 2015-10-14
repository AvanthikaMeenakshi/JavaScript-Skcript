function checkThis(event){
	var nameText = document.getElementById("fullname");
	var addText = document.getElementById("streetaddr");
	var pocode = document.getElementById("postcode");
	var mail = document.getElementById("email").value;
	var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    
	if (nameText.value == "")
	{
		document.getElementById("nameerrormsg").style.visibility = 'visible' ;
		nameText.focus();
		event.preventDefault();
	}
	
	if (addText.value == "") 
	{	
		document.getElementById("addrerrormsg").style.visibility='visible';
		addText.focus();
		event.preventDefault();
	}

  	if (pocode.value == 0) 
  		{
  			document.getElementById("posterrormsg").style.visibility='visible';
			pocode.focus();
			event.preventDefault();
  		}

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
        alert("Not a valid e-mail address");
        event.preventDefault();
    }

  	else
  		{
  			window.alert("Form submitted");
  		}
}