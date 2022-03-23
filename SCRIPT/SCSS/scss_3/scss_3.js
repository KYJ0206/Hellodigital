$(()=>{
    $('nav li').click(function(){
        console.log("11")
        $(this).addClass("active").parents('div').siblings().find('.active').removeClass("active");
        if($(this).hasClass('active')){
            $('nav div dl').css({"display": "block"});
        }
    });
});

$(()=>{
    $('nav div dl').click(()=>{
        $('nav div dl').css({"display": "none"});
        $('nav li').removeClass('active')
    })
})
