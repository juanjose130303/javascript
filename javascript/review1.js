// Solicitar la cantidad de campers antiguos y nuevos
var numCampersAntiguos = prompt("Ingrese el número de campers antiguos:");
var numCampersNuevos = prompt("Ingrese el número de campers nuevos:");

// Convertir las entradas a números antes de sumar
var usuariosLinuxMaximos = parseInt(numCampersAntiguos) + parseInt(numCampersNuevos);

// Mostrar en una ventana emergente
alert("Usuarios Linux máximos por computadora: " + usuariosLinuxMaximos);


// Tomar la edad como entrada (ya proporcionada)
var edad = prompt("Ingrese la edad del usuario:"); // Puedes reemplazar esto con tu entrada!

// Verificar si es adulto sin usar estructuras ifs
var esAdulto = edad >= 18;

// Enviar a la consola el valor booleano correspondiente
console.log(esAdulto);

// Tomar la hora como entrada (ya proporcionada)
var hora = prompt("Ingrese la hora del día (en formato de 24 horas):"); // Puedes reemplazar esto con tu entrada!

// Determinar si es am o pm
var periodo = (hora >= 0 && hora <= 12) ? "am" : "pm";

// Enviar a la consola el resultado
console.log(periodo);


// Tomar la distancia en millas como entrada (ya proporcionada)
var distancia = prompt("Ingrese la distancia en millas para su viaje:"); // Puedes reemplazar esto con tu entrada!

// Calcular el tiempo en minutos a una velocidad promedio de 40 mph
var velocidadPromedio = 40;
var tiempoMinutos = distancia / velocidadPromedio * 60;

// Enviar a la consola el tiempo que llevará recorrerla en minutos
console.log("Tiempo estimado de viaje en minutos:", tiempoMinutos);
