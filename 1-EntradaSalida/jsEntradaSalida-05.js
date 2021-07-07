/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Se define "nombre" como lo que introducimos en la caja de nombre.
	// Y definimos "edad" como lo que introducimos en la caja de edad.
	nombre = document.getElementById("txtIdNombre").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	alert("Usted se llama " + nombre + " y tiene " + edad + " años.")

}

