// funciones 

//definicion de funcion, se usa la palabra reservada function.

function nombreFuncion1() {
    //codigo de la funcion, se ejecuta cuando se llama a la funcion
    console.log("Hola mundo!!"); //se ejecuta el codigo de la funcion
}

//llamada a la funcion
nombreFuncion1(); //se ejecuta el codigo de la funcion, mostrando el mensaje por consola.

//funcion con parametros
function sumar(a, b) { //a y b son parametros de la funcion
    let suma = a + b; //se realiza la suma de los parametros, y se guarda en la variable suma
    console.log("El resultado de " + a + " + " + b + " es: " + suma + ".")
}


sumar(2, 3); //se llama a la funcion sumar, con los parametros 2 y 3, y se ejecuta el codigo de la funcion


//! Variables con ambito global, para que se puedan usar en cualquier parte del codigo y se puedan modificar en cualquier parte del codigo

let variableGlobal = "Soy una variable global"; //se declara una variable global para poder usarla en cualquier parte del codigo

function mostrarVariableGlobal() {
    console.log(variableGlobal); //se muestra el valor de la variable global
}

mostrarVariableGlobal(); //se llama a la funcion mostrarVariableGlobal, y se muestra el valor de la variable global por consola


//! Variables con ambito local, para que solo se puedan usar en la funcion donde se declararon, y no se puedan modificar en ninguna otra parte del codigo

function mostrarVariableLocal() {
    let variableLocal = "Soy una variable local"; //se declara una variable local para poder usarla solo en esta funcion
    console.log(variableLocal); //se muestra el valor de la variable local
}
mostrarVariableLocal(); //se llama a la funcion mostrarVariableLocal, y se muestra el valor de la variable local por consola

console.log(mostrarVariableLocal); //! No se puede mostrar variable local por consola, porque solo se puede usar en la funcion donde se declaro.

//! Variable local u global con el mismo nombre, se usa la variable local, y no la global
let variableLocal = "Gabriel"; //?variable global
function mostrarVariableLocal() {
    let variableLocal = "Hernan"; //?variable local
    console.log(variableLocal);
}
mostrarVariableLocal(); //se muestra el valor de la variable local por consola, antes que el valor de la variable global.
// tiene prioridad la variable local, siempre que se llame a la funcion donde se declaro la variable local.

// si llamo a la variable por fuera de la funcion, se muestra el valor de la variable global
console.log(variableLocal); //se muestra el valor de la variable global por consola, "Gabriel"
