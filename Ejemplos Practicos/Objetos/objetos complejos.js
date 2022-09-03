
//Objeto complejo.

var ordenesDePizzas = [ //Array de objetos complejos.
  {
    sabor: "Muzarella",
    tamaño: "Grande",
    cantidad: 2,
    precio: 20,
    extra: [
      "Queso",
      "Jamon",
      "Tomate"
    ],
    conEnvio: true
  },
  {
    sabor: "Peperoni",
    tamaño: "Mediano",
    cantidad: 1,
    precio: 15,
    extra: [
      "Queso",
      "Jamon"
    ],
    conEnvio: false

  },
  {
    sabor: "Hawaiana",
    tamaño: "Chico",
    cantidad: 3,
    precio: 10,
    extra: [coca - cola],
  }
];

console.log(ordenesDePizzas[2].sabor); //Hawaiana
console.log(ordenesDePizzas[2].extra); //coca - cola

ordenesDePizzas[0].extra[0]; // "Queso"
ordenesDePizzas[1].extra[1]; // "Jamon"
ordenesDePizzas[2].extra[0]; // "coca-cola"


console.log(ordenesDePizzas[0]); //Imprime el primer objeto del array.
console.log(ordenesDePizzas[1].extra); //Imprime el array extra del segundo objeto.
console.log(ordenesDePizzas[2].extra);  // Imprime el array extra del tercer objeto.

console.log(ordenesDePizzas[2].sabor); //Hawaiana
console.log(ordenesDePizzas[2].extra); //coca - cola

//* Agregar una nueva orden al objeto.

// Con el push() agregamos un nuevo objeto al array.
ordenesDePizzas.push({
  sabor: "Napolitana",
  tamaño: "Grande",
  cantidad: 1,
  precio: 20,
  extra: [
    "Queso",
    "Jamon",
    "Salame"
  ],
  conEnvio: true
});

console.log(ordenesDePizzas[3].sabor); //Napolitana