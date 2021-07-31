function mostrar()
{
    /* 
    Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre
    0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
        a) El promedio de los kilos totales.
        b) El mas liviano y su sabor
        c) La cantidad de sabor carne y el promedio de kilos de sabor carne
    */

    let kilos; 
    let tipoCompra;
    let acumKilos = 0;
    let promedioKilos;
    let masLivianoKilos;
    let masLivianoTipo;
    let flagMasLiviano = 1;
    let acumKilosCarne = 0;
    let contadorCarne = 0;
    let promedioKilosCarne = 0; 

    for(let i = 1; i <= 10; i++){
        kilos = parseFloat(prompt("Ingrese los kilos de esta bolsa. (0-500 Kilos)"));
        while(isNaN(kilos) || !(kilos >= 0 && kilos <= 500)){
            kilos = parseFloat(prompt("Por favor, ingrese un peso válido. (0-500 Kilos)"));
        }
        acumKilos += kilos;

        tipoCompra = prompt("Indique el producto comprado. (Carne/Vegetales/Pollo)").toLowerCase();
        while(tipoCompra != "carne" && tipoCompra != "vegetales" && tipoCompra != "pollo"){
            tipoCompra = prompt("Por favor, indique un producto válido. (Carne/Vegetales/Pollo)").toLowerCase();
        }
        
        if(flagMasLiviano || kilos < masLivianoKilos){
            masLivianoKilos = kilos;
            masLivianoTipo = tipoCompra;
        }
        if(tipoCompra == "carne"){
            contadorCarne++;
            acumKilosCarne += kilos;
        }
        
    }

    promedioKilos = acumKilos / 10; 
    if(contadorCarne <= 0){
        promedioKilosCarne = 0;
    } else {
        promedioKilosCarne = acumKilosCarne / contadorCarne;
    }

    alert("A) El promedio de los kilos totales es: " + promedioKilos +
        "\nB) La compra más liviana: " + masLivianoTipo + " / " + masLivianoKilos +
        "\nC) Cantidad de carne: " + acumKilosCarne +
        "\nPromedio de kilos de carne: " + promedioKilosCarne);


}
