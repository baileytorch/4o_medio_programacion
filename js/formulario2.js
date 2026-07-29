alert("Cargando un script desde un archivo externo...");

let nombre = document.getElementById('inputNombre');
alert(nombre);

function cambiarFondo(){
    event.preventDefault();
    document.body.style.backgroundColor = '#D8F999';
};

function cargarAlerta(){
    alert('Cambiando el contenido del elemento HTML!');
}