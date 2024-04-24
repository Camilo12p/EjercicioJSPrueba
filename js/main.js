"use strict";

var funciones = ["contrasenaValida", "calcularImpuestos"];

function contrasenaValida(contrasenaUsr) {
  let valido1 = "2Fj(jjbFsuj";
  let valido2 = "eoZiugBf&g9";
  if (contrasenaUsr == valido1) {
    return true;
  } else if (contrasenaUsr == valido2) {
    return true;
  } else {
    return false;
  }
}

function calcularImpuestos(edad, ingresos) {
  if (edad < 18 || ingresos < 1000) {
    return 0;
  }
  return ingresos * 0.4;
}

function bmi(peso, alturaM) {
  let bmiValor = peso / alturaM ** 2;
  let estado = undefined;
  // return bmiValor;
  switch (true) {
    case bmiValor < 18.5:
      estado = "Bajo de peso";
      break;
    case bmiValor >= 18.5 && bmiValor <= 24.9:
      estado = "Normal";
      break;
    case bmiValor >= 25 && bmiValor <= 29.9:
      estado = "Sobrepeso";
      break;
    case bmiValor >= 30:
      estado = "Obeso";
      break;
  }
  return estado;
}

function imprimirArreglo(...parametros) {
  return parametros.join("\n");
  // console.log(arguments);
  // for (let i = 0; i < arguments.length; i++) {
  //        console.log(arguments[i]);
  // }
}

function contarRango(primerNumero, segundoNumero) {
  let contador = 0;
  if (primerNumero - segundoNumero <= 0) {
    for (let i = primerNumero + 1; i < segundoNumero; i++) {
      contador++;
    }
  }

  for (let i = segundoNumero + 1; i < primerNumero; i++) {
    contador++;
  }

  return contador;
}

function likes(numero) {
  if (numero < 1000) {
    return numero + "";
  }
  if (numero < 1000000) {
    return Math.trunc(numero / 1000) + "K";
  }
  return Math.trunc(numero / 1000000) + "M";
}

function sumarRango(primerNumero, segundoNumero) {
  let contador = 0;
  if (primerNumero - segundoNumero == 0) {
    return 0;
  }
  if (primerNumero - segundoNumero < 0) {
    for (let i = primerNumero; i <= segundoNumero; i++) {
      contador += i;
    }
  }

  for (let i = segundoNumero; i <= primerNumero; i++) {
    contador += i;
  }

  return contador;
}

function numeroDeAes(palabra) {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] == "a") {
      contador++;
    }
  }
  return contador;
}

function numeroDeCaracteres(palabra, caracter) {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] == caracter) {
      contador++;
    }
  }
  return contador;
}

function sumarArreglo(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    contador = contador + array[i];
  }
  return contador;
}

function multiplicarArreglo(array) {
  let contador = 1;
  for (let i = 0; i < array.length; i++) {
    contador = contador * array[i];
  }
  return contador;
}

function removerCeros(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

// // Doceavo ejercicio

function transcribir(string) {
  let arn = [];
  for (const caracter of string.toUpperCase()) {
    switch (caracter) {
      case "G":
        arn.push("C");
        break;
      case "C":
        arn.push("G");
        break;
      case "T":
        arn.push("A");
        break;
      case "A":
        arn.push("U");
        break;
    }
  }
  return arn.join("");
}

console.log(transcribir("ACGT"));// 

//treceavo ejercicio

function capitalizar(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalizar("mi mundo ideal"));

// catorceavo ejercicio

function numeroMax(array) {
  let numeroMaximo = array[0];
  array.forEach((element, i) => {
    if (numeroMaximo <= array[i + 1]) {
      numeroMaximo = array[i + 1];
    }
  });

  return numeroMaximo;
}

console.log(numeroMax([100, 21, 6, 15, 30, 10]));
//  quinceavo ejercicio

function encontrarPares(array) {
  let arrayPares = [];
  array.forEach((numeros) => {
    if (numeros % 2 === 0) {
      arrayPares.push(numeros);
    }
  });

  return arrayPares;
}

console.log(encontrarPares([2, 5, 3, 2, 5, 67, 2, 1, 3, 6, 8, 32]));

// doeciseisavos ejercicio

function password(string) {
  let passwordReturn = "";
  let strignTransformado = string.toLowerCase();

  for (const caracter of strignTransformado) {
    console.log(caracter);
    if (caracter == "a" || caracter == "A") {
      passwordReturn += 4;
    } else if (caracter == "e" || caracter == "E") {
      passwordReturn += 3;
    } else if (caracter == "i" || caracter == "I") {
      passwordReturn += 2;
    } else if (caracter == "o" || caracter == "O") {
      passwordReturn += 1;
    } else if (caracter == "u" || caracter == "U") {
      passwordReturn += 0;
    } else {
      passwordReturn += caracter;
    }
  }
  let arraypassword = passwordReturn.split(" ");

  return arraypassword.join("");
}

console.log(password("mi contraseña Es"));

// diecisiete ejercicio

function encontrarPosiciones(array) {
  let posiciones = [];

  array.forEach((numeros, i) => {
    if (numeros % 2 == 0) {
      posiciones.push(i);
    }
  });

  return posiciones;
}

console.log(encontrarPosiciones([1, 2, 3, 4, 5, 6, 7, 8]));
