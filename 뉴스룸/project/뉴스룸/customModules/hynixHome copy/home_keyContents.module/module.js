$( document ).ready(() => {
  const getText = (removeClass, showClass) => {
	  const tech_content = $(removeClass).text()
		const tech = tech_content.slice(0, 100)
		$(showClass).html(tech)
		$(removeClass).remove()	
	}
	
	getText('.removeTech', '.showTech')
	getText('.removeCulture', '.showCulture')
	
  
})