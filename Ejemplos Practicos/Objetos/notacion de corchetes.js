
// Accediendo con notacion de corchetes en un objeto.
// Esto sirve para acceder a las propiedades de un objeto.

var miObjeto = {
  color: 'rojo',
  "su tamaño es": 'grande',
  forma: 'redonda',
  nombre: 'manzana'
};

miObjeto['color']; // 'rojo'
miObjeto['su tamaño es']; // 'grande'  // se accederia a la propiedad con el nombre "su tamaño es" pero como tiene espacios no se puede acceder con notacion de puntos.
miObjeto['forma']; // 'redonda'

