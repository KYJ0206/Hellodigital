// {
//   const PAGE_COUNT = 16;
//   const recentBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li').length;
//   const popularBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-popularity .inner2 .list-main-contents').children('li').length;
//   const pathName = window.location.pathname;
//   let POST_PAGE = 0;
//   let PRESS_PAGE = 0;
//   let FILTER_OPTION = '';
//   const OFFSET = 0;
//   let TOTAL_ARR = [];
//   const recentPostArr = [];
//   const postArr = [];
//   const pressCenterArr = [];
//   const recentPressCenterArr = [];
//   const weekPostArr = [];
//   const monthPostArr = [];
//   const yearPostArr = [];
//   const selectPostArr = [];
  
//   const weekPressCenterArr = [];
//   const monthPressCenterArr = [];
//   const yearPressCenterArr = [];
//   const selectPressCenterArr = [];
  
//   let message = ''
//    // 쿼리 스트링 가져오는 함수
//   const searchParamHandler = (key) => {
//     console.log(key,'KEY');
//     return new URLSearchParams(location.search).get(key);
//   };
//   const searchText = searchParamHandler('searchText')
//   let searchType = searchParamHandler('searchType')
//   const dateType = searchParamHandler('dateType');
//   const startDate = searchParamHandler('startDate');
//   const endDate = searchParamHandler('endDate');
//   const category = searchParamHandler('category');
 
  
//   $('.loading-container').css('display','none');
  
  
//   if(pathName === '/presscenter') {
//     $('.pressBlog-wrapper.addWrapper').css('display','none');

//     for(let i = 10; i <= recentBlogLength; i++) {
//       const li = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li')[i];
//       $(li).addClass('blog-hidden');
//     }

//     for(let i = 10; i <= popularBlogLength; i++) {
//       const li = $('.press-contents-full .conWrap-body.conWrap-body-popularity .inner2 .list-main-contents').children('li')[i];
//       $(li).addClass('blog-hidden');
//     }
//     //------------------------------------------------------------------------------
//     const showArea = (show, noShow) => {
//       $(show).css('display', 'block')
//       $(noShow).css('display', 'none')
//     }

//     $('.ckWrap #ck-recent').click(() => {

//       $('input:checkbox[id="ck-recent"]').prop("checked", true);
//       $('input:checkbox[id="ck-popularity"]').prop("checked", false);

//       $('#loady').css('display', 'flex')
//       $('#loady2').css('display', 'none')
//       $('.popular-blog').css('display', 'none')
//       $('.recent-blog').css('display', 'block')
//       $('.recent-blog-btn').css('display', 'none')
//       $('.popular-blog-btn').css('display', 'none')
//       showArea('.conWrap-body-recent', '.conWrap-body-popularity')
//     })

//     $('.ckWrap #ck-popularity').click(() => {

//       $('input:checkbox[id="ck-recent"]').prop("checked", false)
//       $('input:checkbox[id="ck-popularity"]').prop("checked", true)
//       $('#loady').css('display', 'none')
//       $('#loady2').css('display', 'flex')
//       $('.popular-blog').css('display', 'block')
//       $('.recent-blog').css('display', 'none')
//       $('.recent-blog-btn').css('display', 'none')
//       $('.popular-blog-btn').css('display', 'none')

//       showArea('.conWrap-body-popularity', '.conWrap-body-recent')
//     })
//       // 기본
//       $("#loady").on('click', function (e) {
//         e.preventDefault();

//         let slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 10)
//         slideItem.slideDown();
//         slideItem.css('display','flex');
// 				slideItem.removeClass('blog-hidden');
//         if ($(".recent-blog .blog-hidden:hidden").length == 10) {
//           $("#loady").fadeOut('slow');
//           $('.recent-blog-btn').css('display', 'flex');
//         }
//         $('html,body').animate({
//           scrollTop: $(this).offset().top - 10
//         }, 1000);
//       });
     
