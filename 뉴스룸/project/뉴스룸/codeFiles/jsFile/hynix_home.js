// {
	
// 	const selectListPage = () => {
// 		$('.list-contentsWrap .list-conWrap-top .inner .inner2 ul li a').click(e => {
// 			const pageName = $(e.target).text()
// 			$(e.target).parents('li').removeClass('active')
// 			if(pageName === '추천 글') {
				
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'block')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
				
// 				$('.list-contentsWrap.list-total').css('display', 'block')
// 				$('.list-contentsWrap.list-tech').css('display', 'none')
// 				$('.list-contentsWrap.list-culture').css('display', 'none')
// 				$('.list-contentsWrap.list-sustainability').css('display', 'none')
// 			}
// 			if(pageName === '기술') {
				
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'block')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
				
// 				$('.list-contentsWrap.list-total').css('display', 'none')
// 				$('.list-contentsWrap.list-tech').css('display', 'block')
// 				$('.list-contentsWrap.list-culture').css('display', 'none')
// 				$('.list-contentsWrap.list-sustainability').css('display', 'none')
// 			}
// 			if(pageName === '사람&문화') {
				
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'block')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
				
// 				$('.list-contentsWrap.list-total').css('display', 'none')
// 				$('.list-contentsWrap.list-tech').css('display', 'none')
// 				$('.list-contentsWrap.list-culture').css('display', 'block')
// 				$('.list-contentsWrap.list-sustainability').css('display', 'none')
// 			}
// 			if(pageName === '지속가능경영') {
				
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
// // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'block')
				
// 				$('.list-contentsWrap.list-total').css('display', 'none')
// 				$('.list-contentsWrap.list-tech').css('display', 'none')
// 				$('.list-contentsWrap.list-culture').css('display', 'none')
// 				$('.list-contentsWrap.list-sustainability').css('display', 'block')
// 			}
// 		})
// 	}
	
// 	const homeInit = () => {
// 		selectListPage()
// 	}
	
// 	window.onload = homeInit()
// }
// 
// 
// es5   




{
  var selectListPage = function selectListPage() {
    $(".list-contentsWrap .list-conWrap-top .inner .inner2 ul li a").click(
      function (e) {
        var pageName = $(e.target).text();
        $(e.target).parents("li").removeClass("active");

        if (pageName === "추천 글") {
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'block')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
          $(".list-contentsWrap.list-total").css("display", "block");
          $(".list-contentsWrap.list-tech").css("display", "none");
          $(".list-contentsWrap.list-culture").css("display", "none");
          $(".list-contentsWrap.list-sustainability").css("display", "none");
					$(".list-contentsWrap.list-press").css("display", "none");
        }

        if (pageName === "기술") {
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'block')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
          $(".list-contentsWrap.list-total").css("display", "none");
          $(".list-contentsWrap.list-tech").css("display", "block");
          $(".list-contentsWrap.list-culture").css("display", "none");
          $(".list-contentsWrap.list-sustainability").css("display", "none");
					$(".list-contentsWrap.list-press").css("display", "none");
        }

        if (pageName === "사람&문화") {
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'block')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
          $(".list-contentsWrap.list-total").css("display", "none");
          $(".list-contentsWrap.list-tech").css("display", "none");
          $(".list-contentsWrap.list-culture").css("display", "block");
          $(".list-contentsWrap.list-sustainability").css("display", "none");
					$(".list-contentsWrap.list-press").css("display", "none");
        }

        if (pageName === "지속가능경영") {
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'block')
          $(".list-contentsWrap.list-total").css("display", "none");
          $(".list-contentsWrap.list-tech").css("display", "none");
          $(".list-contentsWrap.list-culture").css("display", "none");
          $(".list-contentsWrap.list-sustainability").css("display", "block");
					$(".list-contentsWrap.list-press").css("display", "none");
        }
				
				if (pageName === "보도자료") {
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-3").css('display', 'block')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-4").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-5").css('display', 'none')
          // 				$(".row-fluid-wrapper.row-depth-1.row-number-6").css('display', 'none')
          $(".list-contentsWrap.list-total").css("display", "none");
          $(".list-contentsWrap.list-tech").css("display", "none");
          $(".list-contentsWrap.list-culture").css("display", "none");
          $(".list-contentsWrap.list-sustainability").css("display", "none");
					$(".list-contentsWrap.list-press").css("display", "block");
        }
      }
    );
  };

  var homeInit = function homeInit() {
    selectListPage();
  };

  window.onload = homeInit();
}
