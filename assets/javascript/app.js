$(document).ready(function() {
	
	$("#quiz").hide();
	 var questionTimer;
//Start button starts the timer and reveals the questions
	$("#start").on("click", function() {

		$("#quiz").show();
        //  Set the question to run thirty seconds after the function's called.
        questionTimer = setTimeout(function() {
          console.log("Times Up!");
        }, 30000);


      });
// 
});