/*
Codigo de golf.
*/

/* En el juego de golf cada hoyo tiene un par que representa el numero de promedio degolpes,
que se espera que haga el golfista para introducir la bola en el hoyo. 

Hay un nombre difrente dependiendo de qué tan por encima o por debajo del par esten los golpes.

Tu funcion tomará los argumentos par y golpes.

Devuelve la cadena correspondiente a su resultado de golpes segun muestra la tabla en orden de mayor a menor prioridad.

Golpes                     retornar
1                           "Hole-in-one!" 
<= par - 2                  "Eagle"
par - 1                     "Birdie"
par                         "Par"
par + 1                     "Bogey"
par + 2                     "Double Bogey"
>= par + 3                  "Go Home!"
par y golpes seran siempre numeros enteros positivos.
*/

function puntaje(par, golpes) {
  if (golpes == 1) { // 
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}

console.log(puntaje(5, 4)); // "Birdie"
console.log(puntaje(4, 1)); // "Hole-in-one!"
console.log(puntaje(4, 2)); // "Eagle"
console.log(puntaje(5, 2)); // "Eagle"
console.log(puntaje(4, 3)); // "Birdie"
console.log(puntaje(4, 4)); // "Par"
console.log(puntaje(1, 1)); // "Hole-in-one!"
console.log(puntaje(5, 5)); // "Par"
console.log(puntaje(4, 5)); // "Bogey"
console.log(puntaje(4, 6)); // "Double Bogey"
console.log(puntaje(4, 7)); // "Go Home!"
console.log(puntaje(5, 9)); // "Go Home!"




/*
puntaje(4, 1) deberia retornar "Hole-in-one!"
puntaje(4, 2) deberia retornar "Eagle"
puntaje(5, 2) deberia retornar "Eagle"
puntaje(4, 3) deberia retornar "Birdie"
puntaje(4, 4) deberia retornar "Par"
puntaje(1, 1) deberia retornar "Hole-in-one!"
puntaje(5, 5) deberia retornar "Par"
puntaje(4, 5) deberia retornar "Bogey"
puntaje(4, 6) deberia retornar "Double Bogey"
puntaje(4, 7) deberia retornar "Go Home!"
puntaje(5, 9) deberia retornar "Go Home!"
*/







