/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosF;
    let gradosC;

    gradosF = parseFloat(document.getElementById("txtIdTemperatura").value);
    if(isNaN(gradosF)){
        alert("Ingrese un número válido.");
    } else {
    gradosC = (gradosF - 32) * 5 / 9;
    alert("A) Grados farenheit: " + gradosF +
        "\ny en grados celcius: " + gradosC);  
    }
    
}

function CentigradosFahrenheit () 
{
    let gradosC;
    let gradosF;

    gradosC = parseFloat(document.getElementById("txtIdTemperatura").value);
    if(isNaN(gradosC)){
        alert("Ingrese un número válido.");
    } else {
    gradosF = (gradosC * 9 / 5) + 32;
    alert("A) Grados celcius: " + gradosC +
    "\ny en grados farenheit: " + gradosF);
    }

}