//       // 인기
//       $("#loady2").on('click', function (e) {
//         e.preventDefault();
//         let slideItem = $(".popular-blog .blog-hidden:hidden").slice(0, 10)
//         slideItem.slideDown();
//         slideItem.css('display','flex');
//         if ($(".popular-blog .blog-hidden:hidden").length == 10) {
//           $("#loady").fadeOut('slow');
//           $('.popular-blog-btn').css('display', 'flex');
//         }
//         $('html,body').animate({
//           scrollTop: $(this).offset().top - 10
//         }, 1000);
//       });
   
//  }     
//       // 더보기 클릭
// //       $("#loady").on('click', function (e) {  
// //         e.preventDefault();
        
// //         let slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 16)
// //         slideItem.slideDown();
// //         slideItem.css('display','flex');

// //         if ($(".recent-blog .blog-hidden:hidden").length == 0) {
// //           $("#loady").fadeOut('slow');

// //         }
// //         $('html,body').animate({
// //           scrollTop: $(this).offset().top - 200
// //         }, 1000);
// //       });
// //     }
  
//   const getblogList = (arr,num,target) => {
// //     $('.list-main-contents.recent-blog').css('display','block');
//     const noImage = '{{get_asset_url("/hynixNewsRoom/codeFiles/images/contentImage/groupO2x.png")}}'
    
//     if(arr === null || arr === undefined || arr.length === 0) {
//       $('.loading-container').css('display','none');
//       $('.search-full .inner .clear-fix').css('display','block');
//       $('.list-main-contents.recent-blog').css('display','none');
//       $('ul.list-main-contents.recent-blog').css('display','none');
// 			$('.noSearchContainer').css('display','flex');
//       return ''
//     } else {
//       $('.noSearchContainer').css('display','none');
//       const renderList = arr.map((el, index) => {
//         const {description,publishedDate,featuredImageUrl,tags,title,url,authorFullName} = el 
//         const publishDate = moment(publishedDate).format('YYYY-MM-DD')
//         let renderTag = ''
//         const tag = tags ? tags.forEach(item => item ? renderTag += `<li>${item}</li>` : renderTag += '') : ''
//         const className = index > 16 ? 'conWrap blog-hidden' :  'conWrap';
//         let lastItem = `<a id='loady' class="card-more recent-blog-btn loaded">글 더보기<i></i></a>`;
//         return `
//                 <li class="${className}">
//                   <div class="col-8">
//                     <a href='${url}'>
//                       <h1>${title}</h1>
//                       <div class='removeBody${index}'><p>${description}</p></div>
//                       <p class="showBody${index}"></p>
//                     </a>
//                   <hr>
//                   <div class="post-meta">
//                   <span class="date">${publishDate}</span>
//                   <span class="author"><a href="#">#${authorFullName}</a></span>
//                   </div>
//                   </div>
//                   <div class="col-4">
//                   <div class="imgWrap">

//                   <a href="#"><img src=${featuredImageUrl ? featuredImageUrl : noImage} alt="이미지"></a>
//                   </div>
//                   </div>
//                 </li>
//                 `
//       })
//       return renderList;
//     }
//   }
  
  
//   const listRenderHandler = (data,itemLength) => {

//     $('.search-full .inner .clear-fix').css('display','none');
//     const recentBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li').length;
//     const mainArea = $('.inner2 .list-main-contents');

//     const renderPreview = getblogList(data); 
//     $('.list-main-contents.recent-blog').css('display','block');
//     let postTotal;
//     // <---------------------------------------------------->

//     let lastItem = `<a id='loady' class="card-more recent-blog-btn loaded">글 더보기<i></i></a>`;
//     let mainItem = ''
//     if(renderPreview.length !== 0){
//       for(let i = 0; i < renderPreview.length; i++) {
//         mainItem += renderPreview[i];
//       }
//     }
//     if(renderPreview.length > 16) {
//       mainItem += lastItem;
//     }
//     mainArea.html(mainItem);
    
    
//     $("#loady").on('click', function (e) {
//       e.preventDefault();

