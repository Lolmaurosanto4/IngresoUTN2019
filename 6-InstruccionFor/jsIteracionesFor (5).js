function Mostrar()
{

    var i;
    for(  ;  ;  ){

        i = parseInt(prompt("Ingrese un numero"));
        while(isNaN(i)){
            i = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
        }
        if(i == 9){
            break;
        }
        console.log(i);
    }



}//FIN DE LA FUNCIÓN