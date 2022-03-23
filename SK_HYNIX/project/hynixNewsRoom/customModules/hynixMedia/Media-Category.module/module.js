// const currentLocation = location.pathname
// const currentSearch = location.search
// const categoryValue = currentLocation.split('/').filter(Boolean)[2]

// const searchParamHandler = (key) => {
// 	return new URLSearchParams(location.search).get(key);
// };

// const searchText = searchParamHandler('searchText')
// const searchType = searchParamHandler('searchType')
// const searchCategory = searchParamHandler('category')

// $('.Recangle .Rectangle-Copy-92 .skh-select').change(e => {
// 	const value = e.target.value
//   console.log(value, 'VALUE')
// 	if(searchText) {
// 		if(value === 'all') {
// 			location.href = `/library?searchType=${searchType}&searchText=${searchText}&category=`
// 		} else {
// 			location.href = `/library?searchType=${searchType}&searchText=${searchText}&category=${value}`
// 		}
		 
// 	} else {
// 		if(value === 'all') {
// 		  location.href = `/library`	
// 		} else {
// 			location.href = `/library/tag/${value}/page/1`
// 		}
		
// 	}
// })



// $('.category d-pc').css('display','block');

// $('#category-select-box').change((e) => {
// 	const text = e.target.value

// 	location.href = `/library/tag/${text}/page/1`
// })

// const tagLength = $('.category.d-pc').children('li.categoryItem').length;
// if(currentLocation === '/library') {
// 	$(`.categoryItem0`).addClass('active')
// }

// for(let i = 1; i <= tagLength; i++) {
// 	const text = $(`.categoryItem${i}`).text()
// 	if(!text.includes('카테고리-')) {
// 		$(`.categoryItem${i}`).remove()
// 	}
// 	if(text.includes('카테고리-')) {
// 		const category1 = text.split('-')
// 		let category = '';
// 		if(category1.length > 2) {
// 			const arr = category1.slice(1, category1.length)
// 		  category = arr.join('&')
// 		} else {
// 			category = category1[1]
// 		}
	
// 		if(searchText) {
// 			$(`.categoryItem${i}`).html(`<a href="/library?searchType${searchType}=&searchText=${searchText}&category=${text}">${category}</a>`)
// 		} else {
// 			$(`.categoryItem${i}`).html(`<a href="/library/tag/${text}/page/1">${category}</a>`)
// 		}
		
		
// 		if(decodeURIComponent(currentLocation).includes(text)) {
// 			$(`.categoryItem`).removeClass('active')
// 			$(`.categoryItem${i}`).addClass('active')
// 		}

// 		if(decodeURIComponent(currentSearch).includes(text)) {

// 			$(`.categoryItem`).removeClass('active')
// 			$(`.categoryItem${i}`).addClass('active')
// 		}
// 	}
// }

// $('.category.d-pc').css('display', 'flex')


// const optionLength = $('.d-mobile').children('option.m-m-option').length;

// for(let i = 1; i <= optionLength; i++) {
// 	const text = $(`.m-m-option${i}`).val()
// let category = '';
// 	if(text && !text.includes('카테고리-')) {
// 		$(`.m-m-option${i}`).remove()
// 	}
// 	if(text && text.includes('카테고리-')) {
// 		const category1 = text.split('-')
// 		if(category1.length > 2) {
// 			const arr = category1.slice(1, category1.length)
// 		  $(`.m-m-option${i}`).text(arr.join('&'))
// 		} else {
// 			$(`.m-m-option${i}`).text(category1[1])
// 		}
// 	}
// }

// $(`.Recangle .Rectangle-Copy-92 .skh-select > option[value=${decodeURIComponent(searchCategory) ? decodeURIComponent(searchCategory) : 'all'}]`).val(`${decodeURIComponent(searchCategory) ? decodeURIComponent(searchCategory) : 'all'}`).prop('selected', "true")