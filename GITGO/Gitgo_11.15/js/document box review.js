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
  let reviewBtn = document.getElementById('checkbox1');
  let processBtn = document.getElementById('checkbox2');
  let alltype = document.getElementById('checkbox000');

  reviewBtn.addEventListener('click', function(){
     if ($("#checkbox1").prop("checked")) {
      $("input[name=Review]").prop("checked", true);
    } else {
      $("input[name=Review]").prop("checked", false);
    }
  });

  processBtn.addEventListener('click', function(){
    if ($("#checkbox2").prop("checked")) {
      $("input[name=process]").prop("checked", true);
    } else {
      $("input[name=process]").prop("checked", false);
    }
  });

  alltype.addEventListener('click', function(){
    if ($("#checkbox000").prop("checked")) {
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