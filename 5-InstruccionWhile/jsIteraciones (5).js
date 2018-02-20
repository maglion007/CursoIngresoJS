function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");



while(sexo != "f" && sexo != "m")

{

   sexo = prompt("ingrese f ó m .");

   alert("el sexo ingresado es");


}

  document.getElementById('Sexo').value=sexo;
   

}//FIN DE LA FUNCIÓN