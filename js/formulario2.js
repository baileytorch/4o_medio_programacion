function validarFormulario(){
    event.preventDefault();
    
    let nombre = document.getElementById('inputNombre');
    let correo = document.getElementById('inputCorreo');
    let telefono = document.getElementById('inputTelefono');
    let fechaNacimiento = document.getElementById('inputFechaNacimiento');
    let rut = document.getElementById('inputRut');
    let genero = document.getElementById('selectGenero');
    let contrasena = document.getElementById('inputContrasena');
    let repetirContrasena = document.getElementById('inputRepetirContrasena');

    if(nombre.value == ''){
        alert('El campo NOMBRE es obligatorio');
        nombre.classList.add('elementoInvalido');
    }else{
        alert('Nombre ingresado!');
        nombre.classList.remove('elementoInvalido');
    }
};
