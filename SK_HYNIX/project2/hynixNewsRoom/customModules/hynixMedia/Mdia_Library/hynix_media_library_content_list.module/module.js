// {
// 	const removeCategory = () => {
// 		const perentsLength = $('.ml_con_info .info').children('span.name').length
// 		for(let i = 1; i <= perentsLength; i++) {
// 			const chideLength = $(`.ml_con_info .info #name${i}`).children('a.topicText').length;
// 			for(let j = 1; j <= chideLength; j++) {
// 				const text = $(`#name${i} .topicText${j}`).text()	
// 				if(text.includes('카테고리-')) {
// 					$(`.ml_con_info .info #name${i} .topicText${j}`).remove()
// 				}
// 			}
// 		}
// 	}


// 	window.onload = removeCategory()
// }