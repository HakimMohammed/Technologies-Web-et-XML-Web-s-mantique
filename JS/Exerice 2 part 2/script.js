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