//       let slideItem = $(".recent-blog .blog-hidden:hidden").slice(0, 16)
//       slideItem.slideDown();
//       slideItem.css('display','flex');
//       slideItem.removeClass('blog-hidden');
//       if ($(".recent-blog .blog-hidden:hidden").length == 16) {
//         $("#loady").fadeOut('slow');
//         $('.recent-blog-btn').css('display', 'flex');
//       }
//       $('html,body').animate({
//         scrollTop: $(this).offset().top - 10
//       }, 1000);
//     });

//     const getBody = (rem,show) => {
//       const press_content = $(rem).text();
//       const press = press_content.slice(0,100);
//       $(show).html(press);
//       $(rem).remove();
//     }
//     for(let i = 1; i <= recentBlogLength; i++) {
//       getBody(`.removeBody${i}`,`.showBody${i}`);
//     }
//   }
  
  

// //   ********************************datePicker*********************************************//
//   // option select 선택에 따른 url이동
//   $('.skh-select').change(e => {
//     const value = e.target.value
//     sessionStorage.setItem('OPTION', e.target.value)
//     const TODAY = moment().format('YYYY-MM-DD')

//     if(e.target.value === 'select') {
//       POST_PAGE = 0;
//       PRESS_PAGE = 0;
//       $('#date-from').val('');
//       $('#date-to').val('');

//       $(".calWrap").show();
//       $.datepicker.setDefaults({
//         dateFormat: 'yy-mm-dd',
//         prevText: '이전 달',
//         nextText: '다음 달',
//         monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         dayNames: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
//         showMonthAfterYear: true,
//         yearSuffix: '년',
//         firstDay: 0,
//         changeYear : true, 
//         changeMonth : true
//       })

//       $("#date-from").datepicker();
//       $("#date-from" ).datepicker("option", "dateFormat", "yy-mm-dd" );
//       $('#date-from').datepicker("option", "maxDate", TODAY);
//       $('#date-from').datepicker("option", "onClose", function ( selectedDate ) {
//         console.log(selectedDate)
//       });


//       $("#date-to").datepicker();
//       $('#date-to').datepicker("option", "minDate", $("#date-from").val());
//       $('#date-to').datepicker("option", "maxDate", TODAY);
//       $('#date-to').datepicker("option", "onClose", function ( selectedDate ) {
//         const start_date = $('#date-from').datepicker('getDate');
//         const start = moment(start_date).format('YYYY-MM-DD')

//         if(!start_date) {
//           alert('시작일을 선택해주세요..')
//           $('#date-to').val('')
//         } else if(start > selectedDate) {
//           alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
//           $('#date-to').val('')
//         } else {
//           console.log(selectedDate, start, '!!!')
//           const pArr = pressCenterArr;
//           const pNewArr = pArr.filter(el => moment(el.publishedDate).format('YYYY-MM-DD') >= start && moment(el.publishedDate).format('YYYY-MM-DD') <= selectedDate)
//           console.log(pNewArr,'PNEW')
//           $('ul.list-main-contents').html(getblogList(pNewArr,PRESS_PAGE, e.target.value))
//         }
//       });
//     } else {


//       const WEEK = moment().subtract(7, 'days').format('YYYY-MM-DD')
//       const MONTH = moment().subtract(1, 'months').format('YYYY-MM-DD')
//       const YEAR = moment().subtract(1, 'years').format('YYYY-MM-DD')

//       POST_PAGE = 0;
//       PRESS_PAGE = 0
//       FILTER_OPTION = e.target.value
//       const pressRenderList = [];
//       if(value === 'all') {
// 				pressRenderList.push(...pressCenterArr);
// 			}
//       if(value === 'week') {

//         const pressList = pressCenterArr.filter(el => moment(el.publishedDate).format('YYYY-MM-DD') >= WEEK).sort((a, b) => {return b.publishedDate - a.publishedDate})

