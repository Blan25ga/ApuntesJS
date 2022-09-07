
// Bucle do while //

// El bucle do while es un bucle que se ejecuta un numero determinado de veces (iteraciones).
// El bucle do while se ejecuta al menos una vez, y luego se repite mientras la condicion sea verdadera.
// La condicion se evalua al final de cada iteracion, por lo que el bucle do while siempre se ejecuta al menos una vez.


/*
El bucle do while se compone de 2 partes:
- Condicion: se evalua antes de cada iteracion del bucle. Si es verdadera, el bucle continua.
- Incremento: se ejecuta al final de cada iteracion del bucle.
*/

// Ejemplo bucle "while"

var x;
x = 5;

while (x < 10) {
    console.log(x); // 5, 6, 7, 8, 9
    x++;
}

// Ejemplo bucle "do while"

var x;
x = 5;

do {
    console.log(x); // 5, 6, 7, 8, 9 // se ejecuta al menos una vez (a diferencia del bucle while)
    x++;
} while (x < 10); // la condicion se evalua al final de cada iteracion,si es verdadera, el bucle continua.


// Ejemplo de bucle "do while" con un array

var x = 9;

do {
    console.log(x); //9
    x++;
} while (x < 10); // la condicion se evalua al final de cada iteracion,si es verdadera, el bucle continua.
//* la condicion es falsa, por lo que el bucle no se ejecuta.


// Condicion falasa desde el inicio con "Bucle while"

var x = 15; // valor de x 15

while (x < 10) { // la condicion es falsa desde el inicio
    console.log(x); // no se ejecuta, la condicion es falsa desde el inicio
    x++;
}


