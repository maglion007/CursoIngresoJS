/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;

	var rdo = parseInt(numUno, 10) + parseInt(numDos, 10);

	alert("la suma es  "+ rdo);
 
}

