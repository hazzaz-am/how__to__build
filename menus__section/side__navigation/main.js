function closeNav() {
	let buttons = document.getElementsByClassName("button");
	let allButtons = document.getElementById("buttons");
	let activeButton = allButtons.getElementsByClassName("active");

	// reset the width
	document.getElementById("nav__menu").style.width = "0";

	// checking if button has specific class
	if (activeButton[0]?.classList.contains("push__canvas")) {
		document.getElementById("buttons__content").style.marginLeft = "0";
	} else if (activeButton[0]?.classList.contains("full__width-nav")) {
		document.getElementById("nav__menu").style.textAlign = "normal";
	} else if (activeButton[0]?.classList.contains("canvas__opacity")) {
		document.getElementById("buttons__content").style.marginLeft = "0";
		document.body.style.backgroundColor = "white";
	}

	// remove active class from all buttons
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace("active", "");
	}
}

// open navigation
function openNav() {
	document.getElementById("nav__menu").style.width = "250px";
}

// full width navigation menu open
function fullWidthNav() {
	document.getElementById("full__width-nav").classList.add("active");
	document.getElementById("nav__menu").style.width = "100%";
	document.getElementById("nav__menu").style.textAlign = "center";
}

// navigation menu open with pushing main content
function pushCanvas() {
	document.getElementById("push__canvas").classList.add("active");
	document.getElementById("nav__menu").style.width = "250px";
	document.getElementById("buttons__content").style.marginLeft = "250px";
}

// navigation menu open with pushing main content with opacity
function pushCanvasOpacity() {
	document.getElementById("canvas__opacity").classList.add("active");
	document.getElementById("nav__menu").style.width = "250px";
	document.getElementById("buttons__content").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
