/*
Patron de retorno anticipado
*/

function miFuncion() {
    console.log("Hola");
    return "Mundo"; // si no se pone nada, devuelve undefined
    console.log("Adios");
}

miFuncion(); // Hola
console.log(miFuncion()); // Mundo

//Ejemplo 2

function calcularRaizCuadrada(numero) { // si no se pone nada, devuelve undefined.
    if (numero < 0) { // si el numero es menor que 0, devuelve undefined.
        return "No se puede calcular la raiz cuadrada de un numero negativo";
    }
    return Math.sqrt(numero);
}

console.log(calcularRaizCuadrada(9)); // 3
console.log(calcularRaizCuadrada(-9)); // No se puede calcular la raiz cuadrada de un numero negativo





