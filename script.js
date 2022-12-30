
var generateBtn = document.querySelector("#begin");
var generateBtn = document.querySelector("#submit");


var correct = 0;
var wrong = 0;

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
}

generateBtn.addEventListener("click", startQuizClick);


// questions --------------------------------------------------------------


var questionsList = {
  q1: "Inside which HTML element do we put the JavaScript?",
  a1: "&lt;javascript&gt;",
  a2: "&lt;js&gt;",
  a3: "&lt;script&gt;",
  a4: "&lt;scripting&gt;",
}

function serveQuestion() {
  var question = document.getElementById('q');
  var answer1 = document.getElementById('a1');
  var answer2 = document.getElementById('a2');
  var answer3 = document.getElementById('a3');
  var answer4 = document.getElementById('a4');
  question.innerHTML = questionsList.q1;
  answer1.innerHTML = questionsList.a1;
  answer2.innerHTML = questionsList.a2;
  answer3.innerHTML = questionsList.a3;
  answer4.innerHTML = questionsList.a4;
}

serveQuestion();

function submitQuestion() {
  var response = document.getElementById('response');
  var answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer === "a3") {
    response.innerHTML = "Correct!";
    correct += 1;
  }
  else {
    response.innerHTML = "Wrong";
    wrong += 1;
  }
  //console.log (document.querySelector('input[name="answer"]:checked').value);
}


generateBtn.addEventListener("click", submitQuestion);

// answers --------------------------------------------------------------


function serveAnswer() {

}