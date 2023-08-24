//Карта

let mapGoogle = document.querySelector(".map__google");
let center = [59.938631, 30.3230374];

mapGoogle.classList.add("map__google-none");

    function init(){
        var myMap = new ymaps.Map("map-yandex", {
            center: center,
            zoom: 14
        });

        let placemark320 = new ymaps.Placemark(center, {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-logo320.svg",
          iconImageSize: [52, 52],
          iconImageOffset: [-27, -40]
        });

        myMap.controls.remove("geolocationControl");
        myMap.controls.remove("searchControl");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("typeSelector");
        myMap.controls.remove("fullscreenControl");
        myMap.controls.remove("zoomControl");
        myMap.geoObjects.add(placemark320);
      }

    function init1(){
      var myMap = new ymaps.Map("map-yandex", {
          center: center,
          zoom: 15
      });

      let placemark768 = new ymaps.Placemark(center, {}, {
        iconLayout: "default#image",
        iconImageHref: "img/map-logo768.svg",
        iconImageSize: [113, 106],
        iconImageOffset: [-57, -84]
      });

      myMap.controls.remove("geolocationControl");
      myMap.controls.remove("searchControl");
      myMap.controls.remove("trafficControl");
      myMap.controls.remove("typeSelector");
      myMap.controls.remove("fullscreenControl");
      myMap.controls.remove("zoomControl");
      myMap.geoObjects.add(placemark768);
    }

    if(window.innerWidth < 767) {
      ymaps.ready(init);
    } else if (window.innerWidth >= 767){
      ymaps.ready(init1);
    }
