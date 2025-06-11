function updateTime() {
    // Configura la zona horaria de Montería, Colombia
    const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formatter = new Intl.DateTimeFormat('es-CO', options);
    const currentTime = formatter.format(new Date());
    
    document.getElementById('time').textContent = currentTime;
}

// Actualiza la hora cada segundo
setInterval(updateTime, 1000);
updateTime();