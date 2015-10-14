function checkForm() 
{
	  if ((document.getElementById("optstraw").checked == false)&&(document.getElementById("optblue").checked== false))
		{
			window.alert("Please choose your favourite berry!");
			return false;
		}
		else
		{
			window.alert("Thanks For Choosing");
			return true;
		}
}