const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let featureData = new Date(2024, 4, 31, 10, 30, 0);
const featureData = new Date(tempYear, tempMonth, tempDay + 5, 11, 30, 0); // always 5 days to left

const year = featureData.getFullYear();
const hours = featureData.getHours();
const minutes = featureData.getMinutes();
const date = featureData.getDate();
const month = months[featureData.getMonth()];
const weekday = weekdays[featureData.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = featureData.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  // 1 secs = 1000 ms
  // 1 mins = 60 secs
  // 1 hrs = 60 mins
  // 1 day = 24 hrs

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHours = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;
  // calculate all value
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHours);
  let minutes = Math.floor((t % oneHours) / oneMinutes);
  let seconds = Math.floor((t % oneMinutes) / 1000);

  // set value array:
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
