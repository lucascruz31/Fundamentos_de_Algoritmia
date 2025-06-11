// Variables y Tipos de Datos
function mostrarTipos() {
    let nombre = "Lucas";
    let edad = 19;
    let activo = true;
    document.getElementById("tipo-output").innerText =
        `Nombre: ${nombre} (string)\nEdad: ${edad} (number)\nActivo: ${activo} (boolean)`;
}

// Condicionales y Estructuras de Control
function evaluarCondicion() {
    let edad = 18;
    let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    document.getElementById("flujo-output").innerText = mensaje;
}

function ejecutarSwitch() {
    let dia = "lunes";
    let mensaje;
    switch (dia) {
        case "lunes": mensaje = "Inicio de semana"; break;
        case "viernes": mensaje = "Fin de semana cercano"; break;
        default: mensaje = "Día normal";
    }
    document.getElementById("flujo-output").innerText = mensaje;
}

// Bucles
function ejecutarBucles() {
    let texto = "";
    for (let i = 0; i < 3; i++) {
        texto += `Iteración ${i}\n`;
    }
    document.getElementById("bucles-output").innerText = texto;
}

// Funciones
function mostrarFuncion() {
    function saludo(nombre) {
        return `Hola, ${nombre}!`;
    }
    document.getElementById("funciones-output").innerText = saludo("Lucas");
}

// Arrays y Métodos
function ejecutarArray() {
    let numeros = [1, 2, 3];
    numeros.push(4);
    let filtrado = numeros.filter(n => n > 2);
    document.getElementById("arrays-output").innerText = `Array modificado: ${filtrado}`;
}

// Objetos y JSON
function mostrarObjeto() {
    let persona = { nombre: "Lucas", edad: 19, activo: true };
    document.getElementById("objetos-output").innerText = JSON.stringify(persona, null, 2);
}

// Manipulación del DOM
function cambiarDOM() {
    document.getElementById("dom-output").innerText = "Texto cambiado dinámicamente";
}

// Promesas y Asincronía
function ejecutarPromesa() {
    let promesa = new Promise((resolve) => {
        setTimeout(() => resolve("Promesa resuelta tras 2 segundos"), 2000);
    });

    promesa.then((mensaje) => {
        document.getElementById("asincronia-output").innerText = mensaje;
    });
}
