function mostrar()
{
	for(;;){
		let numero = parseInt(prompt("Ingrese un número"));
		while(isNaN(numero)){
		numero = parseInt(prompt("Por favor, un número válido."));
		}

		if(numero == 9){
			break;
		}
		
	}

}