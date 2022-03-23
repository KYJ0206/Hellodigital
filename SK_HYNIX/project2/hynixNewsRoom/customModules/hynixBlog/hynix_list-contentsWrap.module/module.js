$(document).ready(function(){
	
	// 쿼리 스트링 가져오는 함수
  const searchParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };
	console.log('~~~~~~~ㅇㄹㅇㄹ~')
// 	`/technology/tag/${encodeURIComponent('#카테고리-반도체')}/page/1?type=category&text=반도체`
	if(searchParam('category') === '반도체') {
	  $('.recent-categoryTotal').attr('href','/technology/tag/카테고리-반도체/page/1?type=category&text=반도체')
  	$('.popular-categoryTotal').attr('href','/technology/tag/카테고리-반도체/page/1?type=category&text=반도체')	
	} else if(searchParam('category') === '비즈니스') {
		$('.recent-categoryTotal').attr('href','/technology/tag/카테고리-비즈니스/page/1?type=category&text=비즈니스')
  	$('.popular-categoryTotal').attr('href','/technology/tag/카테고리-비즈니스/page/1?type=category&text=비즈니스')	
	} else if (searchParam('category') === '트렌드') {
		$('.recent-categoryTotal').attr('href','/technology/tag/카테고리-트렌드/page/1?type=category&text=트렌드')
  	$('.popular-categoryTotal').attr('href','/technology/tag/카테고리-트렌드/page/1?type=category&text=트렌드')	
	}
	
// 	$('.recent-categoryTotal').attr('href','https://www.naver.com')
// 	$('.popular-categoryTotal').attr('href','https://www.nate.com')
	
	const recentBlogLength = $('.list-contentsWrap .conWrap-body .inner2 .flexWrap-4.recent-blog').children('li').length
	const popularBlogLength = $('.list-contentsWrap .conWrap-body .inner2 .flexWrap-4.popular-blog').children('li').length

	for(let i = 28; i < recentBlogLength; i++) {
    const li = $('.list-contentsWrap .conWrap-body .inner2 .flexWrap-4.recent-blog').children('li')[i]
		$(li).addClass('blog-hidden')
	}
	for(let i = 28; i < popularBlogLength; i++) {
    const li = $('.list-contentsWrap .conWrap-body .inner2 .flexWrap-4.popular-blog').children('li')[i]
		$(li).addClass('blog-hidden')
	}
	
	$('.ckWrap #ck-recent').click(() => {
		
		$('input:checkbox[id="ck-recent"]').prop("checked", true)
		$('input:checkbox[id="ck-popularity"]').prop("checked", false)
		console.log('최신')
// 		$('.choiceBlog').text('recent')
		$('#loady').css('display', 'flex')
		$('#loady2').css('display', 'none')
		$('.popular-blog').css('display', 'none')
		$('.recent-blog').css('display', 'flex')
		$('.recent-blog-btn').css('display', 'none')
		$('.popular-blog-btn').css('display', 'none')
		
	})
	$('.ckWrap #ck-popularity').click(() => {
		
		$('input:checkbox[id="ck-recent"]').prop("checked", false)
		$('input:checkbox[id="ck-popularity"]').prop("checked", true)
		console.log('인기')
// 		$('.choiceBlog').text('popular')
    $('#loady').css('display', 'none')
		$('#loady2').css('display', 'flex')
		$('.popular-blog').css('display', 'flex')
		$('.recent-blog').css('display', 'none')
		$('.recent-blog-btn').css('display', 'none')
		$('.popular-blog-btn').css('display', 'none')
	})
	
    $(function () {
//         $(".blog-hidden").slice(0, 4).show();
        $("#loady").on('click', function (e) {
            e.preventDefault();
            $(".recent-blog .blog-hidden:hidden").slice(0, 28).slideDown();
            if ($(".recent-blog .blog-hidden:hidden").length == 0) {
                $("#loady").fadeOut('slow');
							  $('.recent-blog-btn').css('display', 'flex')
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 100
            }, 1000);
        });
    });
	
		$(function () {
	//         $(".blog-hidden").slice(0, 4).show();
					$("#loady2").on('click', function (e) {
							e.preventDefault();
							$(".popular-blog .blog-hidden:hidden").slice(0, 28).slideDown();
							if ($(".popular-blog .blog-hidden:hidden").length == 0) {
									$("#loady2").fadeOut('slow');
								  $('.popular-blog-btn').css('display', 'flex')
							}
							$('html,body').animate({
									scrollTop: $(this).offset().top - 100
							}, 1000);
					});
			});
});