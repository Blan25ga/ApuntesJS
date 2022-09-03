
// Objetos anidados.

var receta = {
  descripcion: "Torta de chocolate",
  costo: 25,
  ingredientes: {
    masa: {
      harina: "100 grs",
      azucar: "50 grs",
      manteca: "100 grs",
      huevos: "2 unidades"
    },
    cobertura: {
      chocolate: "200 grs",
      manteca: "100 grs",
      azucar: "100 grs",
      confites: "100 grs"
    }
  }
};

//* accedemos a las diferentes propiedades del objeto receta

console.log(receta.descripcion); // Torta de chocolate
console.log(receta.costo); // 25
console.log(receta.ingredientes.masa); // {harina: "100 grs", azucar: "50 grs", manteca: "100 grs", huevos: "2 unidades"}
console.log(receta.ingredientes.cobertura); // {chocolate: "200 grs", manteca: "100 grs", azucar: "100 grs", confites: "100 grs"}

receta.ingredientes.masa.azucar = "60 grs";
console.log(receta.ingredientes.masa.azucar); // 60 grs
