
setTimeout("timeUp()" , 1000 * 30);

function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  alert("time is up");


//  The following line will play the audio file we linked to above:
 // audio.play();
}

function check() {


	console.log("answers")
	var n_questions = 5
    var score = 0;
    for (var i = 1; i < n_questions; i++) {
        var answers = document.getElementsByName('question' + i);
        for (var n = 0; n < answers.length; n++) {
            if (answers[n].checked) {
                score += +answers[n].value;
                break;
            }
        }
    }
    alert("Your number correct" + " " + score);
}
