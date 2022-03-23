// {
//   const mediaDownLoad = (type,value) => {
//      if(value.length === 1 && type === 'img') {
//       value.forEach(e => {
//        let fileName = getFileName(e.join()); // 배열로 들어오기에 스트링으로 전환
//         saveAs(e,fileName)
//       })
//     }else if(value.length > 1 && type === 'img') {

//       value.forEach(e => {
//        let fileName = getFileName(e);
//         saveAs(e,fileName)
//       })
//     }else if(value.length > 1 && type === 'video') {
//       value.forEach(e => { 
//        let fileName = getFileName(e);
//        let blob = new Blob(value,{type:'video/mp4'});
//        saveAs(blob,fileName);
//       })
//     }else if(value.length === 1 && type === 'video') {
      
//       let fileName = getFileName(value.join());
//       let blob = new Blob(value,{type : 'video/mp4'});
//       saveAs(blob,fileName);
//     }
//   }
  
//   // 파일 네임을 저장하는 힘수
//   const getFileName = (str) => {
//     return str.substring(str.lastIndexOf('/'))
//   }
  
// 	const globalFuncInit = () => {
//      console.log("시작!!!")
// 	   mediaDownLoad();
//   }
	
// 	window.onload = globalFuncInit()
// }