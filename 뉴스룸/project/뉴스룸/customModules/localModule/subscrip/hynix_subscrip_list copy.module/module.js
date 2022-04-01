// const liList = $('.col-r ul').children('li')

// for(let i = 1; i <= liList.length; i++ ) {
// 	const origin = $(`.col-r ul li.media-recent-${i} span.footer-topic`).text()
// 	if(origin.includes('카테고리-')) {
// 		const removeText = origin.split('-')
// 		if(removeText.length > 2) {
// 			const text = removeText.slice(1, removeText.length).join('&')
// 			$(`.col-r ul li.media-recent-${i} span.footer-topic`).text(text)
// 		} else {
// 			$(`.col-r ul li.media-recent-${i} span.footer-topic`).text(removeText[1])
// 		}
// 	}
// 	if(origin.includes('blog-')) {
// 		const removeText = origin.split('-')[1]
// 		$(`.col-r ul li.media-recent-${i} span.footer-topic`).text(removeText[1])
// 	}
//   $(`.col-r ul li.media-recent-${i} span.footer-topic`).css('display', 'inline-block')
	
// }


// // ==== es5


var liList = $('.col-r ul').children('li');

for (var i = 1; i <= liList.length; i++) {
	var origin = $('.col-r ul li.media-recent-' + i + ' span.footer-topic').text();
	if (origin.includes('카테고리-')) {
		var removeText = origin.split('-');
		if (removeText.length > 2) {
			var text = removeText.slice(1, removeText.length).join('&');
			$('.col-r ul li.media-recent-' + i + ' span.footer-topic').text(text);
		} else {
			$('.col-r ul li.media-recent-' + i + ' span.footer-topic').text(removeText[1]);
		}
	}
	if (origin.includes('blog-')) {
		var _removeText = origin.split('-')[1];
		$('.col-r ul li.media-recent-' + i + ' span.footer-topic').text(_removeText[1]);
	}
	$('.col-r ul li.media-recent-' + i + ' span.footer-topic').css('display', 'inline-block');
}
