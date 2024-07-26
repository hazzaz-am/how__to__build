
// active with render
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
	let buttons = document.getElementsByClassName("tabLink");
	let contents = document.getElementsByClassName("tabContent");

	// initially display none to all contents
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}

	// initially remove active class
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace("active", " ");
	}

	// set display block to content & active class to button
	document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active"
  
}
