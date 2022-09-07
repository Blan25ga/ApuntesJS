
// desestructuracion de objetos anidados

const usuario = {
    Juan: {
        edad: 28,
        apellido: "Perez",
        correo: "juanpepe@gmail.com"
    },
};

const { Juan: { edad, apellido, correo } } = usuario; // Extraemos las propiedades del objeto usuario y las asignamos a las variables con el mismo nombre

console.log(edad); // 28
console.log(apellido); // Perez
console.log(correo); // "juanpepe@gmail.com"

// Ejemplo 3

const PRONOSTICO_LOCAL = {
    ayer: { min: 61, max: 75 },
    hoy: { min: 64, max: 77 },
    mañana: { min: 68, max: 80 }
};

//*sintaxis de desestructuracion
const {
    hoy: { min: minHoy, max: maxHoy } // asignamos nuevos nombres a las propiedades
} = PRONOSTICO_LOCAL;

console.log(minHoy); // 64
console.log(maxHoy); // 77

