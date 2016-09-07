"use strict";

(function(){

	// init WoW
	new WOW().init();

	// preload
	$(window).on('load', function() {
	    var $preloader = $('.preloader');
	    $preloader.delay(5000).fadeOut('slow');
	});

})();