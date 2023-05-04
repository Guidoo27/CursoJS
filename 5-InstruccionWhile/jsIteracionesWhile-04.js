/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numero;

  numero = prompt("ingrese numero entre 0 y 9");

  while (numero < 0 || numero > 9 || isNaN (5)) { 
    numero = parseInt(prompt("numero invalido, ingrese un numero entre 0 y 9"));
  }
  document.getElementById("txtNumero").value = numero;
}
