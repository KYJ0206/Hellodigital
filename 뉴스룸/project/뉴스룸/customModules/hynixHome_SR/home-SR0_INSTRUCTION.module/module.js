// 
// // {
//   // 쿼리 스트링 가져오는 함수
//   const searchParam = (key) => {
//     return new URLSearchParams(location.search).get(key);
//   };
	
// 	const postArr = [];
// 	const recentPostArr = []
// 	const weekPostArr = [];
// 	const monthPostArr = [];
// 	const yearPostArr = [];
// 	const selectPostArr = [];
	
// 	const pressCenterArr = [];
// 	const recentPressCenterArr = [];
// 	const weekPressCenterArr = [];
// 	const monthPressCenterArr = [];
// 	const yearPressCenterArr = [];
// 	const selectPressCenterArr = [];
	
// 	const mediaLibraryArr = [];
// 	const recentMediaArr = [];
// 	const weekMediaArr = [];
// 	const monthMediaArr = [];
// 	const yearMediaArr = [];
// 	const selectMediaArr = [];
	
// 	const PAGE_COUNT = 10;
// 	let POST_PAGE = 0;
// 	let POST_TOTAL = 0;
// 	let PRESS_PAGE = 0;
// 	let PRESS_TOTAL = 0;
// 	let FILTER_OPTION = '';
	
// 	let searchType = searchParam('searchType')
// 	const searchText =  searchParam('searchText');
// 	const dateType = searchParam('dateType');
// 	const startDate = searchParam('startDate');
// 	const endDate = searchParam('endDate');
// 	const category = searchParam('category');
	
	

  
//   const getTagList = (arr, blogType) => {
//     if(arr === null || arr === undefined || arr.length === 0){
			
//       return '';
//     } else {
//       let item = '';
//       const list = arr.map((el) => {
// 				let url = '';
// 				if(blogType === 'post') {
// 					url = `/post/tag/${el}/page/1?type=tag&text=${el}`
// 				} 
// 				if(blogType === 'press') {
// 					url = `/presscenter/tag/${el}/page/1?type=tag&text=${el}`
// 				}
// 				if(!el.includes('blog-')) {
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
//   const getList = (arr, blogType, offset, option) => {
//     if(arr === null || arr === undefined || arr.length === 0){
// 			if(blogType === 'post') {
// 				$('#tech-accordion').css('display', 'none')
// 			}
// 			if(blogType === 'press') {
// 				$('#press-accordion').css('display', 'none')
// 			}
//       return '';
//     }
//     else {
// 			if(blogType === 'post') {
// 				$('#tech-accordion').css('display', 'block')
// 				$('#tech-accordion').addClass('activeAccordion')
				
// 			}
// 			if(blogType === 'press') {
// 				$('#press-accordion').css('display', 'block')
// 				$('#press-accordion').addClass('activeAccordion')
// 			}
			
// 			const filterOption = FILTER_OPTION ? FILTER_OPTION : option
// 			const renderList = arr.slice(offset * PAGE_COUNT, (offset + 1) * PAGE_COUNT)
			
//       let item = '';
//       const list = renderList.map((el) => {
// 				const publishDate = moment(el.publishedDate).format('YYYY-MM-DD')
//         return `
//           <li class="conWrap">
//             <div class="">
//               <a href="${el.url}">
//                 <h1>${el.title}</h1>
//                 <p>${el.description}</p>
//               </a>
//               <hr>
//               <div class="post-meta">
//                 <span class="date">${publishDate}</span>
//                 <span class="author">${getTagList(el.tags, blogType)}</span>
//               </div>
//             </div>
//           </li>
//         `
//       })
// 			list.forEach((el) => item += el)
// 			return item; 	
//     }
//   }
  
//    // html을 만들어서 그려주는 함수 (Media library)
//   const mediaList = (arr, num, blogType) => {
//     if(arr === null || arr === undefined || arr.length === 0){
// 			$('#media-accordion').css('display', 'none')
//       return '';
//     }
//     else {
// 			$('#media-accordion').css('display', 'block')
// 			$('#media-accordion').addClass('activeAccordion')
			
