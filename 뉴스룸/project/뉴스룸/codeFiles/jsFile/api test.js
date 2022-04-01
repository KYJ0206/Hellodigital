// {
//   // 쿼리 스트링 가져오는 함수
//   const searchParam = (key) => {
//     return new URLSearchParams(location.search).get(key);
//   };
	
// 	let searchType = searchParam('searchType')
// 	const searchText =  searchParam('searchText');
// 	const dateType = searchParam('dateType');
// 	const startDate = searchParam('startDate');
// 	const endDate = searchParam('endDate');
// 	const groupId = searchParam('groupId');
	
//   let TOTAL = sessionStorage.getItem('total') ? sessionStorage.getItem('total') : 0;
// 	let TECH_BLOG_TOTAL = sessionStorage.getItem('tTotal') ? sessionStorage.getItem('tTotal') : 0;
// 	let CULTURE_BLOG_TOTAL = sessionStorage.getItem('cTotal') ? sessionStorage.getItem('cTotal') : 0;
// 	let S_BLOG_TOTAL = sessionStorage.getItem('sTotal') ? sessionStorage.getItem('sTotal') : 0;
// 	let PRESS_BLOG_TOTAL = sessionStorage.getItem('pTotal') ? sessionStorage.getItem('pTotal') : 0;
// 	let MEDIA_BLOG_TOTAL = sessionStorage.getItem('mTotal') ? sessionStorage.getItem('mTotal') : 0;
  
//   const getTagList = (arr, blogType) => {
//     if(arr === null || arr === undefined || arr.length === 0){
//       return '';
//     } else {
//       let item = '';
//       const list = arr.map((el) => {
// 				let url = '';
// 				if(blogType === 'tech') {
// 					url = `/technology/tag/${el}/page/1?type=tag&text=${el}`
// 				} 
// 				if(blogType === 'culture') {
// 					url = `/culture/tag/${el}/page/1?type=tag&text=${el}`
// 				}
// 				if(blogType === 'sustainability') {
// 					url = `/sustainability/tag/${el}/page/1?type=tag&text=${el}`
// 				}
// 				if(blogType === 'press') {
// 					url = `/presscenter/tag/${el}/page/1?type=tag&text=${el}`
// 				}
// 				if(!el.includes('카테고리-')) {
// 				  return `<a href='${url}' style='cursor: pointer;'>#${el}</a>&nbsp;`	
// 				} else {
// 					return ``
// 				}
//       })
//       list.forEach((el) => item += el)
//       return item
//     }
//   }
  
//   // html을 만들어서 그려주는 함수
//   const getList = (arr, num, blogType) => {
//     if(arr === null || arr === undefined || arr.length === 0){
//       return '';
//     }
//     else {
// 			let blogId = blogType === 'tech' ? 54615482386 : (blogType === 'culture' ? 54780923926 : (blogType === 'sustainability' ? 54784757872 : (blogType === 'press' ? 54775817801 : '')))
// 			let moreBtn = `?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=${blogId}`
			
//       let item = '';
// 			const buttonTag = `<a href='${moreBtn}' class="card-more">결과 더보기<i></i></a> `
// 			const showBlogBtn = `<a id='loady' class="card-more">더보기<i></i></a> `
//       const list = arr.map((el) => {
//         return `
//           <li class="conWrap">
//             <div class="">
//               <a href="${el.url}">
//                 <h1>${el.title}</h1>
//                 <p>${el.description}</p>
//               </a>
//               <hr>
//               <div class="post-meta">
//                 <span class="date">${el.publishedDate}</span>
//                 <span class="author">${getTagList(el.tags, blogType)}</span>
//               </div>
//             </div>
//           </li>
//         `
//       })
//       list.forEach((el) => item += el)
//       if(blogType && num > 5) {
// 			  return item + buttonTag	
// 			} else if(!blogType && num > 16) {
// 				return item + showBlogBtn
// 			} else {
// 				return item
// 			}
//     }
//   }
  
