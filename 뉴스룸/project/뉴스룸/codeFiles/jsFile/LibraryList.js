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
// 				console.log('여기?!!?')
//         if ($(".recent-blog .blog-hidden:hidden").length == 0) {
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
//                 <span class='date'>${date}</span>
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
// //     console.log('---------------검색시 실행되는 로직-----------------',itemLength,total)
//     $('.categoryWrap').css('display','none');

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
//       if ($(".recent-blog .blog-hidden:hidden").length == 12) {
// 				console.log('234234234')
//         $("#loady").fadeOut('slow');
//       }
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
//       const res = await fetch(`https://www.hynixapi.com/search/media?searchText=${encodeURIComponent(msg)}`);
//       $('.loading-container').css('display','none');
//       $('.listWrap').css('display','flex');
//       $('.inner2 .categoryWrap').css('display','none');
//       $('.inner2 .selectWrap').css('display','none');
//       $('.ckWrap').css('display','none');
//       const data = await res.json();
//       const itemLength = data.data.length;
//       const total = data.total

//       listRenderHandler(data.data,itemLength,total);
//       individualHandler();
// //       allSelectorClickHandler();
//       checkBoxHandler();
//       clickPlusHandler();
// 			removeCategory()
			
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
//   const queryName = searchParamHandler('searchText');
// 	const path = location.pathname
//   console.log('@_@ *_*')
//   if(queryName) {
//     apiReadyHandler(queryName)
//   } else if(path.includes('page')) {
// 		$('.recent-blog-api').html('')
// 		console.log('!!!!!AAAA')
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

// 	// 리스트 카테고리 삭제 로직
// 	removeCategory()

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
//       location.href = `/library?searchText=${value}`
//     })
// 		$('.input-searchWrap input').on('keyup', (key) => {
// 			if(key.keyCode === 13) {
// 				const value = $('.input-searchWrap input').val()
//         location.href = `/library?searchText=${value}`
// 			}
// 		})
	
// }

// window.onload = initMedia()
// }

  
  
  
  














// es5

// {
//  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
//   try {
//     var info = gen[key](arg);
//     var value = info.value;
//   } catch (error) {
//     reject(error);
//     return;
//   }
//   if (info.done) {
//     resolve(value);
//   } else {
//     Promise.resolve(value).then(_next, _throw);
//   }
// }

// function _asyncToGenerator(fn) {
//   return function () {
//     var self = this,
//       args = arguments;
//     return new Promise(function (resolve, reject) {
//       var gen = fn.apply(self, args);
//       function _next(value) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
//       }
//       function _throw(err) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
//       }
//       _next(undefined);
//     });
//   };
// }

// function _toConsumableArray(arr) {
//   return (
//     _arrayWithoutHoles(arr) ||
//     _iterableToArray(arr) ||
//     _unsupportedIterableToArray(arr) ||
//     _nonIterableSpread()
//   );
// }

// function _nonIterableSpread() {
//   throw new TypeError(
//     "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
//   );
// }

// function _unsupportedIterableToArray(o, minLen) {
//   if (!o) return;
//   if (typeof o === "string") return _arrayLikeToArray(o, minLen);
//   var n = Object.prototype.toString.call(o).slice(8, -1);
//   if (n === "Object" && o.constructor) n = o.constructor.name;
//   if (n === "Map" || n === "Set") return Array.from(o);
//   if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
//     return _arrayLikeToArray(o, minLen);
// }

// function _iterableToArray(iter) {
//   if (
//     (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
//     iter["@@iterator"] != null
//   )
//     return Array.from(iter);
// }

// function _arrayWithoutHoles(arr) {
//   if (Array.isArray(arr)) return _arrayLikeToArray(arr);
// }

// function _arrayLikeToArray(arr, len) {
//   if (len == null || len > arr.length) len = arr.length;
//   for (var i = 0, arr2 = new Array(len); i < len; i++) {
//     arr2[i] = arr[i];
//   }
//   return arr2;
// }

// var DOWNLOAD_ARR = [];
// var DOWNLOAD_VALUE_LIST = [];
// var zip = new JSZip();
// var OFFSET = 0;
// var recentBlogLength = $(
//   ".container.media_module.media-list-contents .conWrap-body.conWrap-body-recent .inner2 .listWrap.recent-blog"
// ).children("div").length;
// var popularBlogLength = $(
//   ".container.media_module.media-list-contents .conWrap-body.conWrap-body-popularity .inner2 .listWrap.popular-blog"
// ).children("div").length;
// var pathName = window.location.pathname;
// var percent = 0;
// var API_TOTAL_DATA = []; //받아오는 데이터

// var API_TYPE_IMG = []; //이미지만 넣은 데이터

// var API_TYPE_VIDEO = []; //비디오만 넣은 데이터

// var progressbar = $(".w3-light-grey .w3-green");
// $(".loading-container").css("display", "none");
// $(".statusbarWrap").css("display", "none"); // 쿼리 스트링 가져오는 함수

// var searchParamHandler = function searchParamHandler(key) {
//   return new URLSearchParams(location.search).get(key);
// };

