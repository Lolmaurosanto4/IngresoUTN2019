function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var min;
	var max;

	do{
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		if(max < numero || contador == 0){
			max = numero;
		}
		if(min > numero || contador == 0){
			min = numero;
		}
		contador++;
		respuesta = prompt("Quiere seguir ingresando numeros?");
	}while(respuesta == "si".toLowerCase());

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
	





}//FIN DE LA FUNCIÓN