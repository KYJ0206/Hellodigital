// $('.searchBtn').click(() => {
//   let searchType = $("input:radio[name=tab]:checked").val();
// //   $("input:checkbox[id='#category01']").prop("checked", true);
// //   $("input:checkbox[id='#category02']").prop("checked", false);
// //   $("input:checkbox[id='#category03']").prop("checked", false);
      
// //   $("input:radio[name=radiovalue2]:checked").each(function(){
// //     searchType = $(this).val();
// //   });
//   const searchText =  $("#inputWrap").val();
//   const dateType = $(".skh-select").val();
//   const startDate = $("#date-from").val();
//   const endDate = $("#date-to").val();
//   location.href = `/library?searchText=${searchText}`
// })

// $("#inputWrap").on('keyup', (key) => {
// 	console.log(12312312)
// 	if(key.keyCode===13) {
// 		console.log('asdfasd')
// 		const searchText =  $("#inputWrap").val();
// 		const dateType = $(".skh-select").val();
// 		const startDate = $("#date-from").val();
// 		const endDate = $("#date-to").val();
// 		location.href = `/library?searchText=${searchText}`
// 	}
// })

// $('.media-library-top h3').click(() => {
// 	location.href = `/library`
// })



// ----- es2015

// $(".searchBtn").click(function () {
//   var searchType = $("input:radio[name=tab]:checked").val(); //   $("input:checkbox[id='#category01']").prop("checked", true);
//   //   $("input:checkbox[id='#category02']").prop("checked", false);
//   //   $("input:checkbox[id='#category03']").prop("checked", false);
//   //   $("input:radio[name=radiovalue2]:checked").each(function(){
//   //     searchType = $(this).val();
//   //   });

//   var searchText = $("#inputWrap").val();
//   var dateType = $(".skh-select").val();
//   var startDate = $("#date-from").val();
//   var endDate = $("#date-to").val();
//   location.href = "/library?searchText=".concat(searchText);
// });
// $("#inputWrap").on("keyup", function (key) {
//   console.log(12312312);

//   if (key.keyCode === 13) {
//     console.log("asdfasd");
//     var searchText = $("#inputWrap").val();
//     var dateType = $(".skh-select").val();
//     var startDate = $("#date-from").val();
//     var endDate = $("#date-to").val();
//     location.href = "/library?searchText=".concat(searchText);
//   }
// });
// $(".media-library-top h3").click(function () {
//   location.href = "/library";
// });
