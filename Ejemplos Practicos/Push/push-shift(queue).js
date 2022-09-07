// permanece en fila. (QUEUE)

/* Definir funcion proximoEnFila que tome un arreglo (arreglo) y un numero (elemento)
como argumentos. Agrega el numero al final de arreglo y luego elimina el primer elemento del arreglo.
La funcion proximoEnFila debe retornar el elemento que fue eliminado. */

function proximoEnFila(arreglo, elemento) { //se crea la funcion proximoEnFila, con los parametros arreglo y elemento
    arreglo.push(elemento); //se agrega el elemento al final del arreglo
    return arreglo.shift(); //se elimina el primer elemento del arreglo y se retorna el elemento eliminado
}

let miArreglo = [1, 2, 3, 4, 5]; //se crea el arreglo miArreglo
console.log('Antes: ' + JSON.stringify(miArreglo)); // antes : [1,2,3,4,5] //*se muestra el arreglo miArreglo por consola
//* json.stringify() convierte un objeto o valor de javascript en una cadena de texto JSON.

console.log(proximoEnFila(miArreglo, 6)); //1 //*se muestra el elemento eliminado por consola


console.log('Despues: ' + JSON.stringify(miArreglo));// Despues : [2,3,4,5,6] //*se muestra el arreglo miArreglo por consola
