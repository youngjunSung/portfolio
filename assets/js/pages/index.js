$(function () {
	var secSwipder = new Swiper('.swiper-section', {
		slidesPerView: 1,
		speed: 700,
		direction: 'vertical',
		simulateTouch: false,
		mousewheel: {
			enable: true,
		},
	});
	$('.contact > li').click(function () {
		var num = $(this).index();
		$('.contact > li > span').removeClass('active');
		$(this).find('span').addClass('active');
		secSwipder.slideTo(num, 500);
	});
	secSwipder.on('slideChange', function () {
		$('.contact > li > span').removeClass('active').eq(secSwipder.activeIndex).addClass('active');
		if (secSwipder.activeIndex == 0) {
			$('.swiper-main').removeClass('fadeOutRight').addClass('fadeInUp');
		} else {
			$('.swiper-main').removeClass('fadeInUp').addClass('fadeOutRight');
		}
		if (secSwipder.activeIndex == 1) {
			$('.about-list > li').removeClass('fadeOutRight').addClass('fadeInRight');
		} else {
			$('.about-list > li').removeClass('fadeInRight').addClass('fadeOutRight');
		}
		if (secSwipder.activeIndex == 2) {
			$('.contact-form').removeClass('fadeOutRight').addClass('zoomIn');
		} else {
			$('.contact-form').removeClass('zoomIn').addClass('fadeOutRight');
		}
	});
	var mainSwiper = new Swiper('.swiper-main', {
		loop: false,
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: false,
		speed: 600,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.main-nav',
			clickable: false
		},
		breakpoints: {
			1220: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			700: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
			500: {
				slidesPerView: 1.3,
				spaceBetween: 20,
			},
		}
	});

	var $name = document.querySelector('#name'),
		$email = document.querySelector('#email'),
		$msg = document.querySelector('#msg');

	function onEmailFocus(e) {
		e.target.nextElementSibling.classList.add("active");
	}

	function onEmailBlur(e) {
		if (e.target.value == "") {
			e.target.nextElementSibling.classList.remove("active");
		}
	}

	$name.addEventListener('focus', onEmailFocus);
	$name.addEventListener('blur', onEmailBlur);
	$email.addEventListener('focus', onEmailFocus);
	$email.addEventListener('blur', onEmailBlur);
	$msg.addEventListener('focus', onEmailFocus);
	$msg.addEventListener('blur', onEmailBlur);

	var a = $("#main_contact_form");
	$(a).submit(function (c) {
		c.preventDefault();
		var d = $(a).serialize();
		$.ajax({
			type: "POST",
			url: $(a).attr("action"),
			data: d
		}).done(function (a) {
			alert('문의 접수가 완료되었습니다.');
		}).fail(function (a) {
			alert('보내기 실패하였습니다.');
		})
	})
});