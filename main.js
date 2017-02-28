var firstNum = parseInt(prompt("what is the numerator"));
var secondNum = parseInt(prompt("what is the denominator"));
var lowNum;

if (firstNum > secondNum) {
  lowNum = secondNum;
} else {
  lowNum = firstNum;
}

for (var i = 0; i < lowNum; i++) {
  if (firstNum % i === 0 && secondNum % i === 0) {
    alert("numerator: " + firstNum / i + " denominator: " + secondNum / i);
  }
}
