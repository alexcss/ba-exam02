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

	$('.open-search').click(function(e) {
		$('html').click(function(event) {
			//check up the tree of the click target to check whether user has clicked outside of menu
			if ($(event.target).parents('.search').length==0) {
				// your code to hide menu
				$('#show-search').prop('checked', false);
				//this event listener has done its job so we can unbind it.
				$(this).unbind(event);
			}

		})
	});
	$('.search-submit').click(function(e){
		e.preventDefault();
		if($('.search-box').val() != ''){
			$('.search-form').submit();
		} else {
			$('#show-search').prop('checked', false);
		}
	});
	//$(".search").blur(function(){
	//	$('#show-search').prop('checked', false);
	//});
});

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

var marker1 = new google.maps.Marker({
	position: new google.maps.LatLng(32.022683,-81.074004),
	icon: 'images/pin.png'
});
marker1.setMap(gMap);

var marker2 = new google.maps.Marker({
	position: new google.maps.LatLng(32.017225,-81.073104),
	icon: 'images/pin.png'
});
marker2.setMap(gMap);