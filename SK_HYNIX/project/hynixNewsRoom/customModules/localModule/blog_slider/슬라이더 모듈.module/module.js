

// $(document).ready(function(){ 
	
// 	function copyToClipboard(val) {
// 		const t = document.createElement("textarea");
// 		document.body.appendChild(t);
// 		t.value = val;
// 		t.select();
// 		document.execCommand('copy');
// 		document.body.removeChild(t);
// 		alert('슬라이더 태그 복사되었습니다.')
// 	}
	
// 	// 코드 변환 및 복사
// 	$('.changeCode').click(() => {
// 		const imageTagLength = $('.imageContainer').children('img').length
// 		const arr = []
// 		for(let i = 1; i <= imageTagLength; i++) {
// 			const url = $(`.slider${i}`).attr('src')
// 			arr.push(url)
// 		}

// 		let item = '<div class="bxslider">'
// 		let item2 = '</div>'
// 		let item3 = '';

// 		arr.forEach(el => item3 += `<img src=${el} alt=${el}>`)

// 		let totalItem = item + item3 + item2

// 		$('code.codeContainer').text(totalItem)
		
// 		copyToClipboard(totalItem)

// 	})
	
// 	const currentLocation = location.href
// 	if(currentLocation.includes('https://blog.hellodigital.co.kr/')) {
// 		$('.imageContainer').css('display', 'none')
// 	}
	
// 	$('.bx-wrapper').css('max-width', '100% !important')
// 	$('.bx-wrapper').css('width', '600px')
// 	$('.bx-wrapper').css('margin', '50px auto')
// });