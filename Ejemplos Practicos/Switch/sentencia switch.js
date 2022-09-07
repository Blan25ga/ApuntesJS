
// Sentencias switch.
//Switch permite evaluar una expresión y ejecutar una sentencia dependiendo del valor de la expresión.
// siempre finalizar cada caso con la sentencia break, para que no se siga ejecutando el resto de los casos.

// Ejemplo 1.

function clasicarValor(valor) {

    var respuesta;

    switch (valor) { // Se evalúa el parametro valor.

        case 1: // Si el valor es 1.
            respuesta = "El valor es 1";
            break; // Se sale del switch.

        case 2: // Si el valor es 2.
            respuesta = "El valor es 2";
            break; // Se sale del switch.

        case 3: // Si el valor es 3.
            respuesta = "El valor es 3";
            break; // Se sale del switch.

        default: // Si el valor no es ninguno de los anteriores.
            respuesta = "El valor no es 1, 2 o 3";
            break; // Se sale del switch.

    }

    return respuesta; // Se devuelve la respuesta. se puede usar console.log(respuesta) para ver el resultado en la consola.
}

clasicarValor(1); // El valor es 1
clasicarValor(2); // El valor es 2
clasicarValor(3); // El valor es 3
clasicarValor(4); // El valor no es 1, 2 o 3


// Ejemplo 2.

var prodcto = "Hamburguesa";

switch (prodcto) { // Se evalúa el parametro prodcto.
    case "Hamburguesa": // Si el valor es "Hamburguesa".
        console.log("El precio de la hamburguesa es de 10€");
        break; // Se sale del switch.

    case "Pizza": // Si el valor es "Pizza".
        console.log("El precio de la pizza es de 8€");
        break; // Se sale del switch.

    case "Perrito Caliente": // Si el valor es "Perrito Caliente".
        console.log("El precio del perrito caliente es de 5€");
        break; // Se sale del switch.

    default: // Si el valor no es ninguno de los anteriores.
        console.log("No tenemos ese producto");
        break; // Se sale del switch.

}
console.log("Gracias por su compra"); // Se ejecuta siempre, fuera del switch.






