$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  var wHeight = $(window).height();

  var startRotate = $('.rContain').offset().top - wHeight;

    console.log(startRotate+ ': ' + scroll);
  if(scroll > startRotate)
  {
    var factor = 90 / $('.rContain').height();
    var scrollDiff = scroll-startRotate;
    var angle = Math.min(80, scrollDiff*factor);

    $('.rotate').css({
      'transform': 'rotate('+ angle +'deg)'
    });
  }
});
