function Mostrar()
{
	var diaDeSemana;

	diaDeSemana=prompt("ingrese un dia");

	switch(diaDeSemana)

	{

		case "Sabado":
		case "Domingo":
		alert("es fin de semana");
		break;

		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
		alert("a trabajar!!!");
		break;
	}

}
