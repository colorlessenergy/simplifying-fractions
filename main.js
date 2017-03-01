var numerator = document.getElementById("numerator");
var denominator = document.getElementById("denominator");
var send = document.getElementById("send");
var lowNum;

send.addEventListener("click", function () {
  document.getElementById("results").innerHTML = "";
  if (numerator.value > denominator.value) {
    lowNum = denominator.value;
  } else {
    lowNum = numerator.value;
  }

  for (var i = 0; i < lowNum+1; i++) {
    if (numerator.value % i === 0 && denominator.value % i === 0) {
      document.getElementById("results").innerHTML = "numerator: " + numerator.value / i + " denominator: " + denominator.value / i;
    }
  }
});
