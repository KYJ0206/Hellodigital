{
const importHtml = () => {
		const currentUrl = location.href
		const writePage = currentUrl.includes('https://blog.hellodigital.co.kr/')
		const selectHtml = `
			<div class="ml_inner">
				<h3>
					관련기사 블로그 선택
				</h3>
				<div class="conWrap">
					<div class="conItem">
						<div class="ml_con_info">
							<div class="info">
								<select class="date">
									<option value=''>블로그 선택</option>
									<option value='54615482386'>기술</option>
									<option value='54780923926'>사람&문화</option>
									<option value='54784757872'>지속가능경영</option>
									<option value='54775817801'>프레스센터</option>
								</select>
								<span class="name">
									<input>
									<button>검색</button>
								</span>
							</div>
						</div>
						<hr class="news-hr">
						<div class="newsCon"></div>
					</div>
				</div>
			</div>
		`
		if(!writePage) {
			$('.container.media_module.news_module').html(selectHtml)
		}
	}
	
	const getData = () => {
		console.log('~~~')
	}
	
	const initData = () => {
		importHtml()
		getData()
	}
	
	window.onload = initData()
}