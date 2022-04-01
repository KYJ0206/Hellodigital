$( document ).ready(function() {
//   const getText = (removeClass, showClass) => {
//     const content = $(removeClass).text()
//     const text = content.slice(0, 150)
//     $(showClass).html(text)
//     $(removeClass).remove()	
//   }
	function getText (removeClass, showClass) {
		const content = $(removeClass).text()
		const techText = content.replace(/&nbsp;/gi,"").replace(/^\s+|\s+$/gm,'');
		const text = techText.slice(0, 150)
		$(showClass).html(text)
		$(removeClass).remove()	
	}



//   $('.media_downloadWrap .ml_download span').click((e) => {
//     const target = e.target;
//     const dataType = $(target).prev('i').data().data; // 해당 데이터 타입

//     const dataValue = dataType === 'img' && $(target).prev('i').data().img ? $(target).prev('i').data().img : ( dataType === 'video' && $(target).prev('i').data().video ? $(target).prev('i').data().video : $(target).prev('i').data().youtube);


//     if(dataValue.length === 1 && dataType === 'img') {
//       console.log('이미지 다운로드 데이터가 한개입니다.',dataValue);
//       let fileName = getFileName(decodeURIComponent(dataValue.join())); // 배열로 들어오기에 스트링으로 전환
//       saveAs(dataValue,fileName);

//     }else if(dataValue.length > 1 && dataType === 'img') {
//       console.log('이미지 다운로드 데이터가 여러개입니다.',typeof dataValue);
//       let b = dataValue.replace(/\[/g,'');
//       let c = b.replace(/\]/g,'');
//       let arr = c.split(',');
//       arr.forEach(e => {
//         console.log("dataForch",e);
//         let fileName = getFileName(decodeURIComponent(e));
//         saveAs(e,fileName)
//       })
//     }else if(dataValue.length > 1 && dataType === 'video') {
//       let b = dataValue.replace(/\[/g,'');
//       let c = b.replace(/\]/g,'');
//       // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성
//       let arr = c.replace(/\s/gi,'').split(','); 
//       arr.forEach(e => {
//         let fileName = getFileName(decodeURIComponent(e));
//         let blob = new Blob([e],{type:'video/mp4'});
//         saveAs(blob,fileName);
//       });
//     }else if(dataValue.length === 1 && dataType === 'video') {
//       console.log('비디오 다운로드 데이터가 한개입니다.');
//       let fileName = getFileName(decodeURIComponent(dataValue.join()));
//       let blob = new Blob([dataValue],{type : 'video/mp4'});
//       saveAs(blob,fileName);
//     }
//   })

//   const getFileName = (str) => {
//     console.log(str,'12312!!!3')
//     return str.substring(str.lastIndexOf('/'))
//   }


  $(".media_downloadWrap .ml_download span").click(function (e) {
    
    console.log('레거시!!!!');
    
    var target = e.target;
    var dataType = $(target).prev("i").data().data; // 해당 데이터 타입

    var dataValue =
        dataType === "img" && $(target).prev("i").data().img
    ? $(target).prev("i").data().img
    : dataType === "video" && $(target).prev("i").data().video
    ? $(target).prev("i").data().video
    : $(target).prev("i").data().youtube;

    if (dataValue.length === 1 && dataType === "img") {
      console.log("이미지 다운로드 데이터가 한개입니다.", dataValue);
      var fileName = getFileName(decodeURIComponent(dataValue.join())); // 배열로 들어오기에 스트링으로 전환

      saveAs(dataValue, fileName);
    } else if (dataValue.length > 1 && dataType === "img") {
      console.log("이미지 다운로드 데이터가 여러개입니다.", _typeof(dataValue));
      var b = dataValue.replace(/\[/g, "");
      var c = b.replace(/\]/g, "");
      var arr = c.split(",");
      arr.forEach(function (e) {
        console.log("dataForch", e);
        var fileName = getFileName(decodeURIComponent(e));
        saveAs(e, fileName);
      });
    } else if (dataValue.length > 1 && dataType === "video") {
      var _b = dataValue.replace(/\[/g, "");

      var _c = _b.replace(/\]/g, ""); // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성

      var _arr = _c.replace(/\s/gi, "").split(",");

      _arr.forEach(function (e) {
        var fileName = getFileName(decodeURIComponent(e));
        var blob = new Blob([e], {
          type: "video/mp4"
        });
        saveAs(blob, fileName);
      });
    } else if (dataValue.length === 1 && dataType === "video") {
      console.log("비디오 다운로드 데이터가 한개입니다.");

      var _fileName = getFileName(decodeURIComponent(dataValue.join()));

      var blob = new Blob([dataValue], {
        type: "video/mp4"
      });
      saveAs(blob, _fileName);
    }
  });

  var getFileName = function getFileName(str) {
    console.log(str, "12312!!!3");
    return str.substring(str.lastIndexOf("/"));
  };


  getText('.removePress1', '.showPress1')
  getText('.removePress2', '.showPress2')

})