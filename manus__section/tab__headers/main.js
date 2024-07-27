// eventListener
function openCity(cityName, elem, color) {
	let contents = document.getElementsByClassName("tabContent");
	let buttons = document.getElementsByClassName("tabLink");

	// display none to all contents
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}

	// remove button backgraound color
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "";
	}

	// show specific city by clicking
	document.getElementById(cityName).style.display = "block";

	// set button backgraound color
	elem.style.backgroundColor = color;
}

// initially open city
document.getElementById("defaultOpen").click();
