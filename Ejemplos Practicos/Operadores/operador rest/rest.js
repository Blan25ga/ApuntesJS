
// Operador Rest (...args) // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/parametros_rest

/** 

El Operador Rest permite que una función acepte un número indefinido de argumentos como un array,
lo que nos permite recorrerlo con forEach, map, filter, etc.

**/


// Ejemplo 1
function sumar(a, b, ...c) { // ...c es el operador rest, que representa un número indefinido de argumentos como un array.
    let resultado = a + b;
    c.forEach(function (n) { // Recorremos el array c con forEach, y sumamos cada elemento al resultado.
        resultado += n; // resultado = resultado + n; "n" es cada elemento del array "c"
    });
    return resultado;
}
console.log(sumar(1, 2, 3, 4, 5)); // 15

// Ejemplo 2

const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0); // args es un array, y reduce() es un método de los arrays que recibe una función y un valor inicial, y devuelve un valor.
}

console.log(sumar(1, 2, 3, 4, 5)); // 15
sumar(1, 2, 3, 4, 5); // 15
sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55 