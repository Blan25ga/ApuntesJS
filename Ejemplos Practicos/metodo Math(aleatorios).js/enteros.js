// Aleatorios enteros //

//Pra obtener un numero aleatorio entero entre un rango de valores, podemos usar la funcion Math.floor() y Math.random().
//Math.floor() redondea un numero hacia abajo al entero mas cercano y Math.random() devuelve un numero aleatorio entre 0 y 1.

//Para obtener un numero aleatorio entero entre 0 y 9, podemos multiplicar Math.random() por 10.

//* el metodo Math.floor() redondea hacia abajo el numero aleatorio multiplicado por 10, para que el numero sea un entero entre 0 y 9.

var aleatorioEntre0y20 = Math.floor(Math.random() * 20);//* el numero aleatorio sera un entero entre 0 y 19.
console.log(aleatorioEntre0y20);// 13, //* el numero va cambiando cada vez que se ejecuta el programa.

// Generar funcion que devuelva un entero aleatorio.
function aleatorioEntre(limiteSuperior) {
    // se genera un entero aleatorio en tre 0 y limiteSuperior (sin incluirlo, por eso el +1)
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(aleatorioEntre(6)); // 3

// Ejemplo con bucle for.
for (var i = 0; i < 10; i++) { // se ejecuta 10 veces
    console.log(aleatorioEntre(10)); // 3, 5, 2, 8, 9, 0, 1, 4, 7, 6
}

// Ejemplo con bucle while.
var i = 0;
while (i < 5) {
    console.log(aleatorioEntre(5)); // 0, 5, 3, 8, 9
    i++;
}

// Ejemplo con bucle do while.
var i = 0;
do { //
    console.log(aleatorioEntre(6)); // 3, 5, 2, 4, 1, 0
    i++;
}
while (i < 6); // se ejecuta 6 veces


