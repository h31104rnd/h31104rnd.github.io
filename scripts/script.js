var image = document.getElementById("start");
var text = document.getElementById("text");
var buttons = document.getElementById("first");
var number = 0;

$(document).ready(function() {
  $('#first').click(function() {
    $("p").html("You have ended up in the right hallway.");
    $("#first").attr("value", "Go to the showers.");
    number = number + 1;
  });
});
