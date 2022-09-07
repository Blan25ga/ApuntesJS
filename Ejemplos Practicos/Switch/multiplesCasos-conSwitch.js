/*
switch con multiples casos
*/
function clasificarNumeros(valor) {
    var numeros;
    switch (valor) {
        case 1:
            numeros = "Bajo";
            break;
        case 2:
        case 3:
            numeros = "Medio"; // si el valor es 2 o 3 se ejecuta este caso.
            break;
        case 4:
        case 5:
        case 6:
            numeros = "Alto";
            break;
    }
    return numeros;
}
console.log("El numero es: " + clasificarNumeros(1)); // El numero es: Bajo
console.log("El numero es: " + clasificarNumeros(2)); // El numero es: Medio
console.log("El numero es: " + clasificarNumeros(3)); // El numero es: Medio
console.log("El numero es: " + clasificarNumeros(4)); // El numero es: Alto
console.log("El numero es: " + clasificarNumeros(5)); // El numero es: Alto
console.log("El numero es: " + clasificarNumeros(6)); // El numero es: Alto

