/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var numero1;  
    
    var numero2 = 1.10;

    var resultado;

    var total

    numero1 = document.getElementById("sueldo").value;

    numero1 = parseInt(numero1);

    resultado = numero1 * numero2

    document.getElementById("resultado").value = resultado;
    
    total = resultado - numero1
    
    alert("El aumento es de " + total)

	
}
