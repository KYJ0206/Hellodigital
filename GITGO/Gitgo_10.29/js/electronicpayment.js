$(function(){
    $('.personal').click(function(){
      $('.personal').addClass('active')
      $('.team').removeClass('active')
      $('.etc').removeClass('active')
    });
    $('.team').click(function(){
      $('.team').addClass('active')
      $('.personal').removeClass('active')
      $('.etc').removeClass('active')
    });
    $('.etc').click(function(){
      $('.etc').addClass('active')
      $('.team').removeClass('active')
      $('.personal').removeClass('active')
    });

    $('.newcheck1').click(function(){
      $('.newcheck1').addClass('active')
      $('.newcheck2').removeClass('active')
      $('.cont2_2').css('display','block')
      $('.cont2_3').css('display','none')
      });
    $('.newcheck2').click(function(){
      $('.newcheck2').addClass('active')
      $('.newcheck1').removeClass('active')
      $('.cont2_3').css('display','block')
      $('.cont2_2').css('display','none')
    });
});

/* 서브탭 */
$(function(){
  $('.navBTN').click(function(){
    $('.sub-tabs').toggle()
  }); 
});