$(document).ready(function(){ 
  console.log(12);
//   const showArea = (show, noShow) => {
//     $(show).css('display', 'block')
//     $(noShow).css('display', 'none')
//   }
	

// 	$('.ckWrap #ck-recent').click(() => {
		
// 		$('input:checkbox[id="ck-recent"]').prop("checked", true)
// 		$('input:checkbox[id="ck-popularity"]').prop("checked", false)
		
// 		showArea('.conWrap-body-recent', '.conWrap-body-popularity')
		
// 	})
// 	$('.ckWrap #ck-popularity').click(() => {
		
// 		$('input:checkbox[id="ck-recent"]').prop("checked", false)
// 		$('input:checkbox[id="ck-popularity"]').prop("checked", true)
		
// 		showArea('.conWrap-body-popularity', '.conWrap-body-recent')
// 	})
  function getText (removeClass, showClass) {
		const content = $(removeClass).text()
		const techText = content.replace(/&nbsp;/gi,"").replace(/^\s+|\s+$/gm,'');
		const text = techText.slice(0, 150).replace(/(?:\r\n|\r|\n)/g, '<br />');
		$(showClass).html(text)
		$(removeClass).remove()	
	}
	
	getText('.removeAllrecent', '.showAllrecent')
	getText('.removeAllp', '.showAllp')
	getText('.removeTechR', '.showTechR')
	getText('.removeTechP', '.showTechP')
	getText('.removeCR', '.showCR')
	getText('.removeCP', '.showCP')
	getText('.removeSR', '.showSR')
	getText('.removeSP', '.showSP')
	getText('.removePR', '.showPR')
	getText('.removePP', '.showPP')
  
  
  var showArea = function showArea(show, noShow) {
  $(show).css("display", "block");
  $(noShow).css("display", "none");
};

$(".ckWrap #ck-recent").click(function () {
  $('input:checkbox[id="ck-recent"]').prop("checked", true);
  $('input:checkbox[id="ck-popularity"]').prop("checked", false);
  showArea(".conWrap-body-recent", ".conWrap-body-popularity");
});
$(".ckWrap #ck-popularity").click(function () {
  $('input:checkbox[id="ck-recent"]').prop("checked", false);
  $('input:checkbox[id="ck-popularity"]').prop("checked", true);
  showArea(".conWrap-body-popularity", ".conWrap-body-recent");
});

  
  
});
