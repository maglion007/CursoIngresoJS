function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

  switch(mesDelAño)
  {
  	case "Julio"  :
  	case "Agosto"  :
  	alert("estamos en invierno");
  	break;
  	case "Enero"  :
  	case "Febrero"  :
  	case "Abril"  :
  	case "Mayo"  :
  	case "Junio"  :
  	alert ("falta para el invierno");
  	break;
  	case "Septiembre"  :
  	case "Octubre"  :
  	case "Noviembre"  :
  	case "Diciembre"  :
  	alert("ya pasamos el frio, ahora calor!!!");
  	break;
   }



}//FIN DE LA FUNCIÓN