var hora = prompt("Ingrese la hora del día (en formato de 24 horas):"); 

// Determinar si es am o pm
var periodo = (hora >= 0 && hora <= 12) ? "am" : "pm";

// Enviar a la consola el resultado
console.log(periodo);