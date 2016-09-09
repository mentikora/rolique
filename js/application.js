"use strict";




(function(){

  // init WoW
  new WOW().init();

  // preload
  $(window).on('load', function() {
      var $preloader = $('.preloader');
      $preloader.delay(6000).fadeOut('slow');
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
        $(this).css('background', colors[i])
       i++;
     }
   };
   $('.animation_wrapper')
    .find('.animation')
    .animate({ left: 280 }, options)
    .animate({ left: 0,},
    $.extend(true, {}, options, {
      complete: function() {
        $(this).css('background', colors[i]);
        i++;
        animation(i);
      }
     })
    );
  };

  animation(0)

  // scroll to section
  $('#menu span').on('click', function(){
    var data = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(data).offset().top
    }, 800);
  });


})();