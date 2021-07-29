function mostrar()
{
  /* 
  Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas,
  Precio por bolsa (más de cero ),

  - Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  - Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    a) El importe total a pagar , bruto sin descuento.
    b) El importe total a pagar con descuento(solo si corresponde).
    d) Informar el tipo con mas cantidad de bolsas.
    f) El tipo mas caro.
  */

  let descuento;
  let cantCompra;         // Cuántas veces compré.
  let tipoCompra;
  let precCompra;
  let importeBruto = 0;
  let importeDescuento;
  let acumCompra = 0;     // Cantidad TOTAL de bolsas.
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let acumPrecioA = 0;
  let acumPrecioCal = 0;
  let acumPrecioCemento = 0;
  let maxBolsas;          // El tipo con más bolsas.
  let tipoMasCaro;        // El tipo más caro.
  let respuesta = "s";
  let flagDesc = 1;

  do{
    // Pido los datos al usuario.
    tipoCompra = prompt("¿Qué compró? (Arena/Cal/Cemento)").toLowerCase();
    while(tipoCompra != "arena" && tipoCompra != "cal" && tipoCompra != "cemento"){
      tipoCompra = prompt("Por favor, ingrese un producto válido (Arena/Cal/Cemento).").toLowerCase();
    }

    cantCompra = parseInt(prompt("¿Cuántas bolsas compró?"));
    while(isNaN(cantCompra) || cantCompra <= 0){
      cantCompra = parseInt(prompt("Por favor, ingrese un número válido."));
    }
    acumCompra += cantCompra;      // TOTAL.

    precCompra = parseInt(prompt("Ingrese el precio de las bolsas."));
    while(isNaN(precCompra) || precCompra <= 0){
      precCompra = parseInt(prompt("Por favor, ingrese un precio válido."));
    }
    importeBruto += precCompra;    // TOTAL.

    respuesta = prompt("¿Tiene más productos? (s/n)").toLowerCase();
    while(respuesta != "s" && respuesta != "n"){
      respuesta = prompt("ERROR. ¿Tiene más productos? (s/n)").toLowerCase();
    }
  
    if(tipoCompra == "arena"){
      acumArena += cantCompra;
      acumPrecioA = precCompra * cantCompra;
    } else if(tipoCompra == "cal") {
      acumCal += cantCompra;
      acumPrecioCal = precCompra * cantCompra;
    } else {
      acumCemento += cantCompra;
      acumPrecioCemento = precCompra * cantCompra;
    }

  } while(respuesta == "s");
  
  // Analizo los datos del usuario.
  if(acumCompra > 10 && acumCompra <= 30){
    descuento = 0.15;
  } else if(acumCompra > 30) {
    descuento = 0.25;
  } else {
    flagDesc = 0;
    descuento = 1;
  }

  if(acumArena > acumCal && acumArena > acumCemento){
    maxBolsas = acumArena;
  } else if(acumCal >= acumArena && acumCal > acumCemento) {
    maxBolsas = acumCal;
  } else {
    maxBolsas = acumCemento;
  }

  if(acumPrecioA > acumPrecioCal && acumPrecioA > acumPrecioCemento){
    tipoMasCaro = "Arena";
  } else if(acumPrecioCal >= acumPrecioA && acumPrecioCal > acumPrecioCemento) {
    tipoMasCaro = "Cal";
  } else {
    tipoMasCaro = "Cemento";
    
  }

  descuento = importeBruto * descuento;
  importeDescuento = importeBruto - descuento;

  // B)
  document.write("A) El precio bruto es de: " + importeBruto);
  if(flagDesc){
    document.write("<br>B) Precio con descuento: " + importeDescuento);
  } else {
    document.write(""); 
  }

  // D)
  document.write("<br>D) El tipo con más bolsas es: " + maxBolsas);

  // F)
  document.write("<br>F) El tipo más caro es: " + tipoMasCaro);

}
