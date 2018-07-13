
/** --- BACKEND LOGIC --**/

var pingPong = function (i) {

	if (i % 15 ===0) {
		return "pingpong"
		}
	else if(i% 3===0){
		return "ping"
		}
	else if(i%5===0){
		return "pong"
		}
	else{
		return i
		}
}

/** --- USER INTERFACE LOGIC --**/
$(document).ready(function(){
	$("form#ping-form").submit(function(event){
		event.preventDefault();
    // alert("submitted")
		$("ul.ping-list").empty();
		var number=parseInt($("input#number").val());
    // alert(number)
		for(var i=1; i<=number; i++){
			$("ul.ping-list").append("<li>"+pingPong(i)+"</li>");
		}
	});
});
