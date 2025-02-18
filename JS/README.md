# JavaScript Exercises

Welcome to the JavaScript exercises repository. This README file provides an overview of the exercises available in this workspace.

## Table of Contents

1. [Introduction](#introduction)
2. [Exercise List](#exercise-list)

## Introduction

This repository contains a collection of JavaScript exercises designed to help you improve your programming skills. Each exercise focuses on different aspects of JavaScript, from basic syntax to advanced concepts.

## Exercise List

1. **Exercise 1: Fahrenheit To Celsius**

   - Description: En utilisant la formule tempC=(5/9)(tempF−32) écrire en langage JavaScript une
     fonction degreC qui affiche sa valeur en degrés centigrades ou degrés Celsius d’une
     température exprimée en degrés Fahrenheit.

   - Code:

   ```javascript
   const fahrenheitToCelsius = (tempF) => {
     const tempC = (5 / 9) * (tempF - 32);
     return tempC;
   };

   const tempF = parseFloat(prompt("Une température en Fahrenheit :"));
   const tempC = fahrenheitToCelsius(tempF).toFixed(1);
   console.log("cette température équivaut a " + tempC + " degrés Celsius");
   ```

   - Execution:
     ![Alt Text](./screenshots/Ex1%20input.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex1%20Res.png) Program Result

2. **Exercise 2: Conversion de durées**

   - Description:
     Écrire une fonction hjms en langage JavaScript qui pour un nombre de secondes donné
     calcule et renvoi son équivalent en nombre de jours, d'heures, de minutes et de secondes.

   - Code:

   ```javascript
   const hjms = (nbSeconds) => {
     const nbDays = parseInt(nbSeconds / 86400);
     const nbHoursInSeconds = nbSeconds % 86400;
     const nbHours = parseInt(nbHoursInSeconds / 3600);
     const nbMinutesInSeconds = nbHoursInSeconds % 3600;
     const nbMinutes = parseInt(nbMinutesInSeconds / 60);
     const nbSecondsLeft = nbMinutesInSeconds % 60;
     return `${nbDays} jours, ${nbHours} heures, ${nbMinutes} minutes et ${nbSecondsLeft} secondes`;
   };

   const nbSeconds = parseInt(prompt("Une durée en secondes :"));
   console.log("cette durée équivaut à " + hjms(nbSeconds));
   ```

   - Execution:
     ![Alt Text](./screenshots/Ex2%20input.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex2%20Res.png) Program Result

3. **Exercise 2 Part 2: Conversion de durées Amelioration**

- Description:
  Si ce n'est déjà fait, améliorez votre programme hjms de sorte que lorsqu'une valeur
  (nombre de jours, d'heures , de minutes ou de secondes) est nulle elle n'apparaisse pas
  dans l'affichage,

- Code:

```javascript
const hjms = (nbSeconds) => {
  const nbDays = parseInt(nbSeconds / 86400);
  const nbHoursInSeconds = nbSeconds % 86400;
  const nbHours = parseInt(nbHoursInSeconds / 3600);
  const nbMinutesInSeconds = nbHoursInSeconds % 3600;
  const nbMinutes = parseInt(nbMinutesInSeconds / 60);
  const nbSecondsLeft = nbMinutesInSeconds % 60;

  const days = ameliorer(nbDays, "jour");
  const hours = ameliorer(nbHours, "heure");
  const minutes = ameliorer(nbMinutes, "minute");
  const secondes = ameliorer(nbSecondsLeft, "seconde");

  return days + hours + minutes + secondes;
};

const ameliorer = (number, label) => {
  if (number === 0) return "";
  return `${number} ${label}${number > 1 ? "s " : " "}`;
};

const nbSeconds = parseInt(prompt("Une durée en secondes :"));
console.log("cette durée équivaut à " + hjms(nbSeconds));
```

- Execution:
  ![Alt Text](./screenshots/Ex2%20Part2%20input.png) Waiting for user's input
  ![Alt Text](./screenshots/2Ex2%20Part2%20Res.png) Program Result

4. **Exercise 3: Classer 3 nombres**

   - Description:
     Écrire un programme troisNombres qui renvoi l'ordre croissant (du plus petit au plus
     grand) de 3 nombres.

   - Code:

   ```javascript
   const numbers = [3];

   for (let index = 0; index < 3; index++) {
     numbers[index] = +prompt(
       `${index + 1}${index + 1 > 1 ? "ème" : "er"} nombre :`
     );
   }

   numbers.sort((a, b) => a > b);

   console.log("les nombres dans l'ordre croissant : " + numbers);
   ```

   - Execution:
     ![Alt Text](./screenshots/Ex3%20in1.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex3%20in2.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex3%20in3.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex3%20Res.png) Program Result

5. **Exercise 4: Affichage de motifs - escaliers**

- Description:
  Écrire un programme qui affiche un motif triangulaire dont la taille est fixée par une
  valeur.

- Code:

```javascript
const nbLines = +prompt("Un motif de taille : ");

const triangle1 = (nbLines) => {
  console.log("Triangle 1");
  var index = 1;
  while (index <= nbLines) {
    console.log("*".repeat(index));
    index++;
  }
};

// triangle1( nbLines )

const triangle2 = (nbLignes) => {
  console.log("Triangle 2");
  for (let index = 1; index <= nbLignes; index++) {
    console.log("*".repeat(index));
  }
};

triangle2(nbLines);
```

- Execution:
  ![Alt Text](./screenshots/Ex4%20in.png) Waiting for user's input
  ![Alt Text](./screenshots/Ex4%20Res.png) Program Result

6. **Exercise 4 Part 2: Affichage de motifs - pyramides**

   - Description:
     Même exercice que le précédent mais le motif affiché n'est plus un triangle mais une
     pyramide (voir ci-dessous) et le choix des instructions pour le réaliser est laissé à votre
     jugement.

   - Code:

   ```javascript
   const nbLines = +prompt("donnez taille du motif : ");

    const pyramid = (nbLignes ) => {
    const totalStars = ( nbLignes - 1 ) _ 2 + 1
    for (let index = 1; index <= nbLignes; index++) {
    console.log(" ".repeat(nbLignes - index)+'_'.repeat(totalStars - ( nbLignes - index ) \* 2 ))
    }
    }

    pyramid(nbLines)
   ```

   - Execution:
     ![Alt Text](./screenshots/Ex4%20P2%20in.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex4%20P2%20Res.png) Program Result

7. **Exercice 5: Tester si un nombre est premier**

   - Description:
     Un nombre est n premier si il a seulement deux diviseurs : 1 et n.
     Écrire un programme Premier qui permet de tester si un nombre introduit par
     l'utilisateur est premier ou non.

   - Code:

   ```javascript
   const isPrime = (number) => {
     if (number <= 0) {
       alert("Nombre doit etre strictement positive");
     } else {
       if (number == 1) {
         return "1 n'est pas un nombre premier,";
       }

       if (number == 2) {
         return "2 est un nombre premier";
       }

       for (let index = 2; index < number; index++) {
         if (number % index === 0) {
           return (
             number +
             " n'est pas un nombre premier, il est divisible par " +
             index
           );
         }
       }
       return number + " est un nombre premier";
     }
   };

   const numberToCheck = +prompt("Un entier positif :");
   console.log(isPrime(numberToCheck));
   ```

   - Execution:
     ![Alt Text](./screenshots/Ex5%20in.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex5%20res.png) Program Result

8. **Exercice 6: Suite de Fibonacci**

   - Description:
   La suite de Fibonacci

   - Code:

   ```javascript
        const Fibo1 = (n) => {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        return Fibo1(n - 1) + Fibo1(n - 2);
        };

        const num = +prompt("Enter a number: ");
        console.log("La valeur Fibonacci de " + num + " est " + Fibo1(num));

        const Fibo2 = (n) => {
        index = 0;
        while (true) {
            if (Fibo1(index) > n) {
            return { valeur: Fibo1(index), rang: index };
            }
            index++;
        }
        };

        const number = +prompt("Enter a number: ");
        const {valeur, rang} = Fibo2(number);
        console.log("Le premier terme de cette suite supérieure a "+valeur+" comme valeur et "+rang+" comme rang");


   ```

    - Execution:
     ![Alt Text](./screenshots/Ex6%20first%20in.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex6%20first%20res.png) Program Result
     ![Alt Text](./screenshots/Ex6%20second%20in.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex6%20second%20res.png) Program Result

9. **Exercice 7: Valeur approchée de la √ d'un nombre réel positif**

   - Description:

        Écrire une fonction JavaScript Raca1 qui permet de calculer et d'afficher la valeur
        approchée de la racine carrée de A

   - Code:

   ```javascript
        const Raca1 = ( A ) => {
            U0 = A / 2;
            while (true) {
                Un = 0.5 * (U0 + A / U0);
                if (Math.abs(Un**2 - A) < 10**-5) {
                    return Un;
                }
                U0 = Un;
            }  
        }

        const number = parseFloat(prompt("Pour un nombre A entre 1 et 100: "));
        console.log("Valeur approchée de la racine carrée = " + Raca1(number));

   ```

    - Execution:
     ![Alt Text](./screenshots/Ex7%20in.png) Waiting for user's input
     ![Alt Text](./screenshots/Ex7%20res.png) Program Result
