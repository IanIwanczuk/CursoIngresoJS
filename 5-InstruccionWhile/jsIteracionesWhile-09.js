/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// Variables.
	let numero;
	let maximo = 0;
	let minimo = 0;
	// let flag = 0
	let respuesta = 's';

	// Loop hasta que el usuario quiera salir.
	do{
		// Numero y validación.
		numero = parseInt(prompt("Introduzca un número.").toLowerCase());
		while(isNaN(numero)){
			numero = parseInt(prompt("Por favor ingrese un número válido."));
		}

		// Mínimo y máximo.
		if(minimo == 0 && maximo == 0){
			maximo = numero;
			minimo = numero;
		} else if(numero > maximo) {
			maximo = numero;
		} else if(numero < minimo) {
			minimo = numero;
		}

		// Respuesta y validación.
		respuesta = prompt("¿Quiere seguir? (s/n)").toLowerCase();
		while(!(respuesta == 's' || respuesta == 'n')){
			respuesta = prompt("Respuesta invalida, ¿Quiere ingresar más números? (s/n)").toLowerCase();
		}

	} while(respuesta == 's');

	// Cajas de texto.
	document.getElementById("txtIdMinimo").value = minimo;
	document.getElementById("txtIdMaximo").value = maximo;

}