//         weekPressCenterArr.push(...pressList);
//         pressRenderList.push(...pressList);
//       }
//       if(value === 'month') {
//         const pressList = pressCenterArr.filter(el => moment(el.publishedDate).format('YYYY-MM-DD') >= MONTH).sort((a, b) => {return b.publishedDate - a.publishedDate})
//         monthPressCenterArr.push(...pressList)
//         pressRenderList.push(...pressList)
//       }
//       if(value === 'year') {

//         const pressList = pressCenterArr.filter(el => moment(el.publishedDate).format('YYYY-MM-DD') >= YEAR).sort((a, b) => {return b.publishedDate - a.publishedDate})

//         yearPressCenterArr.push(...pressList);
//         pressRenderList.push(...pressList);
//       }
//       if(value === 'select') {
//       }

//       listRenderHandler(pressRenderList);
//       $(".calWrap").css('display', 'none');
//     }
//   })
  
  
//     const searchHandler = async(msg) => {
//       $('#loading-container').css('display','flex');
//       $('ul.list-main-contents.recent-blog').css('display','none');
//       $('.pressBlog-wrapper').css('margin-bottom','60px');
//       try{
//         $('#selectbox').css('display','flex'); 
//         const resAll = await fetch(`https://www.hynixapi.com/search/all?searchType=all&searchText=${encodeURIComponent(msg)}&dateType=${dateType}&startDate=${startDate}&endDate=${endDate}&category=보도자료`);
//         sessionStorage.setItem('OPTION', 'recent')
//         const data = await resAll.json();

// //         postArr.push(...data.pressArr);
// //         recentPostArr.push(...data.pressArr.sort((a,b) =>  new Date(b.publishedDate) - new Date(a.publishedDate)));
//         pressCenterArr.push(...data.pressArr);
// //         recentPressCenterArr.push(...data.pressArr.sort((a, b) => {return b.publishedDate - a.publishedDate}))
        
//         const total = data.pressTotalNumber;
//         listRenderHandler(pressCenterArr,total);
//         $('#loading-container').css('display','none');
        
//         const renderLength = $('.list-main-contents.recent-blog').children('li').length;
       
//         if(renderLength) {
//           $('.list-main-contents.recent-blog').css('display','block');  
//         }else {
       
//           $('.list-main-contents.recent-blog').css('display','none');  
//         }
        
        
       
        
//         if(searchText){
//            $('.input-searchWrap input').val(searchText);
//         }
//       }catch(e){
//         console.log('errorMsg:',e);
//       }
//     }
  
//   if(pathName !== '/presscenter') {
//     $('.pressBlog-wrapper').css('display','none');
//     $('.pressBlog-wrapper.addWrapper').css('display','block');
//   }
  
//   const getBodyes = (h,s) => {
//     const side_content = $(h).text();
//     const side_slide = side_content.slice(0,75);
//     $(s).html(side_slide);
//     $(h).remove();
//   }
  
  
//   const initPress = () => {
//     const queryNames = searchParamHandler('searchText');
//     const path = location.pathname;
//     if(queryNames) {
//       searchHandler(queryNames)
//     }else if(path.includes('page')){
//       console.log('none page')
//     }

//     $('.search-full .inner #pressSearch .input-search').click(() => {
//       const value = $('.input-searchWrap input').val();
//       location.href=`/presscenter?searchType=all&searchText=${value}&dateType=all&startDate=${startDate}&endDate=${endDate}&category=보도자료`
//     })

//     $('.input-searchWrap input').keypress(function(key){
//       if(key.keyCode==13) {
//         const value = $('.input-searchWrap input').val();
//         location.href=`/presscenter?searchType=all&searchText=${value}&dateType=all&startDate=${startDate}&endDate=${endDate}&category=보도자료`
//       }
//     });
//     let postList = $('.aside-thumbWrap ul').children('li.aside-thumb').length
    
//     for(let i = 1; i <= 3; i++) {
//       getBodyes(`.removeBodySide${i}`,`.showBodySide${i}`);
//     }
//   }
	
//   window.onload = initPress();
// }