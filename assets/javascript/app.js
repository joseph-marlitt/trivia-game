$(document).ready(function() {

//List of Variables for the game	
var questionTimer;
$("#quiz").hide();
	 
//Start button starts the timer and reveals the questions
	$("#start").on("click", function() {
		//show quiz
		$("#quiz").show();
		//variable representing quiz results.
		 $()
        //  Set the question to run thirty seconds after the function's called.
		questionTimer = setTimeout(function() {
	      console.log("Times Up!");
	      var quizResults = $('input[id=correct]:checked').length; 
	      $("#quiz").hide();
	      	
	      	console.log(quizResults);
      	$("#results").html("You scored " + quizResults + " answers correct!")
        }, 5000);
	})
})