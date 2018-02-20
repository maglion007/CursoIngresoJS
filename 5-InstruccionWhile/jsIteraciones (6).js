function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var sumaTotal;
	var promedio;
	

	while(contador<5)

	{
        numeroIngresado=prompt("ingrese un numero");
        numeroIngresado=parseint(numeroIngresado);
        acumulador =parseint(acumulador);
        acumulador=acumulador+ numeroIngresado;
        contador++;



	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN