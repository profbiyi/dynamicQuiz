var currentQuestion = -1;

$(document).ready(function() {
	document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
})

function nextQuestion() {
	if (currentQuestion<quiz["questions"].length-1) {
		currentQuestion+=1;
	}
	console.log(currentQuestion);
	document.getElementById("question").innerHTML = quiz["questions"][currentQuestion]["text"];
}

function test(){
	console.log(document.getElementById("firstname").value);
	var name = document.getElementById("firstname").value;


	document.getElementById("question").innerHTML = name;
}