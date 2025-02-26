const screen = document.getElementById("screen");

let currentInput = "";
let operator = null;
let previousInput = "";
let displayResult = false;

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    value = this.getAttribute("id");
    if (displayResult) {
      currentInput = value;
      displayResult = false;
    } else {
      currentInput += value;
    }
    screen.innerText = currentInput;
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    value = this.getAttribute("id");
    value = operator.innerHTML;
    if (currentInput !== "") {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

clearEntry.addEventListener("click", function () {
  currentInput = "";
  screen.textContent = "0";
});

equal.addEventListener("click", function () {
  if (operator && previousInput !== "" && currentInput !== "") {
    currentInput = calculate(previousInput, currentInput, operator);
    screen.textContent = currentInput;
    displayResult = true;
  }
});

unaryOperators = document.querySelectorAll(".unaryOperation");
unaryOperators.forEach((unaryOperator) => {
  unaryOperator.addEventListener("click", function () {
    value = this.getAttribute("id");
    currentInput = handleUnaryOperation(value, currentInput);
    screen.textContent = currentInput;
  });
});

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function exp(x, terms = 20) {
  let sum = 1;
  for (let i = 1; i < terms; i++) {
    sum += power(x, i) / factorial(i);
  }
  return sum;
}

function ln(x, terms = 20) {
  if (x <= 0) return NaN;
  let y = (x - 1) / (x + 1);
  let sum = 0;
  for (let i = 0; i < terms; i++) {
    let term = (1 / (2 * i + 1)) * power(y, 2 * i + 1);
    sum += term;
  }
  return 2 * sum;
}

function log10(x) {
  return ln(x) / ln(10);
}

function sqrt(x, precision = 1e-10) {
  if (x < 0) return NaN;
  let guess = x / 2;
  while (Math.abs(guess * guess - x) > precision) {
    guess = (guess + x / guess) / 2;
  }
  return guess;
}

function sin(x, terms = 20) {
  let sum = 0;
  for (let i = 0; i < terms; i++) {
    let term = (power(-1, i) * power(x, 2 * i + 1)) / factorial(2 * i + 1);
    sum += term;
  }
  return sum;
}

function cos(x, terms = 20) {
  let sum = 0;
  for (let i = 0; i < terms; i++) {
    let term = (power(-1, i) * power(x, 2 * i)) / factorial(2 * i);
    sum += term;
  }
  return sum;
}

function tan(x) {
  return sin(x) / cos(x);
}

function handleUnaryOperation(operation, num) {
  num = parseFloat(num);
  switch (operation) {
    case "ln":
      return ln(num).toString();
    case "log":
      return log10(num).toString();
    case "sin":
      return sin(num).toString();
    case "cos":
      return cos(num).toString();
    case "tan":
      return tan(num).toString();
    case "√":
      return sqrt(num).toString();
    case "x^2":
      return power(num, 2).toString();
    case "EXP":
      return exp(num).toString();
    default:
      return num.toString();
  }
}

function handleInverse(num) {
  num = parseFloat(num);
  return (1 / num).toString();
}

Inv.addEventListener("click", function () {
  currentInput = handleInverse(currentInput);
  screen.textContent = currentInput;
});

Pi = document.getElementById("π");
Pi.addEventListener("click", function () {
  currentInput = Math.PI.toString();
  screen.textContent = currentInput;
});

E = document.getElementById("e");
E.addEventListener("click", function () {
  currentInput = Math.E.toString();
  screen.textContent = currentInput;
});

pow = document.getElementById("power");
pow.addEventListener("click", function () {
  if (currentInput !== "") {
    operator = "^";
    previousInput = currentInput;
    currentInput = "";
  }
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return (num1 / num2).toString();
    case "^":
      return Math.pow(num1, num2).toString();
    default:
      return num2.toString();
  }
}