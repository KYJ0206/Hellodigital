// $(".more a").click(function(){
//   $(".Rectangle-Copy").show();
// });

// $(".snsclose a").click(function(){
//   $(".Rectangle-Copy").hide();
// });

// // 태그 클릭
// $('.topicText').click((e) => {
//   $('.tagbox .topicText').attr('href', `/library/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
// })


// // url주소 복사
// $('ul#sns2 .url').click((e)=>{
//   let url = '';
//   let textarea = document.createElement("textarea");
//   document.body.appendChild(textarea);
//   url = window.document.location.href;
//   textarea.value = url;
//   textarea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textarea);
//   alert("url이 복사되었습니다.(Ctrl+c를 눌러 주소창에 붙여넣어 주세요)")
// });


// const tagLength = $('.tagbox ul li').children('a.topicText').length;
// 	console.log(tagLength,'!!!')
// 	for(let i = 1; i <= tagLength; i++) {
// 		const text = $(`.topicText${i}`).text()
// 		if(text.includes('카테고리-')) {
// 			$(`.topicText${i}`).remove()
// 		}
// 	}