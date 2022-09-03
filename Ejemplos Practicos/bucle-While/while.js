
// Ciclo while
// El bucle while se ejecuta mientras la condición sea verdadera

// Ejemplo 1

var i = 0;

while (i < 10) { // mientras i sea menor a 10
  console.log(i); // imprime el valor de i
  i++; // incrementa el valor de i en 1, es lo mismo que i = i + 1
}

//* si no incrementamos el valor de i, el bucle se ejecutara infinitamente

// Ejemplo 2

var miArreglo = [];

var i = 0;
console.log(miArreglo); // []

while (i < 10) {  // mientras i sea menor a 10
  miArreglo.push(i); // agrega el valor de i al final del arreglo
  i++;
}

console.log(miArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]




