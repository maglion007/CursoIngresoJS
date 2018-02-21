function Mostrar()
{

	var contador=999999;
	var acumulador=999999;
	var respuesta='si';
	var numeroIngresado;
	var sumaTotal;
	var promedio;


	while(acumulador/contador)

	{
        
        numeroIngresado=prompt("ingrese un numero");
        numeroIngresado=parseint(numeroIngresado);
        acumulador =parseint(acumulador);
        acumulador=acumulador+ respuesta;
        contador++;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN