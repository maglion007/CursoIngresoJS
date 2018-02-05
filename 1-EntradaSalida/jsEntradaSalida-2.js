/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	// esto es un comentario

    // alert("anda");
	// toda linea de instruccion , termina con punto y coma (;)
	var nombre;
	/*
	es en bloque
	var nombre;
	alert("nombre");
	alert(nombre);
	nombre="martin";
	alert(nombre)
	*/
	nombre=prompt("ingrese su nombre");
	//var person = prompt("Please enter your name", "natalia natalia");
	/*
	alert(  "su nombre es:");
	alert(   nombre)
	*/
	alert("su nombre es:  "+ nombre);
}

