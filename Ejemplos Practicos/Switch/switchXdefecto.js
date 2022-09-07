/*
Opcion predetermeinada con switch
*/

function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case "1":
            console.log("Hola Mundo");
            break;
        case "2":
            console.log("Español");
            break;
        case "3":
            console.log("Frances");
            break;
        case "4":
            console.log("Chino");
            break;
        case "5":
            console.log("Aleman");
            break;
        default:  // opcion predterminada (default)
            console.log("Ingles");
            break;
    }
    return idioma;
}

seleccionarIdioma("0"); // Ingles, por defecto
seleccionarIdioma("1"); // Hola Mundo
seleccionarIdioma("2"); // Español
seleccionarIdioma("3"); // Frances
seleccionarIdioma("4"); // Chino
seleccionarIdioma("5"); // Aleman
seleccionarIdioma("6"); // Ingles, por defecto

