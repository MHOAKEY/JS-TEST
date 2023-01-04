let unixStorage = 0;
let dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let unixInput = document.getElementById("unixTimeStamp");
let theDayIs = document.getElementById("day");
let hourMinSec = document.getElementById("hourMinSec");

function calculateTime() {
  unixStorage = unixInput.value;
  let date = new Date(unixStorage * 1000);
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let day = date.getDay();
  let formattedTime = hrs + ":" + mins + ":" + secs;
  hourMinSec.innerHTML = "THE TIME IS: " + formattedTime;

  theDayIs.innerHTML = "THE DAY IS: " + dayOfWeek[day];
}
