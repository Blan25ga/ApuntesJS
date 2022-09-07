// crear una lista de 3 contactos que contengan como datos:
//nombre, apellido, numero de telefono, y gustos.

var contactos = [
    {
        nombre: "Juan",
        apellido: "Perez",
        telefono: "123456789",
        gustos: ["futbol", "pizza", "natacion"],
    },
    {
        nombre: "Maria",
        apellido: "Gomez",
        telefono: "987654321",
        gustos: ["programacion", "ver series"],
    },
    {
        nombre: "Pedro",
        apellido: "Gonzalez",
        telefono: "456789123",
        gustos: ["tenis", "handball"],
    },
];

//definier funcion que acceda a la la propiedad de cualquier conyacto.
function accederContacto(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) { //recorrer la lista de contactos
        if (contactos[i].nombre === nombre) { //si el nombre del contacto es igual al nombre pasado por parametro
            return contactos[i][propiedad] || "No existe esa propiedad"; //retornar la propiedad del contacto
        }
    }
    return "No existe ese contacto"; //si no existe el contacto
}

accederContacto("Juan", "gustos"); // ["futbol", "pizza", "natacion"].

console.log(accederContacto("Juan", "gustos")); //retorna los gustos de Juan, si no existe retorna "No existe ese contacto"
console.log(accederContacto("Juan", "apellido")); //retorna el apellido de Juan, si no existe retorna "No existe esa propiedad"
console.log(accederContacto("Juan", "edad")); //retorna "No existe esa propiedad"

console.log(accederContacto("Patricio", "apellido")) //retorna "No existe ese contacto"
