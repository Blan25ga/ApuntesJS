
// Definicion de clases.

// una clase es un tipo de objeto, y como tal puede tener propiedades y metodos.
// las clases son una forma de definir un tipo de objeto, y luego crear objetos de ese tipo.

//* la sintaxis para definir una clase es la siguiente:

class NombreDeLaClase { // codigo para inicializar el objeto
  constructor() {
    // codigo para inicializar el objeto
  }
}

//* la palabra clave class define una clase y el nombre de la clase es el nombre de la clase.
//* el constructor es un metodo especial para crear e inicializar un objeto creado con una clase.
//* para crear un objeto de una clase se usa la palabra clave new.

// Ejemplo 1
class Transbordador {//? En las clases se sugiere que el nombre de la clase empiece con mayuscula.
  constructor(planeta) { // el constructor recibe un parametro
    this.planeta = planeta; // el parametro se asigna a una propiedad del objeto(this.planeta)
  }
}

let miTransbordador = new Transbordador("Marte"); // se crea un nuevo transbordador con el planeta "Marte", que se asigna a la propiedad planeta del objeto.
console.log(miTransbordador.planeta);
//* se accede a la propiedad planeta del objeto miTransbordador, nos da como resultado "Marte"

let apolo = new Transbordador("Jupiter"); // se crea un nuevo transbordador con el planeta "Jupiter", que se asigna a la propiedad planeta del objeto.
console.log(apolo.planeta); // Jupiter



// Ejemplo 2
class Mascota {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }
}

let miMascota = new Mascota("Firulais", "Perro");
console.log(miMascota.nombre); // Firulais
console.log(miMascota.especie); // Perro
//? podemos crear tantos objetos de la clase Mascota como queramos y acceder a sus propiedades.

