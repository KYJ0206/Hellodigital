$(function () {
    $("body div").fadeIn(500, function () {
        $(this).animate({
            "top": "150px"
        },1000);
    });
    
    $("a").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },500, function () {
            document.location.href = url;
        });
        
        return false;
    });
});


