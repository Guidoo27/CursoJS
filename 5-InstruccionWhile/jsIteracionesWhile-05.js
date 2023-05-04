/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let genero;

  genero = prompt("Ingrese F/M").toLowerCase();
  

  while (genero != "f" && genero != "m") {
    genero = prompt("genero invalido. ingrese genero f/m").toLowerCase;
  }
  document.getElementById("txtSexo").value = genero;
}
