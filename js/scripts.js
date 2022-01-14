// business logic



// user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#results").hide(); // see if you can simplify the hide/show  so i dont have to use so many ids
  });
});

// maybe try the function Math.max(put parameters in here) to find the value with highest number of matches