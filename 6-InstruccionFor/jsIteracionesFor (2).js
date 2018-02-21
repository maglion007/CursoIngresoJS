function Mostrar()
{
    var numeroRandom;
    var contador0=0;
    var contador1=0;
    var contador2=0;
    var contador3=0;
    var contador4=0;
    var contador5=0;
    var contador6=0;
    var contador7=0;
    var contador8=0;
    var contador9=0;
    var iteraciones=100000;

    for(contador=0;contador<100;contador++)

    {
         numeroRandom==Math.floor(Math.random() * 10);
         //document.write(numeroRandom);
         switch(numeroRandom)

         {
         	case0:
         	contador0++;
         	break;
         	case1:
         	contador1++;
         	break
         	case2:
         	contador2++;
         	break;
         	case3:
         	contador3++;
         	break;
            case4:
         	contador4++;
         	break;
         	case5:
         	contador5++;
         	break;
         	case6;
         	contador6++;
         	break;
         	case7:
         	contador7++;
         	break;
         	case8:
         	contador8++;
         	break;
         	case9:
         	contador9++;
         	break;
       
        } //document.write(numeroRandom);

        }  //switch(numeroRandom)

        porcen0=(contador0/(contador+1))*100;
        porcen0=Math.round(porcen0);
          

           document.write("<br>cantidad 0: "+ contador0 + "--"+ porcen0+"%");

        porcen1=(contador1/(contador+1))*100;
        porcen1=Math.round(porcen1);
          

           document.write("<br>cantidad 1: "+ contador1 + "--"+ porcen1+"%");

        porcen2=(contador2/(contador+1))*100;
        porcen2=Math.round(porcen2);
          

           document.write("<br>cantidad 2: "+ contador2 + "--"+ porcen2+"%");

        porcen3=(contador3/(contador+1))*100;
        porcen3=Math.round(porcen3);
          

           document.write("<br>cantidad 3: "+ contador3 + "--"+ porcen3+"%");

        porcen4=(contador4/(contador+1))*100;
        porcen4=Math.round(porcen4);
          

           document.write("<br>cantidad 4: "+ contador4 + "--"+ porcen4+"%");

        porcen5=(contador5/(contador+1))*100;
        porcen5=Math.round(porcen5);
          

           document.write("<br>cantidad 5: "+ contador5 + "--"+ porcen5+"%");

        porcen6=(contador6/(contador+1))*100;
        porcen6=Math.round(porcen6);
          

           document.write("<br>cantidad 6: "+ contador6 + "--"+ porcen6+"%");

        porcen7=(contador7/(contador+1))*100;
        porcen7=Math.round(porcen7);
          

           document.write("<br>cantidad 7: "+ contador7 + "--"+ porcen7+"%");

        porcen8=(contador8/(contador+1))*100;
        porcen8=Math.round(porcen8);
          

           document.write("<br>cantidad 8: "+ contador8 + "--"+ porcen8+"%");

           
        porcen9=(contador9/(contador+1))*100;
        porcen9=Math.round(porcen9);
          

           document.write("<br>cantidad 9: "+ contador9 + "--"+ porcen9+"%");










          


}// de la funcion