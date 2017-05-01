$(document).ready(function() {
  $.get("sentence.html", function(response) {
    // This is called when the response is what you intended
    $("#sentences").html(response);
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });
})
