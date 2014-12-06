jQuery(function($){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#to-top').addClass('show');
		} else {
			$('#to-top').removeClass('show');
		}
	});

	//Click event to scroll to top
	$('#to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	var reviewsCaroussel = $('.reviews-carousel');
	function initCycle() {
		var width = $(document).width(); // Getting the width and checking my layout
		if ( width < 768 ) {
			reviewsCaroussel.cycle({
				fx: 'carousel',
				speed: 600,
				slides: '> .review-slide',
				next: '.reviews .next',
				prev: '.reviews .prev',
				fluid: true,
				carouselVisible: 1
			});
			// console.log('Init Mobile');
		} else {
			reviewsCaroussel.cycle({
				fx: 'carousel',
				speed: 600,
				slides: '> .review-slide',
				next: '.reviews .next',
				prev: '.reviews .prev',
				carouselVisible: 3
			});
		}
	}
	initCycle();

	function reinit_cycle() {
		var width = $(window).width(); // Checking size again after window resize
		if ( width < 768 ) {
			reviewsCaroussel.cycle('destroy');
			reinitCycle(1);
		} else {
			reviewsCaroussel.cycle('destroy');
			reinitCycle(3);
		}
	}
	function reinitCycle(visibleSlides) {
		reviewsCaroussel.cycle({
			fx: 'carousel',
			speed: 600,
			slides: '> .review-slide',
			next: '.reviews .next',
			prev: '.reviews .prev',
			fluid: true,
			carouselVisible: visibleSlides
		});
	}
	var reinitTimer;
	$(window).resize(function() {
		clearTimeout(reinitTimer);
		reinitTimer = setTimeout(reinit_cycle, 100); // Timeout limits the number of calculations
	});

});
//
//window.smoothScrollTo = (function () {
//	var timer, start, factor;
//
//	return function (target, duration) {
//		var offset = window.pageYOffset,
//			delta  = target - window.pageYOffset;
//		duration = duration || 400;
//		start = Date.now();
//		factor = 0;
//
//		if( timer ) {
//			clearInterval(timer);
//		}
//
//		function step() {
//			var y;
//			factor = (Date.now() - start) / duration;
//			if( factor >= 1 ) {
//				clearInterval(timer);
//				factor = 1;
//			}
//			y = factor * delta + offset;
//			window.scrollBy(0, y - window.pageYOffset);
//		}
//
//		timer = setInterval(step, 10);
//		return timer;
//	};
//}());

/* Add Map */
var myOptions = {
	center: new google.maps.LatLng(32.0215367, -81.0821146),
	zoom: 14,
	disableDefaultUI: true,
	zoomControl: true

};
gMap = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(32.0215367, -81.0821146),
	icon: 'images/pin.png'
});
marker.setMap(gMap);