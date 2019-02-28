//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
    var base;
    
    base = parseInt(document.getElementById("lado").value);

    alert("El perimetro del triangulo es " + base * 3);

   /* if(isNaN(base) || base <= 1){
        alert("Ingrese una base valida");
    }
    else{
        alert("El perimetro del triangulo es " + base * 3);
    }
*/
}


