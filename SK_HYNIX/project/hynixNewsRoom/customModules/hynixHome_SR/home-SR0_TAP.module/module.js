// const searchQuery = (key) => {
// 	return new URLSearchParams(location.search).get(key);
// };

// console.log('qweqwe')
// const searchType = searchQuery('searchType')
// const searchText = searchQuery('searchText')
// const dateType = searchQuery('dateType')
// const startDate = searchQuery('startDate')
// const endDate = searchQuery('endDate')
// const category = searchQuery('category')

// $('.input-searchWrap #search').on('keypress',(key) => {
// 	if(key.keyCode === 13) {
// 		const text = $('.input-searchWrap #search').val();
// 		location.href = `/search-results?searchType=${searchType}&searchText=${text}&dateType=${searchType}&startDate=${startDate}&endDate=${endDate}&category=${category}`
// 	}
// })

// $('.input-searchWrap .input-search').click(() => {
// 	const text = $('.input-searchWrap #search').val();
// 	location.href = `/search-results?searchType=${searchType}&searchText=${text}&dateType=${searchType}&startDate=${startDate}&endDate=${endDate}&category=${category}`
// })

// const settingDate = () => {
// 	const TODAY = moment().format('YYYY-MM-DD')
//   const WEEK = moment().subtract(7, 'days').format('YYYY-MM-DD')
// 	$('#date-from').val('')
// 	$('#date-to').val('')

// 	if(startDate && endDate) {
// 		// =================================== PC =================================== //
// 		$("#date-from").datepicker();
// 		$("#date-from" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// 		$('#date-from').datepicker("option", "maxDate", $("#date-to").val());
// 		$("#date-from").datepicker('setDate', startDate);

// 		$("#date-to").datepicker();
// 		$("#date-to" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
// 		$('#date-to').datepicker("option", "minDate", $("#date-from").val());
// 		$('#date-to').datepicker("option", "maxDate", TODAY);
// 		$("#date-to").datepicker('setDate', endDate);
// 		$('#date-to').datepicker("option", "onClose", function ( selectedDate ) {
// 			const start_date = $('#date-from').datepicker('getDate');
// 			const start = moment(start_date).format('YYYY-MM-DD')

// 			if(!start_date) {
// 				alert('시작일을 선택해주세요..')
// 				$('#date-to').val('')
// 			} else if(start > selectedDate) {
// 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// 				$('#date-to').val('')
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// 			}
// 		});
// 		// =================================== PC =================================== //

// 		// =================================== MOBILE =================================== // 
// 		$("#date-from2").datepicker();
// 		$("#date-from2" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// 		$('#date-from2').datepicker("option", "maxDate", $("#date-to2").val());
// 		$("#date-from2").datepicker('setDate', startDate);
// 		$('#date-from2').datepicker("option", "onClose", function ( selectedDate ) {
// 			const end = $('#date-to2').val()
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${selectedDate}&endDate=${end}&category=${category}`
// 		});

// 		$("#date-to2").datepicker();
// 		$("#date-to2" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
// 		$('#date-to2').datepicker("option", "minDate", $("#date-from2").val());
// 		$('#date-to2').datepicker("option", "maxDate", TODAY);
// 		$("#date-to2").datepicker('setDate', endDate);
// 		$('#date-to2').datepicker("option", "onClose", function ( selectedDate ) {
// 			const start_date = $('#date-from2').datepicker('getDate');
// 			const start = moment(start_date).format('YYYY-MM-DD')

// 			if(!start_date) {
// 				alert('시작일을 선택해주세요..')
// 				$('#date-to2').val('')
// 			} else if(start > selectedDate) {
// 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// 				$('#date-to2').val('')
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// 			}
// 		});
// 		// =================================== MOBILE =================================== //
// 	} else {
// 		console.log('asdfasdfasdfasdfasdfasdfasdf')
// 		// =================================== PC =================================== //
// 		$("#date-from").datepicker();
// 		$("#date-from" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// 		$('#date-from').datepicker("option", "maxDate", TODAY);
// 		$('#date-from').datepicker("option", "onClose", function ( selectedDate ) {
// 			console.log('!@#!@#!@#!@#!@#!@#!@#!@#!@#')
// 			const end = $('#date-to').val()
// 			console.log(selectedDate,'selectedDate')
// 			console.log(end, 'END END')
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${selectedDate}&endDate=${end}&category=${category}`
// 		});

// 		$("#date-to").datepicker();
// 		$("#date-to" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
// 		$('#date-to').datepicker("option", "minDate", $("#date-from").val());
// 		$('#date-to').datepicker("option", "maxDate", TODAY);
// 		$('#date-to').datepicker("option", "onClose", function ( selectedDate ) {
// 			const start_date = $('#date-from').datepicker('getDate');
// 			const start = moment(start_date).format('YYYY-MM-DD')

// 			if(!start_date) {
// 				alert('시작일을 선택해주세요..')
// 				$('#date-to').val('')
// 			} else if(start > selectedDate) {
// 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// 				$('#date-to').val('')
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// 			}
// 		});
// 		// =================================== PC =================================== //

// 		// =================================== MOBILE =================================== // 
// 		$("#date-from2").datepicker();
// 		$("#date-from2" ).datepicker("option", "dateFormat", "yy-mm-dd" );
// 		$('#date-from2').datepicker("option", "maxDate", TODAY);
// 		$('#date-from2').datepicker("option", "onClose", function ( selectedDate ) {
// 			const end = $('#date-to2').val()
// 			location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${selectedDate}&endDate=${end}&category=${category}`
// 		});

// 		$("#date-to2").datepicker();
// 		$("#date-to2" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
// 		$('#date-to2').datepicker("option", "minDate", $("#date-from2").val());
// 		$('#date-to2').datepicker("option", "maxDate", TODAY);
// 		$('#date-to2').datepicker("option", "onClose", function ( selectedDate ) {
// 			const start_date = $('#date-from2').datepicker('getDate');
// 			const start = moment(start_date).format('YYYY-MM-DD')

// 			if(!start_date) {
// 				alert('시작일을 선택해주세요..')
// 				$('#date-to2').val('')
// 			} else if(start > selectedDate) {
// 				alert('시작일보다 이전날짜는 선택 할 수 없습니다.')
// 				$('#date-to2').val('')
// 			} else {
// 				location.href = `/search-results?searchType=${searchType}&searchText=${searchText}&dateType=select&startDate=${start}&endDate=${selectedDate}&category=${category}`
// 			}
// 		});
// 		// =================================== MOBILE =================================== //
// 	}
	
	
// }
// settingDate()
// $.datepicker.setDefaults({
// 	dateFormat: 'yy-mm-dd',
// 	prevText: '이전 달',
// 	nextText: '다음 달',
// 	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
// 	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
// 	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
// 	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
// 	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
// 	showMonthAfterYear: true,
// 	yearSuffix: '년',
// 	firstDay: 0,
// 	changeYear : true, 
// 	changeMonth : true,
// })