$( document ).ready(function(){

//   $('.slideWrap').css('display','none');
  $('.slideWrap').css('display','block');
  
   
  const getText = function(removeClass, showClass) {
    $('.keyCon-s').css('visibility','visible');
    $('.keyCon-c').css('visibility','visible');
    $('.keyCon-t').css('visibility','visible');
    
    const tech_content = $(removeClass).text()
	
		const techText = tech_content.replace(/&nbsp;/gi,"").replace(/^\s+|\s+$/gm,'');
    const tech = techText.slice(0, 100);
    $(showClass).html(tech);
    $(removeClass).remove()	
  }
  
  getText('.removeTech1', '.showTech1')
	getText('.removeTech2', '.showTech2')
	getText('.removeTech3', '.showTech3')
//   getText('.removeCulture', '.showCulture')

})