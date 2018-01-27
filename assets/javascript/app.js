function onStart() {  
//    $("#startButton").remove;
    var timeleft = 90;
    countdownTimer = setInterval(function(){
      timeleft--;
      document.getElementById("timerCount").textContent = timeleft;
      if(timeleft <= 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
}

function onSubmit() {
	var score = 0;
	var numOfQuestions = 5;
	var answersArray = ['c', 'd', 'c', 'a', 'b'];

	var q1 = document.forms['quiz']['q1'].value;
	var q2 = document.forms['quiz']['q2'].value;
	var q3 = document.forms['quiz']['q3'].value;
	var q4 = document.forms['quiz']['q4'].value;
	var q5 = document.forms['quiz']['q5'].value;

	for (var i = 1; i <= numOfQuestions; i++) {
		if (eval('q' + i) === '') {
			alert("You missed question number " + i);
		}
	}
	for (var i = 1; i <= numOfQuestions; i++) {
		if (eval('q' + i) === answersArray[i-1]) {
			score++;
		}
	}

var results = document.getElementById("results");
results.innerHTML = "<h2>You scored " + score + " points out of " + numOfQuestions +"</h2";
return false;
}

function hideQuestions()  {
    $("#results").hide();
    $("#timerBox").hide();
    $(".question").hide();
    $("#submitButton").hide();
    }

function showQuestions()  {
    $("#results").show();
    $("#timerBox").show();
    $(".question").show();
    $("#submitButton").show();
    }

/*

$('#startButton').on('click', function() {
    onStart();
    $("#startButton").remove;
}

$('#submitButton').on('click', function() {
    onSubmit();
//    document.getElementById("choiceBox3").innerHTML = choiceThree[0] + "  is clicked!";
}

*/
