
var startBtn = document.querySelector("#begin");
var submitBtn = document.querySelector("#submit");
var scoreBtn = document.querySelector('#finalScore')
var retakeBtn = document.querySelector('#retake')
var radioButtons = document.querySelectorAll('input [name="answer"]');

var correct = 0;
var wrong = 0;
var count = 0;




// timer --------------------------------------------------------------

var time_in_minutes = 10;

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
  progressQuizClick ();
  serveQuestion();
}

function progressQuizClick(event) {
  var d = document.getElementById("intro");
  d.setAttribute ("hidden","");
  var quiz = document.getElementById("quiz");
  quiz.removeAttribute("hidden")
}


startBtn.addEventListener("click", startQuizClick);

// questions --------------------------------------------------------------

var questionList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["&lt;javascript&gt;", "&lt;js&gt;", "&lt;script&gt;", "&lt;scripting&gt;"],
    correctAnswer: 2,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["The &lt;head&gt; section", "The &lt;body&gt; section", "Both the &lt;head&gt; and the &lt;body&gt; sections"],
    correctAnswer: 1,
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: ["&lt;script src='xxx.js'&gt;", "&lt;script name='xxx.js'&gt;", "&lt;script href='xxx.js'&gt;"],
    correctAnswer: 0,
  },
  {
    question: "The external JavaScript file must contain the &lt;script&gt; tag.",
    answers: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["msg('Hello World');", "msgBox('Hellow World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3,
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function.myFunction()"],
    correctAnswer: 1,
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "call function myFunction()", "myFunction()", "call.function.myFunction()"],
    correctAnswer: 2,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if i = 5", "if i == 5 then", "if (i==5)", "if i = 5 then"],
    correctAnswer: 2,
  },
  {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if (i != 5)", "if i =! 5 then", "if i &lt;&gt; 5", "if (i &lt;&gt; 5)"],
    correctAnswer: 0,
  },
  {
    question: "How does a FOR loop start?",
    answers: ["for (i=0; i <= 5)", "for (i &lt;= 5; i++", "for i = 1 to 5", "for (i = 0; i&lt;= 5; i++)"],
    correctAnswer: 3,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: ["//This is a comment", "&lt;!--This is a comment--&gt;", "'This is a comment"],
    correctAnswer: 0,
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "'var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"],
    correctAnswer: 0,
  },
]


var currentQuestion;

function serveQuestion() {
  currentQuestion = questionList[count];
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



//let div = document.createElement("div")
//let p = document.createElement("p")
//div.append("Some text", p)

// askQuestion()

//     // display the iterative choices
//             function showChoices() {
//                 var displayChoices = allQuestions[currentQuestion].choices;
//                 for (var i = 0; i < displayChoices.length; i++) {
//                     var label = document.createElement('label');
//                     var input = document.createElement('input');

//                     var br = document.createElement('br');

//                     input.setAttribute("id", "Radios");
//                     input.setAttribute('type', 'radio');
//                     input.setAttribute('name', 'answer');
//                     input.setAttribute('value', i);

//                     label.appendChild(input);
//                     label.appendChild(document.createTextNode(displayChoices[i]));

//                     container.append(label);

//                     container.append(br);
//                 }
//             }

//serveQuestion();

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
}

submitBtn.addEventListener("click", submitQuestion);

// progressNextQuestion --------------------------------------------------------------

function progressNextQuestion(event) {
  count++;
  serveQuestion();
  response.setAttribute("hidden", "")
}

submitBtn.addEventListener("click", progressNextQuestion);


// leaderboard --------------------------------------------------------------

function finalScore() {
  var s = document.getElementById("yourScore");
  var total = correct+wrong;
  s.innerHTML = "Final Score: " + correct + " / " + total;
}


function retakeQuizClick(event) {
  var leaderboard = document.getElementById("leaderboard");
  leaderboard.setAttribute("hidden","")
  startQuizClick();
}

scoreBtn.addEventListener("click", finalScore);


retakeBtn.addEventListener("click",retakeQuizClick);