
// Mutacion de arregllo declarado con const

const MI_ARREGLO = [1, 2, 3, 4, 5];
console.log(MI_ARREGLO); // [1, 2, 3, 4, 5]

MI_ARREGLO = [4, 5, 6, 7] // TypeError: no se puede CAMBIAR el valor a una constante
/*
indice 0: 1
indice 1: 2
indice 2: 3
indice 3: 4
indice 4: 5
*/
//* PERO " SI " SE LE PUEDE REASIGNAR UN VALOR ACCEDIENDO DE FORMA INDERECTA A EL POR SU INDICE.
MI_ARREGLO[0] = 6; // cambia el valor del indice 0 del arreglo a valor 6
MI_ARREGLO[1] = 7; // cambia el valor del indice 1 del arreglo a valor 7
MI_ARREGLO[2] = 8; // cambia el valor del indice 2 del arreglo a valor 8

console.log(MI_ARREGLO); // [6, 7, 8, 4, 5]

