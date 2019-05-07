#include <stdio.h>

#define LIBRE 0
#define OCUPADO 1

typedef struct
{
    int dia;
    int mes;
    int anio;
}eFecha;

typedef struct
{
    int idGenero;
    char descripcion[20];
     float valor;

}eGenero;

typedef struct
{
    int Numero;
    char nombre[20];
    int idGenero;
    int estado;

} ePelicula;

void mostrarPelicula(ePelicula, eGenero[], int);
void cargarPelicula(ePelicula[], int);
void mostrarListaPelicula(ePelicula[], int, eGenero[], int);

int buscarLibre(ePelicula[], int);
void inicializarPelicula(ePelicula[], int);
void hardcodearDatosPelicula(ePelicula[], int);
void modificar(ePelicula[], int, int);
int buscarNumero(ePelicula[], int, int);
void borrarPelicula(ePelicula[], int, int);


