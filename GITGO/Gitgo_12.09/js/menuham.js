// 메인메뉴

$(function(){
    $('.nav-hamburg span').click(function(){
        console.log("dokfjos")
        $('.nav-hamburg span').hide();
        $('.nav-hamburg img').show();
    });
    $('.nav-hamburg img').click(function(){
        $('.nav-hamburg span').show();
        $('.nav-hamburg img').hide();
    });
});