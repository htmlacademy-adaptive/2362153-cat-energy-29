//Открытие меню

let menuBtn = document.querySelector(".main-header__toggle");
let menu = document.querySelector(".main-header__nav");

menu.classList.remove("main-nav--nojs");
menu.classList.add("main-nav");
document.querySelector(".main-nav__list").style.position = "absolute";
menuBtn.classList.add("main-header__toggle--close");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("main-nav--active");
  menuBtn.classList.toggle("main-header__toggle--opened");
  menuBtn.classList.toggle("main-header__toggle--close");
})
