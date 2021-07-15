function mostrar()
{
	let Destino;
	let Estacion;
	let viaje; 
	Destino = document.getElementById("txtIdDestino").value;
	Estacion = document.getElementById("txtIdEstacion").value;

	switch(Estacion)
	{
		case "Invierno":
			if(!(Destino == "Bariloche")){
				viaje = "No se viaja.";
			}
			else{
				viaje = "Se viaja.";
			}
			break;

		case "Verano":
			if(Destino == "Cataratas" || Destino == "Mar del plata"){
				viaje = "Se viaja.";
			}
			else{
				viaje = "No se viaja.";
			}
			break;

		case "Otoño":
			viaje = "Se viaja."
		case "Primavera":
			if(Destino == "Bariloche"){
				viaje = "No se viaja.";
			}
			else{
				viaje = "Se viaja.";
			}
			break;


	}
	alert(viaje);

}