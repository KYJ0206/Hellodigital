// {
//   let DOWNLOAD_ARR = [];
//   let DOWNLOAD_VALUE_LIST = [];
//   let zip = new JSZip();
//   let OFFSET = 0;
//   const recentBlogLength = $('.container.media_module.media-list-contents .conWrap-body.conWrap-body-recent .inner2 .listWrap.recent-blog').children('div').length;
//   const popularBlogLength = $('.container.media_module.media-list-contents .conWrap-body.conWrap-body-popularity .inner2 .listWrap.popular-blog').children('div').length;
//   const pathName = window.location.pathname;
//   let percent = 0;
  
//   let API_TOTAL_DATA = []; //받아오는 데이터
//   let API_TYPE_IMG = []; //이미지만 넣은 데이터
//   let API_TYPE_VIDEO = []; //비디오만 넣은 데이터
  
  
//   let progressbar = $('.w3-light-grey .w3-green');
  
  
  
//   $('.loading-container').css('display','none');
//   $('.statusbarWrap').css('display','none');
  
//   // 쿼리 스트링 가져오는 함수
//   const searchParamHandler = (key) => {
//     return new URLSearchParams(location.search).get(key);
//   };
	
// 	const searchText = searchParamHandler('searchText')
// 	const searchType = searchParamHandler('searchType')
// 	const category = searchParamHandler('category') ? searchParamHandler('category') : ''
  
//   // conWrap 디스플레이 유무
//   if($('.listItem').hasClass('active')) {
//     $('.conWrap').css('display','flex');
//   }else {
//     $('.conWrap').css('display','flex');
//     $('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
//     $('.orderItem.text').css('display','none');
//     $('.orderItem.ck-remove').css('display','none'); //일괄취소
// //     $('.orderItem.ck-all').css('display','flex');
//   }
	
// 	const removeCategory = () => {
// 		const nameTagLength = $('.ml_con_info .info').children('.name').length;
// 		for(let i = 1; i <= nameTagLength; i++) {
// 			const tagLength = $(`.ml_con_info .info #name${i}`).children('a.topicText').length;	

// 			for(let j = 1; j <= tagLength; j++) {
// 				const text = $(`#name${i} #topicText${j}`).text()
// 				if(text.includes('카테고리')) {
// 					$(`.ml_con_info .info #name${i} a#topicText${j}`).remove()
// 				}
// 			}
// 		}
// 	}
  
//   // 다운로드 길이에 따른 함수 로직
//   const downLoadSelectHandler = (arrData) => {
//     if(arrData >= 1) {
//       $('.conWrap').css('display','flex');
//       $('.orderItem.color-blue.order-download').css('display','block');// 선택 다운로드
//       $('.orderItem.text').css('display','block');
//       $('.orderItem.ck-remove').css('display','block'); //일괄취소
//     }else {
//       $('.conWrap').css('display','flex');
//       $('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
//       $('.orderItem.text').css('display','block');
//       $('.orderItem.ck-remove').css('display','none'); //일괄취소
//     }
//   }
 
  
//   // --------------체크박스 & PLUS ---------------- //
  
  
//   const clickPlusHandler = () => {
//     $('.media_module .imgBx .imgWrap .thumbPlus').click((e) => {
//       const eleValue = $(event.target).parents('.imgBx').next();
//       let b = (eleValue).attr('href');
//       $(location).attr('href',b);
//     })
//   }

//   //--------------------------------------------------------------------------------------------------------------------------------
//   //체크박스 핸들러
//   const checkBoxHandler = () => {
//     $('.thumbCheck').click((e) => {
//       if($(event.target).parents('.listItem').hasClass('active')) {

//         $(event.target).parents('.listItem').removeClass('active');

//         const eleValue = $(event.target).parents('a').next();
//         const dataTypes = $(event.target).parents('a').next().data().data; // 해당 데이터 타입
//         const dataValues = dataTypes === 'img' && $(eleValue).data().img ? $(eleValue).data().img : ( dataTypes === 'video' && $(eleValue).data().video ? $(eleValue).data().video  :$(eleValue).data().youtube);

