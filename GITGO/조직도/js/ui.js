$(document).ready(function(){
	$('.list_control .button').on('click', function(){
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parent().siblings().find('.list_area').addClass('flex_list');
	});
	$('.list_control .button_card').on('click', function(){
		$(this).parent().siblings().find('.list_area').removeClass('flex_list');
	});

	$(".list_inner_box input[type='checkbox']").change(function() {  
		if (this.checked) {
			$(this).parents('.list_inner').addClass('active');
		} else {
			$(this).parents('.list_inner').removeClass('active');			
		}	
	});
	$('.link_menu').click(function () {
		$(this).siblings('.gnb_inner').find('li').removeClass('active').children('.gnb_inner').stop().slideUp()

		if (!$(this).parent().hasClass('active')) {
		  $(this).parent().addClass('active').end().siblings('.gnb_inner').stop().slideDown().end().parent().siblings().removeClass('active').children('.gnb_inner').stop().slideUp().find('li').removeClass('active')
		} else {
		  $(this).parent().removeClass('active').end().siblings('.gnb_inner').stop().slideUp()
		}
	})

	$('.popup_tit .list_control .button').on('click', function(){
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parents('.popup_tit').siblings().find('.list_area').addClass('flex_list');
	});
	$('.popup_tit .list_control .button_card').on('click', function(){
		$(this).parents('.popup_tit').siblings().find('.list_area').removeClass('flex_list');
	});

	$('.dim').click(function(){
		$(this).hide();
		$('.popup').hide();
	});
	/*
	$('.gnb ul li a').click(function(){
		$(this).parent().toggleClass('active').siblings().removeClass('active');
		if($(this).parent().hasClass('active')){
			$(this).next('.gnb_inner').slideDown();
		} else{
			$(this).next('.gnb_inner').slideUp();
		}
	});
	*/

	$('.search_box .search').click(function(){
		$(this).parent('.search_box').addClass('open');
		$(this).parent().siblings('.user_info').addClass('open');
	});

	$('.search_box_close').click(function(){
		$(this).parent('.search_box').removeClass('open');
		$(this).parent().siblings('.user_info').removeClass('open');
	});
	$( window ).resize(win_resize);
	// $('.tree').jstree();


});//

function win_resize(){
	var win_w = $(window).width();
	if(win_w < 767){
		$('.list_area.flex_list').removeClass('flex_list');
		$('.button_list').removeClass('on');
		$('.button_card').addClass('on');		
	} else{
		$('.list_area.flex_list').addClass('flex_list');
	}
}

