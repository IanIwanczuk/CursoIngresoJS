function mostrar()
{
	/*
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", 
	"casado" o "viudo") y temperatura corporal.
		a) El nombre de la persona con mas temperatura.
		b) Cuantos mayores de edad estan viudos
		c) La cantidad de hombres que hay solteros o viudos.
		d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		e) El promedio de edad entre los hombres solteros.
	*/

	// Variable. 
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;

	// A) Temperatura más alta y el nombre. 
	let temperaturaAlta; 
	let nombreTempAlta;
	let flagTempAlt = 1;

	// B) Mayores y viudos.
	let mayoresViudos = 0; 

	// C) Hombres solteros o viudos.
	let hombresSoltViudos = 0;

	// D) Viejos con temperatura más de 38.
	let viejosTemp38 = 0;

	// E) Promedio de edad de hombres solteros.
	let contHmbreSolteros = 0;
	let acumEdadHmbreSolt = 0;
	let promedEdadHmbreSolt = 0; 

	// Pido datos.
	do{
		nombre = prompt("Ingrese su nombre y apellido.");
		while(nombre.length == 0){
			nombre = prompt("ERROR. Ingrese su nombre y apellido.");
		}

		edad = parseInt(prompt("Ingrese su edad."));
		while(isNaN(edad) || edad <= 0){
			edad = parseInt(prompt("Por favor, ingrese una edad válida."));
		}

		sexo = prompt("Ingrese su sexo. (f/m)").toLowerCase();
		while(sexo.length == 0 || sexo != 'm' && sexo != 'f'){
			sexo = prompt("Por favor, ingrese un sexo válido. (f/m)").toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil. (Soltero/Casado/Viudo)").toLowerCase();
		while(estadoCivil.length == 0 || estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo'){
			estadoCivil = prompt("Por favor, ingrese un número estado civil válido. (Soltero/Casado/Viudo)").toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese su temperatura corporal."));
		while(isNaN(temperatura) || temperatura <= 0){
			temperatura = parseFloat(prompt("Por favor, ingrese una temperatura válida."));
		}
		
		if(flagTempAlt || temperatura > temperaturaAlta){
			nombreTempAlta = nombre;
			temperaturaAlta = temperatura;
		}
		if(edad >= 18 && estadoCivil == "viudo"){
			mayoresViudos++;
		}
		if(sexo == 'm' && estadoCivil == "soltero" || estadoCivil == "viudo"){
			hombresSoltViudos++; 
		}
		if(edad > 60 && temperatura > 38){
			viejosTemp38++; 
		}
		if(sexo == 'm' && estadoCivil == "soltero"){
			contHmbreSolteros++;
			acumEdadHmbreSolt += edad;
		}
		if(acumEdadHmbreSolt > 0){
		promedEdadHmbreSolt = acumEdadHmbreSolt / contHmbreSolteros;
		}
		
		respuesta = prompt("¿Ingresar a otra persona? (s/n)").toLowerCase();
		while(respuesta.length == 0 || respuesta != 's' && respuesta != 'n'){
			respuesta = prompt("Por favor, ingrese una respuesta válida. (s/n)").toLowerCase();
		}

	} while(respuesta == 's');

	document.write("A) Persona con más temperatura: " + nombreTempAlta + " / " + temperaturaAlta + "°C" +
				   "<br>B) Mayores de edad viudos: " + mayoresViudos + 
				   "<br>C) Hombres solteros o viudos: " + hombresSoltViudos +
				   "<br>D) Tercera edad con más de 38° de temperatura: " + viejosTemp38 +
				   "<br>E) Promedio de edad entre hombres solteros: " + promedEdadHmbreSolt);

}
