// $(document).ready(function(){
  
//   const recentBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li').length;
//   const popularBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-popularity .inner2 .list-main-contents').children('li').length;
//   const pathName = window.location.pathname;
//   const OFFSET = 0;
//   let TOTAL_ARR = [];
//   let message = ''
  
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
//         console.log($(".recent-blog .blog-hidden:hidden").length,'더보기 클릭시 length');
//         if ($(".recent-blog .blog-hidden:hidden").length == 10) {
//           $("#loady").fadeOut('slow');
//           $('.recent-blog-btn').css('display', 'flex');
//           console.log($(".recent-blog .blog-hidden:hidden").length,'더보기 클릭시123 length');
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

//     const getblogList = (arr) => {
//       console.log(arr,'ARRRRRR');
//       const noImage = '{{get_asset_url("/hynixNewsRoom/codeFiles/images/contentImage/groupO2x.png")}}'
//       if(arr === null || arr === undefined || arr.length === 0) {
//         $('.loading-container').css('display','none');
//         $('.search-full .inner .clear-fix').css('display','block');
//         $('.list-main-contents.recent-blog').css('display','none');
//         return $('.noSearchContainer').css('display','flex');
//       } else {
//         $('.noSearchContainer').css('display','none');
//         const renderList = arr.map((el, index) => {
//           const {description,publishedDate,featuredImageUrl,tags,title,url,authorFullName} = el 
//           let renderTag = ''
//           const tag = tags ? tags.forEach(item => item ? renderTag += `<li>${item}</li>` : renderTag += '') : ''
//           return `
//                   <li class="conWrap">
//                     <div class="col-8">
//                       <a href='${url}'>
//                         <h1>${title}</h1>
//                        <div class='removeBody${index}'><p>${description}</p></div>
//                         <p class="showBody${index}"></p>
//                       </a>
//                     <hr>
//                   <div class="post-meta">
//                   <span class="date">${publishedDate}</span>
//                   <span class="author"><a href="#">#${authorFullName}</a></span>
//                   </div>
//                   </div>
//                   <div class="col-4">
//                   <div class="imgWrap">

//                   <a href="#"><img src=${featuredImageUrl ? featuredImageUrl : noImage} alt="이미지"></a>
//                   </div>
//                   </div>
//                   </li>
//                   `
//         })
//         return renderList;
//       }
//     }
    

    
     
  
    

//     const listRenderHandler = (data,itemLength,nextOffset,isNextOffset) => {
//       console.log(data,'......................................검색데이터');
//       console.log('---------------검색시 실행되는 로직-----------------',itemLength)
//       $('.search-full .inner .clear-fix').css('display','none');
//       const recentBlogLength = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li').length;
//       const mainArea = $('.inner2 .list-main-contents');
//       TOTAL_ARR.push(...getblogList(data)); 
//       console.log(TOTAL_ARR,'TOTAL_ARRTOTAL_ARRTOTAL_ARR');
//       console.log(TOTAL_ARR.length,'123123123');
//       console.log(itemLength,'itemLengthitemLength')
//       if(isNextOffset) {
//         let mainItem = ''
//         let lastItem = `<a id='loady' class="card-more recent-blog-btn loaded">글 더보기<i></i></a>`;
        
       
        
//         for(let i = 0; i < TOTAL_ARR.length; i++) {
//           mainItem += TOTAL_ARR[i];
//         }
//         let renderItem;
//         if(itemLength > TOTAL_ARR.length) {
//           renderItem = mainItem += lastItem;
          
          
//         }else {
//           renderItem = mainItem; 
//         }
//         mainArea.html(renderItem,isNextOffset);
//         $('#loady.loaded').click(() => {apiButton(nextOffset)})
//       }else{
//         let mainItem = ''
//         if(TOTAL_ARR.length !== 0){
//           for(let i = 0; i < TOTAL_ARR.length; i++) {
//             mainItem += TOTAL_ARR[i];
//           }
//         }
//         mainArea.html(mainItem);
//       }

// //       for(let i = 16; i < recentBlogLength; i++) {
// //         const li = $('.press-contents-full .conWrap-body.conWrap-body-recent .inner2 .list-main-contents').children('li')[i];
// //         $(li).addClass('blog-hidden');
// //       }
// //       const getBody = (rem,show) => {
// //         const press_content = $(rem).text();
// //         const press = press_content.slice(0,100);
// //         $(show).html(press);
// //         $(rem).remove();
// //       }
// //       for(let i = 1; i <= recentBlogLength; i++) {
// //         getBody(`.removeBody${i}`,`.showBody${i}`);
// //       }
//     }
    
    
//     const apiButton = async(nextOffset) => {
//       console.log('---------------클릭시 실행되는 로직-----------------');
      
//       const value = $('.input-searchWrap input').val()
//       console.log(value,'innerValue')
//       console.log(nextOffset,"123123123123123123123123123444444444");
//       let offsetNum = nextOffset
//       console.log(offsetNum,"offsetNumoffsetNumoffsetNumoffsetNum")
//       try{
//         const res = await fetch(`https://www.hynixapi.com/search/blog?groupId=54775817801&searchType=all&searchText=${encodeURIComponent(value)}&offset=${offsetNum}`);

//         const data = await res.json()
//         console.log(data,'재실행로직');
//         const total = data.total;
//         const nextOffset = data.nextOffset;
//         const isNextOffset = data.isNextOffset;
//         listRenderHandler(data.data,total,nextOffset,isNextOffset);
//       }catch(e){
//         console.log('errorMsg:',e);
//       }
//     }

      
      
      
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
    



//     const searchHandler = async(msg) => {
//       $('#loading-container').css('display','flex');
//       $('.list-main-contents.recent-blog').css('display','none');
//       try{
//         const res = await fetch(`https://www.hynixapi.com/search/blog?groupId=54775817801&searchType=all&searchText=${encodeURIComponent(msg)}&offset=${OFFSET}`);
//         const data = await res.json()
//         const total = data.total;
//         const nextOffset = data.nextOffset;
//         const isNextOffset = data.isNextOffset;
//         listRenderHandler(data.data,total,nextOffset,isNextOffset);
//         $('#loading-container').css('display','none');
//         $('.list-main-contents.recent-blog').css('display','block');
        
//       }catch(e){
//         console.log('errorMsg:',e);
//       }
//     }


//     $('.search-full .inner #pressSearch .input-search').click(() => {
//       TOTAL_ARR = [];
//       console.log('돋보기 아이콘 클릭');
//       const value = $('.input-searchWrap input').val()
//       console.log(value,'VALUEVALUEVALUEVALUEVALUEVALUEVALUEVALUE')
//       message = value;
//       if(value){
//         searchHandler(value);
//       }else {
//         $('.search-full .inner .clear-fix').css('display','block');
//       }
//     })

//     $('.input-searchWrap input').keypress(function(key){
//       TOTAL_ARR = [];
//       console.log('duddle')
//       const value = $('.input-searchWrap input').val()
//       if(value){
//         if(key.keyCode==13) {
//           searchHandler(value);
//         }
//       }else {
//         $('.search-full .inner .clear-fix').css('display','block');
//       }
//     });
//   }
//   if(pathName !== '/presscenter') {
//     $('.pressBlog-wrapper').css('display','none');
//     $('.pressBlog-wrapper.addWrapper').css('display','block');
//   }
// });
