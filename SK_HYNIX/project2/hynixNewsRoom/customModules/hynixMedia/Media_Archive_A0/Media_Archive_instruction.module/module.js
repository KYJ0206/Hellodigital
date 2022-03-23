$(document).ready(function(){
	const searchParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };
	
  const url = window.location.href
	const type = searchParam('type')
	const text = searchParam('text')
	if(type === 'blog') {
		$('.secondCrumb span').text(text)
		$('.lastCrumb span').remove()
		$('.secondCrumb').attr('href', `/${text}?category=all`)
	} else {
		if(url.includes('technology')) {
      $('.secondCrumb span').text('기술')
			$('.lastCrumb span').text(text)
			$('.secondCrumb').attr('href', `/technology?category=all`)
		}
		if(url.includes('culture')) {
      $('.secondCrumb span').text('사람&문화')
			$('.lastCrumb span').text(text)
			$('.secondCrumb').attr('href', `/culture?category=all`)
		}
		if(url.includes('sustainability')) {
      $('.secondCrumb span').text('지속가능경영')
			$('.lastCrumb span').text(text)
			$('.secondCrumb').attr('href', `/sustainability?category=all`)
		}
	}
	
});