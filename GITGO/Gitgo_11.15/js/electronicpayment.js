$(function () {
  $('.personal').click(function () {
    $('.personal').addClass('active')
    $('.team').removeClass('active')
    $('.etc').removeClass('active')
  });
  $('.team').click(function () {
    $('.team').addClass('active')
    $('.personal').removeClass('active')
    $('.etc').removeClass('active')
  });
  $('.etc').click(function () {
    $('.etc').addClass('active')
    $('.team').removeClass('active')
    $('.personal').removeClass('active')
  });

  $('.newcheck1').click(function () {
    $('.newcheck1').addClass('active')
    $('.newcheck2').removeClass('active')
    $('.cont2_2').css('display', 'block')
    $('.cont2_3').css('display', 'none')
  });
  $('.newcheck2').click(function () {
    $('.newcheck2').addClass('active')
    $('.newcheck1').removeClass('active')
    $('.cont2_3').css('display', 'block')
    $('.cont2_2').css('display', 'none')
  });
});

/* 서브탭 */
$(function () {
  $('.navBTN').click(function () {
    $('.sub-tabs').toggle()
  });
});


/* 기안하기 선택 */
$(function () {
  $('.inner ul li').click(function (e) {
    var Draft = $(e.target).closest('li')
    Draft.siblings('li').removeClass("active");
    Draft.addClass("active");
  });

  $('.nav-item:nth-child(3)').click(function () {
    $('.draftsub li').toggle();
  });

  $('.inner3-1 div a').click(function () {
    $('.jstree-container-ul').show();
    $('.inner3-1 div').hide();
  });

// 팝업창 
  $(function () {

    $(".inner1-2 ul li").click(function () {
      $("#popup").css('display', 'flex').hide().fadeIn();
      //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close").click(function () {
      modalClose(); //모달 닫기 함수 호출
    });

    function modalClose() {
      $("#popup").fadeOut(); //페이드아웃 효과
    }
  });

});