// var searchText = searchParamHandler("searchText"); // conWrap 디스플레이 유무

// if ($(".listItem").hasClass("active")) {
//   $(".conWrap").css("display", "flex");
// } else {
//   $(".conWrap").css("display", "flex");
//   $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//   $(".orderItem.text").css("display", "none");
//   $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//   //     $('.orderItem.ck-all').css('display','flex');
// }

// var removeCategory = function removeCategory() {
//   var nameTagLength = $(".ml_con_info .info").children(".name").length;

//   for (var i = 1; i <= nameTagLength; i++) {
//     var tagLength = $(".ml_con_info .info #name".concat(i)).children(
//       "a.topicText"
//     ).length;

//     for (var j = 1; j <= tagLength; j++) {
//       var text = $("#name".concat(i, " #topicText").concat(j)).text();

//       if (text.includes("카테고리")) {
//         $(
//           ".ml_con_info .info #name".concat(i, " a#topicText").concat(j)
//         ).remove();
//       }
//     }
//   }
// }; // 다운로드 길이에 따른 함수 로직

// var downLoadSelectHandler = function downLoadSelectHandler(arrData) {
//   if (arrData >= 1) {
//     $(".conWrap").css("display", "flex");
//     $(".orderItem.color-blue.order-download").css("display", "block"); // 선택 다운로드

//     $(".orderItem.text").css("display", "block");
//     $(".orderItem.ck-remove").css("display", "block"); //일괄취소
//   } else {
//     $(".conWrap").css("display", "flex");
//     $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//     $(".orderItem.text").css("display", "block");
//     $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//   }
// }; // --------------체크박스 & PLUS ---------------- //

// var clickPlusHandler = function clickPlusHandler() {
//   $(".media_module .imgBx .imgWrap .thumbPlus").click(function (e) {
//     var eleValue = $(event.target).parents(".imgBx").next();
//     var b = eleValue.attr("href");
//     $(location).attr("href", b);
//   });
// }; //--------------------------------------------------------------------------------------------------------------------------------
// //체크박스 핸들러

// var checkBoxHandler = function checkBoxHandler() {
//   $(".thumbCheck").click(function (e) {
//     if ($(event.target).parents(".listItem").hasClass("active")) {
//       var _DOWNLOAD_ARR;

//       $(event.target).parents(".listItem").removeClass("active");
//       var eleValue = $(event.target).parents("a").next();
//       var dataTypes = $(event.target).parents("a").next().data().data; // 해당 데이터 타입

//       var dataValues =
//         dataTypes === "img" && $(eleValue).data().img
//           ? $(eleValue).data().img
//           : dataTypes === "video" && $(eleValue).data().video
//           ? $(eleValue).data().video
//           : $(eleValue).data().youtube;
//       var b = dataValues.replace(/\[/g, "");
//       var c = b.replace(/\]/g, "");
//       var arr = c.replace(/\s/gi, "").split(","); // 배열과 배열을 비교할 수 없기에 JSON.stringify로 변경하여 조건을 탐색

//       var kkk = DOWNLOAD_ARR.filter(function (el) {
//         return JSON.stringify(el.dataValue) !== JSON.stringify(arr);
//       });
//       DOWNLOAD_ARR = [];

//       (_DOWNLOAD_ARR = DOWNLOAD_ARR).push.apply(
//         _DOWNLOAD_ARR,
//         _toConsumableArray(kkk)
//       );
//     } // 선택 개별 클릭
//     else if ($(event.target).parents(".listItem").hasClass("listItem")) {
//       $(event.target).parents(".listItem").addClass("active");

//       var _eleValue = $(event.target).parents("a").next();

//       var _dataTypes = $(event.target).parents("a").next().data().data; // 해당 데이터 타입

//       var _dataValues =
//         _dataTypes === "img" && $(_eleValue).data().img
//           ? $(_eleValue).data().img
//           : _dataTypes === "video" && $(_eleValue).data().video
//           ? $(_eleValue).data().video
//           : $(_eleValue).data().youtube; // 헤당 제목을 가져오는 title 변수

//       var title = $(event.target)
//         .parents(".imgBx")
//         .next("a")
//         .children("h3")
//         .text();
//       var dataFile = {
//         dataType: _dataTypes,
//         dataValue: _dataValues,
//         datatitle: title
//       };
//       var dataType = dataFile.dataType,
//         dataValue = dataFile.dataValue,
//         datatitle = dataFile.datatitle;

//       if (dataValue.length === 1 && dataType === "img") {
//         var fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환

//         DOWNLOAD_ARR.push(dataValue);
//       } else if (dataValue.length > 1 && dataType === "img") {
//         var _b = dataValue.replace(/\[/g, "");

//         var _c = _b.replace(/\]/g, "");

//         var _arr = _c.replace(/\s/gi, "").split(",");

//         var obj = {
//           dataType: dataType,
//           dataValue: [],
//           datatitle: datatitle
//         };

//         _arr.forEach(function (e) {
//           obj.dataValue.push(e);
//         });