// 			const renderList = arr.slice(0, 5)
//       let item = '';
// 			const buttonTag = `<a href='/library?searchText=${searchText}' class="card-more">결과 더보기<i></i></a> `
// // 			const showBlogBtn = `<a id='loady' class="card-more">더보기<i></i></a> `
//       const list = renderList.map((el) => {
// 				const publishDate = moment(el.publishedDate).format('YYYY-MM-DD')
//         return `
//           <div class="conItem">
//             <a href='${el.url}' style='text-decoration: none; cursor: pointer;'>
//               <h4 class="mlTit">
//                   ${el.title}
//               </h4>
//               <div class="imgBx">
//                   <div class="imgWrap">
//                       <img class="lazyload" src=${el.featuredImageUrl} alt="이미지">
//                   </div>
//               </div>
//               </a>
//               <div class="ml_con_info">
//                   <div class="info">
//                       <span class="date">
//                           ${publishDate}
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
// 			} else {
// 				return item
// 			}
//     }
//   }
  
//   // 전체 API 호출 함수
// 	const getAllData = async (searchText) => {
// 		try {
// 			const res = await fetch(`https://www.hynixapi.com/search/all?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=${category}`) 
// 			const data = await res.json();
//       sessionStorage.setItem('OPTION', 'all')
// 			const total = data.total;
// // 			sessionStorage.setItem('total', total)
			

// 			postArr.push(...data.techArr);
// // 			recentPostArr.push(...data.techArr.sort((a, b) => {return b.publishedDate - a.publishedDate}))

// 			const techArr = data.techArr;
// 			const techLength = data.techTotalNumber;
			
// 			$('.page-next-t').css('visibility', 'visible')
// 			$('.page-prev-t').css('visibility', 'visible')
			

//       pressCenterArr.push(...data.pressArr);
// // 			recentPressCenterArr.push(...data.pressArr.sort((a, b) => {return b.publishedDate - a.publishedDate}))			
// 			const pressArr = data.pressArr;
// 			const pressLength = data.pressTotalNumber;
		
// 			$('.page-next-p').css('visibility', 'visible')
// 			$('.page-prev-p').css('visibility', 'visible')

// 			mediaLibraryArr.push(...data.mediaArr)
// 			recentMediaArr.push(...data.mediaArr.sort((a, b) => {return b.publishedDate - a.publishedDate}))
// 			const mediaArr = data.mediaArr;
// 			const mediaLength = data.mediaTotalNumber;
// // 			sessionStorage.setItem('mTotal', mediaLength)

// 			if(techLength === 0) {
// 				$('#tech-accordion').css('display', 'none')
// 			} else {
// 				$('#tech-accordion').css('display', 'block')
// 				$('#tech-accordion').addClass('activeAccordion')
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

// 			if(techLength === 0 && pressLength === 0 && mediaLength === 0) {
// 				$('.noSearchContainer').css('display', 'flex')
// 			} else {
// 				$('.noSearchContainer').css('display', 'none')
// 			}

// 			const firstEle = $('.accordion-item').first()

// 			// 아코디언 OPEN
// 			$('.activeAccordion').children('.accordion-collapse.collapse').addClass('show')

// 			$('.search-tech-area div ul.list-main-contents').html(getList(postArr, 'post', POST_PAGE))
// 			$('.search-press-area div ul.list-main-contents').html(getList(pressCenterArr, 'press', PRESS_PAGE))
			
// 			$('.search-media-area div div.conWrap').html(mediaList(recentMediaArr, mediaLength, 'media'))

// 			$('.loading-container').css('display', 'none')
// 			$('.accordion').css('visibility', 'visible')

// 		} catch(e) {
// 			console.log(e)
// 		}      
// 	}
	
// // 	const settingDate = () => {
// // 	  const TODAY = moment().format('YYYY-MM-DD')
		
// // 		$('#date-from').val('')
// // 		$('#date-to').val('')

// // 		$(".calWrap").show();

// // 		$("#date-from").datepicker();
// // 		$("#date-from" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// // 		$('#date-from').datepicker("option", "setDate", startDate);
// // 		$('#date-from').datepicker("option", "maxDate", TODAY);
// // 		$('#date-from').datepicker("option", "onClose", function ( selectedDate ) {
// // 			console.log(selectedDate)
// // 		});

// // 		$("#date-from2").datepicker();
// // 		$("#date-from2" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// // 		$('#date-from2').datepicker("option", "setDate", startDate);
// // 		$('#date-from2').datepicker("option", "maxDate", TODAY);
// // 		$('#date-from2').datepicker("option", "onClose", function ( selectedDate ) {
// // 			console.log(selectedDate)
// // 		});


// // 		$("#date-to").datepicker();
// // 		$('#date-to').datepicker("option", "minDate", $("#date-from").val());
// // 		$('#date-to').datepicker("option", "setDate", endDate);
// // 		$('#date-to').datepicker("option", "maxDate", TODAY);
// // 		$('#date-to').datepicker("option", "onClose", function ( selectedDate ) {
// // 			const start_date = $('#date-from').datepicker('getDate');
// // 			const start = moment(start_date).format('YYYY-MM-DD')

