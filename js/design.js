$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  var newOpacity;
  var newWidth;
  var newSize;
  var newHeight = Math.max(50, (400-scroll));

  if (newHeight <= 300){
    newOpacity = Math.max(0, (newHeight-200)/100);
  }
  else {
    newOpacity = 1;
  }
  if (newHeight <= 200){
    newWidth = Math.min(95, (-100/150*(newHeight-200)));
    newSize = Math.max(0.5, (100-newWidth)/100 );
  }
  else {
    newWidth = 0;
    newSize = 1;
  }

  $('.header').css({
    'height' : newHeight+'px',
    'font-size'	: newSize+'rem'
  });

  $('.sub_head').css({
    'opacity' : newOpacity
  });

  $('.headline').css({
    'flex-basis' 	: newWidth+'%'
  });
});
