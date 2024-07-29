function filterMenu() {
	let input, filterText, ul, li, a;

	input = document.getElementById("searchInput");
	filterText = input.value.toUpperCase();
	ul = document.getElementById("menu");
	li = ul.getElementsByTagName("li");

	for (let i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];

		if (a.innerText.toUpperCase().indexOf(filterText) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
