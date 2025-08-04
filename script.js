let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let intervalId = null;
let lapCounter = 0;

let timeDisplay;
let startStopBtn;
let lapResetBtn;
let lapList;

function initializeStopwatch() {
  timeDisplay = document.getElementById("timeDisplay");
  startStopBtn = document.getElementById("startStopBtn");
  lapResetBtn = document.getElementById("lapResetBtn");
  lapList = document.getElementById("lapTimes");

  startStopBtn.addEventListener("click", toggleStopwatch);
  lapResetBtn.addEventListener("click", handleLapReset);

  updateDisplay();
}

function start() {
  startTime = Date.now() - elapsedTime;
  isRunning = true;
  intervalId = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);

  startStopBtn.textContent = "Stop";
  startStopBtn.className = "stop-btn";
}

function stop() {
  isRunning = false;
  clearInterval(intervalId);

  startStopBtn.textContent = "Start";
  startStopBtn.className = "start-btn";

  lapResetBtn.textContent = "Reset";
  lapResetBtn.className = "reset-btn";
}

function reset() {
  elapsedTime = 0;
  startTime = 0;
  lapCounter = 0;
  updateDisplay();

  lapList.innerHTML = "";

  startStopBtn.textContent = "Start";
  startStopBtn.className = "start-btn";
  lapResetBtn.textContent = "Lap";
  lapResetBtn.className = "lap-btn";
}

function lap() {
  if (isRunning) {
    lapCounter++;
    var lapTime = formatTime(elapsedTime);
    var lapElement = document.createElement("li");

    lapElement.innerHTML =
      '<span class="lap-number">Lap ' +
      lapCounter +
      "</span>" +
      '<span class="lap-time">' +
      lapTime +
      "</span>";

    lapList.insertBefore(lapElement, lapList.firstChild);

    lapElement.style.opacity = "0";
    lapElement.style.transform = "translateY(-20px)";
    setTimeout(function () {
      lapElement.style.transition = "all 0.3s ease";
      lapElement.style.opacity = "1";
      lapElement.style.transform = "translateY(0)";
    }, 10);
  }
}

function toggleStopwatch() {
  if (isRunning) {
    stop();
  } else {
    start();
  }
}

function handleLapReset() {
  if (isRunning) {
    lap();
  } else {
    reset();
  }
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
  var totalSeconds = Math.floor(milliseconds / 1000);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  var ms = Math.floor((milliseconds % 1000) / 10);

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    ms.toString().padStart(2, "0")
  );
}

document.addEventListener("DOMContentLoaded", initializeStopwatch);

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    });
  });
});
