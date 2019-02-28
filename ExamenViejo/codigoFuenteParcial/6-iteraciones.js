//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var max;
    var min;
    var diamax;
    var diamin;
    var flag = 0;
    
    /*venta = parseInt(prompt("Ingresar la venta del lunes"));

    while(venta < 0 || isNaN(venta)){
        venta = parseInt(prompt("Ingresar la venta del lunes"));
    }*/

    for(var i = 1; i <= 7; i++){
       
        venta = parseInt(prompt("Ingresar la venta del dia " + i));

        while(venta < 0 || isNaN(venta)){
            venta = parseInt(prompt("Error. Ingresar la venta del dia " + i));
        }

        if(venta > max || flag == 0){
            max = venta;
            diamax = i;
        }
        if(venta < min || flag == 0){
            min = venta;
            diamin = i;
            flag = 1;
        }

    }

    alert("La venta maxima fue " + max + " El dia " + diamax + "\nLa venta minima fue " + min + " El dia " + diamin);
		
}

