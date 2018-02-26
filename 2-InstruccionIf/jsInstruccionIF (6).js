function Mostrar()
{
//tomo la edad  

  var edad;
  edad=document.getElementById('edad').value;

  if(edad>18)

  {
  	alert("la persona es mayor de edad");
  }

  else

    if(edad>13 && edad<17) 
  {

   alert("es adolescente");

  }

  else
    if(edad<13) 

  {
        
        alert("es niño");
  }

  	
  		
  
  






}//FIN DE LA FUNCIÓN