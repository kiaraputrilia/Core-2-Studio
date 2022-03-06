$(document).ready(function(){
    // if ($("body").width() > 1024 ){
      // $("body").niceScroll({
      //   scrollspeed: 60, // scrolling speed
      //   mousescrollstep: 20 // scrolling speed with mouse wheel (pixel)
      // });
  
      ScrollReveal().reveal('span.img', {
          delay: 0,
          distance: '0px',
          interval: 100,
          duration: 10,
          scale: 1,
          reset: true,
          useDelay: 'always',
          viewFactor: 0.75,
          viewOffset: {
              top: 100,
              right: 0,
              bottom: 0,
              left: 0,
          }
      });
    // }
  
  });