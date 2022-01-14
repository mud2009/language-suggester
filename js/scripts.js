// business logic
//  let winningLanguage = Math.max(language1, language2, language3)

// if (winningLanguage === language1){
//   $("#1").show();
// } else if (winningLanguage === language2){
//   $("#2").show();
// } else if (winningLanguage === language3){
//   $("#3").show();
// } else if (winningLanguage === language1 && winningLanguage === language2){
//   $("#1").show();
// } else if (winningLanguage === language2 && winningLanguage === language3){
//   $("#2").show();
// } else if (winningLanguage === language1 && winningLanguage === language3){
//   $("#1").show();
// } else {
//   $("#error").show();
// }




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

    // parse form answers
    console.log(parseInt($("#from-where").val()));


    $("#language-form").hide();
    $("#results").show();
    $("#form")[0].reset();
    $("#form2").submit(function(even){
      $("#results").hide();
      $("#language-form").show();
    });
  });
});

// maybe try the function Math.max(put parameters in here) to find the value with highest number of matches
// maybe try jquery effect animations for show/hide
// make sure the answers from the select box are reset upon clicking the take quiz again button