{
let dbArr = []
// 	let seminarArr = []
// 	let techArr = []
// 	let resourceArr = []
	
// 	const COUNT = 10;
//   let dbPage = 1;
// 	let seminarPage = 1;
// 	let techPage = 1;
// 	let resourcePage = 1;
	
// 	// 쿼리 스트링 가져오는 함수
//   const searchParam = (key) => {
//     return new URLSearchParams(location.search).get(key);
//   };
	
// 	const getVaildArr = (arr, page) => {
// 		if(arr) {
// 		  const vaildArr = arr.slice((page - 1) * COUNT, page * COUNT)
//   		return vaildArr	
// 		} else {
// 			return []
// 		}
// 	}
	
// 	const getPagingButton = (num, page) => {
// 		if(num > 10) {
// 		  const pageCount = Math.ceil(num / COUNT)
// // 			console.log(page, 'PAGE')
// // 			console.log(pageCount, '!@#')
// 			let pageItem = '<a class="prev"></a>'
// 			let current = parseInt(page)

// 			let max = Math.ceil(parseInt(page)/10) * 10;
// // 			console.log(max, 'MAX')
// 			let realMax = max >= pageCount ? pageCount : max
// // 			console.log(realMax, 'REALMAX')
// 			let min = max - 9
// 			for(let i = min; i <= realMax; i++) {
// 				if(i === parseInt(page)) {
// 					pageItem += `<em class='numBtn'>${i}</em>`	
// 				}  else {
// 					pageItem += `<a class='numBtn'>${i}</a>`	
// 				} 
// 			}
// 			pageItem += '<a class="next"></a>'
// 			return pageItem	
// 		} else {
// 			return ''
// 		}
// 	}
	
// 	const handleChangePage = () => {
// 		$('.pagination a.numBtn').click(e => {
// 			const parent = $(e.target).parents('div.resultWrap')
// 			if(parent.hasClass('result-sec01')) {
// 				console.log('ㅇ우왓1')
// 			  seminarPage = e.target.innerHTML
// 			  getInitData()
// 			}
// 			if(parent.hasClass('result-sec02')) {
// 				console.log('ㅇ우왓2')
// 			  techPage = e.target.innerHTML
// 			  getInitData()
// 			}
// 			if(parent.hasClass('result-sec03')) {
// 				console.log('ㅇ우왓3')
// 			  resourcePage = e.target.innerHTML
// 			  getInitData()
// 			}
// 			if(parent.hasClass('result-sec04')) {
// 				console.log('ㅇ우왓4')
// 			  dbPage = e.target.innerHTML
// 			  getInitData()
// 			}
			
			
// 		})

// 	}
	
// 	const handleChangePrev = () => {
// 		$('.pagination a.prev').click((e) => {
// 			const parent = $(e.target).parents('div.resultWrap')
// 			if(parent.hasClass('result-sec01')) {
// 				console.log('내려가1')
// 				if(seminarPage === 1) {
// 					return; 
// 				} else {
// 					seminarPage -= 1
// 					getInitData()
// 				}
// 			}
// 			if(parent.hasClass('result-sec02')) {
// 				console.log('내려가2')
// 				if(techPage === 1) {
// 					return; 
// 				} else {
// 					techPage -= 1
// 					getInitData()
// 				}
// 			}
// 			if(parent.hasClass('result-sec03')) {
// 				console.log('내려가3')
// 				if(resourcePage === 1) {
// 					return; 
// 				} else {
// 					resourcePage -= 1
// 					getInitData()
// 				}
// 			}
// 			if(parent.hasClass('result-sec04')) {
// 				console.log('내려가4')
// 				if(dbPage === 1) {
// 					return; 
// 				} else {
// 					dbPage -= 1
// 					getInitData()
// 				}
// 			}
// 		})
// 	}
	
// 	const handleChangeNext = () => {
// 		$('.pagination a.next').click((e) => {
// 			const parent = $(e.target).parents('div.resultWrap')
// 			if(parent.hasClass('result-sec01')) {
// 				const pageCount = Math.ceil(seminarArr.length / COUNT)
// 				if(seminarPage >= pageCount) {
// 					return; 
// 				} else {
// 					seminarPage = parseInt(seminarPage) + 1
// 					getInitData()
// 				}
// 			}
			
// 			if(parent.hasClass('result-sec02')) {
// 				const pageCount = Math.ceil(techArr.length / COUNT)
// 				if(techPage >= pageCount) {
// 					return; 
// 				} else {
// 					techPage = parseInt(techPage) + 1
// 					getInitData()
// 				}
// 			}
			
// 			if(parent.hasClass('result-sec03')) {
// 				const pageCount = Math.ceil(resourceArr.length / COUNT)
// 				if(resourcePage >= pageCount) {
// 					return; 
// 				} else {
// 					resourcePage = parseInt(resourcePage) + 1
// 					getInitData()
// 				}
// 			}
			
// 			if(parent.hasClass('result-sec04')) {
// 				const pageCount = Math.ceil(dbArr.length / COUNT)
// 				if(dbPage >= pageCount) {
// 					return; 
// 				} else {
// 					dbPage = parseInt(dbPage) + 1
// 					getInitData()
// 				}
// 			}
// 		})
// 	}
	
// 	const getList = (arr) => {
// 	  if(arr === null || arr === undefined || arr.length === 0) {
// 			return `<div class="resultItem"><h1>결과가 존재하지 않습니다.</h1></div>`
// 		} else {
// 			const renderList = arr.map((el, index) => {
// 				const {id, createdDate, keyword, keyword_en, category, content, tag, status} = el	
// 				let renderTag = ''
// 				const tags = tag ? tag.forEach(item => item ? renderTag += `<li>${item}</li>` : renderTag += '') : ''
// 				return `
// 				<div class="resultItem">
//           <a href='/cae-dict/detail?id=${id}'>
// 						<div>
// 							<ul>
// 								${renderTag}
// 							</ul>
// 							<h2>${keyword}</h2>
// 							<p>${content.length > 300 ? content.substring(0, 300) + '...' : content}</p>
// 						</div>
//           </a>
//         </div>
//         `
// 			})
// 			return renderList;
// 		}
// 	}
	
// 	const getBlogList = (arr) => {
// 		if(arr === null || arr === undefined || arr.length === 0) {
// 			return `<div class="resultItem"><h1>결과가 존재하지 않습니다.</h1></div>`
// 		} else {
// 			const renderList = arr.map((el, index) => {

// 				const {authorFullName, description, featuredImageUrl, id, language, publishedDate, score, tags, title, type, url} = el
// 				let renderTag = ''
// 				const tag = tags ? tags.forEach(item => item ? renderTag += `<li>${item}</li>` : renderTag += '') : ''
// 				return `
// 				<div class="resultItem">
//           <a href='${url}'>
// 						<div>
// 							<ul>
//                 <li>${authorFullName}<li>
// 								<li>${publishedDate}</li>
// 							</ul>
// 							<h2>${title}</h2>
// 							<p>${description.length > 300 ? description.substring(0,300) : description}</p>
// 						</div>
//           </a>
//         </div>
//         `
// 			})
// 			return renderList;
// 		}
// 	}
	
// 	const getReInitData = () => {

// 		const seminarData = getVaildArr(seminarArr, seminarPage)
// 		const techData = getVaildArr(techArr, techPage)
// 		const resourcesData = getVaildArr(resourceArr, resourcePage)
// 		const dbData = getVaildArr(dbArr, dbPage);
		
	
	const getInitData = async () => {
		try {
			if(dbArr.length === 0) {
				const searchText = searchParam('searchText')
        console.log(searchText,123123);
// 				const res = await fetch(`https://www.midasapi.com/search/bdtSearchText?search=${encodeURIComponent(searchText)}`)
// 				const data = await res.json()

			} else {
        console.log('hello');
			}

		} catch(e) {
			console.log(e)
		}
	}
	
	const init = () => {
		console.log('*start!*')
    console.log('*!!!!!!!!!!*')
// 		getInitData()
	}
	
	window.onload = init()
}