//    // html을 만들어서 그려주는 함수 (Media library)
//   const mediaList = (arr, num, blogType) => {
//     if(arr === null || arr === undefined || arr.length === 0){
//       return '';
//     }
//     else {
//       let item = '';
// 			const buttonTag = `<a href='/library?searchText=${searchText}' class="card-more">결과 더보기<i></i></a> `
// // 			const showBlogBtn = `<a id='loady' class="card-more">더보기<i></i></a> `
//       const list = arr.map((el) => {
//         return `
//           <div class="conItem">
//             <a href='${el.url}' style='text-decoration: none; cursor: pointer;'>
//               <h4 class="mlTit">
//                   ${el.title}
//               </h4>
//               <div class="imgBx">
//                   <div class="imgWrap">
//                       <div class="img-type img-type-pic"></div>
//                       <img class="lazyload" src=${el.featuredImageUrl} alt="이미지">
//                   </div>
//               </div>
//               </a>
//               <div class="ml_con_info">
//                   <div class="info">
//                       <span class="date">
//                           ${el.publishedDate}
//                       </span>
//                       <span class="name">
//                           ${getTagList(el.tags, blogType)}
//                       </span>
//                   </div>
//               </div>
//           </div>
//         `
//       })
//       list.forEach((el) => item += el)
// 			if(blogType && num > 5) {
// 			  return item + buttonTag	
// 			} else if(!blogType && num > 16) {
// 				return item + showBlogBtn
// 			} else {
// 				return item
// 			}
//     }
//   }
  
  
  
//   // API 호출 함수
//   const selectListPage = async (searchType, searchText, dateType, startDate, endDate) => {
//     try {
// 			console.log('~~~~')
//       const res = await fetch(`https://www.hynixapi.com/search?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`) 
//       const data = await res.json();
     
//       const total = data.total;
// 			sessionStorage.setItem('total', total)
			
//       const techArr = data.techArr;
//       const techLength = data.techLength;
// 			sessionStorage.setItem('tTotal', techLength)
			
//       const cultureArr = data.cultureArr;
//       const cultureLength = data.cultureLength;
// 			sessionStorage.setItem('cTotal', cultureLength)
			
//       const sustainabilityArr = data.sustainabilityArr;
//       const sustainabilityLength = data.sustainabilityLength;
// 			sessionStorage.setItem('sTotal', sustainabilityLength)
			
//       const pressArr = data.pressArr;
//       const pressLength = data.pressLength;
// 			sessionStorage.setItem('pTotal', pressLength)
			
//       const mediaArr = data.mediaArr;
//       const mediaLength = data.mediaLength;
// 			sessionStorage.setItem('mTotal', mediaLength)

// 			if(techLength === 0) {
// 				$('#tech-accordion').css('display', 'none')
// 			} else {
// 				$('#tech-accordion').css('display', 'block')
// 				$('#tech-accordion').addClass('activeAccordion')
// 			}
// 			if(cultureLength === 0) {
// 				$('#culture-accordion').css('display', 'none')
// 			} else {
// 				$('#culture-accordion').css('display', 'block')
// 				$('#culture-accordion').addClass('activeAccordion')
// 			}
// 			if(sustainabilityLength === 0) {
// 				$('#s-accordion').css('display', 'none')
// 			} else {
// 				$('#s-accordion').css('display', 'block')
// 				$('#s-accordion').addClass('activeAccordion')
// 			}
// 			if(pressLength === 0) {
// 				$('#press-accordion').css('display', 'none')
// 			} else {
// 				$('#press-accordion').css('display', 'block')
// 				$('#press-accordion').addClass('activeAccordion')
// 			}
// 			if(mediaLength === 0) {
// 				$('#media-accordion').css('display', 'none')
// 			} else {
// 				$('#media-accordion').css('display', 'block')
// 				$('#media-accordion').addClass('activeAccordion')
// 			}
			
// 			if(techLength === 0 && cultureLength === 0 && sustainabilityLength === 0 && pressLength === 0 && mediaLength === 0) {
//         $('.noSearchContainer').css('display', 'flex')
// 			} else {
// 				$('.noSearchContainer').css('display', 'none')
// 			}
			
// 			const firstEle = $('.accordion-item').first()
			
