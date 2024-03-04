function mostrarFormulario(tipo) {
        var formularioContainer = document.getElementById('formularioContainer');
        formularioContainer.innerHTML = ''; 
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                formularioContainer.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', '../html/formulario.html', true);
        xhr.send();
        document.getElementById('tipoSubsidio').value = tipo;
    }