//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes
    
    mes = prompt("En que mes estas?").toLowerCase();

    switch(mes){
        case("enero"):
        case("febrero"):
        alert("Veranito!!!");
        break;
        default:
        alert("Extraño enero y febrero");
        break;

    }
	
	
}

