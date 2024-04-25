document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el enlace "Inicio" en la barra de navegación
    var inicioLink = document.querySelector('header nav ul li:first-child a');

    // Verificar si el enlace "Inicio" se encontró correctamente
    if (inicioLink) {
        // Agregar un evento de clic al enlace "Inicio"
        inicioLink.addEventListener("click", function(event) {
            // Evitar el comportamiento predeterminado del enlace
            event.preventDefault();
            // Redirigir al usuario a la página de inicio
            window.location.href = "index.html";
        });
    }
});
