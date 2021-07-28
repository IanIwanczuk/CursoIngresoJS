function mostrar()
{
	for(let i = 1; i < 20; i++){
		if(i % 2){    		 // El 0 lo hace FALSO, y cuando un IF es
			continue;		 // FALSO no se entra. Por eso cuando no es
		}					 // un número par, ENTRA porque da diferente				
		console.log(i);		 // de 0, y lo toma como verdadero.
		
	}

}