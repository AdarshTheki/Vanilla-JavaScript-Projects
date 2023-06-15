const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  // console.log(days, hours, minutes, seconds);

  daysEle.innerHTML = days;
  hoursEle.innerHTML = formatTime(hours);
  minutesEle.innerHTML = formatTime(minutes);
  secondsEle.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial  call
countdown();

setInterval(countdown, 1000);
