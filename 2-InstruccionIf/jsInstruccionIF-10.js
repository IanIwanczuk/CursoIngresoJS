function mostrar()
{
	let nota;
	nota = Math.floor(Math.random() * 10 + 1);

	if(nota >= 9)
	{
		alert("Tu nota es " + nota + ". EXCELENTE.")
	}
	else
	{
		if(nota > 4)
		{
		alert("Tu nota es " + nota + ". APROBADO.")
		}
		else
		{
			alert("Tu nota es " + nota + ". Vamos, la próxima se puede.")
		}

	}


}//FIN DE LA FUNCIÓN