//         DOWNLOAD_ARR.push(obj);
//       } else if (dataValue.length > 1 && dataType === "video") {
//         var _b2 = dataValue.replace(/\[/g, "");

//         var _c2 = _b2.replace(/\]/g, ""); // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성

//         var _arr2 = _c2.replace(/\s/gi, "").split(",");

//         var _obj = {
//           dataType: dataType,
//           dataValue: [],
//           datatitle: datatitle
//         };

//         _arr2.forEach(function (e) {
//           _obj.dataValue.push(e);
//         });

//         DOWNLOAD_ARR.push(_obj);
//       } else if (dataValue.length === 1 && dataType === "video") {
//         DOWNLOAD_ARR.push(dataValue);
//       }
//     }

//     var lengthText = $(DOWNLOAD_ARR).length;
//     var a = $("em.color-blue").text(
//       "".concat(lengthText, "\uAC1C \uD56D\uBAA9")
//     );
//     downLoadSelectHandler(lengthText);
//   });
// };

// var downLoadFileLogic = function downLoadFileLogic(
//   dataType,
//   dataValue,
//   datatitle
// ) {
//   if (dataValue.length === 1 && dataType === "img") {
//     var fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환

//     console.log(DOWNLOAD_ARR, "!@#!@#");
//     DOWNLOAD_ARR.push(dataValue);
//   } else if (dataValue.length > 1 && dataType === "img") {
//     var b = dataValue.replace(/\[/g, "");
//     var c = b.replace(/\]/g, "");
//     var arr = c.replace(/\s/gi, "").split(",");
//     var obj = {
//       dataType: dataType,
//       dataValue: [],
//       datatitle: datatitle
//     };
//     arr.forEach(function (e) {
//       obj.dataValue.push(e);
//     });
//     DOWNLOAD_ARR.push(obj);
//   } else if (dataValue.length > 1 && dataType === "video") {
//     var _b3 = dataValue.replace(/\[/g, "");

//     var _c3 = _b3.replace(/\]/g, ""); // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성

//     var _arr3 = _c3.replace(/\s/gi, "").split(",");

//     var _obj2 = {
//       dataType: dataType,
//       dataValue: [],
//       datatitle: datatitle
//     };

//     _arr3.forEach(function (e) {
//       _obj2.dataValue.push(e);
//     });

//     DOWNLOAD_ARR.push(_obj2);
//   } else if (dataValue.length === 1 && dataType === "video") {
//     DOWNLOAD_ARR.push(dataValue);
//   }

//   var lengthText = $(DOWNLOAD_ARR).length;
//   $("em.color-blue").text("".concat(lengthText + 1, "\uAC1C \uD56D\uBAA9"));
// };

// var fileTypeHandler = function fileTypeHandler(file) {
//   $(".statusbarWrap").css("display", "flex");
//   $(".w3-light-grey .w3-green").css("display", "block");
//   file.filter(function (ele) {
//     if (ele.dataType === "img") {
//       ele.dataValue.map(function (el) {
//         var fileName = getFileLogic(decodeURIComponent(el));
//         zip.file(
//           "\uB2E4\uC6B4\uB85C\uB4DC \uD3F4\uB354/"
//             .concat(ele.datatitle, "/")
//             .concat(fileName),
//           urlToPromise(el),
//           {
//             binary: true
//           }
//         );
//       });
//     } else if (ele.dataType === "video") {
//       ele.dataValue.map(function (el) {
//         var fileName = getFileLogic(decodeURIComponent(el));
//         var blob = new Blob([el], {
//           type: "video/mp4"
//         });
//         zip.file(
//           "\uB2E4\uC6B4\uB85C\uB4DC \uD3F4\uB354/"
//             .concat(ele.datatitle, "/")
//             .concat(fileName),
//           urlToPromise(el),
//           {
//             binary: true
//           }
//         );
//       });
//     }
//   });
//   zip
//     .generateAsync(
//       {
//         type: "blob",
//         streamFiles: true
//       },
//       function updateCallback(metadata) {
//         percent = metadata.percent;
//         $(progressbar).css("width", "".concat(percent, "%"));
//         $(".barText").text("".concat(Math.floor(percent), "%"));
//       }
//     )
//     .then(function callback(blob) {
//       $(".statusbarWrap").css("display", "none");
//       $(".w3-light-grey .w3-green").css("display", "none");
//       saveAs(blob, "\uB2E4\uC6B4\uB85C\uB4DC.zip");
//     })
//     ["finally"](function () {
//       // 0930
//       zip.remove("다운로드 폴더");
//       $("em.color-blue").text("0\uAC1C \uD56D\uBAA9");
//       percent = 0;
//       $(".barText").text("".concat(percent, "%"));
//       $(".listItem").removeClass("active");
//       $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//       $(".orderItem.text").css("display", "none");
//       $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//     });
// }; // getFileName의 역활과 비슷한 함수

// var getFileLogic = function getFileLogic(str) {
//   return str.substring(str.lastIndexOf("/"));
// }; //------- 체크박스 ---------- //
// // ------------  전체선택리스트 ------- //

