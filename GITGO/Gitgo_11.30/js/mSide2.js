// 햄버거 클릭 시
$('.nav-hamburg').on("click", function () {
    if ($('.container-mobile-tab').hasClass('m-side-on')) {
        $('.container-mobile-tab').removeClass('m-side-on')
        $('body').removeAttr("style")
        $('.nav-hamburg span').show();
        $('.nav-hamburg img').hide();
    } else {
        $('.container-mobile-tab').addClass('m-side-on')
        $('body').css("overflow", "hidden")
        $('.nav-hamburg span').hide();
        $('.nav-hamburg img').show();
    }
})
// 배경 클릭 시
$('.closeSub').on('click', function mSideClose(){
    $('body').css("overflow","auto")
    $('.wrap::after').css("display","none")
})

const child1 = document.querySelectorAll('.mainbuttonparent')

$(document).ready(function () {
    let arr = []
    console.log(child1)
    for (let i = 0; i < child1.length; i++) {
        console.log(child1[i])
        const parent2 = child1[i]
        const findli = $(parent2).children('li').hasClass('active');
        arr.push(findli);
        console.log(findli)
    }
    console.log(arr)
    if (arr[1]) {
        console.log("123")
        $('.mainsubbuttonopen1').hide();
        $('.mainsubbuttonopen2').show();
        $('.mainsubbuttonclose2').hide();
        $('.mainsubbuttonclose1').show();

    }  
    if (arr[0]) {
        console.log("456")
        $('.mainsubbuttonopen1_1').hide();
        $('.mainsubbuttonopen2_1').hide();
        $('.mainsubbuttonclose1').show();
    }
})




// 대메뉴 오픈 
// 기안하기 : 열기

$('.mainsubbuttonclose1').click(function (e) {
    const child = document.querySelector('.mainbuttonchild')
    const parent = child.parentElement
    const find = $(parent).children('li').hasClass('active')
    console.log(e.target);
    console.log(parent)
    console.log(find)
    if (find) {
        $('.mainsubbuttonopen1').hide();
        $('.mainsubbuttonclose1').hide(); 
    } else {
        $('.mainsubbuttonclose1').hide();
        $('.mainsubbuttonopen1_1').show();
        $('.m-side-menu li:not(.active) dl').show();
    }
});
// 기안하기 : 닫기
$('.mainsubbuttonopen1_1').click(function () {
    if (find) {
        $('.mainsubbuttonclose1').show();
        $('.mainsubbuttonopen1_1').hide();
        $('.m-side-menu li:not(.active) dl').hide();
    }
});


// 나의문서함 : 열기
$('.mainsubbuttonclose2').click(function (e) {
    const child = document.querySelector('.mainbuttonchild2')
    const parent = child.parentElement
    const find = $(parent).children('li').hasClass('active')
    console.log(e.target);
    console.log(parent)
    console.log(find)
    if (find) {
        $('.mainsubbuttonopen2').show();
        $('.mainsubbuttonclose2').hide();
        $('.m-side-menu .mbp2 li dl').show();
    } else {
        $('.mainsubbuttonopen2_1').show();
        $('.mainsubbuttonclose2').hide();
    }


});
// 나의문서함 : 닫기
$('.mainsubbuttonopen2').click(function () {
    if (find) {
        $('.mainsubbuttonopen2').hide();
        $('.mainsubbuttonclose2').show();
        $('.m-side-menu>div li.active dl').hide();
    } else {
        $('.mainsubbuttonclose2').hide();
        $('.mainsubbuttonopen2_1').hide();
    }
});
