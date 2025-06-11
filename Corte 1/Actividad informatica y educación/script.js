// Respuestas correctas
const correctAnswers = {
    sinonimo1: "a",
    sinonimo2: "b",
    sinonimo3: "a",
    antonimo1: "b",
    antonimo2: "b",
    antonimo3: "b"
};

// Verificar respuestas de sinónimos
function checkSinonimos() {
    let allAnswered = true;
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const questionName = `sinonimo${i}`;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        const resultDiv = document.getElementById(`resultSinonimo${i}`);

        if (!selectedOption) {
            allAnswered = false;
            resultDiv.textContent = "Por favor selecciona una respuesta";
            resultDiv.className = "result incorrect";
            resultDiv.style.display = "block";
            continue;
        }

        if (selectedOption.value === correctAnswers[questionName]) {
            resultDiv.textContent = "¡Correcto!";
            resultDiv.className = "result correct";
            score++;
        } else {
            resultDiv.textContent = "Incorrecto. Intenta nuevamente.";
            resultDiv.className = "result incorrect";
        }
        resultDiv.style.display = "block";
    }

    if (allAnswered) {
        alert(`Obtuviste ${score} de 3 respuestas correctas en sinónimos.`);
    }
}

// Verificar respuestas de antónimos
function checkAntonimos() {
    let allAnswered = true;
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const questionName = `antonimo${i}`;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        const resultDiv = document.getElementById(`resultAntonimo${i}`);

        if (!selectedOption) {
            allAnswered = false;
            resultDiv.textContent = "Por favor selecciona una respuesta";
            resultDiv.className = "result incorrect";
            resultDiv.style.display = "block";
            continue;
        }

        if (selectedOption.value === correctAnswers[questionName]) {
            resultDiv.textContent = "¡Correcto!";
            resultDiv.className = "result correct";
            score++;
        } else {
            resultDiv.textContent = "Incorrecto. Intenta nuevamente.";
            resultDiv.className = "result incorrect";
        }
        resultDiv.style.display = "block";
    }

    if (allAnswered) {
        alert(`Obtuviste ${score} de 3 respuestas correctas en antónimos.`);
    }
}

// Manejar medios de comunicación
// Array de medios de comunicación válidos (en minúsculas para comparación sin case sensitive)
const mediosValidos = [
    "edición de libros",
    "prensa escrita",
    "prensa",
    "radio",
    "televisión",
    "cine",
    "internet",
    "multimedia",
    "servicio de red social",
    "libros",
    "periódicos",
    "revistas",
    "tv",
    "redes sociales"
];

// Manejar medios de comunicación
const mediaInput = document.getElementById('mediaInput');
const mediaList = document.getElementById('mediaList');
const medios = [];

mediaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        if (medios.length < 3) {
            const medioIngresado = this.value.trim().toLowerCase();
            
            // Verificar si el medio es válido
            if (mediosValidos.some(medio => medio === medioIngresado)) {
                if (!medios.includes(medioIngresado)) {
                    medios.push(medioIngresado);
                    const li = document.createElement('li');
                    li.textContent = this.value.trim();
                    mediaList.appendChild(li);
                    this.value = '';
                    
                    if (medios.length === 3) {
                        this.disabled = true;
                    }
                } else {
                    alert("Este medio ya fue ingresado. Por favor ingresa uno diferente.");
                }
            } else {
                alert("Por favor ingresa un medio de comunicación válido. Ejemplos: Radio, Televisión, Internet");
            }
        }
    }
});

// Verificar medios de comunicación
function checkMedios() {
    const resultDiv = document.getElementById('resultMedios');
    
    if (medios.length < 3) {
        resultDiv.textContent = `Por favor ingresa ${3 - medios.length} medios más válidos. Ejemplos: ${mediosValidos.slice(0, 5).join(", ")}...`;
        resultDiv.className = "result incorrect";
    } else {
        const mediosFormateados = medios.map(m => m.charAt(0).toUpperCase() + m.slice(1));
        resultDiv.textContent = `¡Correcto! Medios ingresados: ${mediosFormateados.join(", ")}`;
        resultDiv.className = "result correct";
    }
    resultDiv.style.display = "block";
}