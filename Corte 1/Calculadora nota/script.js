function calcularNota() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const notaFinalDeseada = 3.0;

    const porcentajePrimerCorte = 0.3; // 30%
    const porcentajeSegundoCorte = 0.3; // 30%
    const porcentajeTercerCorte = 0.4; // 40%

    if (isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa notas válidas.";
        return;
    }

    // Fórmula con los porcentajes:
    // (nota1 * porcentajePrimerCorte) + (nota2 * porcentajeSegundoCorte) + (notaNecesaria * porcentajeTercerCorte) = notaFinalDeseada
    // Despejando notaNecesaria:
    // notaNecesaria = (notaFinalDeseada - (nota1 * porcentajePrimerCorte) - (nota2 * porcentajeSegundoCorte)) / porcentajeTercerCorte

    const notaNecesaria = (notaFinalDeseada - (nota1 * porcentajePrimerCorte) - (nota2 * porcentajeSegundoCorte)) / porcentajeTercerCorte;

    if (notaNecesaria > 5) {
        document.getElementById("resultado").textContent = "¡Uy! Parece que es imposible alcanzar el 3.0 con las notas actuales (necesitas más de 5.0 en el último corte).";
    } else if (notaNecesaria < 0) {
        document.getElementById("resultado").textContent = "¡Felicidades! Ya tienes un promedio mayor a 3.0, incluso si sacas un 0.0 en el último corte.";
    } else {
        document.getElementById("resultado").textContent = `Necesitas un ${notaNecesaria.toFixed(1)} en el último corte para obtener un 3.0 final.`;
    }
}