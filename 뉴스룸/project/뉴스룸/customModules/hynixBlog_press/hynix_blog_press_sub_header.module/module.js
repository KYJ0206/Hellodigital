// $(document).ready(function(){
// 	const $url = window.location.href;

// 	$('.tagText').click((e) => {
// 		console.log($(e.target).text(),'clickclick!!!');
// 		if($url.includes('presscenter')) {
// 			$('.tagbox .tagText').attr('href', `/presscenter/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
// 		}
// 	});
  
//   // url주소 복사
//   $('ul.sns .url').click((e)=>{
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
  
  
// })

// $(".more a").click(function(){
//   $(".Rectangle-Copy").show();
// });

// $(".snsclose a").click(function(){
//   $(".Rectangle-Copy").hide();
// });