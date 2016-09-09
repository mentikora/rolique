"use strict";

(function(){

	// init WoW
	new WOW().init();

	// preload
	$(window).on('load', function() {
	    var $preloader = $('.preloader');
	    $preloader.delay(7000).fadeOut('slow');
	});

  // preload animation
  var colors = ['red', 'black', 'white', 'green', 'yellow', 'orange', 'brown', 'blue', 'grey', 'inherit']; 
  function animation(i) {
    if (i > colors.length) {
      return
    } 
    
    var options = {
        duration: 500,
        easing: 'linear',
        complete: function(){
          // if (i >= colors.length){i = 0;}
          $(this).css('background', colors[i])
         i++;
       }
     };
     $('.test_wrapper')
        .find('.test')
        .animate({
              left: 280
           },
           options
        )

        .animate({
              left: 0,
           },
           $.extend(true, {}, options, {
              complete: function() {
                // if (i >= colors.length){i = 0;}
                $(this).css('background', colors[i])
               i++;
                 animation(i);
              }
           })
        );
  };

  animation(0)


})();