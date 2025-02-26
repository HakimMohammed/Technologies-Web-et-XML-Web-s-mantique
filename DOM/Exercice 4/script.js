let result = null;
let screen = document.getElementById("screen");
let currentValue = parseInt(screen.innerHTML);
let currentOperator = null;

const clear = () => {
  result = null;
  currentValue = null;
  currentOperator = null;
  screen.innerHTML = "";
};

const addContent = (content) => {
  screen.innerHTML += content;
};

const showContent = (content) => {
  screen.innerHTML = content;
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
  }
};

const getPriority = (operator) => {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    default:
      return 0;
  }
};

const infixToPostfix = (expression) => {
  const output = [];
  const stack = [];
  const tokens = expression.split(" ");

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      output.push(parseInt(token));
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        output.push(stack.pop());
      }
      stack.pop(); 
    } else {
      while (
        stack.length > 0 &&
        getPriority(stack[stack.length - 1]) >= getPriority(token)
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  });

  while (stack.length > 0) {
    output.push(stack.pop());
  }

  return output;
};

const evaluatePostfix = (postfix) => {
  const stack = [];

  postfix.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(token);
    } else {
      const secondNumber = stack.pop();
      const firstNumber = stack.pop();
      const result = calculate(firstNumber, secondNumber, token);
      stack.push(result);
    }
  });

  return stack.pop();
};

// CE Button
clearEntry.addEventListener("click", clear);

keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    addContent(key.innerHTML);
  });
});

operators = document.querySelectorAll(".operator");
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    addContent(" " + operator.innerHTML + " ");
  });
});

equal.addEventListener("click", function () {
  const equation = screen.innerHTML;
  const postfix = infixToPostfix(equation);
  result = evaluatePostfix(postfix);
  showContent(result);
});
