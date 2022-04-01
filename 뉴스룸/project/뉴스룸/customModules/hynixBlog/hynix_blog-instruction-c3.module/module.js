const searchParam = (key) => {
	return new URLSearchParams(location.search).get(key);
};

const TITLE_TAG = $('title')
const PAGE_TITLE = $('title').text()
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | 카테고리-반도체')) {
	$('title').text('기술 - 반도체 - SK하이닉스 뉴스룸')
}
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | 카테고리-비즈니스')) {
	$('title').text('기술 - 비즈니스 - SK하이닉스 뉴스룸')
}
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | 카테고리-트렌드')) {
	$('title').text('기술 - 트렌드 - SK하이닉스 뉴스룸')
}
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | blog-기술')) {
	$('title').text('기술 - SK하이닉스 뉴스룸')
}
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | blog-사람-문화')) {
	$('title').text('사람&문화 - SK하이닉스 뉴스룸')
}
if(PAGE_TITLE.includes('SK하이닉스 뉴스룸 기획 콘텐츠 | blog-지속가능경영')) {
	$('title').text('지속가능경영 - SK하이닉스 뉴스룸')
}