// // 			if(!start_date) {
// // 				alert('시작일을 선택해주세요..')
// // 				$('#date-to').val('')
// // 			} else if(start > selectedDate) {
// // 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// // 				$('#date-to').val('')
// // 			} else {
// // 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// // 			}
// // 		});

// // 		$("#date-to2").datepicker();
// // 		$('#date-to2').datepicker("option", "minDate", $("#date-from").val());
// // 		$('#date-to').datepicker("option", "setDate", endDate);
// // 		$('#date-to2').datepicker("option", "maxDate", TODAY);
// // 		$('#date-to2').datepicker("option", "onClose", function ( selectedDate ) {
// // 			const start_date = $('#date-from2').datepicker('getDate');
// // 			const start = moment(start_date).format('YYYY-MM-DD')

// // 			if(!start_date) {
// // 				alert('시작일을 선택해주세요..')
// // 				$('#date-to2').val('')
// // 			} else if(start > selectedDate) {
// // 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// // 				$('#date-to2').val('')
// // 			} else {
// // 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// // 			}
// // 		});
// // 	}
// // 	settingDate()
// // 	$.datepicker.setDefaults({
// // 		dateFormat: 'yy-mm-dd',
// // 		prevText: '이전 달',
// // 		nextText: '다음 달',
// // 		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
// // 		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
// // 		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
// // 		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
// // 		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
// // 		showMonthAfterYear: true,
// // 		yearSuffix: '년',
// // 		firstDay: 0,
// // 		changeYear : true, 
// // 		changeMonth : true,
// // 	})
  
//   const searchInit = () => {
// 		console.log('제발')
		
// 		getAllData(searchText);
		
		
// 		$('.loading-container').css('display', 'flex')
// 		$('.accordion').css('visibility', 'hidden')
			
			
		
// 		// 이전, 다음 버튼 클릭
// 		$('#collapseOne > div.accordion-body > div.inner2.inner2-paginationWrap > nav > ul.skh-pagination > li.page-next.page-next-t').click(() => {
// 			if(Math.ceil(postArr.length / PAGE_COUNT) === POST_PAGE + 1) {
// 				alert('마지막 페이지 입니다.')
// 			} else {
// 				const topValue = $('#headingOne').offset().top
// 				$("html, body").animate({scrollTop:topValue - 100}, 0);
// 				POST_PAGE += 1
// 				$('.search-tech-area div ul.list-main-contents').html(getList(postArr, 'post', POST_PAGE))		
// 			}
// 		})
		
// 		$('#collapseOne > div.accordion-body > div.inner2.inner2-paginationWrap > nav > ul.skh-pagination > li.page-prev.page-prev-t').click(() => {
// 			if(POST_PAGE === 0) {
// 				alert('첫 페이지 입니다.')
// 			} else {
// 				const topValue = $('#headingOne').offset().top
// 				$("html, body").animate({scrollTop:topValue - 100}, 0);
// 				POST_PAGE -= 1
// 				const OPTION = sessionStorage.getItem('OPTION')
// 				$('.search-tech-area div ul.list-main-contents').html(getList(postArr, 'post', POST_PAGE))		
// 			}
// 		})
		
// 		$('#collapseFour > div.accordion-body > div.inner2.inner2-paginationWrap > nav > ul.skh-pagination > li.page-next.page-next-p').click(() => {
// 			if(Math.ceil(pressCenterArr.length / PAGE_COUNT) === PRESS_PAGE + 1) {
// 				alert('마지막 페이지 입니다.')
// 			} else {
// 				const topValue = $('#headingFour').offset().top
// 				$("html, body").animate({scrollTop:topValue - 100}, 0);
// 				PRESS_PAGE += 1
// 				const OPTION = sessionStorage.getItem('OPTION')
// 				$('.search-press-area div ul.list-main-contents').html(getList(pressCenterArr, 'press', PRESS_PAGE))		
// 			}
// 		})
		
// 		$('#collapseFour > div.accordion-body > div.inner2.inner2-paginationWrap > nav > ul.skh-pagination > li.page-prev.page-prev-p').click(() => {
// 			if(PRESS_PAGE === 0) {
// 				alert('첫 페이지 입니다.')
// 			} else {
// 				const topValue = $('#headingFour').offset().top
// 				$("html, body").animate({scrollTop:topValue - 100}, 0);
// 				PRESS_PAGE -= 1
// 				const OPTION = sessionStorage.getItem('OPTION')
// 				$('.search-press-area div ul.list-main-contents').html(getList(pressCenterArr, 'press', PRESS_PAGE))		
// 			}
// 		})
//     // 이전, 다음 버튼 클릭
    
    
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
    
