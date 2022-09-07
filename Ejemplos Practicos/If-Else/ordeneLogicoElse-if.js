/*
Condiciones de orden logicos
*/

//ejemplo:

function calsificaValor(valor) {
    if (valor < 5) {                 //si el valor es menor a 5 se ejecuta esta linea
        console.log("Menor que 5");
    } else if (valor < 10) {          //si el valor es menor a 10 se ejecuta esta linea
        console.log("El valor es menor a 10");
    } else {
        console.log("Mayor o igual a 10");
    }
}

calsificaValor(2); // Menor que 5
calsificaValor(7); // El valor es menor a 10
calsificaValor(10); // Mayor o igual a 10

//Ejemplo 2

function clasificarValor2(valor2) {
    if (valor2 < 5) {                 //si el valor es menor a 5 se ejecuta esta linea
        console.log("Menor que 5");
    } else if (valor2 < 10) {          //si el valor es menor a 10 se ejecuta esta linea
        console.log("El valor es menor a 10");
    } else if (valor2 < 15) {          //si el valor es menor a 15 se ejecuta esta linea
        console.log("El valor es menor a 15");
    } else {
        console.log("Mayor o igual a 15");
    }
}

clasificarValor2(2); // Menor que 5
clasificarValor2(7); // El valor es menor a 10
clasificarValor2(10); // El valor es menor a 15
clasificarValor2(20); // Mayor o igual a 15

