/* 
Tabla de verdad del operador AND
PARA : X && Y

| X  | Y | X && Y |
- - - - - - - - - - -
| T  | T |   T   |
| T  | F |   F   |
| F  | T |   F   |
| F  | F |   F   |

La exprecion solo es verdadera cuando X y Y son verdaderos
*/

// Ejemplo 1
var x = true;
var y = true;
var z = x && y;
console.log(z); // true

// Ejemplo 2
var x = true;
var y = false;
var z = x && y;
console.log(z); // false

// Ejemplo 3
var x = false;
var y = true;
var z = x && y;
console.log(z); // false
