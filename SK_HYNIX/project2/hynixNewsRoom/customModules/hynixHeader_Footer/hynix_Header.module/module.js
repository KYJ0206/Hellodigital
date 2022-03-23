// //// 서치버튼 포커스 /////////
// $(".gnb-searchWrap2").click(function(){
// //     console.log("클릭해더로교체");
        
// 	//Quick Search 적용 시 로직 살리기
//     $(".gnbHeader").hide(),
//     $('.popupContainer').addClass('active'),
//     $('.gnb-menuWrap-mobile').addClass('active'),
//     $(".d-search-on").show();

//     $("html, body").addClass("active");
//     $(".popupContainer").css("display","block");
//     $(".gnb-menuWrap-mobile").hide();
//     $('body').css('overflow','hidden');
//     $('.gnbHeaderDim').hide();
	
// 	$('.in-search-input').focus()
  
// //     $('html, body').animate( { scrollTop : 0 },0);
//     return false;
  
// });

// /// 검색창 닫기버튼 포커스 /////
// $(".gnb-searchClose, .body-container-wrapper").click(function(e){
//      e.stopPropagation();
// 		// Quick Search 적용 시 로직 살리기 
//     $(".gnbHeader").show(),
//     $('.popupContainer').removeClass('active'),
//     $(".d-search-on").hide();
  
//     $("html, body").removeClass("active");
//     $('.gnb-menuWrap-mobile').removeClass('active'),
//     $(".popupContainer").css("display","none");
//     $('body').css('overflow','auto')

// });



// // 햄버거 버튼 클릭시 서브메뉴 보이기
// $(".gnb-m1").click(function(){
  
//   $(".gnb-m1").hide();
//   $(".gnb-m2").show();
//   $('body').css('overflow','hidden');
  
//   $(".gnb-menuWrap-mobile").show();


// });//////// click ///////////////

// $(".gnb-m2").click(function(){
//   $(".gnb-m1").show();
//   $(".gnb-m2").hide();
//   $('body').css('overflow','auto');
  
//   $(".gnb-menuWrap-mobile").hide();
  
// });



// // 언어창 열고 닫기
// $(".header-container-wrapper .lang").click((e) => {
//         e.stopPropagation();
// //         console.log("팝업띄워!");

//         $(".header-container-wrapper .lang ul").show();

// });//////// click ///////////////

// $(".gnbHeader , .body-container-wrapper, .footer").click((e) => {
//         e.stopPropagation();
// //         console.log("팝업닫아!");
// //         if (event.target !== event.currentTarget) return;
// //         console.log(123);
// //         console.log("팝업숨겨!");

//         $(".header-container-wrapper .lang ul").hide();

// });//////// click ///////////////

// /* scroll */
// let didScroll; 
// let lastScrollTop = 0; 
// let delta = 0; 
// let navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){ 
// //   didScroll = true 
//   let st = $(this).scrollTop();
//   if(Math.abs(lastScrollTop - st) <= delta) return; 
//   if (st > lastScrollTop && st > navbarHeight){ 
//     $('header').removeClass('nav-up').addClass('nav-down');     
//   }else {
//     if(st + $(window).height() < $(document).height()){
//       $('header').removeClass('nav-down').addClass('nav-up');          
//     }
//   }
//   if(st < 20) {
//     $('header').removeClass('nav-up').addClass('nav-down');
//   }
//   lastScrollTop = st; 
// }); 

// $('.in-search-input').on("keyup",function(key){
// 	if(key.keyCode===13) {
// 		const searchText = $(".in-search-input").val();
// 		const searchType = $("input:radio[name=radiovalue2]:checked").val();
// 		if(searchText) {
// 			if(searchType === 'all') {
// 				location.href = `/search-results?searchType=all&searchText=${searchText}&dateType=all&startDate=&endDate=&category=`	
// 			} else {
// 				location.href = `/library?searchType=${searchType}&searchText=${searchText}`	
// 			}
// 		} else {
// 			alert('검색어를 입력해주세요.')
// 		}
// 	}
// });

// $('.search-icon').click(() => {
//   const searchType = $("input:radio[name=radiovalue2]:checked").val();
//   const searchText =  $(".gnb-search-input").val();
//   const dateType = $(".skh-select").val();
//   const startDate = $("#date-from").val();
//   const endDate = $("#date-to").val();
// 	if(searchType === 'all') {
// 		location.href = `/search-results?searchType=all&searchText=${searchText}&dateType=all&startDate=&endDate=&category=`	
// 	} else {
// 		location.href = `/library?searchType=${searchType}&searchText=${searchText}`	
// 	}

// })

// // GNB 반응형 open

// $(".gnbMenu dl dt.dt-t").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-t").addClass("open")
// })

// $(".gnbMenu dl dt.dt-s").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-s").addClass("open")
// })

// $(".gnbMenu dl dt.dt-c").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-c").addClass("open")
// })

// $(".gnbMenu dl dt.dt-p").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-p").addClass("open")
// })

// $(".gnbMenu dl dt.dt-b").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-b").addClass("open")
// })

// $(".gnbMenu dl dt.dt-t").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-s, .gnbMenu dl dt.dt-c, .gnbMenu dl dt.dt-p, .gnbMenu dl dt.dt-b").removeClass("open")
// })

// $(".gnbMenu dl dt.dt-s").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-t, .gnbMenu dl dt.dt-c, .gnbMenu dl dt.dt-p, .gnbMenu dl dt.dt-b").removeClass("open")
// })

// $(".gnbMenu dl dt.dt-c").click(function(){

//   console.log("sk");
//   $(".gnbMenu dl dt.dt-t, .gnbMenu dl dt.dt-s, .gnbMenu dl dt.dt-p, .gnbMenu dl dt.dt-b").removeClass("open")
// })

// $(".gnbMenu dl dt.dt-p").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-t, .gnbMenu dl dt.dt-s, .gnbMenu dl dt.dt-c, .gnbMenu dl dt.dt-b").removeClass("open")
// })

// $(".gnbMenu dl dt.dt-b").click(function(){
//   console.log("sk");
//   $(".gnbMenu dl dt.dt-t, .gnbMenu dl dt.dt-s, .gnbMenu dl dt.dt-c, .gnbMenu dl dt.dt-p").removeClass("open")
// })



// // 반응형 다국어창
// $(".m-lang").click((e) => {
//    e.stopPropagation();
// //   console.log("나와");
//   $(".m-lang ul").addClass("on")
// })

// $(".gnb-menuWrap-mobile.active").click((e) => {
//   e.stopPropagation();
// //   console.log("없어져");
//   $(".m-lang ul").removeClass("on")  
// })

// $('.gnb-menuWrap-mobile .inner.gnbMenu .subMenu a').click((e) => {

// 	const active = $(e.target).parents('dt').hasClass('open')
// 	console.log($(e.target).parents('dt').data().url)
// 	console.log(active)
// 	if(active){
// 		const url = $(e.target).parents('dt').data().url
// 		location.href = url
// 	} 
// })
