// eventlistener 
function openPage (cityName, elem, color) {
  let contents = document.getElementsByClassName("tabContent")
  let buttons = document.getElementsByClassName("tabLink")

  // display none to all contents
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none"
  }

  // remove background color from button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = ""
  }

  // show specific content
  document.getElementById(cityName).style.display = "block"

  // set background color to button
  elem.style.backgroundColor = color
}

// initially open
document.getElementById("defaultOpen").click()