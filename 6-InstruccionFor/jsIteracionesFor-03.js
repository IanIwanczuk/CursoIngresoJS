function mostrar()
{
	let repeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones."));
	while(isNaN(repeticiones) || repeticiones < 0){
		repeticiones = parseInt(prompt("Por favor, ingrese una cantidad válida."));
	}

	for(let contador = 0; contador < repeticiones; contador++){
		console.log("SI HOLA UTN FRRRA FRRRA");
	}

}