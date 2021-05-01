$(function () {
	$(window).load(function () {
		$('.pre-loader').fadeOut();
	});

	$('.thumbnail-box').click(function () {
		var num = $(this).parent().index();
		projectSwiper.slideTo(num, 0);
		$('.detail-modal').addClass('active');
	});

	$('.close-btn').click(function () {
		$('.detail-modal').removeClass('active');
	});

	$('.close-btn').one('click',function () {
		if (getLastUrl.indexOf('project') == 1) {
			var stateObj = {foo : "bar"};
			history.pushState(stateObj, "page 2", "index.html");
		}
	});

	function removeUrl() {
		var stateObj = {foo : "bar"};
		history.pushState(stateObj, "page 2", "index.html");
	}

	var secSwiper = new Swiper('.swiper-section', {
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
		secSwiper.slideTo(num, 500);
	});
	secSwiper.on('slideChange', function () {
		$('.contact > li > span').removeClass('active').eq(secSwiper.activeIndex).addClass('active');
		if (secSwiper.activeIndex == 0) {
			$('.swiper-main').removeClass('fadeOutRight').addClass('fadeInUp');
		} else {
			$('.swiper-main').removeClass('fadeInUp').addClass('fadeOutRight');
		}
		if (secSwiper.activeIndex == 1) {
			$('.about-list > li').removeClass('fadeOutRight').addClass('fadeInRight');
		} else {
			$('.about-list > li').removeClass('fadeInRight').addClass('fadeOutRight');
		}
		if (secSwiper.activeIndex == 2) {
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

	var projectSwiper = new Swiper('.swiper-project', {
		slidesPerView: 1,
		// effect: 'fade',
		simulateTouch: false,
		autoHeight: true,
		speed: 700,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
	});

	projectSwiper.on('slideChange', function () {
		$('html, body').animate({scrollTop:0},300);
	});

	$('.swiper-button-next, .swiper-button-prev').click(function () {
		// $('html, body').scrollTop(0);
		$('html, body').animate({scrollTop:0},300);
		projectSwiper.updateAutoHeight(0);
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

	// var a = $("#main_contact_form");
	// $(a).submit(function (c) {
	// 	c.preventDefault();
	// 	var d = $(a).serialize();
	// 	$.ajax({
	// 		type: "POST",
	// 		url: $(a).attr("action"),
	// 		data: d
	// 	}).done(function (a) {
	// 		alert('문의 접수가 완료되었습니다.');
	// 	}).fail(function (a) {
	// 		alert('보내기 실패하였습니다.');
	// 	})
	// });

	var getUrl = location.href, getLastUrl = getUrl.slice(getUrl.lastIndexOf('/') + 1, getUrl.length);

	if (getLastUrl == '#project1') {
		projectSwiper.slideTo(0, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project2') {
		projectSwiper.slideTo(1, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project3') {
		projectSwiper.slideTo(2, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project4') {
		projectSwiper.slideTo(3, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project5') {
		projectSwiper.slideTo(4, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project6') {
		projectSwiper.slideTo(5, 0);
		$('.detail-modal').addClass('active');
	} else if (getLastUrl == '#project7') {
		projectSwiper.slideTo(6, 0);
		$('.detail-modal').addClass('active');
	}
});
