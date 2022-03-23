$(function () {

    initScene();
  
    function initScene() {
  
      var $container = $('#scene'), 
        $masks = $container.find('.mask'), 
        $lines = $masks.find('.line'), 
        maskLength = $masks.length, 
  
        maskData = []; 
  
      // 자를 왼쪽 좌표를 저장
      $masks.each(function (i) {
        maskData[i] = {left: 0};
      });
  
      $container.on({
        mouseenter: function () {
          resizeMask($(this).index());
        },
        mouseleave: function () {
          resizeMask(-1);
        }
      }, '.mask');
  
      resizeMask(-1); //처음값
  
      function resizeMask(active) {
  
        var w = $container.width(),
          h = $container.height();
  
        $masks.each(function (i) {
  
          var $this = $(this), 
            lpoint; // 자를 왼쪽 좌표
  
          if (active === -1) {
            lpoint = w / maskLength * i;
          } else if (active < i) { //마우스 오른쪽편 마스크는
            lpoint = w * (1 - 0.1 * (maskLength - i));
          } else {
            lpoint = w * 0.1 * i;
          }
  
          $(maskData[i]).stop(true).animate({
            leftrec: lpoint
          }, {
            duration: 1000,
            easing: 'easeOutQuart',
            progress: function () {
              var now = this.leftrec;
              $this.css({clip: 'rect(0px ' + w + 'px ' +h + 'px ' + now + 'px)'});
              $this.find($lines).css({
                left: now
              });
            }
          });
        });
      }
    }
  
  });