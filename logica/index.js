// 1) Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100).
// Escribe un programa en JavaScript que imprima el número más alto del arreglo (Si se repite,
// solo imprimir una vez).
// El código que llena el arreglo ya está escrito, pero puedes editarlo para probar con otros
// valores. Con el botón de refrescar puedes recuperar el valor original que será utilizado para
// evaluar la pregunta como correcta o incorrecta durante la ejecución.
// var myArray = [13,2,4,35,1];

const myArray = [13,2,4,35,1];
let mayor = 0;
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > mayor) {
    mayor = myArray[i];
  }
  if (i + 1 === myArray.length) {
    console.log("El numero mayor es", mayor)
  }
}

// 2) Escribir un programa en JavaScript que recorra un arreglo y genere un histograma en
// base a los números de este.
// El arreglo se llama myArray y contiene 10 elementos que corresponden a números enteros
// del 1 al 5. Un histograma representa que tanto un elemento aparece en un conjunto de
// datos. Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería así:
// 1: *****
// 2: **
// 3: **
// 4:
// 5: *
// var myArray = [1,2,1,3,3,1,2,1,5,1];

const myArray2 = [1,2,1,3,3,1,2,1,5,1];
var histograma = "";

for (let i = 0; i < 5; i++) {
  histograma += `${i + 1}: `
  for (let j = 0; j < myArray2.length; j++) {
    if ((i + 1) === myArray2[j] ) {
      histograma += "*"
    }
  }
  histograma += "\n";
}

console.log(histograma);


// PRUEBA LÓGICA

// 3) Tienes un arreglo (llamado myArray) con 10 elementos (enteros en el rango de 1 a 5).
// Escribe un programa que imprima el número que tiene más ocurrencias seguidas en arreglo
// y también imprimir la cantidad de veces que aparece en la secuencia.
// El código que llena el arreglo ya está escrito, pero puedes editarlo para probar con otros
// valores. Con el botón de refrescar puedes recuperar el valor original que será utilizado para
// evaluar la pregunta como correcta o incorrecta durante la ejecución.
// Su programa escrito en JavaScript debe analizar el arreglo de izquierda a derecha para que
// en caso de que dos números cumplan la condición, el que aparece por primera vez de
// izquierda a derecha será el que se imprimirá. La salida de los datos para el arreglo en el
// ejemplo (1,2,2,5,4,6,7,8,8,8) sería la siguiente:
// Longest: 3
// Number: 8

// var myArray = [1,2,2,4,5,6,7,8,8,8];

const myArray3 = [1,2,2,4,5,5,5,6,7,8];
let longest = 1; 
let longest2 = 1;
let number = 0;
let numberPrint = 0;
let text = 0;

for (let i = 0; i < myArray3.length; i++) {
  if (number === myArray3[i]) {
    longest2 += 1;
  } else {
    longest2 = 1;
  }

  if (longest2 > longest) {
    longest = longest2;
    numberPrint = number;
  }
  number = myArray3[i];
}
console.log(`Longest: ${longest} \n Number: ${numberPrint}`);