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
  var reviewBtn = document.getElementById('checkbox1');
  var processBtn = document.getElementById('checkbox2');
  var saveBtn = document.getElementById('checkbox0');

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

  saveBtn.addEventListener('click', function(){
    if ($("#checkbox0").prop("checked")) {
      $("input[name=save]").prop("checked", true);
    } else {
      $("input[name=save]").prop("checked", false);
    }
  });
};

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
    $('.inputWrap').toggle()
  });
});
