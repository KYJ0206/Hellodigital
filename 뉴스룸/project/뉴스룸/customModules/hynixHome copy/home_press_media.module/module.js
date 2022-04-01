$( document ).ready(() => {
  const getText = (removeClass, showClass) => {
	  const content = $(removeClass).text()
		const text = content.slice(0, 150)
		$(showClass).html(text)
		$(removeClass).remove()	
	}
  
  
  
  $('.media_downloadWrap .ml_download span').click((e) => {
     const target = e.target;
     const dataType = $(target).prev('i').data().data; // 해당 데이터 타입
     const dataValue = $(target).prev('i').data().img ? $(target).prev('i').data().img : ($(target).prev('i').data().video ? $(target).prev('i').data().video : $(target).prev('i').data().youtube);
    
    console.log(dataType,dataValue,'밸류타입');
    
     if(dataValue.length === 1 && dataType === 'img') {
      console.log('이미지 다운로드 데이터가 한개입니다.',dataValue);
      let fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환
      saveAs(dataValue,fileName);
      
    }else if(dataValue.length > 1 && dataType === 'img') {
      console.log('이미지 다운로드 데이터가 여러개입니다.',typeof dataValue);
      let b = dataValue.replace(/\[/g,'');
      let c = b.replace(/\]/g,'');
      let arr = c.split(',');
      arr.forEach(e => {
        console.log("dataForch",e);
       let fileName = getFileName(e);
        saveAs(e,fileName)
      })
    }else if(dataValue.length > 1 && dataType === 'video') {
      let b = dataValue.replace(/\[/g,'');
      let c = b.replace(/\]/g,'');

       
      let csvData=''; 
      let arr = c.replace(/\s/gi,'').split(',');
      arr.forEach(e => {
       let fileName = getFileName(e);
       let BOM = "\uFEFF";
       csvData += BOM + e;
       console.log(csvData,'CSVDATA');
       let blob = new Blob([csvData],{type:'video/mp4'});
       saveAs(blob,fileName);
      })
//       arr.map(e => { 
//         let fileName = getFileName(e); 
//         let blob = new Blob([e],{type:'video/mp4'})
//         return saveAs(blob,fileName)
//         });

    }else if(dataValue.length === 1 && dataType === 'video') {
      console.log('비디오 다운로드 데이터가 한개입니다.');
      let fileName = getFileName(dataValue.join());
      let blob = new Blob([dataValue],{type : 'video/mp4'});
      saveAs(blob,fileName);
    }
  })
  
  const getFileName = (str) => {
    console.log(str,'12312!!!3')
     return str.substring(str.lastIndexOf('/'))
  }
  
	getText('.removePress1', '.showPress1')
	getText('.removePress2', '.showPress2')
	
})