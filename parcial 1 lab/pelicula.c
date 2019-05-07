#include "pelicula.h"

char getNumeroAleatorio(int desde , int hasta, int iniciar)
{
    if(iniciar)
        srand (time(NULL));
    return 1000 + (rand() % (2000 + 1 - 1000)) ;
}

int menuDeOpciones(char mensaje[])
{
    int opcion;
    printf("%s", mensaje);
    scanf("%d", &opcion);

    return opcion;
}


void cargarPelicula(ePelicula lista[], int tam)
{
    int i;

    i = buscarLibre(lista, tam);
    if(i!=-1)
    {
        printf("Ingrese legajo: ");
        scanf("%d", &lista[i].Numero);
        printf("Ingrese nombre: ");
        fflush(stdin);
        gets(lista[i].nombre);

        lista[i].estado = OCUPADO;

    }
    else
    {
        printf("No hay espacio");
    }



}

void mostrarListaPelicula(ePelicula lista[], int tam, eGenero generos[], int ts)
{
    int i;
    for(i=0; i<tam; i++)
    {
        if(lista[i].estado!=LIBRE)
        {
            mostrarPelicula(lista[i], generos, ts);
        }

    }
}
void mostrarPelicula(ePelicula unaPelicula, eGenero generos[], int ts)
{

    char descripcionGenero[20];
    int i;

    for(i=0; i<ts; i++)
    {
        if(unaPelicula.idGenero==generos[i].idGenero)
        {
            strcpy(descripcionGenero, generos[i].descripcion);
            break;
        }
    }

    printf("%4d %10s %c %4f %4f   %s\n", unaPelicula.Numero,unaPelicula.nombre, descripcionGenero);






}
int buscarLibre(ePelicula lista[], int tam)
{
    int i;
    int index=-1;
    for(i=0; i<tam; i++)
    {
        if(lista[i].estado==LIBRE)
        {
            index = i;
            break;
        }
    }
    return index;
}
void inicializarPelicula(ePelicula lista[], int tam)
{
    int i;
    for(i=0; i<tam; i++)
    {
        lista[i].estado = LIBRE;
    }
}

void hardcodearDatosPelicula(ePelicula lista[], int tam)
{
    int i;
    int Numero[]= {1001,1002,1003,1004,1005,1006};
    char nombres[][50]= {};
    int genero[]={1,2,3,1,2,2};

    for(i=0; i<tam; i++)
    {
        lista[i]. Numero = Numero[i];
        strcpy(lista[i].nombre, nombres[i]);
        lista[i].estado = OCUPADO;
        lista[i].idGenero = genero[i];


    }




}
void modificar(ePelicula lista[], int tam, int numero)
{

    int i;
    int loEncontro = 0;
    printf("Ingrese numero de la pelicula: ");
    scanf("%d", &numero);

    for(i=0; i<tam; i++)
    {
        if(numero  == lista[i].Numero)
        {


            printf("Ingrese un nuevo sueldo bruto: ");
            scanf("%f", &lista[i].nombre);


            loEncontro = 1;
            break;//modifcar
        }

    }

    if(loEncontro==0)
    {
        printf("El dato no existe");
    }





}

void borrarPelicula(ePelicula lista[], int tam, int numero)
{

    int i;
    int loEncontro = 0;
    printf("Ingrese numero de la pelicula: ");
    scanf("%d", &numero);

    for(i=0; i<tam; i++)
    {
        if(numero == lista[i].Numero)
        {

            lista[i].estado = LIBRE;


            loEncontro = 1;
            break;//modifcar
        }

    }

    if(loEncontro==0)
    {
        printf("El dato no existe");
    }

}


