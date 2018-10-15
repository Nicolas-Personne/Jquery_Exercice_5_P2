$(function(){
  $("#lastName").focus( function() {
      $("#lastName").css("border","3px solid green");
  });
  $("#lastName").blur( function() {
      $("#lastName").css("border","3px solid red");
  });
  $("#firstName").focus( function() {
      $("#firstName").css("border","3px solid green");
  });
  $("#lastName").blur( function() {
      $("#lastName, #firstName").css("border","3px solid red");
  });
});
