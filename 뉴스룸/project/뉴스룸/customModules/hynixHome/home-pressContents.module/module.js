$( document ).ready(() => {
  const getText = (removeClass, showClass) => {
	  const content = $(removeClass).text()
		const text = content.slice(0, 150)
		$(showClass).html(text)
		$(removeClass).remove()	
	}
	
	getText('.removePress1', '.showPress1')
	getText('.removePress2', '.showPress2')
	
  
})