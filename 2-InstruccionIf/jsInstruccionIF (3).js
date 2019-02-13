function Mostrar()
{
//tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad < 18)
{ 
    alert("Menor de edad");
}

    else
{
    alert("Mayor de edad");
}

}//FIN DE LA FUNCIÓN