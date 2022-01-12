;(function(){
	"use strict";

	$(document).ready(function() {

		$("#main_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
     });

		$(window).resize(function () {
			let width = $('body').innerWidth()
			if(width < 768) {
				$("#button_burger_line").removeClass("burger-button__line--no-visibilite");
				$("#button_burger").removeClass("burger-button--active");
				$("#main_menu").addClass("sr-only").removeClass('main-menu--show');
			} else {
				$("#main_menu").removeClass("sr-only").removeClass('main-menu--show');
				
			}
		})
	});


	const buttonBurger = document.querySelector('#button_burger');
	const mainMenu = document.querySelector('#main_menu');
	const buttonBurgerLine = document.querySelector('#button_burger_line');


	buttonBurger.addEventListener('click', () => {
		mainMenu.classList.toggle("sr-only");
		mainMenu.classList.toggle("main-menu--show");
		buttonBurgerLine.classList.toggle("burger-button__line--no-visibilite");
		buttonBurger.classList.toggle("burger-button--active");
	});
	

})();
