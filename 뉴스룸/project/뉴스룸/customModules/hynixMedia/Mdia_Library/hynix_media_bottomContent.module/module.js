// $(document).ready(function(){
//   const URL = window.location.href;
   
//   // 목록으로 가는 로직 
//   $('#toList').click((e) => {
//     $('#toList').attr('href', `https://blog.hellodigital.co.kr/library?category=all`)
//   })
//   // url주소 복사
//   $('ul#sns2 .url').click((e)=>{
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
  
//   // 태그 클릭
//   $('.topicText').click((e) => {
//     console.log($(e.target).text())
//     if(URL.includes('technology')) {
//       $('.tagbox .topicText').attr('href', `/technology/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
//     }
//     if(URL.includes('culture')) {
//       $('.tagbox .topicText').attr('href', `/culture/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
//     }
//     if(URL.includes('sustainability')) {
//       $('.tagbox .topicText').attr('href', `/sustainability/tag/${$(e.target).text()}/page/1?type=tag&text=${$(e.target).text()}`)
//     }
//   })

//   const tagLength = $('.tagbox ul li').children('a.topicText').length;
//   console.log(tagLength,'!!!')
  
//   for(let i = 1; i <= tagLength; i++) {
//     const text = $(`.topicText${i}`).text()
//     if(text.includes('카테고리-')) {
//       $(`.topicText${i}`).remove()
//     }
//   }
  
//   $("li.more2 a").click(function(){
//     $(".Rectangle-Copy2").show();
//   });

//   $(".snsclose2 a").click(function(){
//     $(".Rectangle-Copy2").hide();
//   });
// })
