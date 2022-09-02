/* 
  Tabla de la verdad del operador OR (||)
  pARA X || Y 

  |  X  |  Y  | X || Y |
- - - - - - - - - - - - - - 
  |  T  |  T  |   T  |

  |  T  |  F  |   T  |

  |  F  |  T  |   T  |      

  |  F  |  F  |   F  |

  La exprecion es verdadera si alguno de los dos operadores o ambos son verdaderos.
  La exprecion es falsa si ambos son falsos.
*/

// Ejemplo 1
var x = 0;
var y = 0;
var z = x || y;
console.log(z); // 0

// Ejemplo 2
var x = 0;
var y = 1;
var z = x || y;
console.log(z); // 1

// Ejemplo 3
var x = 1;
var y = 0;
var z = x || y;
console.log(z); // 1

// Ejemplo 4
var x = 1;
var y = 1;
var z = x || y;
console.log(z); // 1


