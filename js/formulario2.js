window.onload = function () {
    let alertaNombre = document.getElementById('alertaNombre');
    let alertaEmail = document.getElementById('alertaEmail');
    let alertaTelefono = document.getElementById('alertaTelefono');
    let alertaFechaNacimiento = document.getElementById('alertaFechaNacimiento');
    let alertaRut = document.getElementById('alertaRut');
    let alertaGenero = document.getElementById('alertaGenero');
    let alertaContrasena = document.getElementById('alertaContrasena');
    let alertaRepetirContrasena = document.getElementById('alertaRepetirContrasena');


    alertaNombre.style.display = 'none';
    alertaEmail.style.display = 'none';
    alertaTelefono.style.display = 'none';
    alertaFechaNacimiento.style.display = 'none';
    alertaRut.style.display = 'none';
    alertaGenero.style.display = 'none';
    alertaContrasena.style.display = 'none';
    alertaRepetirContrasena.style.display = 'none';
};

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

    let alertaNombre = document.getElementById('alertaNombre');
    let alertaEmail = document.getElementById('alertaEmail');
    let alertaTelefono = document.getElementById('alertaTelefono');
    let alertaFechaNacimiento = document.getElementById('alertaFechaNacimiento');
    let alertaRut = document.getElementById('alertaRut');
    let alertaGenero = document.getElementById('alertaGenero');
    let alertaContrasena = document.getElementById('alertaContrasena');
    let alertaRepetirContrasena = document.getElementById('alertaRepetirContrasena');

    let mensajeError = ''

    if (nombre.value == '') {
        mensajeError = mensajeError + 'El campo NOMBRE es obligatorio \n'
        nombre.classList.add('elementoInvalido');
        alertaNombre.style.display = 'block';
    } else {
        nombre.classList.remove('elementoInvalido');
        alertaNombre.style.display = 'none';
    }
    if (correo.value == '') {
        mensajeError = mensajeError + 'El campo CORREO es obligatorio \n'
        correo.classList.add('elementoInvalido');
        alertaEmail.style.display = 'block';
    } else {
        correo.classList.remove('elementoInvalido');
        alertaEmail.style.display = 'none';
    }
    if (telefono.value == '') {
        mensajeError = mensajeError + 'El campo TELÉFONO es obligatorio \n'
        telefono.classList.add('elementoInvalido');
        alertaTelefono.style.display = 'block';
    } else {
        telefono.classList.remove('elementoInvalido');
        alertaTelefono.style.display = 'none';
    }
    if (fechaNacimiento.value == '') {
        mensajeError = mensajeError + 'El campo FECHA NACIMIENTO es obligatorio \n'
        fechaNacimiento.classList.add('elementoInvalido');
        alertaFechaNacimiento.style.display = 'block';
    } else {
        fechaNacimiento.classList.remove('elementoInvalido');
        alertaFechaNacimiento.style.display = 'none';
    }
    if (rut.value == '') {
        mensajeError = mensajeError + 'El campo RUT es obligatorio \n'
        rut.classList.add('elementoInvalido');
        alertaRut.style.display = 'block';
    } else {
        rut.classList.remove('elementoInvalido');
        alertaRut.style.display = 'none';
    }
    if (genero.value == '') {
        mensajeError = mensajeError + 'El campo GÉNERO es obligatorio \n'
        genero.classList.add('elementoInvalido');
        alertaGenero.style.display = 'block';
    } else {
        genero.classList.remove('elementoInvalido');
        alertaGenero.style.display = 'none';
    }
    if (contrasena.value == '') {
        mensajeError = mensajeError + 'El campo CONTRASEÑA es obligatorio \n'
        contrasena.classList.add('elementoInvalido');
        alertaContrasena.style.display = 'block';
    } else {
        contrasena.classList.remove('elementoInvalido');
        alertaContrasena.style.display = 'none';
    }
    if (repetirContrasena.value == '') {
        mensajeError = mensajeError + 'El campo REPETIR CONTRASEÑA es obligatorio \n'
        repetirContrasena.classList.add('elementoInvalido');
        alertaRepetirContrasena.style.display = 'block';
    } else {
        repetirContrasena.classList.remove('elementoInvalido');
        alertaRepetirContrasena.style.display = 'none';
    }

    if (mensajeError == '') {
        alert('Formulario Correcto, enviando datos al servidor...')
    } else {
        alert(mensajeError);
    }

};
