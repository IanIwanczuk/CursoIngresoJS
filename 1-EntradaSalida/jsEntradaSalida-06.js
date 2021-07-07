/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{
	// Variables.
	let numero1;
	let numero2;
	let suma;

	// Levantar datos de cajas de texto. Opción 1:
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	// Opción 2:
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	// Realizar la operación y muestro el resultado.
	suma = numero1 + numero2;
	alert("La suma es: " + suma);
	
}