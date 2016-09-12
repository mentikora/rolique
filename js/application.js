"use strict";

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

// preload
$(window).on('load', function() {

  // a little trick if user refresh in the middle/bottom 
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 100);

  // add class for removing body scroll onload
  $('body').addClass('overflowed');

  var $preloader = $('.preloader');
  $preloader.delay(6000).fadeOut('slow');

  animation(0)
});

(function(){

  // get bodyscrollback
  setTimeout(function() {
    $('body').removeClass("overflowed");
  }, 6000);

  // scroll to section
  $('#menu span').on('click', function(){
    var data = $(this).data('scroll');
    $('html, body').animate({
      scrollTop: $(data).offset().top
    }, 800);
  });

  // show menu on mobile
  $('.mobile_toggle_btn').on('click', function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#menu').slideUp();
    } else{
      $(this).addClass('open');
      $('#menu').slideDown();
    }
  });

  // form submit
  $( "form" ).submit( function(e) {
    e.preventDefault();

    if ( $( "input.form-controll" ).val().length > 0 ) {
      $('.submit_btn').addClass('success');
      $('.submit_btn').val("message sent");
      return;
    } else{
      alert('Enter something');
    }

  });


})();