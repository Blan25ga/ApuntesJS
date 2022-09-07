
// Funcion flecha con parametros

const sumarTres = function (x) {
    return x + 3;
};

console.log(sumarTres(5)); // 8, //*5 + 3 = 8

// Transformando la funcion anterior en una funcion flecha

const sumarTres2 = (x) => x + 3; // Si la funcion solo tiene una linea de codigo, se puede omitir las llaves y el return
console.log(sumarTres2(5)); // 8, //* 5 + 3 = 8

sumarTres2(7); // 10, //* 7 + 3 = 10

// Ejemplo 3

const concatenar = function (arr1, arr2) { // funcion anonima, tiene dos parametros
    return arr1.concat(arr2);
};

console.log(concatenar([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Transformando la funcion anterior en una funcion flecha

const concatenar2 = (arr1, arr2) => arr1.concat(arr2); // Si la funcion solo tiene una linea de codigo, se puede omitir las llaves y el return
console.log(concatenar2([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

concatenar2([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// Ejemplo 4
const sumar = function (a, b) {
    let num = 6;
    return a + b + num;
};

console.log(sumar(1, 2)); // 9, //* 1 + 2 + 6 = 9

// Transformando la funcion anterior en una funcion flecha
//* Lo que Hacemos es: borramos la palabra function y el nombre de la funcion, y despues de los parametros, agregamos una flecha =>
const sumar2 = (a, b) => { // Si la funcion tiene mas de una linea de codigo, se debe usar las llaves y el return
    let num = 6;
    return a + b + num;
};

console.log(sumar2(1, 2)); // 9, //* 1 + 2 + 6 = 9
sumar2(1, 2); // 9, //* 1 + 2 + 6 = 9


