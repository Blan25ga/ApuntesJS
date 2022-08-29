// convinacion de operadores cosndicionales con logicos

var edad = 18;
var sexo = "M";
var nombre = "Juan";

if (edad >= 18 && sexo == "M" && nombre == "Juan") { // && es un operador logico que significa "y"
  console.log("Puede pasar"); // si se cumple la condicion se ejecuta
} else {
  console.log("No puede pasar"); // si no se cumple la condicion se ejecuta
}


// Ejemplo 2

var edad1 = 18;
var sexo1 = "M";
var nombre1 = "Juan";

if (edad1 >= 18 || sexo1 == "M" || nombre1 == "Juan") { // || es un operador logico que significa "o"
  console.log("Puede pasar"); // si se cumple la condicion se ejecuta
} else {
  console.log("No puede pasar"); // si no se cumple la condicion se ejecuta
}

// Ejemplo 3

var edad2 = 18;
var sexo2 = "M";
var nombre2 = "Juan";

if (edad2 > 18 && sexo2 == "M" || nombre2 == "Juan") { // || es un operador logico que significa "o"
  console.log("Puede pasar"); // si se cumple la condicion se ejecuta
} else {
  console.log("No puede pasar"); // si no se cumple la condicion se ejecuta
}


