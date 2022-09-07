
// funciones en objetos.

// Ejemplo 1

const persona = {
  nombre: "Juan",
  edad: 20,
  presentarse: function () {
    return (`Hola, mi nombre es ${this.nombre}`);// la palabra this hace referencia al objeto que contiene la funcion.
  }
};

// llamada a la finciona
console.log(persona.presentarse()); // Hola, mi nombre es Juan


//* simplificando el codigo anterior
const persona1 = {
  nombre: "Juan",
  edad: 20,
  presentarse() {
    return (`Hola, mi nombre es ${this.nombre}`);// la palabra this hace referencia al objeto que contiene la funcion.
  }
};

// llamada a la finciona
console.log(persona1.presentarse()); // Hola, mi nombre es Juan

