function Mostrar()
{
    var contadorDePositivos=0;
    var contadorDeNegativos=0;
    var contadorDeCeros=0;
    var contadorDePar=0;
    var contadorDeImpar=0;
    var contador=50;
    for(contador=-100;contador<100;contador++)


    {

    	if(contador>0)

    	{

            contadorDePositivos++;
    	}

    	else
    	{
    		if(contador>0)

          {
          	contadorDeNegativos++;
          } 
          else
          {
          	contadorDeCeros++;
          }
          
              if(contador%2==0 && contador!=0)          
          {
             contadorDePar++;

          }

          else
          {
          	if(contador!=0)
          	{

          		contadorDeImpar++;
          	}
          }
            
            switch(contador)

            {

              case 50:
              contador50++;
              break;

            }

    	}//contador=-100;contador<100;contador++

    

        document.write("positivos"+ contadorDePositivos);
        document.write("negativos"+ contadorDeNegativos);
        document.write("ceros"+ contadorDeCeros);
        document.write("par"+ contadorDeCeros);
        document.write("impar"+ contadorDeImpar);
        document.write("de 50:"+ contador50);
























  /* var contador=0;
   
   for(;;)

   {

   	   contador++;

       document.write("<br>" + contador);

       if(contador==10)

       {

         document.write("<br>break" + contador);

         break;

       }
         if(contador==5)

         {
         	continue;
         }
         document.write("continue" + contador);
   }


}*/


	
}//es la de la funcion