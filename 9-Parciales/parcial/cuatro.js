function Mostrar()


//informar 3 num y informar cual es el mayor y el menor
{
	var numero1;
	var numero2;
	var numero3;

	numero1=prompt("ingrese el numero1");
	numero2=prompt("ingrese el numero2");
	numero3=prompt("ingrese el numero3");

	if(numero1>numero2 && numero1>numero3)

	{
		alert("el numero" + numero1+ "es el mayor");

	}
     
     else
     	if(numero1>numero3 && numero2>numero3); 
	{
       alert("el numero" + numero2 + "es el mayor");

	}
    
    else
    	if(numero3>numero1 && numero3>numero2)
    {
    	alert("el numero" + numero3 + "es el mayor");
    }

 

}
