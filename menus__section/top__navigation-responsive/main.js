function openMenu() {
	console.log("clicked");
	let navbar = document.getElementById("navbar");

	if (navbar.className === "navbar") {
		navbar.className += " responsive";
	} else {
		navbar.className = "navbar";
	}
}
