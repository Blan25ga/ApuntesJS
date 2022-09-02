
// Utilizacion de objeto para reeemplazar sentencia switch.

// Creamos un objeto con las propiedades que seran las opciones de la sentencia switch.

function buscarElementoQuimico(simbolo) { // Funcion que recibe el simbolo del elemento quimico.
  /*var elementoQuimico = "";*/

  var simboloQuimico = { // Objeto con las propiedades que seran las opciones de la sentencia switch.
    H: "Hidrogeno",
    He: "Helio",
    Li: "Litio",
    Be: "Berilio",
    B: "Boro",
  };




  /* switch (simbolo) {
     case "H":
       elementoQuimico = "Hidrogeno";
       break;
     case "He":
       elementoQuimico = "Helio";
       break;
     case "Li":
       elementoQuimico = "Litio";
       break;
     case "Be":
       elementoQuimico = "Berilio";
       break;
     case "B":
       elementoQuimico = "Boro";
       break;
   }

  return elementoQuimico;*/
  return simboloQuimico[simbolo]; // Devuelve el valor de la propiedad del objeto simboloQuimico que tenga el nombre del simbolo.

}

console.log(buscarElementoQuimico("H")); // Hidrogeno
console.log(buscarElementoQuimico("He")); // Helio
console.log(buscarElementoQuimico("Li")); // Litio


