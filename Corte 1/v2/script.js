function parseCSV(csvText) {
    console.log('Texto CSV recibido:', csvText); // Para depuración
    // Normalizar saltos de línea y eliminar espacios en blanco al inicio/fin
    const normalizedText = csvText.replace(/\r\n|\r|\n/g, '\n').trim();
    const lines = normalizedText.split('\n');
    console.log('Líneas detectadas:', lines.length); // Para depuración
    
    if (lines.length < 2) {
        throw new Error('El CSV no contiene datos válidos');
    }

    const headers = lines[0].split(';');
    const data = lines.slice(1)
        .filter(line => line.trim() !== '') // Eliminar líneas vacías
        .map(line => {
            const values = line.split(';');
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index] || ''; // Manejar valores undefined
                return obj;
            }, {});
        });
    console.log('Datos parseados:', data); // Para depuración
    return data;
}

function analyzeCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecciona un archivo CSV primero');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const csvText = e.target.result;
            const data = parseCSV(csvText);

            // Sort alphabetically by ApellidosNombres
            data.sort((a, b) => a.ApellidosNombres.localeCompare(b.ApellidosNombres));

            // Separate by gender
            const women = data.filter(person => person.Genero === 'F');
            const men = data.filter(person => person.Genero === 'M');
            console.log('Mujeres:', women.length, 'Hombres:', men.length); // Para depuración

            const groups = [];
            let currentWomen = [...women];
            let currentMen = [...men];

            // Create groups with at least one woman when possible
            while (currentWomen.length > 0 || currentMen.length > 0) {
                const group = [];
                
                // Add one woman if available
                if (currentWomen.length > 0) {
                    group.push(currentWomen.shift());
                }

                // Fill the rest of the group (up to 3 total)
                while (group.length < 3 && (currentMen.length > 0 || currentWomen.length > 0)) {
                    if (currentMen.length > 0) {
                        group.push(currentMen.shift());
                    } else if (currentWomen.length > 0) {
                        group.push(currentWomen.shift());
                    }
                }

                if (group.length > 0) {
                    groups.push(group);
                }
            }

            // Display results
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<h2>Grupos formados:</h2>';
            
            groups.forEach((group, index) => {
                const groupHtml = `
                    <div class="group">
                        <h3>Grupo ${index + 1}</h3>
                        <ul>
                            ${group.map(person => `
                                <li>${person.ApellidosNombres} (${person.Genero})</li>
                            `).join('')}
                        </ul>
                    </div>
                `;
                resultDiv.innerHTML += groupHtml;
            });

            resultDiv.innerHTML += `<p>Total de grupos: ${groups.length}</p>`;
        } catch (error) {
            alert('Error al procesar el CSV: ' + error.message);
            console.error('Error:', error);
        }
    };

    reader.onerror = function() {
        alert('Error al leer el archivo');
        console.error('Error al leer el archivo');
    };

    reader.readAsText(file);
}