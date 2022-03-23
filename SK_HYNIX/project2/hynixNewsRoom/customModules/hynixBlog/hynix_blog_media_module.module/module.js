// let OFFSET2 = 0;
// 	const ORIGIN_LIST2 = [];
	
// 	const getMediaList = (arr) => {
// 		if(arr.length === 0 || arr === null || arr === undefined) {
// 			return ``
// 		} else {
// 			let item = '';
// 			const list = arr.map((el,index) => {
// 				const {date, title, id} = el;
// 				return `
//           <div class='media_blog_list blogListContainer2' style='display: flex; align-items: center; width: 60%; justify-content: space-between;>
// 					  <p style='cursor: pointer;'>${date} ${title}</p><input value=${id} style='opacity:0;' class='blogId2'>
// 						<button class='copyButton2'>클립보드 복사</button>
// 					</div>
//         `
// 			})
// 			list.forEach(el => item += el)
// 			return item + `<div>더보기</div>`;
// 		}
// 	}
	
// 	const searchMediaSimpleData = async (searchText) => {
//     console.log(searchMediaSimpleData,'진입')
// 		try {
// 			const sendObject = {
// 				searchText: searchText,
// 				offset: OFFSET2
// 			}
// 			const res = await fetch(`https://www.hynixapi.com/media/list`, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json;charset=utf-8'
// 				},
// 				body: JSON.stringify(sendObject)
// 			})
// 			const data = await res.json()
//       console.log('진입 데이터',data);
// 			if(data.status === 200) {
// 			  OFFSET2 = data.offset;
// 				const list = data.relationWord;
// 			  ORIGIN_LIST2.push(...list)
// 				$('.conWrap.conWrap2').append(getMediaList(list))
				
// 				$('.copyButton2').click((e) => {
// 					const blogId = $(e.target).parents('div.blogListContainer2').children('input.blogId2')
// // 					const blogName = $(e.target).parents('div.blogListContainer').children('p.blogList').text()
// 					const id = $(e.target).parents('div.blogListContainer2').children('input.blogId2').attr('value')
// 					$(blogId).select()
// 					document.execCommand("copy")
// 					alert(`게시물의 ID : ${id}가 복사되었습니다.`)
// 				})
// 			} 
// 			if(data.status === 400) {
// 				alert(data.msg)
// 			}
// 		} catch(e) {
// 			console.log(e)
// 		}
// 	}
	
// 	const getMediaSimpleData = () => {
// 		$('.searchArticle2').click(() => {
// 			const searchText = $('.searchArticleName2').val()
// 			searchMediaSimpleData(searchText)
// 		})
// 	}
	
// 	const mediaLibraryList = async ()=> {
// 		try {
// 			const blogIdText = $('.blogIdsList2').text().trim()
// 			const blogId = blogIdText.split(',')
// 			const blogIdsArr = blogId.map(el => parseInt(el.replace(/[^0-9]/g, '')))

// 			const sendObject = {
// 				blogList : blogIdsArr
// 			}
// 			if(blogIdsArr !== null || blogIdsArr !== undefined || blogIdsArr.length !== 0) {
// 				const res = await fetch(`https://www.hynixapi.com/media/detail`, {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json;charset=utf-8'
// 					},
// 					body: JSON.stringify(sendObject)
// 				})
// 				const data = await res.json(res)
// 				console.log(data,';DATA')
// // 				RENDER_LIST.push(...renderList)
//   			$('.show_conWrap').html(renderMediaLibrary(data.blog))
//         //------
// 			}
// 		} catch(e) {
// 			console.log(e)
// 		}
// 	}
  

	
// 	const renderTags2 = (arr) => {
// 		if(arr === null || arr === undefined || arr.length === 0) {
// 			return ``
// 		} else {
// 			let item = '';
// 			const newArr = arr.map(el => {
// 				return `<span class="name"><a href="#">${el}</a></span>`
// 			})
// 			newArr.forEach(el => item += el)
// 			return item
// 		}
// 	}
  
