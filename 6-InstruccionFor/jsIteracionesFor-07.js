function mostrar() 
{
	let numero;
	let divisores = 0;

	numero = parseInt(prompt("Ingrese un número."));
	while(isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("Por favor, ingrese un número válido."));
	}

	for(let i = 1; i <= numero; i++) {
		if (numero % i) {     // Averiguamos si el número ingresado es //
			continue;	      // divisible por "i", que va a ser 1, 2, //
		}  				  	  // 3, 4, etc. Y cuando la división dé 0, //
		divisores++;	 	  // vamos a saltar el if y lo mostramos   //
		console.log(i);	 	  // como divisor.  					   //
	}

	console.log("Cantidad de divisores: " + divisores);

}
