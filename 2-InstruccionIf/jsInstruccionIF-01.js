function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);


	/* 
	Operadores relacionales:
	==  ;  Igual.
	!=  ;  Distinto.
	> / <  ;  Mayor / Menor.
	>= / <=  ;  Mayor o igual / Menor o igual.
	*/
	if(edad == 15);
	{
		alert("Niña Bonita");
	}

}



/* 

El triple igual es mucho más estricto, y compara los datos
Ejemplo:

"20" === 20
False

También está el distinto más estricto, es decir, que también 
compara los datos que recibe, si es un string o un number.

"10" !== 10
True

*/