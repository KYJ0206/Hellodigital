$(function(){
    $('.closeSub').click(function(){
      $('.m-sideWrap').css('display','none')
      $('.nav-hamburg1').css('display','block')
    });
    $('.nav-hamburg1').click(function(){
      $('.m-sideWrap').css('display','block')
      $('.nav-hamburg1').css('display','none')
    });
});