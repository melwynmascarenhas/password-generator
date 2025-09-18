const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const pw1El = document.getElementById("pw1");
const pw2El = document.getElementById("pw2");
const lengthInput = document.getElementById("lengthInput");
const useSymbols = document.getElementById("useSymbols");
const useNumbers = document.getElementById("useNumbers");
const generateBtn = document.getElementById("generateBtn");

function generatePassword(len, allowSymbols, allowNumbers) {
  let pool = [...alphabets];
  if (allowNumbers) pool.push(...numbers);
  if (allowSymbols) pool.push(...symbols);
  let result = "";
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result += pool[index];
  }
  return result;
}

function createPasswords() {
  const len = parseInt(lengthInput.value) || 12;
  const p1 = generatePassword(len, useSymbols.checked, useNumbers.checked);
  const p2 = generatePassword(len, useSymbols.checked, useNumbers.checked);
  pw1El.textContent = p1;
  pw2El.textContent = p2;
}

generateBtn.addEventListener("click", createPasswords);

[pw1El, pw2El].forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.textContent) return;
    navigator.clipboard.writeText(el.textContent);
    window.alert("Password copied");
  });
});
