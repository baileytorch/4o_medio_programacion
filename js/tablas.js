function cargarDatos(){
    alert('Cargando datos...')
    try{
        const respuesta = fetch('https://jsonplaceholder.typicode.com/users');
        const datos = respuesta.json();
        console.log(datos);
    }catch(error){
        alert('No se han podido obtener los datos...', error);
    }
};