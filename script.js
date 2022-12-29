
var generateBtn = document.querySelector("#begin");

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


// timer --------------------------------------------------------------


