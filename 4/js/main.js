//Открытие меню
let menuBtn = document.querySelector(".main-header__toggle");
let menu = document.querySelector(".main-nav")
menuBtn.addEventListener("click", function(){
	menu.classList.toggle("main-nav--active");
  menuBtn.classList.toggle("main-header__toggle--opened");
  menuBtn.classList.toggle("main-header__toggle--close");
})

// Слайдер заготовка
// document.querySelector(".slider__input").addEventListener("input", function(){
//   document.querySelector(".slider__cat-slim").style.width = this.value + "%"
// })
