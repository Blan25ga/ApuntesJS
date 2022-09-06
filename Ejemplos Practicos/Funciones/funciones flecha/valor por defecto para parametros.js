
//? Valor por defecto para parametros.

// para asignar un valor por defecto dentro de la función, se usa el operador = y el valor por defecto.

function saludar(nombre = "visitante") {
  console.log(`Hola ${nombre}`); // Hola visitante
  //* el simbolo $ es para interpolar variables dentro de un string.
}

saludar("Juan"); // Hola Juan
saludar(); // Hola visitante // si no se le pasa un argumento, se usa el valor por defecto.

// Ejemplo 2
const incrementar = (numero, valor = 1) => numero + valor;

console.log(incrementar(5)); // 6 // si no se le pasa un argumento, se usa el valor por defecto.
console.log(incrementar(5, 2)); // 7 // se le pasa un argumento, se usa ese valor.


