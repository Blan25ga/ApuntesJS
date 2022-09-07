
//?Getters and setters

/*
-Getters y setters son métodos que obtienen y establecen los valores de las propiedades de un objeto.

-Los getters son métodos que "obtienen" el valor de las propiedades de un objeto.

-Setters son métodos que "establecen" el valor de las propiedades de un objeto.

-Los getters y setters son importantes porque ocultan detalles de implementación internos.

-Los getters y setters son importantes porque controlan el acceso a las propiedades de un objeto.

-Los getters y setters son importantes porque validan o establecen un valor de las propiedades de un objeto.

-Los getters y setters son importantes porque pueden realizar una acción en los datos al obtener o establecer un valor.

*/

//* si agregamos en guion bajo al principio de un nombre de propiedad, podemos hacer que esa propiedad sea privada.

// Ejemplo:
var persona = {
    nombre: "John",
    apellido: "Doe",
    edad: 50,
    _idioma: "español", // propiedad privada
};

console.log(persona._idioma); // "español", 
// podemos acceder a la propiedad privada, pero no es recomendable.

//* si queremos acceder a la propiedad privada, podemos usar un getter.

// Ejemplo:
var persona = {
    nombre: "John",
    apellido: "Doe",
    edad: 50,
    _idioma: "español", // propiedad privada
    get idioma() {
        return this._idioma;
    }
};

console.log(persona.idioma); // "español",
// ahora podemos acceder a la propiedad privada usando un getter.


//Ejemplo 2

class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {//getter, obtiene el valor de la propiedad
        return this._autor;
    }

    set autor(nuevoAutor) { //setter, establece el valor de la propiedad
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("John Doe");//creamos un objeto de la clase Libro, con el autor "John Doe"
console.log(libro.autor); // "John Doe"

libro.autor = "Gabriel Blanco";//cambiamos el valor de la propiedad, gracias al setter
console.log(libro.autor); // "Gabriel Blanco"


