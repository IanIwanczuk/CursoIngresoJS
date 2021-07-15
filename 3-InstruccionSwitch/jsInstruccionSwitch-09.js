function mostrar()
{
	let Destino;
	let Estacion;
	let Precio = 15000;
	Destino = document.getElementById("txtIdDestino").value;
	Estacion = document.getElementById("txtIdEstacion").value;

	switch(Estacion)
	{
		case "Invierno":
			if(Destino == "Bariloche"){
				Precio = (Precio * 0.2) + Precio;
			}

			else if(Destino == "Cataratas" || Destino == "Cordoba"){
				Precio = Precio - (Precio * 0.1);
			}

			else{
				Precio = Precio - (Precio * 0.2);
			}
			break;

		case "Verano":
			if(Destino == "Bariloche"){
				Precio = Precio - (Precio * 0.2);
			}

			else if(Destino == "Cataratas" || Destino == "Cordoba"){
				Precio = (Precio * 0.1) + Precio;
			}

			else{
				Precio = (Precio * 0.2) + Precio;
			}
			break;

		case "Otoño":
		case "Primavera":
			if(Destino == "Bariloche" || Destino == "Mar del plata" || Destino == "Cataratas"){
				Precio = (Precio * 0.1) + Precio;
			}
			break;


	}
	alert("El precio es: " + Precio);

}

// Se pueden omitir tantos alert.
// Se deberían de haber utilizado más else if.
// El precio se puede calculcular una sola vez si creamos dos variables más:
// Descuento --- Aumento.