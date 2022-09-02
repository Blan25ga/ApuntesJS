
// Verificacion de si el objeto tiene dicha propiedad o no.

var miCuaderno = {
  marca: "Faber Castell",
  color: "Rojo",
  hojas: 100,
  precio: 1000,
  tieneTapa: true,
};

//hasOwnProperty() verifica si el objeto tiene la propiedad que le pasamos como argumento.

miCuaderno.hasOwnProperty("marca"); // true
console.log(miCuaderno.hasOwnProperty("marca")); // true

miCuaderno.hasOwnProperty("tapa"); // false
console.log(miCuaderno.hasOwnProperty("tapa")); // false

//metodo efectivo para cuando trabajamos con condicionales ya la funcion retorna un valor booleano.

function verificarPropiedad(objeto, propiedad) {
  if (objeto.hasOwnProperty(propiedad)) {
    return "Propiedad: " + objeto[propiedad]; //* retorna el valor de la propiedad
  } else {
    return "No existe la propiedad";
  }
}

verificarPropiedad(miCuaderno, "marca"); // "Propiedad: Faber Castell"
console.log(verificarPropiedad(miCuaderno, "marca")); // "Propiedad: Faber Castell"

verificarPropiedad(miCuaderno, "tapa"); // "No existe la propiedad"
console.log(verificarPropiedad(miCuaderno, "tapa")); // "No existe la propiedad"



