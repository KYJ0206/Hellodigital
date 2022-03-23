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

/* 검색함 필터 */
$(function(){
  $('.searchicon').click(function(){
    $('.searchfilter').toggle();
    $('.inputWrap').toggle();
    $('.mbgnb2').toggle();
  });
});


let toggle1 = window.matchMedia('(max-width: 760px)');

/* 기안하기 선택 */
$(function () {
  $('.draftsubsearch i').click(function () {
    if (toggle1.matches) {
        $('.draftsubsearch input').toggle();
    }
});

$('.nav-hamburg').click(function () {
    if (toggle1.matches) {
        $('.new-nav-tabs li').toggle();
    }
});

  $('.inner ul li').click(function (e) {
    var Draft = $(e.target).closest('li')
    Draft.siblings('li').removeClass("active");
    Draft.addClass("active");
  });

  $('.nav-item:nth-child(3)').click(function () {
    $('.draftsub li').toggle();
  });

  $('.inner3-1 div a').click(function () {
    $('#jstree_main1').show();
    $('.inner3-1 div').hide();
  });

  // 웹 jstree TEST
  $(function () {
    $(window).resize(() => {
      let width = window.innerWidth
      if (width > 760) {
        $('#jstree_main1').show();
        $('.draftsubsearch input').show();
        $('.body-titlebox>p').show();
        $('.body-contentbox>p').show();
      }
      // console.log(window.innerWidth, '!!!!!!!')
    })

    // $('.inner3-1 div a').click(function () {
    //   $('.jstree-container-ul').show();
    //   $('.inner3-1 div').hide();
  });

  // 팝업창 
  $(function () {

    $(".inner1-2 ul li, .inner2-2 ul li, .inner3-2 ul li").click(function () {
      $("#popup").css('display', 'flex').hide().fadeIn();
      $('body').css('overflow','hidden')
      //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close").click(function () {
      modalClose(); //모달 닫기 함수 호출
      $('body').css('overflow','auto')
    });

    // 모바일 페이지 상 기능
    // 모바일 (문서내용)
    $('.vivac1').click(function(){
      $('.vivac1').addClass('active')
      $('.vivac2').removeClass('active')
      $('.body-titlebox>p').addClass('toggle');
      $('.body-contentbox>p').removeClass('toggle');
      $('.body-titlebox iframe').show();
      $('.body-contentbox>div>div,.body-contentbox>div>ul ').hide();
      if('.vivac1.active'){
        $('.body-titlebox>p').show();
        $('.body-contentbox>p').hide();
      }
    });
    // 모바일 (결제선)
    $('.vivac2').click(function(){
      $('.vivac1').removeClass('active')
      $('.vivac2').addClass('active')
      $('.body-titlebox>p').removeClass('toggle');
      $('.body-contentbox>p').addClass('toggle');
      $('.body-titlebox iframe').hide();
      $('.body-contentbox>div>div,.body-contentbox>div>ul ').show();
      if('.vivac2.active'){
        $('.body-contentbox>p').show();
        $('.body-titlebox>p').hide();
      }
    });

    function modalClose() {
      $("#popup").fadeOut(); //페이드아웃 효과
    }

    // 웹 페이지 상 기능
    // 웹 (문서내용)
    $('.body-titlebox>p').click(function () {
      $('.body-titlebox>p').addClass('toggle');
      $('.body-contentbox>p').removeClass('toggle');
      $('.body-titlebox iframe').show();
      $('.body-contentbox>div>div,.body-contentbox>div>ul ').hide();

    });
    // 웹 (결제선)
    $('.body-contentbox>p').click(function () {
      $('.body-titlebox>p').removeClass('toggle');
      $('.body-contentbox>p').addClass('toggle');
      $('.body-titlebox iframe').hide();
      $('.body-contentbox>div>div,.body-contentbox>div>ul ').show();
    });



    // 모달팝업창 
    $('.body-contentbox .plusbutton1').click(function () {
      $('.popup-wrap2').show();
    });

    $('.modalpop>div:first-child img').click(function(){
      $('.popup-wrap2').hide();
    });

  });


  // 로드팝업
  $(function () {
    $('.roadbtn').click(function () {
      console.log('dkslkad')
      $('.popup-wrap3').show();
    });

    $('.wrap3btngroup1 img').click(function () {
      $('.popup-wrap3').hide();
    })
  });

  // 저장팝업
  $(function () {
    $('.savebtn').click(function () {
      console.log('dkslkad')
      $('.popup-wrap4').show();
    });

    $('.wrap4btngroup img').click(function () {
      $('.popup-wrap4').hide();
    })
  });
});

// 팝업창 결제선
function filter() {
  var value, name, item, i;

  search = document.getElementById("search").value.toUpperCase();
  navgroup = document.getElementsByClassName("navgroup1");

  for (i = 0; i < navgroup.length; i++) {
    name = navgroup[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(search) > -1) {
      navgroup[i].style.display = "block";
    } else {
      navgroup[i].style.display = "none";
    }
  }
}