/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// Determinar variables.
	let sueldo
	let aumento
	let resultado

	// Registrar el sueldo como número.
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	// Calcular el aumento.
	aumento = (10 * sueldo) / 100;
	
	// Calcular el sueldo total.
	resultado = sueldo + aumento;
	document.getElementById("txtIdResultado").value = resultado;


}
