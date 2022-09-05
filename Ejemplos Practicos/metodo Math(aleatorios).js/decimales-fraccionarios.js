
// Numeros Aleatorios, fraccionarios//

//* Math.random() devuelve un numero aleatorio entre 0 y 1

/* 
  Los numeros Aleatorios son numeros que no se pueden predecir con exactitud,
  porque son generados por un algoritmo que depende de un numero inicial, llamado semilla.
  Si se usa la misma semilla, el algoritmo generara el mismo numero aleatorio.
  Esto es util para juegos, donde se necesita un numero aleatorio, pero se necesita que sea el mismo
  numero aleatorio cada vez que se juegue.
  */

// A estos numeros se puede accder con la funcion Math.random().
//* Math.random() devuelve un numero aleatorio entre 0 y 1.
//* Math.random() nunca devuelve 1, pero si devuelve 0.
//* Math.random() devuelve un numero aleatorio con decimales.

function generarFuncionAleatoria() { // funcion que genera un numero aleatorio

  return Math.random(); // devuelve un numero aleatorio entre 0 y 1

}
console.log(generarFuncionAleatoria());// llama un nmero con coma entre 0 y 1, nunca llama al 1.


