
// Actualizacion de porpiedades en objetos.

// sirve de ejemplo para el uso de la propiedad this.

var mochila = {
  contenido: ["linterna", "agua", "comida"],
  peso: 10,
  pesoMaximo: 20,
  color: "negra",
}

console.log(miObjeto.contenido); // ["linterna", "agua", "comida"] // muestra el contenido actual.
// cambiar el contenido.
miObjeto.contenido = ["cuadernos"];
console.log(miObjeto.contenido); // ["cuadernos"]
//*se muestra el contenido de la mochila y se cambia por cuadernos.

// agregar un elemento al contenido.
miObjeto.contenido.push("lapiceras");
console.log(miObjeto.contenido); // ["cuadernos", "lapiceras"]
//*se agrega un elemento al contenido de la mochila.

// eliminar un elemento del contenido.
miObjeto.contenido.pop();
console.log(miObjeto.contenido); // ["cuadernos"]
//*se elimina el ultimo elemento del contenido de la mochila.













