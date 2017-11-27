$(document).ready(function() {
	 var questionTimer;
//Start button starts the timer and reveals the questions
	$("#start").on("click", function() {
        //  Set the button alert's timeout to run three seconds after the function's called.
        questionTimer = setTimeout(function() {
          console.log("Times Up!");
        }, 30000);


      });
// 
}