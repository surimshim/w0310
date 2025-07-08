$(document).ready(function(){
  let currentIndex = 0;
  const slideWidth = $('.slide').width();
  const slideCount = $('.slide').length;
  
  $('.next').click(function(){
    if (currentIndex < slideCount -1){
      currentIndex++;
      $('.slider-track').css('transform','translateX(' + (-slideWidth * currentIndex) + 'px)');
    }
  });
  
  $('.prev').click(function(){
      if (currentIndex > 0){
      currentIndex--;
      $('.slider-track').css('transform','translateX(' + (-slideWidth * currentIndex) + 'px)');
    }
  });  
})