const menu__icon = document.getElementById("menu__icon")
const vertical__menu = document.querySelector(".vertical__menu")

menu__icon.addEventListener("click" , () => {
  vertical__menu.classList.toggle("open")
  menu__icon.classList.toggle("change")
})