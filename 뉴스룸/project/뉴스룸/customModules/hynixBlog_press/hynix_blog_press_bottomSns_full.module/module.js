// $(document).ready(function(){
//   const URL = window.location.href;

//   // 목록으로 가는 로직 
//   $('#toList').click((e) => {
//     $('#toList').attr('href', `https://blog.hellodigital.co.kr/presscenter?category=all`)
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

//   $("li.more2 a").click(function(){
//     $(".Rectangle-Copy2").show();
//   });

//   $(".snsclose2 a").click(function(){
//     $(".Rectangle-Copy2").hide();
//   });
  
// })