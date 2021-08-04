function mostrar()
{
    /*
    Pedir dos números y mostrar el resultado:
    1) Si son iguales los muestro concatenados.
    2) Si el primero es mayor, los resto, de lo contrario los sumo.
    3) Si la resta es mayor a 10, además de mostrar el resultado, muestro el mensaje:
    "la resta es xxx y superó el 10".
    */

    let numIngresado;
    let numeroUno;
    let numeroDos;
    let resultado;
    let flag = 1;

    for(let i = 1; i <= 2; i++){
        numIngresado = parseFloat(prompt("Ingrese un número."));
        while(isNaN(numIngresado)){
            numIngresado = parseFloat(prompt("Por favor, ingrese un número válido."));
        }

        if(flag){
            numeroUno = numIngresado;
            flag = 0;
        } else {
            numeroDos = numIngresado;
        }

    }

    if(numeroUno == numeroDos){
        resultado = numeroUno.toString() + numeroDos.toString();
        alert("El número es " + resultado);
    } else if(numeroUno > numeroDos) {
        resultado = numeroUno - numeroDos;
        if(resultado > 10){
            alert("La resta es " + resultado + " y superó el 10");
        } else {
            alert("La resta es " + resultado);
        }
    } else {
        resultado = numeroUno + numeroDos;
        alert("La suma es " + resultado);
    }

}
