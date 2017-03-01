var numerator = document.getElementById("numerator");
var denominator = document.getElementById("denominator");
var send = document.getElementById("send");
var lowNum;

send.addEventListener("click", function () {
  console.log(numerator.value, denominator.value);
  if (parseInt(numerator.value) > parseInt(denominator.value)) {
    lowNum = parseInt(denominator.value);
  } else {
    lowNum = parseInt(numerator.value);
  }

  for (var i = 0; i < lowNum+1; i++) {
    if (parseInt(numerator.value) % i === 0 && parseInt(denominator.value) % i === 0) {
      console.log(i);
      document.getElementById("results").innerHTML = "numerator: " + parseInt(numerator.value) / i + " denominator: " + parseInt(denominator.value) / i;
    }
  }
});
