//Ejercicio 2
let mi_cadena = prompt("Ingrese una cadena: ")
let buscar_cadena = prompt("Qué desea buscar: ")

function check_in_string (cadena, buscar) {
    cadena_low = cadena.toLowerCase()
    buscar_low = buscar.toLowerCase()
    if (cadena_low.indexOf(buscar_low) != -1) {
        alert(${buscar} sí se encuentra dentro de la cadena)
        alert(La cadena original es: ${cadena})
        return true
    }
    else {
        alert ("Pailas, no se encuentra")

    }
}

check_in_string(mi_cadena, buscar_cadena)

//Cómo clonar un array
/const arr_nuevo = arr.slice()/
//let arr_nuevo = [...arr]
let un_array = [2.0, 3.5, 4.5, 8.5, 9.5]
let clon_array = un_array.slice()
clon_array[0] = 3.5
console.log(un_array, clon_array)

//MATRICES
let matriz = [["salmon", "halibut"],
              ["coral", "zebra"]]
//forma de hacer referencia a una posición : Matriz[fila][columna]

//Set: Los datos nbo se repiten
let letras = new Set()
letras.add("b") //Para añadir
letras.add("a")
letras.add("c")
letras.add("d")
console.log(letras)
letras.delete("d")
console.log(letras.has("y"))
console.log(letras.has("b")) //Para saber si un elemento existe

//Recorrido con forEach
letras.forEach(l => console.log(l))

//Recorrido con for of
for (const l of letras.values()) {
    console.log(l)
}

//Size
for (const l of letras) {
    console.log(l)
}

console.log("Tamaño del conjunto: " + letras.size)

//clear
//

//const set_new = ("a", "b", "c", "d")
