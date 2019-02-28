//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;

    for(var i = 1; i <= 6; i++){
       
        nota = parseInt(prompt("Ingresar la nota del alumno " + i));
        sexo = prompt("ingresar el sexo del alumno " + i).toLowerCase();

        while(nota < 0 && nota < 10 || isNaN(nota) && sexo == "f" || sexo == "m" ){
            venta = parseInt(prompt("Error. Ingresar la venta del dia " + i));
}

