/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadocivil;
	var sueldobruto;
    var numerolegajo;  
    var nacionalidad;  

    //edad
    while(edad>18 && edad<90)
    
    
      {
        edad=prompt("ingrese una edad entre 18 y 90 años");

      }

      document.getElementById('Edad').value=edad
    
        
     //sexo 
     while(sexo != "f" && sexo != "m")


      {
      	sexo=prompt("ingrese un sexo");
        	
      }

      document.getElementById('Sexo').value=sexo;

      //estadocivil
      while(estadocivil);
      {
        estadocivil=prompt("ingrese si es soltero, casado, divorciado o viudo");
      
      }
        document.getElementById('EstadoCivil').value=estadocivil; 


      //sueldobruto
      while(sueldobruto<8000);

      {
      	sueldobruto=prompt("ingrese un sueldo");
   
      
      }      

      document.getElementById('Sueldo').value=sueldobruto;
      
      
      //numerolegajo
      while(numerolegajo);
      {
      	numerolegajo=prompt("ingrse su numero de legajo");
      	
      }
        document.getElementById('Legajo').value=numerolegajo;




      //nacionalidad
      while(nacionalidad);
      {
        nacionalidad=prompt("ingrese A para argentinos, E para extranjeros y N para nacionalizados");
        
      }
        document.getElementById('Nacionalidad').value=nacionalidad;
      



}
