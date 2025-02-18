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
        return number+" n'est pas un nombre premier, il est divisible par "+index;
      }
    }
    return number+" est un nombre premier";
  }
};

const numberToCheck = +prompt("Un entier positif :");
console.log(isPrime(numberToCheck))
