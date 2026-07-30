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

    if (nombre.value == '') {
        nombre.classList.add('elementoInvalido');
        alertaNombre.style.display = 'block';
        alertaNombre.textContent = 'El campo NOMBRE es obligatorio';
    } else {
        nombre.classList.remove('elementoInvalido');
        alertaNombre.style.display = 'none';
    }
    if (correo.value == '') {
        correo.classList.add('elementoInvalido');
        alertaEmail.style.display = 'block';
        alertaEmail.textContent = 'El campo CORREO es obligatorio'
    } else {
        correo.classList.remove('elementoInvalido');
        alertaEmail.style.display = 'none';
    }
    if (telefono.value == '') {
        telefono.classList.add('elementoInvalido');
        alertaTelefono.style.display = 'block';
        alertaTelefono.textContent = 'El campo TELÉFONO es obligatorio'
    } else {
        telefono.classList.remove('elementoInvalido');
        alertaTelefono.style.display = 'none';
    }
    if (fechaNacimiento.value == '') {
        fechaNacimiento.classList.add('elementoInvalido');
        alertaFechaNacimiento.style.display = 'block';
        alertaFechaNacimiento.textContent = 'El campo FECHA NACIMIENTO es obligatorio'
    } else {
        fechaNacimiento.classList.remove('elementoInvalido');
        alertaFechaNacimiento.style.display = 'none';
    }
    if (rut.value == '') {
        rut.classList.add('elementoInvalido');
        alertaRut.style.display = 'block';
        alertaRut.textContent = 'El campo RUT es obligatorio'
    } else {
        rut.classList.remove('elementoInvalido');
        alertaRut.style.display = 'none';
    }
    if (genero.value == '') {
        genero.classList.add('elementoInvalido');
        alertaGenero.style.display = 'block';
        alertaGenero.textContent = 'El campo GÉNERO es obligatorio'
    } else {
        genero.classList.remove('elementoInvalido');
        alertaGenero.style.display = 'none';
    }
    if (contrasena.value == '') {
        contrasena.classList.add('elementoInvalido');
        alertaContrasena.style.display = 'block';
        alertaContrasena.textContent = 'El campo CONTRASEÑA es obligatorio'
    } else {
        contrasena.classList.remove('elementoInvalido');
        alertaContrasena.style.display = 'none';
    }
    if (repetirContrasena.value == '') {
        repetirContrasena.classList.add('elementoInvalido');
        alertaRepetirContrasena.style.display = 'block';
        alertaRepetirContrasena.textContent = 'El campo REPETIR CONTRASEÑA es obligatorio'
    } else {
        repetirContrasena.classList.remove('elementoInvalido');
        alertaRepetirContrasena.style.display = 'none';
    }
};
