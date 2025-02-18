const fahrenheitToCelsius = (tempF) => {
    const tempC = (5 / 9) * (tempF - 32)
    return tempC;
}

const tempF = parseFloat(prompt("Une température en Fahrenheit :"));
const tempC = fahrenheitToCelsius(tempF).toFixed(1);
console.log("cette température équivaut a "+ tempC+" degrés Celsius")