//         let b = dataValues.replace(/\[/g,'');
//         let c = b.replace(/\]/g,'');
//         let arr = c.replace(/\s/gi,'').split(',');

//         // 배열과 배열을 비교할 수 없기에 JSON.stringify로 변경하여 조건을 탐색 
//         let kkk = DOWNLOAD_ARR.filter(el => JSON.stringify(el.dataValue) !== JSON.stringify(arr));
//         DOWNLOAD_ARR = [];
//         DOWNLOAD_ARR.push(...kkk);
//       }
//       // 선택 개별 클릭
//       else if($(event.target).parents('.listItem').hasClass('listItem')) {
//         $(event.target).parents('.listItem').addClass('active');

//         const eleValue = $(event.target).parents('a').next();
//         const dataTypes = $(event.target).parents('a').next().data().data; // 해당 데이터 타입
//         const dataValues = dataTypes === 'img' && $(eleValue).data().img ? $(eleValue).data().img : ( dataTypes === 'video' && $(eleValue).data().video ? $(eleValue).data().video  :$(eleValue).data().youtube);

//         // 헤당 제목을 가져오는 title 변수 
//         let title = $(event.target).parents('.imgBx').next('a').children('h3').text();

//         const dataFile = {dataType : dataTypes,dataValue: dataValues, datatitle:title};
//         const {dataType,dataValue,datatitle} = dataFile;

//         if(dataValue.length === 1 && dataType === 'img') {
//           let fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환
//           DOWNLOAD_ARR.push(dataValue);
//         }else if(dataValue.length > 1 && dataType === 'img') {

//           let b = dataValue.replace(/\[/g,'');
//           let c = b.replace(/\]/g,'');
//           let arr = c.replace(/\s/gi,'').split(',');
//           let obj = {dataType,dataValue : [],datatitle}

//           arr.forEach(e => {
//             obj.dataValue.push(e);
//           })
//           DOWNLOAD_ARR.push(obj);

//         }else if(dataValue.length > 1 && dataType === 'video') {
//           let b = dataValue.replace(/\[/g,'');
//           let c = b.replace(/\]/g,'');
//           // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성
//           let arr = c.replace(/\s/gi,'').split(','); 
//           let obj = {dataType,dataValue : [],datatitle}
//           arr.forEach(e => {
//             obj.dataValue.push(e);
//           });
//           DOWNLOAD_ARR.push(obj);
//         }else if(dataValue.length === 1 && dataType === 'video') {
//           DOWNLOAD_ARR.push(dataValue);
//         }
//       }
//       let lengthText = $(DOWNLOAD_ARR).length;
//       let a = $('em.color-blue').text(`${lengthText}개 항목`);
//       downLoadSelectHandler(lengthText);
//     })
    
//   }
  
  

//   const downLoadFileLogic = (dataType,dataValue,datatitle) => {

//     if(dataValue.length === 1 && dataType === 'img') {
//       let fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환
// 			console.log(DOWNLOAD_ARR,'!@#!@#')
//       DOWNLOAD_ARR.push(dataValue);
//     }else if(dataValue.length > 1 && dataType === 'img') {
//       let b = dataValue.replace(/\[/g,'');
//       let c = b.replace(/\]/g,'');
//       let arr = c.replace(/\s/gi,'').split(',');
//       let obj = {dataType,dataValue : [],datatitle}

//       arr.forEach(e => {
//         obj.dataValue.push(e);
//       })
//       DOWNLOAD_ARR.push(obj);
//     }else if(dataValue.length > 1 && dataType === 'video') {
//       let b = dataValue.replace(/\[/g,'');
//       let c = b.replace(/\]/g,'');
//       // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성
//       let arr = c.replace(/\s/gi,'').split(','); 
//       let obj = {dataType,dataValue : [],datatitle}
//       arr.forEach(e => {
//         obj.dataValue.push(e);
//       });
//       DOWNLOAD_ARR.push(obj);
//     }else if(dataValue.length === 1 && dataType === 'video') {
//       DOWNLOAD_ARR.push(dataValue);
//     }
//     let lengthText = $(DOWNLOAD_ARR).length;
//     $('em.color-blue').text(`${lengthText+1}개 항목`);
//   }
  
  
//   const fileTypeHandler = (file) => {
//     $('.statusbarWrap').css('display','flex');
//     $('.w3-light-grey .w3-green').css('display','block');

