//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var precio;
    var IVA = 21/100;
    var precioFinal;

    precio = parseFloat(prompt("Ingrese el valor del producto "));

/*    while(isNaN(precio) || precio < 0){
        precio = parseFloat(prompt("Error. Ingrese el valor del producto "));
    }*/

    precioFinal = precio * IVA + precio;

    document.getElementById("importe").value =  precioFinal;

}

