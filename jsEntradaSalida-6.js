/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//var numeroUno "2";
	//var numeroDos "3";

	var resultado;
	var numeroUno;
	var numeroDos;

    numero=document.getElementById('numeroUno').value;
    numero=document.getElementById('numeroDos').value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

	resultado=numeroUno + numeroDos;
	alert(resultado);
 
}

