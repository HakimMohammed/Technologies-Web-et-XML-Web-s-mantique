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

