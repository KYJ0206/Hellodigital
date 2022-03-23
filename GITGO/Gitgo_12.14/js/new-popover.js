// Home - 팝오버
$(function () {
    $('.work-pop01').each(function () {
        var $elem = $(this);
        $elem.popover({
          placement: 'bottom',
          trigger: 'hover',
          html: true,
          template: '<div class="popover-body new-popover-body work-pop01"><div class="card-work-detail"><div class="conWrap-top"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit">기본근무</span><span>8시간</span></div><div class="d-flex align-items-center work-time"><div class="tool"><span class="work-type work-type-a"><img src="../images/icon-paper-1123.png" alt="근무아이콘"></span><span class="tooltip-text wta">근무 </span></div></span><span>AM 09:00 ~ PM 06:00</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit">연장근무</span><span>8시간</span></div><div class="d-flex align-items-center work-time"><div class="tool"><span class="work-type work-type-c"><img src="../images/icon-bag-1123.png" alt="외근아이콘"></span><span class="tooltip-text wtc">외근</span></div><span>AM 09:00 ~ PM 06:00</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit"></span><span></span></div><div class="d-flex align-items-center work-time"><div class="tool"><span class="work-type work-type-b"><img src="../images/icon-night-1123.png" alt="야근아이콘"></span><span class="tooltip-text wtn">야근</span></div><span>AM 09:00 ~ PM 06:00</span></div></div></div><div class="conWrap-bottom"><div class="d-flex align-items-center justify-content-around"><span>IP</span><span>출근: 111.172.555</span><span>퇴근: 111.172.555</span></div></div></div></div>',
          container: $elem,
        })
})
})

// Home - 팝오버 (연차)
$(function () {
    $('.work-pop02').popover({
        trigger:'click',
        html:true,
        template: '<div class="popover-body new-popover-body work-pop02"><div class="card-work-detail"><div><span class="tit">기본근무</span><span>8시간</span></div><div><span class="tit">연장근무</span><span>2시간</span></div></div></div>'
    })
})

// 부서 근태 일정 -시간 팝오버
$(function () { 
    $('.schedule.type-time').popover({
        trigger:'click',
        html:true,
        template: '<div class="popover-body new-popover-body popover-team"><div class="card-work-detail"><div class="d-flex align-items-center"><div class="tool"><span class="work-type work-type-a"><img src="../images/icon-paper-1123.png" alt="근무아이콘"></span><span class="tooltip-text wta">근무 </span></div><span class="time">AM 09:00~PM 06:00</span></div><div class="d-flex align-items-center"><div class="tool"><span class="work-type work-type-c"><img src="../images/icon-bag-1123.png" alt="외근아이콘"></span><span class="tooltip-text wtc">외근</span></div><span class="time">AM 09:00~PM 06:00</span></div></div></div>'
    })
})

// 부서 근태 일정 - 일정 팝오버
$(function () {
    $('.schedule.type-date').popover({
        trigger:'click',
        html:true,
        template: '<div class="popover-body new-popover-body popover-team"><div class="card-work-detail"><div class="d-flex align-items-center"><div class="tool"><span class="work-type work-type-e"><img src="../images/icon-carrier-1123.png" alt="출장아이콘"></span><span class="tooltip-text wte">출장</span></div><span class="date">6.2 ~ 6.3</span></div></div></div>'
    })
})
/*
<span class="work-type work-type-a">근무</span>
<span class="work-type work-type-b">야근</span>
<span class="work-type work-type-c">외근</span>
<span class="work-type work-type-d">연차</span>
<span class="work-type work-type-e">출장</span>
*/