// 			// 아코디언 버튼 텍스트 넣어주기
// 			$('.accordion-total').html(`전체(${total})`)
// 			$('.accordion-tech').html(`기술(${techLength})`)
// 			$('.accordion-culture').html(`사람&문화(${cultureLength})`)
// 			$('.accordion-sustainability').html(`지속가능경영(${sustainabilityLength})`)
// 			$('.accordion-press').html(`보도자료(${pressLength})`)
// 			$('.accordion-media').html(`미디어 라이브러리(${mediaLength})`)
// 			// 아코디언 OPEN
// 			$('.activeAccordion').children('.accordion-collapse.collapse').addClass('show')
      
//       $('.search-tech-area div ul.list-main-contents').html(getList(techArr, techLength, 'tech'))
//       $('.search-culture-area div ul.list-main-contents').html(getList(cultureArr, cultureLength, 'culture'))
//       $('.search-sustainability-area div ul.list-main-contents').html(getList(sustainabilityArr, sustainabilityLength, 'sustainability'))
//       $('.search-press-area div ul.list-main-contents').html(getList(pressArr, pressLength, 'press'))
//       $('.search-media-area div div.conWrap').html(mediaList(mediaArr, mediaLength, 'media'))
      
      
			
// 			$('.loading-container').css('display', 'none')
// 		  $('.accordion').css('visibility', 'visible')
      
//     } catch(e) {
//       console.log(e)
//     }      
//   }
	
// 	const searchDetailBlog = async () => {
// 		try {
// 			console.log('111')
// 			const res = await fetch(`https://www.hynixapi.com/search/detail?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=${groupId}`)
// 			const data = await res.json();
// 			const dataTotal = data.total;
// 			const list = data.data;
// 			const renderList = getList(list, dataTotal)
			
			
// 			$('.accordion-total').html(`전체(${TOTAL})`)
// 			$('.accordion-tech').html(`기술(${TECH_BLOG_TOTAL})`)
// 			$('.accordion-culture').html(`사람&문화(${CULTURE_BLOG_TOTAL})`)
// 			$('.accordion-sustainability').html(`지속가능경영(${S_BLOG_TOTAL})`)
// 			$('.accordion-press').html(`보도자료(${PRESS_BLOG_TOTAL})`)
// 			$('.accordion-media').html(`미디어 라이브러리(${MEDIA_BLOG_TOTAL})`)
			
// 			if(groupId === '54615482386') {
// 			  $('#tech-accordion').css('display', 'block')
// 			  $('#tech-accordion').addClass('activeAccordion')
// 			  $('.accordion-tech').html(`기술(${list.length})`)
// 			  $('.search-tech-area div ul.list-main-contents').html(renderList)	
				
// 				for(let i = 16; i < list.length; i++) {
// 					const li = $('.search-tech-area div ul.list-main-contents').children('li')[i]
// 					$(li).addClass('blog-hidden')
// 				}
				
// 				$(function () {
// 					$("#loady").on('click', function (e) {
// 						e.preventDefault();
// 						$(".search-tech-area div ul.list-main-contents .blog-hidden:hidden").slice(0, 16).slideDown();
// 						if ($(".search-tech-area div ul.list-main-contents .blog-hidden:hidden").length == 0) {
// 							$("#loady").fadeOut('slow');
// 						}
// 					});
// 				});
				
// 			}
// 			if(groupId === '54780923926') {
// 			  $('#culture-accordion').css('display', 'block')
// 			  $('#culture-accordion').addClass('activeAccordion')
// 			  $('.accordion-culture').html(`사람&문화(${list.length})`)
// 			  $('.search-culture-area div ul.list-main-contents').html(renderList)
				
// 				for(let i = 16; i < list.length; i++) {
// 					const li = $('.search-culture-area div ul.list-main-contents').children('li')[i]
// 					$(li).addClass('blog-hidden')
// 				}
				
// 				$(function () {
// 					$("#loady").on('click', function (e) {
// 						e.preventDefault();
// 						$(".search-culture-area div ul.list-main-contents .blog-hidden:hidden").slice(0, 16).slideDown();
// 						if ($(".search-culture-area div ul.list-main-contents .blog-hidden:hidden").length == 0) {
// 							$("#loady").fadeOut('slow');
// 						}
// 					});
// 				});
				
// 			}
// 			if(groupId === '54784757872') {
// 			  $('#s-accordion').css('display', 'block')
// 			  $('#s-accordion').addClass('activeAccordion')
// 			  $('.accordion-sustainability').html(`지속가능경영(${list.length})`)
// 			  $('.search-sustainability-area div ul.list-main-contents').html(renderList)	
				
