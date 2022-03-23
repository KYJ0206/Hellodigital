// 햄버거 클릭 시
$('.nav-hamburg1').on("click", function (){
    $('body').css("overflow","hidden")
    $('.wrap::after').css("display","block")
})
// 배경 클릭 시
$('.closeSub').on('click', function mSideClose(){
    $('body').css("overflow","auto")
    $('.wrap::after').css("display","none")
})
