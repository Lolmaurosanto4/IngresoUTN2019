function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

while( !(sexo == "f" || sexo == "m" ) ) {
    sexo = prompt("Error. Ingrese un sexo valido").toLowerCase();
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN