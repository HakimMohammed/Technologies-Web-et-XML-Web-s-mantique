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
