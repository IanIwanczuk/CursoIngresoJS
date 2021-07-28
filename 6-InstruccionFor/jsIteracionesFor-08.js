function mostrar() 
{
	let num,
		div = 0;

	num = parseInt(prompt("Ingrese un número."));

	while (isNaN(num) || num <= 0) {
		num = parseInt(prompt("ERROR: Ingrese un número válido."));
	}

	for (let i = 1; i <= num; i++) {
		if (num % i) {
			continue;
		}
		div++;

		if (div == 2 || num == 1) {
			console.log(num + " es primo");
		} else {
			console.log(num + " no es primo");
		}

	}

}
