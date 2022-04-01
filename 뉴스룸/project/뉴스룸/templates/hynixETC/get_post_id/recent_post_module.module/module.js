$('.blogCopy').click((e) => {
	const blogId = $(e.target).parents('div.blogListContainer2').children('input.blogId')
	const blogName = $(e.target).parents('div.blogListContainer2').children('span.blogName').text()
	const id = $(e.target).parents('div.blogListContainer2').children('input.blogId').attr('value')
	$(blogId).select()
	document.execCommand("copy")
	alert(`${blogName} 게시물의 ID : ${id}가 복사되었습니다.`)
})