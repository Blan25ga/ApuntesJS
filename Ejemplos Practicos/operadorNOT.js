/*
Tabla logica para el operador NOT 
pARA : !X 

|  X  |  !X  |
- - - - - - - - 
|  T  |  F  |
|  F  |  T   | 

*/

//EJEMPLO:

let a = 8;
// !(a > 8) --> !true --> false
console.log(!(a > 5)); // false
console.log(!(a > 8)); // true
console.log(!(a > 10)); // true

// Ejemplo 1

var x = true;
var y = !x;
console.log(y); // false

// Ejemplo 2

var x = false;
var y = !x;
console.log(y); // true

// Ejemplo 3

var x = 1;
var y = !x;
console.log(y); // false

