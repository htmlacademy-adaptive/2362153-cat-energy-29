//Открытие меню
let menuBtn = document.querySelector(".main-header__toggle");
let menu = document.querySelector(".main-nav");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("main-nav--active");
  menuBtn.classList.toggle("main-header__toggle--opened");
  menuBtn.classList.toggle("main-header__toggle--close");
})

//Карта
let center = [59.938631, 30.3230374];

    function init(){
        var myMap = new ymaps.Map("map-test", {
            center: center,
            zoom: 14
        });

        let placemark = new ymaps.Placemark(center, {}, {
          iconLayout: "default#image",
          iconImageHref: "../img/logo_map.svg",
          iconImageSize: [52, 52],
          iconImageOffset: [-19, -44]
        });

        myMap.geoObjects.add(placemark);
        myMap.controls.remove("geolocationControl");
        myMap.controls.remove("searchControl");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("typeSelector");
        myMap.controls.remove("fullscreenControl");
        myMap.controls.remove("zoomControl");
        myMap.behaviors.disable("scrollZoom");
    }

    ymaps.ready(init);


