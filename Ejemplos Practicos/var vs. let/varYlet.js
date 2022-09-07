
// Diferencias entre declarar una varoiable con var y let

/*
var: es una palabra reservada para declarar variables en javascript,
es una variable "global", es decir, que puede ser accedida desde cualquier parte del código,
incluso desde fuera de la función en la que fue declarada.
Si se declara una variable con var dentro de una función,
esta variable será accesible desde cualquier parte de la función, incluso desde fuera de la función.
*/

/*
let: es una palabra reservada para declarar variables en javascript,
es una variable "local", es decir, que solo puede ser accedida desde dentro de la función en la que fue declarada.
Si se declara una variable con let dentro de una función,
esta variable solo será accesible desde dentro de la función.
*/


//* declarando una variable con "let", esta solo se puede declarar una vez.
// let miVariable = 10;
// let miVariable = 20; // error: Identifier 'miVariable' has already been declared

//* declarando una variable con "var", esta se puede declarar varias veces.
// var miVariable = 10;
// var miVariable = 20; // no hay error, la variable se reemplaza por la nueva declaracion


// Ejemplo de una variable global
var miVariableGlobal = 10; // se declara una variable global

function miFuncion() {
    return miVariableGlobal; // se retorna la variable global
}

miFuncion(); // 10

// Ejemplo de una variable local
function miFuncion() {
    let miVariableLocal = 10; // se declara una variable local
    return miVariableLocal; // se retorna la variable local
}

miFuncion(); // 10
miVariableLocal; // ReferenceError: miVariableLocal is not defined, la variable local no esta definida fuera de la funcion.
