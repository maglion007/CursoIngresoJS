function Mostrar()
{
//tomo la edad  

var mesDelAño;
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero"  :
		  alert("este mes no tiene 29 dias");
		  break;

		default:
		   alert("este mes tiene 30 dias o mas");
		   break;
		     
	}



}//FIN DE LA FUNCIÓN