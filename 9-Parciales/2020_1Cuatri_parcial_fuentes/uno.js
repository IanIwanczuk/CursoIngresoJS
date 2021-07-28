
function mostrar()
{
	/* 
	
	Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos: 

		- El tipo (validar "barbijo" , "jabón" o "alcohol") 
		- El precio (validar entre 100 y 300)
		- la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 
		  1000 unidades)
		- la Marca
		- El fabricante.

	Se debe Informar al usuario lo siguiente:
		a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		b) Del tipo con mas unidades, el promedio por compra
		c) Cuántas unidades de jabones hay en total 
		
	*/

	let tipoCompra;
	let cantComprar;
	let precioCompra;
	let marca;
	let fabricante;
	let precioAlcBarato = 0;
	let fabAlcBarato;
	let cantAlcBarato = 0;
	let flagA = 1;
	let contadorA = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let acumJ = 0;
	let acumB = 0;
	let acumA = 0; 
	let maxUnidades;
	let promedio; 
	
	for(let i= 0; i < 5; i++){
		tipoCompra = prompt("Ingrese el producto (barbijo/alcohol/jabon)").toLowerCase();
		while(!(tipoCompra == "alcohol" || tipoCompra == "barbijo" || tipoCompra == "jabon")){
			tipoCompra = prompt("Ingrese un producto válido (barbijo/alcohol/jabon)").toLowerCase();
		}

		precioCompra = parseFloat(prompt("Ingrese el precio (100-300)"));
		while(!(precioCompra >= 100 && precioCompra <= 300)){
			precioCompra = parseFloat(prompt("Ingrese un precio válido (100-300)"));
		}
		
		cantComprar = parseFloat(prompt("Ingrese la cantidad a comprar."));
		while(!(cantComprar <= 1000 && cantComprar > 0)){
			cantComprar = parseFloat(prompt("Ingrese una cantidad válida. Cant Máx: 1000."));
		}

		marca = prompt("Ingrese marca: ").toLowerCase();
		while(marca.length == 0){
			marca = prompt("ERROR. Ingrese marca: ").toLowerCase();
		}

		fabricante = prompt("Ingrese fabricante: ").toLowerCase();
		while(fabricante.length == 0){
			fabricante = prompt("ERROR. Ingrese fabricante: ").toLowerCase();
		}

		if(tipoCompra == "barbijo"){
			// BARBIJO.
			contadorB++;
			acumB += cantComprar;
		} else if(tipoCompra == "alcohol") {
			// ALCOHOL.
			contadorA++;
			acumA += cantComprar;
			if(flagA || precioCompra < precioAlcBarato){
				precioAlcBarato = precioCompra;
				fabAlcBarato = fabricante;
				cantAlcBarato = cantComprar;
				flagA = 0;
			}
		} else {
			// JABÓN. 
			contadorJ++;
			acumJ += cantComprar;
			
		}

	}

	if(acumJ > acumA && acumJ > acumB) {
		maxUnidades = "Jabón"
		promedio = acumJ / contadorJ;

	} else if(acumA >= acumB && acumA > acumJ) {
		maxUnidades = "Alcohol";
		promedio = acumA / contadorA;

	} else {
		maxUnidades = "Barbijo";
		promedio = acumB / contadorB;
	}

	document.write("A) Precio alcohol barato: " + precioAlcBarato + "<br>Fabricante: " + fabAlcBarato + "<br>Cantidad: " + cantAlcBarato + "<br>");
	document.write("<br>B) Tipo con más unidades: " + maxUnidades + "<br>Promedio: " + promedio + "<br>");
	document.write("<br>C) Cantidad de jabones: " + contadorJ + "<br>");

}
