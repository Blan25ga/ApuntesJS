
// Desestructuracion con el operador rest

/*
El operador rest nos permite asignar el resto de los elementos de un array a una variable.
*/

// Ejemplo 1
const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, ...resto] = numeros; // el resto de los elementos se asignan a la variable "resto"
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]

// Ejemplo 2
// asignar arreg a variables.
var a
var b
var arr

[a, b, ...arr] = [1, 2, 3, 4, 5, 6] //*se asigna el resto de los elementos a la variable arr

console.log(a) // 1
console.log(b) // 2
console.log(arr) // [3, 4, 5, 6]


// Ejemplo 3
// Remover los 3 primeros elemnetos de una array Y asignar el resto a una variable
const primerArreglo = [1, 2, 3, 4, 5];

function removerNumeros(arr) {
    var nuevoArreglo;
    const [, , , ...nuevoArreglo] = arr; //* se saltea los 3 primeros elementos y se asigna el resto a la variable "nuevoArreglo"
    return nuevoArreglo; // [4, 5]

}

console.log('"La nueva variable es":' + nuevoArreglo); // "La nueva variable es": [4, 5]



