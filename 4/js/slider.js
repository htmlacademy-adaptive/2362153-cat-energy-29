document.querySelector(".slider__input").addEventListener("input", function(){
  document.querySelector(".slider__cat-slim").style.width = this.value + "%";
  document.querySelector(".slider__button").style.left = this.value + "%";
})

document.querySelector(".slider__button").addEventListener("onmousedown", function(){
  document.querySelector(".slider__cat-slim").style.width = this.value + "%";
  document.querySelector(".slider__button").style.left = this.value + "%";
})
