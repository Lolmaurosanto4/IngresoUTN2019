#include <stdio.h>
#include <stdlib.h>
#include "pelicula.h"
#define T 2000

int main()
{

    int indice;
    int opcion;

    ePelicula lista[T];
    inicializarPelicula(lista,T);

    eGenero sectores[3] = {{1,"Contabilidad",100},{2,"Sistemas",200},{3, "RRHH", 150}};




hardcodearDatosPelicula(lista,6);
    do
    {
        opcion = menuDeOpciones("1.Alta\n2.Baja\n3.Modificar\n4.Mostrar\n5.Salir\nElija una opcion: ");
        switch(opcion)
        {
            case 1:
                cargarPelicula(lista,  T);

            break;
            case 2:
                borrarPelicula(lista, T, 3);
                break;
            case 3:

                modificar(lista, T, 3);
            break;

            case 4:
                mostrarListaPelicula(lista, T, sectores, 3);
                break;
            case 5:

                break;


        }
    }while(opcion!=5);
}