//       file.filter(ele => {
//         if(ele.dataType === 'img') {
//           ele.dataValue.map(el => {
//             let fileName = getFileLogic(decodeURIComponent(el));
//             zip.file(`다운로드 폴더/${ele.datatitle}/${fileName}`,urlToPromise(el),{binary:true});
//           });
//         }else if(ele.dataType === 'video') {
//           ele.dataValue.map(el => {
//             let fileName = getFileLogic(decodeURIComponent(el))
//             let blob = new Blob([el],{type:'video/mp4'});
//             zip.file(`다운로드 폴더/${ele.datatitle}/${fileName}`,urlToPromise(el),{binary:true});
//           })
//         }
//       })
      
//       zip.generateAsync({type:"blob",streamFiles:true}, function updateCallback(metadata){
                
//           percent = metadata.percent;
//           $(progressbar).css(`width`,`${percent}%`)
//           $('.barText').text(`${Math.floor(percent)}%`)
//       })
//         .then(function callback(blob) {
//         $('.statusbarWrap').css('display','none');
//         $('.w3-light-grey .w3-green').css('display','none');
//         saveAs(blob,`다운로드.zip`)
//       }).finally(() =>{
//         // 0930
//         zip.remove('다운로드 폴더');
//         $('em.color-blue').text(`0개 항목`);
//         percent = 0
//         $('.barText').text(`${percent}%`);
//         $('.listItem').removeClass('active');
				
// 				$('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
// 				$('.orderItem.text').css('display','none');
// 				$('.orderItem.ck-remove').css('display','none'); //일괄취소
//       })  
//     }

    
//   // getFileName의 역활과 비슷한 함수
//   const getFileLogic = (str) => {
//     return str.substring(str.lastIndexOf('/'));
//   }
//   //------- 체크박스 ---------- //
  
//   // ------------  전체선택리스트 ------- //
//   const allSelectorClickHandler = () => {
//     $('.orderItem.ck-all').click(() => {
//       DOWNLOAD_ARR = [];
//       console.log('!@#757657')
//       let selectorActive = null;
      
// 			selectorActive =  $('.conWrap-body-recent .listItem').not('.blog-hidden').addClass('active');
// 			console.log(selectorActive, 'ACTIV123E!')

//       $('.conWrap').css('display','flex');
//       // viewer* 
//       $('.orderItem.color-blue.order-download').css('display','block');// 선택 다운로드
//       $('.orderItem.text').css('display','block');
//       $('.orderItem.ck-remove').css('display','block'); //일괄취소
      
//       const allSelector = $(selectorActive);
//       const totalListLength = $('.listWrap.recent-blog').children('.listItem.active').length;
// 			console.log(totalListLength, '!@#')
//       let title = [];
//       let arrTitle = [];
//       for( let i = 1; i <= totalListLength; i++) {
//         title.push($(`.listItem.test${i}.active a h3`).text())
//         //       console.log($(`.listItem.test${i}.active a h3`).text())
//       }
//       for(let i = 1; i <= allSelector.length; i++ ) {
//         let dataType = $(`.test${i} a`).next('a').data().data; // 해당 데이터 타입
//         if(dataType !== undefined){
//           let target = $(`.test${i} a`).next('a');
//           let dataValue = dataType === 'img' && $(target).data().img ? $(target).data().img : ( dataType === 'video' && $(target).data().video ? $(target).data().video : $(target).data().youtube);
// 					console.log(dataValue,'???')
//           downLoadFileLogic(dataType,dataValue,title[i-1]);
//         }
//       }
			
//       let a = $('em.color-blue').text(`${totalListLength}개 항목`);
//       //     fileTypeHandler(DOWNLOAD_ARR);
//     })
    
