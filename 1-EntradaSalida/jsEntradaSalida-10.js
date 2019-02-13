/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var numero1;  
    
    var numero2 = 0.75;

    var resultado

    numero1 = document.getElementById("importe").value;

    numero1 = parseInt(numero1);

    resultado = numero1 * numero2

    document.getElementById("resultado").value = resultado;


    
}
