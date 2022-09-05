
// Multiples Operadores Condicionales.

// Ejemplo 1

function compararNumeros(a, b) {
  return (a > b) ? "a es mayor que b" : (a < b) ? "a es menor que b" : "a y b son iguales";
}

console.log(compararNumeros(5, 10)); // a es menor que b
console.log(compararNumeros(10, 7)); // a es mayor que b
console.log(compararNumeros(10, 10)); // a y b son iguales

// otra manera de ponerla es: (para separar las condiciones)
function compararNumeros(a, b) {
  return (a > b) ? "a es mayor que b" // si a es mayor que b, retornar "a es mayor que b"
    : (a < b) ? "a es menor que b" // sino si a es menor que b, retornar "a es menor que b"
      : "a y b son iguales"; // sino retornar "a y b son iguales"
}


