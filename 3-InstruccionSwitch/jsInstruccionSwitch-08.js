function mostrar()
{
	
	let Destino;
	Destino = document.getElementById("txtIdDestino").value;

	if(Destino == "Bariloche" || Destino == "Ushuaia")
	{
		alert("Frío mucho frío aaaa.");
	}
	if(Destino == "Mar del plata" || Destino == "Cataratas")
	{
		alert("CALOOOOOOOOR.");
	}


	/*
	switch(Destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Frío.");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Calor.");
			break;


	} */

}//FIN DE LA FUNCIÓN