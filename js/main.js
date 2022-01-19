;(function(){
	"use strict";
	$(document).ready(function() {

// Меню бургер

$("#burger_button").on('click', function(event) {
	$('body').toggleClass('hidden');
	$('#burger_button').toggleClass('burger-button--active');
	$("#nav").toggleClass('nav--active');
})


//Плавная прокрутка к якорю
$("body").on("click","a", function (event) {

//При нажатии на ссылку убираем экран меню
if ($("#burger_button").hasClass('burger-button--active')) {
	$("#nav").removeClass('nav--active');
	$("#burger_button").removeClass('burger-button--active');
	$('body').removeClass('hidden');
}
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
        //убираем прозрачный фон у меню при переходе по ссылке
        $('header').css('background-color', '#fff');
     });

//Если скролим вниз меню делаем непрозрачным
$(window).scroll(function() {
	let scrolled = $(window).scrollTop(),
	scrollPrev = 0;

	if ( scrolled > 70 && scrolled > scrollPrev ) {
		$('.header').css('background-color', '#fff');
	} else {
		$('.header').css('background-color', 'transparent');
	}
	scrollPrev = scrolled;
});


//стрелку подключаем на выпадающее меню
$("#arrow").on("click", function (event) {
	$('#sub_list').toggleClass("menu-list__sub-list--active");
})


})


})();