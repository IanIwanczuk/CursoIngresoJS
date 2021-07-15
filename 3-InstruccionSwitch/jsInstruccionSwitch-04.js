function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("El mes tiene 28 días.");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("El mes tiene 31 días.");
			break;
		default:
			alert("El mes tiene 30 días.");
		
	}


}//FIN DE LA FUNCIÓN