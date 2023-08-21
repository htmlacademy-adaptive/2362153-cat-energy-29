//Открытие меню

let menuBtn = document.querySelector(".main-header__toggle");
let menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--nojs");
menuBtn.classList.remove("main-nav--nojs");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("main-nav--active");
  menuBtn.classList.toggle("main-header__toggle--opened");
  menuBtn.classList.toggle("main-header__toggle--close");
})
