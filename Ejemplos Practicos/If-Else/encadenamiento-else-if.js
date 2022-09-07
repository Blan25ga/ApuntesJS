/* 
Encadenamiento de sentncias 
  "if" y "else"
*/

// Ejemplo 1

function interpretarIMC(masaMuscular) {
    if (masaMuscular < 18.5) {
        return "Bajo peso";
    } else if (masaMuscular <= 25) {
        return "Peso normal";
    } else if (masaMuscular <= 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

console.log(interpretarIMC(18.4)); // Bajo peso //*llamada a la funcion por consola
console.log(interpretarIMC(18.5)); // Peso normal 
console.log(interpretarIMC(24.9)); // Peso normal
console.log(interpretarIMC(25)); // Peso normal
interpretarIMC(25.1); // Sobrepeso //*llamada a la función
interpretarIMC(29.9); // Sobrepeso
interpretarIMC(35); // Obesidad, 







// Ejemplo 2



