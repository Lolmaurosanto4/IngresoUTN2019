function Mostrar()
{
//tomo la edad  


var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad < 13)
{ 
alert("Es un niño");
}

else if(edad >= 13 && edad <= 17)
{
    alert("Es adolescente");
}

else
{
    alert("Es mayor de edad");
}



}//FIN DE LA FUNCIÓN