// 				for(let i = 16; i < list.length; i++) {
// 					const li = $('.search-sustainability-area div ul.list-main-contents').children('li')[i]
// 					$(li).addClass('blog-hidden')
// 				}
				
// 				$(function () {
// 					$("#loady").on('click', function (e) {
// 						e.preventDefault();
// 						$(".search-sustainability-area div ul.list-main-contents .blog-hidden:hidden").slice(0, 16).slideDown();
// 						if ($(".search-sustainability-area div ul.list-main-contents .blog-hidden:hidden").length == 0) {
// 							$("#loady").fadeOut('slow');
// 						}
// 					});
// 				});
				
// 			}
// 			if(groupId === '54775817801') {
// 			  $('#press-accordion').css('display', 'block')
// 			  $('#press-accordion').addClass('activeAccordion')
// 			  $('.accordion-press').html(`보도자료(${list.length})`)
// 			  $('.search-press-area div ul.list-main-contents').html(renderList)	
				
// 				for(let i = 16; i < list.length; i++) {
// 					const li = $('.search-press-area div ul.list-main-contents').children('li')[i]
// 					$(li).addClass('blog-hidden')
// 				}
// 				$(function () {
// 					$("#loady").on('click', function (e) {
// 						e.preventDefault();
// 						$(".search-press-area div ul.list-main-contents .blog-hidden:hidden").slice(0, 16).slideDown();
// 						if ($(".search-press-area div ul.list-main-contents .blog-hidden:hidden").length == 0) {
// 							$("#loady").fadeOut('slow');
// 						}
// 					});
// 				});
				
// 			}
			
// // 			$('.activeAccordion').first().children('.accordion-collapse.collapse').addClass('show')
// 			$('.activeAccordion').children('.accordion-collapse.collapse').addClass('show')
			
// 			$('.loading-container').css('display', 'none')
// 		  $('.accordion').css('visibility', 'visible')
// 		} catch(e) {
// 			console.log(e)
// 		}
// 	}
  
//   const searchInit = () => {
      
// 		if(groupId) {
// 			console.log('디테일 호출')
// 			searchDetailBlog()
// 			$('.loading-container').css('display', 'flex')
// 			$('.accordion').css('visibility', 'hidden')
// 		} else {
// 			console.log('여긴 전체일때만 호출')
// 			selectListPage(searchType, searchText, dateType, startDate, endDate)
// 			$('.loading-container').css('display', 'flex')
// 			$('.accordion').css('visibility', 'hidden')
// 		}
// 		// API 호출 함수
    
    
//     // query의 searchText를 통해서 input 창 및 검색결과 옆 Text 노출 로직 구현
//     $('.list-head-titWrap h1').html(`검색결과 : ${searchText}`)
// 		$('#search').val(searchText)
		
//     // query의 searchType을 통해서 전체,이미지,비디오 타입 중 해당하는 라디오버튼 활성화 로직 구현(searchType이 all일 경우 둘다 비활성화)
//     if(searchType === 'all') {
//       $('#ck-recent').removeAttr('checked')
//       $('#ck-popularity').removeAttr('checked')
//     } else if(searchType === 'img') {
//       $('#ck-recent').attr('checked', 'true')
//       $('#ck-popularity').removeAttr('checked')
//     } else if(searchType === 'video'){
//       $('#ck-recent').removeAttr('checked')
//       $('#ck-popularity').attr('checked', 'true')
//     }
    
//     // 선택버튼 클릭시 url이동
//     // image
//     $('#ck-recent').click(e => {
//       if($(e.target).is('[checked]')) {
//         location.href = `/search-results?searchType=all&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`
//       } else {
//         location.href = `/search-results?searchType=img&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`
//       }
//     })
    
//     // 선택버튼 클릭시 url이동
//     // video
//      $('#ck-popularity').click(e => {
//       if($(e.target).is('[checked]')) {
//         location.href = `/search-results?searchType=all&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`
//       } else {
//         location.href = `/search-results?searchType=video&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`
//       }
//     })
    
