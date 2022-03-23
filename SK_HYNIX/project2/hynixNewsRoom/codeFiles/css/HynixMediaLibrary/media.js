{
  $( document ).ready(function() {
   // title image
    let btnValue = $('.view-img .imgWrap .lazyload').attr('src')
    
   // feature image
   $('.view-img-thumb .lazyload').click((e) => {
     console.log('click!!!');
      let imgPath = $(e.target).attr("src");
      console.log(imgPath,'IMGPATH')
        $('.view-img .imgWrap .lazyload').attr({src:imgPath})
        $('.view-img-thumb li').removeClass('active');
        $(e.target).parent('li').addClass("active");
     })
});

}