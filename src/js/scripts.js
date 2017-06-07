(function($) {
  
 //  $('.slider--full-screen').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	dots: true,
	// 	autoplay: true,
	// 	infinite: true,
	// 	prevArrow: '<button type="button" class="slider__arrow--prev"></button>',
	// 	nextArrow: '<button type="button" class="slider__arrow--next"></button>',
	//     responsive: [
	//   	{
	//   		breakpoint: 1024,
	//   		settings: {
	//   			arrows: false
	//   		}
	//   	}
	//   	]
	// });

  // popup для видео в слайдере

  $(".videos__item").fancybox({
		'padding'		: 0,
		'autoScale'		: false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'title'			: this.title,
		'width'			: 680,
		'height'		: 495,
		'type'			: 'swf',
		'swf'			: {
		   	'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});
  
  // btn--menu показать главное меню на мобильном 

  $('.btn--menu').click(function () {
    $('.header__menu').toggleClass('header__menu--opened');
    $('.btn--menu').toggleClass('btn--menu-opened');
  });

}(jQuery));
