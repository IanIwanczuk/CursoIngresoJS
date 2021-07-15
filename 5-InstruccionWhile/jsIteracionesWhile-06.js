function mostrar()
{
	let numero;
	let contador = 0;
	let suma = 0;
	let promedio;

	while(contador != 5){
		numero = parseInt(prompt("Ingrese un número:"));	//CONDICIÓN.
		contador += 1;										//CONDICIÓN.

		suma += numero;										//ACCIÓN.
		alert("Numero: " + contador + " Total: " + suma);	//ACCIÓN.
	}

	promedio = suma / 5;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN