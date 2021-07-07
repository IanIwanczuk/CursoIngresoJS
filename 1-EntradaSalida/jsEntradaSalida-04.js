/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Acá obtenemos el dato desde prompt, y lo mostramos en la caja de texto.
	let nombre;
	nombre = prompt("Ingrese su nombre:");
	document.getElementById("txtIdNombre").value = nombre;
	
}

