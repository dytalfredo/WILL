/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  num = "" + num;
  array = num.split("");

  veracidad = false;

  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    if (index === (Math.floor(array.length / 2) - 1)) {
      if (array[index] === array[array.length - 1 - index]) {
        veracidad = true;
      }
    } else if (array[index] != array[array.length - 1 - index]) {
      console.log(array[index] + " " + array[array.length - 1 - index])
      break;
    }
  }
  return veracidad

}


// La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
// Esta devuelve true o false dependiendo de si el número es simétrico o no. 
// Un número es simétrico cuando es igual a su reverso.
// Ej:
// numeroSimetrico(11711) devuelve true

// Tu código:



// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico