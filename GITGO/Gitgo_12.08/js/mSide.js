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

const child1 = document.querySelectorAll('.mainbuttonparent')

$(document).ready(function () {
    let arr = []
    for (let i = 0; i < child1.length; i++) {
        const parent2 = child1[i]
        const findli = $(parent2).children('li').hasClass('active');
        arr.push(findli);
    }
    if (arr[0]) {
        $('.mainsubbuttonopen1').show();
        $('.mainsubbuttonopen2').hide();
        $('.mainsubbuttonclose1').hide();
        $('.mainsubbuttonclose2').show();

    }  
    if (arr[1]) {
        $('.mainsubbuttonopen1_1').hide();
        $('.mainsubbuttonopen2_1').hide();
        $('.mainsubbuttonclose2').show();
    }
})




// 대메뉴 오픈 
// 기안하기 : 열기

$('.mainsubbuttonclose1_1').click(function (e) {
    const child = document.querySelector('.mainbuttonchild')
    const parent = child.parentElement
    const find = $(parent).children('li').hasClass('active')
    if (find) {
        $('.mainsubbuttonopen1').show();
        $('.mainsubbuttonclose1_1').hide();
        $('.m-side-menu li.active dl').show();
    } else {
        $('.mainsubbuttonopen1_1').show();
    }
});
// 기안하기 : 닫기
$('.mainsubbuttonopen1,.mainsubbuttonopen1_1').click(function () {
    if (find) {
        $('.mainsubbuttonclose1_1').show();
        $('.mainsubbuttonopen1_1').hide();
        $('.m-side-menu li.active dl').hide();
    }
});


// 나의문서함 : 열기
$('.mainsubbuttonclose2').click(function (e) {
    const child = document.querySelector('.mainbuttonchild2')
    const parent = child.parentElement
    const find = $(parent).children('li').hasClass('active')
    if (find) {
        $('.mainsubbuttonopen2').show();
        $('.mainsubbuttonclose2').hide();
        $('.mainsubbuttonopen2_1').show();
    } else {
        $('.mainsubbuttonopen2_1').show();
        $('.mainsubbuttonclose2').hide();
        $('.m-side-menu .mbp2 li dl').show();
    }

});
// 나의문서함 : 닫기
$('.mainsubbuttonopen2,.mainsubbuttonopen2_1').click(function () {
    if (find) {
        $('.mainsubbuttonopen2').hide();
        $('.mainsubbuttonopen2_1').hide();
        $('.mainsubbuttonclose2').show();
        $('.m-side-menu .mbp2 li dl').hide();
    } else {
        $('.mainsubbuttonclose2').hide();
        $('.mainsubbuttonopen2_1').hide();

    }
});