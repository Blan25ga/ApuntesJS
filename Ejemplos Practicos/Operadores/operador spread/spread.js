
// Operador Spread (...) // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator

/*

El operador spread (...) permite que un objeto iterable como un array o una cadena,
sea expandido en lugares donde cero o más argumentos (para llamadas a funciones) o elementos (para arrays literales) son esperados,
o un objeto sea expandido en lugares donde cero o más pares de valores clave (para objetos literales) son esperados.

*/

// Ejemplo 1

var partes = ['ombros', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés']; //* en el ejemplo, el operador spread (...) se usa para expandir un array en un nuevo array.

console.log(musica); // ["cabeça", "ombros", "joelhos", "e", "pés"]


// Ejemplo 2

const numeros = [1, 2, 3];
function sumar(a, b, c) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3

  return a + b + c;
}

console.log(sumar(...numeros)); // 6, el opreador spread (...) pone en cinjunto los 3 numeros en la funcion sumar.

