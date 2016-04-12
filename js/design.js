$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  var wHeight = $(window).height();

  var newHeight = Math.max(50, 400-scroll);
  $('.header').css({
    'height' : newHeight+'px'
  });
});
