/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numUno;
	var numDos;

	numUno= document.getElementById('numeroDividendo').value;
	numDos= document.getElementById('numeroDivisor').value;

	var resto = parseInt(numUno) % parseInt(numDos);

	alert("el resto es  "+ resto);
}
