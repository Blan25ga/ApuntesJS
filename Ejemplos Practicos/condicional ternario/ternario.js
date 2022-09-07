// Tabla del operador ternario en javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

// Operador ternario, es una forma abreviada de escribir una sentencia if-else en una sola línea.
// La sintaxis es la siguiente:

//* condicion ? expresion1 : expresion2

// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// == igual que
// === igual que y del mismo tipo
// != diferente que

// Ejemplo 1
var edad = 18;
var mensaje = (edad >= 15) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Eres mayor de edad





// retornar minimo de dos numeros
function minimo(a, b) {
    return (a < b) ? a : b;// si a es menor que b, retornar a, sino retornar b
}

console.log(minimo(5, 10)); // 5
console.log(minimo(10, 7)); // 7
console.log(minimo(10, 10)); // 10
console.log(minimo(0, 0)); // 0

// Ejemplo 2
var x = 17;
var y = 10;

var mensaje = (x >= 21) ? "Eres mayor de edad" : (y >= 12) ? "Eres un adolescente" : "Eres un niño";
//* si x es mayor o igual a 21, retornar "Eres mayor de edad", sino si y es mayor o igual a 12, retornar "Eres un adolescente", sino retornar "Eres un niño"
console.log(mensaje); // Eres un niño



