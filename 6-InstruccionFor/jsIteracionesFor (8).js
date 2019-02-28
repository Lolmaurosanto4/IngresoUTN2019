function Mostrar()
{

    var numero;
    var contador = 0;

    numero = parseInt(prompt("Ingrese un numero positivo"));

    while(isNaN(numero) || numero <= 0){
        numero = parseInt(prompt("Eso no es lo pedido. Ingrese un numero positivo"));
    }

    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            console.log(i);
            contador++;
        }
    }
    if(contador == 2){
    console.log(numero + " es un numero primo.");}


}//FIN DE LA FUNCIÓN