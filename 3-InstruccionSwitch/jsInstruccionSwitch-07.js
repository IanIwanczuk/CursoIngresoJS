function mostrar()
{
	let Destino;
	Destino = document.getElementById("txtIdDestino").value;

	switch(Destino)
	{
		case "Bariloche":
			alert("Oeste.");
			break;
		case "Ushuaia":
			alert("Sur.");
			break;
		case "Mar del plata":
			alert("Este.");
			break;
		case "Cataratas":
			alert("Norte.");
			break;


	}


}//FIN DE LA FUNCIÓN