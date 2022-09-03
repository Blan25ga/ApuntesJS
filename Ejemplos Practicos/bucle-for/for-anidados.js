
// Ciclo for anidado
// El ciclo for anidado es un ciclo for dentro de otro ciclo for

// Ejemplo 1

var miArray = [[1, 2], [3, 4], [5, 6]]; // array de dos dimensiones. (matriz)

for (var i = 0; i < miArray.length; i++) { //itera sobre el array principal.
  console.log("> Nueva Iteracion") // 0, 1, 2  //* muestra el ejemplo debajo, los enumera por elemento.
  var miarregloAnidado = miArray[i];           //* [1, 2], [3, 4], [5, 6]
  console.log("Arreglo: " + miarregloAnidado)// muestra por console el arreglo anidado.

  for (var j = 0; j < miarregloAnidado.length; j++) { //itera sobre el array anidado.
    console.log(">>> Cicloanidado")
    console.log("Elemento"); // 1, 2, 3, 4, 5, 6
    console.log(miarregloAnidado[j]); // 1, 2, 3, 4, 5, 6
    //*uno cada elemento en un array entero.
  }
}




