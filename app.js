//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Título: Trabajo Práctico Integrador
// Programa: Gestión simple de biblioteca
// Autor: Valeria Oliveros - Agostina Campos - Micaela Martinez - Isabel Peréz - Aketzalli Alonso
// Fecha: 23/09/2025
// Intitución: Ada ITW
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1. Estructura de Datos------------------------------------------------------------------------------------------------------------------------------------------

// A. Creamos los arrays de los 10 libros que solicita el ejercicio
let libros = [
    { id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes", anio: 1605, genero: "Novela", disponible: true },
    { id: 2, titulo: "El psicoanalista", autor: "John Katzenbach", anio: 2002, genero: "Thriller psicológic0", disponible: true },
    { id: 3, titulo: "Los 4 Acuerdos", autor: "Miguel Ruiz", anio: 2024, genero: "Autoayuda", disponible: true },
    { id: 4, titulo: "El ladron del rayo", autor: "Rick Riordan", anio: 2005, genero: "Fantasia", disponible: true },
    { id: 5, titulo: "Donde no puedas encontrarme", autor: "Tamara Molina", anio: 2024, genero: "Romance", disponible: true },
    { id: 6, titulo: "It", autor: "Stephen King", anio: 1986, genero: "Terror", disponible: true },
    { id: 7, titulo: "El resplandor", autor: "Stephen King", anio: 1977, genero: "Terror", disponible: true },
    { id: 8, titulo: "Harry potter y la piedra filosofal", autor: "J.K. Rowling", anio: 1997, genero: "Fantasia", disponible: true },
    { id: 9, titulo: "Harry potter y las reliquias de la muerte", autor: "J.K. Rowling", anio: 2007, genero: "Fantasia", disponible: true },
    { id: 10, titulo: "La paciente sileciosa", autor: "Alex Michaelides", anio: 2019, genero: "Thriller psicológico", disponible: true },
];
// B. Creamos el array de los 5 usuarios que solicita el ejercicio
let usuarios = [
    { id: 1, nombre: "Valeria Oliveros", email: "valeriaO@gmail.com", librosPrestados: [] },
    { id: 2, nombre: "Micaela Martinez", email: "micaelaM@gmail.com", librosPrestados: [] },
    { id: 3, nombre: "Agostina Campos", email: "agostinaC@gmail.com", librosPrestados: [] },
    { id: 4, nombre: "Isabel Pérez", email: "isabelP@gmail.com", librosPrestados: [] },
    { id: 5, nombre: "Aketzalli Alonso", email: "aketzalliA@gmail.com", librosPrestados: [] },
];

// 2.Funciones de gestión de libros -> En este bloque se implementan las funciones básicas para gestionar libros---------------------------------------------------
 
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

// 3. Funciones de gestión de usuarios -> En este bloque se implementan las funciones básicas para gestionar usuarios----------------------------------------------

// ⚠️ Falta 
// A. Función agregar un nuevo usuario ->
// B. Función muestra el array completo de usuarios
// C. Función buscar usuario por email
// D. Función borrar usuario por su nombre y email

// 4. Funciones de sistema de préstamos -> En este bloque se implementan las funciones básicas para gestionar el sistema de préstamos------------------------------

// Funciones para mostrar los libros disponibles y prestados ->
function mostrarLibrosDisponibles() {
    const librosDisponibles = libros.filter(libro => libro.disponible);
    if (librosDisponibles.length > 0) {
        const listadoLibrosDisponibles = librosDisponibles.map(book => `ID: ${book.id}, Título: ${book.titulo}`).join('\n');
        console.log(listadoLibrosDisponibles);
    } else {
        alert("No hay libros disponibles en este momento.");
    }
}
function mostrarLibrosPrestados() {
    const librosPrestados = libros.filter(libro => !libro.disponible);  
    if (librosPrestados.length > 0) {
        const listadoLibrosPrestados = librosPrestados.map(book => `ID: ${book.id}, Título: ${book.titulo}`).join('\n');
        console.log(listadoLibrosPrestados);
    } else {
        alert("No hay libros prestados en este momento.");
    }
}

// A. Función prestar libro a un usuario ->
function prestarLibro(idLibro, idUsuario) {
    //Se utiliza el método fin para encontrar el ID del usuario y el ID del libro.
    const Busquedalibro = libros.find(book => book.id === idLibro);
    const BusquedaUsuario = usuarios.find(user => user.id === idUsuario);
    // Se verifica el idLibro ingresado.
    if (!Busquedalibro) {
        alert("Error: libro con ID: " + idLibro + " no encontrado");
        return;
    }
    // Se verifica el idUsuario ingresado.
    if (!BusquedaUsuario) {
        alert("Error: usuario con ID: " + idUsuario + " no encontrado");
        return;
    }
    // Se verifica la disponibilidad del libro.
    if (!Busquedalibro.disponible) {
        alert("Error: El libro con ID: " + idLibro + " no está disponible");
        return;
    }
    // Se coloca la disponibilidad(false) del libro que ha sido prestado.
    Busquedalibro.disponible = false;
    //Se agrega a la caracteristica del usuario libros prestados(titulo del libro).
    BusquedaUsuario.librosPrestados.push(Busquedalibro.titulo);
    alert("El libro: '" + Busquedalibro.titulo + "' ha sido prestado");
    //return true;
};

// B. Función devolver libro prestado por un usuario ->
function devolverLibro(idLibro, idUsuario) {
    // Se llaman las variables de busqueda del ID del libro y del ID del usuario.
    const Busquedalibro = libros.find(book => book.id === idLibro);
    const BusquedaUsuario = usuarios.find(user => user.id === idUsuario);
    // Se verifica la información del idLibro ingresado.
    if (!Busquedalibro) {
        alert("Error: libro con ID" + idLibro + "no encontrado");
        return;
    }
    // Se verifica la información del idUsuario ingresado.
    if (!BusquedaUsuario) {
        alert("Error: usuario con ID" + idUsuario + "no encontrado");
        return;
    }
    // Se verifica si el libro está en la lista de libros prestados del usuario.
    const indiceLibroPrestado = BusquedaUsuario.librosPrestados.indexOf(Busquedalibro.titulo);
    if (indiceLibroPrestado === -1) {
        alert("Error: el libro no está prestado a este usuario");
        return;
    }
    // Se actualiza la disponibilidad del libro a true (disponible).
    Busquedalibro.disponible = true;
    //Se elimina de el libro del usuario con el método splice.
    BusquedaUsuario.librosPrestados.splice(indiceLibroPrestado, 1); // cambia la disponibilidad del libro
    alert("El libro: '" + Busquedalibro.titulo + "' ha sido devuelto exitosamente");
    //return "libro devuelto exitosamente";
};

// 5. Funciones de reportes -> En este bloque se implementan las funciones básicas para generar reportes-----------------------------------------------------------

function generarReporteLibros(libros) { // Cantidad total de libros 
    const cantidadTotal = libros.length;
    // Libros prestados
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
    // Cantidad de libros por género 
    const librosPorGenero = libros.reduce((acumulador, libro) => { acumulador[libro.genero] = (acumulador[libro.genero] || 0) + 1; return acumulador; }, {});
    // Libro más antiguo y más nuevo 
    const libroMasAntiguo = libros.reduce((antiguo, libro) => { return (!antiguo || libro.anio < antiguo.anio) ? libro : antiguo; }, null);
    const libroMasNuevo = libros.reduce((nuevo, libro) => { return (!nuevo || libro.anio > nuevo.anio) ? libro : nuevo; }, null);
    // Resultado del reporte
    console.log("Cantidad total de libros: " + cantidadTotal);
    console.log("Cantidad de libros prestados: " + librosPrestados);
    console.log("Cantidad de libros por género: " + JSON.stringify(librosPorGenero, null, 2));
    console.log("Libro más antiguo: " + (libroMasAntiguo ? JSON.stringify(libroMasAntiguo, null, 2) : "No hay libros en la biblioteca"));
    console.log("Libro más nuevo: " + (libroMasNuevo ? JSON.stringify(libroMasNuevo, null, 2) : "No hay libros en la biblioteca"));
} 

// 6. Funciones de identificación avanzada de libros -> En este bloque se implementa la funcion básicas para identificar libros------------------------------------

function librosConPalabrasEnTitulo(){
    //Se filtran los titulos de libros que contengan solo letras mayúsculas y minúsculas
    let titulosFiltro = libros.filter(libro =>{
        const soloLetras = /^[a-zA-Z\s]+$/;

        if(!soloLetras.test(libro.titulo)){
            return false;
        }
        // Se eliminan los espacios y manetenemos solo la cadena.
        const CantidadPalabras = libro.titulo.trim().split(/\s+/);
        return CantidadPalabras.length > 1; // verificamos que los titulos tengan más de 1 palabra
    });
if(titulosFiltro.length === 0){
    console.log("No se encontró ningun Titulo que contenga más de una palabra y solo letras");
    return[];
}else{
    //abtenemos un array modificado
    //const soloTitulos = titulosFiltro.map(libro => libro.titulo);
    const soloTitulos = titulosFiltro.map(libro => `* ${libro.titulo}`).join('\n');
    console.log("Titulos de libros con más de una palabra y solo letras");
    console.log(soloTitulos);
}
};

// 7. Funciones de cálculos estadísticos -> En este bloque se implementan las funciones básicas para realizar cálculos estadísticos--------------------------------

// ⚠️ Falta 

// 8. Funciones de normalización de datos -> En este bloque se implementan las funciones básicas para normalizar datos---------------------------------------------

function normalizarDatos(libros, usuarios) {
    // Convertir todos los títulos a mayúsculas
    const titulosMayusculas = libros.map(libro => libro.titulo.toUpperCase());
    const listadoTitulosMayusculas = titulosMayusculas.map(title => `* ${title}`).join('\n');
    // Eliminar espacios en blanco al inicio y final de los nombres de autores
    const autoresNormalizados = libros.map(libro => libro.autor.trim());
    const listadoAutoresNormalizados = autoresNormalizados.map(author => `* ${author}`).join('\n');
    // Formatear los emails de los usuarios a minúsculas
    const usuariosNormalizados = usuarios.map(usuario => ({ ...usuario, email: usuario.email.toLowerCase() }));
    const listadoUsuariosNormalizados = usuariosNormalizados.map(user => `ID: ${user.id}, Email: ${user.email}`).join('\n');
    // CORRECCIÓN: Se eliminó JSON.stringify() para mostrar la salida correctamente
    console.log("Títulos en mayúsculas:\n" + listadoTitulosMayusculas);
    console.log("Nombres de autores normalizados:\n" + listadoAutoresNormalizados);
    console.log("Usuarios con emails en minúsculas:\n" + listadoUsuariosNormalizados);
}

// 9. Menú de opciones -> En este bloque se implementa el menú de opciones para que el usuario pueda interactuar con el sistema------------------------------------

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
        // ⚠️ Falta 
    } else if (menu == 3) {
        let menuPrestamos
        do {
            menuPrestamos = parseInt(prompt("Seleccione una opción: \n1. Prestar libro\n2. Devolver libro\n3. Volver al menú principal"));
            if (menuPrestamos == 1) {
                alert("Mostrando listados de libros y usuarios disponibles...");
                mostrarLibrosDisponibles();
                const listadoUsuarios = usuarios.map(user => `ID: ${user.id}, Nombre: ${user.nombre}`).join('\n');
                console.log("Listado de usuarios:\n" + listadoUsuarios);
                // En está opción del menú -> 
                // le pedimos al usuario los datos del libro que desea prestar y el usuario al que se lo presta
                // se llama a la función prestarLibro, 
                let idLibro = parseInt(prompt("Ingrese el ID del libro que desea prestar: "));
                let idUsuario = parseInt(prompt("Ingrese el ID del usuario al que desea prestar el libro: "));
                prestarLibro(idLibro, idUsuario);
            } else if (menuPrestamos == 2) {
                alert("Mostrando listados de libros que pueden ser devueltos y usuarios disponibles...");
                mostrarLibrosPrestados();
                const listadoUsuarios = usuarios.map(user => `ID: ${user.id}, Nombre: ${user.nombre}`).join('\n');
                console.log("Listado de usuarios:\n" + listadoUsuarios);
                // En está opción del menú -> 
                // le pedimos al usuario los datos del libro que desea devolver y el usuario que lo devuelve
                // se llama a la función devolverLibro, 
                let idLibro = parseInt(prompt("Ingrese el ID del libro que desea devolver: "));
                let idUsuario = parseInt(prompt("Ingrese el ID del usuario que devuelve el libro: "));
                devolverLibro(idLibro, idUsuario);
            } else if (menuPrestamos == 3) {
                alert("Volviendo al menú principal...");
            } else {
                alert("Opción no válida. Por favor, ingrese un número del 1 al 3.");
            }
        } while (menuPrestamos != 3);
    } else if (menu == 4) {
        generarReporteLibros(libros);
        alert("Generando reportes...");
    } else if (menu == 5) {  
        librosConPalabrasEnTitulo();
        alert("Mostrando listado de libros...");
    } else if (menu == 6) {
        // ⚠️ Falta 
    } else if (menu == 7) {
        normalizarDatos(libros, usuarios);
        alert("Normalizando datos...");
    } else {
        alert("Opción no válida. Por favor, ingrese un número del 1 al 8.");
    }
    menu = parseInt(prompt("Ingrese una opcion para continuar: \n1. Gestionar libros \n2. Gestionar usuarios\n3. Sistema de préstamos\n4. Reportes\n5. Identificación de libros\n6. Cálculos Estadísticos\n7. Normalización de datos\n8. Salir"));
}