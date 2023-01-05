// #1 Write a function that will take a unix timestamp value and display a date and time (Atlantic Timezone) in the following format:example: 1658433143The day is: Thursday.The Time is: 4:52pm

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

// #2 Write a function that takes the lengths of 3 sides of a triangle and returns the area. Round answer to 2 decimal places. If area is 0 then return "Impossible Triangle".

// Area = Square root of s(s - a)(s - b)(s - c)
// s is the semi perimeter, or (a + b + c)/2.```

//           example: side1 = 2, side2 = 3, side3 = 4
//           answer: 2.90
//           example: side1 = 1, side2 = 2, side3 = 3
//           answer: Impossible Triangle

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  if (area === 0) {
    return "IMPOSSIBLE TRIANGLE";
  }
  return area;
}

console.log(areaOfTriangle(1, 2, 3));
