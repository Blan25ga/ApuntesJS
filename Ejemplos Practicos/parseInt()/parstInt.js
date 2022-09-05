
// Metodo parsInt() //

//* El metodo parseInt() analiza un argumento de tipo string y devuelve un entero de la base especificada.


// Ejemplo 1 

var a = parseInt("11", 2); // es 3, porque 11 en binario es 3 en decimal.
console.log(a); //3

console.log(parseInt("-55")); // -55
//parseInt, lo que hace es convertir un string a un numero entero, si no se especifica la base, por defecto es 10, pero si se especifica la base, se convierte a decimal.

// Ejemplo 2

var a = parseInt("7", 2); // es 7, porque 7 en binario es 7 en decimal.


//* Ejemplo de suma de 2 strings.

var a = "7";
var b = "7";

console.log(a + b); //77, porque es un string, no un numero, y devuelve una cocatenacion de los dos strings.

console.log(parseInt(a) + parseInt(b)); //14, porque parseInt convierte los strings a numeros enteros.

//* ""O realizar lo siguiente"":

var a = parseInt("7");
var b = parseInt("7");

return a + b; //14
console.log(a + b); //14, porque parseInt convierte los strings a numeros enteros.