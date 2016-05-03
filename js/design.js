$('.animal-modal').css({
  'display': 'none'
});

$('.animal').click(function(){
  $(this).siblings('.animal-modal').first().toggle();
  $(this).siblings('.animal-form').first().fadeToggle();
});

$('.animal-modal').click(function(){
  $(this).siblings('.animal-form').first().fadeToggle("fast", function() {
    $(this).siblings('.animal-modal').first().toggle();
  });
});

$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  var newOpacity;
  var newWidth;
  var newSize;
  var wHeight = $( window ).height() / 2;
  var newHeight = Math.max(50, (wHeight-scroll));

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
