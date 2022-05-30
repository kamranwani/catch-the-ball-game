var ball = document.getElementById("catch-ball");
var start = document.getElementById("start");
let time_display = document.getElementById("timer");
let live_timer = document.getElementById("live_timer");

let myInterval;
let start_game = false;
let end_game = false;
let timer;
let time = 0;

start.addEventListener("click", () => {
  startGame();
});

ball.addEventListener("click", () => {
  stopGame();
});

startGame = () => {
  start_game = true;
  start.disabled = true;
  time_display.style.display = "none";
  timer = setInterval(() => {
    time = time + 1;
    live_timer.innerHTML = time + " secs";
  }, 1000);

  myInterval = setInterval(() => {
    ball.style.left = Math.floor(Math.random() * 100) + "%";
    ball.style.top = Math.floor(Math.random() * 100) + "%";
  }, 1000);
};

stopGame = () => {
  end_game = true;
  start.disabled = false;
  live_timer.innerText = "";
  clearInterval(myInterval);
  clearInterval(timer);
  time_display.style.display = "flex";
  time_display.innerText =
    "Total time taken was: " +
    Math.floor(time / 60) +
    " min " +
    Math.floor(time % 60) +
    " secs";
  time = 0;
};
