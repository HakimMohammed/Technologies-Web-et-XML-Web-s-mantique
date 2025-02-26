keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    let screen = document.getElementById("screen");
    screen.innerHTML += key.innerHTML;
  });
});

operators = document.querySelectorAll(".operator");
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    let screen = document.getElementById("screen");
    screen.innerHTML += " " + operator.innerHTML + " ";
  });
});

equal.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  let result;
  try {
    result = eval(screen.innerHTML);
  } catch (error) {
    result = "Error";
  }
  screen.innerHTML = result;
});

CE.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  screen.innerHTML = "";
});

pourcentage.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  screen.innerHTML = eval(screen.innerHTML) / 100;
});

Inv.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  screen.innerHTML = 1 / eval(screen.innerHTML);
});
