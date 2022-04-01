// $('.btn-pageTop').click(() => {
// 	$('html, body').animate({scrollTop: '0'}, 1000);
// })
// 
//  es5

$(".btn-pageTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: "0"
    },
    1000
  );
});
