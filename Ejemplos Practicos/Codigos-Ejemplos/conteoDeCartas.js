/*
Conteo de Cartas!!!!!!!!
*/

/*
En el Blackjack, las cartas tienen los siguientes valores:
Las cartas del 2 al 10 tienen su valor nominal.
Las figuras (J, Q, K) valen 10.
El As puede valer 1 o 11.

El siguiente codigo realizara lo siguiente:
- Cuando el conteo es positivo, el jugador deberia apostar alto.
- Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo.

Conteo de cartas:             Cartas:
- - - - - - - - - - - - - - - - - - - - -
      +1                   2, 3, 4, 5, 6
      0                    7, 8, 9
      -1                   10, J, Q, K, A

      MetA: definir una funcion para contar cartas.*/

/*
la funcion toma un paramatro carta que puede ser un numero o una cadena de caractares,
y luego aumentar o reducir el valor de la variable global conteo.
Siempre deacuardo al valor de la carta.

La funcion va a retorna una cadena de caracteres con el conteo actual y la dena:

- "Apostar" si si el conteo es positivo.
- "Mantenerse" si el conteo es 0 o negativo.

El conteo actual y la decision del jugador
("APOSTAR" o "MANTENERSE") deben estar separados por un espacio.*/


var conteo = 0; //* variable global

function cc(carta) {
  var decision; // "Apostar" o "Mantenerse" //* variable local

  switch (carta) { // switch para evaluar el valor de la carta
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++; // aumenta el conteo en 1 (como dice la tabla del ejemplo)
      break;
    //* ( en los valores 7, 8, 9 no se hace nada, por lo que el conteo no cambia)
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--; // disminuye el conteo en 1 (como dice la tabla del ejemplo)
      break;
  } //* fin del switch

  // funcion para retornar la cadena de caracteres segun la accion del conteo.
  if (conteo > 0) {
    decision = "Apostar"; //la variable global se aplica en la funcion
  } else {
    decision = "Mantenerse"; // si el conteo es 0 o negativo retorna "Mantenerse"
  }

  return conteo + " " + decision; // retorna el conteo y la accion
}

// Llamamos a la fucion cc() con los valores de las cartas para probarla.
console.log(cc(2)); // +1 "Apostar"
console.log(cc(3)); // +2 "Apostar"
console.log(cc(7)); // +2 "Apostar"
console.log(cc("K")); // +1 "Apostar"
console.log(cc("A")); // 0 "Mantenerse"

