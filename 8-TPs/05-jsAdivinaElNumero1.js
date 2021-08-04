/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos = 0;
let numeroIngresado;
let ultimoNumIngresado;
let flagNumIngresado = 1;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
	alert(numeroSecreto);
}

function verificar()
{
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  if(isNaN(numeroIngresado)){
    alert("Por favor, ingrese un número válido.");
  } else {
    if(flagNumIngresado || ultimoNumIngresado != numeroIngresado){
      ultimoNumIngresado = numeroIngresado;
      contadorIntentos++;
      flagNumIngresado = 0;
    }

    if(numeroIngresado == numeroSecreto){
      document.getElementById("txtIdIntentos").value = "USTED ES EL GANADOR COÑO!! Y en tan solo " + contadorIntentos + " intento/s.";
    } else if(numeroIngresado > numeroSecreto){
      document.getElementById("txtIdIntentos").value = "SE PASÓ MARICA OMG OMG OMG!!!";
    } else {
      document.getElementById("txtIdIntentos").value = "LE FALTAAA XD TONTOOOAJAJAJ";
    }

  }
	
}