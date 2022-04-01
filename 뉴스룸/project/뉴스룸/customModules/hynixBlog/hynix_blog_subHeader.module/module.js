// $(document).ready(function(){
//   console.log("확인2")
// 	const URL = window.location.href;
	
// // 	$('.topicText').click((e) => {
// // 		console.log($(e.target).text())
// // 		if(URL.includes('technology')) {
// // 			$('.tagbox .topicText').attr('href', `/technology/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
// // 		}
// // 		if(URL.includes('culture')) {
// //       $('.tagbox .topicText').attr('href', `/culture/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
// // 		}
// // 		if(URL.includes('sustainability')) {
// //       $('.tagbox .topicText').attr('href', `/sustainability/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
// // 		}
// // 	})
//   // url주소 복사
//   $('ul.sns .url').click((e)=>{
//     console.log('유알엘 복사')
//     let url = '';
//     let textarea = document.createElement("textarea");
//     document.body.appendChild(textarea);
//     url = window.document.location.href;
//     textarea.value = url;
//     textarea.select();
//     document.execCommand("copy");
//     document.body.removeChild(textarea);
//     alert("url이 복사되었습니다.(Ctrl+c를 눌러 주소창에 붙여넣어 주세요)")
//   })
  

  
  
  
// 	const tagLength = $('.tagbox ul li').children('a.topicText').length;
// 	console.log(tagLength,'!!!')
// 	for(let i = 1; i <= tagLength; i++) {
// 		const text = $(`.topicText${i}`).text()
// 		if(text.includes('카테고리-')) {
// 			$(`.topicText${i}`).remove()
// 		}
// 	}
// 	$('.tagbox').css('display', 'flex')

	
// })
// //   const URL = window.location.href;
// // 	$('.tagbox .topicText').click((e) => {
// // 		console.log($(e.target).text())
// // 	})

// $(".more a").click(function(){
//   console.log('상단클릭!@')
//   $(".Rectangle-Copy").show();
// });

// $(".snsclose a").click(function(){
//   $(".Rectangle-Copy").hide();
// });