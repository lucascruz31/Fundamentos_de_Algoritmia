// script.js

// Agrega un escuchador de eventos al botón "Organizar Grupos"
document.getElementById('organizarGrupos').addEventListener('click', function() {
    // Obtiene el archivo CSV seleccionado por el usuario
    const archivo = document.getElementById('archivoCSV').files[0];

    // Verifica si se seleccionó un archivo
    if (!archivo) {
        alert('Por favor, selecciona un archivo CSV.');
        return; // Detiene la ejecución si no hay archivo
    }

    // Crea un objeto FileReader para leer el contenido del archivo
    const lector = new FileReader();

    // Define la función que se ejecutará cuando la lectura del archivo esté completa
    lector.onload = function(evento) {
        try {
            // Obtiene el contenido del archivo como texto
            const contenidoCSV = evento.target.result;

            // Parsea el contenido CSV para obtener una lista de objetos de personas
            const listaPersonas = parseCSV(contenidoCSV);

            // Verifica si la lista de personas está vacía o es inválida
            if (!listaPersonas || listaPersonas.length === 0) {
                throw new Error('El archivo CSV está vacío o tiene un formato incorrecto.');
            }

            // Organiza a las personas en grupos según las reglas especificadas
            const grupos = organizarGrupos(listaPersonas);

            // Muestra los grupos en la página web
            mostrarGrupos(grupos);
        } catch (error) {
            // Muestra un mensaje de error al usuario
            alert('Error al procesar el archivo CSV. Por favor, verifica el formato e intenta nuevamente. Detalles del error: ' + error.message);
        }
    };

    // Define la función que se ejecutará si ocurre un error durante la lectura del archivo
    lector.onerror = function(error) {
        // Muestra un mensaje de error al usuario
        alert('Error al leer el archivo CSV. Por favor, intenta nuevamente. Detalles del error: ' + error.message);
    };

    // Lee el archivo como texto
    lector.readAsText(archivo);
});

// ... (resto del código: organizarGrupos, mostrarGrupos)