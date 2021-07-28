function mostrar()
{
	let cantPares = 0;

	let cantidadNum = parseInt(prompt("Ingrese la cantidad de números."));
	while(isNaN(cantidadNum) || cantidadNum <= 0){
	cantidadNum = parseInt(prompt("Por favor, ingrese una cantidad válida."));
	}

	for(let i = 1; i <= cantidadNum; i++){
		if(i % 2){    		
			continue;		 
		}				
		cantPares++;	 				
		console.log(i);		
		
	}

	console.log("Cantidad: " + cantPares);
	
}