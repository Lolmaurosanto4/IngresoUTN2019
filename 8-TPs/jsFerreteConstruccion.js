/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;

    var ancho;

    var perimetro;

    var alambre;

    largo = parseFloat(document.getElementById("Largo").value);

    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = largo * 2 + ancho * 2;

    alambre= perimetro * 3;

    alert("Se tiene que comprar " + alambre + "mts de alambre");

}
function Circulo () 
{
    var radio;

    var perimetro;

    var alambre;

    largo = parseFloat(document.getElementById("Radio").value);

    perimetro = largo * 2 * Math.PI;

    alambre = perimetro * 3;

    alambre = alambre.toFixed(2);

    alert("Se tiene que comprar " + alambre + "mts de alambre");
	
}
function Materiales () 
{
	var largo;

    var ancho;

    var area;

    var cemento;

    var cal;

    largo = parseFloat(document.getElementById("Largo").value);

    ancho = parseFloat(document.getElementById("Ancho").value);

    area = largo * ancho;

    cemento = area * 2;

    cal = area * 3;

    alert("Se nececita para una superficie de " + area + " m2 " + cemento + " bolsas de cemento y " + cal + " bolsas de cal")

    


}