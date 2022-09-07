
// Iteracion sobre un array con ciclo for.

var miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

for (var i = 0; i < miArray.length; i++) {//siempre se debe usar la propiedad length para iterar sobre un array.
    console.log("Iteracion " + i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    console.log(miArray[i]); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    total += miArray[i];
}

console.log(total); // 55


// Ejemplo 2

var lenguajes = ["javascript", "php", "python", "java"];

//convertirlo en mayuscula.
for (var i = 0; i < lenguajes.length; i++) {
    lenguajes[i] = lenguajes[i].toUpperCase(); //convertir a mayuscula.
}

console.log(lenguajes); // ["JAVASCRIPT", "PHP", "PYTHON", "JAVA"]


// contar numeros pares.

function contarPares(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { //si el numero es par.
            total++;
        }
    }

    return total; // retorna el total de numeros pares.
}

console.log(contarPares([1, 3, 5])); // 0
console.log(contarPares([2, 4, 6])); // 3
console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5