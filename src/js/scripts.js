	(function($) {

	// .videos слайдер с видео
	window_resize();



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

		// спойлер списка видео на мобильных

		$('.video-list .btn').click(function () {
			$('.video-list .videos').toggleClass('videos--load-more');
		});

	}(jQuery));

	// .videos слайдер с видео
	function window_resize(){
		var page_w = $(window).width();

		
		if (page_w > 768) {
			$('.video-list .videos').slick({
				mobileFirst: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				pauseOnHover: true,	
				autoplay: true,
				arrows: false,
				dots: false,	
				prevArrow: '<button type="button" class="slick-arrow--prev"></button>',
				nextArrow: '<button type="button" class="slick-arrow--next"></button>',
				responsive: [	
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						mobileFirst: true,
						pauseOnHover: true,	
						autoplay: true,
						arrows: true,
						dots: false,	
						prevArrow: '<button type="button" class="slick-arrow--prev"></button>',
						nextArrow: '<button type="button" class="slick-arrow--next"></button>'
					}
				},
				{
					breakpoint: 968,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						mobileFirst: true,
						pauseOnHover: true,	
						autoplay: true,
						arrows: true,
						dots: false,	
						prevArrow: '<button type="button" class="slick-arrow--prev"></button>',
						nextArrow: '<button type="button" class="slick-arrow--next"></button>'
					}
				}
				]
			});
		}


	}