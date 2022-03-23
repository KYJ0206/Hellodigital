$(document).ready(function () {

  // tooltip
  $(".tool-tip").hover(function () {
    $(this).attr("title", $(this).text());
  });


  // 리스트형 목록
  $(".list_control.main_control .button").on("click", function (event) {
    $(this).addClass("on").siblings().removeClass("on");
    $(this).parent().siblings().find(".list_area.main_area").addClass("flex_list");

    if ($(".gnb-list-wrap.main-leaf").parent().hasClass("flex_list")) {
      $(".gnb-list-wrap.main-leaf").css({ display: "inline-block", width: "100%" });
    }


  });

  // 카드형 목록
  $(".list_control.main_control .button_card").on("click", function () {
    $(this).parent().siblings().find(".list_area.main_area").removeClass("flex_list");
    if (!$(".gnb-list-wrap.main-leaf").parent().hasClass("flex_list")) {
      $(".gnb-list-wrap.main-leaf").css({ display: "inline-block", width: "calc(16.8% - 5px)" });
    }
  });


  // 팝업 창 띄우기
  $(".button_popUp, .user_info .choose_num").on("click", function (e) {
    e.preventDefault();

    if ($("#popup").css("display") === "none") {
      $("#popup").show("fast");
      $(".modal.fade").addClass("show");

      $("body").css("overflow", "hidden");
    } else {
      $("#popup").css("display", "none");
      $(".modal.fade").removeClass("show");

      $("body").css("overflow", "auto");
    }
  });


  // 팝업 리스트 변경 버튼
  $(".popup_contents .list_control.popup_control .button").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(this).parents().siblings().find(".list_area.popup_area").addClass("flex_list");
    if ($(".gnb-list-wrap.popup-leaf").parent().hasClass("flex_list")) {
      $(".gnb-list-wrap.popup-leaf").css({ display: "inline-block", width: "100%" });
    }

  });
  // 팝업 리스트 변경 버튼
  $(".popup_contents .list_control.popup_control .button_card").on("click", function () {
    $(this).parents().siblings().find(".list_area.popup_area").removeClass("flex_list");
    if (!$(".gnb-list-wrap.popup-leaf").parent().hasClass("flex_list")) {
      $(".gnb-list-wrap.popup-leaf").css({ display: "inline-block", width: "calc(25% - 2px)" });
    }
  });

  // 팝업 창 닫기
  $(".popup_close, .dim").click(function () {
    $("#popup").css("display", "none");
    $(".modal.fade").removeClass("show");
    $("body").css("overflow", "auto");
  });

  // 검색 부분 -->
  $(".search_box input").keypress(function (e) {
    let key = e.which;
    if (key === 13) {
      $(".search_box .search").parent(".search_box").addClass("open");
      $(".search_box .search").parent().siblings(".user_info").addClass("open");
    }
  });

  $(".search_box .search").click(function () {
    $(this).parent(".search_box").addClass("open");
    $(this).parent().siblings(".user_info").addClass("open");
  });

  $(".search_box_close").click(function () {
    $(this).parent(".search_box").removeClass("open");
    $(this).parent().siblings(".user_info").removeClass("open");
  });
  // <-- 검색 부분

  // 브라우저 창 크기변화 이벤트
  $(window).resize(win_resize);
  var win_w = $(window).width();
  function win_resize() {
  }
  // 0729 수정 767 -> 768
    if (win_w <= 768) {
      $(".list_area.flex_list").removeClass("flex_list");
    }else{
      $(".list_area").addClass("flex_list");
    }
});


