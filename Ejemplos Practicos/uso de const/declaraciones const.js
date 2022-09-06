
// la palabra const (constante) es una variable que no puede ser reasignada

const PI = 3.14; // constante
console.log(PI); // 3.141592653589793


PI = 25;
console.log(PI); // TypeError, porque no se puede reasignar el valor a una constante

// funcion calcular el radio de un circulo, creando una cosntante.

function calcularRadioCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
    return "El radio no puede ser negativo";
  } else {
    return PI * (radio ** 2); // ** es el operador de potencia
  }
}

console.log(calcularRadioCirculo(5)); // 78.5
console.log(calcularRadioCirculo(-5)); // El radio no puede ser negativo
console.log(calcularRadioCirculo(10)); // 314




