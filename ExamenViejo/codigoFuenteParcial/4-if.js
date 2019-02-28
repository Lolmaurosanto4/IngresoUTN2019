//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1;
    var numero2;

    numero1 = parseInt(prompt("Ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));
//alert(isNaN(numero1));
//alert(isNaN(numero2));
    if(numero1 == numero2){
        mensaje = "El producto es " + numero1 * numero2;
    }
    else if(numero1 > numero2){
        mensaje = "La resta es " + numero1 - numero2;
    }
    else{
        mensaje = "La suma es " + numero1 - numero2;
    }

    document.write(mensaje);

}

