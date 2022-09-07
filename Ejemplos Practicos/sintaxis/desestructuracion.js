
// Sintaxis de desestructuracion //

// Esta sintaxis permite asignar nuevos nombres a las propiedades de un objeto o elementos de un array mientras se extraen de ellos.

// Ejemplo 1

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28
};

const { nombre, apellido, edad } = persona; // Extraemos las propiedades del objeto persona y las asignamos a las variables con el mismo nombre

console.log(nombre); // Juan
console.log(apellido); // Perez
console.log(edad); // 28

// Ejemplo 2

var coordenadas = {
  x: 4,
  y: 6,
  z: 12
};

//* accediendo por separado
var X = coordenadas.x; // 4
var Y = coordenadas.y; // 6
var Z = coordenadas.z; // 12


//* accediendo por desestructuracion
var { x, y, z } = coordenadas; // 4, 6, 12



