/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	// "alert" se usa para mostrar una ventana que muestra un mensaje.
	// "let" se utiliza para determinar variables y "cons" también.

	let nombre;


	// Se pone ";" al final de las lineas como si fuese un punto.
	// También se podría escribir: let nombre = "Xian".

	// nombre = "Xian";

	
	nombre = prompt("Ingrese su nombre:");
	alert("Tu nombre es " + nombre);

}