// var allSelectorClickHandler = function allSelectorClickHandler() {
//   $(".orderItem.ck-all").click(function () {
//     DOWNLOAD_ARR = [];
//     console.log("!@#757657");
//     var selectorActive = null;
//     selectorActive = $(".conWrap-body-recent .listItem")
//       .not(".blog-hidden")
//       .addClass("active");
//     console.log(selectorActive, "ACTIV123E!");
//     $(".conWrap").css("display", "flex"); // viewer*

//     $(".orderItem.color-blue.order-download").css("display", "block"); // 선택 다운로드

//     $(".orderItem.text").css("display", "block");
//     $(".orderItem.ck-remove").css("display", "block"); //일괄취소

//     var allSelector = $(selectorActive);
//     var totalListLength = $(".listWrap.recent-blog").children(
//       ".listItem.active"
//     ).length;
//     console.log(totalListLength, "!@#");
//     var title = [];
//     var arrTitle = [];

//     for (var i = 1; i <= totalListLength; i++) {
//       title.push($(".listItem.test".concat(i, ".active a h3")).text()); //       console.log($(`.listItem.test${i}.active a h3`).text())
//     }

//     for (var _i = 1; _i <= allSelector.length; _i++) {
//       var dataType = $(".test".concat(_i, " a")).next("a").data().data; // 해당 데이터 타입

//       if (dataType !== undefined) {
//         var target = $(".test".concat(_i, " a")).next("a");
//         var dataValue =
//           dataType === "img" && $(target).data().img
//             ? $(target).data().img
//             : dataType === "video" && $(target).data().video
//             ? $(target).data().video
//             : $(target).data().youtube;
//         console.log(dataValue, "???");
//         downLoadFileLogic(dataType, dataValue, title[_i - 1]);
//       }
//     }

//     var a = $("em.color-blue").text(
//       "".concat(totalListLength, "\uAC1C \uD56D\uBAA9")
//     ); //     fileTypeHandler(DOWNLOAD_ARR);
//   });
// }; // 선택 취소

// $(".orderItem.ck-remove").click(function () {
//   $(".listItem").removeClass("active");
//   DOWNLOAD_ARR = [];
//   $("em.color-blue").text("0\uAC1C \uD56D\uBAA9");
//   $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//   $(".orderItem.text").css("display", "none");
//   $(".orderItem.ck-remove").css("display", "none"); //일괄취소
// }); // url promise

// function urlToPromise(url) {
//   return new Promise(function (resolve, reject) {
//     JSZipUtils.getBinaryContent(url, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// } // ----------- 다운로드 로직 ----------------//

// var individualHandler = function individualHandler() {
//   $(".hoverInDownload").click(function (e) {
//     var target = e.target;
//     var dataType = $(target).data().data; // 해당 데이터 타입

//     var dataValue =
//       dataType === "img" && $(target).data().img
//         ? $(target).data().img
//         : dataType === "video" && $(target).data().video
//         ? $(target).data().video
//         : $(target).data().youtube; // 미디어 게시물 제목

//     var title = $(target).parents(".imgBx").next("a").children("h3").text();

//     if (dataValue.length === 1 && dataType === "img") {
//       $(".statusbarWrap").css("display", "flex");
//       $(".w3-light-grey .w3-green").css("display", "block");
//       var fileName = getFileName(dataValue.join()); // 배열로 들어오기에 스트링으로 전환

//       saveAs(dataValue, fileName);
//       DOWNLOAD_ARR = [];
//     } else if (dataValue.length > 1 && dataType === "img") {
//       $(".statusbarWrap").css("display", "flex");
//       $(".w3-light-grey .w3-green").css("display", "block");
//       var b = dataValue.replace(/\[/g, "");
//       var c = b.replace(/\]/g, "");
//       var arr = c.split(",");
//       arr.forEach(function (e, index) {
//         var fileName = getFileName(decodeURIComponent(e));
//         zip.file(fileName, urlToPromise(e), {
//           binary: true
//         });
//       }); //         zip.generateAsync({type:"blob",streamFiles:true}).then(function callback(blob) {
//       //           saveAs(blob,`${title}.zip`);
//       //         });

//       zip
//         .generateAsync(
//           {
//             type: "blob",
//             streamFiles: true
//           },
//           function updateCallback(metadata) {
//             percent = metadata.percent;
//             $(progressbar).css("width", "".concat(percent, "%"));
//             $(".barText").text("".concat(Math.floor(percent), "%"));
//           }
//         )
//         .then(function callback(blob) {
//           $(".statusbarWrap").css("display", "none");
//           $(".w3-light-grey .w3-green").css("display", "none");
//           saveAs(blob, "".concat(title, ".zip"));
//         })
//         ["finally"](function () {
//           DOWNLOAD_ARR = [];
//           $("em.color-blue").text("0\uAC1C \uD56D\uBAA9");
//           percent = 0;
//           $(".barText").text("".concat(percent, "%"));
//           $(".listItem").removeClass("active");
//           $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//           $(".orderItem.text").css("display", "none");
//           $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//         });
//     } else if (dataValue.length > 1 && dataType === "video") {
//       $(".statusbarWrap").css("display", "flex");
//       $(".w3-light-grey .w3-green").css("display", "block");

