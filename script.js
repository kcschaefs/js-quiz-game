
var startBtn = document.querySelector("#begin");
var submitBtn = document.querySelector("#submit");


var correct = 0;
var wrong = 0;


// timer --------------------------------------------------------------

var time_in_minutes = 10;
// '0' to assign the first (and only `HTML` tag)



function twoDigits(x) {
  return (x <= 9 ? "0" + x : x);
}

function time_remaining(endtime) {
  var now = Date.now();
  var timeLeft = endtime - now;
  var seconds = Math.floor((timeLeft / 1000) % 60);
  var minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  return { 'total': timeLeft, 'minutes': minutes, 'seconds': seconds };
}

function update_clock(endtime) {
  var timeLeft = time_remaining(endtime);
  var clock = document.getElementById('timer');
  clock.innerHTML = 'Timer ' + twoDigits(timeLeft.minutes) + ':' + twoDigits(timeLeft.seconds);
  var timeinterval = setInterval(update_clock, 1000, endtime);
  if (timeLeft.total <= 0) {
    clearInterval(timeinterval);
  }
}

function startQuizClick(event) {
  var endTime = Date.now() + time_in_minutes * 60 * 1000;
  update_clock(endTime);
}

function progressQuizClick(event) {
  var d = document.getElementById("intro");
  d.className += "hidden";
  var x = document.getElementById("quiz");
  x.classList.remove("hidden");
}

startBtn.addEventListener("click", startQuizClick);
startBtn.addEventListener("click", progressQuizClick);

// questions --------------------------------------------------------------

var questionList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["&lt;javascript&gt;", "&lt;js&gt;", "&lt;script&gt;", "&lt;scripting&gt;"],
    correctAnswer: 2,
    order: 0
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["The &lt;head&gt; section", "The &lt;body&gt; section", "Both the &lt;head&gt; and the &lt;body&gt; sections"],
    correctAnswer: 1,
    order: 1
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: ["&lt;script src='xxx.js'&gt;", "&lt;script name='xxx.js'&gt;", "&lt;script href='xxx.js'&gt;"],
    correctAnswer: 0,
    order: 2
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: ["True", "False"],
    correctAnswer: 0,
    order: 3
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["msg('Hello World');", "msgBox('Hellow World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3,
    order: 3
  },
]

var currentQuestion = questionList[1];

function serveQuestion() {
  var question = document.getElementById('q');
  var answer1 = document.getElementById('a1');
  var answer2 = document.getElementById('a2');
  var answer3 = document.getElementById('a3');
  var answer4 = document.getElementById('a4');
  question.innerHTML = currentQuestion.question;
  answer1.innerHTML = currentQuestion.answers[0];
  answer2.innerHTML = currentQuestion.answers[1];
  answer3.innerHTML = currentQuestion.answers[2];
  answer4.innerHTML = currentQuestion.answers[3];
}

serveQuestion();

function submitQuestion() {
  var response = document.getElementById('response');
  var answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer == currentQuestion.correctAnswer) {
    response.innerHTML = "Correct!";
    response.removeAttribute("hidden")
    correct += 1;
  }
  else {
    response.innerHTML = "Wrong";
    response.removeAttribute("hidden")
    wrong += 1;
  }
  //console.log (document.querySelector('input[name="answer"]:checked').value);
}


submitBtn.addEventListener("click", submitQuestion);

// progressNextQuestion --------------------------------------------------------------

