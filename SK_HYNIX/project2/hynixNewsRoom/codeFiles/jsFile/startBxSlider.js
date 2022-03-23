// {

//   const initBx = () => {
//     $('.bxslider').bxSlider({
//       dots:true, 
//       preloadImages: 'all',
//       mode: 'horizontal',
//       responsive : true,
//       onSliderLoad: () => {
//         $('.bx-viewport').css('height','100%');
//         $('.bxslider').css('height', '100%');
//         $('.bx-wrapper img').css('height', '100%');
//       },
//     });
//   };



//   const init = () => {
//     initBx();
//   }

//   window.onload = init()

// }



//es5 
{
  var initBx = function initBx() {
    $(".bxslider").bxSlider({
      dots: true,
      preloadImages: "all",
      mode: "horizontal",
      responsive: true,
      onSliderLoad: function onSliderLoad() {
        $(".bx-viewport").css("height", "100%");
        $(".bxslider").css("height", "100%");
        $(".bx-wrapper img").css("height", "100%");
      }
    });
  };

  var init = function init() {
    initBx();
  };

  window.onload = init();
}
