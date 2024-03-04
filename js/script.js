function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

var seleccionOpcion = document.getElementById('seleccionOpcion');
var detallesOpcion = document.getElementById('detallesOpcion');
seleccionOpcion.addEventListener('change', function () {
    var opcionSeleccionada = this.value;
    detallesOpcion.innerHTML = '';

    switch (opcionSeleccionada) {
        case 'subsidios':
            mostrarDetalles('Subsidios', ['IdSubsidio: Entero', 'Descripción: String', 'Oficina Solicitante: Oficina (Clave Foránea de Oficinas)', 'Fecha de Alta: Fecha', 'Año: Entero', 'Mes: Entero', 'Estado: String (Valores posibles: ‘AC’ (Activo), ‘BA’ (Baja))']);
            break;
        case 'oficinas':
            mostrarDetalles('Oficinas', ['IdOficina: Entero', 'Descripción: String']);
            break;
        case 'subsidiosDetalle':
            mostrarDetalles('Subsidios Detalle', ['IdSubsidioDetalle: Entero', 'IdSubsidio: Entero (Clave foránea de Subsidios)', 'IdBeneficiario: Entero (Clave foránea de Beneficiarios)', 'Importe: Decimal', 'Estado: String']);
            break;
        case 'beneficiarios':
            mostrarDetalles('Beneficiarios', ['IdBeneficiario: Entero', 'Tipo de Documento: String', 'Número de Documento: String', 'Apellido: String', 'Nombre: String']);
            break;
        default:
            detallesOpcion.innerHTML = 'Por favor, selecciona una opción.';
    }
});

function mostrarDetalles(titulo, detalles) {
    detallesOpcion.innerHTML = '';
    var tituloElemento = document.createElement('h3');
    tituloElemento.textContent = titulo;
    detallesOpcion.appendChild(tituloElemento);
    detalles.forEach(detalle => {
        var detalleElemento = document.createElement('p');
        detalleElemento.textContent = detalle;
        detallesOpcion.appendChild(detalleElemento);
    });
}

function navegarA(campo) {
    var paginas = {
        'subsidios': 'subsidios.html',
        'oficinas': 'oficinas.html',
        'subsidiosDetalle': 'subsidiosDetalle.html',
        'beneficiarios': 'beneficiarios.html'
    };

    if (paginas[campo]) {
        window.location.href = paginas[campo];
    } else {
        console.log('Campo no reconocido');
    }
}
