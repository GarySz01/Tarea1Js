function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' es un número par');
  } else {
    console.log(numero + ' es un número impar');
  }
}

esParOImpar(19);
esParOImpar(8);


function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + ' es mayor que ' + numero2);
  } else if (numero2 > numero1) {
    console.log(numero2 + ' es mayor que ' + numero1);
  } else {
    console.log(numero1 + ' y ' + numero2 + ' son iguales');
  }
}

compararNumeros(2, 7);
compararNumeros(20, 9);
compararNumeros(11, 11);

function esMultiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log(numero + ' es múltiplo de 5');
  } else {
    console.log(numero + ' no es múltiplo de 5');
  }
}

esMultiploDe5(5);
esMultiploDe5(15);
esMultiploDe5(7);


function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimirNumerosHasta(7);


function imprimirPalabraVeces(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

imprimirPalabraVeces("Nucba", 4);


function imprimirValoresArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const miArray = [1, 2, 3, 4, 5];
imprimirValoresArray(miArray);



function imprimirValoresExceptoQuinto(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 4) {
      console.log(arr[i]);
    }
  }
}

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirValoresExceptoQuinto(Array);



function multiplicarArrayPorNumero(arr, numero) {
  for (let i = 0; i < arr.length; i++) {
    const resultado = arr[i] * numero;
    console.log(resultado);
  }
}


const array = [1, 2, 3, 4, 5];
const factor = 2;
multiplicarArrayPorNumero(array, factor);


