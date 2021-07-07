/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
		// Determinar variables.
		let importe
		let descuento
		let resultado
	
		// Registrar el importe como número.
		importe = parseFloat(document.getElementById("txtIdImporte").value);
	
		// Calcular el aumento.
		descuento = (25 * importe) / 100;

		// Calcular el sueldo total.
		resultado = importe - descuento;
		document.getElementById("txtIdResultado").value = resultado;

}
