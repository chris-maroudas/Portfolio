;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  
  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
  $('input, textarea').placeholder();
  
  
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  
  
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  
  
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  
    
    $.fn.foundationTabs             ? $doc.foundationTabs() : null;

    $(window).scroll(function(){


        if($(window).scrollTop()>10){

            $('#leftSidebar').animate({ top: "0px" }, 1200);

        }else{

        }

    });

    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#bottomSidebar").fadeIn();
        }else{
            $("#bottomSidebar").fadeOut();
        }

    });


    $('#bottomSidebar').hover(
        function(){$('#RollUpArrow').fadeIn()}
    );

    $('.row').hover(
        function(){$('#RollUpArrow').fadeOut()}
    );




    /* Project Aikat*/
    $("#morDetailsAikater").click(function(){
        $("#projDetailsOne").slideToggle("slow");
    });

    /* Project FillmyMojo*/
    $("#morDetailsMojo").click(function(){
        $("#projDetailsTwo").slideToggle("slow");
    });




    $('#featuredContentOne').orbit({
        animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
        animationSpeed: 800,                // how fast animtions are
        timer: false, 			 // true or false to have the timer
        resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
        advanceSpeed: 4000, 		 // if timer is enabled, time between transitions
        pauseOnHover: false, 		 // if you hover pauses the slider
        startClockOnMouseOut: false, 	 // if clock should start on MouseOut
        startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
        directionalNav: true, 		 // manual advancing directional navs
        captions: true, 			 // do you want captions?
        captionAnimation: 'fade', 		 // fade, slideOpen, none
        captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
        bullets: false,			 // true or false to activate the bullet navigation
        bulletThumbs: false,		 // thumbnails for the bullets
        bulletThumbLocation: '',		 // location from this file where thumbs will be
        afterSlideChange: function(){}, 	 // empty function
        fluid: true                         // or set a aspect ratio for content slides (ex: '4x3')
    });




    $('#featuredContentTwo').orbit({
        animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
        animationSpeed: 800,                // how fast animtions are
        timer: false, 			 // true or false to have the timer
        resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
        advanceSpeed: 4000, 		 // if timer is enabled, time between transitions
        pauseOnHover: false, 		 // if you hover pauses the slider
        startClockOnMouseOut: false, 	 // if clock should start on MouseOut
        startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
        directionalNav: true, 		 // manual advancing directional navs
        captions: true, 			 // do you want captions?
        captionAnimation: 'fade', 		 // fade, slideOpen, none
        captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
        bullets: false,			 // true or false to activate the bullet navigation
        bulletThumbs: false,		 // thumbnails for the bullets
        bulletThumbLocation: '',		 // location from this file where thumbs will be
        afterSlideChange: function(){}, 	 // empty function
        fluid: true                         // or set a aspect ratio for content slides (ex: '4x3')
    });






  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }




})(jQuery, this);


$(document).ready(function () {


    $('.button1').click(function () {
        $('html, body').animate({scrollTop:$(".mainbartwo").offset().top}, 2000, 'swing');
        return false;
    });





    $('.button2').click(function () {
        $('html, body').animate({scrollTop:$(".mainbarthree").offset().top}, 3000, 'swing');
        return false;
    });


    $('.button3').click(function () {
        $('html, body').animate({scrollTop:$(".mainbarfour").offset().top}, 4000, 'swing');
        return false;
    });


    $('.button4').click(function () {
        $('html, body').animate({scrollTop:$(".mainbarfive").offset().top}, 5000, 'swing');
        return false;
    });







});

(function($) {

    $(window).load(function() {
        $('.row').fadeIn(800);
        $('footer').fadeIn(800);
        $('hr').fadeIn(800);
        $('header').fadeIn(800);
    });

})(jQuery);