//   }
  
  
//   // 선택 취소
//    $('.orderItem.ck-remove').click(() => {
//       $('.listItem').removeClass('active');
//       DOWNLOAD_ARR = [];
//       $('em.color-blue').text(`0개 항목`);
//      $('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
//      $('.orderItem.text').css('display','none');
//      $('.orderItem.ck-remove').css('display','none'); //일괄취소
//   })
  
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
  
//   // ----------- 다운로드 로직 ----------------//
  
//   const individualHandler = () => {
//     $('.hoverInDownload').click((e) => {
//       const target = e.target;
//       const dataType = $(target).data().data; // 해당 데이터 타입
//       const dataValue = dataType === 'img' && $(target).data().img ? $(target).data().img : ( dataType === 'video' && $(target).data().video ? $(target).data().video : $(target).data().youtube);
//       // 미디어 게시물 제목 
//       const title = $(target).parents('.imgBx').next('a').children('h3').text();

//       if(dataValue.length === 1 && dataType === 'img') {
//         $('.statusbarWrap').css('display','flex');
//         $('.w3-light-grey .w3-green').css('display','block');
//         let fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환
//         saveAs(dataValue,fileName);
//         DOWNLOAD_ARR = [];
//       }else if(dataValue.length > 1 && dataType === 'img') {
//         $('.statusbarWrap').css('display','flex');
//         $('.w3-light-grey .w3-green').css('display','block');
//         let b = dataValue.replace(/\[/g,'');
//         let c = b.replace(/\]/g,'');
//         let arr = c.split(',');
//         arr.forEach((e,index) => {
//           let fileName = getFileName(decodeURIComponent(e));
//           zip.file(fileName,urlToPromise(e),{binary:true});
//         })
// //         zip.generateAsync({type:"blob",streamFiles:true}).then(function callback(blob) {
// //           saveAs(blob,`${title}.zip`);
// //         });
//         zip.generateAsync({type:"blob",streamFiles:true}, function updateCallback(metadata){
//           percent = metadata.percent;
//           $(progressbar).css(`width`,`${percent}%`)
//           $('.barText').text(`${Math.floor(percent)}%`)
//         })
//           .then(function callback(blob) {
//           $('.statusbarWrap').css('display','none');
//           $('.w3-light-grey .w3-green').css('display','none');
//           saveAs(blob,`${title}.zip`)
//         }).finally(() =>{
//           DOWNLOAD_ARR = [];
//           $('em.color-blue').text(`0개 항목`);
//           percent = 0

//           $('.barText').text(`${percent}%`);
//           $('.listItem').removeClass('active');
					
// 					$('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
// 				$('.orderItem.text').css('display','none');
// 				$('.orderItem.ck-remove').css('display','none'); //일괄취소
//         })


//       }else if(dataValue.length > 1 && dataType === 'video') {
//         $('.statusbarWrap').css('display','flex');
//         $('.w3-light-grey .w3-green').css('display','block');

//         let b = dataValue.replace(/\[/g,'');
//         let c = b.replace(/\]/g,'');
//         // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성
//         let arr = c.replace(/\s/gi,'').split(','); 
//         arr.forEach(e => {
//           let fileName = getFileName(decodeURIComponent(e));        
//           let blob = new Blob([e],{type:'video/mp4'});
//           zip.file(fileName,urlToPromise(e),{binary:true});
//         })
// //         zip.generateAsync({type:"blob",streamFiles:true}).then(function (blob) {
// //           saveAs(blob,"exampleis.zip")
// //         });
//         zip.generateAsync({type:"blob",streamFiles:true}, function updateCallback(metadata){
//           percent = metadata.percent;
//           $(progressbar).css(`width`,`${percent}%`)
//           $('.barText').text(`${Math.floor(percent)}%`)
//         })
//           .then(function callback(blob) {
//           $('.statusbarWrap').css('display','none');
//           $('.w3-light-grey .w3-green').css('display','none');

//           saveAs(blob,`다운로드.zip`)
//         }).finally(() =>{
//           DOWNLOAD_ARR = [];
//           $('em.color-blue').text(`0개 항목`);
//           percent = 0

