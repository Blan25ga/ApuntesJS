
//Eliminacion de propiedades en objetos.

var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  peso: 75
};

console.log(persona); // {nombre: "Juan", apellido: "Perez", edad: 28, peso: 75}

// Eliminamos la propiedad peso del objeto persona.
delete persona.peso;

// Mostramos el objeto persona.
console.log(persona); // {nombre: "Juan", apellido: "Perez", edad: 28}
