/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let suma = 0;
	let promedio;
	let cantidad = 0;
	let respuesta = 's';

	do{
		numero = parseInt(prompt("Ingrese un número."));
		suma += numero;
		cantidad++;

		respuesta = prompt("¿Quiere seguir ingresando números? (s/n)").toLowerCase();

	} while(respuesta == 's');

	promedio = suma / cantidad;
	document.getElementById("txtIdPromedio").value = promedio;
	document.getElementById("txtIdSuma").value = suma;

}//FIN DE LA FUNCIÓN 