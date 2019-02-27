function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	do{
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		if(numero >= 0){
		positivo = positivo + numero;
		}
		else{
		negativo= negativo * numero;
		contador++;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");

	}while(respuesta == "si".toLowerCase());


document.getElementById('suma').value=positivo;
if(contador == 0){
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN