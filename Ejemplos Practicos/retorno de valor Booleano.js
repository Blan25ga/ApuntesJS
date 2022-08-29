/* 
Retorno de valor booleano.
Se ahorra codigo al no utilizar el "if" y el "else".
Utilizamos directamente dentro del "return" la condicion.
*/

function esMenorQue(a, b) { // si se cumple la condicion, devuelve true, sino devuelve false.
  return a < b;
}

console.log(esMenorQue(10, 15)); // true
console.log(esMenorQue(15, 10)); // false











