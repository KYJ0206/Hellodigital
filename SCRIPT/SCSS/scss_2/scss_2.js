$(function (){
	$(".c1").click(function (){
  	    $(".hide").toggle();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else {  
            $(this).addClass('active');  
        }
  });
});
