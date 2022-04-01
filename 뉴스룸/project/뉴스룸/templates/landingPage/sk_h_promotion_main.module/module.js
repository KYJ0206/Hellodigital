
// $( document ).ready(function() {
	
// 	$('ul.view-img-thumb li').first().addClass('active')
  
//   // js zip 생성
//   let zip = new JSZip();
  
//   const imageLength = $('.view-img-thumb li div.imgWrap').children('img.files').length;
  
//   const videoLength = $('.view-img-thumb li div.imgWrap').children('video.files').length;
  
//   console.log(videoLength,'2vvvvvvv2');

//   if(imageLength === 1) {
//       $('.inner2').children('button.view-img-download').text('개별 다운로드');
//   }
//   if(videoLength === 1) {
//     console.log('비디오가 한개여')
//     $('.inner2').children('button#download_all').text('개별 다운로드');
//   }
  
//    // title image
//     let btnValue = $('.view-img .imgWrap .lazyload').attr('src')
//    // feature image
//    $('.view-img-thumb .lazyload').click((e) => {
//      let imgPath = $(e.target).attr("src");
//      $('.view-img .imgWrap img').attr("src",imgPath);
//      $('.view-img-thumb li').removeClass('active');
//      $(e.target).parents('li').addClass("active");
//    })
  
//   // url promise 
//   function urlToPromise(url) {
//     return new Promise(function(resolve, reject) {
//       JSZipUtils.getBinaryContent(url, function (err, data) {
//         if(err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   } 
  
//   //다운로드 클릭시 발생 로직
//   $('#download_all').click((e) => {
//     e.preventDefault();
//     let urls = [];
// //     const title = $(e.target).parents('.clear-fix').next('h1').text();
//         const title = $('.clear-fix').next('h1').text();
//         console.log('이벤트 타겟',$(e.target));
//     console.log(title,'제목');
//     // 이미지 로직
//     if($('.view-img-thumb li div.imgWrap img.files').length > 1) {
//       let imgDownLen = $('.view-img-thumb li div.imgWrap').children('img.files').length;
//       for(let i = 0; i < imgDownLen; i++) {
//       urls.push($('.view-img-thumb li div.imgWrap').children('img.files')[i]['src'])
//       } 
//       urls.forEach(e => {
//        let fileName = getFileName(decodeURIComponent(e));
//        zip.file(fileName,urlToPromise(e),{binary:true});
// //         saveAs(e,fileName)
//       })
//       zip.generateAsync({type:"blob"}).then(function callback(blob) {
//         saveAs(blob,`${title}.zip`);
//       });
//     }else {

//       let imgDownLen = $('.view-img-thumb li div.imgWrap').children('img.files').length;
//       for(let i = 0; i < imgDownLen; i++) {
//         urls.push($('.view-img-thumb li div.imgWrap').children('img.files')[i]['src'])
//       } 
//       urls.forEach(e => {
//         let fileName = getFileName(decodeURIComponent(e));
//         saveAs(e,fileName)
//       })
//     }
//     // 비디오 로직
//     console.log($('.view-img-thumb li div.imgWrap video.files').length,'비디오길이');
//     if($('.view-img-thumb li div.imgWrap video.files').length === 1) {
//       let videoDownLen = $('.view-img-thumb li div.imgWrap video').data().url;
//       let fileName = getFileName(decodeURIComponent(videoDownLen));
//       let blob = new Blob([videoDownLen],{type : 'video/mp4'});
//       saveAs(blob,fileName)
      
//       //여러개일 경우
//     }else if($('.view-img-thumb li div.imgWrap video.files').length > 1) {
//       let arr = [];
//       let videoDownLen = $('.view-img-thumb li div.imgWrap video.files').length;
      
//       for(let i = 0; i < videoDownLen; i++){
//         let but = $('.view-img-thumb li div.imgWrap').children('video.files')[i];
//          arr.push($(but).data().url);
//       }
//       arr.forEach(e => {
//        let fileName = getFileName(decodeURIComponent(e));
//        let blob = new Blob([e],{type:'video/mp4'});
//        saveAs(blob,fileName);
//       });
//     }
//   })
  
//   // 파일 네임을 저장하는 힘수
//   const getFileName = (str) => {
//     console.log(str,'123123')
//      return str.substring(str.lastIndexOf('/'))
//   }
  
// });