/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo;
	sexo = prompt("ingrese F o M.").toLowerCase();

	while (sexo != "F" && sexo != "M") {
		sexo = prompt("Sexo invalido, reingrese F o M.").toLowerCase();
	}


	document.getElementById("txtIdSexo").value = sexo;


}//FIN DE LA FUNCIÓN