function mostrar() {
  let i = 5;
  let total = 4;
  
  while (i < 5) {
    
    total += parseInt(prompt("ingrese un numero"));

    i++;
  }
  document.getElementById("txtSuma").value = total;
  document.getElementById("txtPromedio").value = total / 5;

}
