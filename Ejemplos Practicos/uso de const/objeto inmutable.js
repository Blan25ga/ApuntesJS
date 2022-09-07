
// Creacion de objeto Inmutable //

// Como impedir que un objeto sea modificado, o sea inmutable
// Con el metodo Object.freeze() se puede hacer que un objeto sea inmutable.

// Ejemplo 1

let colores = {
    verde: "#00FF00",
    rojo: "#FF0000",
    azul: "#0000FF"
};

Object.freeze(colores); // Se hace inmutable el objeto colores

colores.verde = "#0000FF"; // Se intenta modificar el valor de la propiedad verde
console.log(colores.verde); // #00FF00

colores.amarillo = "#FFFF00"; // Se intenta agregar una nueva propiedad al objeto
console.log(colores); // {verde: "#00FF00", rojo: "#FF0000", azul: "#0000FF"}
//* El amarillo no se agrega al objeto, ya que no se puede modificar un objeto inmutable.



