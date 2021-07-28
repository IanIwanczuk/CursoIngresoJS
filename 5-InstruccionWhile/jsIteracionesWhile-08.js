/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta = 's';
	let numero;
	let positivos = 0;   // txtIdSuma.
	let negativos = 1;   // txtIdProducto.
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un número."));
		
		if(numero >= 0){
			positivos += numero;
		}
		else{
			negativos *= numero;
			flag = 1;
		}

		
		respuesta = prompt("¿Quiere seguir ingresando números? (s/n)").toLowerCase();
		
	} while(respuesta == 's');
	
	if(flag){
		negativos = 0;
	}
	
	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;


}//FIN DE LA FUNCIÓN