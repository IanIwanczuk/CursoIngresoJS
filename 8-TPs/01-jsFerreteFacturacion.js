/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // Variables
	let precio1;
    let precio2;
    let precio3;
    let suma;
    // Definir variables
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    alert("La suma es " + suma);

}


function Promedio () 
{
    // Variables
	let precio1;
    let precio2;
    let precio3;
    let promed;
    // Definir variables
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promed = (precio1 + precio2 + precio3) / 3;
    alert("El promedio es " + promed);
	
}   


function PrecioFinal () 
{
	// Variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let aumento;
    let final;
 
    // Definir variables
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    suma = precio1 + precio2 + precio3;
    aumento = suma * 21 / 100;
    final = aumento + suma;
    // final = suma * 0.21
    alert("El precio final es " + final);

}