$( document ).ready(function() {
  console.log(111);
  $('.press-alramWrap').css('display','none');
});

var p = document.getElementsByTagName('p'); Array.prototype.forEach.call(p, function(el) { el.innerHTML = el.innerHTML.replace(/&nbsp;/gi, ''); });
