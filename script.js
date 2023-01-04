let inputStorage = 0;

let unixInput = document.getElementById("unixTimeStamp");
let hourMinSec = document.getElementById("hourMinSec");

function calculateTime() {
  inputStorage = unixInput.value;
  hourMinSec.innerHTML = "THE TIME IS: " + inputStorage;
}
console.log("dog");