// 		// 상단 블로그 탭 click 시 url 이동
// 		$('.categoryAll').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=`
// 		})
// 		$('.categoryTech').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=blog-기술`
// 		})
// 		$('.categoryCulture').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=blog-사람-문화`
// 		})
// 		$('.categoryS').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=blog-지속가능경영`
// 		})
// 		$('.categoryPress').click(() => {
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=보도자료`
// 		})
// 		$('.categoryMedia').click(() => {
// 			location.href = `/library?searchText=${searchText}`
// 		})
		
		
// 		// 상단 탭 active
// 		if(!category && searchType === 'all') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryAll').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=all]').prop("selected", "true");
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$("#select_box option:eq(6)").remove();
// 		}
// 		if(category === 'blog-기술') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryTech').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=blog-기술]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$("#select_box option:eq(6)").remove();
// 		}
// 		if(category === 'blog-사람-문화') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryCulture').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=blog-사람-문화]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$("#select_box option:eq(6)").remove();
// 		}
// 		if(category === 'blog-지속가능경영') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryS').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=blog-지속가능경영]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$("#select_box option:eq(6)").remove();
// 		}
// 		if(category === '보도자료') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryPress').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=보도자료]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(6)").remove();
// 		}
// 		if(searchType === 'img' || searchType === 'video') {
// 			$('.media-category .list-conWrap-top .categoryWrap .categoryItem.categoryMedia').addClass('active')
// 			$('.Rectangle-Copy-92>.skh-select>option[value=media]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 		}

    
//     // option select 선택에 따른 url이동
//     $('.skh-select').change(e => {
// 			const value = e.target.value
			
// 			sessionStorage.setItem('OPTION', e.target.value)
// 			const TODAY = moment().format('YYYY-MM-DD')

// 			if(value === 'all') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=all&startDate=&endDate=&category=${category}` 

// 			}
// 			if(value === 'week') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=week&startDate=&endDate=&category=${category}`

// 			}
// 			if(value === 'month') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=months&startDate=&endDate=&category=${category}`

// 			}
// 			if(value === 'year') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=years&startDate=&endDate=&category=${category}`
				
// 			}
// 			if(value === 'select') {
// 				$(".calWrap").show();
// 			}
		
//     })
// 		if(dateType === 'all') {
// 			$('.skh-select>option[value=all]').prop("selected", "true");
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$(".calWrap").hide();
// 			//           console.log('전체')
// 		}

// 		else if(dateType === 'week') {
// 			$('.skh-select>option[value=week]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$(".calWrap").hide();
// 		}

// 		else if(dateType === 'months'){
// 			$('.skh-select>option[value=month]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$(".calWrap").hide();
// 			//           console.log('1개월')
// 		}

// 		else if(dateType === 'years'){
// 			$('.skh-select>option[value=year]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(5)").remove();
// 			$(".calWrap").hide();
// 			//           console.log('1년')
// 		}

// 		else if(dateType === 'select'){
// 			$('.skh-select>option[value=select]').prop("selected", "true");
// 			$("#select_box option:eq(1)").remove();
// 			$("#select_box option:eq(2)").remove();
// 			$("#select_box option:eq(3)").remove();
// 			$("#select_box option:eq(4)").remove();
// 			$(".calWrap").show();
// 			//           console.log('직접선택')
// 		}
		
		
// 		$('#category-select').change(e => {
// 			console.log(e.target.value, '!!')
// 			const value = e.target.value
// 			console.log(value)
// 			if(value === 'all') {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=`  
// 			} else if(value === 'media') {
// 				location.href = `/library?searchText=${searchText}`  
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=${value}`
// 			}
// 		})
		
// 		if(category === 'blog-기술') {
// 			 $('#category-select>option[value=blog-기술]').prop("selected", "true");
// 		} else if(category === 'blog-사람-문화') {
// 			$('#category-select>option[value=blog-사람-문화]').prop("selected", "true");
// 		} else if(category === 'blog-지속가능경영') {
// 			$('#category-select>option[value=blog-지속가능경영]').prop("selected", "true");
// 		} else if(category === 'blog-보도자료') {
// 			$('#category-select>option[value=보도자료]').prop("selected", "true");
// 		} else {
// 			$('#category-select>option[value=all]').prop("selected", "true");
// 		}
// 	}
	
	
      
//  window.onload = searchInit()
  
// }