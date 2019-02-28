function Mostrar()
{
    var numero;
    var contador = 0;

    numero = parseInt(prompt("Ingrese un numero positivo"));

    while(isNaN(numero) || numero <= 0){
        numero = parseInt(prompt("Eso no es lo pedido. Ingrese un numero positivo"));
    }

    for(var i = 1; i <= numero; i++){
        if(i % 2 == 0){
            console.log(i);
            contador++;  
        }
    }

    console.log("Cantidad de pares " + contador);





}//FIN DE LA FUNCIÓN