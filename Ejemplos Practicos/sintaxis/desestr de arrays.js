
//* Desestructuracion de arrays

/*
Nos permite asignar valores de un array a variables por separado.
*/

// Ejemplo 1
const numeros = [1, 2, 3, 4];

const [primero, segundo, tercero, cuarto] = numeros;
console.log(primero); // 1
console.log(segundo); // 2
console.log(tercero); // 3
console.log(cuarto); // 4


// Ejemplo 2
//* saltando valores para no asignarlos a una variable

var a;
var b;
var c;

[a, , b, c] = [1, 2, 3, 4]; // colocando la coma se salta el valor 2.
console.log(a); // 1
console.log(b); // 3
console.log(c); // 4


// Ejemplo 3
//* sintaxis de desestructuracion para cambiar el valor de dos variables
var a = 1;
var b = 2;

console.log(a); // 1
console.log(b); // 2

[a, b] = [b, a]; // asignamos los valores de b a "a" y viceversa.

console.log(a); // 2
console.log(b); // 1




