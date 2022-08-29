// Tabla del operador ternario en javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator

// Operador ternario, es una forma abreviada de escribir una sentencia if-else en una sola línea.
// La sintaxis es la siguiente:

// condicion ? expresion1 : expresion2

// Ejemplo 1
var edad = 18;
var mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // Eres mayor de edad


// Ejemplo 2
var edad = 18;
var mensaje = (edad >= 18) ? "Eres mayor de edad" : (edad >= 12) ? "Eres un adolescente" : "Eres un niño";
console.log(mensaje); // Eres mayor de edad

// Ejemplo 3
var edad = 18;
var mensaje = (edad >= 18) ? "Eres mayor de edad" : (edad >= 12) ? "Eres un adolescente" : "Eres un niño"; // Eres mayor de edad
console.log(mensaje); // Eres mayor de edad


