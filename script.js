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

// console.log(areaOfTriangle(1, 2, 3));
//

// #3 Write a function that finds the next year when a date entered will be a sunday. Function will take day and month and return year.
// HINT start with next year and don't bother checking past 2050.
// example: jan 1
// answer: 2023

// function unixInSundayOut(unixTimeCode) {
//   let dayOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let date = new Date(unixTimeCode * 1000);
//   let year = date.getFullYear();
//   let day = date.getDay();
//   if (dayOfWeek[day] === "Sunday") {
//     return year;
//   } else false;
// }

// console.log(unixInSundayOut(1736654400));

function takeDateReturnSundayYear(monthAndNumOfDay) {
  let myArray = monthAndNumOfDay.split(" ");
  let year = 2024;
  let month = 0;
  let day = 0;

  myArray.forEach((str) => {
    if (/\d/.test(str) === true) {
      day = str;
    }
  });
  if (monthAndNumOfDay.includes("jan")) {
    month = 01;
  } else if (monthAndNumOfDay.includes("feb")) {
    month = 02;
  } else if (monthAndNumOfDay.includes("mar")) {
    month = 03;
  } else if (monthAndNumOfDay.includes("apr")) {
    month = 04;
  } else if (monthAndNumOfDay.includes("may")) {
    month = 05;
  } else if (monthAndNumOfDay.includes("jun")) {
    month = 06;
  } else if (monthAndNumOfDay.includes("jul")) {
    month = 07;
  } else if (monthAndNumOfDay.includes("aug")) {
    month = 08;
  } else if (monthAndNumOfDay.includes("sep")) {
    month = 09;
  } else if (monthAndNumOfDay.includes("oct")) {
    month = 10;
  } else if (monthAndNumOfDay.includes("nov")) {
    month = 11;
  } else if (monthAndNumOfDay.includes("dec")) {
    month = 12;
  }
  //   let oneYearUnix = 31556926;
  let dateStr = year + "-" + month + "-" + day + " " + 00 + ":" + 00 + ":" + 00;
  let date = new Date(dateStr);
  let dayNumber = date.getDay();
  while (dayNumber !== 0) {
    year++;
    dateStr = year + "-" + month + "-" + day + " " + 00 + ":" + 00 + ":" + 00;
    date = new Date(dateStr);
    dayNumber = date.getDay();
  }
  return date.getFullYear();
}

// console.log(takeDateReturnSundayYear("jan 12"));

// #4 Write a function that takes an array of objects (each object has a Student Name and Grade). The function should return the average mark for the class and display the students that performed above the average and the students that performed belowed the average.
let exampleArray = [
  { name: "ryu", grade: 65 },
  { name: "ken", grade: 86 },
  { name: "cammy", grade: 99 },
  { name: "guile", grade: 76 },
  { name: "chun-li", grade: 78 },
  { name: "blanka", grade: 55 },
  { name: "sagat", grade: 43 },
  { name: "m. bison", grade: 11 },
  { name: "vega", grade: 45 },
];

function classAverages(objArray) {
  let gradeArray = [];
  let aboveAv = [];
  let belowAv = [];
  let classTotal = 0;
  objArray.forEach((student) => gradeArray.push(student.grade));
  gradeArray.forEach((grade) => (classTotal += grade));
  let arrayLength = gradeArray.length;
  let classAverage = classTotal / arrayLength;
  objArray.forEach((student) => {
    if (student.grade > classAverage) aboveAv.push(student.name);
    else belowAv.push(student.name);
  });
  return (
    "Class average: " +
    classAverage +
    "\n" +
    "Above average: " +
    aboveAv +
    "\n" +
    "Below Average: " +
    belowAv
  );
}

// console.log(classAverages(exampleArray));
//

// #5 write a function that takes a string and replaces every letter in the string with the next letter in the alphabet. (if the letter is z, change it to a)

//    example: "dogfrog"
//    answer: "ephgsph"

function changeLetter(str) {
  let newStr = str.toLowerCase();
  return newStr;
}

console.log(changeLetter("ABC"));
