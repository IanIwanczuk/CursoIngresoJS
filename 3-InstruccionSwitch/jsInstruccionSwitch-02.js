function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":	
		case "Agosto":
			alert("Abrigate que hace frío.");
			break;	
		default:
			alert("Ya paso el frío, ahora calor.");
			break;

	}


}//FIN DE LA FUNCIÓN