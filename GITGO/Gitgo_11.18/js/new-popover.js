// DashBord - 팝오버
$(function () {
    $('.work-pop01').popover({
        trigger:'hover',
        html:true,
        template: '<div class="popover-body new-popover-body"><div class="card-work-detail"><div class="conWrap-top"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-e">출장</span><span>홍길동</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-e">출장</span><span>정영업</span></div></div></div><div class="conWrap-bottom"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-f">교육</span><span>홍길동</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-f">교육</span><span>정영업</span></div></div></div></div></div>',
    })

    $('.work-pop02').popover({
        trigger:'hover',
        html:true,
        template: '<div class="popover-body new-popover-body"><div class="card-work-detail"><div class="conWrap-top"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-e">출장</span><span>홍길동</span></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center work-time"><span class="work-type work-type-e">출장</span><span>정영업</span></div></div></div></div></div>',
    })

})




/*
<span class="work-type work-type-a">근무</span>
<span class="work-type work-type-b">야근</span>
<span class="work-type work-type-c">외근</span>
<span class="work-type work-type-d">연차</span>
<span class="work-type work-type-e">출장</span>
<span class="work-type work-type-f">교육</span>
*/