//           $('.barText').text(`${percent}%`);
//           $('.listItem').removeClass('active');
					
// 					$('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
// 					$('.orderItem.text').css('display','none');
// 					$('.orderItem.ck-remove').css('display','none'); //일괄취소
//         })  
//       }else if(dataValue.length === 1 && dataType === 'video') {

//         let fileName = getFileName(decodeURIComponent(dataValue.join()));
//         let blob = new Blob([dataValue],{type : 'video/mp4'});
//         zip.file(fileName,urlToPromise(e),{binary:true});
//                 zip.generateAsync({type:"blob",streamFiles:true}, function updateCallback(metadata){
//           percent = metadata.percent;
//           $(progressbar).css(`width`,`${percent}%`)
//           $('.barText').text(`${Math.floor(percent)}%`)
//         })
//           .then(function callback(blob) {
//           $('.statusbarWrap').css('display','none');
//           $('.w3-light-grey .w3-green').css('display','none');

//           saveAs(blob,`${fileName}.zip`)
//         }).finally(() =>{
//                   DOWNLOAD_ARR = [];
//                   $('em.color-blue').text(`0개 항목`);
//           percent = 0

//           $('.barText').text(`${percent}%`);
//           $('.listItem').removeClass('active');
									
// 									$('.orderItem.color-blue.order-download').css('display','none');// 선택 다운로드
// 									$('.orderItem.text').css('display','none');
// 									$('.orderItem.ck-remove').css('display','none'); //일괄취소
//         })  
// //         saveAs(blob,fileName);
//       }
//     })
//   }
 
//   const getFileName = (str) => {
//     return str.substring(str.lastIndexOf('/'))
//   }
  
  
//   // ---------- 다운로드 로직 끝 -----------------//
  
//   if(pathName === '/library') {
//       $('.listingContent').css('display','none');
//       for(let i = 12; i < recentBlogLength; i++) {
//         const li = $('.container.media_module.media-list-contents .conWrap-body.conWrap-body-recent .inner2 .listWrap.recent-blog').children('div')[i];
//         $(li).addClass('blog-hidden');
//     }
//     for(let i = 12; i < popularBlogLength; i++) {
//       const li = $('.container.media_module.media-list-contents .conWrap-body.conWrap-body-popularity .inner2 .listWrap.popular-blog').children('div')[i];
//       $(li).addClass('blog-hidden');
//     }
    
 
//     // 최신클릭
//     $('.ckWrap #ck-recent').click(() => {
//       $('input:checkbox[id="ck-recent"]').prop("checked", true);
//       $('input:checkbox[id="ck-popularity"]').prop("checked", false);      
//       $('.recent-blog-btn').css('display', 'flex')
     
//       showArea()
//     })
//     // 인기클릭
//     $('.ckWrap #ck-popularity').click(() => {
//       $('input:checkbox[id="ck-recent"]').prop("checked", false)
//       $('input:checkbox[id="ck-popularity"]').prop("checked", true)
//       $('.recent-blog-btn').css('display', 'none')

//       showArea()
//     })
    
//     $(function () {
//       $("#loady").on('click', function (e) {
//         e.preventDefault();

//         let slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 12)
//         slideItem.slideDown();
//         slideItem.css('display','block');
// 				console.log('여기?!!?', $(".recent-blog .blog-hidden:hidden").length)
//         if ($(".recent-blog .blog-hidden:hidden").length == 12) {
//           $("#loady").fadeOut('slow');
// 					$('.media-total-page').css('display', 'flex')
// 					console.log('여기?!!@@?')
//         }
//         $('html,body').animate({
//           scrollTop: $(this).offset().top - 100
//         }, 1000);
//         slideItem.removeClass('blog-hidden');
				
//       });
//     });
    
//     $(function () {
//       $("#loady2").on('click', function (e) {
//         e.preventDefault();
//         let slideItem = $(".popular-blog .blog-hidden:hidden").slice(0, 12)
//         slideItem.slideDown();
//         slideItem.css('display','block');
//         if ($(".popular-blog .blog-hidden:hidden").length == 0) {
//           $("#loady").fadeOut('slow');
//         }
//         $('html,body').animate({
//           scrollTop: $(this).offset().top - 100
//         }, 1000);
//       });
//     });
    

