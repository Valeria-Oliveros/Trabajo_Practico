//------------------------------------------------------------------------------------------------------------
// Título: Trabajo Práctico Integrador
// Programa: Gestión simple de biblioteca
// Autor: Valeria Oliveros - Agostina Campos - Micaela Martinez - Isabel Peréz - Aketzalli Alonso
// Fecha: 23/09/2025
// Intitución: Ada ITW
//------------------------------------------------------------------------------------------------------------

// 1. Estructura de Datos

// A. Creamos los arrays de los 10 libros que solicita el ejercicio
let libros = [
    { id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes", anio: 1605, genero: "Novela", disponible: true },
    { id: 2, titulo: "El psicoanalista", autor: "John Katzenbach", anio: 2002, genero: "Thriller psicológic0", disponible: true },
    { id: 3, titulo: "Los Cuatro Acuerdos", autor: "Miguel Ruiz", anio: 2024, genero: "Autoayuda", disponible: true },
    { id: 4, titulo: "El ladrón del rayo", autor: "Rick Riordan", anio: 2005, genero: "Fantasia", disponible: true },
    { id: 5, titulo: "Donde no puedas encontrarme", autor: "Tamara Molina", anio: 2024, genero: "Romance", disponible: true },
    { id: 6, titulo: "It", autor: "Stephen King", anio: 1986, genero: "Terror", disponible: true },
    { id: 7, titulo: "El resplandor", autor: "Stephen King", anio: 1977, genero: "Terror", disponible: true },
    { id: 8, titulo: "Harry potter y la piedra filosofal", autor: "J.K. Rowling", anio: 1997, genero: "Fantasia", disponible: true },
    { id: 9, titulo: "Harry potter y las reliquias de la muerte", autor: "J.K. Rowling", anio: 2007, genero: "Fantasia", disponible: true },
    { id: 10, titulo: "La paciente sileciosa", autor: "Alex Michaelides", anio: 2019, genero: "Thriller psicológico", disponible: true },
];
// B. Creamos el array de los 5 usuarios que solicita el ejercicio
let usuarios = [
    { id: 1, nombre: "Valeria Oliveros", email: "valeriao@gmail.com", librosPrestados: [] },
    { id: 2, nombre: "Micaela Martinez", email: "micaelam@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Agostina Campos", email: "agostinac@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Isabel Pérez", email: "isabelp@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Aketzalli Alonso", email: "aketzallia@gmail.com", librosPrestados: [] },
];

// 2.Funciones de gestión de libros -> En este bloque se implementan las funciones básicas para gestionar libros

// A. Función agregar un nuevo libro ->
// Esta función recibe los datos del libro ingresados por el usuario como parámetros 
// Asigna un ID único al nuevo libro
// Lo agrega al array de libros con ayuda del método push
// Muestra un mensaje de confirmación al usuario
// Imprime el array actualizado en la consola
function agregarLibro(titulo, autor, anio, genero) {
    const nuevoId = libros.length > 0 ? Math.max(...libros.map(libro => libro.id)) + 1 : 1;
    const nuevoLibro = {
        id: nuevoId,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true,
    };
    libros.push(nuevoLibro);
    alert("Libro agregado exitosamente.");
    console.log(JSON.stringify(libros, null, 2));
}
// B. Función buscar libro por título, autor o género->
// Esta función recibe un término de búsqueda como parámetro
// Utiliza el método filter para encontrar libros que coincidan con el término en el título, autor o género
// Devuelve un array con los libros encontrados.
function buscarLibro(criterio, valor) {
    let resultadoBusqueda = libros.filter((libro) => libro[criterio] && libro[criterio].toString().toLowerCase().includes(valor.toString().toLowerCase()));
    if (resultadoBusqueda.length > 0) {
        alert("Libro/s encontrado/s con éxito.");
        console.log(JSON.stringify(resultadoBusqueda, null, 2));
    } else {
        alert("No se encontraron libros que coincidan con la búsqueda.");
    }
}
// C. Función ordenar libros por título o año de publicación ->
// Esta función recibe un criterio de ordenamiento (título o año) como parámetro
// Utiliza el método sort para ordenar el array de libros según el criterio especificado
// Imprime el array ordenado en la consola
function ordenarLibros(criterio) {
    if (criterio === "titulo") {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));
        alert("Libros ordenados por título con éxito.");
        console.log(JSON.stringify(libros, null, 2));
        return;
    } else if (criterio === "anio") {
        libros.sort((a, b) => {
            if (a[criterio] < b[criterio]) return -1;
            if (a[criterio] > b[criterio]) return 1;
            return 0;
        });
        alert("Libros ordenados por año con éxito.");
        console.log(JSON.stringify(libros, null, 2));
    }
}
// D. Función borrar libro por ID ->
// Esta función recibe el ID del libro a borrar como parámetro
// Utiliza el método findIndex para localizar el índice del libro en el array
// Si se encuentra, utiliza el método splice para eliminarlo del array
// Muestra un mensaje de confirmación o error según corresponda
// Imprime el array actualizado en la consola
function borrarLibro(id) {
    let index = libros.findIndex((libro) => libro.id === id);
    if (index !== -1) {
        let libroEliminado = libros.splice(index, 1);
        alert("Libro eliminado con éxito.");
        console.log(JSON.stringify(libroEliminado, null, 2) + "\nFue el libro eliminado.");
    } else {
        alert("No se encontró un libro con el ID proporcionado.");
    }
    console.log("Array de libros actualizado:" + JSON.stringify(libros, null, 2));
}


