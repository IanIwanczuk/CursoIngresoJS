function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("Usted es MAYOR de edad.");
	}
	else
	{
		alert("Usted es MENOR de edad.");
	}


}