const hjms = (nbSeconds) => {
    //  1 Day => 86400
    //  1 Hour => 3600
    //  1 Minute => 60

    // Days 
    const nbDays = parseInt(nbSeconds / 86400);
    const nbHoursInSeconds = nbSeconds % 86400;
    const nbHours = parseInt(nbHoursInSeconds / 3600);
    const nbMinutesInSeconds = nbHoursInSeconds % 3600;
    const nbMinutes = parseInt(nbMinutesInSeconds / 60);
    const nbSecondsLeft = nbMinutesInSeconds % 60;
    return `${nbDays} jours, ${nbHours} heures, ${nbMinutes} minutes et ${nbSecondsLeft} secondes`;
}

const nbSeconds = parseInt(prompt("Une durée en secondes :"))
console.log("cette durée équivaut à "+hjms(nbSeconds))