//       var _b4 = dataValue.replace(/\[/g, "");

//       var _c4 = _b4.replace(/\]/g, ""); // 빈칸이 발생하기 때문에 빈칸없이 항목이 들어있는 배열을 생성

//       var _arr4 = _c4.replace(/\s/gi, "").split(",");

//       _arr4.forEach(function (e) {
//         var fileName = getFileName(decodeURIComponent(e));
//         var blob = new Blob([e], {
//           type: "video/mp4"
//         });
//         zip.file(fileName, urlToPromise(e), {
//           binary: true
//         });
//       }); //         zip.generateAsync({type:"blob",streamFiles:true}).then(function (blob) {
//       //           saveAs(blob,"exampleis.zip")
//       //         });

//       zip
//         .generateAsync(
//           {
//             type: "blob",
//             streamFiles: true
//           },
//           function updateCallback(metadata) {
//             percent = metadata.percent;
//             $(progressbar).css("width", "".concat(percent, "%"));
//             $(".barText").text("".concat(Math.floor(percent), "%"));
//           }
//         )
//         .then(function callback(blob) {
//           $(".statusbarWrap").css("display", "none");
//           $(".w3-light-grey .w3-green").css("display", "none");
//           saveAs(blob, "\uB2E4\uC6B4\uB85C\uB4DC.zip");
//         })
//         ["finally"](function () {
//           DOWNLOAD_ARR = [];
//           $("em.color-blue").text("0\uAC1C \uD56D\uBAA9");
//           percent = 0;
//           $(".barText").text("".concat(percent, "%"));
//           $(".listItem").removeClass("active");
//           $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//           $(".orderItem.text").css("display", "none");
//           $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//         });
//     } else if (dataValue.length === 1 && dataType === "video") {
//       var _fileName = getFileName(decodeURIComponent(dataValue.join()));

//       var blob = new Blob([dataValue], {
//         type: "video/mp4"
//       });
//       zip.file(_fileName, urlToPromise(e), {
//         binary: true
//       });
//       zip
//         .generateAsync(
//           {
//             type: "blob",
//             streamFiles: true
//           },
//           function updateCallback(metadata) {
//             percent = metadata.percent;
//             $(progressbar).css("width", "".concat(percent, "%"));
//             $(".barText").text("".concat(Math.floor(percent), "%"));
//           }
//         )
//         .then(function callback(blob) {
//           $(".statusbarWrap").css("display", "none");
//           $(".w3-light-grey .w3-green").css("display", "none");
//           saveAs(blob, "".concat(_fileName, ".zip"));
//         })
//         ["finally"](function () {
//           DOWNLOAD_ARR = [];
//           $("em.color-blue").text("0\uAC1C \uD56D\uBAA9");
//           percent = 0;
//           $(".barText").text("".concat(percent, "%"));
//           $(".listItem").removeClass("active");
//           $(".orderItem.color-blue.order-download").css("display", "none"); // 선택 다운로드

//           $(".orderItem.text").css("display", "none");
//           $(".orderItem.ck-remove").css("display", "none"); //일괄취소
//         }); //         saveAs(blob,fileName);
//     }
//   });
// };

// var getFileName = function getFileName(str) {
//   return str.substring(str.lastIndexOf("/"));
// }; // ---------- 다운로드 로직 끝 -----------------//

// if (pathName === "/library") {
//   $(".listingContent").css("display", "none");

//   for (var i = 12; i < recentBlogLength; i++) {
//     var li = $(
//       ".container.media_module.media-list-contents .conWrap-body.conWrap-body-recent .inner2 .listWrap.recent-blog"
//     ).children("div")[i];
//     $(li).addClass("blog-hidden");
//   }

//   for (var _i2 = 12; _i2 < popularBlogLength; _i2++) {
//     var _li = $(
//       ".container.media_module.media-list-contents .conWrap-body.conWrap-body-popularity .inner2 .listWrap.popular-blog"
//     ).children("div")[_i2];

//     $(_li).addClass("blog-hidden");
//   } // 최신클릭

//   $(".ckWrap #ck-recent").click(function () {
//     $('input:checkbox[id="ck-recent"]').prop("checked", true);
//     $('input:checkbox[id="ck-popularity"]').prop("checked", false);
//     $(".recent-blog-btn").css("display", "flex");
//     showArea();
//   }); // 인기클릭

//   $(".ckWrap #ck-popularity").click(function () {
//     $('input:checkbox[id="ck-recent"]').prop("checked", false);
//     $('input:checkbox[id="ck-popularity"]').prop("checked", true);
//     $(".recent-blog-btn").css("display", "none");
//     showArea();
//   });
//   $(function () {
//     $("#loady").on("click", function (e) {
//       e.preventDefault();
//       var slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 12);
//       slideItem.slideDown();
//       slideItem.css("display", "block");
//       console.log("여기?!!?");

