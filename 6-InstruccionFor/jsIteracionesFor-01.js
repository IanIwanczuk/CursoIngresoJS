function mostrar()
{
	let numero;
	let suma = 0;
	
	for(contador = 0; suma < 1000; contador++){
		numero = parseFloat(prompt("Ingrese un número."));

		while(isNaN(numero)){
			numero = parseFloat(prompt("Por favor ingrese un número válido."));
		}
		suma += numero;

	}

	if(contador != 1){
	alert("Se ingresaron " + contador + " números, y la suma es " + suma);
	} else {
	alert("Se ingresó " + contador + " número y es " + suma);
	}

}
