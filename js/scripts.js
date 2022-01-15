// business logic
let cSharp = 0;
let ruby = 0;
let javaScript = 0;

function count(value){
  if (value === 1){
    cSharp += 1;
  } else if (value === 2){
    ruby += 1;
  } else if (value === 3){
    javaScript += 1;
  } 
}

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
    $("#error").show();
  }
}

// user logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const nameInput = $("#name").val();
    const emailInput = $("#email").val();
    const telInput = $("#tel").val();

    $("#nameInput").text(nameInput)
    $("#emailInput").text(emailInput)
    $("#telInput").text(telInput)

    count(parseInt($("#from-where").val()));
    count(parseInt($("#name-change").val()));
    count(parseInt($("#when").val()));
    count(parseInt($("#church").val()));
    count(parseInt($("#education").val()));

    compare(cSharp, ruby, javaScript);

    $("#language-form").hide();
    $("#results").show();
    $("#form")[0].reset();
    cSharp = 0;
    ruby = 0;
    javaScript = 0;  
    $("#form2").submit(function(even){
      $("#results").slideUp();
      $("#language-form").slideDown();
    });
  });
});