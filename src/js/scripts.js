(function($) {

	// .videos слайдер с видео

	$('.video-list .videos').slick({
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,		
		slidesToShow: 1,
		autoplay: true,
		arrows: false,
		dots: false,	
		rows: 3,
		responsive: [			
		  	{
		  		breakpoint: 768,
		  		settings: {
		  			slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
					dots: false,
					rows: 1,
					autoplay: true,
					infinite: true,
					prevArrow: '<button type="button" class="slick-arrow--prev"></button>',
					nextArrow: '<button type="button" class="slick-arrow--next"></button>',
		  		}
		  	},
		  	{
		  		breakpoint: 968,
		  		settings: {
		  			slidesToShow: 3,
					slidesToScroll: 3,
					arrows: true,
					dots: false,
					rows: 1,
					autoplay: true,
					infinite: true,
					prevArrow: '<button type="button" class="slick-arrow--prev"></button>',
					nextArrow: '<button type="button" class="slick-arrow--next"></button>',
		  		}
		  	}
		 ]
	});

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
