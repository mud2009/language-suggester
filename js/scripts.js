// business logic



// user logic
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#results").hide();
  });
});

// maybe try the function Math.max(put parameters in here) to find the value with highest number of matches