// //     $('.input-search').click(() => {
// //       const value = $('.input-searchWrap input').val()
// //       location.href = `/library?searchText=${value}`
// //     })
// // 		$('.input-searchWrap input').on('keyup', (key) => {
// // 			if(key.keyCode === 13) {
// // 				const value = $('.input-searchWrap input').val()
// //         location.href = `/library?searchText=${value}`
// // 			}
// // 		})
    
// //     $('.input-searchWrap input').on("keyup",function(key){
         
// //       const value = $('.input-searchWrap input').val()
// //       let radioVal = $('.radioWrap input[name="radio"]:checked').val()

// //       if(value){
// //         if(key.keyCode==13) {
// //           searchHandler(value,radioVal);
// //         }
// //       }else {
// //         $('.search-full.media-list-search').css('display','block');
// //         $('.categoryWrap').css('display','block');
// //       }
// //     });
//   }
  
//   if(pathName !== '/library') {
//     $('.listingContentOrigin').css('display','none');
//     $('.listingContent').css('display','block');
//   }
  
//   const selectDown = ( ) => {
//     // ------------ 선택 다운로드 ------- // 
//     $('.orderItem.color-blue.order-download').click(() => {
//       if(DOWNLOAD_ARR.length === 0) {
//         return alert('파일을 선택하여 주세요.');
//       }
//       fileTypeHandler(DOWNLOAD_ARR);
//     }) 
//   }

//   const getTagList = (arr) => {
//     if(arr === null || arr === undefined || arr.length === 0){
//       return '';
//     } else {
//       let item = '';
//       const list = arr.map((el, index) => {
//         return `<a href='/library/tag/${el}/page/1' id='topicText${index + 1}' class='topicText'>#${el}</a>`
//       })
//       list.forEach((el) => item += el)
//       return item
//     }
//   }
  
  
//       const typeRenderHandler = (mediaType,videoFile,youtubeId,imageFile,featured_image,noImage) => {
      
//       let renderList = '';
//       if(mediaType === 'video'){
//         let trance = `[${videoFile}]`
//         renderList = `
//           <div class="img-type img-type-mov" data-url=${trance}></div>
//           <img src="${featured_image ? featured_image : noImage}" class=" ls-is-cached lazyloaded" alt="img">
//           <span class="thumbCheck"></span>`
//       }else if (mediaType === 'img'){
//         let trance = `[${imageFile}]`
//         renderList = `
//           <div class="img-type img-type-pic" data-url=${trance}></div>
//           <img src="${featured_image ? featured_image : noImage}" class=" ls-is-cached lazyloaded" alt="img">
//           <span class="thumbCheck"></span>`
//       }else{
//         renderList = `
//         <div class="img-type img-type-youtube"></div>
//         <img src="${featured_image ? featured_image : noImage}" class=" ls-is-cached lazyloaded" alt="img">
//         `
//       }
//       return renderList;
//     }
      
