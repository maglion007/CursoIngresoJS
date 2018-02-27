
function Mostrar()
{

	var base;
	var altura;
	var perimetro;
	var superficie;

	base=document.getElementById('laBase').value;
	altura=prompt("ingresar altura ");

	perimetro=base*3;
	superficie=(base*altura)/2;

	alert("el perimetro es " + perimetro + "y la superficie es " + superficie );



}
