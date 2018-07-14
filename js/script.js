
/** --- USER INTERFACE LOGIC --**/

$(document).ready(function() {
  $("form#pingpong-form").submit(function(event) {
    event.preventDefault();
    $("ul.ping-items").empty();
    var number = parseInt($("input#number").val());
    for (var i = 1; i <= number; i += 1) {
      $("ul.ping-items").append("<li>" + pingPonged(i) + "</li>");
    }
  });
});



/** --- BACKEND LOGIC --**/

var pingPonged = function(i) {

  if (i % 15 === 0) {
    return "pingpong";
  } else if (i % 3 === 0) {
    return "ping";
  } else if (i % 5 === 0) {
    return "pong";
  } else {
    return i;
  }
};
