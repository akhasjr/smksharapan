(function($) {
  "use strict";

  // $(document).ready(function(){
  //   $('.dropdown-toggle').dropdown()
  // });


  // Animation on Scroll
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true
  });


  // Counter Up Numbers
  jQuery(document).ready(function($) {
      $('.counter').counterUp({
          delay: 10,
          time: 2000,
      });
  });


})(jQuery);