function Mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadoCivil').value;

if(edad<18 && estadoCivil!='Soltero')
{
	alert("no hacer nada");
}
else
if(edad>18 && estadoCivil=='Soltero')
{
	alert("es soltero y no es menor de edad");
}
	


}//FIN DE LA FUNCIÓN