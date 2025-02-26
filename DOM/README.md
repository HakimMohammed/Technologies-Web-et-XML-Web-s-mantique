# DOM Exercices

Welcome to the DOM exercises repository. This README file provides an overview of the exercises available in this workspace.

## Table of Contents

1. [Introduction](#introduction)
2. [Exercise List](#exercise-list)

## Introduction

This repository contains a collection of DOM exercises designed to help you improve your programming skills. Each exercise focuses on different aspects of DOM, from basic syntax to advanced concepts.

## Exercice List

1. **Exercise 1: Permutation**

   - Description :

   Il s'agit d'un exercice des plus classiques en programmation. L'objectif est de créer un formulaire qui contient deux zones de texte et un bouton de commande. Le fait de cliquer sur le bouton permute le contenu des deux zones de texte.

   - Code :

   ```javascript
   document.querySelector("form").addEventListener("submit", function (e) {
     e.preventDefault();
     let first = document.querySelector("#first").value;
     let second = document.querySelector("#second").value;

     document.querySelector("#first").value = second;
     document.querySelector("#second").value = first;
   });
   ```

   - Execution :
     ![Alt Text](./assets/Exercice%201%20-%20input.png) input
     ![Alt Text](./assets/Exercice%201%20-%20swap.png) swap values

1. **Exercise 2: Calculatrice-Simple**

   - Description :
     Dans cet exercice, on va essayer de créer une calculatrice qui exécute les opérations
     basiques, à savoir, addition, soustraction, multiplication et division. La page contiendra
     trois zones de texte qui représenterons respectivement: nombre 1, nombre 2 et résultat
     de l'opération, ainsi que 4 boutons qui représenteront les 4 opérations prévues.

   - Code :

   ```javascript
   button = document.querySelectorAll(".operator");
   button.forEach(function (btn) {
     btn.addEventListener("click", function () {
       let first = document.querySelector("#first").value;
       let second = document.querySelector("#second").value;
       let result = document.querySelector("#result");

       switch (btn.id) {
         case "add":
           result.value = parseInt(first) + parseInt(second);
           break;
         case "sub":
           result.value = parseInt(first) - parseInt(second);
           break;
         case "mul":
           result.value = parseInt(first) * parseInt(second);
           break;
         case "div":
           result.value = parseInt(first) / parseInt(second);
           break;
       }
     });
   });
   ```

   - Execution :
     ![Alt Text](./assets/Exercice%202%20-%20mult.png) Multiplication
     ![Alt Text](./assets/Exercice%202%20-%20subs.png) Substraction

1. **Exercise 3: Calcul IMC**

   - Description :

   L’objectif est développer un calculateur de l’indice IMC( Indice Masse Corporelle)

   - Code :

   ```javascript
   const imcCalculator = (weight, height) => {
     if (!weight || !height || height === 0) {
       return { imc: "Erreur", status: "Veuillez entrer des valeurs valides" };
     }

     let imc = weight / (height * height);
     let status = "";

     if (imc < 18.5) {
       status = "Insuffisance pondérale";
     } else if (imc < 25) {
       status = "Corpulence normale";
     } else if (imc < 30) {
       status = "Surpoids";
     } else if (imc < 35) {
       status = "Obésité modérée";
     } else if (imc < 40) {
       status = "Obésité sévère";
     } else {
       status = "Obésité morbide ou massive";
     }

     return { imc: imc.toFixed(2), status };
   };

   document.querySelector("button").addEventListener("click", function () {
     let weight = parseFloat(document.querySelector("#poids").value);
     let height = parseFloat(document.querySelector("#taille").value);
     let result = document.querySelector("#result");

     let { imc, status } = imcCalculator(weight, height);
     result.innerText = `Votre IMC est de ${imc}. Vous êtes en état de ${status}.`;
   });
   ```

   - Execution :
     ![Alt Text](./assets/Exercice%203.png) IMC

1. **Exercise 4: Calculatrice-Avancée**

   - Description :
     L’objectif est développer un calculatrice scientifique en utilisant les méthodes pure Javascript pour développer l’ensemble des calcules souhaités et utiliser le thème grid de CSS.

   - Code :

   ```javascript
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
    result \*= i;
    }
    return result;
    }

    function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
    result \*= base;
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
    let term = (1 / (2 _ i + 1)) _ power(y, 2 _ i + 1);
    sum += term;
    }
    return 2 _ sum;
    }

    function log10(x) {
    return ln(x) / ln(10);
    }

    function sqrt(x, precision = 1e-10) {
    if (x < 0) return NaN;
    let guess = x / 2;
    while (Math.abs(guess \* guess - x) > precision) {
    guess = (guess + x / guess) / 2;
    }
    return guess;
    }

    function sin(x, terms = 20) {
    let sum = 0;
    for (let i = 0; i < terms; i++) {
    let term = (power(-1, i) _ power(x, 2 _ i + 1)) / factorial(2 \* i + 1);
    sum += term;
    }
    return sum;
    }

    function cos(x, terms = 20) {
    let sum = 0;
    for (let i = 0; i < terms; i++) {
    let term = (power(-1, i) _ power(x, 2 _ i)) / factorial(2 \* i);
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
    case "_":
    return (num1 _ num2).toString();
    case "/":
    return (num1 / num2).toString();
    case "^":
    return Math.pow(num1, num2).toString();
    default:
    return num2.toString();
    }
    }
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Calculatrice Avancee</title>
       <link rel="stylesheet" href="style.css" />
     </head>
     <body>
       <div class="parent">
         <!-- Display Screen -->
         <div class="div1" id="screen"></div>

         <!-- Number Buttons -->
         <div class="div29 number" id="0">0</div>
         <div class="div15 number" id="1">1</div>
         <div class="div14 number" id="2">2</div>
         <div class="div11 number" id="3">3</div>
         <div class="div10 number" id="4">4</div>
         <div class="div13 number" id="5">5</div>
         <div class="div12 number" id="6">6</div>
         <div class="div8 number" id="7">7</div>
         <div class="div9 number" id="8">8</div>
         <div class="div7 number" id="9">9</div>

         <!-- Operators -->
         <div class="div6 button operator" id="/">/</div>
         <div class="div16 button operator" id="-">-</div>
         <div class="div17 button operator" id="*">*</div>
         <div class="div27 button operator" id="+">+</div>

         <!-- Clear Entry -->
         <div class="div5 button" id="clearEntry">CE</div>

         <!-- Params -->
         <div class="div2 button" id="openParen">(</div>
         <div class="div3 button" id="closeParen">)</div>

         <!-- Unary Operations -->
         <div class="div18 button unaryOperation" id="ln">ln</div>
         <div class="div19 button unaryOperation" id="sin">sin</div>
         <div class="div22 button unaryOperation" id="cos">cos</div>
         <div class="div23 button unaryOperation" id="log">log</div>
         <div class="div24 button unaryOperation" id="√">√</div>
         <div class="div25 button unaryOperation" id="tan">tan</div>
         <div class="div32 button unaryOperation" id="x^2">x^2</div>
         <div class="div33 button unaryOperation" id="EXP">EXP</div>

         <div class="div4 button" id="pourcentage">%</div>
         <div class="div26 button" id="e">e</div>
         <div class="div30 button key" id=".">.</div>
         <div class="div31 button" id="power">x^</div>
         <div class="div20 button" id="Inv">Inv</div>
         <div class="div21 button" id="π">π</div>

         <!-- Equal Button -->
         <div class="div28 button" id="equal">=</div>
       </div>

       <script src="script.js"></script>
     </body>
   </html>
   ```

   ```css
   .number {
     background-color: #9b9dac;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 5px;
     height: 100%;
     cursor: pointer;
   }

   .button {
     color: white;
     background-color: #2c303d;
     border-radius: 5px;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
   }

   #equal {
     background-color: #a8c7fa;
   }

   #screen {
     background-color: #f0f0f5;
     border: 1px solid hsl(240, 0%, 60%);
     height: 4rem;
     display: flex;
     justify-content: start;
     align-items: center;
     font-size: xx-large;
     padding-left: 1rem;
   }

   .parent {
     display: grid;
     grid-template-columns: repeat(7, 1fr);
     grid-template-rows: repeat(6, 1fr);
     gap: 8px;
     height: 50vh;
     align-items: center;
     border: 1px solid grey;
     padding: 8px;
   }

   .div1 {
     grid-column: span 7 / span 7;
   }

   .div2 {
     grid-column-start: 4;
     grid-row-start: 2;
   }

   .div3 {
     grid-column-start: 5;
     grid-row-start: 2;
   }

   .div4 {
     grid-column-start: 6;
     grid-row-start: 2;
   }

   .div5 {
     grid-column-start: 7;
     grid-row-start: 2;
   }

   .div6 {
     grid-column-start: 7;
     grid-row-start: 3;
   }

   .div7 {
     grid-column-start: 6;
     grid-row-start: 3;
   }

   .div8 {
     grid-column-start: 4;
     grid-row-start: 3;
   }

   .div9 {
     grid-column-start: 5;
     grid-row-start: 3;
   }

   .div10 {
     grid-column-start: 4;
     grid-row-start: 4;
   }

   .div11 {
     grid-column-start: 4;
     grid-row-start: 5;
   }

   .div12 {
     grid-column-start: 6;
     grid-row-start: 4;
   }

   .div13 {
     grid-column-start: 5;
     grid-row-start: 4;
   }

   .div14 {
     grid-column-start: 5;
     grid-row-start: 5;
   }

   .div15 {
     grid-column-start: 6;
     grid-row-start: 5;
   }

   .div16 {
     grid-column-start: 7;
     grid-row-start: 5;
   }

   .div17 {
     grid-column-start: 7;
     grid-row-start: 4;
   }

   .div18 {
     grid-column-start: 3;
     grid-row-start: 3;
   }

   .div19 {
     grid-column-start: 2;
     grid-row-start: 3;
   }

   .div20 {
     grid-column-start: 1;
     grid-row-start: 3;
   }

   .div21 {
     grid-column-start: 1;
     grid-row-start: 4;
   }

   .div22 {
     grid-column-start: 2;
     grid-row-start: 4;
   }

   .div23 {
     grid-column-start: 3;
     grid-row-start: 4;
   }

   .div24 {
     grid-column-start: 3;
     grid-row-start: 5;
   }

   .div25 {
     grid-column-start: 2;
     grid-row-start: 5;
   }

   .div26 {
     grid-column-start: 1;
     grid-row-start: 5;
   }

   .div27 {
     grid-column-start: 7;
     grid-row-start: 6;
   }

   .div28 {
     grid-column-start: 6;
     grid-row-start: 6;
   }

   .div29 {
     grid-column-start: 5;
     grid-row-start: 6;
   }

   .div30 {
     grid-column-start: 4;
     grid-row-start: 6;
   }

   .div31 {
     grid-column-start: 3;
     grid-row-start: 6;
   }

   .div32 {
     grid-column-start: 2;
     grid-row-start: 6;
   }

   .div33 {
     grid-column-start: 1;
     grid-row-start: 6;
   }
   ```


- Execution :
     ![Alt Text](./assets/Exercice%204.png) Calculator
