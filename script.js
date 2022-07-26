// grabing 2 btn

let Inb1 = document.getElementById("Inbtn1");
let Deb1 = document.getElementById("Debtn1");

let Inb2 = document.getElementById("Inbtn2");
let Deb2 = document.getElementById("Debtn2");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let result = 1;

num1.textContent = result;
num2.textContent = result;

Inb1.addEventListener("click", function () {
  result += 1;
  num1.textContent = result;
});

Deb1.addEventListener("click", function () {
  result -= 1;
  num1.textContent = result;
});

Inb2.addEventListener("click", function () {
  result += 1;
  num2.textContent = result;
});

Deb2.addEventListener("click", function () {
  result -= 1;
  num2.textContent = result;
});
