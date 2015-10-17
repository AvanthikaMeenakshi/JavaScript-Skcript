function checkThis(event)
{
	var nameText = document.getElementById("myUserName");
	var password1 = document.getElementById("myPwd");
	document.getElementById("myUserName").style.visibility = 'hidden' ;
	document.getElementById("next").style.visibility = 'hidden';
	document.getElementById("myPwd").style.visibility = 'visible' ;
	document.getElementById("mySub").style.visibility = 'visible' ;
	password1.focus();
	event.preventDefault();
}

function finish()
{
	window.alert("Form Submitted")
}