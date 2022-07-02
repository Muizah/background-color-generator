const btn = document.querySelector("button");
const hexNoElement = document.querySelector("#hex_no");
const body = document.querySelector("body");
const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
function generateCode() {
  const lenghtOfCodes = hexCodes.length;
  var hexCode = "#";
  for (let i = 1; i < 7; i++) {
    const condeIndex = generateRandomNumber(0, lenghtOfCodes - 1);
    const code = hexCodes[condeIndex];
    hexCode = hexCode + code;
  }
  document.documentElement.style.setProperty("--bg", hexCode);
  hexNoElement.innerText = hexCode;
}
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
generateCode();
btn.addEventListener("click", generateCode);
// Promises
