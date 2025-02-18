const numbers = [3]

for (let index = 0; index < 3; index++) {
    numbers[index] = +prompt(`${index + 1}${index + 1 > 1 ? "ème" : "er"} nombre :`)
}

numbers.sort((a,b) => a > b)

console.log("les nombres dans l'ordre croissant : "+ numbers)