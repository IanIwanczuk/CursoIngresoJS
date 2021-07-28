/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let respuesta = 's';

	// Cantidad.
	let cantPOS = 0;
	let cantNEG = 0;
	let cantPARES = 0;
	let cantCEROS = 0;
	let numTOTALES = 0;

	// Cuentas.
	let sumaPOS = 0;
	let sumaNEG = 0;
	let promedPOS;
	let promedNEG;
	let difPOSNEG;

	do{
		// Número y validación.
		numero = parseInt(prompt("Ingrese un número."));
		while(isNaN(numero)){
			numero = parseInt(prompt("Por favor ingrese un número válido."));
		}

		// Análisis de datos.
		if(numero > 0){
			// Positivo.
			cantPOS++;
			numTOTALES++;
			sumaPOS += numero;		

		} else if(numero < 0) {
			// Negativo.
			cantNEG++;
			numTOTALES++;
			sumaNEG += numero;

		} else {
			// Cero.
			cantCEROS++;
			numTOTALES++;

		}

		// Contar números pares.
		if(numero % 2 == 0){
			cantPARES++;
		}

		// Calcular promedio.
		if(cantPOS == 0 || cantNEG == 0){
			promedNEG = 0;
			promedPOS = 0;
		} else {
		promedPOS = sumaPOS / cantPOS;
		promedNEG = sumaNEG / cantNEG;
		}

		// Diferencia POS - NEG.
		difPOSNEG = sumaPOS - sumaNEG;

		// Respuesta y validación.
		respuesta = prompt("¿Quiere seguir? (s/n)").toLowerCase();
		while(respuesta != 's' && respuesta != 'n'){
			respuesta = prompt("Respuesta invalida, ¿Quiere ingresar más números? (s/n)").toLowerCase();
		} 

	} while(respuesta == 's');

	alert("1) Suma negativos: " + sumaNEG + 
	      "\n2) Suma positivos: " + sumaPOS + 
		  "\n3) Cantidad de positivos: " + cantPOS + 
		  "\n4) Cantidad de negativos: " + cantNEG + 
		  "\n5) Cantidad de ceros: " + cantCEROS + 
		  "\n6) Cantidad de pares: " + cantPARES + 
		  "\n7) Promedio de positivos: " + promedPOS + 
		  "\n8) Promedio de negativos: " + promedNEG + 
		  "\n9) Diferencia POS - NEG: " + difPOSNEG);

}