// 		// 상단 블로그 탭 click 시 url 이동
// 		$('.categoryAll').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`
// 		})
// 		$('.categoryTech').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=54615482386`
// 		})
// 		$('.categoryCulture').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=54780923926`
// 		})
// 		$('.categoryS').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=54784757872`
// 		})
// 		$('.categoryPress').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=54775817801`
// 		})
// 		$('.categoryMedia').click(() => {
// 			location.href = `/library?searchText=${searchText}`
// 		})
// 		// 상단 탭 active
// 		console.log('상단 탭 active')
// 		if(!groupId && searchType === 'all') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryAll').addClass('active')
// 		}
// 		if(groupId === '54615482386') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryTech').addClass('active')
// 		}
// 		if(groupId === '54780923926') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryCulture').addClass('active')
// 		}
// 		if(groupId === '54784757872') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryS').addClass('active')
// 		}
// 		if(groupId === '54775817801') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryPress').addClass('active')
// 		}
// 		if(searchType === 'img' || searchType === 'video') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryMedia').addClass('active')
// 		}

    
//     // option select 선택에 따른 url이동
//     $('.skh-select').change(e => {
//       if(e.target.value === 'select') {
//         $(".calWrap").show();
//       } else {
//         location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${e.target.value}&startDate=${startDate}&endDate=${endDate}`  
//       }
//     })
		
		
// 		$('#category-select').change(e => {
// 			console.log(e.target.value, '!!')
// 			const value = e.target.value
// 			console.log(value)
// 			if(value === 'all') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}`  
// 			} else if(value === 'media') {
// 				location.href = `/library?searchText=${searchText}`  
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&groupId=${value}`
// 			}
// 		})
		
// 		if(groupId === '54615482386') {
// 			 $('#category-select>option[value=54615482386]').prop("selected", "true");
// 		} else if(groupId === '54780923926') {
// 			$('#category-select>option[value=54780923926]').prop("selected", "true");
// 		} else if(groupId === '54784757872') {
// 			$('#category-select>option[value=54784757872]').prop("selected", "true");
// 		} else if(groupId === '54775817801') {
// 			$('#category-select>option[value=54775817801]').prop("selected", "true");
// 		} else {
// 			$('#category-select>option[value=all]').prop("selected", "true");
// 		}

//         // query 의 dateType을 통해서 날짜 기간 노출 로직 구현 (직접 입력이라면 select box 옆 날짜 노출)
//         if(dateType === 'all') {
//           $('.skh-select>option[value=all]').prop("selected", "true");
//           $("#select_box option:eq(2)").remove();
//           $("#select_box option:eq(3)").remove();
//           $("#select_box option:eq(4)").remove();
//           $("#select_box option:eq(5)").remove();
//           $(".calWrap").hide();
// //           console.log('전체')
//         }
          
//         else if(dateType === 'week') {
//           $('.skh-select>option[value=week]').prop("selected", "true");
//           $("#select_box option:eq(1)").remove();
//           $("#select_box option:eq(3)").remove();
//           $("#select_box option:eq(4)").remove();
//           $("#select_box option:eq(5)").remove();
//             $(".calWrap").hide();
// //           console.log('1주일')
//         } 
    
//         else if(dateType === 'month'){
//           $('.skh-select>option[value=month]').prop("selected", "true");
//           $("#select_box option:eq(1)").remove();
//           $("#select_box option:eq(2)").remove();
//           $("#select_box option:eq(4)").remove();
//           $("#select_box option:eq(5)").remove();
//           $(".calWrap").hide();
// //           console.log('1개월')
//         } 
    
//         else if(dateType === 'year'){
//           $('.skh-select>option[value=year]').prop("selected", "true");
//           $("#select_box option:eq(1)").remove();
//           $("#select_box option:eq(2)").remove();
//           $("#select_box option:eq(3)").remove();
//           $("#select_box option:eq(5)").remove();
//           $(".calWrap").hide();
// //           console.log('1년')
//         } 

//         else if(dateType === 'select'){
//           $('.skh-select>option[value=select]').prop("selected", "true");
//           $("#select_box option:eq(1)").remove();
//           $("#select_box option:eq(2)").remove();
//           $("#select_box option:eq(3)").remove();
//           $("#select_box option:eq(4)").remove();
//           $(".calWrap").show();
// //           console.log('직접선택')
//         }
    
// 	}
       
  
	
//  window.onload = searchInit()
  
// }