//   const getBedge = (type)	=> {
//     if(type === 'video') {
//       return `<div class="img-type img-type-mov"></div>`
//     }
//     if(type === 'img') {
//       return `<div class="img-type img-type-pic"></div>`
//     }
//     if(type === 'youtube') {
//       return '';
//     }
//   }
//     // 다운로드 버튼 클릭
//     const btnClick = (event) => {
//     console.log('다운로드 클릭');
//     let targeting = event.target;
//       const dataValue = $(targeting).prev('i').data().url; // 해당 데이터 주소값
//       const dataType = $(targeting).prev('i').data().data; // 해당 데이터 타입

//     if(dataValue.length === 1 && dataType === 'img') {
//       console.log('이미지 다운로드 데이터가 한개입니다.',dataValue);
//       dataValue.forEach(e => {
//        let fileName = getFileName(e.join()); // 배열로 들어오기에 스트링으로 전환
//         saveAs(e,fileName)
//       })
//     }else if(dataValue.length > 1 && dataType === 'img') {
//       dataValue.forEach(e => {
//         console.log("dataForch",e);
//        let fileName = getFileName(e);
//         saveAs(e,fileName)
//       })
//     }else if(dataValue.length > 1 && dataType === 'video') {
//       let arr = dataValue;
//       arr.forEach(e => {
//        let fileName = getFileName(e);
//        let blob = new Blob([e],{type:'video/mp4'});
//        saveAs(blob,fileName);
//       });
//     }else if(dataValue.length === 1 && dataType === 'video') {
//       console.log('비디오 다운로드 데이터가 한개입니다.');
//       let fileName = getFileName(dataValue.join());
//       let blob = new Blob(dataValue,{type : 'video/mp4'});
//       saveAs(blob,fileName);
//     }
// }
    
//   // 파일 네임을 저장하는 힘수
//   const getFileName = (str) => {
//     return str.substring(str.lastIndexOf('/'))
//   }
  
  
  
// 	const renderMediaLibrary = (renderArr) => {
// 		if(renderArr === null || renderArr === undefined || renderArr.length === 0) {
// 			return ``
// 		} else {
// 			let item = '';
// 			console.log(renderArr, '시잘!!!!!!!')
// 			const arr = renderArr.map(el => {
// 				const { url, title, tags, content, id, date, featuredImage, mediaType,videoFile,imageFile,youtubeId } = el;
//         const movData = mediaType === 'video' ? 'img-type img-type-mov' : (mediaType === 'img' ? 'img-type img-type-pic' : '');
// 				const defaultImage = "{{get_asset_url('/hynixNewsRoom/codeFiles/images/defaultImage/cnoimg.png')}}";
//         const video = JSON.stringify(videoFile);
//         const image = JSON.stringify(imageFile);
        
//         const downloadData = mediaType === 'video' ? video : (mediaType === 'img' ? image : youtubeId);
        
//         console.log(downloadData,'123123123');
// 				return `
//           <div class="conItem">
// 						<h4 class="mlTit">${title}</h4>
// 						<div class="imgBx">
// 						  <a href=${url}>
//                 <div class="imgWrap">
// 						      ${getBedge(mediaType)}
// 						    <img src="${featuredImage ? featuredImage : defaultImage}" class="lazyload" alt="img">
// 							  </div>
//               </a>
// 	          </div>
// 						<div class="ml_con_info">
// 						  <div class="info">
// 						    <span class="date">${date}</span>
// 						    ${renderTags2(tags)}
// 							</div>
//                ${mediaType === 'youtube' ? '' : (
//                `<a>
// 						    <div class="ml_download" style="cursor : pointer">
// 									<i data-data=${mediaType} data-url=${downloadData}></i>
// 									<span onclick="btnClick(event)">미디어다운로드</span>
// 							  </div>
// 							</a>`                
//               )}
// 							</div>
// 						</div>
//         `
// 			})
// 			arr.forEach(el => item += el)
// 			  return item 
// 		}
// 	}
	
// 	const initMediaData = () => {
// 		const currentUrl = location.href
// 		const isRendingPage = currentUrl.includes('https://news.skhynix.live/')
// 		console.log(isRendingPage, '!!!!')
// 		if(isRendingPage) {
// 			$('.select_media_blog').css('display', 'none')
// 		}
// 		getMediaSimpleData()
// 		mediaLibraryList()
// 	}
	
// 	window.onload = initMediaData()