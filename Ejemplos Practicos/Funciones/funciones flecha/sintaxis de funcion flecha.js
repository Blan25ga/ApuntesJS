
// Funciones flechas.

// Se usan para escribir funciones de una sola linea de codigo o para funciones anonimas.

// Ejemplo 1

const fecha = function () { // funcion anonima, no tiene parametro
    return new Date();
};

console.log(fecha()); // Muestra la fecha actual y hora

// Transformando la funcion anterior en una funcion flecha

const fecha2 = () => new Date(); // Si la funcion solo tiene una linea de codigo, se puede omitir las llaves y el return

console.log(fecha2());// mustra fecha y hora del dia.