//       const downLoadUrlHandler = (mediaType,videoFile,youtubeId,imageFile,featured_image,noImage) => {
//         let downLoad = '';
//         if(mediaType === 'video'){
//           let trance = `[${videoFile}]`
//           downLoad = `<a class='hoverInDownload' data-data=${mediaType} data-video=${trance} style="cursor:pointer"><i></i>"다운로드"</a>`
//         }else if (mediaType === 'img'){
//           let trance = `[${imageFile}]`
//           downLoad = `<a class='hoverInDownload' data-data=${mediaType} data-img=${trance} style="cursor:pointer"><i></i>"다운로드"</a>`
//         }else{
//           downLoad = `<a class='hoverInDownload' data-data=${mediaType} data-youtube=${youtubeId} style="cursor:pointer"><i></i>"다운로드"</a>`
//         }
//         return downLoad;
//       }
  
  
//   const getblogList = (arr) => {
//     const noImage = '{{get_asset_url("/hynixNewsRoom/codeFiles/images/contentImage/groupO2x.png")}}'
//     if(arr === null || arr === undefined || arr.length === 0) {
//       $('.ckWrap').css('display','block');
// 			$('.noSearchContainer').css('display', 'flex')
//       return ``
//     } else {
//       const renderList = arr.map((el, index) => {
//         const {date,featured_image,id,imageFile,tags,mediaType,title,youtubeId,url,videoFile} = el 
//         let renderTag = '';
//         const dataType = mediaType === 'image'      
//         const tag = tags ? tags.map(el => el ? renderTag += `<span class='name'>#${el}</span>` : renderTag += '') : '';    
// 				const showClassName = index >= 12 ? `listItem test${index+1} blog-hidden` : `listItem test${index+1}`
//         return `
//           <div class="${showClassName}">
//             <div class='imgBx'>
//               <a>
//                 <div class="imgWrap">
//                   <span class="thumbPlus">선택완료</span>
//                   ${typeRenderHandler(mediaType,videoFile,youtubeId,imageFile,featured_image,noImage)}
//                 </div>
//               </a>
//             ${downLoadUrlHandler(mediaType,videoFile,youtubeId,imageFile,featured_image,noImage)}
//             </div>
//             <a href=${url}><h3>${title}</h3></a>
//             <hr>
//             <div class="ml_con_info">
//               <div class="info">
              
//                 <span id='name${index + 1}' class='name'>${getTagList(el.tags)}</name>
//               </div>
//             </div>
//           </div>
// `
//       })
//       return renderList;
//     }
//   }
  
  
  
//   const listRenderHandler = (data,itemLength,total) => {


//     const recentBlogLength = $('.conWrap-body-recent .inner2 .listWrap.recent-blog-api').children('div').length;
//     const mainArea = $('.inner2 .listWrap.recent-blog-api');
// 		$('.inner2 .listWrap.test-listing').html(``)
//     const mainAreaChildren = $('.inner2 .listWrap.recent-blog.recent-blog-api').children('div');
//     const mainList = getblogList(data);
//     API_TOTAL_DATA.push(...getblogList(data));
    
// //     console.log(API_TOTAL_DATA,'APIDATA');
// //     console.log(API_TOTAL_DATA.length,'------------------------------>')
//     if(API_TOTAL_DATA.length > 0) { 
//       let mainItem = ''
//       let lastItem = `<a id='loady' class="card-more recent-blog-btn"> 글 더보기<i></i></a>`;

//       for(let i = 0; i < mainList.length; i++) {
//         mainItem += mainList[i];
//       }

//       let renderItem;
//       if(mainList.length >= 12) {
//         renderItem = mainItem += lastItem;
//       }else {
//         renderItem = mainItem;
//         // (목)
//         $('.inner2').css('margin-bottom','50px');
//       }
//       mainArea.html(renderItem);
//     }

//     for(let i = 12; i < recentBlogLength; i++) {
//       let li =$(`.conWrap-body-recent .inner2 .listWrap .test${i}`);
//       $(li).addClass('blog-hidden');
//     }

//     //       const getBody = (rem,show) => {
//     //         const press_content = $(rem).text();
//     //         const press = press_content.slice(0,100);
//     //         $(show).html(press);
//     //         $(rem).remove();
//     //       }
//     //       for(let i = 1; i <= recentBlogLength; i++) {
//     //         getBody(`.removeBody${i}`,`.showBody${i}`);
//     //       }
//     //       // 더보기 클릭
//     $("#loady").on('click', function (e) {  
//       e.preventDefault();

//       let slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 12)
//       slideItem.slideDown();
//       slideItem.css('display','block');
//       console.log('~~~~')
//       if ($(".recent-blog .blog-hidden:hidden").length == 0) {
// 				console.log('234234234')
//         $("#loady").fadeOut(0);
//       }
// // 			if ($(".recent-blog .blog-hidden:hidden").length == 0) {
// //           $("#loady").fadeOut('slow');
// // 					$('.media-total-page').css('display', 'flex')
// // 					console.log('여기?!!@@?')
// //         }
//       $('html,body').animate({
//         scrollTop: $(this).offset().top - 100
//       }, 1000);
			
