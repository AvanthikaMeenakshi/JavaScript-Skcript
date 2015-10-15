function showDate(event) {
	// window.alert("Yup ! This function is being called");
	var cal1 = new YAHOO.widget.Calendar("cal1Container");
	cal1.render();
	event.preventDefault();
}