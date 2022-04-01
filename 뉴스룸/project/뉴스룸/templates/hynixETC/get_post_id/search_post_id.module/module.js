const getList = (arr) => {
	if(arr.length === 0 || arr === null || arr === undefined) {
		return ``
	} else {
		let item = '';
		const list = arr.map((el,index) => {
			const {date, title, id} = el;
			return `<div class='blogListContainer' style='width: 100%; display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;'>
		<input class='apiBlogId' readonly style='width: 15%; border:none; outline:none;' value=${id}>
		<span class='apiBlogName' style='width: 65%'>${title}</span>
		<button class='apiCopy' style='width: 10%'>복사하기</button></div>`
		})
		list.forEach(el => item += el)
		return item;
	}
}

let POST_VALUE = 54615482386

const searchArticle = async (searchText) => {
	try {
		 
		const sendObject = {
			id: parseInt(POST_VALUE),
			searchText: searchText,
		}
		const res = await fetch(`https://www.hynixapi.com/blog/relative`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(sendObject)
		})
		const data = await res.json()
		if(data.status === 200) {
			console.log(data,'DATA')
			const list = data.relationWord;
			console.log(list, "LIST")
// 			ORIGIN_LIST.push(...list)
			$('.postArea').html(getList(list))

			$('.apiCopy').click((e) => {
				const blogId = $(e.target).parents('div.blogListContainer').children('input.apiBlogId')
				const blogName = $(e.target).parents('div.blogListContainer').children('span.apiBlogName').text()
				const id = $(e.target).parents('div.blogListContainer').children('input.apiBlogId').attr('value')

				$(blogId).select()
				document.execCommand("copy")
				alert(`${blogName} 게시물의 ID : ${id}가 복사되었습니다.`)
			})
		} 
		if(data.status === 400) {
			alert(data.msg)
		}
	} catch(e) {
		console.log(e)
	}
}

$('.searchPostBtn').click(() => {
	  const searchText = $('.searchPostName').val()
		searchArticle(searchText)
	})

$('.selectPost').change((e) => {
	POST_VALUE = e.target.value 
})
$('.searchPostName').on('keypress', (key) => {
	const searchText = $('.searchPostName').val()
	if(key.keyCode === 13) {
		searchArticle(searchText)
	}
})
