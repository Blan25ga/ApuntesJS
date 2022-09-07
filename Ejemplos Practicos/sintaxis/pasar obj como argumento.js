
//? Pasar objetos como argumentos

/*
Esto nos permite pasar un objeto como argumento a una funcion.
*/


// Ejemplo 1
//* Pasar un objeto como argumento a una funcion
var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28
}

function mostrarDatos({ nombre, apellido, edad }) {
  console.log(nombre, apellido, edad);
}

mostrarDatos(persona); // Juan Perez 28

// Ejemplo 2

var perfilDeCliente = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  nacionalidad: "Argentina",
  ciudad: "Buenos Aires",
}

const actulizarPerfil = ({ nombre, apellido, edad, nacionalidad, ciudad }) => {
  console.log(nombre); // Juan
  console.log(apellido); // Perez
  console.log(edad); // 28
  console.log(nacionalidad); // Argentina
  console.log(ciudad); // Buenos Aires

}

actulizarPerfil(perfilDeCliente); // Juan Perez 28 Argentina Buenos Aires


// Ejemplo 3

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
};

const puntoMedio = (newEstadistica) => (newEstadistica.max + newEstadistica.min) / 2.0; // 28.015
console.log(puntoMedio(estadisticas)); // 28.015

// Ejemplo anterior con desestructuracion de objetos
const puntoMedio2 = ({ max, min }) => (max + min) / 2.0; // 28.015
console.log(puntoMedio2(estadisticas)); // 28.015

//*se utilizo el puntoMedio2 para que no se confunda con el puntoMedio anterior, pero se puede utilizar el mismo nombre.
//* Ya que es el mismo ejemplo.
