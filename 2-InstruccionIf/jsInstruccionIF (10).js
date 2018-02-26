function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	
	var numRandom;
	numRandom=prompt("ingrese una nota");

	if (numRandom==9 || numRandom==10)
	{
		alert("excelente");
	}
else

	if(numRandom>=4)
	{
		alert("aprobo");
	}	
	else
	if(numRandom<4)	
	{
		alert("vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN

/* OPERADORES
  
  ==  es igual
  &&  y o and
  ||  o
  !=  no es igual
  > <  mayor, menor
  >= <= mayor igual, menor igual

*/
