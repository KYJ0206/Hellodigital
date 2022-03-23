$(function(){
    $('.closeSub').click(function(){
      $('.m-sideWrap2').css('display','none')
      $('.nav-hamburg1').css('display','block')
    });
    $('.nav-hamburg1').click(function(){
      $('.m-sideWrap2').css('display','block')
      $('.nav-hamburg1').css('display','none')
    });
});

/* 검토 체크 박스 전체 선택/해제 */
window.onload = function(){
  let Approval = document.getElementById('checkbox999');
  let alltype = document.getElementById('checkbox99');

  Approval.addEventListener('click', function(){
    if ($("#checkbox999").prop("checked")) {
      $("input[name=Approval]").prop("checked", true);
    } else {
      $("input[name=Approval]").prop("checked", false);
    }
  });

  alltype.addEventListener('click', function(){
    if ($("#checkbox99").prop("checked")) {
      $("input[name=alltypecheck]").prop("checked", true);
    } else {
      $("input[name=alltypecheck]").prop("checked", false);
    }
  });

};

/* 검토 아이콘 */
$(function(){
  $('.button1').click(function(){
    console.log('ddd')
    $('.mobileiconimg1').css('display','block')
  });
  $('.button2').click(function(){
    $('.mobileiconimg2').css('display','block')
  });
});

/* 서브탭 */
$(function(){
  $('.navBTN').click(function(){
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

/* 모바일 GNB */
$(function(){
  $(".mbgnb ul li a").click(function(e){
    var mbgnb = $(e.target).closest('li')
    mbgnb.siblings('li').removeClass("active");
    mbgnb.addClass("active");
  });

  $('.dcbsb').click(function(){
    $('.documentboxsub').toggle();
  });
});