document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idSubsidio = urlParams.get('idSubsidio');
    const detallesSubsidio = {
        id: idSubsidio,
        nombre: 'Subsidio Detalle',
        descripcion: 'Descripción detallada del Subsidio Detalle',
        requisitos: ['Requisito 1', 'Requisito 2', 'Requisito 3'],
    };

    function mostrarDetallesSubsidio(detalles) {
        const detallesContainer = document.getElementById('detalles-subsidio');
        detallesContainer.innerHTML = `
            <h2>${detalles.nombre}</h2>
            <p>${detalles.descripcion}</p>
            <h3>Requisitos:</h3>
            <ul>
                ${detalles.requisitos.map(requisito => `<li>${requisito}</li>`).join('')}
            </ul>
        `;
    }

    mostrarDetallesSubsidio(detallesSubsidio);
});
