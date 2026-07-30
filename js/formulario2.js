function validarFormulario() {
    event.preventDefault();

    let nombre = document.getElementById('inputNombre');
    let correo = document.getElementById('inputCorreo');
    let telefono = document.getElementById('inputTelefono');
    let fechaNacimiento = document.getElementById('inputFechaNacimiento');
    let rut = document.getElementById('inputRut');
    let genero = document.getElementById('selectGenero');
    let contrasena = document.getElementById('inputContrasena');
    let repetirContrasena = document.getElementById('inputRepetirContrasena');
    let mensajeError = ''

    if (nombre.value == '') {
        mensajeError = mensajeError + 'El campo NOMBRE es obligatorio \n'
        nombre.classList.add('elementoInvalido');
    } else {
        nombre.classList.remove('elementoInvalido');
    }

    if (mensajeError == '') { 
        alert('Formulario Correcto, enviando datos al servidor...')
    } else { 
        alert(mensajeError); 
    }

};
