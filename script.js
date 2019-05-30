var pQuestion = document.getElementById("question-text");
var pAnswer = document.getElementById("answer-result");
//pAnswer.style.margin = "50px";
var myQuestions = initData();

var gameStart = function () {
	showQuestions();
};

function showQuestions () {
	let questionsHTML = "";
	for ( let i=0 ; i < myQuestions.length; i++ ) {
		let question = myQuestions[i];
		questionsHTML += `<p>${question.text}</p>`;

		for ( let c = 0; c < question.choices.length; c++ ) {
			let choice = question.choices[c];
			questionsHTML += `<input type="radio" name="choice${i}" value="${choice}" onclick="handleRadioButtonClick(event)">${choice}<br>`
		}
	}
	pQuestion.innerHTML = questionsHTML;
};

function handleRadioButtonClick(event) {
	let radioButton = event.currentTarget;
	let question = findUserSelectedQuestion(radioButton);

	let correctValue = findCorrectAnswer(question);
	let userValue = radioButton.value;

	showResult(userValue, correctValue);
}

function findUserSelectedQuestion(radioButton) {
	let questionIndex = radioButton.name.slice(-1);
	return myQuestions[questionIndex]
}

function findCorrectAnswer(question) {
	return question.choices[question.correctAnswer];
}

function showResult(userValue, correctValue) {
	if(userValue === correctValue) {
		showAnswerIsCorrect();
	}
	else {
		showAnswerIsWrong();
	}
}

function showAnswerIsCorrect() {
	pAnswer.innerHTML = `<p id="Correct">Correct</p>`;
}

function showAnswerIsWrong() {
	pAnswer.innerHTML = `<p id="Wrong">Wrong</p>`;
}


//radiobutton.value === myQuestions[selectedQuestion].choices[myQuestions[selectedQuestion].correctAnswer]
//nadji - selectedQuestion i radiobutton

/*
"	<p>myQuestions[i].question</p>
	<input type="radio " name="choice" value=myQuestions[i].choices[j]
	<input type="radio " name="choice" value=myQuestions[i].choices[j]
	<input type="radio " name="choice" value=myQuestions[i].choices[j]
	<input type="radio " name="choice" value=myQuestions[i].choices[j]




	<div id="choices">
		<input type="radio " name="choice" value=myQuestions[i].choices[j]
		<input type="radio " name="choice" value=myQuestions[i].choices[j]
		<input type="radio " name="choice" value=myQuestions[i].choices[j]
		<input type="radio " name="choice" value=myQuestions[i].choices[j]
	</div>
	</br>
"
*/

/*
for ( let i=0; i < myQuestions.length; i++ ) {
	let indx = myQuestions[i].correctAnswer;
	let questionAnswer = myQuestions[i].choices[indx];
};
*/



document.getElementById("start-button").addEventListener("click", gameStart);





function initData() {
	return [
		{
			text: "What is cheese?", 
			choices: [
				"a: A shoe", 
				"b: A bird", 
				"c: Tables", 
				"d: Dairy Product"
			],
			correctAnswer: 3
		},
		{
			text: "What is coffee?", 
			choices: [
				"a: Johnathan", 
				"b: A computer", 
				"c: A hot beverage", 
				"d: Paint"
			],
			correctAnswer: 2
		},
		{
			text: "What color is red?", 
			choices: [
				"a: Red", 
				"b: Green", 
				"c: Purple"
			],
			correctAnswer: 0
		},
		{
			text: "When was the moon landing?", 
			choices: [
				"a: Today", 
				"b: 1385", 
				"c: Two years from now", 
				"d: 1847", 
				"e: 1969"
			],
			correctAnswer: 4
		}
	];
}

