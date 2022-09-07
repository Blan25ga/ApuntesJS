
/* Plantillas literales o plantillas de cadenas. 

Características de las plantillas literales:
-Se usan comillas invertidas, backtick (``), en lugar de comillas simples o dobles.
-Pueden contener comillas simples y dobles sin necesidad de escaparlas.
-Las lineas se preservan como se escriben en el codigo,
-Para reeemplazar una variable o expresion se usa ${variable} o ${expresion}.
-Dentro de ${} se pueden usar expresiones complejas.
-Para escribir una plantilla literal en varias lineas se usa el caracter de escape \n.

*/

// Ejemplo 1
var nombre = "Juan";
var apellido = "Perez";
var edad = 30;
var mensaje = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;

console.log(mensaje); // Hola, mi nombre es Juan Perez y tengo 30 años.

// Ejemplo 2

const arreglo = [1, 2, 3, 4, 5];
const mensaje = `El arreglo tiene ${arreglo.length} elementos.`;
console.log(mensaje); // El arreglo tiene 5 elementos.
console.log(`El arreglo es ${JSON.stringify(arreglo)}`); // El arreglo es [1,2,3,4,5]
//* el JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.


// Ejemplo 3

// reemplazar el valor de las propiedades de un objeto.

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
};

const mensaje = `Hola, mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años.`;
console.log(mensaje); // Hola, mi nombre es Juan Perez y tengo 30 años.

