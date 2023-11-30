console.log("      *  ***** \n      * *     *\n      * *      \n      *  ***** \n*     *       *\n*     * *     *\n *****   ***** ")

//comentarios de  uan sola linea//
/*Este
es un comentario de dos lineas*/

//JS lenguaje tipado debil//

x = 32
where_any ="santa"
console.log(x)

/*todo lo que se puede declararlo con conts*/

//declarar una variable
let mensaje
console.log(typeof(mensaje)) //me dice que tipo de varible es
//con let no puedo declarar la misma variable varias veces

//pero declaro el valor
let a = "holaaa"
console.log(typeof(a))

//colocar espacios en la consola
console.log(typeof(a)) +" "+ console.log(typeof(mensaje))

//puedo declarar a variables de la siguinte forma
let b = 1, c = "manuel", age ="25", temperatura = 15.5

//que pasa si divido un entero entre un numero
alert ("holita" / 3)

//si defino un numero bastante grande

m = 65654131443135148612313584
console.log(typeof(m))

//con los string

let str = "holaaaa"
let str2 = "buenass"
let str3 = `otra ${str}` //concatena
console.log(str3)

//booleanos

let plena = true
let mala_plena = false

//null
let f = null

//ejercicio
let name = "Ilia"
alert (`hola ${1}`)
alert (`hola ${"name"}`)
alert (`hola ${name}`)

//como hacer para definir variables globales dentro de los condicionales

if (true) {
    var test = "si"
}

alert (test) /* test actua como variable global, pero si su lugar usamos let dentro de if, entonces el alert no pasa error*/

//operadores

let num_1 = 5
let num_2 = num_1 ++
console.log(num_1)
console.log(num_2)

//depende mucho de donde esta el ++
num_2 = ++n //aqui num_2 vale 7 y num_1 tambien vale 7
console.log(num_2)
console.log(num_1)

//&& and
//|| or
/*! not*/
/*!= diferente*/

//asignaciones
b = 2
a = 5
a **= b //--> esto da a = 25

//operadores de comparacion
/*tenemos 2 operadores de igualdad son:
== es un igual,pero habla mas de apariencia, por ejemplo 3 == "3" esto es verdadero
=== es un estrictamente igual ( recomendado), este ademas del valor, revisa que sean el mismo tipo de dato*/

/*los valore falsos
- 0
- -0
- ""
- null
- undefined
- NaN
- false */

/* los valores verdaderos
- true
- 1
- []
- {}
-
-
-*/

/*Operadores de cadenas 
- concatenacion
- template string
- template literals
- metodos strings
*/

let cat_1 = "aprendiendo JS"
let cat_2 = "con campus"
console.log(cat_1) +console.log(cat_2) 

/* metodos string
console.log(cadena.repeat(number_repetitions))*/
console.log("*".repeat(10))

//startswith(str, index) 

str = "hell. my name is juan jose, messi campeon, soy fan de messi"
console.log(str.endsWith(`soy fan de messi`)) //outputs true    

//endswith (str, index --> hace lo contrario a starwith)

//includes(str, index) --> indica si la cadena incluye la str a partir del index

//promp: para recibir valores del usuario

resultado = prompt("ingrese la edad", 18) // si le damos en cancel  nos queda null

let is_boss = confirm("tu eres el jefe?")
console.log(is_boss)

//conversion de datos

let value = true
alert (typeof value)
value = String( value)
alert (typeof value)

//si yo trato de hacer la division entre cadenas, pero el contenido de las cadenas es numero, JS me lo hace

console.log("6"/"2")

//puedo convertir de string a nunmero

str = "123"
str = Number(str)
console.log(str)
console.log(typeof str)

//booleanos

alert( Boolean(1)); //true
alert( Boolean(0)); //false

alert( Boolean("hola")); //true
alert(Boolean(""));  //false

