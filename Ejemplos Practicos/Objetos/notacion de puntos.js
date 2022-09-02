// Accediendo por notacion de puntos.
// Esto cirve para acceder a las propiedades de un objeto.


var miObjeto = {
  propiedad1: "Hola",
  propiedad2: "Mundo",
  propiedad3: 123,
  propiedad4: true,
  propiedad5: [1, 2, 3, 4, 5],
  propiedad6: { nombre: "Juan", apellido: "Perez" },
  propiedad7: function () {
    return "Hola Mundo";
  }
};

miObjeto.propiedad1; // "Hola" 
miObjeto.propiedad2; // "Mundo"
miObjeto.propiedad3; // 123

console.log(miObjeto.propiedad1);
console.log(miObjeto.propiedad2);
console.log(miObjeto.propiedad3);
