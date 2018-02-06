/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;

	var rdo = parseInt(numUno) + parseInt(numDos);

	alert("la suma es  "+ rdo);
}

function restar()
{
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;

	var rdo = parseInt(numUno) - parseInt(numDos);

	alert("la resta es  "+ rdo);
}

function multiplicar()
{ 
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;

	var rdo = parseInt(numUno) * parseInt(numDos);

	alert("la multiplicacion es  "+ rdo);
}

function dividir()
{
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;

	var rdo = parseInt(numUno) / parseInt(numDos);

	alert("la division es  "+ rdo);
}

