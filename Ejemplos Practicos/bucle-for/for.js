
// Bucle For //

//* El bucle for es un bucle que se ejecuta un numero determinado de veces (iteraciones).

/*El bucle for se compone de 3 partes:

- Inicializacion: se ejecuta una vez antes de que el bucle comience.
- Condicion: se evalua antes de cada iteracion del bucle. Si es verdadera, el bucle continua.
- Incremento: se ejecuta al final de cada iteracion del bucle.

*/
// Ejemplo de un bucle for:
for (inicializacion; condicion; incremento) {
    // codigo a ejecutar
}

// Ejemplo de un bucle for que imprime los numeros del 0 al 9:

var miArray = [];
for (var i = 0; i <= 9; i++) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    miArray.push(i);
}
console.log(miArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // el array se llena con los numeros del 0 al 9

// Ejemplo de un bucle for que imprime los numeros del 5 al 1:
for (var i = 5; i >= 1; i--) {
    console.log(i); // 5, 4, 3, 2, 1

}

//* Llamada a numeros pares.
var miArray2 = [];
for (var i = 0; i <= 10; i += 2) {
    miArray2.push(i);
}
console.log(miArray2); // [0, 2, 4, 6, 8, 10] // el array se llena con los numeros pares del 0 al 10


//* Ejemplo de llamada a numeros impares.
var miArray3 = [];
for (var i = 1; i <= 10; i += 2) {
    miArray3.push(i);
}
console.log(miArray3); // [1, 3, 5, 7, 9] // el array se llena con los numeros impares del 0 al 10
