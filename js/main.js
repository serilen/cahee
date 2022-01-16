;(function(){
	"use strict";
//Проверка на устройство пользователя
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
			);
	}
};

//Если пользователь использует тачскрин, то показываем стрелочку для вложенного меню
if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll(".menu__arrow");
		//Проверка на существование элементов
		if (menuArrows.length > 0) {
			for (let i = 0; i < menuArrows.length; i++) {
				const menuArrow = menuArrows[i];

				menuArrow.addEventListener('click', function(event) {
					menuArrow.parentElement.classList.toggle('_active');
				})
			}
		}
	}
	else {
		document.body.classList.add('_pc');
	}

// Меню бургер

const burgerMenu = document.querySelector(".menu__burger-button");
const bodyMenu = document.querySelector(".menu__body");
//Проверка на существование элементов
if (burgerMenu) {
	burgerMenu.addEventListener('click', function(event) {
		document.body.classList.toggle('locked');
		burgerMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
	})
}

$(document).ready(function() {
//Плавная прокрутка к якорю
$("body").on("click","a", function (event) {

//При нажатии на ссылку убираем экран меню
	if ($('.menu__burger-button').hasClass('_active')) {
		$('.menu__body').removeClass('_active');
		$('.menu__burger-button').removeClass('_active');
		$('body').removeClass('locked');
	};
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //узнаем высоту меню от начала страницы
        let heightMenu = $(".header__wrap").outerHeight();
        //анимируем переход на расстояние - (top-height) -  за 1500 мс
        $('body,html').animate({scrollTop: (top - heightMenu)}, 1500);
     });
})

})();