// csv-processor.js

// Función para parsear el contenido CSV y convertirlo en una lista de objetos
function parseCSV(csv) {
    try {
        // Divide el contenido CSV en líneas
        const lineas = csv.split('\n');

        // Obtiene los encabezados de la primera línea
        const encabezados = lineas[0].split(',');

        // Inicializa un array para almacenar los resultados
        const resultados = [];

        // Itera a través de las líneas, comenzando desde la segunda línea (índice 1)
        for (let i = 1; i < lineas.length; i++) {
            // Divide la línea en valores separados por comas
            const valores = lineas[i].split(',');

            // Verifica si el número de valores coincide con el número de encabezados
            if (valores.length === encabezados.length) {
                // Crea un objeto para representar a una persona
                const persona = {};

                // Asigna los valores a las propiedades del objeto usando los encabezados como claves
                for (let j = 0; j < encabezados.length; j++) {
                    persona[encabezados[j].trim()] = valores[j].trim();
                }

                // Agrega el objeto de persona al array de resultados
                resultados.push(persona);
            }
        }

        // Devuelve el array de resultados
        return resultados;
    } catch (error) {
        // Lanza una excepción si ocurre un error durante el parseo del CSV
        throw new Error('Error al parsear el archivo CSV: ' + error.message);
    }
}
