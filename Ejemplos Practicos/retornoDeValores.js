// Retorno de variables.

// Return es la palabra reservada que se usa para retornar un valor de una funcion.

// se usa para retornar un valor de una funcion, y poder usarlo en cualquier parte del codigo.

function sumar(a, b) {
  return a + b; //se retorna el valor de la suma de los parametros a y b
}

console.log(sumar(2, 3)); //se muestra el valor de la suma de los parametros 2 y 3 por consola


// Asignacion de valor retornado a una variable.

let resultado = sumar(2, 3); //se asigna el valor retornado de la funcion sumar, a la variable resultado

console.log(resultado); //se muestra el valor de la variable resultado por consola

// nuevo ejemplo:
function creaCadenaConMeta(lenguajeDeProgramacion) { //se crea la funcion creaCadenaConMeta, con el parametro lenguajeDeProgramacion

  return 'Mi meta es aprender' + lenguajeDeProgramacion; //se retorna la cadena de texto con el valor del parametro lenguajeDeProgramacion
}

let miMeta = creaCadenaConMeta('Javascript'); //se asigna el valor retornado de la funcion creaCadenaConMeta, a la variable miMeta
// let miMeta = 'Mi meta es aprender Javascript'; //se asigna el valor retornado de la funcion creaCadenaConMeta, a la variable miMeta
