let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 50);
console.log(number);
btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  console.log(input);
  if (input == number) {
    output.innerHTML = "Congradulation, your number was right";
    output.style.color = "green";
  } else if (input < number) {
    output.innerHTML = "your guess is too low";
    output.style.color = "red";
  } else if (input > number) {
    output.innerHTML = "your guess is too high";
    output.style.color = "yellow";
  }
});
