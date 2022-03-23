const auth = $('#viewAuthor').data().author
const text = $('#viewAuthor').data().text
console.log('왜 클릭이 안되냐')

$('.right-con #viewAuthor').click(function() {
	console.log('123123')
	location.href = `/post/author/${auth}?type=author&text=${text}`
})
