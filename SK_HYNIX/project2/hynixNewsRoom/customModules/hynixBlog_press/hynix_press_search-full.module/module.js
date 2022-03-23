// const TODAY2 = new Date()
// const TODAY = moment().format('YYYY-MM-DD')

// const searchQuery = (key) => {
// 	return new URLSearchParams(location.search).get(key);
// };
// const searchText = searchQuery('searchText')
// const settingDate = () => {
// 		$('#date-from').datepicker();
// 		$("#date-from" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// 		$('#date-from').datepicker("option", "maxDate", TODAY);
// 		$('#date-to').datepicker();
// 		$("#date-to" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
// 		$('#date-to').datepicker("option", "minDate", $("#date-from").val());
// 		$('#date-to').datepicker("option", "maxDate", TODAY);
		
// 		$('#date-to').datepicker("option", "onClose", function ( selectedDate ) {
// 			if(endDate !== selectedDate) {
// 			  location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${startDate}&endDate=${selectedDate}`	
// 			}
// 		});
// }

// $('.input-search').click(() => {
//   const search = $('.input-searchWrap #search').val()
//   location.href = `/search-results?searchText=${search}`
// })

// $('.input-searchWrap #search').on('keyup', function(key) {
//   if(key.keyCode === 13) {
// 	  const search = $('.input-searchWrap #search').val()
//     location.href = `/search-results?searchText=${search}`
// 	}
// })