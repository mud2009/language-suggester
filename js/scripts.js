// business logic



// user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    // $("#results").hide(); // see if you can simplify the hide/show  so i dont have to use so many ids
    const nameInput = $("#name").val();
    const emailInput = $("#email").val();
    const telInput = $("#tel").val();

    $("#nameInput").text(nameInput)
    $("#emailInput").text(emailInput)
    $("#telInput").text(telInput)
    
    $("#results").show();
  });
});

// maybe try the function Math.max(put parameters in here) to find the value with highest number of matches