//       if ($(".recent-blog .blog-hidden:hidden").length == 0) {
//         $("#loady").fadeOut("slow");
//         $(".media-total-page").css("display", "flex");
//         console.log("여기?!!@@?");
//       }

//       $("html,body").animate(
//         {
//           scrollTop: $(this).offset().top - 100
//         },
//         1000
//       );
//       slideItem.removeClass("blog-hidden");
//     });
//   });
//   $(function () {
//     $("#loady2").on("click", function (e) {
//       e.preventDefault();
//       var slideItem = $(".popular-blog .blog-hidden:hidden").slice(0, 12);
//       slideItem.slideDown();
//       slideItem.css("display", "block");

//       if ($(".popular-blog .blog-hidden:hidden").length == 0) {
//         $("#loady").fadeOut("slow");
//       }

//       $("html,body").animate(
//         {
//           scrollTop: $(this).offset().top - 100
//         },
//         1000
//       );
//     });
//   }); //     $('.input-search').click(() => {
//   //       const value = $('.input-searchWrap input').val()
//   //       location.href = `/library?searchText=${value}`
//   //     })
//   // 		$('.input-searchWrap input').on('keyup', (key) => {
//   // 			if(key.keyCode === 13) {
//   // 				const value = $('.input-searchWrap input').val()
//   //         location.href = `/library?searchText=${value}`
//   // 			}
//   // 		})
//   //     $('.input-searchWrap input').on("keyup",function(key){
//   //       const value = $('.input-searchWrap input').val()
//   //       let radioVal = $('.radioWrap input[name="radio"]:checked').val()
//   //       if(value){
//   //         if(key.keyCode==13) {
//   //           searchHandler(value,radioVal);
//   //         }
//   //       }else {
//   //         $('.search-full.media-list-search').css('display','block');
//   //         $('.categoryWrap').css('display','block');
//   //       }
//   //     });
// }

// if (pathName !== "/library") {
//   $(".listingContentOrigin").css("display", "none");
//   $(".listingContent").css("display", "block");
// }

// var selectDown = function selectDown() {
//   // ------------ 선택 다운로드 ------- //
//   $(".orderItem.color-blue.order-download").click(function () {
//     if (DOWNLOAD_ARR.length === 0) {
//       return alert("파일을 선택하여 주세요.");
//     }

//     fileTypeHandler(DOWNLOAD_ARR);
//   });
// };

// var getTagList = function getTagList(arr) {
//   if (arr === null || arr === undefined || arr.length === 0) {
//     return "";
//   } else {
//     var item = "";
//     var list = arr.map(function (el, index) {
//       return "<a href='/library/tag/"
//         .concat(el, "/page/1' id='topicText")
//         .concat(index + 1, "' class='topicText'>#")
//         .concat(el, "</a>");
//     });
//     list.forEach(function (el) {
//       return (item += el);
//     });
//     return item;
//   }
// };

// var typeRenderHandler = function typeRenderHandler(
//   mediaType,
//   videoFile,
//   youtubeId,
//   imageFile,
//   featured_image,
//   noImage
// ) {
//   var renderList = "";

//   if (mediaType === "video") {
//     var trance = "[".concat(videoFile, "]");
//     renderList = '\n          <div class="img-type img-type-mov" data-url='
//       .concat(trance, '></div>\n          <img src="')
//       .concat(
//         featured_image ? featured_image : noImage,
//         '" class=" ls-is-cached lazyloaded" alt="img">\n          <span class="thumbCheck"></span>'
//       );
//   } else if (mediaType === "img") {
//     var _trance = "[".concat(imageFile, "]");

//     renderList = '\n          <div class="img-type img-type-pic" data-url='
//       .concat(_trance, '></div>\n          <img src="')
//       .concat(
//         featured_image ? featured_image : noImage,
//         '" class=" ls-is-cached lazyloaded" alt="img">\n          <span class="thumbCheck"></span>'
//       );
//   } else {
//     renderList =
//       '\n        <div class="img-type img-type-youtube"></div>\n        <img src="'.concat(
//         featured_image ? featured_image : noImage,
//         '" class=" ls-is-cached lazyloaded" alt="img">\n        '
//       );
//   }

//   return renderList;
// };

// var downLoadUrlHandler = function downLoadUrlHandler(
//   mediaType,
//   videoFile,
//   youtubeId,
//   imageFile,
//   featured_image,
//   noImage
// ) {
//   var downLoad = "";

//   if (mediaType === "video") {
//     var trance = "[".concat(videoFile, "]");
//     downLoad = "<a class='hoverInDownload' data-data="
//       .concat(mediaType, " data-video=")
//       .concat(
//         trance,
//         ' style="cursor:pointer"><i></i>"\uB2E4\uC6B4\uB85C\uB4DC"</a>'
//       );
//   } else if (mediaType === "img") {
//     var _trance2 = "[".concat(imageFile, "]");

