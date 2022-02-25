// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let [array, element] = [[], []];
  for (let p in objeto) {
    element = [p, objeto[p]];
    array.push(element);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  /* should return an object with the characters and the number of times they appear as a key-value pair (4 ms) */
  //Escribe tu código aquí
  let [obj, arr] = [{}, string.split('')];
  for (let val of arr) {
    obj[val] ? obj[val] += 1 : obj[val] = 1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let [arr, arrMa, arrMi] = [s.split(''), [], []];
  for (let i = 0; i < arr.length; i++) {
    arr[i].toUpperCase() === arr[i] ?
      arrMa.push(arr[i]) :
      arrMi.push(arr[i]);
  }
  return Array.prototype.concat(arrMa, arrMi).join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí  
  let [arr, sol] = [str.split(' '), []];
  for (let i = 0; i < arr.length; i++) {
    sol.push(arr[i].split('').reverse().join(''));
  }
  return sol.join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numStr = numero.toString().split('').reverse().join('');
  return numStr === numero.toString() ? 'Es capicua' : 'No es capicua';
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arr = cadena.split('');
  arr = arr.filter((e) => e !== 'a' && e !== 'b' && e !== 'c');
  return arr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let [swap, j] = [true, -1];
  while (swap) {
    j++; // para no volver sobre lo ya ordenado
    swap = false;
    for (let i = j; i < arr.length - 1; i++) {
      console.log('i: ', i)
      if ((arr[i].length) > arr[i + 1].length) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        swap = true;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  // should return the common elements of the array, and in case they do not match, return an empty array
  //Escribe tu código aquí
  let inter = [];
  ar1 = arreglo1;
  ar2 = arreglo2;
  for (let val1 of ar1) {
    for (let val2 of ar2) {
      if (val1 === val2) inter.push(val1);
    }
  }
  return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

