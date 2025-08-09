document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Obtener datos
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();

        // Formar mensaje para WhatsApp (url encode)
        const mensaje = `*Reserva de Cita MomoNails*%0A` +
            `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
            `*Apellido:* ${encodeURIComponent(apellido)}%0A` +
            `*Correo:* ${encodeURIComponent(correo)}%0A` +
            `*Teléfono:* ${encodeURIComponent(telefono)}%0A` +
            `*Descripción de Uñas:* ${encodeURIComponent(descripcion)}`;

        // Número destino con código país sin signos (Perú +51)
        const telefonoWhatsApp = '51936693095';

        // URL para abrir WhatsApp con mensaje
        const url = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;

        // Abrir en nueva pestaña para que usuario confirme
        window.open(url, '_blank');

        // Opcional: mostrar mensaje de éxito o resetear form
        form.reset();
        form.classList.remove('was-validated');
        alert('Se abrió WhatsApp para enviar tu reserva. ¡Gracias!');
    });
});