//     downLoad = "<a class='hoverInDownload' data-data="
//       .concat(mediaType, " data-img=")
//       .concat(
//         _trance2,
//         ' style="cursor:pointer"><i></i>"\uB2E4\uC6B4\uB85C\uB4DC"</a>'
//       );
//   } else {
//     downLoad = "<a class='hoverInDownload' data-data="
//       .concat(mediaType, " data-youtube=")
//       .concat(
//         youtubeId,
//         ' style="cursor:pointer"><i></i>"\uB2E4\uC6B4\uB85C\uB4DC"</a>'
//       );
//   }

//   return downLoad;
// };

// var getblogList = function getblogList(arr) {
//   var noImage =
//     '{{get_asset_url("/hynixNewsRoom/codeFiles/images/contentImage/groupO2x.png")}}';

//   if (arr === null || arr === undefined || arr.length === 0) {
//     $(".ckWrap").css("display", "block");
//     $(".noSearchContainer").css("display", "flex");
//     return "";
//   } else {
//     var renderList = arr.map(function (el, index) {
//       var date = el.date,
//         featured_image = el.featured_image,
//         id = el.id,
//         imageFile = el.imageFile,
//         tags = el.tags,
//         mediaType = el.mediaType,
//         title = el.title,
//         youtubeId = el.youtubeId,
//         url = el.url,
//         videoFile = el.videoFile;
//       var renderTag = "";
//       var dataType = mediaType === "image";
//       var tag = tags
//         ? tags.map(function (el) {
//             return el
//               ? (renderTag += "<span class='name'>#".concat(el, "</span>"))
//               : (renderTag += "");
//           })
//         : "";
//       var showClassName =
//         index >= 12
//           ? "listItem test".concat(index + 1, " blog-hidden")
//           : "listItem test".concat(index + 1);
//       return '\n          <div class="'
//         .concat(
//           showClassName,
//           '">\n            <div class=\'imgBx\'>\n              <a>\n                <div class="imgWrap">\n                  <span class="thumbPlus">\uC120\uD0DD\uC644\uB8CC</span>\n                  '
//         )
//         .concat(
//           typeRenderHandler(
//             mediaType,
//             videoFile,
//             youtubeId,
//             imageFile,
//             featured_image,
//             noImage
//           ),
//           "\n                </div>\n              </a>\n            "
//         )
//         .concat(
//           downLoadUrlHandler(
//             mediaType,
//             videoFile,
//             youtubeId,
//             imageFile,
//             featured_image,
//             noImage
//           ),
//           "\n            </div>\n            <a href="
//         )
//         .concat(url, "><h3>")
//         .concat(
//           title,
//           '</h3></a>\n            <hr>\n            <div class="ml_con_info">\n              <div class="info">\n                <span class=\'date\'>'
//         )
//         .concat(date, "</span>\n                <span id='name")
//         .concat(index + 1, "' class='name'>")
//         .concat(
//           getTagList(el.tags),
//           "</name>\n              </div>\n            </div>\n          </div>\n"
//         );
//     });
//     return renderList;
//   }
// };

// var listRenderHandler = function listRenderHandler(data, itemLength, total) {
//   //     console.log('---------------검색시 실행되는 로직-----------------',itemLength,total)
//   $(".categoryWrap").css("display", "none");
//   var recentBlogLength = $(
//     ".conWrap-body-recent .inner2 .listWrap.recent-blog-api"
//   ).children("div").length;
//   var mainArea = $(".inner2 .listWrap.recent-blog-api");
//   $(".inner2 .listWrap.test-listing").html("");
//   var mainAreaChildren = $(
//     ".inner2 .listWrap.recent-blog.recent-blog-api"
//   ).children("div");
//   var mainList = getblogList(data);
//   API_TOTAL_DATA.push.apply(
//     API_TOTAL_DATA,
//     _toConsumableArray(getblogList(data))
//   ); //     console.log(API_TOTAL_DATA,'APIDATA');
//   //     console.log(API_TOTAL_DATA.length,'------------------------------>')

//   if (API_TOTAL_DATA.length > 0) {
//     var mainItem = "";
//     var lastItem =
//       "<a id='loady' class=\"card-more recent-blog-btn\"> \uAE00 \uB354\uBCF4\uAE30<i></i></a>";

//     for (var _i3 = 0; _i3 < mainList.length; _i3++) {
//       mainItem += mainList[_i3];
//     }

//     var renderItem;

//     if (mainList.length >= 12) {
//       renderItem = mainItem += lastItem;
//     } else {
//       renderItem = mainItem;
//     }

//     mainArea.html(renderItem);
//   }

//   for (var _i4 = 12; _i4 < recentBlogLength; _i4++) {
//     var _li2 = $(".conWrap-body-recent .inner2 .listWrap .test".concat(_i4));

//     $(_li2).addClass("blog-hidden");
//   } //       const getBody = (rem,show) => {
//   //         const press_content = $(rem).text();
//   //         const press = press_content.slice(0,100);
//   //         $(show).html(press);
//   //         $(rem).remove();
//   //       }
//   //       for(let i = 1; i <= recentBlogLength; i++) {
//   //         getBody(`.removeBody${i}`,`.showBody${i}`);
//   //       }
//   //       // 더보기 클릭

