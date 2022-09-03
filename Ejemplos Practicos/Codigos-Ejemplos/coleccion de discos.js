/*
Tenemos un objeto que representa parte de una coleccion de albunes musicales.

Cada album tiene un numero de identificacion unico (id),
asociado a otras propiedades.

No todos los albums tienen informacion completa.
*/

var colleccionDiscos = {
  2548: {
    tituloDelAlbum: "Slippery When Wet",
    artista: "Bon Jovi",
    canciones: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    tituloDelAlbum: "1999",
    artista: "Prince",
    canciones: ["1999", "Little Red Corvette"]
  },
  1245: {
    artista: "La 25",
  },
};

/* Definir una funcion actualizarDiscos que tome como parametros:
- discos (un objeto que representa la coleccion de discos).
- id.
ptopieadd ("artista" o "canciones").
- valor.

Completar la funcion implementando las siguientes reglas 
para modificar el objeto pasado a la funcion:

- Si "valor" es una cadena vacia, elimina la propiedad del album con el id dado.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero,
el album no tiene una propiedad "canciones", crea una propiedad "canciones" y asignale un arreglo vacio y
agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y,
"valor" no es una cadena vacia, agrega "valor" al final del arreglo de canciones del album correspondiente.

- Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", asigna el valor del parametro "valor" a la propiedad.
Si la propiedad no existe, crea una nueva propiedad y asignale el valor.

*/

// Ejemplo:
function actualizarDiscos(discos, id, propiedad, valor) { // funcion para actualizar los discos
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones" && discos[id].hasOwnProperty("canciones") === false) { // si la propiedad es "canciones" y el album no tiene una propiedad "canciones"
    discos[id][propiedad] = []; // crea una propiedad "canciones" y asignale un arreglo vacio
    discos[id][propiedad].push(valor); // agrega "valor" a ese arreglo
  } else {
    discos[id][propiedad] = valor; // asigna el valor del parametro "valor" a la propiedad
  }
  return discos; // retorna el objeto 
}

// se actualiza (elimina) el tituloDelAlbumdel id 2548
console.log(colleccionDiscos[2548].tituloDelAlbum); // Slippery When Wet
actualizarDiscos(colleccionDiscos, 2548, "tituloDelAlbum", ""); // elimina la propiedad "tituloDelAlbum"
console.log(colleccionDiscos[2548].tituloDelAlbum); // undefined


// se actualiza (agrega) el tituloDelAlbum del id 1245.
console.log(colleccionDiscos[1245].tituloDelAlbum); // undefined
actualizarDiscos(colleccionDiscos, 1245, "tituloDelAlbum", "La 25 RockAndRoll"); // agrega la propiedad "tituloDelAlbum" y le asigna el valor "La 25 RockAndRoll"
console.log(colleccionDiscos[1245].tituloDelAlbum); // La 25 RockAndRoll

// se actualiza (agrega) la cancion "La 25" al id 1245.
console.log(colleccionDiscos[1245].canciones); // undefined  (no tiene la propiedad "canciones")
actualizarDiscos(colleccionDiscos, 1245, "canciones", "La 25"); // agrega la propiedad "canciones" y le asigna el valor "La 25"
console.log(colleccionDiscos[1245].canciones); // [ 'La 25' ]


