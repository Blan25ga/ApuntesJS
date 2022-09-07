/*
Clausala "else if".  
*/
var x = 1;

if (x == 1) {
    console.log("x es igual a 1"); // esta linea se ejecuta
} else if (x == 2) {
    console.log("x es igual a 2");// esta linea no se ejecuta
} else {
    console.log("x no es igual a 1 ni a 2");// Si no se cumple ninguna de las condiciones anteriores, se ejecuta esta linea
}

//Ejemplo 2

function clasificarValor(valor) {
    if (valor % 2 == 0) { //*si el valor es par se ejecuta esta linea
        console.log("El valor es par");
    } else if (valor % 2 == 1) { // *si el valor es impar se ejecuta esta linea
        console.log("El valor es impar"); // esta linea se ejecuta
    } else {
        console.log("El valor no es un numero");
    }
}

clasificarValor(1); // El valor es impar
clasificarValor(2); // El valor es par
clasificarValor("hola"); // El valor no es un numero
