
// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#ping-form").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("input#number").val());
     var result = pingPong(numInput);
     console.log(result);
    // alert(numInput);
  })
})




// BUSINESS LOGIC
var pingPong = function(num){
   for (var i =0; i <=num; i++){
     if (num %15 === 0){
       return "pingpong"
     } else if (num %3 === 0){
       return "ping"
     } else if (num %5 === 0){
       return "pong"
     } else {
       return num
     }
   }
}
