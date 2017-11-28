$(document).ready(function() {
	

var quizResults;
var questionTimer;
$("#quiz").hide();
	 
//Start button starts the timer and reveals the questions
	$("#start").on("click", function() {
		//variable representing quiz results.
		quizResults = function (){
				$( "input[type=radio][name=answer][value=right]:checked" ).val();
			}

		$("#quiz").show();
        //  Set the question to run thirty seconds after the function's called.
    questionTimer = setTimeout(function() {
          console.log("Times Up!");
          console.log(quizResults);
          $("#results").html("You scored "	+ quizResults + "answers correct!")
          $("#quiz").hide();
        }, 5000);
      });
// 
	if (questionTimer == 0){
		

	}
// 
});