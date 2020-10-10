$(document).ready(function () {
  // ACTIVATE LIGHTBOX
  $("#lightgallery").lightGallery();

  // MENU BUTTON
  $('.toggle-nav').click(function (e) {
    if ($(this).hasClass('active')) {
      $('.menu ul').fadeOut();
      $(this).removeClass('active');
      e.preventDefault();
    } else {
      $('.menu ul').fadeIn();
      $(this).addClass('active');
      e.preventDefault();
    }
  });

  // MENU LINKS
  $('.link-menu').click(function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    if ($(window).width() < 767) {
      $('.menu ul').fadeOut();
    }else{
      
    }
    
  });


});