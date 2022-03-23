// Home - 팝오버
$(function () {
    $('.work-pop01').popover({
        trigger:'hover',
        html:true,
        template: '<div class="popover-body new-popover-body"><div class="card-work-detail"><div class="conWrap-top"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit">기본근무</span><span>8시간</span></div><div class="d-flex align-items-center work-time"><span class="work-type work-type-a">근무</span><span>AM 09:00 ~ PM 06:00</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit">연장근무</span><span>8시간</span></div><div class="d-flex align-items-center work-time"><span class="work-type work-type-c">외근</span><span>AM 09:00 ~ PM 06:00</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-info"><span class="tit"></span><span></span></div><div class="d-flex align-items-center work-time"><span class="work-type work-type-b">야근</span><span>AM 09:00 ~ PM 06:00</span></div></div></div><div class="conWrap-bottom"><div class="d-flex align-items-center justify-content-around"><span>IP</span><span>출근: 111.172.555</span><span>퇴근: 111.172.555</span></div></div></div></div>'
    })
})

// Home - 팝오버 (연차)
$(function () {
    $('.work-pop02').popover({
        trigger:'hover',
        html:true,
        template: '<div class="popover-body new-popover-body work-pop02"><div class="card-work-detail"><div><span class="tit">기본근무</span><span>8시간</span></div><div><span class="tit">연장근무</span><span>2시간</span></div></div></div>'
    })
})

// 부서 근태 일정 -시간 팝오버
$(function () { 
    $('.schedule.type-time').popover({
        trigger:'hover',
        html:true,
        template: '<div class="popover-body new-popover-body popover-team"><div class="card-work-detail"><div class="d-flex align-items-center"><span class="work-type work-type-a">근무</span><span class="time">AM 09:00~PM 06:00</span></div><div class="d-flex align-items-center"><span class="work-type work-type-c">외근</span><span class="time">AM 09:00~PM 06:00</span></div></div></div>'
    })
})

// 부서 근태 일정 - 일정 팝오버
$(function () {
    $('.cell .schedule.type-date').popover({
        trigger: 'hover focus',
        html: true,
        animation : true,
        template:
        '<div class="popover-body new-popover-body popover-team"><div class="card-work-detail"><div class="d-flex align-items-center"><span class="work-type work-type-e">출장</span><span class="date">6.2 ~ 6.3</span></div></div></div>',
        delay: { show: 100},
        viewport : {selector : '.cell', padding : 20}
    });
})



/*
<span class="work-type work-type-a">근무</span>
<span class="work-type work-type-b">야근</span>
<span class="work-type work-type-c">외근</span>
<span class="work-type work-type-d">연차</span>
<span class="work-type work-type-e">출장</span>
*/


