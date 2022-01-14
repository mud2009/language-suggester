// business logic
let cSharp = 0;
let ruby = 0;
let javaScript = 0;

function resetVariables(){ 
  let cSharp = 0;
  let ruby = 0;
  let javaScript = 0;
}

function count(value){
  if (value === 1){
    cSharp += 1;
  } else if (value === 2){
    ruby += 1;
  } else if (value === 3){
    javaScript += 1;
  } 
}

// let winningLanguage = Math.max(cSharp, ruby, javaScript)

function compare(langOne,langTwo, langThree) {
  $("#c-sharp").hide();
  $("#ruby").hide();
  $("#javascript").hide();
  $("#error").hide();
  if (langOne > langTwo && langOne > langTwo) {
    $("#c-sharp").show();
  } else if (langTwo > langOne && langTwo > langThree){
    $("#ruby").show();
  } else if (langThree > langOne && langThree > langTwo){
    $("#javascript").show();
  } else {
    $("#javascript").show();
  }
}

// user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    resetVariables();
    $("#results").hide(); // see if you can simplify the hide/show  so i dont have to use so many ids
    const nameInput = $("#name").val();
    const emailInput = $("#email").val();
    const telInput = $("#tel").val();

    $("#nameInput").text(nameInput)
    $("#emailInput").text(emailInput)
    $("#telInput").text(telInput)

    // parse form answers

    count(parseInt($("#from-where").val()));
    count(parseInt($("#name-change").val()));
    count(parseInt($("#when").val()));
    count(parseInt($("#church").val()));
    count(parseInt($("#education").val()));

    compare();

    $("#language-form").hide();
    $("#results").show();
    $("#form")[0].reset();
    // resetVariables();
    $("#form2").submit(function(even){
      $("#results").hide();
      $("#language-form").show();
    });
  });
});

// maybe try the function Math.max(put parameters in here) to find the value with highest number of matches
// maybe try jquery effect animations for show/hide
// make sure the answers from the select box are reset upon clicking the take quiz again button