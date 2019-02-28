//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var alambre;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);

    perimetro = largo * 2 + ancho * 2;

    alambre = perimetro * 6;

    alert("Se necesita " + alambre + " Mts de alambre hacer 6 vueltas al terreno.");

   /*if(isNaN(ancho) || isNaN(largo) || ancho < 0 || largo < 0){
        alert("Error. Ingrese medidas validas");
    }
    else{
        perimetro = largo * 2 + ancho * 2;

        alambre = perimetro * 6;

        alert("Se necesita " + alambre + " Mts de alambre hacer 6 vueltas al terreno.");
    }*/


	
}

