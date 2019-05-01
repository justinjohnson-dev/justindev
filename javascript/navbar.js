$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 50) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

/* This is a TODO */