//Открытие меню

let menuBtn = document.querySelector(".main-header__toggle");
let menu = document.querySelector(".main-header__nav");

menu.classList.remove("main-nav--nojs");
menu.classList.add("main-nav");
document.querySelector(".main-nav__list").style.position = "absolute";
menuBtn.classList.add("main-header__toggle--close");
menuBtn.style.display = "block";

if(window.innerWidth < 767) {
  menuBtn.style.display = "block";
  document.querySelector(".main-header__wrapper").style.borderBottom = "1px solid var(--color-grey450)";
} else {
  menuBtn.style.display = "none";
};

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("main-nav--active");
  menuBtn.classList.toggle("main-header__toggle--opened");
  menuBtn.classList.toggle("main-header__toggle--close");
})
