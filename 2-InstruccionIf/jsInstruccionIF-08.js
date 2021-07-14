function mostrar()
{
	{
		let edad;
		let estado;
	
		edad = parseInt(document.getElementById("txtIdEdad").value);
		estado = document.getElementById("estadoCivil").value;

		if(!(edad < 18 || estado != "Soltero"))
		{
			alert("Usted es soltero y no es menor de edad.");
		}
		
	}
	

}//FIN DE LA FUNCIÓN