let menu = parseInt(prompt("Ingrese una opcion para continuar: \n1. Gestionar libros \n2. Gestionar usuarios\n3. Sistema de préstamos\n4. Reportes\n5. Identificación de libros\n6. Cálculos Estadísticos\n7. Normalización de datos\n8. Salir"));
while (menu != 8) {
    if (menu == 1) {
        let menuLibros 
        do {
            menuLibros = parseInt(prompt("Seleccione una opción: \n1. Agregar libro\n2. Buscar libro\n3. Ordenar libro\n4. Borrar libro\n5. Volver al menú principal"));
            if (menuLibros == 1) {
                // En está opción del menú -> 
                // le pedimos al usuario los datos del nuevo libro
                // se llama a la función agregarLibro, 
                let titulo = prompt("Ingrese el título del libro: ");
                let autor = prompt("Ingrese el autor del libro: ");
                let anio = parseInt(prompt("Ingrese el año de publicación del libro: "));
                let genero = prompt("Ingrese el género del libro: ");
                agregarLibro(titulo, autor, anio, genero);
            } else if (menuLibros == 2) {
                // En está opción del menú -> 
                // le pedimos al usuario el criterio y valor de búsqueda
                // se llama a la función buscarLibro
                let criteriobusqueda = parseInt(prompt("Ingrese el criterio de búsqueda: \n1. Título\n2. Autor\n3. Género"));
                if (criteriobusqueda == 1) {
                    criterio = "titulo";
                    let valor = prompt("Ingrese el titulo que desea buscar (titulo completo): ");
                    buscarLibro(criterio, valor);
                } else if (criteriobusqueda == 2) {
                    criterio = "autor";
                    let valor = prompt("Ingrese el autor que desea buscar: ");
                    buscarLibro(criterio, valor);
                } else if (criteriobusqueda == 3) {
                    criterio = "genero";
                    let valor = prompt("Ingrese el género que desea buscar: ");
                    buscarLibro(criterio, valor);
                }
            }else if (menuLibros == 3) {
                // En está opción del menú ->
                // le pedimos al usuario el criterio de ordenamiento
                // se llama a la función ordenarLibro
                let criterioOrden = parseInt(prompt("Ingrese el criterio de ordenamiento: \n1. Título\n2. Año"));
                if (criterioOrden == 1) {
                    criterio = "titulo";
                    ordenarLibros(criterio);
                } else if (criterioOrden == 2) {
                    criterio = "anio";
                    ordenarLibros(criterio);
                }
            } else if (menuLibros == 4) {
                // En está opción del menú ->
                // le pedimos al usuario el ID del libro a borrar
                // se llama a la función borrarLibro
                let id = parseInt(prompt("Ingrese el ID del libro que desea borrar: "));
                borrarLibro(id);
            } else if (menuLibros == 5) {
                alert("Volviendo al menú principal...");
            } else {
                alert("Opción no válida. Por favor, ingrese un número del 1 al 5.");
            }
        } while (menuLibros != 5);
    } else if (menu == 2) {
    } else if (menu == 3) {
    } else if (menu == 4) {
    } else if (menu == 5) {  
    } else if (menu == 6) {
    } else if (menu == 7) {
    } else {
        alert("Opción no válida. Por favor, ingrese un número del 1 al 8.");
    }
    menu = parseInt(prompt("Ingrese una opcion para continuar: \n1. Gestionar libros \n2. Gestionar usuarios\n3. Sistema de préstamos\n4. Reportes\n5. Identificación de libros\n6. Cálculos Estadísticos\n7. Normalización de datos\n8. Salir"));
}