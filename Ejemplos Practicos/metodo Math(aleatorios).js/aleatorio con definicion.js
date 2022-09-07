
// Numeros enteros aleatorios con rango especifico.

function aleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;// Math.floor() redondea hacia abajo.

    //* los valores * (max - min + 1) + min; son los valores que se pueden obtener.
}

console.log(aleatorioEntre(6, 10)); // 9
console.log(aleatorioEntre(1, 5)); // 2
console.log(aleatorioEntre(2, 10)); // 5
console.log(aleatorioEntre(7, 10)); // 10 
//* se le otorga los valores de entre que numeros queremos obtener el entero. (7, 10).

//Ejemplo de uso de Math.floor() y Math.random() para obtener un numero aleatorio entre 1 y 10.