//   $("#loady").on("click", function (e) {
//     e.preventDefault();
//     var slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 12);
//     slideItem.slideDown();
//     slideItem.css("display", "block");
//     console.log("~~~~");

//     if ($(".recent-blog .blog-hidden:hidden").length == 12) {
//       console.log("234234234");
//       $("#loady").fadeOut("slow");
//     }

//     $("html,body").animate(
//       {
//         scrollTop: $(this).offset().top - 100
//       },
//       1000
//     );
//     slideItem.removeClass("blog-hidden");
//   });
  
// }; 
  
//   // api 호출함수
//   // 
//   // 
//   var apiReadyHandler =  function apiReadyhandler(msg) {
//     $('.loading-container').css('display', 'flex');
//       $('.listWrap').css('display', 'none');
//       $('#loady').css('display', 'none');
//     var data = '';
//       var itemLength = '';
//       var total = ''; 
//       var res = fetch('https://www.hynixapi.com/search/media?searchText=' + encodeURIComponent(msg))
//       .then(function(res){ return res.json()})
//       .then(function(data){ console.log(data)})
//       .then(function(data){ console.log(data.data)})
// //       .then(function(data){ data = data.data})
// //       .then(function(data) {itemLength = data.data.length})
// //       .then(function(data) {total = data.total})
//       .catch(function(e) {console.log(e)})
//       $('.loading-container').css('display', 'none');
//       $('.listWrap').css('display', 'flex');
//       $('.inner2 .categoryWrap').css('display', 'none');
//       $('.inner2 .selectWrap').css('display', 'none');
//       $('.ckWrap').css('display', 'none');
// //       var data = await res.json();
// //       var itemLength = data.data.length;
// //       var total = data.total;

//       listRenderHandler(data, itemLength, total);
//       individualHandler();
//       checkBoxHandler();
//       clickPlusHandler();
//       removeCategory();

//       if (searchText) {
//         $('.category d-pc').css('display', 'none');
//         $('.input-searchWrap input').val(searchText);
//       }
//   }

// //   var apiReadyHandler = async function apiReadyHandler(msg) {
// //     try {
// //       $('.loading-container').css('display', 'flex');
// //       $('.listWrap').css('display', 'none');
// //       $('#loady').css('display', 'none');
// //       var res = await fetch('https://www.hynixapi.com/search/media?searchText=' + encodeURIComponent(msg));
// //       $('.loading-container').css('display', 'none');
// //       $('.listWrap').css('display', 'flex');
// //       $('.inner2 .categoryWrap').css('display', 'none');
// //       $('.inner2 .selectWrap').css('display', 'none');
// //       $('.ckWrap').css('display', 'none');
// //       var data = await res.json();
// //       var itemLength = data.data.length;
// //       var total = data.total;

// //       listRenderHandler(data.data, itemLength, total);
// //       individualHandler();
// //       checkBoxHandler();
// //       clickPlusHandler();
// //       removeCategory();

// //       if (searchText) {
// //         $('.category d-pc').css('display', 'none');
// //         $('.input-searchWrap input').val(searchText);
// //       }
// //     } catch (e) {
// //       console.log(e);
// //     };
// //   };

// var initMedia = function initMedia() {
//   var queryName = searchParamHandler("searchText");
//   var path = location.pathname;
//   console.log("@_@ *_*", queryName);

//   if (queryName) {
//     apiReadyHandler(queryName);
//   } else if (path.includes("page")) {
//     $(".recent-blog-api").html("");
//     console.log("!!!!!AAAA");
//     $("#loady").css("background", "red");
//     $(".card-more.recent-blog-btn.recent-blog-btn2").css("display", "none");
//   } else {
//     $(".inner2 .listWrap.test-listing").html("");
//   }

//   clickPlusHandler();
//   individualHandler();
//   checkBoxHandler();
//   allSelectorClickHandler();
//   selectDown(); // 리스트 카테고리 삭제 로직

//   removeCategory(); //다운로드 호버시 css 추가

//   $(".hoverInDownload").hover(function (e) {
//     var parents = $(e.target).parents("div.listItem"); //     console.log($(e.target).parents('div.listItem').children('a.thumb-background'), '!!!!!!')
//     // 		console.log($(e.target).parents('div.listItem').children('a.thumb-background').length, '!!!!!!')

//     $(parents).children(".imgWrap .thumbPlus").css("opacity", 1);
//     parents.children(".imgWrap .thumbPlus").css("transform", "scale(1.45)");
//   });
//   $(".input-search").click(function () {
//     var value = $(".input-searchWrap input").val();
//     location.href = "/library?searchText=".concat(value);
//   });
//   $(".input-searchWrap input").on("keyup", function (key) {
//     if (key.keyCode === 13) {
//       var value = $(".input-searchWrap input").val();
//       location.href = "/library?searchText=".concat(value);
//     }
//   });
// };

// window.onload = initMedia();


// }






