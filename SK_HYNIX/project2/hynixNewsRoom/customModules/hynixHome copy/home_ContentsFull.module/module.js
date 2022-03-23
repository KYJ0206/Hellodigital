$(document).ready(function(){ 
	const showArea = (show, noShow) => {
		$(show).css('display', 'block')
		$(noShow).css('display', 'none')
	}

	$('.ckWrap #ck-recent').click(() => {
		
		$('input:checkbox[id="ck-recent"]').prop("checked", true)
		$('input:checkbox[id="ck-popularity"]').prop("checked", false)
		
		showArea('.conWrap-body-recent', '.conWrap-body-popularity')
		
	})
	$('.ckWrap #ck-popularity').click(() => {
		
		$('input:checkbox[id="ck-recent"]').prop("checked", false)
		$('input:checkbox[id="ck-popularity"]').prop("checked", true)
		
		showArea('.conWrap-body-popularity', '.conWrap-body-recent')
	})
});
