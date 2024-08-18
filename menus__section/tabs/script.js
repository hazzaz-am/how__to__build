// open with first reload
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
	let tabContent = document.getElementsByClassName("tabcontent");
	let tabLinks = document.getElementsByClassName("tablinks");

	// hide tabcontents
	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

	// remove active from tablinks
	for (let i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace("active", "");
	}

	// show current tab and add active class
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