// 			 slideItem.removeClass('blog-hidden');
			
//     });
//   }
  
  
  
//   // api 호출함수
//   const apiReadyHandler = async (msg) => {
//     try{
//       $('.loading-container').css('display','flex');
//       $('.listWrap').css('display','none');
//       $('#loady').css('display', 'none');
//       const res = await fetch(`https://www.hynixapi.com/search/media?searchType=${searchType}&searchText=${encodeURIComponent(msg)}&category=${category}`);
//       $('.loading-container').css('display','none');
//       $('.listWrap').css('display','flex');
      
//       $('.inner2 .selectWrap').css('display','none');
//       $('.ckWrap').css('display','none');
//       const data = await res.json();
//       const itemLength = data.resAr2.length;
// 			console.log(itemLength)
//       const total = data.total

//       listRenderHandler(data.resAr2,itemLength,total);
//       individualHandler();
// //       allSelectorClickHandler();
//       checkBoxHandler();
//       clickPlusHandler();
			
			
// 			if(searchText) {
// 				$('.category d-pc').css('display', 'none')
// // 				$('#reset-result-btn').css('display', 'block')
// 				$('.input-searchWrap input').val(searchText)
// 			}
			
//     }catch(e){
//       console.log(e);
//     }
//   }
   


// const initMedia = () => {
// // 	$('.listingContentOrigin').css('display', 'none')
// // 	$('.listingContent').css('display', 'none')
	
	
//   const queryName = searchParamHandler('searchText');
// 	const path = location.pathname
//   console.log('우왕 ~_~')
// 	if(path === '/library' && !queryName) {
// 		console.log('C_C')
// 		$('.listingContentOrigin').css('display', 'block')
// 		$('.listingContent').css('display', 'none')
// 	} else if(path === '/library' && queryName) {
// 		console.log('B_B')
// 		$('.listingContentOrigin').css('display', 'block')
// 		$('.listingContent').css('display', 'none')
//     apiReadyHandler(queryName)
//   } else if(path.includes('page')) {
// 		console.log('A_A')
// 		$('.listingContent').css('display', 'block')
//     $('.listingContentOrigin').css('display', 'none')
// // 		$('.recent-blog-api').html('')
// // 		console.log('!!!!!AAAA')
// 		$('#loady').css('background', 'red')
// 		$('.card-more.recent-blog-btn.recent-blog-btn2').css('display', 'none')
// 	} else {
// 		$('.inner2 .listWrap.test-listing').html(``)
// 	}
	

//   clickPlusHandler();
//   individualHandler();
//   checkBoxHandler();
//   allSelectorClickHandler();
//   selectDown()



// 	//다운로드 호버시 css 추가 
// 	$('.hoverInDownload').hover((e) => {
//     const parents = $(e.target).parents('div.listItem')
// //     console.log($(e.target).parents('div.listItem').children('a.thumb-background'), '!!!!!!')
// // 		console.log($(e.target).parents('div.listItem').children('a.thumb-background').length, '!!!!!!')
// 		$(parents).children('.imgWrap .thumbPlus').css('opacity', 1)
// 		parents.children('.imgWrap .thumbPlus').css('transform', 'scale(1.45)')
// 	})
	
// 	$('.input-search').click(() => {
//       const value = $('.input-searchWrap input').val()
//       location.href = `/library?searchType=&searchText=${value}&category=${category}`
//     })
// 		$('.input-searchWrap input').on('keyup', (key) => {
// 			if(key.keyCode === 13) {
// 				const value = $('.input-searchWrap input').val()
//         location.href = `/library?searchType=&searchText=${value}&category=${category}`
// 			}
// 		})
	
// 	// 더보기 버튼 숨김
// 	const hiddenLength = $('.listWrap.recent-blog.recent-blog-api').children('.listItem.blog-hidden').length;
// 	console.log(hiddenLength, 'HIDDEN')
	
// }

// window.onload = initMedia()
// }