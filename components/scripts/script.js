$(function() {
	var topoffset = 43;

	var isTouch = 'ontouchstart' in document.documentElement;

	// window height
	var wheight = $(window).height(); // get height of window

	$('.fullheight').css('height', wheight);

	$(window).resize(function() {
		var wheight = $(window).height(); // get height of window

		$('.fullheight').css('height', wheight);
	}); // on resize

	// Animated window scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      }
    }
  });

	// highlighted navigation
	$(window).scroll(function() {

		var windowpos = $(window).scrollTop()+topoffset;
		$('#nav li a').removeClass('active');

		if (windowpos > $('#hotelinfo').offset().top-topoffset) {
			$('#nav li a').removeClass('active');
			$('a[href$="#hotelinfo"]').addClass('active');
		}

		if (windowpos > $('#rooms').offset().top-topoffset) {
			$('#nav li a').removeClass('active');
			$('a[href$="#rooms"]').addClass('active');
		}

		if (windowpos > $('#dining').offset().top-topoffset) {
			$('#nav li a').removeClass('active');
			$('a[href$="#dining"]').addClass('active');
		}

		if (windowpos > $('#events').offset().top-topoffset) {
			$('#nav li a').removeClass('active');
			$('a[href$="#events"]').addClass('active');
		}

		if (windowpos > $('#attractions').offset().top-topoffset) {
			$('#nav li a').removeClass('active');
			$('a[href$="#attractions"]').addClass('active');
		}
	});

	//set up ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  // pin the navigation
  var pin = new ScrollScene({
  	triggerElement : '#nav'
  }).setPin('#nav').addTo(controller);

  if(!isTouch) {
	// room animations
	  var roomOrigin = {
	  	bottom: -700,
	  	opacity: 0,
	  	scale: 0
	  };

	  var roomDest = {
	  	repeat: 1,
	  	yoyo: true,
	  	bottom: 0,
	  	opacity: 1,
	  	scale: 1,
	  	ease: Back.easeOut
	  };

	  var roomtween = TweenMax.staggerFromTo(
	  	'#piccadilly .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var roompin = new ScrollScene({
	  	triggerElement: '#piccadilly',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#piccadilly')
	  .setTween(roomtween)
	  .addTo(controller);

	  var room2tween = TweenMax.staggerFromTo(
	  	'#cambridge .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var room2pin = new ScrollScene({
	  	triggerElement: '#cambridge',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#cambridge')
	  .setTween(room2tween)
	  .addTo(controller);

	  var room3tween = TweenMax.staggerFromTo(
	  	'#westminster .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var room3pin = new ScrollScene({
	  	triggerElement: '#westminster',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#westminster')
	  .setTween(room3tween)
	  .addTo(controller);

	  var room4tween = TweenMax.staggerFromTo(
	  	'#oxford .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var room4pin = new ScrollScene({
	  	triggerElement: '#oxford',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#oxford')
	  .setTween(room4tween)
	  .addTo(controller);

	  var room5tween = TweenMax.staggerFromTo(
	  	'#victoria .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var room5pin = new ScrollScene({
	  	triggerElement: '#victoria',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#victoria')
	  .setTween(room5tween)
	  .addTo(controller);

	  var room6tween = TweenMax.staggerFromTo(
	  	'#manchester .content',
	  	1,
	  	roomOrigin,
	  	roomDest
	  );

	  var room6pin = new ScrollScene({
	  	triggerElement: '#manchester',
	  	offset: -topoffset,
	  	duration: 500
	  }).setPin('#manchester')
	  .setTween(room6tween)
	  .addTo(controller);
  } // not touch device

  // attractions
  var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 },
      {delay: 1, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset : -topoffset
  }).setTween(attractionstween)
    .addTo(controller);

}); // on load

