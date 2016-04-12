$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  var newHeight = Math.max(50, (400-scroll));
  $('.header').css({
    'height' : newHeight+'px'
  });

  if (newHeight <= 300){
    var newOpacity = Math.max(0, (newHeight-200)/100);
    $('.sub_head').css({
      'opacity' : newOpacity
    });
  }
  else {
    $('.sub_head').css({
      'opacity' : '1'
    });
  }
  if (newHeight <= 200){
	  
    var newWidth = Math.min(95, (-100/150*(newHeight-200)));
	var newSize = Math.max(0.5, (100-newWidth)/100 );
    console.log(newWidth);
    $('.headline').css({
      'flex-basis' 	: newWidth+'%',
	  'font-size'	: newSize+'em'
    });
  }
  else
  {
    $('.headline').css({
      'flex-basis' 	: '0%',
	  'font-size'	: '1em'
    });
  }
});
