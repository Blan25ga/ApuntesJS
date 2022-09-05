
// Ambitos de var y let.

// var es una variable global, let es una variable local.

//Ejemplo 1

var miVariableGlobal = 40; // variable global

console.log(miVariableGlobal); // 40
// se puede usar la variable global dentro de la funcion

function miFuncion() {
  console.log(miVariableGlobal); // 40, se puede usar la variable global dentro de la funcion

  //* si se declara una variable con el mismo nombre dentro de la funcion, se crea una variable local
  //* Esta solo puede se usada dentro de la funcion.
  var miVariableLocal = 20; // variable local
  console.log(miVariableLocal); // 20, se llama a la variable local dentro de la funcion
}

miFuncion(); // 40, se puede usar la variable global dentro de la funcion
console.log(miVariableGlobal); // 40, se puede usar la variable// global fuera de la funcion

// variable local fuera de la funcion
console.log(miVariableLocal); // ReferenceError: miVariableLocal is not defined
//* no se puede usar la variable local fuera de la funcion

// Ejemplo 2

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2, se llama a la variable i dentro del for

}

console.log("Variable: " + i);// su valor es 3, porque a la variable i se le asigno el valor de 3 en el for

//! Si a la variable en el "for", le asignamos el valor de let, la variable solo se puede usar dentro del for.

// Ejemplo 3

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2, se llama a la variable i dentro del for

}

console.log("Variable: " + i);// ReferenceError: i is not defined
//* "no se puede usar la variable " i " fuera del for porque se declaro con let"

// Variables dentro de condicional // 

// Ejemplo 1

var mostrarColor = true;

if (mostrarColor) {
  let color = "azul";
  console.log('"Mi color favorito es: "' + color); // "Mi color favorito es: azul", se llama a la variable color dentro del if
  //* solo se mostrara color dentro del codigo rodeado por las llaves.
}

console.log(color); // ReferenceError: color is not defined
//* no se puede usar la variable color fuera del if porque se declaro con let









