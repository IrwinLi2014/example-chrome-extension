// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('helloWorld');
//     checkPageButton.addEventListener('click', function() {
//         alert("Hello world");
//     });
// });

$(document).ready(function(){
	alert("ready!");
	$("#helloWorld").click(function() {
		alert("Hello world");
	})
})